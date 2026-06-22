import type { DesignModule } from "@/designs/types";
import EditorialNatureDesign from "@/designs/a";
import SoftWellnessDesign from "@/designs/b";
import RetroForestDesign from "@/designs/c";

// Variant-A bake-off iterations (guided), generated with the frontend-design skill.
// Manual designs — worked by hand with Jonathan, built on the a-taste-08 body.
import AManual01 from "@/designs/a-manual-01";
import AManual02 from "@/designs/a-manual-02";
import AManual03 from "@/designs/a-manual-03";
import CManual01 from "@/designs/c-manual-01";

// Variant-B manual track — single-background family (one lavender field, no bands;
// cards only on pricing + final CTA). Five hand-built directions.
import BManual01 from "@/designs/b-manual-01";
import BManual02 from "@/designs/b-manual-02";
import BManual03 from "@/designs/b-manual-03";
import CManual02 from "@/designs/c-manual-02";

import AFd09 from "@/designs/a-fd-09";
import AFd16 from "@/designs/a-fd-16";

// Variant-A taste-skill iterations (3 Dials + style sub-skill, guided).
import ATaste01 from "@/designs/a-taste-01";
import ATaste08 from "@/designs/a-taste-08";

// Variant-A taste-skill round 2 — WITH the clean (text-free) hero photo, free to crop/overlay.
import ATaste09 from "@/designs/a-taste-09";
import ATaste11 from "@/designs/a-taste-11";
import ATaste16 from "@/designs/a-taste-16";

// Variant-B guided iterations (Soft / Wellness).
import BFd04 from "@/designs/b-fd-04";
import BFd05 from "@/designs/b-fd-05";
import BFd06 from "@/designs/b-fd-06";

// Variant-C guided iterations (Retro / Forest).
import CFd01 from "@/designs/c-fd-01";
import CFd04 from "@/designs/c-fd-04";

// Round 2 — no-photo guided: ad = moodboard only, hero = text+CSS (or clean photo for A).
import AFd17 from "@/designs/a-fd-17";
import BFd09 from "@/designs/b-fd-09";
import BFd12 from "@/designs/b-fd-12";
import CFd12 from "@/designs/c-fd-12";

// Variant-B taste-skill iterations (3 Dials + style sub-skill, guided, no ad photo).
import BTaste01 from "@/designs/b-taste-01";
import BTaste05 from "@/designs/b-taste-05";
import BTaste06 from "@/designs/b-taste-06";

// Variant-C taste-skill iterations (3 Dials + style sub-skill, guided, no ad photo).
import CTaste01 from "@/designs/c-taste-01";
import CTaste03 from "@/designs/c-taste-03";
import CTaste04 from "@/designs/c-taste-04";
import CTaste05 from "@/designs/c-taste-05";

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

// Batch 2 — GUIDED: fixed mood + locked cream/forest/terracotta palette + one
// axis emphasis per iteration; the tone is left to the generator.
// (Batch 1 — the 8 "free / no-direction" fd iterations — was removed: it converged
// hard on a generic "dark vault / sealed ledger" look and was dropped.)
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

// Variant A — taste-skill GUIDED: locked cream/forest/terracotta palette + the
// same contemplative mood, one axis per iteration, parametrized by taste-skill's
// 3 Dials (DESIGN_VARIANCE / MOTION_INTENSITY / VISUAL_DENSITY) + a style sub-skill.
const aTasteGuided: DesignModule[] = [
  {
    slug: "a-taste-01",
    label: "A · taste · 01",
    ad: "image1",
    variant: "a",
    tool: "taste",
    mode: "guided",
    tags: ["airy", "rounded", "minimal", "serif"],
    note: "Airy + rounded minimal, left-aligned editorial. Spectral + Mona Sans.",
    brief: "Dials 4/2/2 · minimalist-ui · max whitespace, full-radius, light.",
    Component: ATaste01,
  },
  {
    slug: "a-taste-08",
    label: "A · taste · 08",
    ad: "image1",
    variant: "a",
    tool: "taste",
    mode: "guided",
    tags: ["organic", "rounded", "blob", "gradient"],
    note: "Organic warmth, soft blobs + gradient washes. Fraunces + Quicksand.",
    brief: "Dials 7/5/3 · high-end-visual-design · curved organic shapes.",
    Component: ATaste08,
  },
];

