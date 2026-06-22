"use client";

import { Bricolage_Grotesque, Space_Grotesk } from "next/font/google";
import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";
import { ArrowRight } from "lucide-react";
import type { DesignProps } from "@/designs/types";
import { useFakeDoor } from "@/designs/shared/useFakeDoor";
import { CountUp } from "@/designs/shared/CountUp";
import { RetroForestTakeover } from "@/designs/c-manual-shared/RetroForestTakeover";

// ─────────────────────────────────────────────────────────────────────────────
// MANUAL · C · shared base — "Retro Forest"
// One hand-built layout shared by every c-manual-NN variant. The ONLY thing a
// variant changes is `problemBg`: the single warm/colored band among otherwise
// white light-sections, so we can compare background colors apples-to-apples.
//
// Rhythm: hero(forest) · problem(problemBg) · method(white) · pricing(forest) ·
//   stories(white) · faq(forest) · final-CTA(white band, forest card) · footer.
// Accent rule: lime ONLY on dark; on light surfaces the accent is vivid pine
// (GREEN_L), AA on the light bands. Uppercase kicker labels always take the
// surface accent. CTA constant: lime fill + forest label, NO stroke. No emoji.
// ─────────────────────────────────────────────────────────────────────────────
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["opsz"],
});

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const FOREST = "#16271F"; // section dark / ink base / final-CTA card
const CARD = "#1d3328"; // transparent-ish dark card (c-taste-03)
const CARD_HI = "#22392B"; // elevated dark card — Annual (highlight)
const LIME = "#C8F169"; // accent — DARK surfaces only
const GREEN_L = "#246B27"; // accent — LIGHT surfaces (eyebrows, step numbers). AA on light.
const WHITE_BG = "#FBF8F1"; // white light-band background (method / stories / final-CTA)
const INK_L = "#283A30"; // body text on light (darker, not pure black)
const MUTED_L = "#566355"; // secondary text on light (links, etc.)
const GREY_CAP = "#6A6860"; // neutral grey for de-emphasised captions (names/ages). 5.3:1 on white (AA)
const WHITE_1 = "#FAF7EF"; // primary text on dark
const MUTED_D = "rgba(250,247,239,0.82)"; // secondary text on dark

// Scroll-reveal primitive (ported from c-taste-03): blur-rise, reduced-motion safe.
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
    <Tag ref={ref} data-reveal={shown ? "in" : "out"} style={{ transitionDelay: `${delay}ms` }} className={`reveal ${className}`}>
      {children}
    </Tag>
  );
}

type BaseProps = DesignProps & {
  problemBg: string;
  heroMode?: "split" | "stack"; // split = white lead + lime punch word; stack = one all-lime word per line
  heroMobilePx?: number;
  heroDesktopPx?: number;
  subtitlePx?: number;
  ctaRadius?: number; // px (use a big number for a pill)
  footerMode?: "color" | "dark"; // color = problemBg band, no divider; dark = forest
};

