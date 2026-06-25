# Prompt de génération — bake-off guidé B & C (frontend-design)

> À coller dans une session fraîche. Reprend la méthode validée sur le variant A :
> **mode guidé uniquement** (le mode libre converge vers du "dark vault", abandonné).
> Chaque variant = 8 itérations, palette + mood verrouillés, un axe imposé par itération,
> le ton laissé au skill. Sortie : composants Next dans `you-alive/src/designs/<variant>-fd-NN/`,
> registry + galerie + déploiement.

## Prompt d'ouverture (à coller)

> On reprend le bake-off design You Alive (voir `project management/design-roadmap-bakeoff.md`
> et l'état du variant A déjà fait). Le mode "libre" de frontend-design est abandonné (il converge
> tous vers le même imaginaire), on ne fait plus que du **guidé**. Génère 8 itérations guidées pour
> le variant B, puis 8 pour le variant C, avec le skill `frontend-design`, en suivant exactement
> la méthode ci-dessous. Puis câble le registry, refais les screenshots de galerie, vérifie en
> navigateur réel et déploie en prod (`vercel --prod`).

## Constantes par variant (verrouillées)

**Variant B — Soft / Wellness** (réf. mood : ad `project management/design/image2.jpeg`)
- Palette : ink/indigo `#26235A`, soft `#5A5690`, fond mesh lavande→périwinkle (`#EBE6FF`, `#D6E4FF`, `#F3ECFF`, `#F7F4FF`).
- Mood (fixe) : aérien, tendre, onirique, apaisant, lumineux. Produit deuil/legacy : jamais jokey ni racoleur.
- Slugs : `b-fd-01` … `b-fd-08`, `variant:"b"`, `tool:"fd"`, `mode:"guided"`.

**Variant C — Retro / Forest** (réf. mood : ad `project management/design/image3.jpeg`)
- Palette : forêt profonde `#16271F`, lime électrique `#C8F169`, cream `#EFEAD8`, muted `#9DB39A`.
- Mood (fixe) : chaleureux, ancré, caractériel/légèrement offbeat MAIS digne et respectueux. Jamais gadget.
- Slugs : `c-fd-01` … `c-fd-08`, `variant:"c"`, `tool:"fd"`, `mode:"guided"`.

> **L'image de l'ad est une RÉFÉRENCE / moodboard, jamais un asset à rendre.** Elle sert uniquement
> à extraire palette + mood + énergie. Ne JAMAIS l'embarquer dans le design (elle a le texte de la
> pub incrusté). Le branding cohérent vient de la palette, la typo et le mood, pas de cette photo.

## La matrice des 8 axes (identique pour B et C)

