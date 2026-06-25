# Notes brutes — You Alive? / Death Email Sender (Round 2)

> Mes notes de réflexion réorganisées pour lisibilité. Base de travail avant de produire le document d'implémentation.

---

## 0. Structure du projet — 3 briques

1. **Brique technique** : tracking, stack, Meta Pixel, test de bout en bout (avant tout design).
2. **Brique reframing du problème** : bien identifier le problème et comment on le résout.
3. **Brique design & implémentation** : pure exécution web.

---

## 1. Phase 1 — Technique & prérequis (avant tout design)

L'idée : ne rien designer côté web tant qu'on n'a pas validé techniquement qu'on capte bien la donnée.

### 1.1 Mapper le tunnel de conversion
Bien définir le tunnel et compter le nombre d'étapes :
1. **Impressions** de l'ad
2. **Conversion Meta ad → site web** (le clic sur la pub)
3. **Conversion #1 sur le site** : clic sur `Get Started` ou `Buy` (le prix)
4. **Conversion finale** : saisie de l'adresse mail (waitlist)

Sur le site actuel il y a déjà : bouton `Get Started`, bouton `Buy` (avec le prix), le formulaire. Quand on clique sur `Get Started` on peut mettre son email pour être notifié. Normalement tout va toujours sur la même page → côté routing ça devrait aller.

### 1.2 Stack & tracking — à explorer de mon côté
- Question ouverte : est-ce qu'on **reste sur Lovable** ?
- **Limitation fondamentale de Lovable** : on ne peut pas trier la donnée, pas l'analyser/filtrer comme on veut, pas s'exclure soi-même des stats.
  - Contournement partiel : si on présente à beaucoup de gens, notre propre trafic devient minime et biaise moins. Mais ça reste une vraie limite à poser.
- Si on quitte Lovable : recréer des **databases propres avec des noms clairs**.

