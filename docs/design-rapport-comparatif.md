# Rapport comparatif : produire beaucoup de variantes de design (landing You Alive)

> Comment générer ~10 propositions de design d'une même page, en garder 1, itérer.
> Contenu figé ; seul le design visuel varie. App Next.js 16 + Tailwind 4 (`you-alive/`).

## Le besoin

1 ad = 1 variante de page (message-match acté). Pour chaque ad, générer beaucoup de designs, choisir le meilleur visuellement, le figer. Les 3 ads (`design/image{1,2,3}.jpeg`) sont déjà 3 directions artistiques distinctes :
- **image1** : photo nature chaleureuse, serif éditorial blanc, contemplatif, premium calme
- **image2** : gradient lavande/bleu pastel, serif navy, léger, wellness
- **image3** : vert forêt sombre, display rétro lime, quirky, décalé

## Les solutions comparées

### A. Google Stitch (MCP installé)
Génère des UI depuis texte + images de référence, exporte HTML/Tailwind ou Figma, variantes natives. **Mais** : MCP scopé au projet `~/Documents/jonathan` (absent ici), sortie HTML à reconvertir en composants Next.js (double travail), on perd le contrôle fin (mobile-first, sticky CTA, events PostHog). Claims en ligne (méthode `variants()`, quota 350/mois) non vérifiés sur l'API réelle.
**Verdict : idéation optionnelle, pas le moteur.**

### B. Claude Code + skill `frontend-design` + sous-agents parallèles
Skill Anthropic qui force des choix esthétiques délibérés (typo non générique, palettes harmonisées, anti-patterns explicites). Pour 10 designs : N sous-agents parallèles, chacun avec un brief de direction différent dérivé de l'ad, chacun dans son dossier.
**Avantage décisif** : sortie = vrais composants Next.js/Tailwind dans l'app (zéro conversion), contrôle total, itération facile.
**Verdict : générateur, sortie directe en code.** Skills locales `prototype` et `design-an-interface` couvrent le pattern.

