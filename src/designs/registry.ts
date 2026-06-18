import type { DesignModule } from "@/designs/types";
import EditorialNatureDesign from "@/designs/a";
import SoftWellnessDesign from "@/designs/b";
import RetroForestDesign from "@/designs/c";

// Variant-A bake-off iterations, generated with the frontend-design skill.
import AFd01 from "@/designs/a-fd-01";
import AFd02 from "@/designs/a-fd-02";
import AFd03 from "@/designs/a-fd-03";
import AFd04 from "@/designs/a-fd-04";
import AFd05 from "@/designs/a-fd-05";
import AFd06 from "@/designs/a-fd-06";
import AFd07 from "@/designs/a-fd-07";
import AFd08 from "@/designs/a-fd-08";
import AFd09 from "@/designs/a-fd-09";
import AFd10 from "@/designs/a-fd-10";
import AFd11 from "@/designs/a-fd-11";
import AFd12 from "@/designs/a-fd-12";
import AFd13 from "@/designs/a-fd-13";
import AFd14 from "@/designs/a-fd-14";
import AFd15 from "@/designs/a-fd-15";
import AFd16 from "@/designs/a-fd-16";

// One design per ad. Slug = url segment (/preview/a, /preview/b, /preview/c).
// Each design renders the FIXED content from src/content/site.ts; only the
// visual treatment changes, channeling its reference ad.
const baseDesigns: DesignModule[] = [
  {
    slug: "a",
    label: "A · Editorial / Nature",
    ad: "image1",
    variant: "a",
    note: "Magazine serif on cream, hammock photo hero, contemplative.",
    Component: EditorialNatureDesign,
  },
  {
    slug: "b",
    label: "B · Soft / Wellness",
    ad: "image2",
    variant: "b",
    note: "Lavender mesh gradient, navy serif, airy and tender.",
    Component: SoftWellnessDesign,
  },
  {
    slug: "c",
    label: "C · Retro / Forest",
    ad: "image3",
    variant: "c",
    note: "Deep forest green, electric lime display, offbeat.",
    Component: RetroForestDesign,
  },
];

// Batch 1 — FREE: frontend-design given only content + photo, no palette / mood /
// tone. The 8 converged hard on a "dark vault / sealed ledger" world.
const aFdFree: DesignModule[] = [
  {
    slug: "a-fd-01",
    label: "A · fd · 01",
    ad: "image1",
    variant: "a",
    tool: "fd",
    mode: "free",
    tags: ["dark", "serif", "brass", "starfield"],
    note: "Observatory / night-ledger. Midnight + brass, Bodoni Moda + mono.",
    Component: AFd01,
  },
  {
    slug: "a-fd-02",
    label: "A · fd · 02",
    ad: "image1",
    variant: "a",
    tool: "fd",
    mode: "free",
    tags: ["dark", "serif", "brass", "roman-numerals"],
    note: "Archival twilight / luxe nocturne. Ink-blue + brass, Cormorant + Spectral.",
    Component: AFd02,
  },
  {
    slug: "a-fd-03",
    label: "A · fd · 03",
    ad: "image1",
    variant: "a",
    tool: "fd",
    mode: "free",
    tags: ["dark", "serif", "brass", "ledger"],
    note: "Heirloom ledger. Walnut + brass, Cormorant + Spline Mono.",
    Component: AFd03,
  },
  {
    slug: "a-fd-04",
    label: "A · fd · 04",
    ad: "image1",
    variant: "a",
    tool: "fd",
    mode: "free",
    tags: ["dark", "serif", "brass", "dossier"],
    note: "Dossier / vault-record. Midnight navy + brass, Playfair + mono.",
    Component: AFd04,
  },
  {
    slug: "a-fd-05",
    label: "A · fd · 05",
    ad: "image1",
    variant: "a",
    tool: "fd",
    mode: "free",
    tags: ["dark", "serif", "oxblood", "ledger"],
    note: "Sealed ledger. Vault-night + oxblood, Libre Caslon + IBM Plex Mono.",
    Component: AFd05,
  },
  {
    slug: "a-fd-06",
    label: "A · fd · 06",
    ad: "image1",
    variant: "a",
    tool: "fd",
    mode: "free",
    tags: ["dark", "serif", "brass", "registry"],
    note: "Sealed registry / legal dossier. Bone on slate, Spectral + JetBrains Mono.",
    Component: AFd06,
  },
  {
    slug: "a-fd-07",
    label: "A · fd · 07",
    ad: "image1",
    variant: "a",
    tool: "fd",
    mode: "free",
    tags: ["dark", "serif", "amber", "candlelit"],
    note: "Sealed archive, candlelit. Midnight + amber, Spectral + Archivo.",
    Component: AFd07,
  },
  {
    slug: "a-fd-08",
    label: "A · fd · 08",
    ad: "image1",
    variant: "a",
    tool: "fd",
    mode: "free",
    tags: ["dark", "serif", "amber", "dossier"],
    note: "Archive at dusk. Ink-blue + amber, Libre Caslon + mono.",
    Component: AFd08,
  },
];

