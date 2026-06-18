// Canonical content for DESIGN ideation, mapped 1:1 from
// `project management/content-youalive.md` (Round 2).
//
// This is the FIXED content every design variant renders. Designs may only
// change the visual treatment (layout, type, color, motion) — never this copy.
//
// Note: this is a different axis from `variants.ts` (the copy A/B test on
// /a and /b). Here the copy is frozen so we can compare designs apples-to-apples.
//
// [TODO] markers = depend on Jane's ad copies (per-variant H1). The fallback
// H1 below is used until those land.

export type SiteContent = {
  hero: {
    brandLockup: string; // "You Alive?" — also baked into the ad photo
    title: string; // [TODO per-ad] — fallback used for now
    subtitle: string;
    ctaLabel: string;
    reassuranceLine: string;
  };
  problem: {
    title: string;
    body: string;
  };
  solution: {
    intro: string;
    steps: { title: string; body: string }[];
  };
  pricing: {
    title: string;
    subtitle: string;
    plans: {
      name: string;
      price: string;
      descriptor: string;
      ctaLabel: string;
      highlight?: boolean;
    }[];
    included: string[];
    // Legacy flat fields kept so existing designs a/b/c keep compiling.
    monthly: string;
    annual: string;
    ctaLabel: string;
    scarcityLine: string;
  };
  finalCta: {
    headline: string;
    ctaLabel: string;
  };
  testimonials: { name: string; age: number; quote: string }[];
  faq: { q: string; a: string }[];
  fakedoor: {
    title: string;
    body: string;
    emailPlaceholder: string;
    submitLabel: string;
    privacyLine: string;
  };
  confirmation: {
    title: string;
    body: string;
  };
  footer: {
    lines: string[];
  };
};

export const site: SiteContent = {
  hero: {
    brandLockup: "You Alive?",
    title: "Don't leave your loved ones guessing.",
    subtitle:
      "No scramble for passwords, no guessing your wishes. Just the answers you left them, ready the day they're needed.",
    ctaLabel: "Start my plan",
    reassuranceLine:
      "Join 2,400+ people getting their affairs in order.",
  },
  problem: {
    title: "Your loved ones won't know where to look, or what you wanted.",
    body: "After a death, the average family spends months untangling accounts, hunting for documents and guessing at wishes. You can hand them answers instead, the kindest thing you'll ever leave behind.",
  },
  solution: {
    intro: "How You Alive works",
    steps: [
      {
        title: "We guide you through what to prepare, so you forget nothing.",
        body: "You don't need to know where to start. Our app walks you through it, prompting you for the accounts, passwords, documents and wishes most people forget, so nothing important slips through.",
      },
      {
        title: "Triggered by silence, confirmed by people you trust, never by mistake.",
        body: "Inactivity, repeated attempts to reach you, confirmation from trusted contacts, and a waiting period: several safeguards mean your plan opens only when it truly should.",
      },
      {
        title: "Your family spends their energy grieving, not chasing passwords and paperwork.",
        body: "When you're no longer there, we carefully confirm before anything is shared, then the people you chose receive a single secure access. Inside, everything is waiting: accounts, passwords, documents, wishes and your words.",
      },
    ],
  },
  pricing: {
    title: "Spare your family the worst week of their lives.",
    subtitle:
      "Everything you'd struggle to organize alone — we guide you through it, intuitively, so your family is ready when it's needed.",
    plans: [
      {
        name: "Annual",
        price: "$40 / year",
        descriptor: "Best value · 2 months free",
        ctaLabel: "Start my plan",
        highlight: true,
      },
      {
        name: "Monthly",
        price: "$4 / month",
        descriptor: "Flexible, cancel anytime",
        ctaLabel: "Start my plan",
      },
    ],
    included: [
      "Guided setup",
      "3 GB encrypted storage",
      "Zero-knowledge vault",
      "Passwords vault",
      "Document vault",
      "Final letters",
      "Lawyer / notary access",
      "Verified release",
      "Subscription cleanup",
    ],
    monthly: "$4 / month",
    annual: "$40 / year (2 months free)",
    ctaLabel: "Start my plan",
    scarcityLine: "No lock-in. Your data stays encrypted and exportable, anytime.",
  },
  testimonials: [
    {
      name: "David",
      age: 41,
      quote:
        "I wrote six letters to my children in one evening. Knowing they'll one day read them is the best thing I've done all year.",
    },
    {
      name: "Lena",
      age: 44,
      quote:
        "When my sister-in-law passed, my brother-in-law spent months chasing accounts, passwords, subscriptions. I didn't want my husband to live that.",
    },
    {
      name: "Irina",
      age: 36,
      quote:
        "I added my notary as a trusted contact in two clicks. Knowing she has access if something happens is a weight off my shoulders.",
    },
  ],
  faq: [
    {
      q: "Is my data really secure? Who can read it?",
      a: "Your data is end-to-end encrypted with AES-256 in our zero-knowledge vault: no one, not even our team, can ever read it. Only you, and the people you choose, on the day they need it.",
    },
    {
      q: "How do you actually know I'm gone?",
      a: "We never act on a single signal. We check in with you regularly; if you stop responding, we try to reach you over several weeks, and we ask the trusted contacts you designated to confirm before anything is released. Nothing is ever triggered by mistake.",
    },
    {
      q: "How does my family actually receive everything?",
      a: "When the release is triggered, the people you chose receive a single secure access by email. Your plan is already organized inside, accounts, documents, wishes, your letters, with step-by-step guidance. They don't need any technical skill or a separate account.",
    },
    {
      q: "What if I cancel? Can I keep my data?",
      a: "Your data is always yours. You can export it at any time, encrypted, and take it with you. If you cancel, everything is permanently deleted from our servers within 30 days unless you ask us to keep it.",
    },
  ],
  fakedoor: {
    title: "You're early.",
    body: "You Alive is in final development. Leave your email and we'll let you know the moment it opens, at this price.",
    emailPlaceholder: "Your email",
    submitLabel: "Reserve my spot",
    privacyLine: "No spam. Only the launch email.",
  },
  confirmation: {
    title: "Your spot is reserved.",
    body: "We'll email you the moment You Alive opens. Until then — nothing to do, except maybe think about what you'd want to say.",
  },
  finalCta: {
    headline: "Ready to leave them ready?",
    ctaLabel: "Start my plan",
  },
  footer: {
    lines: ["You Alive — prepared today, delivered when it matters.", "Privacy policy", "Contact"],
  },
};