// Variant A — taste-skill ROUND 2: same locked cream/forest/terracotta palette +
// contemplative mood + 8-axis Dials/style mapping, but built around the CLEAN
// (text-free) hero photo `/designs/a/hero-clean.jpeg` — free to crop/overlay/treat.
const aTaste2Guided: DesignModule[] = [
  {
    slug: "a-taste-09",
    label: "A · taste · 09",
    ad: "image1",
    variant: "a",
    tool: "taste",
    mode: "guided",
    tags: ["airy", "rounded", "minimal", "photo"],
    note: "Airy + rounded, scrimmed photo hero. Fraunces + Hanken Grotesk.",
    brief: "Dials 4/2/2 · minimalist-ui · max whitespace, full-radius, clean photo.",
    Component: ATaste09,
  },
  {
    slug: "a-taste-11",
    label: "A · taste · 11",
    ad: "image1",
    variant: "a",
    tool: "taste",
    mode: "guided",
    tags: ["color", "motion", "duotone", "terracotta"],
    note: "Intense terracotta + ken-burns photo wash. Fraunces + Hanken Grotesk.",
    brief: "Dials 8/8/4 · high-end-visual-design · intense color + motion.",
    Component: ATaste11,
  },
  {
    slug: "a-taste-16",
    label: "A · taste · 16",
    ad: "image1",
    variant: "a",
    tool: "taste",
    mode: "guided",
    tags: ["organic", "rounded", "blob", "arch"],
    note: "Organic warmth, arch/blob-masked photo. Fraunces + Figtree.",
    brief: "Dials 7/5/3 · high-end-visual-design · curved organic shapes.",
    Component: ATaste16,
  },
];

// Variant B — GUIDED: locked lavender→periwinkle palette + airy/tender mood,
// one axis per iteration; tone left to the generator. Hero photo already carries
// the "You Alive?" wordmark, so designs render hero.title as H1 instead of duplicating it.
const bFdGuided: DesignModule[] = [
  {
    slug: "b-fd-04",
    label: "B · fd · 04",
    ad: "image2",
    variant: "b",
    tool: "fd",
    mode: "guided",
    tags: ["texture", "depth", "grain", "glow"],
    note: "Rich texture + depth, frosted glass + grain. Fraunces + Mulish.",
    brief: "Axis: high depth/texture, grain, gradients, motifs.",
    Component: BFd04,
  },
  {
    slug: "b-fd-05",
    label: "B · fd · 05",
    ad: "image2",
    variant: "b",
    tool: "fd",
    mode: "guided",
    tags: ["typographic", "oversized"],
    note: "Typography-driven, dramatic scale. Fraunces + Manrope.",
    brief: "Axis: type dominates, dramatic scale contrast, photo secondary.",
    Component: BFd05,
  },
  {
    slug: "b-fd-06",
    label: "B · fd · 06",
    ad: "image2",
    variant: "b",
    tool: "fd",
    mode: "guided",
    tags: ["editorial", "magazine", "drop-cap", "columns"],
    note: "Editorial magazine feature, hairline rules + drop cap. Fraunces + Spectral.",
    brief: "Axis: print layout, multi-column, asymmetry, drop caps.",
    Component: BFd06,
  },
];

