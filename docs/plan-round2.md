# You Alive? — Round 2 Work Plan

## Objective

Use Meta ads to find market fit: do people **click**, do they **pay**, and **who** are they?

## Round 1 — situation

| Metric | Value |
|---|---|
| Visitors | ~800 (excl. us) |
| Visit duration | ~6 s |
| Bounce | 96 % |
| Waitlist clicks | ~9 → 1.1 % |
| Emails | **0** |

Strong **curiosity** (ad CTR), broken **conversion**.

## Why it didn't convert — hypotheses

| # | Reason | Test | When |
|---|---|---|---|
| H1 | **Bad traffic** (algo optimized for views) | Meta Pixel + optimize for conversion | Phase 1 |
| H2 | **Unclear copy** | Rewrite content: problem → solution → benefits, explicit value prop | Phase 2 |
| H3 | **Wrong value prop** | Test 2-3 value props | Later (after Round 2) |
| H4 | **Visual incoherence** ad ↔ site | Build 1 design per top ad, measure conversion | Phase 3 (Round 2 core) |
| H5 | Site/branding not appealing | Test branding/visual identity once the target is known | Later |

**Round 2 tests H1 + H2 + H4.** Single shared content, 3 designs aligned with the 3 top ads.

---

## Phase 1 — Tech & tracking

**Goal:** capture the right data and optimize the right signal before any design effort. **Resolves H1** (bad traffic — switch ad algo from page-views to actual conversion).

### Stack

| Tool | Role |
|---|---|
| **Next.js** | The site itself. One codebase, multi-variant by data (content + theme tokens). |
| **GitHub** | Source of truth. Public repo `Schummers/you-alive`. Push to `main` triggers deploy. |
| **Vercel** | Hosting + auto-deploy on push. Preview URL per branch, prod URL per merge. |
| **Domeneshop** | Domain registrar only. CNAME `alive.blackdotads.com` → Vercel. |
| **Claude Code** | Jonathan's IDE. Builds, edits, tests, deploys from the terminal. |
| **Meta Pixel + CAPI** | Sends conversion events to Meta so the ad algo optimizes for real intent. |
| **PostHog** (EU) | Own analytics: funnel, segmentation, session replay, geo. GDPR-friendly. |
| **Notion** | Source of truth for captured emails (`/api/waitlist` → Notion DB). |