// Batch 2 — GUIDED: fixed mood + locked cream/forest/terracotta palette + one
// axis emphasis per iteration; the tone is left to the generator.
const aFdGuided: DesignModule[] = [
  {
    slug: "a-fd-09",
    label: "A · fd · 09",
    ad: "image1",
    variant: "a",
    tool: "fd",
    mode: "guided",
    tags: ["airy", "rounded", "light", "minimal"],
    note: "Very airy + very rounded, light. Newsreader + Hanken Grotesk.",
    brief: "Axis: max whitespace, full-radius, light, serene.",
    Component: AFd09,
  },
  {
    slug: "a-fd-10",
    label: "A · fd · 10",
    ad: "image1",
    variant: "a",
    tool: "fd",
    mode: "guided",
    tags: ["dense", "bento", "sharp", "grid"],
    note: "Dense bento, sharp corners. Spectral + IBM Plex Mono.",
    brief: "Axis: compact density, 0px corners, modular grid.",
    Component: AFd10,
  },
  {
    slug: "a-fd-11",
    label: "A · fd · 11",
    ad: "image1",
    variant: "a",
    tool: "fd",
    mode: "guided",
    tags: ["saturated", "motion", "dark-forest"],
    note: "Intense color + motion, forest-inverted. Bricolage Grotesque + Newsreader.",
    brief: "Axis: high color intensity, high motion.",
    Component: AFd11,
  },
  {
    slug: "a-fd-12",
    label: "A · fd · 12",
    ad: "image1",
    variant: "a",
    tool: "fd",
    mode: "guided",
    tags: ["texture", "depth", "grain", "botanical"],
    note: "Rich texture + depth, pressed-paper. Newsreader + Spectral.",
    brief: "Axis: high depth/texture, grain, gradients, motifs.",
    Component: AFd12,
  },
  {
    slug: "a-fd-13",
    label: "A · fd · 13",
    ad: "image1",
    variant: "a",
    tool: "fd",
    mode: "guided",
    tags: ["typographic", "oversized", "didone"],
    note: "Typography-driven, oversized Didone. Bodoni Moda + Spectral.",
    brief: "Axis: type dominates, dramatic scale contrast, photo secondary.",
    Component: AFd13,
  },
  {
    slug: "a-fd-14",
    label: "A · fd · 14",
    ad: "image1",
    variant: "a",
    tool: "fd",
    mode: "guided",
    tags: ["editorial", "magazine", "drop-cap", "columns"],
    note: "Editorial magazine feature. Playfair Display + Newsreader.",
    brief: "Axis: print layout, multi-column, asymmetry, drop caps.",
    Component: AFd14,
  },
  {
    slug: "a-fd-15",
    label: "A · fd · 15",
    ad: "image1",
    variant: "a",
    tool: "fd",
    mode: "guided",
    tags: ["swiss", "flat", "grid", "minimal"],
    note: "Swiss / International style, flat light grid. Archivo + Newsreader.",
    brief: "Axis: strict grid, small type, max air, fully flat.",
    Component: AFd15,
  },
  {
    slug: "a-fd-16",
    label: "A · fd · 16",
    ad: "image1",
    variant: "a",
    tool: "fd",
    mode: "guided",
    tags: ["organic", "rounded", "gradient", "warm"],
    note: "Organic + warm, blobs + sunset gradients. Fraunces + Nunito Sans.",
    brief: "Axis: curved organic shapes, warm gradient washes.",
    Component: AFd16,
  },
];

export const designs: DesignModule[] = [
  ...baseDesigns,
  ...aFdFree,
  ...aFdGuided,
];

export const designMap: Record<string, DesignModule> = Object.fromEntries(
  designs.map((d) => [d.slug, d])
);

export const designSlugs = designs.map((d) => d.slug);
