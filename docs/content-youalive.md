# You Alive — Round 2 content (Jane-validated)

> Source of truth for the site copy. Structure = `structure-landing-youalive.md`.
> All copy below is **shared by the 3 variants (A/B/C)**. Only branding/visuals differ per variant (`variants-youalive.md`).
> **Status:** Jane's selections applied (her green = 1st choice in the Notion "Content landing page" doc).
> This file mirrors `you-alive/src/content/site.ts` 1:1 (site.ts is what the code actually renders). Keep both in sync.
> Strategic frame: **email-notification only, no sensitive-data storage** (per 19 June meeting) — encryption/vault copy removed.

---

## Hero

- **brand_lockup**: `You Alive?`
- **h1**: `Leave nothing unsaid. Leave nothing unfound.`
- **subtitle**: `No scramble for passwords, no guessing your wishes. Just the answers you left them, ready the day they're needed.`
- **cta_label**: `Start my plan`
- **reassurance_line**: `Join 623 people getting their affairs in order.` *(Jonathan set a modest, believable count; replace with a real number once available.)*

## Problem

- **title**: `Logins, documents, last wishes: someone has to sort it all.`
- **body**: `Death doesn't log you out. Subscriptions keep charging, accounts stay active, and years of photos and messages get locked behind passwords no one has. Your family inherits the cleanup, in the middle of their grief.`

## Solution / How it works (3 steps)

- **intro**: `How You Alive works`

### Step 1 — preparation
- **title**: `Don't know where to start? We walk you through every step.`
- **body**: `Everything important, gathered into one secure plan. We prompt, you answer, and your family is covered, without the stress of doing it alone.`

### Step 2 — released only when it should be (Version A, M1 inactivity check-in)
- **title**: `A quick check-in keeps it sealed; your silence is what releases it.`
- **body**: `We check in with you now and then. Miss a few over several weeks and we begin a careful release, after trying hard to reach you first.`

### Step 3 — your family grieves, not scrambles
- **title**: `Your family is guided through everything, instead of left guessing.`
- **body**: `Your family doesn't have to search or guess. They get one clear access that unlocks your whole plan, exactly as you organized it.`

## Pricing + CTA

- **title**: `Take care of them, before you can't.`
- **subtitle**: `Step by step, we help you prepare, protect and pass on what matters.`

### Plans

**Annual (highlighted as "best value"):**
- name: `Annual`
- price: `$40 / year`
- descriptor: `Best value · 2 months free`
- cta_label: `Start my plan`

**Monthly:**
- name: `Monthly`
- price: `$4 / month`
- descriptor: `Flexible, cancel anytime`
- cta_label: `Start my plan`

### Included (same on both cards)

Jane's 4 greens + Jonathan's email-only additions. Ordered setup → content → sharing → release, ending on `Verified release`.

- `Personal guidance` *(Jonathan-validated reframe of the old "Guided setup", accompaniment angle)*
- `Will & directives` *(Jane green)*
- `Final letters` *(Jane green)*
- `Personal messages` *(Jane green)*
- `Trusted contacts`
- `Lawyer / notary access`
- `Multiple recipients` *(Jane green)*
- `Inactivity check-in`
- `Verified release`

### Under the cards

- **reassurance_line**: `No lock-in. Export your plan whenever you want, it's always yours.` ⚠️ **GAP — no Jane pick** (4 options, none greened). Jonathan's rewrite, avoids overpromising encryption.

## Testimonials (3 in one block)

> Note: Jane greened #2 and #3, both "triggered by another's death" angle (angle overlap, kept as her choice).

1. **Sarah, 39** — `"A close friend died suddenly on holiday last summer. It hit me how unprepared I was. Two weeks later, my plan was done."` *(angle: triggered by another's death)*
2. **Lena, 44** — `"When my sister-in-law passed, my brother-in-law spent months chasing accounts, passwords, subscriptions. I didn't want my husband to live that."` *(angle: triggered by another's death)*
3. **Irina, 36** — `"I added my notary as a trusted contact in two clicks. Knowing she has access if something happens is a weight off my shoulders."` *(angle: practical / lawyer sharing)*

## FAQ (4 questions)

> AES-256 / zero-knowledge security Q deliberately dropped (not greened, "to discuss next meeting" — consistent with email-only scope).

1. **Q**: `How do you actually know I'm gone?`
   **A**: `We never act on a single signal. We check in with you regularly; if you stop responding, we try to reach you over several weeks. Your trusted contacts confirm before anything is released. Nothing is triggered by mistake.`

2. **Q**: `Can I share access with my lawyer, notary or several trusted people?`
   **A**: `Yes. You can add as many trusted contacts as you like, partner, family, lawyer or notary, and choose exactly what each one can see, today or after you're gone.`

3. **Q**: `Can I update or change my plan over time?`
   **A**: `Yes, anytime. Life changes (new account, new recipient, divorce, a child being born) so does your plan. Edit it in seconds from any device, as often as you want.`

4. **Q**: `What if I cancel? Can I keep my data?`
   **A**: `Your data is always yours. You can export it at any time, encrypted, and take it with you. If you cancel, everything is permanently deleted from our servers within 30 days unless you ask us to keep it.`

## Final CTA

- **push_headline**: `Ready to leave them ready?`
- **cta_label**: `Start my plan`

## Footer

- **lines**: `["You Alive — prepared today, delivered when it matters.", "Privacy policy", "Contact"]`

---

## Post-click (off-page — kept for completeness, not part of design review)

### Fake-door reveal (full-screen takeover)

- **badge**: `Launching soon`
- **title**: `Thank you for your interest!`
- **body**: `You Alive isn't live yet, we're still building it. Leave your email to get first access and 20% off at launch.`
- **email_placeholder**: `your email`
- **field_note**: `First access + 20% off at launch`
- **submit_label**: `Reserve my spot`
- **privacy_line**: `No spam. One email when we launch.`
- **features_title**: `Which features matter most to you?` (optional, multi-select pills)
- **features**:
  - `store-passwords` : Store passwords & logins
  - `final-letters` : Write final letters
  - `last-wishes` : Document my last wishes
  - `photos` : Save photos & memories
  - `trusted-contacts` : Assign trusted contacts
  - `access-control` : Control who sees what, and when
  - `subscriptions` : List subscriptions to close
  - `verified-release` : Verified release

### Confirmation page

- **title**: `Your spot is reserved.`
- **body**: `We'll email you the moment You Alive opens. Until then — nothing to do, except maybe think about what you'd want to say.`

---

## Open items / gaps

1. **Hero reassurance counter** — set to `623` (believable placeholder); swap for a real number once available.
3. **Pricing model** — monthly+annual locked; annual+lifetime noted as alternative (Jane curious to test interest, but flagged the financial/insurance complexity).
4. **Testimonials angle** — #1 and #2 overlap (both "another's death"); kept as Jane's green picks. Swap one for a self/relief angle only if more variety wanted later.
