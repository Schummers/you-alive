"use client";

import { Fraunces, DM_Sans } from "next/font/google";
import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type CSSProperties,
} from "react";
import { ArrowRight } from "lucide-react";
import type { DesignProps } from "@/designs/types";
import { useFakeDoor } from "@/designs/shared/useFakeDoor";
import { CountUp } from "@/designs/shared/CountUp";
import { WaitlistTakeoverB } from "@/designs/shared/WaitlistTakeoverB";

// ─────────────────────────────────────────────────────────────────────────────
// MANUAL · B · b-manual-01 — "Halo"
// One single saturated lavender gradient field across the WHOLE page (the
// signature of variant B). Every section is transparent and sits on that one
// field; rhythm is vertical spacing only — no colored bands, no .ya-bleed.
// Cards exist ONLY for: pricing plans, the "everything included" block, the
// final-CTA panel, and the fakedoor form. Problem / method / stories / FAQ
// render directly on the field with hairline rules and spacing.
// No eyebrow kickers: each H2 emphasises its operative word(s) via a periwinkle
// accent and/or Fraunces italic. ONE constant ink-fill CTA everywhere.
// Structure mirrors c-manual-shared/RetroForestBase (Reveal, CountUp, hero
// stagger, fakedoor wiring, reduced-motion CSS), re-skinned for B.
// ─────────────────────────────────────────────────────────────────────────────

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  axes: ["opsz", "SOFT"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

// Palette B (locked indigo / lavender / periwinkle).
const INK = "#26235A"; // primary dark text / CTA fill
const SOFT = "#5A5690"; // secondary text
const MUTE = "#9C98D4"; // faint labels
const FAINT = "#8b86bf"; // captions / quiet meta
const ACCENT = "#6F69C9"; // periwinkle — labels, "?", dot only (NOT titles)
const TITLE_ACCENT = "#5A5690"; // titles: subtle italic shift one step off ink (BT05-style)
const GHOST = "#EBE6FF"; // near-transparent lavender for the hero ghost wordmark
const LIGHT = "#F7F4FF"; // light label on ink surfaces
const HAIR = "rgba(90,86,144,0.18)"; // hairline rule on the field

// Hero gradient levels (site lavender palette only — no saturated violet). The
// whole-page field + the hero-local halo + the ghost color vary by level.
export type Gradient = { field: string; halo: string; ghost: string; ghostShadow: string };

export const GRADIENT_1: Gradient = {
  field: "linear-gradient(180deg,#F7F4FF 0%,#F3ECFF 100%)",
  halo: "radial-gradient(56% 50% at 50% 42%, rgba(214,228,255,0.40) 0%, rgba(214,228,255,0) 70%)",
  ghost: "#EBE6FF",
  ghostShadow: "none",
};
export const GRADIENT_2: Gradient = {
  field: "linear-gradient(180deg,#F7F4FF 0%,#F3ECFF 100%)",
  halo:
    "radial-gradient(56% 52% at 50% 42%, rgba(214,228,255,0.62) 0%, rgba(235,230,255,0.30) 45%, rgba(214,228,255,0) 72%)",
  ghost: "rgba(255,255,255,0.68)",
  ghostShadow: "0 2px 36px rgba(90,86,144,0.12)",
};
export const GRADIENT_3: Gradient = {
  field: "linear-gradient(180deg,#F7F4FF 0%,#EFEAFF 100%)",
  halo:
    "radial-gradient(56% 52% at 50% 42%, rgba(198,210,245,0.70) 0%, rgba(214,228,255,0.34) 46%, rgba(214,228,255,0) 72%)",
  ghost: "rgba(255,255,255,0.78)",
  ghostShadow: "0 2px 40px rgba(90,86,144,0.14)",
};

// Scroll-reveal primitive (ported from RetroForestBase): blur-rise, RM-safe.
function Reveal({
  children,
  className = "",
  delay = 0,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "section" | "figure";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShown(true);
          obs.disconnect();
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  const Tag = as as "div";
  return (
    <Tag
      ref={ref}
      data-reveal={shown ? "in" : "out"}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${className}`}
    >
      {children}
    </Tag>
  );
}

export function HaloBase({
  content,
  slug,
  gradient,
  squared = false,
  heroSuffix,
}: DesignProps & { gradient: Gradient; squared?: boolean; heroSuffix?: string }) {
  const fd = useFakeDoor(slug);
  const { hero, problem, solution, pricing, testimonials, faq, fakedoor, footer } =
    content;

  // Corner language. squared = near-square (Scripture-like); default = rounded.
  const r = squared
    ? { cta: "rounded-[4px]", card: "rounded-[6px]", panel: "rounded-[8px]", pill: "rounded-[4px]" }
    : { cta: "rounded-[18px]", card: "rounded-[28px]", panel: "rounded-[36px]", pill: "rounded-full" };

  // Reassurance line → CountUp on the embedded number (RetroForestBase reMatch).
  const reMatch = hero.reassuranceLine.match(/^(.*?)([\d.,]+)(.*)$/);

  // CTA click → full-screen "Start my plan" takeover (like variant A), B palette.
  if (fd.showWaitlist) {
    return (
      <WaitlistTakeoverB
        fd={fd}
        fakedoor={fakedoor}
        confirmation={content.confirmation}
        fontVars={`${fraunces.variable} ${dmSans.variable}`}
      />
    );
  }

  // THE constant CTA: ink fill, light label, lucide arrow. Same everywhere.
  const Cta = ({
    label,
    onClick,
    full,
  }: {
    label: string;
    onClick: () => void;
    full?: boolean;
  }) => (
    <button
      onClick={onClick}
      className={`ya-cta group inline-flex items-center justify-center gap-2.5 ${r.cta} px-7 py-4 text-[15px] font-semibold ${
        full ? "w-full" : ""
      }`}
      style={{ backgroundColor: INK, color: LIGHT }}
    >
      {label}
      <ArrowRight className="ya-arrow" style={{ width: 18, height: 18 }} strokeWidth={2.5} />
    </button>
  );

  // "You Alive ?" wordmark — Fraunces italic, the "?" carries the accent mark.
  const wordmark = (
    <span
      className="font-[family-name:var(--font-display)] text-[18px] italic"
      style={{ color: INK, fontVariationSettings: '"opsz" 20, "SOFT" 60' }}
    >
      {hero.brandLockup.replace("?", "")}
      <span style={{ color: ACCENT }}>?</span>
    </span>
  );

  return (
    <main
      className={`${fraunces.variable} ${dmSans.variable} font-[family-name:var(--font-body)] relative min-h-[100dvh] overflow-x-clip antialiased`}
      style={{
        color: INK,
        // THE single field across the whole page (gentle site lavender). The
        // hero gets an extra local halo; both are driven by `gradient`.
        background: gradient.field,
      }}
    >
      <style>{`
        .reveal { opacity: 0; transform: translateY(26px); filter: blur(6px);
          transition: opacity .8s cubic-bezier(.16,1,.3,1), transform .8s cubic-bezier(.16,1,.3,1), filter .8s cubic-bezier(.16,1,.3,1);
          will-change: transform, opacity; }
        .reveal[data-reveal="in"] { opacity: 1; transform: translateY(0); filter: blur(0); }
        @keyframes ya-rise { from { opacity: 0; transform: translateY(30px); filter: blur(8px); } to { opacity: 1; transform: translateY(0); filter: blur(0); } }
        @keyframes ya-pulse { 0%,100% { opacity: .5; transform: scale(1); } 50% { opacity: 1; transform: scale(1.35); } }
        @keyframes ya-orbit { 0% { transform: translate3d(0,0,0); } 50% { transform: translate3d(0,-3%,0) scale(1.05); } 100% { transform: translate3d(0,0,0); } }
        .ya-stage > * { opacity: 0; animation: ya-rise .9s cubic-bezier(.16,1,.3,1) forwards; }
        .ya-pulse-dot { animation: ya-pulse 2.6s ease-in-out infinite; }
        .ya-orb { animation: ya-orbit 17s ease-in-out infinite; }
        .ya-cta { transition: transform .4s cubic-bezier(.16,1,.3,1), box-shadow .4s cubic-bezier(.16,1,.3,1);
          box-shadow: 0 18px 40px -22px rgba(38,35,90,0.7); }
        .ya-cta:hover { transform: translateY(-3px); box-shadow: 0 24px 50px -22px rgba(38,35,90,0.8); }
        .ya-cta:active { transform: translateY(0) scale(.98); }
        .ya-arrow { transition: transform .4s cubic-bezier(.16,1,.3,1); }
        .ya-cta:hover .ya-arrow { transform: translateX(4px); }
        .ya-h1 { font-size: var(--h1-m); }
        @media (min-width: 768px) { .ya-h1 { font-size: var(--h1-d); } }
        @media (prefers-reduced-motion: reduce) {
          .reveal { opacity: 1 !important; transform: none !important; filter: none !important; transition: none !important; }
          .ya-stage > * { animation: none !important; opacity: 1 !important; transform: none !important; }
          .ya-pulse-dot, .ya-orb { animation: none !important; }
          .ya-cta, .ya-cta:hover { transform: none !important; }
        }
      `}</style>

      {/* One faint drifting orb, low and below the fold, for quiet depth. */}
      <div
        aria-hidden
        className="ya-orb pointer-events-none absolute left-1/2 top-[150vh] -z-0 h-[460px] w-[460px] -translate-x-1/2 rounded-full opacity-[0.5] blur-[100px]"
        style={{
          background: "radial-gradient(circle, #D6E4FF 0%, rgba(214,228,255,0) 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-xl px-6">
        {/* ───────── NAV ───────── */}
        <header className="flex items-center justify-between pt-7">
          {wordmark}
          <span
            className={`${r.pill} border px-3 py-1 text-[10px] uppercase tracking-[0.22em]`}
            style={{ borderColor: HAIR, color: SOFT }}
          >
            Early access
          </span>
        </header>

        {/* ───────── HERO (ghost wordmark + H1 on top) ───────── */}
        <section className="relative pt-14 md:pt-20">
          {/* Hero-only halo (level-driven) so the ghost wordmark reads softly. */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-[36%] -z-0 h-[560px] w-[680px] -translate-x-1/2 -translate-y-1/2 blur-[60px]"
            style={{ background: gradient.halo }}
          />

          {/* GIANT ghost "You Alive?" behind the H1. */}
          <p
            aria-hidden
            className="ya-stage pointer-events-none -mx-2 select-none font-[family-name:var(--font-display)] leading-[0.84] tracking-[-0.03em]"
            style={{ color: gradient.ghost }}
          >
            <span
              className="block"
              style={{
                fontSize: "clamp(92px, 30vw, 140px)",
                fontVariationSettings: '"opsz" 144, "SOFT" 100',
                textShadow: gradient.ghostShadow,
                animationDelay: "0s",
              } as CSSProperties}
            >
              You
            </span>
            <span
              className="block"
              style={{
                fontSize: "clamp(92px, 30vw, 140px)",
                fontVariationSettings: '"opsz" 144, "SOFT" 100',
                textShadow: gradient.ghostShadow,
                animationDelay: "0.06s",
              } as CSSProperties}
            >
              Alive?
            </span>
          </p>

          {/* H1 sits on top, overlapping the ghost. */}
          <div className="ya-stage relative -mt-10 md:-mt-14">
            <h1
              className="ya-h1 font-[family-name:var(--font-display)] leading-[1.06] tracking-[-0.02em]"
              style={{
                color: INK,
                fontVariationSettings: '"opsz" 72, "SOFT" 50',
                animationDelay: "0.12s",
                "--h1-m": "42px",
                "--h1-d": "56px",
              } as CSSProperties}
            >
              Leave nothing{" "}
              <span className="italic" style={{ color: TITLE_ACCENT }}>
                unsaid.
              </span>{" "}
              Leave nothing{" "}
              <span className="italic" style={{ color: TITLE_ACCENT }}>
                unfound.
              </span>
              {heroSuffix ? <span className="not-italic"> {heroSuffix}</span> : null}
            </h1>

            <p
              className="mt-6 max-w-[40ch] text-[16px] leading-[1.68]"
              style={{ color: SOFT, animationDelay: "0.28s" }}
            >
              {hero.subtitle}
            </p>

            <div className="mt-9" style={{ animationDelay: "0.42s" }}>
              <Cta label={hero.ctaLabel} onClick={() => fd.onCta("hero")} />
            </div>

            <p
              className="mt-7 flex items-center gap-2.5 text-[13px]"
              style={{ color: SOFT, animationDelay: "0.56s" }}
            >
              <span
                className="ya-pulse-dot h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: ACCENT }}
              />
              <span>
                {reMatch ? (
                  <>
                    {reMatch[1]}
                    <CountUp end={parseInt(reMatch[2].replace(/[.,]/g, ""), 10)} />
                    {reMatch[3]}
                  </>
                ) : (
                  hero.reassuranceLine
                )}
              </span>
            </p>
          </div>
        </section>

        {/* ───────── PROBLEM (no card — directly on the field) ───────── */}
        <section className="mt-28">
          <Reveal>
            <h2
              className="max-w-[20ch] font-[family-name:var(--font-display)] text-[30px] leading-[1.16] tracking-[-0.015em]"
              style={{ color: INK, fontVariationSettings: '"opsz" 60, "SOFT" 40' }}
            >
              Documents and last wishes:{" "}
              <span className="italic" style={{ color: TITLE_ACCENT }}>
                someone has to sort it all.
              </span>
            </h2>
            <p
              className="mt-7 max-w-[44ch] text-[16px] leading-[1.72]"
              style={{ color: SOFT }}
            >
              {problem.body}
            </p>
          </Reveal>
        </section>

        {/* ───────── METHOD (no card — big numerals + hairline rule) ───────── */}
        <section className="mt-28">
          <Reveal>
            <h2
              className="font-[family-name:var(--font-display)] text-[30px] leading-[1.14] tracking-[-0.015em]"
              style={{ color: INK, fontVariationSettings: '"opsz" 56, "SOFT" 40' }}
            >
              How{" "}
              <span className="italic" style={{ color: TITLE_ACCENT }}>
                You Alive
              </span>{" "}
              works
            </h2>
          </Reveal>

          <ol className="mt-12 space-y-12">
            {solution.steps.map((s, i) => (
              <Reveal as="li" key={i} delay={i * 90}>
                <div className="flex items-center gap-4">
                  <span
                    className="font-[family-name:var(--font-display)] text-[52px] leading-none tracking-[-0.02em]"
                    style={{
                      color: MUTE,
                      fontVariationSettings: '"opsz" 144, "SOFT" 60',
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="h-px flex-1 rounded-full"
                    style={{ backgroundColor: HAIR }}
                  />
                </div>
                <h3
                  className="mt-4 max-w-[34ch] font-[family-name:var(--font-display)] text-[21px] leading-[1.26] tracking-[-0.005em]"
                  style={{ color: INK, fontVariationSettings: '"opsz" 40, "SOFT" 40' }}
                >
                  {s.title}
                </h3>
                <p
                  className="mt-3 max-w-[44ch] text-[15px] leading-[1.68]"
                  style={{ color: SOFT }}
                >
                  {s.body}
                </p>
              </Reveal>
            ))}
          </ol>
        </section>

        {/* ───────── PRICING (cards allowed) ───────── */}
        <section ref={fd.pricingRef} className="mt-28">
          <Reveal>
            <h2
              className="max-w-[18ch] font-[family-name:var(--font-display)] text-[30px] leading-[1.16] tracking-[-0.015em]"
              style={{ color: INK, fontVariationSettings: '"opsz" 56, "SOFT" 40' }}
            >
              Take care of them,{" "}
              <span className="italic" style={{ color: TITLE_ACCENT }}>
                before you can&rsquo;t.
              </span>
            </h2>
            <p
              className="mt-5 max-w-[40ch] text-[16px] leading-[1.68]"
              style={{ color: SOFT }}
            >
              {pricing.subtitle}
            </p>
          </Reveal>

          <div className="mt-10 space-y-5">
            {pricing.plans.map((plan, i) => {
              const hi = !!plan.highlight; // Annual = ink radial card; Monthly = translucent white
              return (
                <Reveal key={i} delay={i * 90}>
                  <div
                    className={`relative overflow-hidden ${r.card} p-7`}
                    style={
                      hi
                        ? {
                            background:
                              "radial-gradient(120% 90% at 18% 0%, #393577 0%, #26235A 62%)",
                            color: LIGHT,
                            boxShadow: "0 30px 70px -40px rgba(38,35,90,0.9)",
                          }
                        : {
                            background: "rgba(255,255,255,0.62)",
                            color: INK,
                            border: "1px solid rgba(255,255,255,0.7)",
                            boxShadow: "0 20px 50px -44px rgba(38,35,90,0.6)",
                          }
                    }
                  >
                    {hi && (
                      <span
                        aria-hidden
                        className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full opacity-60 blur-2xl"
                        style={{
                          background:
                            "radial-gradient(circle, rgba(214,228,255,0.7) 0%, transparent 70%)",
                        }}
                      />
                    )}
                    {hi && (
                      <span
                        className={`relative inline-block ${r.pill} px-4 py-1 text-[10px] uppercase tracking-[0.2em]`}
                        style={{ backgroundColor: GHOST, color: INK }}
                      >
                        Most chosen
                      </span>
                    )}
                    <p
                      className={`relative ${hi ? "mt-4" : ""} font-[family-name:var(--font-display)] text-[15px] italic`}
                      style={{
                        color: hi ? "#CDD6FF" : SOFT,
                        fontVariationSettings: '"opsz" 18, "SOFT" 80',
                      }}
                    >
                      {plan.name}
                    </p>
                    <p
                      className="relative mt-2 font-[family-name:var(--font-display)] text-[42px] leading-none tracking-[-0.02em]"
                      style={{
                        color: hi ? LIGHT : INK,
                        fontVariationSettings: '"opsz" 144, "SOFT" 30',
                      }}
                    >
                      {plan.price}
                    </p>
                    <p
                      className="relative mt-3 text-[13px]"
                      style={{ color: hi ? "#B8C4F0" : FAINT }}
                    >
                      {plan.descriptor}
                    </p>
                    <div className="relative mt-7">
                      {hi ? (
                        <button
                          onClick={() => fd.onCta(`pricing-${plan.name.toLowerCase()}`)}
                          className={`ya-cta group inline-flex w-full items-center justify-center gap-2.5 ${r.cta} px-7 py-4 text-[15px] font-semibold`}
                          style={{ backgroundColor: GHOST, color: INK }}
                        >
                          {plan.ctaLabel}
                          <ArrowRight
                            className="ya-arrow"
                            style={{ width: 18, height: 18 }}
                            strokeWidth={2.5}
                          />
                        </button>
                      ) : (
                        <Cta
                          label={plan.ctaLabel}
                          onClick={() => fd.onCta(`pricing-${plan.name.toLowerCase()}`)}
                          full
                        />
                      )}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Everything included — card allowed. Two columns, no-lock-in inside. */}
          <Reveal className="mt-6">
            <div
              className={`${r.card} p-7`}
              style={{
                background: "rgba(255,255,255,0.5)",
                border: "1px solid rgba(255,255,255,0.7)",
                boxShadow: "0 20px 50px -46px rgba(38,35,90,0.5)",
              }}
            >
              <p
                className="text-[11px] font-semibold uppercase tracking-[0.28em]"
                style={{ color: ACCENT }}
              >
                Everything included
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3.5">
                {pricing.included.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-[13.5px] leading-[1.35]"
                    style={{ color: INK }}
                  >
                    <span
                      className="mt-[2px] flex h-4 w-4 flex-none items-center justify-center rounded-full text-[10px] font-bold"
                      style={{
                        background:
                          "linear-gradient(135deg, #EBE6FF 0%, #D6E4FF 100%)",
                        color: INK,
                      }}
                    >
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <p
                className="mt-7 border-t pt-6 text-[13px] leading-[1.6]"
                style={{ borderColor: HAIR, color: SOFT }}
              >
                {pricing.scarcityLine}
              </p>
            </div>
          </Reveal>
        </section>

        {/* ───────── STORIES (no card — pull-quotes + hairline rules) ───────── */}
        <section className="mt-28">
          <Reveal>
            <h2
              className="font-[family-name:var(--font-display)] text-[30px] leading-[1.16] tracking-[-0.015em]"
              style={{ color: INK, fontVariationSettings: '"opsz" 56, "SOFT" 40' }}
            >
              From{" "}
              <span className="italic" style={{ color: TITLE_ACCENT }}>
                those who started.
              </span>
            </h2>
          </Reveal>
          <div className="mt-6">
            {testimonials.map((t, i) => (
              <Reveal as="figure" key={i} delay={i * 80}>
                <figure
                  className="py-8"
                  style={i > 0 ? { borderTop: `1px solid ${HAIR}` } : undefined}
                >
                  <blockquote
                    className="font-[family-name:var(--font-display)] text-[20px] leading-[1.46] tracking-[-0.005em]"
                    style={{ color: INK, fontVariationSettings: '"opsz" 48, "SOFT" 50' }}
                  >
                    <span className="italic" style={{ color: TITLE_ACCENT }}>
                      &ldquo;
                    </span>
                    {t.quote}
                    <span className="italic" style={{ color: TITLE_ACCENT }}>
                      &rdquo;
                    </span>
                  </blockquote>
                  <figcaption
                    className="mt-5 flex items-center gap-3 text-[12px] uppercase tracking-[0.2em]"
                    style={{ color: FAINT }}
                  >
                    <span
                      className="inline-block h-px w-8"
                      style={{ backgroundColor: FAINT }}
                    />
                    {t.name} / {t.age}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ───────── FAQ (no card — <details> + hairline divider, +/× toggle) ───────── */}
        <section className="mt-28">
          <Reveal>
            <h2
              className="font-[family-name:var(--font-display)] text-[30px] leading-[1.16] tracking-[-0.015em]"
              style={{ color: INK, fontVariationSettings: '"opsz" 56, "SOFT" 40' }}
            >
              Questions you{" "}
              <span className="italic" style={{ color: TITLE_ACCENT }}>
                might have.
              </span>
            </h2>
          </Reveal>
          <div className="mt-6">
            {faq.map((item, i) => (
              <Reveal key={i} delay={i * 70}>
                <details
                  className="group py-6"
                  style={{ borderTop: `1px solid ${HAIR}` }}
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                    <span
                      className="font-[family-name:var(--font-display)] text-[18px] leading-[1.32] tracking-[-0.005em]"
                      style={{ color: INK, fontVariationSettings: '"opsz" 36, "SOFT" 40' }}
                    >
                      {item.q}
                    </span>
                    <span
                      className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-full text-[20px] leading-none transition-transform duration-300 group-open:rotate-45"
                      style={{ backgroundColor: GHOST, color: INK }}
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-4 max-w-[46ch] text-[14.5px] leading-[1.7]" style={{ color: SOFT }}>
                    {item.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ───────── FINAL CTA (card allowed — rounded ink-gradient panel) ───────── */}
        <section className="mt-28">
          <Reveal>
            <div
              className={`relative overflow-hidden ${r.panel} p-10 text-center`}
              style={{
                background: "radial-gradient(130% 100% at 50% 0%, #393577 0%, #26235A 65%)",
                color: LIGHT,
                boxShadow: "0 40px 90px -50px rgba(38,35,90,0.9)",
              }}
            >
              {/* faint atmospheric halo */}
              <span
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 -translate-y-1/4 rounded-full opacity-50 blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle, rgba(214,228,255,0.7) 0%, transparent 70%)",
                }}
              />
              <h2
                className="relative mx-auto max-w-[16ch] font-[family-name:var(--font-display)] text-[32px] leading-[1.12] tracking-[-0.015em]"
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 50' }}
              >
                Ready to leave them{" "}
                <span className="italic" style={{ color: "#CDD6FF" }}>
                  ready?
                </span>
              </h2>
              <div className="relative mt-9 flex justify-center">
                <button
                  onClick={() => fd.onCta("final")}
                  className={`ya-cta group inline-flex items-center justify-center gap-2.5 ${r.cta} px-7 py-4 text-[15px] font-semibold`}
                  style={{ backgroundColor: GHOST, color: INK }}
                >
                  {content.finalCta.ctaLabel}
                  <ArrowRight
                    className="ya-arrow"
                    style={{ width: 18, height: 18 }}
                    strokeWidth={2.5}
                  />
                </button>
              </div>
            </div>
          </Reveal>
        </section>


        {/* ───────── FOOTER ───────── */}
        <footer className="mt-24 border-t pt-10 pb-20" style={{ borderColor: HAIR }}>
          <p className="mb-3">{wordmark}</p>
          <p
            className="font-[family-name:var(--font-display)] text-[16px] italic leading-[1.4]"
            style={{ color: SOFT, fontVariationSettings: '"opsz" 24, "SOFT" 60' }}
          >
            {footer.lines[0]}
          </p>
          <p
            className="mt-4 text-[11px] uppercase tracking-[0.22em]"
            style={{ color: MUTE }}
          >
            {footer.lines.slice(1).join("   ·   ")}
          </p>
        </footer>
      </div>
    </main>
  );
}

// b-manual-01 = level 1 (le plus doux).
export default function BManual01Halo(props: DesignProps) {
  return <HaloBase {...props} gradient={GRADIENT_1} />;
}
