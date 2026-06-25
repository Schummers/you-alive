import type { Metadata } from "next";
import { designs, designSlugs } from "@/designs/registry";
import type { DesignModule } from "@/designs/types";
import LikeButton from "./LikeButton";
import TrashButton from "./TrashButton";
import MarksBar from "./MarksBar";

// Internal design gallery — never indexed, never reachable from ads/users.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

// Static-screenshot gallery for the design bake-off. Thumbnails are pre-rendered
// 390px screenshots in /public/gallery/<slug>.jpg (regenerate with the Playwright
// capture script). Grouped by variant -> tool -> mode so you can see at a glance
// which ad (A/B/C), which generator (fd/taste/stitch), and what was varied.

const VARIANTS: { key: "a" | "b" | "c"; title: string }[] = [
  { key: "a", title: "Variant A · Editorial / Nature" },
  { key: "b", title: "Variant B · Soft / Wellness" },
  { key: "c", title: "Variant C · Retro / Forest" },
];

const TOOL_LABEL: Record<string, string> = {
  manual: "Manuel — travaillé à la main",
  base: "Original (frontend-design)",
  fd: "frontend-design",
  taste: "taste-skill",
  stitch: "Stitch",
};

const MODE_LABEL: Record<string, string> = {
  free: "Libre — contenu + image seulement, aucune direction",
  guided: "Guidé — mood + palette verrouillés + un axe par itération",
};

function Card({ d }: { d: DesignModule }) {
  return (
    <figure className="flex w-[200px] shrink-0 flex-col gap-2">
      <a
        href={`/preview/${d.slug}`}
        target="_blank"
        rel="noreferrer"
        className="group relative block h-[360px] w-[200px] overflow-hidden rounded-xl border border-gray-200 bg-gray-50 shadow-sm transition hover:shadow-md"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/gallery/${d.slug}.jpg`}
          alt={d.label}
          className="h-full w-full object-cover object-top"
          loading="lazy"
        />
        <span className="absolute right-2 top-2 rounded-full bg-black/70 px-2 py-0.5 text-[10px] font-medium text-white opacity-0 transition group-hover:opacity-100">
          open ↗
        </span>
      </a>

      <figcaption className="flex flex-col gap-1">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[13px] font-semibold text-gray-800">
            {d.label}
          </span>
          <div className="flex items-center gap-1.5">
            {d.mode && (
              <span
                className={`rounded px-1.5 py-0.5 text-[9px] font-medium uppercase tracking-wide ${
                  d.mode === "free"
                    ? "bg-amber-100 text-amber-800"
                    : "bg-emerald-100 text-emerald-800"
                }`}
              >
                {d.mode}
              </span>
            )}
            <LikeButton slug={d.slug} />
            <TrashButton slug={d.slug} />
          </div>
        </div>
        {d.note && (
          <p className="text-[11px] leading-snug text-gray-500">{d.note}</p>
        )}
        {d.tags && d.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 pt-0.5">
            {d.tags.map((t) => (
              <span
                key={t}
                className="rounded bg-gray-100 px-1.5 py-0.5 text-[10px] text-gray-600"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </figcaption>
    </figure>
  );
}

function ToolGroup({ items }: { items: DesignModule[] }) {
  const tool = items[0]?.tool ?? "base";
  // Split by mode (free / guided), preserving registry order.
  const byMode = new Map<string, DesignModule[]>();
  for (const d of items) {
    const m = d.mode ?? "_";
    if (!byMode.has(m)) byMode.set(m, []);
    byMode.get(m)!.push(d);
  }

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-sm font-semibold text-gray-700">
        {TOOL_LABEL[tool] ?? tool}
        <span className="ml-2 font-normal text-gray-400">
          {items.length} itération{items.length > 1 ? "s" : ""}
        </span>
      </h3>

      {[...byMode.entries()].map(([mode, group]) => (
        <div key={mode} className="flex flex-col gap-2">
          {MODE_LABEL[mode] && (
            <p className="text-xs text-gray-400">{MODE_LABEL[mode]}</p>
          )}
          <div className="flex flex-wrap gap-5">
            {group.map((d) => (
              <Card key={d.slug} d={d} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function GalleryPage() {
  // Group designs by variant, then by tool (registry order preserved).
  const byVariant = new Map<string, DesignModule[]>();
  for (const d of designs) {
    const v = d.variant ?? "a";
    if (!byVariant.has(v)) byVariant.set(v, []);
    byVariant.get(v)!.push(d);
  }

  return (
    <div className="min-h-screen bg-[#faf9f7] text-gray-900">
    <main className="mx-auto max-w-[1400px] px-6 py-10">
      <MarksBar validSlugs={designSlugs} />
      <header className="mb-10">
        <h1 className="text-2xl font-semibold text-gray-900">
          You Alive — design bake-off
        </h1>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          {designs.length} designs · même contenu figé · vignettes statiques
          390px. Groupé par variant, puis par outil, puis par mode de génération.
          Clique une vignette pour ouvrir le rendu live.
        </p>
      </header>

      <div className="flex flex-col gap-14">
        {VARIANTS.map(({ key, title }) => {
          const items = byVariant.get(key);
          if (!items || items.length === 0) return null;

          // Sub-group by tool, registry order.
          const byTool = new Map<string, DesignModule[]>();
          for (const d of items) {
            const t = d.tool ?? "base";
            if (!byTool.has(t)) byTool.set(t, []);
            byTool.get(t)!.push(d);
          }

          return (
            <section key={key} className="flex flex-col gap-6">
              <div className="border-b border-gray-200 pb-2">
                <h2 className="text-lg font-bold text-gray-900">{title}</h2>
              </div>
              <div className="flex flex-col gap-10">
                {[...byTool.entries()].map(([tool, group]) => (
                  <ToolGroup key={tool} items={group} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </main>
    </div>
  );
}