### C. Claude Code + `taste-skill` (Leonxlnx, revérifié)
Framework "anti-slop" : un générateur qui force le bon goût via 3 curseurs (`DESIGN_VARIANCE`, `MOTION_INTENSITY`, `VISUAL_DENSITY`) + un pre-flight check de 50+ règles dures (interdit noir pur, 3 cartes identiques, glows neon ; exige WCAG AA, light+dark, `prefers-reduced-motion`). Sous-skills par style (`brutalist`, `minimalist`, `soft`), `brandkit`, `image-to-code`. Install : `npx skills add Leonxlnx/taste-skill`.
**Ne juge pas, ne compare pas** : c'est un générateur, pas un évaluateur. Les "Dials" sont un bon système d'axes de variation (un triplet différent par agent = diversité garantie).
**Verdict : générateur alternatif à B, complémentaire** (plancher anti-slop, concept de Dials réutilisable même sans l'installer).

### D. Système DESIGN.md (google-labs-code/design.md + VoltAgent/awesome-design-md)
Spec markdown + YAML (tokens + rationale + do's/don'ts) qu'un agent suit pour rester cohérent. `awesome-design-md` = 73+ DESIGN.md réels (Linear, Stripe, Apple...) à sélectionner comme contrainte d'entrée. Ne génère rien seul.
**Verdict : sert deux fois.** En entrée (Claude Code génère en suivant un DESIGN.md sélectionné de VoltAgent) ET en aval (le gagnant final est figé dans son propre DESIGN.md).

### E. Outils externes (v0, Lovable, superdesign.dev, Onlook, Figma MCP)
Sortie hors de l'app, branding par imitation moins contrôlable, coût additionnel, ou redondants avec D.
**Verdict : hors scope du bake-off.**

### Les 5 repos demandés

| Repo | Nature | Utilité |
|---|---|---|
| google-labs-code/design.md | Format + CLI DESIGN.md | Haute (test 4 + figer le gagnant) |
| VoltAgent/awesome-design-md | 73+ DESIGN.md réels | Haute (contrainte d'entrée test 4) |
| Leonxlnx/taste-skill | Framework anti-slop + Dials | Haute (test 3) |
| VoltAgent/awesome-claude-code-subagents | Annuaire de subagents | Moyenne |
| bradtraversy/design-resources-for-developers | Liste de liens (humaine) | Basse, sauf générateurs (voir annexe) |

## Stratégie retenue : bake-off séquentiel

On ne choisit pas une approche a priori : on **teste les 4 générateurs sur le même contenu figé + la même ad**, et on garde ce qui donne le meilleur résultat. Un test à la fois, on valide ensemble avant de passer au suivant.

| Ordre | Test | Ce qu'on évalue |
|---|---|---|
| 0 | **Contenu figé** (`site.ts`, fait) | Base commune, neutre, identique pour tous les tests |
| 1 | **Stitch** (MCP) | Idéation rapide depuis l'ad + texte. Qualité du mockup, effort de reconversion en Next.js |
| 2 | **Claude Code + `frontend-design`** | Qualité brute du moteur Anthropic, sortie directe en code |
| 3 | **Claude Code + `taste-skill`** | Le même moteur avec couche anti-slop + Dials. Meilleur que test 2 ou pas ? |
| 4 | **Claude Code + DESIGN.md** (sélectionné de VoltAgent) | Génération contrainte par une identité de marque cadrée |

À chaque étape : on génère, on regarde en galerie (`/gallery`), on note ce qui marche / ne marche pas, puis on décide d'avancer. À la fin on compare les 4 familles et on retient le générateur gagnant ; le design final est figé dans un `DESIGN.md`.

Point clé : l'ad EST déjà le brief de branding, commune aux 4 tests pour que la comparaison soit juste.

## Annexe — ressources Traversy réellement utiles

La liste est surtout des outils humains (navigateur/Figma). Pour un pipeline d'agents, seuls comptent :
- **Générateurs exploitables en code** (j'injecte les concepts dans les briefs) : [Hero Patterns](http://www.heropatterns.com/), [Pattern Monster](https://pattern.monster/) (patterns SVG), [Mesh Gradient](https://meshgradient.in/) (utile pour matcher l'ad lavande), [Shadow Palette Generator](https://www.joshwcomeau.com/shadow-palette/) (ombres réalistes).
- **Galeries pour cadrer les directions** : [Landingfolio](https://landingfolio.com/), [Lapa Ninja](https://www.lapa.ninja/), [Bento Grids](https://bentogrids.com/).
- **À éviter au stade idéation** : shadcn/Magic UI/Aceternity (homogénéisent les 10 designs).

## Infra commune du bake-off (implémentée dans `you-alive/`)

La même infra sert les 4 tests : chaque design produit (peu importe le générateur) atterrit dans la galerie, comparable côte à côte.

1. **Contenu figé** : `src/content/site.ts` (mappe `content-youalive.md`). Aucun design ne le touche.
2. **Contrat** : chaque design = `src/designs/<slug>/index.tsx`, composant landing complet prenant `content`. Hook partagé `useFakeDoor` pour garantir les events PostHog.
3. **Convention de slug par test** : `stitch-NN`, `fd-NN` (frontend-design), `taste-NN`, `dmd-NN` (design.md). On voit d'un coup d'œil quel générateur a produit quoi.
4. **Preview** : `/preview/<slug>` rend un design avec le contenu figé.
5. **Galerie** : `/gallery` (liens + iframes 390px), screenshots auto (Playwright).
6. **Choix + itération** : à chaque test on garde les meilleurs candidats ; à la fin on compare les familles, on retient le gagnant, on fige son `DESIGN.md`.

Pour Stitch (test 1) : sa sortie est du HTML/Tailwind à porter en composant `src/designs/stitch-NN/` (le coût de cette reconversion fait partie de l'évaluation).

Deux axes à ne pas confondre : **copy A/B** (existant `variants.ts`, `/a` `/b`) vs **design visuel** (ce pipeline). On fige le copy pour choisir un design.