// Variant B — taste-skill GUIDED: locked indigo/soft-purple/lavender-periwinkle
// palette + airy-tender-dreamy-luminous mood, one axis per iteration via taste-skill's
// 3 Dials + a style sub-skill. NO ad photo: hero is text-led, brand via CSS mesh/typo.
const bTasteGuided: DesignModule[] = [
  {
    slug: "b-taste-01",
    label: "B · taste · 01",
    ad: "image2",
    variant: "b",
    tool: "taste",
    mode: "guided",
    tags: ["airy", "rounded", "minimal", "no-photo"],
    note: "Airy + rounded, mesh light field, pillowy cards. Newsreader + Figtree.",
    brief: "Dials 4/2/2 · minimalist-ui · max whitespace, full-radius, luminous.",
    Component: BTaste01,
  },
  {
    slug: "b-taste-05",
    label: "B · taste · 05",
    ad: "image2",
    variant: "b",
    tool: "taste",
    mode: "guided",
    tags: ["typo", "display", "scale", "no-photo"],
    note: "Typo-driven, oversized display, hairline rhythm. Newsreader + Mona Sans.",
    brief: "Dials 8/4/3 · minimalist-ui · type dominates, dramatic scale.",
    Component: BTaste05,
  },
  {
    slug: "b-taste-06",
    label: "B · taste · 06",
    ad: "image2",
    variant: "b",
    tool: "taste",
    mode: "guided",
    tags: ["editorial", "magazine", "drop-cap", "columns"],
    note: "Print feature, drop cap, italic pull-quotes. Newsreader + Archivo.",
    brief: "Dials 8/3/5 · minimalist-ui · multi-column, asymmetry, drop caps.",
    Component: BTaste06,
  },
];

// Variant C — GUIDED: locked forest/lime/cream palette + warm grounded offbeat
// mood, one axis per iteration; tone left to the generator.
const cFdGuided: DesignModule[] = [
  {
    slug: "c-fd-01",
    label: "C · fd · 01",
    ad: "image3",
    variant: "c",
    tool: "fd",
    mode: "guided",
    tags: ["airy", "rounded", "light", "minimal"],
    note: "Very airy + very rounded on cream. Fraunces + Figtree.",
    brief: "Axis: max whitespace, full-radius, light, serene.",
    Component: CFd01,
  },
  {
    slug: "c-fd-04",
    label: "C · fd · 04",
    ad: "image3",
    variant: "c",
    tool: "fd",
    mode: "guided",
    tags: ["texture", "riso", "grain", "botanical"],
    note: "Risograph texture + depth, botanical motifs. Fraunces + Darker Grotesque.",
    brief: "Axis: high depth/texture, grain, gradients, motifs.",
    Component: CFd04,
  },
];

// Variant C — taste-skill GUIDED: locked forest/lime/cream palette + warm-grounded
// mood, one axis per iteration via taste-skill's 3 Dials + a style sub-skill.
// NO ad photo: the ad creative is only a mood/color source; hero is text-led.
const cTasteGuided: DesignModule[] = [
  {
    slug: "c-taste-01",
    label: "C · taste · 01",
    ad: "image3",
    variant: "c",
    tool: "taste",
    mode: "guided",
    tags: ["airy", "rounded", "minimal", "no-photo"],
    note: "Airy + rounded, typographic poster hero. Bricolage Grotesque + Hanken.",
    brief: "Dials 4/2/2 · minimalist-ui · max whitespace, full-radius, light.",
    Component: CTaste01,
  },
  {
    slug: "c-taste-03",
    label: "C · taste · 03",
    ad: "image3",
    variant: "c",
    tool: "taste",
    mode: "guided",
    tags: ["color", "motion", "forest", "lime"],
    note: "Intense lime + CSS motion on forest. Bricolage Grotesque + Space Grotesk.",
    brief: "Dials 8/8/4 · high-end-visual-design · intense color + motion.",
    Component: CTaste03,
  },
  {
    slug: "c-taste-04",
    label: "C · taste · 04",
    ad: "image3",
    variant: "c",
    tool: "taste",
    mode: "guided",
    tags: ["texture", "grain", "depth", "gradient"],
    note: "CSS grain + layered depth, contour motifs. Fraunces + Spline Sans.",
    brief: "Dials 7/5/5 · high-end-visual-design · texture / depth (all CSS).",
    Component: CTaste04,
  },
  {
    slug: "c-taste-05",
    label: "C · taste · 05",
    ad: "image3",
    variant: "c",
    tool: "taste",
    mode: "guided",
    tags: ["typo", "display", "scale", "no-photo"],
    note: "Typo-driven, oversized display, hairline dividers. Bricolage + Newsreader italic.",
    brief: "Dials 8/4/3 · minimalist-ui · type dominates, dramatic scale.",
    Component: CTaste05,
  },
];

