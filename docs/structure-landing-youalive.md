# You Alive — Landing page structure & copy blueprint (Round 2)

> Applied blueprint reconciling the locked structure (meeting, 12 June 2026) with the research in `research/`.
> Case: digital product, fake-door, cold Meta traffic, mobile-first.
> General theory lives in `research/`; this doc holds only what's applied to You Alive, plus the copy proposals Jane chooses from. Final chosen copy lives in `content-youalive.md`.
> Sources for the theory below: the two deep-search docs + `landing-page-conversion-hacks.md` + `sales-page-blueprint-10k.md`.

## Cross-cutting principles (apply to the whole page)

| Principle | Rule | Source |
|---|---|---|
| Message-match | H1 + hero visual mirror the ad's exact promise and style. 1 ad = 1 page variant. | SplitBase, CXL ("scent") |
| Speed | < 2-3 s load. No heavy images, no useless scripts. Fix before touching copy (mobile PageSpeed > 70). | Google/SOASTA: 1→3 s = +32% bounce |
| Zero navigation | No menu, no outbound links. 1 page = 1 action (Buy → email). | NN/g, 1:1 attention ratio |
| Repeated CTA | The "Buy" CTA appears in the hero AND after each persuasion block, same label everywhere (same button as hero: same color, same words). | CXL (+304% with below-fold CTA); sales-blueprint |
| Sticky CTA | Bottom-of-screen only (not a top/header CTA: eats above-the-fold, far from the thumb, reads as nav). ≥ 56 px tall, target ≥ 44×44 px, appears once the hero CTA scrolls off. | Growth Rock +5.2% (proprietary A/B); EasyApps +14% mobile (vendor, biased); Apple HIG (44px). Caveat: practitioner opinion, not generalizable, test it. |
| First-person CTA | "Start **my** plan" beats "Start your plan". | Unbounce: "my" vs "your" up to +90% CTR |
| Human, conversational copy | Write like a person, not a brand. Short sentences, direct questions, contractions, empathy. | conversion-hacks #4 |
| Benefits > features | Lead with the outcome, not the technical detail; back it with the feature. | both new docs |
| Scannable | Bullets, short sentences, vertical sections. Bullets are read ~55% more than paragraphs. Never horizontal tabs or subpages. | Baymard; sales-blueprint |

