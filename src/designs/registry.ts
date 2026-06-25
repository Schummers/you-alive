import type { DesignModule } from "@/designs/types";

// Manual track only — the hand-built finalists. The bake-off iterations
// (base / fd / taste) were archived to /archive/designs after the test.
// Prod routes /a /b /c render a-manual-03, b-manual-01d, c-manual-03.
import AManual01 from "@/designs/a-manual-01";
import AManual02 from "@/designs/a-manual-02";
import AManual03 from "@/designs/a-manual-03";

import BManual01 from "@/designs/b-manual-01";
import BManual01b from "@/designs/b-manual-01b";
import BManual01d from "@/designs/b-manual-01d";
import BManual02 from "@/designs/b-manual-02";
import BManual03 from "@/designs/b-manual-03";

import CManual01 from "@/designs/c-manual-01";
import CManual02 from "@/designs/c-manual-02";
import CManual03 from "@/designs/c-manual-03";

// Variant A — manual track. All reuse the same body, differ on hero treatment.
const aManual: DesignModule[] = [
  {
    slug: "a-manual-01",
    label: "A · manual · 01 — Hero plein écran",
    ad: "image1",
    variant: "a",
    tool: "manual",
    tags: ["photo", "full-bleed", "organic", "feminine"],
    note: "Photo plein écran, dégradé vers forêt, wordmark You Alive? sur l'image, titre dans la photo, sous-titre + CTA en dessous. Reveals au scroll.",
    Component: AManual01,
  },
  {
    slug: "a-manual-02",
    label: "A · manual · 02 — Forme organique",
    ad: "image1",
    variant: "a",
    tool: "manual",
    tags: ["organic", "blob", "rounded", "feminine"],
    note: "Hero photo dans une forme organique (blob). Wordmark You Alive?, pas de CTA sticky. Reveals au scroll.",
    Component: AManual02,
  },
  {
    slug: "a-manual-03",
    label: "A · manual · 03 — Hero plein écran + stepper",
    ad: "image1",
    variant: "a",
    tool: "manual",
    tags: ["photo", "full-bleed", "stepper", "timeline"],
    note: "Variante de manual-01 : how-it-works en stepper timeline (numéros terracotta), FAQ en lignes, CTA final centré foncé. Aligné à gauche. [PROD /a]",
    Component: AManual03,
  },
];

// Variant B — manual track. Single lavender background, no cards except pricing
// + final CTA, giant ghost "You Alive?" hero.
const bManual: DesignModule[] = [
  {
    slug: "b-manual-01",
    label: "B · manual · 01 — Halo (niveau 1, doux)",
    ad: "image2",
    variant: "b",
    tool: "manual",
    tags: ["soft", "lavender", "ghost-hero", "niveau-1"],
    note: "Halo niveau 1 (le plus doux) : fond lavande clair, halo très léger, ghost lavande. Accent de titre subtil, CTA ink. DM Sans.",
    Component: BManual01,
  },
  {
    slug: "b-manual-01b",
    label: "B · manual · 01 — Halo (niveau 2, doux+)",
    ad: "image2",
    variant: "b",
    tool: "manual",
    tags: ["soft", "lavender", "ghost-hero", "niveau-2"],
    note: "Même design que 01, halo niveau 2 : ghost blanc plus présent, halo lavande un peu plus marqué.",
    Component: BManual01b,
  },
  {
    slug: "b-manual-01d",
    label: "B · manual · 01 — Halo (niveau 2, carré)",
    ad: "image2",
    variant: "b",
    tool: "manual",
    tags: ["soft", "lavender", "ghost-hero", "niveau-2", "carré"],
    note: "Même que 01b (halo niveau 2) mais coins quasi carrés (rounded 4-8px) : CTA, cards pricing, panneau final et pills. [PROD /b]",
    Component: BManual01d,
  },
  {
    slug: "b-manual-02",
    label: "B · manual · 02 — Halo (Newsreader)",
    ad: "image2",
    variant: "b",
    tool: "manual",
    tags: ["soft", "lavender", "newsreader", "no-ghost"],
    note: "Même design que 01 mais Newsreader + Mona Sans. Hero SANS ghost, H1 géant sur 4 lignes (44/58px), CTA pill arrondi.",
    Component: BManual02,
  },
  {
    slug: "b-manual-03",
    label: "B · manual · 03 — Scripture",
    ad: "image2",
    variant: "b",
    tool: "manual",
    tags: ["biblique", "drop-caps", "carré", "serif"],
    note: "Biblique : filets de chapitre, drop-caps, coins carrés, numéros chapitre sur bordure gauche, CTA final carré. Corps Spectral.",
    Component: BManual03,
  },
];

// Variant C — manual track. Shared RetroForestBase; cuts of the same layout.
const cManual: DesignModule[] = [
  {
    slug: "c-manual-01",
    label: "C · manual · 01 — Retro Forest",
    ad: "image3",
    variant: "c",
    tool: "manual",
    tags: ["retro", "forest", "lime"],
    note: "Base Retro Forest partagée. Hero blanc + accents lime (48px), bande 'problème' + footer en lime pâle, sections blanches, CTA lime sans contour.",
    Component: CManual01,
  },
  {
    slug: "c-manual-02",
    label: "C · manual · 02 — Retro Forest (jaune géant)",
    ad: "image3",
    variant: "c",
    tool: "manual",
    tags: ["retro", "forest", "lime", "display"],
    note: "Même base, plus typographique : H1 entièrement lime, géant (64px), un mot par ligne (6 lignes), CTA pill, footer forest foncé.",
    Component: CManual02,
  },
  {
    slug: "c-manual-03",
    label: "C · manual · 03 — Retro Forest (H1 tout lime)",
    ad: "image3",
    variant: "c",
    tool: "manual",
    tags: ["retro", "forest", "lime"],
    note: "Identique à c-manual-01 (hero split 4 lignes, 46px) mais le H1 est entièrement lime. [PROD /c]",
    Component: CManual03,
  },
];

export const designs: DesignModule[] = [...aManual, ...bManual, ...cManual];

export const designMap: Record<string, DesignModule> = Object.fromEntries(
  designs.map((d) => [d.slug, d])
);

export const designSlugs = designs.map((d) => d.slug);