// Round 2 — no-photo guided (ad = moodboard only, hero text+CSS or clean photo).
// A: axes 04/06/07/05 with clean hero-clean.jpeg option.
// B/C: same axes, purely text+CSS heroes.
const aFdNoPhoto: DesignModule[] = [
  {
    slug: "a-fd-17",
    label: "A · fd · 17",
    ad: "image1",
    variant: "a",
    tool: "fd",
    mode: "guided",
    tags: ["texture", "depth", "grain", "no-ad-photo"],
    note: "Rich texture + depth, grain + terracotta/sage layers. Fraunces + Karla.",
    brief: "Axis 04: grain, shadows, gradients, pressed-paper material. Ad = moodboard only.",
    Component: AFd17,
  },
];

const bFdNoPhoto: DesignModule[] = [
  {
    slug: "b-fd-09",
    label: "B · fd · 09",
    ad: "image2",
    variant: "b",
    tool: "fd",
    mode: "guided",
    tags: ["texture", "depth", "grain", "no-photo"],
    note: "Layered depth, vellum grain, SVG feTurbulence. Fraunces + Lora.",
    brief: "Axis 04: grain, glow shadows, material surfaces. Pure CSS, no photo.",
    Component: BFd09,
  },
  {
    slug: "b-fd-12",
    label: "B · fd · 12",
    ad: "image2",
    variant: "b",
    tool: "fd",
    mode: "guided",
    tags: ["typographic", "oversized", "display", "no-photo"],
    note: "Oversized Fraunces ghost display, periwinkle gradients. Fraunces + DM Sans.",
    brief: "Axis 05: oversized display, extreme scale contrast. Pure CSS, no photo.",
    Component: BFd12,
  },
];

const cFdNoPhoto: DesignModule[] = [
  {
    slug: "c-fd-12",
    label: "C · fd · 12",
    ad: "image3",
    variant: "c",
    tool: "fd",
    mode: "guided",
    tags: ["typographic", "oversized", "display", "no-photo"],
    note: "Lime-on-forest oversized Fraunces display, DM Mono body. Fraunces + DM Mono.",
    brief: "Axis 05: oversized display, lime/forest drama. Pure CSS, no photo.",
    Component: CFd12,
  },
];

// Manual — the two designs worked by hand with Jonathan. Shown FIRST in the
// gallery, above the generated "Original / fd / taste" groups. Both reuse the
// a-taste-08 body (organic warmth) and differ only in the hero treatment.
const aManual: DesignModule[] = [
  {
    slug: "a-manual-01",
    label: "A · manual · 01 — Hero plein écran",
    ad: "image1",
    variant: "a",
    tool: "manual",
    tags: ["photo", "full-bleed", "organic", "feminine"],
    note: "Photo plein écran, dégradé vers forêt, wordmark You Alive? sur l'image, titre dans la photo, sous-titre + CTA en dessous. Corps a-taste-08. Reveals au scroll.",
    Component: AManual01,
  },
  {
    slug: "a-manual-02",
    label: "A · manual · 02 — Forme organique",
    ad: "image1",
    variant: "a",
    tool: "manual",
    tags: ["organic", "blob", "rounded", "feminine"],
    note: "Hero photo dans une forme organique (blob), corps a-taste-08. Wordmark You Alive?, rien en haut à droite, pas de CTA sticky. Reveals au scroll.",
    Component: AManual02,
  },
  {
    slug: "a-manual-03",
    label: "A · manual · 03 — Hero plein écran + stepper",
    ad: "image1",
    variant: "a",
    tool: "manual",
    tags: ["photo", "full-bleed", "stepper", "timeline"],
    note: "Variante de manual-01 : how-it-works en stepper timeline (numéros terracotta), FAQ en lignes (pas de cards), CTA final centré foncé. Aligné à gauche.",
    Component: AManual03,
  },
];