export default function RetroForestBase({
  content,
  slug,
  problemBg,
  heroMode = "split",
  heroMobilePx = 46,
  heroDesktopPx = 64,
  subtitlePx = 18,
  ctaRadius = 18,
  footerMode = "color",
}: BaseProps) {
  const fd = useFakeDoor(slug);
  const { hero, problem, solution, pricing, testimonials, faq, fakedoor, footer } =
    content;

  // CTA → full-screen "Start my plan" takeover (C skin), like variant A.
  if (fd.showWaitlist) {
    return (
      <RetroForestTakeover
        fd={fd}
        fakedoor={fakedoor}
        confirmation={content.confirmation}
        fontVars={`${bricolage.variable} ${space.variable}`}
        ctaRadius={ctaRadius}
      />
    );
  }

  const reMatch = hero.reassuranceLine.match(/^(.*?)([\d.,]+)(.*)$/);
  // Hero H1 → 4 lines: each sentence becomes a white lead line + a lime punch
  // word ("unsaid." / "unfound.") on its own line.
  const heroLines = hero.title
    .split(/(?<=\.)\s+/)
    .filter(Boolean)
    .map((s) => {
      const m = s.match(/^(.*\s)(\S+)$/);
      return m ? { lead: m[1].trim(), accent: m[2] } : { lead: s, accent: "" };
    });
  // Stack mode: one word per line (6 lines for this title), all lime.
  const heroWords = hero.title.split(/\s+/).filter(Boolean);
  const problemTitle = problem.title
    .replace(/^Logins,\s*/i, "")
    .replace(/^\w/, (c) => c.toUpperCase());

  // "You Alive ?" wordmark — small, white, with a breath before the "?".
  const wordmark = (color: string, markColor: string) => (
    <span
      className="font-[family-name:var(--font-display)] text-[16px] font-extrabold uppercase tracking-[-0.01em]"
      style={{ color }}
    >
      {hero.brandLockup.replace("?", "")}
      <span style={{ marginLeft: "0.14em", color: markColor }}>?</span>
    </span>
  );

  // Eyebrow kicker. Accent flips by surface: lime on dark, vivid pine on light.
  const Eyebrow = ({ children, light }: { children: string; light?: boolean }) => (
    <p
      className="text-[13.5px] font-extrabold uppercase tracking-[0.22em]"
      style={{ color: light ? GREEN_L : LIME }}
    >
      {children}
    </p>
  );

  // THE constant CTA: lime fill + forest label, lucide arrow. No stroke.
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
      className={`ya-cta group inline-flex items-center justify-center gap-2.5 px-7 py-4 text-[15px] font-bold uppercase tracking-wide ${
        full ? "w-full" : ""
      }`}
      style={{ backgroundColor: LIME, color: FOREST, borderRadius: ctaRadius }}
    >
      {label}
      <ArrowRight className="ya-arrow" style={{ width: 19, height: 19 }} strokeWidth={2.5} />
    </button>
  );

  return (
    <main
      className={`${bricolage.variable} ${space.variable} font-[family-name:var(--font-body)] relative min-h-[100dvh] overflow-x-clip antialiased`}
      style={{ backgroundColor: FOREST, color: WHITE_1 }}
    >
      <style>{`
        .reveal { opacity: 0; transform: translateY(26px); filter: blur(6px);
          transition: opacity .8s cubic-bezier(.16,1,.3,1), transform .8s cubic-bezier(.16,1,.3,1), filter .8s cubic-bezier(.16,1,.3,1);
          will-change: transform, opacity; }
        .reveal[data-reveal="in"] { opacity: 1; transform: translateY(0); filter: blur(0); }
        @keyframes ya-rise { from { opacity: 0; transform: translateY(34px); filter: blur(8px); } to { opacity: 1; transform: translateY(0); filter: blur(0); } }
        @keyframes ya-draw { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        @keyframes ya-pulse { 0%,100% { opacity: .55; transform: scale(1); } 50% { opacity: 1; transform: scale(1.35); } }
        @keyframes ya-orbit { 0% { transform: translate3d(0,0,0); } 50% { transform: translate3d(0,-3%,0) scale(1.04); } 100% { transform: translate3d(0,0,0); } }
        @keyframes ya-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .ya-stage > * { opacity: 0; animation: ya-rise .9s cubic-bezier(.16,1,.3,1) forwards; }
        .ya-underline { transform-origin: left center; animation: ya-draw .9s cubic-bezier(.16,1,.3,1) .5s both; }
        .ya-pulse-dot { animation: ya-pulse 2.6s ease-in-out infinite; }
        .ya-orb { animation: ya-orbit 16s ease-in-out infinite; }
        .ya-cta { transition: transform .4s cubic-bezier(.16,1,.3,1), box-shadow .4s cubic-bezier(.16,1,.3,1); }
        .ya-cta:hover { transform: translateY(-3px); }
        .ya-cta:active { transform: translateY(0) scale(.98); }
        .ya-arrow { transition: transform .4s cubic-bezier(.16,1,.3,1); }
        .ya-cta:hover .ya-arrow { transform: translateX(4px); }
        .ya-marquee-track { display: inline-flex; white-space: nowrap; animation: ya-marquee 26s linear infinite; }
        .ya-h1 { font-size: var(--h1-m); }
        @media (min-width: 768px) { .ya-h1 { font-size: var(--h1-d); } }
        @media (prefers-reduced-motion: reduce) {
          .reveal { opacity: 1 !important; transform: none !important; filter: none !important; transition: none !important; }
          .ya-stage > *, .ya-underline { animation: none !important; opacity: 1 !important; transform: none !important; }
          .ya-pulse-dot, .ya-orb, .ya-marquee-track { animation: none !important; }
          .ya-cta, .ya-cta:hover { transform: none !important; }
        }
      `}</style>

      {/* Hero sits on flat forest like the ad — no top glow. A single ambient
          lime orb drifts low, well below the fold, for quiet atmosphere only. */}
      <div
        aria-hidden
        className="ya-orb pointer-events-none absolute top-[140vh] left-1/2 -z-0 h-[460px] w-[460px] -translate-x-1/2 rounded-full opacity-[0.10] blur-[100px]"
        style={{ backgroundColor: LIME }}
      />

      <div className="relative z-10 mx-auto max-w-xl px-6">
        {/* ───────── NAV ───────── */}
        <header className="flex items-center justify-between pt-7">
          {wordmark(WHITE_1, LIME)}
          {/* nothing top-right */}
        </header>

        {/* ───────── HERO (dark) ───────── */}
        <section className="ya-stage pt-4 md:pt-7">
          <h1
            className="ya-h1 font-[family-name:var(--font-display)] font-extrabold uppercase italic leading-[0.98] tracking-[-0.05em]"
            style={{
              color: heroMode === "stack" ? LIME : WHITE_1,
              animationDelay: "0.1s",
              "--h1-m": `${heroMobilePx}px`,
              "--h1-d": `${heroDesktopPx}px`,
            } as CSSProperties}
          >
            {heroMode === "stack"
              ? heroWords.map((w, i) => {
                  const newSentence = i > 0 && /\.$/.test(heroWords[i - 1]);
                  return (
                    <span key={i} className={`block ${newSentence ? "mt-3" : ""}`}>
                      {w}
                    </span>
                  );
                })
              : heroLines.map((l, i) => (
                  <span key={i} className={`block ${i > 0 ? "mt-3" : ""}`}>
                    <span className="block">{l.lead}</span>
                    <span className="block" style={{ color: LIME }}>
                      {l.accent}
                    </span>
                  </span>
                ))}
          </h1>

          {heroMode === "split" && (
            <div
              className="ya-underline mt-5 h-[3px] w-28 rounded-full"
              style={{ backgroundColor: LIME, animationDelay: "0s" }}
              aria-hidden
            />
          )}

          <p
            className="mt-5 max-w-[40ch] leading-[1.6]"
            style={{ color: MUTED_D, fontSize: subtitlePx, animationDelay: "0.3s" }}
          >
            {hero.subtitle}
          </p>

          <div className="mt-9" style={{ animationDelay: "0.44s" }}>
            <Cta label={hero.ctaLabel} onClick={() => fd.onCta("hero")} />
          </div>

          <p
            className="mt-7 flex items-center gap-2.5 text-[13px]"
            style={{ color: MUTED_D, animationDelay: "0.58s" }}
          >
            <span className="ya-pulse-dot h-1.5 w-1.5 rounded-full" style={{ backgroundColor: LIME }} />
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
        </section>

        {/* ───────── PROBLEM (the one colored band — variant-controlled) ───────── */}
        <section className="ya-bleed mt-12 py-16" style={{ backgroundColor: problemBg }}>
          <Reveal>
            <div style={{ color: FOREST }}>
              <Eyebrow light>The problem</Eyebrow>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-[30px] font-bold leading-[1.12] tracking-[-0.02em]">
                {problemTitle}
              </h2>
              <p className="mt-5 max-w-[44ch] text-[16px] leading-[1.7]" style={{ color: INK_L }}>
                {problem.body}
              </p>
            </div>
          </Reveal>
        </section>

        {/* ───────── METHOD (white band) — original C "01 + bar" stepper ───────── */}
        <section className="ya-bleed mt-0 py-16" style={{ backgroundColor: WHITE_BG }}>
          <div style={{ color: FOREST }}>
            <Reveal>
              <Eyebrow light>How it works</Eyebrow>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-[30px] font-bold leading-[1.1] tracking-[-0.02em]">
                It takes three steps to leave nothing unsaid.
              </h2>
            </Reveal>

            <ol className="mt-10 space-y-10">
              {solution.steps.map((s, i) => (
                <Reveal as="li" key={i} delay={i * 90}>
                  <div className="flex items-center gap-3">
                    <span
                      className="font-[family-name:var(--font-display)] text-[44px] font-extrabold leading-none tracking-[-0.02em]"
                      style={{ color: GREEN_L }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="h-[2px] flex-1 rounded-full" style={{ backgroundColor: `${GREEN_L}2e` }} />
                  </div>
                  <h3 className="mt-3 font-[family-name:var(--font-display)] text-[21px] font-bold leading-[1.2]">
                    {s.title}
                  </h3>
                  <p className="mt-2 max-w-[44ch] text-[15.5px] leading-[1.6]" style={{ color: INK_L }}>
                    {s.body}
                  </p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* ───────── PRICING (dark) ───────── */}
        <section ref={fd.pricingRef} className="mt-20">
          <Reveal>
            <Eyebrow>Pricing</Eyebrow>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-[30px] font-bold leading-[1.12] tracking-[-0.02em]" style={{ color: WHITE_1 }}>
              {pricing.title}
            </h2>
            <p className="mt-5 max-w-[40ch] text-[16px] leading-[1.65]" style={{ color: MUTED_D }}>
              {pricing.subtitle}
            </p>
          </Reveal>

          <div className="mt-9 space-y-5">
            {pricing.plans.map((plan, i) => {
              const hi = !!plan.highlight; // Annual = elevated forest card, lime hairline
              return (
                <Reveal key={i} delay={i * 90}>
                  <div
                    className="relative rounded-[28px] border p-7"
                    style={{
                      backgroundColor: hi ? CARD_HI : CARD,
                      color: WHITE_1,
                      borderColor: hi ? "rgba(200,241,105,0.42)" : "rgba(250,247,239,0.10)",
                    }}
                  >
                    {hi && (
                      <span
                        className="absolute right-6 top-7 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em]"
                        style={{ backgroundColor: LIME, color: FOREST }}
                      >
                        Most chosen
                      </span>
                    )}
                    {/* Uppercase kicker → always accent (lime on this dark surface). */}
                    <p className="text-[13px] font-bold uppercase tracking-[0.18em]" style={{ color: LIME }}>
                      {plan.name}
                    </p>
                    <p className="mt-3 font-[family-name:var(--font-display)] text-[40px] font-extrabold leading-none tracking-[-0.02em]">
                      {plan.price}
                    </p>
                    <p className="mt-3 text-[13px]" style={{ color: "rgba(250,247,239,0.62)" }}>
                      {plan.descriptor}
                    </p>
                    <div className="mt-7">
                      <Cta label={plan.ctaLabel} onClick={() => fd.onCta(`pricing-${plan.name.toLowerCase()}`)} full />
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Everything included — dark card, two columns, no-lock-in line inside. */}
          <Reveal className="mt-6">
            <div className="rounded-[28px] border p-7" style={{ backgroundColor: CARD, borderColor: "rgba(250,247,239,0.10)" }}>
              <p className="text-[11px] font-bold uppercase tracking-[0.28em]" style={{ color: LIME }}>
                Everything included
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3.5">
                {pricing.included.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-[13.5px] leading-[1.35]" style={{ color: "rgba(250,247,239,0.86)" }}>
                    <span
                      className="mt-[3px] flex h-4 w-4 flex-none items-center justify-center rounded-full text-[10px] font-bold"
                      style={{ backgroundColor: LIME, color: FOREST }}
                    >
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <p
                className="mt-7 border-t pt-6 text-[13px] leading-[1.6]"
                style={{ borderColor: "rgba(250,247,239,0.12)", color: "rgba(250,247,239,0.6)" }}
              >
                {pricing.scarcityLine}
              </p>
            </div>
          </Reveal>
        </section>

        {/* ───────── STORIES (white band, pull-quotes) ───────── */}
        <section className="ya-bleed mt-20 py-16" style={{ backgroundColor: WHITE_BG }}>
          <div style={{ color: FOREST }}>
            <Reveal>
              <Eyebrow light>Stories</Eyebrow>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-[30px] font-bold leading-[1.12] tracking-[-0.02em]">
                From those who started
              </h2>
            </Reveal>
            <div className="mt-8">
              {testimonials.map((t, i) => (
                <Reveal as="figure" key={i} delay={i * 80}>
                  <figure
                    className="py-7"
                    style={i > 0 ? { borderTop: `1px solid ${FOREST}1f` } : undefined}
                  >
                    <blockquote className="font-[family-name:var(--font-display)] text-[17.5px] font-semibold leading-[1.45] tracking-[-0.01em]">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                    <figcaption className="mt-4 flex items-center gap-3 text-[12.5px] font-semibold uppercase tracking-[0.14em]" style={{ color: GREY_CAP }}>
                      <span className="inline-block h-px w-8" style={{ backgroundColor: GREY_CAP }} />
                      {t.name} / {t.age}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ───────── FAQ (dark) ───────── */}
        <section className="mt-20">
          <Reveal>
            <Eyebrow>Good to know</Eyebrow>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-[30px] font-bold leading-[1.12] tracking-[-0.02em]" style={{ color: WHITE_1 }}>
              Questions you might have
            </h2>
          </Reveal>
          <div className="mt-9 space-y-4">
            {faq.map((item, i) => (
              <Reveal key={i} delay={i * 70}>
                <details
                  className="group rounded-[24px] border px-6 py-5"
                  style={{ backgroundColor: CARD, borderColor: "rgba(239,234,216,0.10)" }}
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                    <span className="font-[family-name:var(--font-display)] text-[17px] font-bold leading-[1.3] tracking-[-0.005em]" style={{ color: WHITE_1 }}>
                      {item.q}
                    </span>
                    <span
                      className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-full text-[18px] leading-none transition-transform duration-300 group-open:rotate-45"
                      style={{ backgroundColor: LIME, color: FOREST }}
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-[14.5px] leading-[1.68]" style={{ color: "rgba(239,234,216,0.72)" }}>
                    {item.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ───────── FINAL CTA (white band, forest card) ───────── */}
        <section className="ya-bleed mt-20 py-16" style={{ backgroundColor: WHITE_BG }}>
          <Reveal>
            <div
              className="relative overflow-hidden rounded-[36px] p-9 text-center"
              style={{ backgroundColor: FOREST, color: WHITE_1 }}
            >
              <div className="pointer-events-none absolute inset-x-0 top-5 overflow-hidden opacity-[0.14]" aria-hidden>
                <div className="ya-marquee-track font-[family-name:var(--font-display)] text-[30px] font-extrabold uppercase tracking-[-0.01em]" style={{ color: LIME }}>
                  <span className="px-4">Leave them ready · Leave them ready · </span>
                  <span className="px-4">Leave them ready · Leave them ready · </span>
                </div>
              </div>
              <h2 className="relative font-[family-name:var(--font-display)] text-[32px] font-extrabold leading-[1.08] tracking-[-0.02em]">
                {content.finalCta.headline}
              </h2>
              <div className="relative mt-8 flex justify-center">
                <Cta label={content.finalCta.ctaLabel} onClick={() => fd.onCta("final")} />
              </div>
            </div>
          </Reveal>
        </section>


        {/* ───────── FOOTER ───────── */}
        {footerMode === "dark" ? (
          // Dark forest footer (no divider — the white CTA band above sets it off).
          <footer className="mt-20 pb-20">
            <p className="mb-3">{wordmark(WHITE_1, LIME)}</p>
            <p className="font-[family-name:var(--font-display)] text-[16px] font-bold italic" style={{ color: "rgba(250,247,239,0.6)" }}>
              {footer.lines[0]}
            </p>
            <p className="mt-3 text-[11px] uppercase tracking-[0.22em]" style={{ color: "rgba(250,247,239,0.6)" }}>
              {footer.lines.slice(1).join("   ·   ")}
            </p>
          </footer>
        ) : (
          // Colored footer = the problem band's tint, no divider; tagline secondary.
          <footer className="ya-bleed py-14" style={{ backgroundColor: problemBg }}>
            <p className="mb-3">{wordmark(FOREST, GREEN_L)}</p>
            <p className="font-[family-name:var(--font-display)] text-[16px] font-bold italic" style={{ color: MUTED_L }}>
              {footer.lines[0]}
            </p>
            <p className="mt-3 text-[11px] uppercase tracking-[0.22em]" style={{ color: MUTED_L }}>
              {footer.lines.slice(1).join("   ·   ")}
            </p>
          </footer>
        )}
      </div>
    </main>
  );
}