### Done
- Stack: Next.js + Vercel + GitHub auto-deploy. Repo `Schummers/you-alive` (public).
- Live: [you-alive-snowy.vercel.app](https://you-alive-snowy.vercel.app) and **[alive.blackdotads.com](https://alive.blackdotads.com)** (Domeneshop CNAME → Vercel, HTTPS OK).
- Notion waitlist `/api/waitlist` → DB `37dd9a2c57d680aaab67d701e1c3f959`. Tested end-to-end (email, variant, UTM, fbclid, country auto, submitted at).
- PostHog wired (EU, `/ingest` rewrite). Receiving events.
- Own-traffic exclusion: `?internal=1` sets opt-out cookie.
- **Meta Pixel**: installed (`1543524853825473`). Events mapped: `cta_click → InitiateCheckout`, `pricing_view → ViewContent`, `email_submit → Lead`.
- **Conversions API** server-side ([src/lib/meta-capi.ts](you-alive/src/lib/meta-capi.ts) + [/api/waitlist](you-alive/src/app/api/waitlist/route.ts)): hashed email, IP, UA, `_fbp`/`_fbc`. Dedup via shared `event_id`.
- System User + access token (with Dataset Quality API). Automatic Advanced Matching ON.

### Todo
- [ ] Fix PostHog server token env-var mismatch (server mirror silently dropping events).
- [ ] **End-to-end browser test** (2 min): `alive.blackdotads.com/a` → CTA → submit email → `/a?internal=1`. Check Notion row, PostHog funnel, Meta Test Events (browser + server `Lead` deduped).
- [ ] Vercel env vars: `NEXT_PUBLIC_META_PIXEL_ID`, `META_ACCESS_TOKEN`.
- [ ] (Optional) ~1-day ad smoke test under real traffic.

---

## Phase 2 — Content (clarity — H2)

**Goal:** rewrite the entire site content to convert better. A clean, conventional landing page (problem → solution → benefits → pricing → reassurance). **Resolves H2** (unclear copy). Single shared content, same on all 3 variants.

### Done
- Structure locked, based on CRO research: hero → problem → solution (3 steps) → pricing → testimonials → FAQ → final CTA + footer.
- Full first draft written, with options to pick for each section.
- Published on Notion: [Content landing page (To validate)](https://app.notion.com/p/380d9a2c57d68060a05fc401bd9852b4).

### Todo
- [ ] **Jane reviews the Notion page** and picks her preferred option for each section. Once locked, content is frozen → feeds the 3 designs identically.

---

## Phase 3 — Design (visual coherence — H4)

**Goal:** **1 design per top ad** (A/B/C), each visually consistent with its ad. Content identical across the 3. **Resolves H4** (ad ↔ site visual coherence).

**Deliverable for Round 2:** 3 landing pages ready to receive ad traffic. Beyond Round 2: pick the winning generator → first brick of a reusable system (see Vision).

### Approach — design bake-off

Test 4 generators on the same content + same ad, keep the best. See [design-rapport-comparatif.md](project management/design-rapport-comparatif.md).

| Test | Tool | What we evaluate |
|---|---|---|
| 1 | **Google Stitch** (MCP) | Quick ideation from ad + text; cost to port to Next.js |
| 2 | **Claude Code + `frontend-design`** | Anthropic skill, direct output as Next.js components |
| 3 | **Claude Code + `taste-skill`** | Same engine + anti-slop layer + Dials |
| 4 | **Claude Code + DESIGN.md** (VoltAgent) | Generation constrained by a chosen brand identity |

Each design → `src/designs/<slug>/index.tsx`, fed by shared `content` + `useFakeDoor` hook. Preview at `/preview/<slug>`, galerie at `/gallery`. Winning generator → final 3 designs frozen in `DESIGN.md`.

### Variants A / B / C — see [variants-youalive.md](project management/variants-youalive.md)

| | A (`/a`) | B (`/b`) | C (`/c`) |
|---|---|---|---|
| Ad | image1 (nature photo, serif) | image2 (gradient pastel) | image3 (vert forêt, retro) |
| CTR | 7.10 % (top) | 6.73 % | 5.91 % |
| Audience | F 35-44 | balanced, younger | M 55-64 |
| Cost / result | ~0.03-0.04 $ | ~0.03-0.04 $ | **0.02 $** (lowest) |

### Todo
- [ ] **Test 1 — Stitch**: generate, evaluate cost to port. Decide go/no-go.
- [ ] **Test 2 — frontend-design**: parallel subagents, 1 brief per ad direction.
- [ ] **Test 3 — taste-skill**: install, run with Dials (variance × motion × density), compare to test 2.
- [ ] **Test 4 — DESIGN.md**: pick a brand kit from VoltAgent, generate.
- [ ] **Bake-off review**: pick the winning generator.
- [ ] **Generate final 3 designs** (one per ad) and freeze each in its own `DESIGN.md`.
- [ ] **Polish per ad**: exact fonts (Canva files from Jane), hex codes, mood validation.

---

## Phase 4 — Launch & measure

**Goal:** Meta campaign, fair test, decision.

### Todo
- [ ] **Custom conversions per URL** in Events Manager (`/a`, `/b`, `/c`) for per-variant reporting.
- [ ] **Campaign**: Sales/Conversions objective, optimize on `Lead` (`cta_click` → InitiateCheckout if Lead is too rare).
- [ ] **Fair test**: native A/B test (URL as variable) OR separate ad sets with per-variant daily minimums.
- [ ] **Budget** with Jane: size for ~50 conversions/week per ad set (learning phase).
- [ ] **Kill/go threshold**: cost per captured email, set before launch.
- [ ] Launch, monitor 7-30 days.
- [ ] Read results: best CTR variant ≠ best conversion variant. Esthetics decide WHO clicks.

---

## Decisions locked

**Stack & hosting** — Next.js on Vercel. Domeneshop = registrar only (CNAME → Vercel). Notion = source of truth for emails (no app DB).

**Variant architecture** — One site, variants = data (content + theme tokens). Round 2: content fully shared, **only theme tokens differ**. Routing by path (`/a`, `/b`, `/c`).

**Tracking** — Meta Pixel + CAPI for the ad algo (optimize on `cta_click` → `InitiateCheckout` because volume). PostHog for own analysis (funnel, segmentation, replay; EU). Server-side mirror for ad blockers. Own-traffic exclusion: cookie + country filter.

**Budget mechanics** — Daily minimum per ad set so Meta can't starve a variant. Free distribution inside an ad set.

**Ownership / transfer** — Build in Jonathan's GitHub + Vercel. Public repo, Jane pulls when she takes over.

---

## Vision (out of scope, Round 2)

The bigger picture this work plugs into. Reference doc: [vision-future.md](project management/research/vision-future.md).

**The idea.** Jane's business is testing ideas quantitatively via Meta Ads. Today her workflow is fragmented (Notion → Canva → Lovable → Domeneshop → Lovable analytics). The vision is a **control center inside an AI IDE** (Codex for her, Claude Code for me), with one repo per test project and skills covering the full chain:

1. **Scoping** — skills to break down a campaign (what we test, which hypotheses).
2. **Ad generation** — text + visual variants (Canva MCP, HTML visuals, image gen skills).
3. **Meta Ads via MCP** — no more manual campaign configuration.
4. **Hypothesis-aligned landing pages** — ad A points to a site matching its positioning, ad B to its own. Ad↔site coherence by default.
5. **Integrated tracking** — measurement tools wired up automatically per campaign.
6. **Deployment** — each site bound to a new subdomain on her company's domain.

**Why invest in this.** Reusable across Jane's other clients, Asma's e-commerce campaigns, Jonathan's own SaaS launch, future clients.

**What Round 2 contributes.** Phase 1 = the tech foundation (multi-variant site, swappable design, Pixel + tracking integrated, Vercel deploy, public repo). Phase 3 = the first design generator brick (winning tool of the bake-off becomes the reusable engine). The ad side (Canva, Meta MCP, image generation) stays out of scope — Jane keeps her hand on the ads.
