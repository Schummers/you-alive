# Roadmap — bake-off design You Alive (à reprendre en contexte frais)

> **STATUT (24 juin 2026) : bake-off TERMINÉ.** Toutes les itérations sont générées
> et triées (manual / fd / taste) pour A, B, C dans `you-alive/src/designs/`.
> On est passé en **phase lancement** (Phase 4 de `plan-round2.md`). Ce doc reste
> en référence (vocabulaire, pièges, conventions). Pour le plan vivant, voir ci-dessous.
>
> ## Phase courante : LANCEMENT (next steps, meeting 24/06)
>
> **Jonathan (bloquant) :**
> - [ ] Slugs prod propres : séparer URLs d'ad (`/a` `/b` `/c`) de l'archive `/gallery`
>   (aujourd'hui seules `/preview/[slug]` et `/gallery` existent, pas de route prod courte).
> - [ ] Envoyer screenshot police + palette à Jane (eyedropper Canva).
> - [ ] PostHog : auditer events/KPIs → liste à Jane ; vérifier session recording sur pages live.
> - [ ] Vérifier env vars Vercel (`NEXT_PUBLIC_META_PIXEL_ID`, `META_ACCESS_TOKEN`) + token serveur PostHog.
> - [ ] Demain (session commune) : setup ads + sélection event pixel + valider URLs.
>
> **Jane (en attente) :**
> - [ ] Choisir 1 itération par variant A et B, renvoyer le nom.
> - [ ] Valider la liste de features du widget.
> - [ ] Reconstruire les ads Canva (garder 1 proche du winner original).
>
> **Séquence test :** S1 = ads trafic (déjà live) · S2 = ads conversion (event pixel côté Meta).
> **Non tranché :** budget · seuil coût/email kill-or-go.
>
> ---
>
> ### Archive — objectif initial (bake-off, terminé)
> Générer beaucoup d'itérations de design par variante, avec 3 outils, comparer en galerie.
> Contenu figé, on ne jouait que sur le design visuel.

## Vocabulaire (à fixer)

- **Variant** = une proposition de site liée à une ad : `a`, `b`, `c`. Fixe la famille de marque (univers de l'ad).
- **Itération** = une version d'un même variant. Ex : 5 itérations de `a` = 5 designs différents qui restent dans la famille de `a`.
- **Outil** = le générateur testé : `stitch`, `fd` (frontend-design), `taste` (taste-skill).

## Périmètre du bake-off (décidé)

Pour chaque variant (a, b, c), **5 itérations par outil** :

| Outil | Itérations | Sortie | Dans la galerie ? |
|---|---|---|---|
| **Stitch** | 5 × 3 = 15 | écrans sur Stitch (HTML) | **Non** — restent sur Stitch, déjà visualisables là-bas |
| **frontend-design** | 5 × 3 = 15 | composants Next.js dans l'app | **Oui** |
| **taste-skill** | 5 × 3 = 15 | composants Next.js dans l'app | **Oui** |

**Abandonné** (décidé) : design.md, les DESIGN.md de awesome-design-md, et les sub-agents cloud (pas d'agent UI designer vraiment spécifique). On garde awesome-design-md seulement comme banque d'inspiration ponctuelle, pas comme outil.

→ ~30 designs en code dans la galerie + 15 écrans sur Stitch.

## État actuel (déjà fait)

Infra dans `you-alive/` (Next.js 16 + Tailwind 4) :
- `src/content/site.ts` — contenu figé partagé (`SiteContent`). Aucun design ne le modifie.
- `src/designs/types.ts` — contrat `DesignProps` / `DesignModule`.
- `src/designs/shared/useFakeDoor.ts` — hook funnel partagé (events PostHog/Meta, fake-door). Tout design DOIT passer par lui pour les CTA et le formulaire.
- `src/designs/{a,b,c}/index.tsx` — 3 premiers designs (1 par ad), via frontend-design.
- `src/designs/registry.ts` — registre (owned par l'orchestrateur, pas par les agents).
- `src/app/preview/[slug]/page.tsx` — rend un design. `src/app/gallery/page.tsx` — galerie.
- En prod : https://alive.blackdotads.com (`/gallery`, `/preview/a|b|c`).

Pièges déjà rencontrés (à ne pas refaire) :
- Tailwind v4 : la font-family arbitraire s'écrit `font-[family-name:var(--font-x)]` (le hint `family-name:` est obligatoire, sinon ça tombe en fallback).
- next/font variable + `axes` : ne pas mettre `weight` en même temps.
- Chemins d'images : `public/designs/<slug>/...`, vérifier le `src` après tout renommage.
- Vérifier en navigateur réel (Playwright), pas qu'en curl : le curl 200 ne garantit pas le rendu (formats AVIF/webp, fonts).

Artefacts de référence :
- Rapport comparatif des outils : `project management/design-rapport-comparatif.md`
- Structure de page actée : `project management/structure-landing-youalive.md`
- Contenu source : `project management/content-youalive.md`
- Ads (briefs de marque) : `project management/design/image{1,2,3}.jpeg`

## Le cœur du sujet : comment faire varier les itérations

Le **variant fige la famille** (palette/mood de l'ad). Les **itérations explorent les autres axes**, en restant dans la famille, pour rester comparables et on-brand. Axes de variation (du plus différenciant au moins) :

1. **Typographie** — pairing display+body, échelle, graisse, casse. Levier n°1.
2. **Composition / layout** — type de hero (photo plein écran / split / centré / asymétrique / bento), rythme des sections, alignement (centré vs gauche).
3. **Forme des composants** — corner radius (0 net → pill), style de carte (outline / aplat / glass / elevated), style de bordure.
4. **Densité** — whitespace généreux ↔ compact.
5. **Couleur (intensité)** — même famille que l'ad, mais ±1 cran d'intensité/contraste, light vs dark si l'ad le permet.
6. **Profondeur / texture** — flat ↔ ombres / gradients / noise / grain.
7. **Motion** — statique ↔ animations d'entrée + scroll.
8. **Traitement visuel** — photo / illustration / typographique pur / motifs.

**Règle** : par variant, garder la palette + le mood de l'ad constants ; faire bouger surtout 1-4 (typo, layout, forme, densité). Une matrice de 5 itérations = 5 points bien écartés sur ces axes (ex : it.1 éditorial aéré serif / it.2 bento dense sans-serif / it.3 brutalist net / it.4 soft arrondi / it.5 contraste fort animé).

## Comment piloter la variation, par outil

### Stitch (MCP `mcp__stitch__*`)
Tools réels disponibles (charger les schémas via ToolSearch `select:` en début de session, ils ne sont pas chargés par défaut) :
`create_project`, `generate_screen_from_text`, `generate_variants`, `create_design_system` / `create_design_system_from_design_md` / `apply_design_system` / `update_design_system` / `list_design_systems`, `upload_design_md`, `edit_screens`, `get_screen` / `list_screens` / `get_project` / `list_projects`.

Flow proposé :
1. `create_project` "You Alive".
2. Par variant : un design system depuis l'ad (couleurs/typo). Uploader l'image de l'ad comme référence.
3. `generate_screen_from_text` avec le contenu de `site.ts` (passer le copy en clair).
4. `generate_variants` pour produire les 5 itérations — vérifier dans le schéma quels aspects on peut cibler (a priori palette / layout / "creative range"). **À confirmer sur l'API réelle, ne pas se fier aux blogs.**
5. Récupérer les screenshots ; ne PAS les porter en code (ils restent la baseline Stitch pour comparaison).

### frontend-design (skill `frontend-design`)
Pas de commandes : la variation se pilote par le **brief**. Pour chaque itération, donner explicitement un point de la matrice d'axes (direction artistique précise) + l'image de l'ad + pointeur `site.ts` + le contrat (`DesignProps`, `useFakeDoor`, mobile-first 390px, ne pas toucher `site.ts`). Sortie → `src/designs/<variant>-fd-NN/index.tsx`.

### taste-skill (à installer : `npx skills add Leonxlnx/taste-skill`)
Variation pilotée par les **3 Dials** (1-10) : `DESIGN_VARIANCE`, `MOTION_INTENSITY`, `VISUAL_DENSITY`, + le choix d'un sous-skill de style (`brutalist` / `minimalist` / `soft`). Chaque itération = un triplet de Dials + un style. Garde son pre-flight check anti-slop. Sortie → `src/designs/<variant>-taste-NN/index.tsx`.

## Convention de slug + galerie à refaire

- Slug : `<variant>-<outil>-<NN>` → `a-fd-01`…`a-fd-05`, `a-taste-01`…, `b-fd-01`, etc.
- **Galerie à retravailler** : grille de vignettes mobiles **petites** (iframe en `transform: scale(~0.35)` ou screenshots statiques), **groupées par variant puis par outil**, avec label. Garder un "open ↗" vers `/preview/<slug>`.
  - 30 iframes live = lourd : préférer des **screenshots statiques** (Playwright, 390px) générés dans `project management/design/screenshots/`, affichés en vignettes. Décider en début de session.

## Skills suggérées (à invoquer dans la session fraîche)

- `frontend-design` (génération it. fd)
- `taste-skill` (après install ; génération it. taste)
- ToolSearch pour charger les schémas `mcp__stitch__*` avant tout appel Stitch
- `playwright` (screenshots des previews pour la galerie)
- `brainstorming` (optionnel) pour figer la matrice des 5 itérations avant de générer

## Questions ouvertes à trancher en début de session

1. 5 itérations/variant/outil confirmé (pas 10) ? Soit 30 designs en code + 15 Stitch.
2. Palette : strictement fixée par variant, ou on autorise des écarts d'intensité entre itérations ?
3. Galerie : vignettes via screenshots statiques (recommandé à ce volume) ou iframes scalées ?
4. Comment on compare/juge à la fin (toi en visuel ? un agent-juge ? un critère ?).
5. Le double-titre du variant `a` (texte "You Alive?" incrusté dans la photo + H1) : on règle l'image avant de générer les itérations de `a` ?

## Prompt d'ouverture pour la nouvelle discussion

> On reprend le bake-off design de You Alive. Lis d'abord
> `project management/design-roadmap-bakeoff.md` (roadmap + vocabulaire + état actuel),
> puis `design-rapport-comparatif.md`. On va générer 5 itérations par variant (a, b, c)
> avec frontend-design puis taste-skill (à installer), et 5 itérations par variant sur
> Stitch (qui restent sur Stitch, hors galerie). Avant de générer : (1) propose-moi la
> matrice des 5 itérations (quels axes on fait varier), (2) refais la galerie en vignettes
> mobiles petites groupées par variant et par outil. Commence par me répondre aux
> questions ouvertes de la roadmap.