| NN | Axe imposé (direction générale, ton libre) |
|----|--------------------------------------------|
| 01 | Très aéré + très arrondi, clair, minimal (whitespace max, radius full) |
| 02 | Bento dense, coins nets 0px, grille modulaire (densité max) |
| 03 | Couleur intense + motion (accent poussé au max de la famille, reveals au scroll, micro-interactions, CSS-only) |
| 04 | Texture / profondeur (grain, ombres douces, dégradés, motifs) |
| 05 | Typo-driven (display surdimensionné, contraste d'échelle, photo secondaire) |
| 06 | Éditorial magazine (multi-colonnes, asymétrie, filets, drop caps, pull-quotes) |
| 07 | Swiss / International style, plat et clair (grille stricte, petite typo, zéro ombre/dégradé) |
| 08 | Organique chaleureux (formes courbes/blobs, dégradés doux dans la famille) |

## Brief sous-agent (1 par itération, à dispatcher en parallèle — general-purpose)

```
You are generating ONE distinctive, production-grade MOBILE landing page for "You Alive"
(after-death/legacy product). GUIDED exploration: respect the constraints, make the fine
choices with taste.

FIRST invoke the Skill tool "frontend-design:frontend-design" and follow its methodology
(distinctive typography — never Inter/Roboto/Arial; committed color; motion; bold composition;
atmospheric detail; avoid AI-slop).

THEN read for the EXACT contract:
- you-alive/src/designs/types.ts
- you-alive/src/content/site.ts            (FIXED copy, render verbatim)
- you-alive/src/designs/shared/useFakeDoor.ts
- you-alive/src/designs/a-fd-09/index.tsx  (a reference GUIDED implementation of the contract)

The brand ad "{AD_PATH}" is a MOODBOARD / REFERENCE ONLY — open it to absorb palette, mood and
energy. It has the ad's marketing text baked in: NEVER render it, embed it, or reuse it as an
image asset. Brand coherence comes from palette + typography + mood, NOT from that photo.

FIXED CONSTRAINTS:
- MOOD (respect): {MOOD}
- PALETTE (locked family): {PALETTE}. Stay recognizably in this family; ~one notch of intensity allowed.
- HERO IMAGERY — YOUR CHOICE, maximize freedom based on what fits this site/axis:
  (a) a text+CSS hero (NO photo): the title/subtitle carry it, with gradients, shapes, type, texture; OR
  (b) a hero WITH a photo: if so, use a neutral placeholder (e.g. a solid/gradient block, an
      unsplash-style /api/placeholder, or a CSS-generated visual) and leave a clear `{/* hero image
      slot */}` comment so a real on-brand photo can drop in later.
  Either way the headline is the text H1 (content.hero.title) — do NOT rely on the ad image to carry it.

YOUR DIRECTION (axis emphasis): {AXIS}

HARD CONTRACT:
1. Create exactly you-alive/src/designs/{SLUG}/index.tsx, modify no other file.
2. "use client"; default export ({ content, slug }: DesignProps) (import type from "@/designs/types").
3. const fd = useFakeDoor(slug).
4. Render ALL of content verbatim: hero (brandLockup,title,subtitle,ctaLabel,reassuranceLine),
   problem, solution (intro+3 steps), pricing (title, subtitle, the 2 plans name/price/descriptor/
   ctaLabel — highlight highlight:true, the `included` feature list, scarcityLine), testimonials (3),
   faq (4, <details>), finalCta (headline+ctaLabel), fake-door block, footer.
5. Every CTA calls fd.onCta("<placement>"). ref={fd.pricingRef} on the pricing section.
6. Fake-door: {fd.showWaitlist && <section id="waitlist">…}; done→content.confirmation; else
   <form onSubmit={fd.submit}> required email input value/onChange fd.email/fd.setEmail, submit
   disabled when loading, error line on "error", privacyLine. Mirror the reference.
7. Mobile-first: max-w-md mx-auto; finished at 390px.
8. Tailwind v4 + next/font: arbitrary font-family must be font-[family-name:var(--font-x)];
   apply the font's .variable className on a wrapper; with `axes` do not pass `weight` and only pass
   axes the font actually exposes (e.g. Fraunces exposes opsz/SOFT/WONK, NOT wght); use next/image
   ONLY if you chose a photo hero (otherwise no image at all); declare NO unused locals (build fails on them).
9. No TS/eslint errors, self-contained.

Return only: file path + 3 lines on the tone/typography chosen.
```

## Après génération (orchestrateur)

1. Registry : ajouter les blocs `b-fd-01..08` et `c-fd-01..08` dans `src/designs/registry.ts`
   (imports + objets `DesignModule` avec `variant`, `tool:"fd"`, `mode:"guided"`, `tags`, `note`, `brief`).
2. `npm run build` pour valider (les nouveaux previews doivent apparaître).
3. Screenshots galerie : dev server `PORT=3210 npm run dev`, puis script Playwright (viewport 390,
   `emulateMedia reducedMotion:"reduce"`, scroll pour déclencher les reveals, `screenshot fullPage`
   jpeg q72 → `public/gallery/<slug>.jpg`). Inclure les nouveaux slugs B/C.
4. Vérifier en navigateur réel `/gallery` (compte des cartes) + un `/preview/<slug>` (présence d'un
   texte de la liste features + du final CTA). Pas juste un curl 200.
5. Déployer : `cd you-alive && vercel --prod`.

## Note taste-skill (séparé)

taste-skill n'est pas installé (`npx skills add Leonxlnx/taste-skill`). Même philosophie guidée :
palette + mood verrouillés par variant, variation pilotée par ses 3 Dials (DESIGN_VARIANCE,
MOTION_INTENSITY, VISUAL_DENSITY) + un sous-skill de style (brutalist/minimalist/soft). Mapper les
8 axes ci-dessus sur des triplets de Dials + style. À faire dans sa propre session après install.
```
