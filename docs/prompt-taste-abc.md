# Prompt — bake-off taste-skill (install + paramétrage + 24 itérations A/B/C)

> À coller dans une session fraîche. Objectif : installer taste-skill, comprendre son
> vrai mécanisme, puis générer **8 itérations guidées par variant** (A, B, C = 24 sites)
> en réutilisant la méthode validée du bake-off frontend-design (palette + mood verrouillés
> par variant, un axe imposé par itération). Puis registry + galerie + vérif + déploiement.

## Prompt d'ouverture (à coller)

> On étend le bake-off design You Alive à l'outil taste-skill. Contexte : lis
> `project management/design-roadmap-bakeoff.md`, `project management/prompt-bakeoff-bc.md`
> (méthode guidée + matrice 8 axes + contrat + constantes par variant), et l'état actuel
> (`you-alive/src/designs/registry.ts`, un design de réf `a-fd-09`). Le mode "libre" est
> abandonné, on ne fait que du **guidé**.
>
> Fais, dans l'ordre :
> 1. **Installer** taste-skill : `npx skills add Leonxlnx/taste-skill`.
> 2. **Lire son SKILL.md** (et toute ressource bundlée) pour relever son VRAI mécanisme :
>    noms exacts des Dials, échelles, sous-skills de style disponibles, son pre-flight
>    anti-slop, et son format de sortie. Ne PAS présumer les noms (la roadmap parle de
>    DESIGN_VARIANCE / MOTION_INTENSITY / VISUAL_DENSITY + brutalist/minimalist/soft, à confirmer).
> 3. **Me proposer la table de correspondance** "8 axes du bake-off → réglages taste réels"
>    (un triplet de Dials + un style par axe) et **attendre mon OK** avant de générer en masse.
> 4. Après OK : générer **8 itérations par variant** (A, B, C) avec taste-skill.
> 5. Câbler le registry, refaire les screenshots galerie, vérifier en navigateur réel, déployer.

## Constantes verrouillées par variant (identiques au bake-off fd)

- **A — Editorial / Nature** (ad `design/image1.jpeg`, hero `/designs/a/hero.jpeg`) :
  cream `#F4EFE6`, forest `#1F2A22`, terracotta `#B5754E`. Mood : contemplatif, tendre, sérieux, rassurant.
- **B — Soft / Wellness** (ad `design/image2.jpeg`, hero `/designs/b/hero.jpeg`) :
  indigo `#26235A`, soft `#5A5690`, mesh lavande→périwinkle. Mood : aérien, tendre, onirique.
- **C — Retro / Forest** (ad `design/image3.jpeg`, hero `/designs/c/hero.jpeg`) :
  forêt `#16271F`, lime `#C8F169`, cream `#EFEAD8`. Mood : chaleureux, ancré, offbeat mais digne.

> Vérifier si chaque hero contient un texte de marque incrusté (comme A) ; si oui, ne pas
> superposer un H1 identique. Produit deuil/legacy : jamais jokey ni racoleur.

- Slugs : `a-taste-01..08`, `b-taste-01..08`, `c-taste-01..08`. `tool:"taste"`, `mode:"guided"`.

## Les 8 axes (à traduire en réglages taste réels)

| NN | Axe |
|----|-----|
| 01 | Très aéré + très arrondi, clair, minimal |
| 02 | Bento dense, coins nets, grille modulaire |
| 03 | Couleur intense + motion |
| 04 | Texture / profondeur (grain, ombres, dégradés, motifs) |
| 05 | Typo-driven (display surdimensionné) |
| 06 | Éditorial magazine (multi-colonnes, asymétrie, drop caps) |
| 07 | Swiss / minimal plat clair |
| 08 | Organique chaleureux (formes courbes, dégradés doux) |

Mapping (à valider après lecture du SKILL.md) — chaque axe ≈ un point sur les Dials, ex :
- 01 → VISUAL_DENSITY bas, MOTION bas, style soft/minimalist
- 02 → VISUAL_DENSITY haut, style brutalist/grid
- 03 → MOTION haut, DESIGN_VARIANCE haut, couleur poussée
- 07 → VISUAL_DENSITY bas, MOTION bas, style minimalist, flat
- … (compléter selon les Dials réels)

## Contrat (identique au reste du bake-off)

Chaque itération = `you-alive/src/designs/<slug>/index.tsx` : `"use client"`, default export
`({ content, slug }: DesignProps)`, `const fd = useFakeDoor(slug)`, rendu VERBATIM de tout
`content` (hero/problem/solution/pricing avec les 2 plans + `included` + finalCta/testimonials/
faq/fake-door/footer), tous les CTA via `fd.onCta`, `ref={fd.pricingRef}` sur pricing, fake-door
mirroré, mobile-first `max-w-md`, Tailwind v4 (`font-[family-name:var(--font-x)]`, pas de `weight`
avec `axes`), `next/image` pour le hero, zéro unused local. Ne pas toucher `site.ts`/types/registry/
useFakeDoor. Respecter en plus le pre-flight anti-slop propre à taste-skill.

## Orchestration (après génération)

1. Registry : ajouter `a-taste-01..08`, `b-taste-01..08`, `c-taste-01..08` (variant, `tool:"taste"`,
   `mode:"guided"`, tags, note, brief). La galerie les groupera automatiquement sous chaque variant
   dans une section "taste-skill" (le `TOOL_LABEL` la gère déjà).
2. `npm run build` pour valider.
3. Screenshots : `PORT=3210 npm run dev` puis le script Playwright (viewport 390, reducedMotion,
   scroll pour reveals, screenshot fullPage jpeg q72 → `public/gallery/<slug>.jpg`), nouveaux slugs inclus.
4. Vérif navigateur réel : `/gallery` (compte cartes) + un `/preview/<slug>` taste (texte features + final CTA).
5. Déployer : `cd you-alive && vercel --prod`.

## Garde-fous

- 24 générations = lourd : dispatcher en sous-agents parallèles (general-purpose qui invoquent
  taste-skill), par vagues (ex. 8 par variant).
- Si taste-skill produit du code hors-contrat (réécrit le contenu, ignore `useFakeDoor`), corriger
  en post : le contenu DOIT rester `site.ts` verbatim.
- Volume : si tu veux limiter le coût, commence par A seul (8), juge, puis B et C.
