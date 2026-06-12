import { NextRequest, NextResponse } from "next/server";
import { Client } from "@notionhq/client";
import { getPostHogClient } from "@/lib/posthog-server";

// Stores a captured email in Notion (source of truth) and mirrors the
// conversion to PostHog server-side (so ad blockers can't drop the signal).
//
// Expected Notion DB properties:
//   - "Email"   (title)
//   - "Variant" (rich_text or select)
//   - "Source"  (rich_text, optional)
type WaitlistBody = {
  email?: string;
  variant?: string;
  positioning?: string;
  utm_source?: string;
  utm_campaign?: string;
  utm_content?: string;
  fbclid?: string;
  posthog_id?: string;
};

export async function POST(req: NextRequest) {
  let body: WaitlistBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "bad request" }, { status: 400 });
  }

  const email = body.email?.trim();
  const variant = body.variant ?? "unknown";
  if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json({ error: "invalid email" }, { status: 400 });
  }

  // Country from Vercel's geo header (helps segment / exclude own traffic).
  const country = req.headers.get("x-vercel-ip-country") ?? undefined;

  // Only set Notion props that have a value (avoids empty selects/text).
  const richText = (value?: string) =>
    value ? { rich_text: [{ text: { content: value } }] } : undefined;
  const select = (value?: string) => (value ? { select: { name: value } } : undefined);

  const token = process.env.NOTION_TOKEN;
  const databaseId = process.env.NOTION_DATABASE_ID;

  // Spike-friendly: if Notion isn't configured yet, accept the lead so the
  // funnel still works end-to-end. Replace with a hard 500 once keys are set.
  if (token && databaseId) {
    try {
      const notion = new Client({ auth: token });
      const properties: Record<string, unknown> = {
        Email: { title: [{ text: { content: email } }] },
        Project: { select: { name: "You Alive" } },
        "Submitted at": { date: { start: new Date().toISOString() } },
      };
      const optional: Record<string, unknown> = {
        Variant: select(variant),
        Positioning: select(body.positioning),
        "UTM Source": richText(body.utm_source),
        "UTM Campaign": richText(body.utm_campaign),
        "UTM Content": richText(body.utm_content),
        fbclid: richText(body.fbclid),
        "PostHog ID": richText(body.posthog_id),
        Country: richText(country),
      };
      for (const [key, val] of Object.entries(optional)) {
        if (val !== undefined) properties[key] = val;
      }
      await notion.pages.create({
        parent: { database_id: databaseId },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        properties: properties as any,
      });
    } catch (err) {
      console.error("Notion write failed:", err);
      const ph = getPostHogClient();
      ph.capture({
        distinctId: email,
        event: "waitlist_server_error",
        properties: { variant, error_message: err instanceof Error ? err.message : String(err) },
      });
      return NextResponse.json({ error: "storage failed" }, { status: 502 });
    }
  } else {
    console.warn("NOTION_TOKEN / NOTION_DATABASE_ID not set — lead not persisted:", email);
  }

  // Server-side PostHog mirror (best-effort — bypasses ad blockers).
  try {
    const ph = getPostHogClient();
    ph.capture({ distinctId: email, event: "email_submit_server", properties: { variant } });
  } catch (err) {
    console.error("PostHog server capture failed:", err);
  }

  return NextResponse.json({ ok: true });
}