// Variant C — manual track. Shared RetroForestBase; two cuts of the same layout.
const cManual: DesignModule[] = [
  {
    slug: "c-manual-01",
    label: "C · manual · 01 — Retro Forest",
    ad: "image3",
    variant: "c",
    tool: "manual",
    tags: ["retro", "forest", "lime"],
    note: "Base Retro Forest partagée. Hero blanc + accents lime (48px), bande 'problème' + footer en lime pâle, sections blanches, CTA lime sans contour. Accessible.",
    Component: CManual01,
  },
  {
    slug: "c-manual-02",
    label: "C · manual · 02 — Retro Forest (jaune géant)",
    ad: "image3",
    variant: "c",
    tool: "manual",
    tags: ["retro", "forest", "lime", "display"],
    note: "Même base, version plus typographique : H1 entièrement lime, géant (64px), un mot par ligne (6 lignes), CTA pill, sous-titre réduit, footer forest foncé.",
    Component: CManual02,
  },
];

// Variant B — manual track. One single lavender background across the whole page
// (the B signature, vs the alternating bands of A and C); no cards except pricing
// + final CTA; giant ghost "You Alive?" hero; bi-color/italic titles, no eyebrows.
const bManual: DesignModule[] = [
  {
    slug: "b-manual-01",
    label: "B · manual · 01 — Halo",
    ad: "image2",
    variant: "b",
    tool: "manual",
    tags: ["soft", "lavender", "gradient-fort", "ghost-hero"],
    note: "Gradient lavande FORT, hero ghost You Alive? en blanc, accent de titre subtil (italique SOFT), CTA ink, cards pricing à gradient interne. DM Sans.",
    Component: BManual01,
  },
  {
    slug: "b-manual-02",
    label: "B · manual · 02 — Halo (Newsreader)",
    ad: "image2",
    variant: "b",
    tool: "manual",
    tags: ["soft", "lavender", "newsreader", "no-ghost"],
    note: "Même design que 01 mais police Newsreader + Mona Sans (b-taste-05). Hero SANS ghost, H1 géant sur 4 lignes (44/58px), CTA pill arrondi, accent de titre subtil.",
    Component: BManual02,
  },
  {
    slug: "b-manual-03",
    label: "B · manual · 03 — Scripture",
    ad: "image2",
    variant: "b",
    tool: "manual",
    tags: ["biblique", "drop-caps", "carré", "serif"],
    note: "Biblique (b-fd-06): filets de chapitre, drop-caps, coins carrés, numéros chapitre sur bordure gauche, CTA final carré. Corps Spectral.",
    Component: BManual03,
  },
];

export const designs: DesignModule[] = [
  ...aManual,
  ...bManual,
  ...cManual,
  ...baseDesigns,
  ...aFdGuided,
  ...aFdNoPhoto,
  ...aTasteGuided,
  ...aTaste2Guided,
  ...bFdGuided,
  ...bFdNoPhoto,
  ...bTasteGuided,
  ...cFdGuided,
  ...cFdNoPhoto,
  ...cTasteGuided,
];

export const designMap: Record<string, DesignModule> = Object.fromEntries(
  designs.map((d) => [d.slug, d])
);

export const designSlugs = designs.map((d) => d.slug);
