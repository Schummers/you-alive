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
    title: "Leave nothing unsaid. Leave nothing unfound.",
    subtitle:
      "No scramble for passwords, no guessing your wishes. Just the answers you left them, ready the day they're needed.",
    ctaLabel: "Start my plan",
    reassuranceLine:
      "Join 623 people getting their affairs in order.",
  },
  problem: {
    title: "Logins, documents, last wishes: someone has to sort it all.",
    body: "Death doesn't log you out. Subscriptions keep charging, accounts stay active, and years of photos and messages get locked behind passwords no one has. Your family inherits the cleanup, in the middle of their grief.",
  },
  solution: {
    intro: "How You Alive works",
    steps: [
      {
        title: "Don't know where to start? We walk you through every step.",
        body: "Everything important, gathered into one secure plan. We prompt, you answer, and your family is covered, without the stress of doing it alone.",
      },
      {
        title: "A quick check-in keeps it sealed; your silence is what releases it.",
        body: "We check in with you now and then. Miss a few over several weeks and we begin a careful release, after trying hard to reach you first.",
      },
      {
        title: "Your family is guided through everything, instead of left guessing.",
        body: "Your family doesn't have to search or guess. They get one clear access that unlocks your whole plan, exactly as you organized it.",
      },
    ],
  },
  pricing: {
    title: "Take care of them, before you can't.",
    subtitle:
      "Step by step, we help you prepare, protect and pass on what matters.",
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
      "Personal guidance",
      "Write your final letters",
      "Document your wishes",
      "Assign trusted contacts",
      "Share with your notary",
      "Carefully verified release",
    ],
    monthly: "$4 / month",
    annual: "$40 / year (2 months free)",
    ctaLabel: "Start my plan",
    scarcityLine: "No lock-in. Export your plan whenever you want, it's always yours.",
  },
  testimonials: [
    {
      name: "Sarah",
      age: 39,
      quote:
        "A close friend died suddenly on holiday last summer. It hit me how unprepared I was. Two weeks later, my plan was done.",
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
      q: "How do you actually know I'm gone?",
      a: "We never act on a single signal. We check in with you regularly; if you stop responding, we try to reach you over several weeks. Your trusted contacts confirm before anything is released. Nothing is triggered by mistake.",
    },
    {
      q: "Can I share access with my lawyer, notary or several trusted people?",
      a: "Yes. You can add as many trusted contacts as you like, partner, family, lawyer or notary, and choose exactly what each one can see, today or after you're gone.",
    },
    {
      q: "Can I update or change my plan over time?",
      a: "Yes, anytime. Life changes (new account, new recipient, divorce, a child being born) so does your plan. Edit it in seconds from any device, as often as you want.",
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
