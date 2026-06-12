import { NextRequest, NextResponse } from "next/server";
import { Client } from "@notionhq/client";
import { PostHog } from "posthog-node";

// Stores a captured email in Notion (source of truth) and mirrors the
// conversion to PostHog server-side (so ad blockers can't drop the signal).
//
// Expected Notion DB properties:
//   - "Email"   (title)
//   - "Variant" (rich_text or select)
//   - "Source"  (rich_text, optional)
export async function POST(req: NextRequest) {
  let body: { email?: string; variant?: string };
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

  const token = process.env.NOTION_TOKEN;
  const databaseId = process.env.NOTION_DATABASE_ID;

  // Spike-friendly: if Notion isn't configured yet, accept the lead so the
  // funnel still works end-to-end. Replace with a hard 500 once keys are set.
  if (token && databaseId) {
    try {
      const notion = new Client({ auth: token });
      await notion.pages.create({
        parent: { database_id: databaseId },
        properties: {
          Email: { title: [{ text: { content: email } }] },
          Variant: { rich_text: [{ text: { content: variant } }] },
        },
      });
    } catch (err) {
      console.error("Notion write failed:", err);
      return NextResponse.json({ error: "storage failed" }, { status: 502 });
    }
  } else {
    console.warn("NOTION_TOKEN / NOTION_DATABASE_ID not set — lead not persisted:", email);
  }

  // Server-side PostHog mirror (best-effort).
  const phKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  if (phKey) {
    try {
      const ph = new PostHog(phKey, {
        host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://eu.i.posthog.com",
      });
      ph.capture({ distinctId: email, event: "email_submit_server", properties: { variant } });
      await ph.shutdown();
    } catch (err) {
      console.error("PostHog server capture failed:", err);
    }
  }

  return NextResponse.json({ ok: true });
}