### 1.3 Meta Pixel & optimisation de l'algo (point technique très important)
- Tester si on peut **switcher l'algo Meta** de « landing page views » vers « **conversions** ».
- Optimiser la distribution des ads pour un **signal plus fort** : pas forcément le mail, mais au moins le bouton `Get Started` ou le prix, plutôt que la simple ouverture de la page.
- Objectif : signal de conversion plus fort = moins « curiosité », plus intentionnel (sans affirmer que c'est du vrai buyer intent).

### 1.4 Test technique de bout en bout
- Construire une **home page ultra basique** juste pour vérifier que tout s'affiche et que le tracking capte bien la donnée.
- Tester les différentes stacks d'outils, voir comment tout fonctionne ensemble.
- Cette phase peut se terminer par un **mini test réel** : lancer l'ad pendant ~1 jour pour confirmer que toute la chaîne fonctionne.
- **En parallèle** : on peut commencer à travailler sur le design.

---

## 2. Cadrage général — le but du projet

- On a une **business idea** et on utilise des Meta ads pour voir : non seulement est-ce que ça **résonne** avec les gens, mais surtout est-ce qu'ils sont **prêts à payer**.
- C'est un **test de value proposition**.

### Le produit
- Paramétrer un **mail qui s'envoie tout seul à tes proches** si tu ne réponds plus.
- On ne rentre pas trop dans le détail du contenu du mail. Deux directions possibles à garder en tête pour la formulation :
  - **Administratif / pratique** : transmettre des choses importantes (mots de passe, accès aux comptes bancaires, etc.).
  - **Émotionnel** : plutôt une lettre.
- En phase exploratoire : ne pas trop entrer dans le détail, mais prendre en compte ce choix dans **la manière de formuler**.

### Branding vs positionnement (question ouverte)
- Est-ce que ça a du sens de faire varier le **branding** plutôt que le **contenu / positionnement** ?
- Mon hypothèse : le branding **découle** du positionnement et de la cible (on adapte le branding à eux), et pas l'inverse.
- Donc si on fait des variations, est-ce qu'elles doivent porter sur le **design / visuel** ou plutôt sur la **value proposition** ?
- Piste : imaginer plusieurs value props — une **très large**, une plus **administrative**, une plus **émotionnelle**.

### Prix vs value proposition (question ouverte)
- Comment savoir si la **value prop** est intéressante quand le **price point n'est pas le bon** ? Comment tester ça ?
- Piste : tester **plusieurs prix différents**.
- Piste : une **étape intermédiaire** dans le tunnel — d'abord un bouton `Get Started` (création), **puis** le prix en second. → à voir.

---

## 3. Constat — données du Round 1

- Bonnes conversions sur les **pubs** (curiosité), bon taux de clic vers le site.
- **Mais personne n'a rempli son mail à part moi.**
- **Bounce rate : 96 %**, durée de visite **~6 s**.
- **836 visiteurs** (~800 hors moi).
- **Waitlist : 11** (~8-9 hors moi) → conversion très faible, ~**1 %** (9 / 800 ≈ 1,1 %).
- Trafic très **mobile**, beaucoup **pays de l'Est**, sources **Instagram** + **Facebook**.
- Démographie : skew **femmes** ; l'âge est intéressant à regarder.

### Conséquence méthodo
- Comme la conversion n'est pas là, les premières données **n'ont pas vraiment de valeur** : ce sont des données de gens qui **n'ont pas converti** → on ne peut pas en tirer de conclusions solides.
- Mais on ne peut pas non plus rester indéfiniment en scope purement exploratoire.

---

## 4. KPI à tracker / améliorer

- **Nb d'arrivées** sur la webpage (impressions → clics → arrivées).
- **Durée de visite** (6 s) → à améliorer ; rester plus longtemps = cherche à comprendre.
- **Bounce rate** (96 %) → à améliorer et **bien documenter les raisons** (un bounce élevé peut signaler un **désalignement ad ↔ site**, parmi d'autres causes).
- **Nb de waitlist** (emails captés).

---

## 5. Bilan / diagnostic

- **Problème principal** : ça n'a pas converti **au-delà de la visite**.
- **Cause #1 remontée** : mauvaises incentives Facebook — l'algo était optimisé pour « aller sur le site » (ce qui a bien marché), mais pas pour convertir plus loin.
- **Solution 1** : mieux s'outiller pour faire de meilleures analyses → utile mais **ne règle pas le problème** de fond.
- **Solution 2** : mettre les **bonnes incentives Facebook** pour pousser le bon trafic.
- **Parti pris à prendre** : si on pousse le bon trafic cette fois, **comment analyse-t-on les résultats** ? Quelles sont **nos hypothèses** ? → à définir.

### Reframing confirmé (le fix #1)
- Le problème = on ne capturait pas l'**intent**, et les **incentives Facebook** étaient mauvaises.
- Le « meta pixel situation » du brief = **changer le setting des ads** pour que Meta optimise le **nouveau trafic** non plus vers les *landing page views* mais vers **`Get Started` / le prix / le mail**. → C'est bien ça l'intention.

### Mobile : pas une cause racine
- J'ai checké le site sur mobile (mon tel) : le **bouton n'est pas au-dessus de la ligne de flottaison** (« an email once a month when… » puis il faut scroller pour le prix / `Get Started`).
- **Mais** le format est **plutôt bien responsive**. → Le mobile-friendly est un **must à faire** (cf. brief), mais ce **n'est pas une des causes** du problème de conversion. À ne pas confondre.

---

## 6. Hypothèses sur la non-conversion (brique 2)

Pourquoi les gens ne franchissent pas la nouvelle étape de conversion. Plusieurs causes possibles, à hiérarchiser.

### H1 — Mauvais trafic (cheap traffic) — cause #1
- Hypothèse : la value prop et le site sont peut-être bons, mais l'algo optimisé *page views* a juste attiré du **trafic pas cher, pas intéressé, pas la cible**.
- **Fix** : mettre le Meta Pixel → optimiser pour la conversion. Normalement ça ne sera plus un problème.
- C'est sain comme point de départ : baseline = sur ~800 personnes, **0 mail**, **~10** sur la page waitlist. Ce sont **ces stats qu'on veut améliorer** cette fois, avec un **tracking plan bien défini** (on sait ce qu'est une mauvaise conversion et comment l'améliorer).

### H2 — Incohérence visuelle/branding ad ↔ site
- Les ads qui marchent le mieux (#1, #2, #3, #4) ont un design **totalement différent** du website.
- Est-ce que ça joue sur la **confiance** ?
- **Test** : faire un design/branding **identique** entre l'ad et le site → si la conversion augmente, hypothèse validée.

### H3 — Site/branding « pas assez beau » → à écarter pour l'instant
- Hypothèse : les gens ne s'inscrivent pas parce que le visuel/branding ne plaît pas.
- Mon avis : **on peut écarter** cette hypothèse en premier lieu. Le branding est-il vraiment si important ? La **value / le contenu** prime sans doute sur le branding au début.
- Logique : faire d'abord un test sur la **value proposition** → identifier les vrais utilisateurs potentiels (géo, H/F, âge) → **ensuite seulement** tester les designs / branding.

### H4 — Manque de clarté (lack of understanding)
- Même s'ils comprennent, veulent, et seraient prêts à payer → problème de **clarté**.
- Le **texte est à retravailler** : trop compliqué à comprendre, parfois trop **poétique/abscons**.
  - À tester : approche **poétique** vs approche **straight to the point**.
  - La value prop n'est pas claire d'entrée (« You send an email once a month… »).
  - **Sous-titres à développer** : les gens ne liront pas le reste.
  - La partie qui décrit le **process** doit faire comprendre les **bénéfices pour eux**.
- Vrai travail de **landing page** : présenter le **problème** du customer → présenter ta **solution / société** comme LA solution → expliquer les **bénéfices**.
- Faire des **variantes** sur les problèmes et bénéfices qu'on veut mettre en avant. → à voir si on teste ça.

### H5 — Mauvaise value proposition / mauvais prix
- La value prop elle-même, ou le prix, ne sont pas les bons.
- → Tester **différentes value props dès le début**.

### Idée prix (complément)
- Plutôt que mensuel/annuel : tester un **lifetime** vs un **abonnement** (annuel), avec des **prix plus cheap**.

---

## 7. Approche proposée (séquencement)

1. **Phase technique de prérequis** (tracking, pixel, stack).
2. Retravailler la **structure en sections** du website (un seul format visuel / design / branding au départ).
3. Faire **varier 2-3 value props** (positionnement + façon dont c'est expliqué).
4. **Lancer la 1re campagne de test** → résultats sur ce qui fonctionne.
5. **Si** on obtient des conversions intéressantes → **alors** tester des variantes de **visual design & branding**.

**Principe clé — isoler les variables / réduire l'effort :**
- Garder le **même website**, ne changer que **couleurs / photos / police / primaire-secondaire / usage d'images / gradients** (comme sur les ads).
- **Structure du texte et sections exactement identiques.** On teste des designs visuels différents entre ads et sites avec une structure constante.

---

## 8. Prochaines étapes & répartition

- **Moi** : j'ai creusé le point 1 (mise en place technique). Débrief lors du **prochain call** (demain ou après-demain).
- **Claude** : réfléchir aux **prochains tests** à faire —
  - inclure l'aspect technique + changement des incentives de conversion Facebook Ads,
  - puis un website avec p. ex. **2 value props différentes**.
- Note : côté build, **swapper le texte des value props est facile**. La **vraie difficulté = bien réfléchir à QUOI tester et COMMENT le présenter**.
- Si c'est Claude qui fait ce travail : Jonathan peut **guider sur la structure générale d'une landing page** et **les infos nécessaires** → il enverra un **document** là-dessus.

---

## 9. TODO

- [ ] **M'envoyer les textes complets des ads qui ont le mieux performé** (le copy entier, pas tronqué).
  - Confusion à clarifier : le tout premier (« You Alive? ») a un **nom** qui n'est pas le **texte** ; les textes sont en dessous (ex. « Death Email — The Important Facts To Those… »). Comprendre comment c'est structuré et voir les textes en entier.