> **Parked idea — CTA booster line** (small friction-killer under the button, e.g. "Set up in 5 minutes", "No card required"; research-backed, conversion-hacks #9). Jonathan is deciding whether to use it. Not in the page for now.

## Sections, top to bottom

### 1. Hero (above the fold, ~400 usable px on mobile)

**Goal:** earn the scroll (57% of attention happens here) and match the ad.

The hero must communicate 3 things: **what it is**, **why it matters**, **how to get it** (sales-blueprint).

Must-haves:
- **H1**: benefit/result, ≤ 8-10 words, message-match with the variant's ad.
- **Subtitle**: 1-2 lines, makes the gain concrete (the specificity the H1 lacks).
- **CTA "Buy"**: contrasted, visible without scrolling, first-person label (pixel event `cta_click`).
- **1 social-proof signal** near the CTA (counter, rating, or reassurance line).
- Optional: **eyebrow line** above the H1 for context ("this page is exactly for you"), helps skimmers (conversion-hacks #3).
- Optional: **3 outcome check-marks** (real outcomes, not features) near the CTA (sales-blueprint).
- **Visual**: direct echo of the ad's visual (colors, type, image). Aim for an **after-state** image (loved ones at peace), not the user/team, not a morbid shot.

Errors to avoid: generic title ("Welcome", "The future of..."), stock photo, 2 competing CTAs (no "Get Started" + "Buy" — meeting decision: Buy only).

**Proposals (Jane picks 1 per field):**

`brand_lockup`: "You Alive?" (logo at the top, visual continuity with the ad. Not the H1.)

`h1` (hook + benefit):
1. "If something happens to you, they'll still hear from you."
2. "Don't leave your loved ones guessing."
3. "Leave nothing unsaid. Leave nothing unfound."
4. "What your family will need to know, if you're not there to tell them."

`subtitle` (concrete gain + usual-vs-us contrast; prefer the ones naming specific items):
1. "Most families are left guessing where the will, the accounts and the passwords are. Yours won't have to."
2. "Grief is hard enough without a paperwork hunt. Leave answers, not questions."
3. "Your accounts, your documents, your wishes: organized now, delivered to the right people if the worst happens."
4. "You won't be there to sort it out. This makes sure it's already done."
5. "Instead of weeks lost searching through your things, your loved ones get exactly what they need, when they need it."
6. "No scramble for passwords, no guessing your wishes. Just the answers you left them, ready the day they're needed." *(recommended: concrete + contrast + result)*

`cta_label`:
- Purchase intent (feeds the pixel): "Start my plan" / "Secure my plan"
- Action / product: "Leave my instructions" / "Protect my family" / "Write my first message"

`reassurance_line`: "Join 2,400+ people getting their affairs in order." *(counter; fictional number → replace with a real one or remove before going live)*

### 2. Problem

**Goal:** the cold visitor recognizes their own pain before we sell anything (cold traffic = "problem aware" at best). The visitor is the hero; we just show we understand.

Must-haves:
- Name the pain concretely, short (3-5 lines max), emotional but clear.
- Prefer **bullets of recognizable symptoms** ("Does this sound familiar?") over a paragraph (read ~55% more — sales-blueprint).
- Goal is empathy, not guilt: if they see we get their problem, they assume we can solve it.

Error: pitching the product here. This section sells the problem, not the solution.

**Visual:** the section carries a visual that can vary by variant (photo, icons, or illustration). Not necessarily a photo. Defined at design phase.

**Stats:** for this first draft we write for storytelling; numbers tagged `[to source]` are placeholders to replace with real stats (dedicated research later). Real US stats available (Caring.com 2025 Wills Survey, https://www.caring.com/resources/wills-survey): 52% don't know where their parents keep important documents (58% don't know their contents); 55% have no estate-planning documents; 24% have a will. Caveat: audience may not be US — localize.

**Proposals (Jane picks 1 per field):**

`title` (the pain / the duty, problem-aware):
1. "When someone dies, the people they love are left to figure it all out."
2. "Most of us never leave a plan. Our families pay for it."
3. "Your loved ones won't know where to look, or what you wanted."
4. "Preparing for your death is hard. Leaving them unprepared is harder."
5. "Loving them means planning for the day you're gone."
6. "When you die, your accounts don't, and neither do the bills or the paperwork." *(digital+admin combined)*
7. "Logins, documents, last wishes: someone has to sort it all." *(combined)*
8. "Your passwords, your papers, your wishes, all locked in your head." *(combined)*

`body` (3-5 lines, concrete, emotional but clear):
1. "Accounts they can't access. Papers they can't find. Decisions they must make without knowing what you'd have wanted. That's what most families inherit: 55% of people leave no plan at all." *(stat 55%, real)*
2. "The will, the bank logins, the insurance, the letter you never wrote. If it lives only in your head, it disappears with you, and your family is left piecing it together in the worst week of their lives." *(no stat)*
3. "Preparing for your own death is never easy. But 64% of people leave their family with no idea where the important documents are. [to source] Doing it now, even when it's hard, is one of the last real acts of love: so the people you leave behind aren't lost on top of grieving." *(duty/love + 64%)*
4. "After a death, the average family spends months untangling accounts, hunting for documents and guessing at wishes. [to source] You can hand them answers instead, the kindest thing you'll ever leave behind." *(storytelling)*
5. "Death doesn't log you out. Subscriptions keep charging, accounts stay active, and years of photos and messages get locked behind passwords no one has. Your family inherits the cleanup, in the middle of their grief." *(digital)*
6. "When you're gone, your digital life keeps running: your loved ones are left chasing logins, cancelling subscriptions and trying to save what matters, blind, because only you knew where any of it was." *(digital)*
7. "When you're gone, the mess hits all at once: subscriptions still charging, accounts no one can close, documents no one can find, and legal decisions no one knows how to make. 64% of families have no idea where any of it is. [to source] They grieve and untangle it all at the same time." *(digital+admin+legal combined + stat)*
8. "Your digital life keeps running, your paperwork piles up, and your last wishes stay unknown. Someone has to cancel the subscriptions, find the will, access the accounts, and guess what you'd have wanted, in the weeks after losing you. Most families spend over a year sorting it out. [to source]" *(combined + stat)*

> Pool deliberately wide at this stage (8 + 8). To narrow with Jane before the final version.

### 3. Solution / How it works (3 steps)

**Goal:** the unique mechanism in 3 vertical steps, each framed as a benefit (meeting decision).

Must-haves:
- 3 steps max (magic number, memorable). Each title = a **benefit**; the body explains the concrete mechanism underneath (benefit first, then how).
- Research pattern (sales blueprint): **step 1 = the action the user takes** (helped by us), **step 2 = "it's handled"** (no overwhelm), **step 3 = the transformation / happily-ever-after** (not a mechanical step).
- Titles must be **explicit and self-contained** — people skim, the title alone has to land the whole idea. Not cryptic or too short.
- We are the **guide**, the user is the hero. A visual per step (icon/illustration); if a photo, aim for the **after-state**, never morbid.

Errors to avoid:
- "Feature" titles ("Monthly check-in", "Encrypted storage") instead of outcomes.
- Casting "us / the company" as the hero.
- Mishandling the **death-detection mechanism** (see Step 2 question): headlining "validate an email every month" is the most awkward link.

**Base (current site, to reframe):** 01 Write instructions / 02 Monthly check-in / 03 The release. Mechanism is fine, titles too "feature", step 2 (check-in) needs rethinking.

**The story across the 3 steps:** you prepare everything (we make it easy) → [middle: what keeps it safe / makes it work] → your family is taken care of and can grieve in peace.

#### Step 1 — we help you prepare everything, easily
*(benefit: we turn a hard, unfamiliar task into a few guided minutes; we = the guide; body can reference the app / guidance / time saved)*

Title options (explicit) — kept after Jonathan's curation:
1. "We help you get everything important down, in one simple place."
2. "We guide you through what to prepare, so you forget nothing."
3. "Our step-by-step app captures it all: accounts, documents, wishes."
4. "Don't know where to start? We walk you through every step."
5. "Get it all out of your head and into one secure plan, fast."
6. "We help you think of everything most people forget."

Body options (can reference features/app/guidance) — kept after curation:
1. "You don't need to know where to start. Our app walks you through it, prompting you for the accounts, passwords, documents and wishes most people forget, so nothing important slips through."
2. "In a few guided minutes, capture your logins, where your documents are, your final wishes and the letters you want to leave. We handle the structure; you just answer."
3. "Most people have no idea what to prepare. Our guided checklist makes sure you think of everything, from bank accounts to the message you'd want your kids to read."
4. "Answer simple prompts and we build your plan for you: digital accounts, key documents, legal wishes, personal letters. All in one place, all encrypted."
5. "From passwords to your final letter, we help you capture what matters most, with guidance at every step so nothing is left out."
6. "Everything important, gathered into one secure plan. We prompt, you answer, and your family is covered, without the stress of doing it alone."

#### Step 2 — THE MIDDLE: 3 versions for Jane to choose from

The middle step can lead on one of three angles. All three are drafted (3 titles + 3 bodies each); Jane picks the version, then 1 title + 1 body.

**Industry reference (how the big players handle death) — makes the mechanism credible:**
- **Google Inactive Account Manager**: a real dead-man's-switch. After X months of *inactivity*, notifies up to 10 trusted contacts and shares chosen data (download link; they don't log in). → our "check-in" is the Google model, not a weird homegrown thing.
- **Apple Legacy Contact**: you designate a contact who gets an *access key* at setup; on death they provide the key + a *death certificate*, Apple verifies, then grants access. Apple excludes passwords/keychain — exactly the gap You Alive fills.
- **Password managers (1Password, Dashlane, Proton, NordPass)**: *emergency access* = named contact requests access, a *waiting period* lets you decline, otherwise access is granted. All *zero-knowledge* (even they can't read it).
- Positioning (encryption vs bridge): lead with our own **zero-knowledge encryption** (trust standard, easy to claim); we *complement* what Apple/Google leave out (passwords, instructions, wishes). Avoid pure "bridge to free features".

**Release mechanism — options (product-level; informs Version A). Verified via deeper research:**
- **M1 — Inactivity check-in / dead man's switch (Google IAM, GoodTrust):** periodic check-in, you choose the frequency (e.g. 1-4×/month); if you don't reply after N attempts (often 3) over weeks, it triggers → release. Trigger = silence.
- **M2 — Trusted-contact request + waiting period (password managers, Apple-ish):** a named person requests access; a waiting period lets you decline ("I'm still here"); otherwise it opens.
- **M3 — Verified proof / death certificate (Apple Legacy Contact, Google account closure):** contact submits death certificate + ID/access key; we verify (Apple even matches the birthday); then release.
- **M4 — Scheduled / your choice (GoodTrust option):** deliver on a date you set, or any day you choose.
- **M5 — Hybrid (reco):** inactivity detection → repeated attempts to reach you → trusted-contact confirmation + waiting period → release. Belt-and-suspenders, "nothing by mistake".
- Legal frameworks real services lean on (credibility later): RUFADAA (US), ULCC (Canada).
- International note: avoid "notaire"-only; use "the people you trust / your family / your lawyer or notary".

**Version A — Released only when it should be (mechanism-led; each title leads on a different mechanism):**
- titles:
  1. *(M1 inactivity/email)* "A quick check-in keeps it sealed; your silence is what releases it."
  2. *(M2 trusted-contact)* "Someone you trust can trigger it, with a delay only you can stop."
  3. *(M3 verified proof)* "Released only on verified proof of your passing, never on a guess."
  4. *(M5 hybrid, reco)* "Triggered by silence, confirmed by people you trust, never by mistake."
  5. *(M4 your choice)* "Or pick the exact moment yourself, down to a date you set."
- bodies:
  1. *(M1)* "We check in with you now and then. Miss a few over several weeks and we begin a careful release, after trying hard to reach you first."
  2. *(M2)* "A person you trust can request access. You get a waiting period to say 'I'm still here'; only if you don't does your plan open."
  3. *(M3)* "Nothing is released until your passing is confirmed, by verified proof and the people you chose, so it's never triggered too soon."
  4. *(M5 hybrid)* "Inactivity, repeated attempts to reach you, confirmation from trusted contacts, and a waiting period: several safeguards mean your plan opens only when it truly should."

**Version B — Sealed and private (security-led; encryption must stand out in the title):**
- titles:
  1. "Zero-knowledge encryption: not even we can read your data."
  2. "Fully encrypted, end to end, locked to everyone but you."
  3. "Your data is encrypted so completely, we couldn't open it if we tried."
  4. "Bank-grade encryption keeps every password and letter unreadable, except to you."
  5. "Encrypted before it ever leaves your device, readable by no one else."
- bodies:
  1. "Everything you store is protected with zero-knowledge encryption, the standard password managers use. No one can read it, not even us, until the day it's meant for your family."
  2. "Your accounts, passwords and letters are sealed with bank-level encryption. They stay invisible to everyone, including our team, until they're released to the people you chose."
  3. "We can't see your data, and neither can anyone else. It's encrypted end to end, so the most private details of your life stay private, right up to the moment they're needed."

**Version C — In your control, easy to share (control + shareable must stand out):**
- titles:
  1. "Full control, and shareable with anyone you trust, in one tap."
  2. "Update it anytime; share access with your family or lawyer in seconds."
  3. "Your plan, your rules: edit it freely, share it with whoever should have it."
  4. "Always in your hands, easy to update, easy to share."
  5. "You decide who gets access, and can change it whenever you want."
- bodies:
  1. "Life changes, and so can your plan: update it anytime in minutes. You decide who gets access, and can share it with a trusted person, your family, or your lawyer or notary."
  2. "You're always in control. Edit your accounts, documents and wishes whenever you like, and grant access to the people you trust, whether that's your partner, your family or your legal advisor."
  3. "Keep everything current with a few taps, and choose exactly who can see what. Share your plan with a trusted person or your legal advisor, so the right people are ready when it counts."

#### Step 3 — your family grieves, not scrambles (the transformation)
*(connect: the family receives ONE secure access that unlocks everything; if option ii, the body opens on detection/confirmation)*

Title options (explicit) — kept after curation:
1. "When the time comes, your family gets one secure access that unlocks everything."
2. "Your family is guided through everything, instead of left guessing."
3. "One access, and every account, document and wish is right there for them."
4. "Your loved ones focus on each other, not on untangling your affairs."
5. "Everything you prepared reaches the right people, the moment they need it."
6. "Your family spends their energy grieving, not chasing passwords and paperwork."
7. "When you're gone, they open one link and find everything you left them."

Body options (can open on detection) — kept after curation:
1. "When you're no longer there, we carefully confirm before anything is shared, then the people you chose receive a single secure access. Inside, everything is waiting: accounts, passwords, documents, wishes and your words."
2. "Your family doesn't have to search or guess. They get one clear access that unlocks your whole plan, exactly as you organized it."
3. "Instead of weeks untangling your affairs, your loved ones open one secure link and find every answer, so they can focus on grieving."
4. "One access unlocks the rest: bank accounts, subscriptions, documents, legal wishes and your final letters, all in one place."
5. "The right people get access at the right moment: no scrambling, no missing passwords, no guessing what you would have wanted."
6. "Your loved ones receive a complete, ready-to-use plan: every account and document, plus your wishes and words, so nothing is lost with you."
7. "When you're gone, your family opens one secure access and finds your accounts, your instructions and your goodbye, all where you left them."

### 4. Pricing + CTA (the fake-door core)

**Goal:** measure real purchase intent. Critical section: without a displayed price, the test overestimates demand.

Must-haves:
- **2 options**: monthly + annual ($4/mo locked; 3 options = middle-option mechanic, avoid — meeting decision).
- Real price, not artificially low (meeting decision).
- **CTA "Buy"** → triggers the fake-door (events `pricing_view` + `cta_click`).
- Honest scarcity line: "membership capped" (locked in the plan).
- Optional: a **comparison vs "doing nothing"** (the real competitor is inaction). Stay balanced, no salesy red-X bashing (conversion-hacks #7).

Errors to avoid: fake urgency (perpetual countdown — destroys trust), hiding the price.

**Note to Jane — pricing model (to decide):** monthly + annual is the meeting default ($4/mo, $40/yr). But monthly billing is arguably odd for an "after you die" product: high churn, and a lapsed payment could mean the plan never fires. Clésame uses **annual + lifetime** (80€/yr, 1500€ once, "lifetime for early sign-ups"). Recommendation to weigh: **annual + lifetime** may fit better (captures long-term intent, no churn risk). Monthly+annual kept below for now; the copy works for either model.

**Section structure (mobile-first; informed by Clésame + research):**
1. `title` — transformation/duty-framed; weaves in the "value" (spare your family / put a price on that moment). No separate value line.
2. `subtitle` — reintroduces the journey: guided, secure, shareable, released at the right moment.
3. Two plan cards (stacked on mobile), one highlighted as "best value". **Included features live INSIDE each card** (Clésame-style), in **1-3 word format** so they're scannable. Annual = same features as monthly + "2 months free" (and optionally more storage). Each card: plan name · price · 1-line descriptor · included features · CTA.
4. `reassurance_line` — under the cards (friction-killer at the moment of clicking).
- `cta_label` = hero CTA (same button everywhere). Both cards' CTA → fake-door (`cta_click` + `pricing_view`).
- **No separate value line**: the value (spare your family the chaos / what's that moment worth) lives inside the title.
- **No scarcity line** for now (we don't actually have a scarcity system; can re-add when real).
- **No "price of a coffee"** language anywhere (Jonathan's call).

**Wireframe (mobile, to share with Jane):**

```
┌───────────────────────────────┐
│         TITLE                 │  transformation + spare/price
│         subtitle              │  guided · secure · shareable · released
│                               │
│  ┌──────────────────────┐    │
│  │  Annual  ★ best value│    │  ← highlighted
│  │  $40 / yr            │    │
│  │  "Best value, 2mo free"  │
│  │  ✓ Guided setup      │    │  ← Jane picks ~5-7 features
│  │  ✓ Encrypted storage │    │     from the lists below
│  │  ✓ Passwords vault   │    │
│  │  ✓ Lawyer access     │    │
│  │  ✓ Verified release  │    │
│  │  [    CTA button    ]│    │
│  └──────────────────────┘    │
│  ┌──────────────────────┐    │
│  │  Monthly             │    │
│  │  $4 / mo             │    │
│  │  "Flexible, cancel anytime"
│  │  ✓ (same features)   │    │
│  │  [    CTA button    ]│    │
│  └──────────────────────┘    │
│                               │
│       reassurance line        │  no lock-in · exportable · encrypted
└───────────────────────────────┘
```

**Proposals (Jane picks 1 per field):**

`title` (transformation + spare family / put a price on that moment) — kept + new:
1. "Take care of them, before you can't."
2. "Prepare what's next, and rest easy."
3. "Be the one who left them ready."
4. "One plan, and finally peace of mind."
5. "Get prepared. Stay in control. Rest easy."
6. "Ready to do this last thing for them?"
7. "Spare your family the worst week of their lives." *(new — spare angle)*
8. "What would you pay to spare your family that week?" *(new — price-on-the-moment)*
9. "Spare them the months of chaos. Give them time to grieve." *(new — spare angle)*
10. "A small price for the hardest moment they'll face." *(new — price-on-the-moment)*
11. "Spare your family the paperwork. Save them the search." *(new — spare angle)*
12. "Save them the chaos. It's the one thing you'll wish you'd done." *(new — duty)*

`subtitle` (the journey: guided + secure + shareable + released right) — kept + reworked:
1. "We guide you through everything, keep it encrypted, share it with the people you trust, and release it only when it truly should be."
2. "A guided setup, secure storage, easy sharing with your lawyer or trusted people, and a careful release when the time comes."
3. "Step by step, we help you prepare, protect and pass on what matters."
4. "Everything you'd struggle to organize alone — we guide you through it, intuitively, so your family is ready when it's needed." *(reworked from #5, no "minutes")*

`plan descriptors`:
- Monthly: "Flexible, cancel anytime." — Annual: "Best value, 2 months free." — Lifetime (if model B): "Pay once, covered for life."

`included` (inside each card; 1-3 words, scannable; **Jane picks ~5-7 per card** from below; Annual = same set + "2 months free" + optionally more storage):

**Setup & content**
- "Guided setup"
- "Encrypted storage" (e.g. "3 GB encrypted storage")
- "AES-256 encryption" *(gold-standard symmetric encryption)*
- "End-to-end encrypted" *(same model as WhatsApp / password managers)*
- "Zero-knowledge vault" *(only you can read it, not even us)*
- "TLS 1.3 in transit" *(secure transport)*
- "Passwords vault"
- "Document vault"
- "Final letters"
- "Personal messages"
- "Asset summary"
- "Will & directives"
- "Bank & insurance"
- "Subscriptions list"
- "Family photos & memories"

**Control & sharing**
- "Update anytime"
- "Export anytime"
- "Trusted contacts"
- "Lawyer / notary access"
- "Multiple recipients"
- "Per-recipient access"

**Release & after**
- "Inactivity check-in"
- "Verified release"
- "Multi-step confirmation"
- "Account cancellations"
- "Auto-unsubscribe online accounts"
- "Subscription cleanup"
- "Family photos recovery & transfer"
- "Memory delivery"
- "Confidential transfer"
- "Family notification"
- "Step-by-step handover"

`reassurance_line` (under the cards; data stays yours — Jane picks one of these 4):
1. "No lock-in. Your data stays encrypted and exportable, anytime."
2. "Cancel and export your data whenever you want. Encrypted from day one."
3. "Encrypted. Exportable. Yours, always."
4. "Stop anytime, take your data with you, encrypted."

### 5. Testimonials / reassurance

**Goal:** lift trust objections (strong on a death topic + unknown brand). "No one wants to go first" (sales-blueprint).

Must-haves:
- **3 testimonials in one block** (decision: single block; layout to design later).
- Format per testimonial: photo + first name (+ age) + 1-2 sentence quote. *(Pull-quote headline dropped — useful for long quotes, redundant for our 1-2 sentence format on mobile.)*
- **Specificity > enthusiasm**: "I wrote 6 letters to my kids in one evening" beats "I love this!"
- **Vary the angles** across the 3 chosen (sales-blueprint).
- Fictional testimonials approved (Jonathan = creative director) — keep them plausible, no superlatives.
- Later (post-Round 2): a video testimonial and third-party logos (Google/Trustpilot) read as unbiased and lift trust.

**Proposals (Jane picks 3, one per angle):**

1. **Setup relief** — "Easier than I feared"
   "I'd been putting it off for years. The app guided me through it in one evening, and the relief afterwards was something I didn't expect." — Marc, 47

2. **Unexpected death of a friend** — "After Paul died"
   "A close friend died suddenly on holiday last summer. It hit me how unprepared I was. Two weeks later, my plan was done." — Sarah, 39

3. **Witnessed family chaos (in-law)** — "I saw what happens"
   "When my sister-in-law passed, my brother-in-law spent months chasing accounts, passwords, subscriptions. I didn't want my husband to live that." — Lena, 44

4. **Motivated by a relative's struggle** — "Never again"
   "Watching my uncle's family piece his digital life together after he died was eye-opening. I started my plan that week." — Tomas, 52

5. **Peace of mind / sleep better** — "Finally rest"
   "I wrote everything down: accounts, instructions, even letters to my kids. I sleep differently now." — Maria, 54

6. **Letters to children** — "Letters to my kids"
   "I wrote six letters to my children in one evening. Knowing they'll one day read them is the best thing I've done all year." — David, 41

7. **Partner wouldn't know where things are** — "My wife wouldn't have known"
   "My wife would have had no idea where anything was. Now there's a single place that explains it all." — Tomas, 41

8. **Notary / lawyer sharing** — "My notary has access"
   "I added my notary as a trusted contact in two clicks. Knowing she has access if something happens is a weight off my shoulders." — Irina, 36

> Recommended trio (covers 3 distinct angles): one of {1, 5, 6} *(self: relief / peace / output)* + one of {2, 3, 4} *(triggered by another's death)* + one of {7, 8} *(practical: partner / lawyer)*. Drives variety per research.

### 6. FAQ (proposed addition, outside the locked structure)

**Goal:** clear the last big objections before the final CTA. The research recommends it systematically for digital; here the trust objections are obvious. It's a "closer in disguise".

Must-haves:
- **4-5 questions max** (research: 4-6; concision wins — too many = overwhelm). Jane picks 4 (5 if she really wants).
- 2-3 line answers, vertical accordion.
- Turn each big **objection into a question** and answer honestly (no sugar-coating).
- Likely home for the **death-detection explanation** (keeps it out of the steps).

**Proposals (Jane picks 4, max 5):**

1. **Data security** — *Is my data really secure? Who can read it?*
   "Your data is end-to-end encrypted with AES-256 in our zero-knowledge vault: no one, not even our team, can ever read it. Only you, and the people you choose, on the day they need it."

2. **Death detection** — *How do you actually know I'm gone?*
   "We never act on a single signal. We check in with you regularly; if you stop responding, we try to reach you over several weeks, and we ask the trusted contacts you designated to confirm before anything is released. Nothing is ever triggered by mistake."

3. **Sharing with third parties** — *Can I share access with my lawyer, notary or several trusted people?*
   "Yes. You can add as many trusted contacts as you like, partner, family, lawyer or notary, and choose exactly what each one can see, today or after you're gone."

4. **Family reception** — *How does my family actually receive everything?*
   "When the release is triggered, the people you chose receive a single secure access by email. Your plan is already organized inside, accounts, documents, wishes, your letters, with step-by-step guidance. They don't need any technical skill or a separate account."

5. **Updating the plan** — *Can I update or change my plan over time?*
   "Yes, anytime. Life changes (new account, new recipient, divorce, a child being born) so does your plan. Edit it in seconds from any device, as often as you want."

6. **Cancellation and export** — *What if I cancel? Can I keep my data?*
   "Your data is always yours. You can export it at any time, encrypted, and take it with you. If you cancel, everything is permanently deleted from our servers within 30 days unless you ask us to keep it."

7. **Lapsed payment** — *What happens if I stop paying, does the plan still trigger?*
   "We send you multiple reminders before suspending anything. If your membership truly lapses, the trigger pauses and your data is held safely for several months so you can resume without losing anything. (This is one reason annual or lifetime plans are recommended for long-term reliability.)"

8. **Legal value** — *Does this replace a will? Is it legally binding?*
   "No, You Alive complements a will, it doesn't replace one. We make sure your loved ones can access your accounts, documents and final messages, but a formal will (drafted with a notary or lawyer) is still what governs the legal transfer of assets. Many users share their You Alive access directly with their notary."

9. **Setup effort** — *How long does setup take? Do I need to be tech-savvy?*
   "Most people complete their first plan in under an hour, working through guided prompts at their own pace. Nothing to install, no technical setup. If you can answer questions, you can build your plan."

> Reco trio + 1 trust anchor: keep **1 (security)** + **2 (detection)** + **4 (family reception)** + **6 (cancellation/export)**. They cover the four biggest fears (privacy, false trigger, will it actually work for my family, am I trapped). Add **8 (legal value)** as a 5th if Jane wants the legal angle.

### 7. Final CTA + minimal footer

**Goal:** the last push for visitors who scrolled through. Same button as the hero (same color, same label).

Must-haves:
- A short push headline above the CTA ("Ready to...?").
- **Same CTA button** as the hero (research: identical button, identical label).
- Optional **TL;DR panel** for fast-scrollers who jumped here: main offer + benefit + reason to click (don't repeat the whole page — conversion-hacks bonus).
- Minimal footer underneath: privacy + legal only. No social links, no blog.

**Proposals (Jane picks 1 push headline):**

`push_headline`:
1. "Ready to take care of what comes next?"
2. "Ready to leave them ready?"
3. "Don't leave them with questions. Leave them with answers."
4. "One plan today. Years of peace, for you and them."
5. "Take the one step you'll be glad you took."

`cta_label`: same as the hero (see §1).

`tl_dr_panel` (optional, for fast-scrollers):
- 1 line offer: "A guided, encrypted plan that reaches your loved ones when they need it."
- 1 line price: "From $4/mo or $40/yr. Cancel and export anytime."
- CTA button.

## Post-click (off-page, but part of the test)

### 8. Fake-door reveal (after "Buy" click)

- Immediate transparency: "You're early" + product in development.
- **Email capture only** — no other field (each extra field: -8 to -50%), no CAPTCHA.
- Event `email_submit` (PostHog client + server-side, route `/api/waitlist` → Notion).

### 9. Confirmation page

- Confirms the signup, honestly restates where the product stands.
- Option: referral ("invite friends to move up the list") — **to confirm together**, not essential for Round 2.

## Event mapping (reminder)

| Section | Event |
|---|---|
| Hero CTA, sticky CTA, final CTA | `cta_click` (Meta pixel optimization) |
| Pricing section viewed | `pricing_view` |
| Fake-door submit | `email_submit` (client + server) |

## Deviations vs the locked meeting structure

1. **FAQ**: proposed addition (section 6) — to decide.
2. **Above-the-fold social proof**: the locked structure says "1 reassurance line"; the research pushes a quantified signal. A fictional counter is risky on trust — prefer an honest reassurance line over a fake counter.
3. **Confirmation page**: not specified in the plan, needed for the fake-door flow.
4. **Sticky CTA**: not in the locked structure, strongly supported by mobile data.
