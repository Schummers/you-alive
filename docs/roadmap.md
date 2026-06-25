# You Alive? — Roadmap

> Single source of truth for the You Alive ad test. Mirrored to the Notion project page "🪦 Project 'You Alive?' with Jane". The cross-project north star (reusable system, fakedoor-kit, Jane's full workflow) lives separately in [../../notes/vision-future.md](../../notes/vision-future.md) — not part of this roadmap.

**Status (2026-06-25):** Phases 1-3 done. Test built, deployed, QA-validated. 3 finalists live on `/a /b /c`. Awaiting ad launch (Phase 4). PostHog dashboard ready: [You Alive — bake-off A/B/C](https://eu.posthog.com/project/200197/dashboard/770504) (id 770504).

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

## Phase 1 — Tech & tracking ✅ Done

**Goal:** capture the right data and optimize the right signal before any design effort. **Resolves H1.**

### Stack

| Tool | Role |
|---|---|
| **Next.js** | The site itself. One codebase, multi-variant by route. |
| **GitHub** | Source of truth. Repo `Schummers/you-alive`. Push to `main` triggers deploy. |
| **Vercel** | Hosting + auto-deploy on push. Preview URL per branch, prod URL per merge. |
| **Domeneshop** | Domain registrar only. CNAME `alive.blackdotads.com` → Vercel. |
| **Claude Code** | Jonathan's IDE. Builds, edits, tests, deploys from the terminal. |
| **Meta Pixel + CAPI** | Sends conversion events to Meta so the ad algo optimizes for real intent. |
| **PostHog** (EU) | Own analytics: funnel, segmentation, session replay, geo. |
| **Notion** | Source of truth for captured emails (`/api/waitlist` → Notion DB). |

### Done
- Stack live: Next.js + Vercel + GitHub auto-deploy. [alive.blackdotads.com](https://alive.blackdotads.com) (Domeneshop CNAME → Vercel, HTTPS OK).
- Notion waitlist `/api/waitlist` → DB `37dd9a2c57d680aaab67d701e1c3f959`. Verified end-to-end (email, variant, UTM, fbclid, country, submitted at).
- PostHog wired (EU, `/ingest` rewrite). Events + session replay confirmed firing in prod. Capture gated to `/a /b /c` (gallery/preview opted out) via `instrumentation-client.ts`.
- Own-traffic exclusion: `?internal=1` sets opt-out cookie.
- **Meta Pixel** `1543524853825473` installed. Events mapped: `cta_click → InitiateCheckout`, `pricing_view → ViewContent`, `email_submit → Lead`.
- **Conversions API** server-side ([src/lib/meta-capi.ts](../src/lib/meta-capi.ts) + [/api/waitlist](../src/app/api/waitlist/route.ts)): hashed email, IP, UA, `_fbp`/`_fbc`. Dedup via shared `event_id`.
- `posthog-node` bumped 5.21.2 → 5.38.4 (cleared the SDK-outdated health check).
- **End-to-end QA validated in prod** (Playwright network proof): PageView + InitiateCheckout (with `cd[design]`) + Lead (hashed email + dedup `eid`) fire; PostHog `/ingest/e/` + `/ingest/s/` (replay) return 200; `/api/waitlist` 200; Notion row complete.

> Note: local `.env` had a stale `NEXT_PUBLIC_POSTHOG_KEY` vs the code's `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN`; prod Vercel has the correct var, so prod is unaffected.

---

## Phase 2 — Content (clarity — H2) ✅ Done

**Goal:** clear, conventional landing copy. Single shared content across the 3 variants. **Resolves H2.**

### Done
- Structure locked (CRO-based): hero → problem → solution (3 steps) → pricing → testimonials → FAQ → final CTA + footer.
- Copy written and locked, source: [src/content/site.ts](../src/content/site.ts). Pool published on Notion: [Content landing page](https://app.notion.com/p/380d9a2c57d68060a05fc401bd9852b4).

### Open (loop, not blocking)
- If the value prop needs to move after results, Jane provides new copy (or edits `site.ts` herself).

---

## Phase 3 — Design (visual coherence — H4) ✅ Done

**Goal:** 1 design per top ad (A/B/C), visually consistent with its ad. **Resolves H4.**

### Done
- Bake-off of generators run (Stitch / frontend-design / taste-skill / DESIGN.md). See [design-rapport-comparatif.md](design-rapport-comparatif.md).
- Manual track chosen as the finalists. 3 designs frozen and live, one per ad:

| | A (`/a`) | B (`/b`) | C (`/c`) |
|---|---|---|---|
| Design | `a-manual-03` (Editorial/Nature) | `b-manual-01d` (Soft/Wellness) | `c-manual-03` (Retro/Forest) |
| Ad | image1 (nature, serif) | image2 (gradient pastel) | image3 (forest, retro) |
| CTR (Round 1) | 7.10 % | 6.73 % | 5.91 % |
| Audience | F 35-44 | balanced, younger | M 55-64 |

- Routes `/a /b /c` decoupled from `/preview` ([src/app/{a,b,c}/page.tsx](../src/app/a/page.tsx)). Variant carried by `$pathname`. See [variants-youalive.md](variants-youalive.md).

---

## Phase 4 — Launch & measure ⏳ Ready

**Goal:** Meta campaign, fair test, decision. The setup is decided; spend is gated on one open decision (kill/go threshold).

### Decided setup
- **3 prod links**, one per variant: `alive.blackdotads.com/a`, `/b`, `/c`.
- **Two campaigns, same Pixel `1543524853825473`** (different optimization, not different pixel):
  - `youalive-landing-views` — Traffic objective, "Landing page views" (Pixel confirms the page loaded).
  - `youalive-cta-clicks` — Sales/Conversions, Pixel event `InitiateCheckout` (the "Start my plan" click).
- **URL parameters** (same string both campaigns): `utm_source=facebook&utm_medium=paid&utm_campaign={{campaign.name}}`. The variant is the link itself (`/a /b /c`), so no `utm_content` needed. `{{campaign.name}}` auto-fills per campaign → lets us compare the two strategies in PostHog.
- **Reading results**: PostHog dashboard 770504 (funnel decider + visitors + reached-pricing + country + device + median duration), all broken down by variant. Meta-side reporting per campaign.

### Open before any spend
- [ ] **Kill/go threshold** with Jane: cost per captured email + minimum volume (~100 visitors/variant before concluding).

### Launch-day ops
- [ ] Delete the Notion QA test row.
- [ ] Set the dashboard 770504 start date to launch day (drops QA noise).
- [ ] Jonathan visits `…/a?internal=1` to exclude his own traffic.
- [ ] First-hour tracking check on real traffic (PostHog Live + Meta Test Events + one real Lead in Notion).

---

## Next steps & ownership

**Launch (Jane)** — set up the two campaigns (CTA-optim vs Landing-view-optim) × 3 links per the brief sent; run and monitor.

**Post-launch (together)** — analytics session: read dashboard 770504, decide the winner (variant × optimization strategy) respecting the volume threshold. If the value prop needs work → content loop (Phase 2 open item).

**Capitalisation / Jane autonomy** — walkthrough session of `fakedoor-kit` (Jane clones the template → her own repo/keys/Vercel, becomes independent). Jane owes Jonathan a **Malt review**.

**Repo hygiene (Jonathan)** — the `chore/cleanup` work is **merged and deployed** (commit `9c75ce0`): bake-off iterations archived to `archive/`, `/gallery` + `/preview` set to noindex, registry trimmed to the manual track (11 slugs), reconciled on top of `/a /b /c` + the posthog-node bump. Remaining (optional): remove the gitignored junk (`.node_modules_corrupt_*`, `.next`, etc.). Tracked in [../../PRODUCT-LOG.md](../../PRODUCT-LOG.md).

---

## Decisions locked

**Stack & hosting** — Next.js on Vercel. Domeneshop = registrar only (CNAME → Vercel). Notion = source of truth for emails (no app DB).

**Variant architecture** — One site, variants by route (`/a /b /c`). Round 2: content fully shared, only the design differs. No PostHog experiment — each ad points to its variant URL; variant read from `$pathname`.

**Tracking** — Meta Pixel + CAPI for the ad algo. PostHog for own analysis (funnel, segmentation, replay; EU). Server-side mirror for ad blockers. Own-traffic exclusion via cookie + country filter.

**Conversion events** — `cta_click → InitiateCheckout` (optimization, volume), `email_submit → Lead` (value). The signup is a fake-door takeover on the same URL, not a separate page; the two "steps" are measured by events, not by two pages.

**Ownership / transfer** — Built in Jonathan's GitHub + Vercel. For reuse, Jane clones the `fakedoor-kit` template into her own repo (never a shared repo).

---

## Vision (out of scope here)

This work is the first concrete brick of a larger reusable system (control center in an AI IDE, one repo per test project, full chain of skills). That north star, the L0→L3 scale, and the Jane-collaboration model live in [../../notes/vision-future.md](../../notes/vision-future.md). The reusable template extracted from this project is `fakedoor-kit` (private GitHub template + `setup-project` skill).
