// A variant = data, not code. Same structure, same price; only the value
// proposition (copy/positioning) changes between A and B for Round 2.

export type Variant = {
  id: string;
  positioning: string; // internal label, not shown
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    reassurance: string;
  };
  problem: {
    heading: string;
    body: string;
  };
  solution: {
    heading: string;
    steps: { title: string; body: string }[];
  };
  pricing: {
    heading: string;
    price: string;
    period: string;
    cta: string;
  };
  testimonials: { quote: string; author: string }[];
};

// Single low monthly price across both variants (only the value prop is tested).
const PRICE = "$4";
const PERIOD = "/month";

export const variants: Record<string, Variant> = {
  // A — administrative / practical positioning
  a: {
    id: "a",
    positioning: "administrative",
    hero: {
      title: "Make sure your accounts and passwords reach the right person.",
      subtitle:
        "A monthly check-in. If you ever stop responding, we send everything your family needs to the person you chose.",
      cta: "Get started",
      reassurance: "Encrypted. Nothing is sent while you're around.",
    },
    problem: {
      heading: "When someone dies, the practical chaos falls on the family.",
      body: "Bank accounts, passwords, subscriptions, documents. Locked away, scattered, lost. The people you love spend months untangling it.",
    },
    solution: {
      heading: "One quiet system that does it for you.",
      steps: [
        { title: "Set it up once", body: "Add the info and the person who should receive it." },
        { title: "We check in monthly", body: "A single email. One click and you're done." },
        { title: "If you stop replying", body: "We deliver everything to your chosen recipient, automatically." },
      ],
    },
    pricing: {
      heading: "Less than a coffee a month.",
      price: PRICE,
      period: PERIOD,
      cta: "Get started",
    },
    testimonials: [
      { quote: "Set it up for my parents in ten minutes. Real peace of mind.", author: "Mara, 41" },
      { quote: "Finally something that handles the boring, important stuff.", author: "Tom, 56" },
    ],
  },

  // B — emotional / last-words positioning
  b: {
    id: "b",
    positioning: "emotional",
    hero: {
      title: "Leave the words you'd never get to say.",
      subtitle:
        "A monthly check-in. If you ever stop responding, we deliver your letter to the person you wrote it for.",
      cta: "Get started",
      reassurance: "Private. Your letter is only ever sent if you go silent.",
    },
    problem: {
      heading: "Most people never get to say goodbye.",
      body: "The things you mean to tell the people you love go unsaid. Then it's too late, and they're left wondering.",
    },
    solution: {
      heading: "Your message, delivered when it matters.",
      steps: [
        { title: "Write your letter", body: "To whoever you want, whenever you feel like it." },
        { title: "We check in monthly", body: "A single email. One click and you're done." },
        { title: "If you stop replying", body: "We deliver your letter to them, exactly as you left it." },
      ],
    },
    pricing: {
      heading: "Less than a coffee a month.",
      price: PRICE,
      period: PERIOD,
      cta: "Get started",
    },
    testimonials: [
      { quote: "I wrote the letter I could never say out loud. Huge weight off.", author: "Lena, 38" },
      { quote: "Knowing my kids will hear from me means everything.", author: "David, 49" },
    ],
  },
};

export const variantIds = Object.keys(variants);
export const defaultVariant = "a";
