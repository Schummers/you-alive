"use client";

import { Fraunces, Mulish } from "next/font/google";
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

// ─────────────────────────────────────────────────────────────────────────────
// MANUAL · B · "Lumen" (b-manual-05) — the premium synthesis of the B family.
//
// ONE single luminous lavender field across the whole page (variant-B signature):
// 3 radial halos + a vertical linear wash, the richest recipe of the family
// (channel b-taste-05). Sections are transparent; rhythm = vertical spacing only.
// NO alternating bands, NO colored .ya-bleed sections.
//
// Cards ONLY on: pricing plans, "everything included", final-CTA panel, fakedoor.
// Problem / method / stories / FAQ sit directly on the field.
//
// Hero: a giant ghost "You Alive?" wordmark (near-transparent lavender) behind a
// bi-color italic H1, with a dense central halo so the ghost reads. ONE drop-cap
// moment on the problem paragraph, never repeated. Bi-color / italic word
// emphasis on every section title. CTA constant: solid ink fill, light label,
// lucide ArrowRight. NO sticky CTA, NO emoji, NO em-dashes.
// ─────────────────────────────────────────────────────────────────────────────

// Fraunces (display). Per brief: do NOT pass axes: ["wght"]. We use the optical
// + soft expressive axes for the warm, gently-wonky serif voice.
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT"],
  style: ["normal", "italic"],
  display: "swap",
});

// Mulish (body) — quiet, refined rounded sans for this version.
const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-mulish",
  display: "swap",
});

// Palette B (locked indigo / lavender / periwinkle family)
const INK = "#26235A"; // primary dark text + CTA fill
const SOFT = "#5A5690"; // secondary text
const MUTE = "#9C98D4"; // faint labels
const FAINT = "#8b86bf"; // faint descriptors
const PERI = "#4B47A6"; // periwinkle accent (AA on lavender for emphasis words)
const LIGHT = "#F7F4FF"; // light label on ink
const GHOST = "#EBE6FF"; // ghost wordmark / soft chips
const LINE = "rgba(90,86,144,0.16)"; // hairline rules on the field

const FR_HEAD = '"opsz" 60, "SOFT" 40'; // section heads
const FR_TITLE = '"opsz" 36, "SOFT" 30'; // sub-heads / quotes
const FR_ITALIC = '"opsz" 28, "SOFT" 80'; // tender italics

// Scroll-reveal primitive: blur-rise, reduced-motion safe.
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

export default function BManual05Lumen({ content, slug }: DesignProps) {
  const fd = useFakeDoor(slug);
  const { hero, problem, solution, pricing, testimonials, faq, fakedoor, footer } =
    content;

  // Reassurance line → split around the number for the CountUp on 623.
  const reMatch = hero.reassuranceLine.match(/^(.*?)([\d.,]+)(.*)$/);

  // Hero H1: keep the second sentence in periwinkle italic as the operative phrase.
  const heroParts = hero.title.split(/(?<=\.)\s+/).filter(Boolean);
  const heroLead = heroParts[0] ?? hero.title;
  const heroEmph = heroParts.slice(1).join(" ");

  // THE constant CTA: solid ink fill, light label, lucide arrow.
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
      className={`ya-cta group inline-flex items-center justify-center gap-2.5 rounded-full px-8 py-4 text-[15px] font-semibold ${
        full ? "w-full" : ""
      }`}
      style={{ backgroundColor: INK, color: LIGHT }}
    >
      {label}
      <ArrowRight className="ya-arrow" style={{ width: 18, height: 18 }} strokeWidth={2.25} />
    </button>
  );

  // Small "You Alive?" wordmark for nav + footer.
  const wordmark = (color: string) => (
    <span
      className="font-[family-name:var(--font-fraunces)] text-[16px] italic"
      style={{ color, fontVariationSettings: '"opsz" 18, "SOFT" 80' }}
    >
      {hero.brandLockup}
    </span>
  );

  return (
    <main
      className={`${fraunces.variable} ${mulish.variable} font-[family-name:var(--font-mulish)] relative min-h-[100dvh] overflow-x-clip antialiased`}
      style={{
        color: INK,
        // The single, richest layered field — luminous and enveloping.
        background:
          "radial-gradient(120% 70% at 12% -4%, #F3ECFF 0%, rgba(243,236,255,0) 52%)," +
          "radial-gradient(110% 60% at 92% 12%, #D6E4FF 0%, rgba(214,228,255,0) 50%)," +
          "radial-gradient(130% 80% at 50% 104%, #EBE6FF 0%, rgba(235,230,255,0) 58%)," +
          "linear-gradient(180deg, #F7F4FF 0%, #F3ECFF 50%, #F7F4FF 100%)",
      }}
    >
      <style>{`
        .reveal { opacity: 0; transform: translateY(24px); filter: blur(6px);
          transition: opacity .85s cubic-bezier(.16,1,.3,1), transform .85s cubic-bezier(.16,1,.3,1), filter .85s cubic-bezier(.16,1,.3,1);
          will-change: transform, opacity; }
        .reveal[data-reveal="in"] { opacity: 1; transform: translateY(0); filter: blur(0); }
        @keyframes ya-rise { from { opacity: 0; transform: translateY(30px); filter: blur(7px); } to { opacity: 1; transform: translateY(0); filter: blur(0); } }
        @keyframes ya-pulse { 0%,100% { opacity: .5; transform: scale(1); } 50% { opacity: 1; transform: scale(1.4); } }
        @keyframes ya-orbit { 0% { transform: translate3d(0,0,0); } 50% { transform: translate3d(0,-3%,0) scale(1.05); } 100% { transform: translate3d(0,0,0); } }
        @keyframes ya-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .ya-stage > * { opacity: 0; animation: ya-rise .95s cubic-bezier(.16,1,.3,1) forwards; }
        .ya-pulse-dot { animation: ya-pulse 2.6s ease-in-out infinite; }
        .ya-orb { animation: ya-orbit 18s ease-in-out infinite; }
        .ya-cta { transition: transform .4s cubic-bezier(.16,1,.3,1), box-shadow .4s cubic-bezier(.16,1,.3,1), background-color .3s ease;
          box-shadow: 0 18px 40px -22px rgba(38,35,90,0.6); }
        .ya-cta:hover { transform: translateY(-3px); background-color: #322e74; box-shadow: 0 26px 54px -22px rgba(38,35,90,0.7); }
        .ya-cta:active { transform: translateY(0) scale(.98); }
        .ya-arrow { transition: transform .4s cubic-bezier(.16,1,.3,1); }
        .ya-cta:hover .ya-arrow { transform: translateX(4px); }
        .ya-marquee-track { display: inline-flex; white-space: nowrap; animation: ya-marquee 30s linear infinite; }
        .ya-h1 { font-size: 46px; }
        @media (min-width: 768px) { .ya-h1 { font-size: 60px; } }
        .ya-drop::first-letter { float: left; margin-right: 0.14em; margin-top: 0.06em;
          font-family: var(--font-fraunces); font-size: 68px; line-height: 0.72; font-weight: 400;
          color: ${PERI}; }
        @media (prefers-reduced-motion: reduce) {
          .reveal { opacity: 1 !important; transform: none !important; filter: none !important; transition: none !important; }
          .ya-stage > * { animation: none !important; opacity: 1 !important; transform: none !important; }
          .ya-pulse-dot, .ya-orb, .ya-marquee-track { animation: none !important; }
          .ya-cta, .ya-cta:hover { transform: none !important; }
        }
      `}</style>

      {/* One faint drifting orb, low on the page, for quiet depth (decorative). */}
      <div
        aria-hidden
        className="ya-orb pointer-events-none absolute left-[-12%] top-[120vh] -z-0 h-[420px] w-[420px] rounded-full opacity-50 blur-[110px]"
        style={{ background: "radial-gradient(circle, #D6E4FF 0%, rgba(214,228,255,0) 70%)" }}
      />

      <div className="relative z-10 mx-auto max-w-xl px-6 pb-24">
        {/* ───────── NAV ───────── */}
        <header className="flex items-center justify-between pt-7">
          {wordmark(INK)}
          <span
            className="rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.22em]"
            style={{ color: SOFT, borderColor: "rgba(90,86,144,0.22)" }}
          >
            Early access
          </span>
        </header>

        {/* ───────── HERO (ghost wordmark + bi-color italic H1) ───────── */}
        <section className="relative pt-14 md:pt-20">
          {/* Dense central halo so the ghost reads against the field. */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-[18%] -z-0 h-[360px] w-[360px] -translate-x-1/2 rounded-full blur-[70px]"
            style={{ background: "radial-gradient(circle, rgba(214,228,255,0.85) 0%, rgba(214,228,255,0) 70%)" }}
          />

          {/* Giant ghost "You Alive?" wordmark behind the H1. */}
          <p
            aria-hidden
            className="ya-stage pointer-events-none absolute -top-2 left-0 right-0 -z-0 select-none font-[family-name:var(--font-fraunces)] leading-[0.84] tracking-[-0.03em]"
            style={{
              color: GHOST,
              fontSize: "clamp(92px, 26vw, 132px)",
              fontVariationSettings: '"opsz" 144, "SOFT" 100',
              textShadow: "0 2px 40px rgba(90,86,144,0.16)",
              animationDelay: "0s",
            }}
          >
            You
            <br />
            Alive?
          </p>

          {/* H1 sits on top of the ghost, slightly overlapping. */}
          <div className="ya-stage relative pt-[7.5rem] md:pt-[9rem]">
            <h1
              className="ya-h1 font-[family-name:var(--font-fraunces)] leading-[1.04] tracking-[-0.025em]"
              style={{ color: INK, fontVariationSettings: FR_HEAD, animationDelay: "0.12s" } as CSSProperties}
            >
              <span className="block">{heroLead}</span>
              {heroEmph && (
                <span
                  className="block italic"
                  style={{ color: PERI, fontVariationSettings: '"opsz" 60, "SOFT" 70' }}
                >
                  {heroEmph}
                </span>
              )}
            </h1>

            <p
              className="mt-6 max-w-[40ch] text-[16px] leading-[1.7]"
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
                className="ya-pulse-dot inline-block h-1.5 w-1.5 rounded-full"
                style={{ background: PERI, boxShadow: `0 0 6px 2px rgba(75,71,166,0.4)` }}
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

        {/* ───────── PROBLEM (on the field, ONE drop-cap moment) ───────── */}
        <section className="mt-32">
          <Reveal>
            <h2
              className="font-[family-name:var(--font-fraunces)] text-[30px] leading-[1.16] tracking-[-0.02em]"
              style={{ color: INK, fontVariationSettings: FR_HEAD }}
            >
              Logins, documents, last wishes:{" "}
              <span className="italic" style={{ color: PERI, fontVariationSettings: FR_ITALIC }}>
                someone has to sort it all.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={90}>
            <p
              className="ya-drop mt-7 max-w-[44ch] text-[16px] leading-[1.78]"
              style={{ color: SOFT }}
            >
              {problem.body}
            </p>
          </Reveal>
        </section>

        {/* ───────── METHOD (big numerals + hairline rule, no card) ───────── */}
        <section className="mt-32">
          <Reveal>
            <h2
              className="font-[family-name:var(--font-fraunces)] text-[30px] leading-[1.14] tracking-[-0.02em]"
              style={{ color: INK, fontVariationSettings: FR_HEAD }}
            >
              <span className="italic" style={{ color: PERI, fontVariationSettings: FR_ITALIC }}>
                How
              </span>{" "}
              You Alive works
            </h2>
          </Reveal>

          <ol className="mt-12 space-y-12">
            {solution.steps.map((s, i) => (
              <Reveal as="li" key={i} delay={i * 90}>
                <div className="flex items-center gap-4">
                  <span
                    className="font-[family-name:var(--font-fraunces)] text-[58px] leading-none tracking-[-0.02em]"
                    style={{ color: "rgba(138,134,191,0.5)", fontVariationSettings: '"opsz" 96, "SOFT" 40' }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="h-px flex-1 rounded-full"
                    style={{ background: "linear-gradient(90deg, rgba(90,86,144,0.32), rgba(90,86,144,0))" }}
                  />
                </div>
                <h3
                  className="mt-4 font-[family-name:var(--font-fraunces)] text-[21px] leading-[1.26] tracking-[-0.01em]"
                  style={{ color: INK, fontVariationSettings: FR_TITLE }}
                >
                  {s.title}
                </h3>
                <p className="mt-3 max-w-[44ch] text-[15px] leading-[1.7]" style={{ color: SOFT }}>
                  {s.body}
                </p>
              </Reveal>
            ))}
          </ol>
        </section>

        {/* ───────── PRICING (refined gradient cards) ───────── */}
        <section ref={fd.pricingRef} className="mt-32">
          <Reveal>
            <h2
              className="font-[family-name:var(--font-fraunces)] text-[30px] leading-[1.14] tracking-[-0.02em]"
              style={{ color: INK, fontVariationSettings: FR_HEAD }}
            >
              Take care of them,{" "}
              <span className="italic" style={{ color: PERI, fontVariationSettings: FR_ITALIC }}>
                before you can&rsquo;t.
              </span>
            </h2>
            <p className="mt-5 max-w-[40ch] text-[16px] leading-[1.7]" style={{ color: SOFT }}>
              {pricing.subtitle}
            </p>
          </Reveal>

          <div className="mt-10 space-y-5">
            {pricing.plans.map((plan, i) => {
              const hi = !!plan.highlight;
              return (
                <Reveal key={i} delay={i * 90}>
                  <div
                    className="relative overflow-hidden rounded-[30px] px-7 py-9"
                    style={
                      hi
                        ? {
                            background: "radial-gradient(120% 90% at 20% 0%, #393577 0%, #26235A 62%)",
                            color: LIGHT,
                            boxShadow: "0 30px 70px -40px rgba(38,35,90,0.85)",
                          }
                        : {
                            background: "rgba(255,255,255,0.6)",
                            color: INK,
                            border: "1px solid rgba(255,255,255,0.7)",
                            boxShadow: "0 22px 56px -46px rgba(38,35,90,0.6)",
                            backdropFilter: "blur(8px)",
                          }
                    }
                  >
                    {/* Subtle inner light on the ink card. */}
                    {hi && (
                      <div
                        aria-hidden
                        className="pointer-events-none absolute -right-10 -top-12 h-40 w-40 rounded-full blur-2xl"
                        style={{ background: "radial-gradient(circle, rgba(214,228,255,0.65) 0%, transparent 70%)" }}
                      />
                    )}
                    {hi && (
                      <span
                        className="absolute right-6 top-7 rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.18em]"
                        style={{ background: GHOST, color: INK }}
                      >
                        Most chosen
                      </span>
                    )}
                    <p
                      className="relative font-[family-name:var(--font-fraunces)] text-[15px] italic"
                      style={{
                        color: hi ? "#cdd6ff" : SOFT,
                        fontVariationSettings: '"opsz" 18, "SOFT" 80',
                      }}
                    >
                      {plan.name}
                    </p>
                    <p
                      className="relative mt-3 font-[family-name:var(--font-fraunces)] text-[46px] leading-none tracking-[-0.02em]"
                      style={{
                        color: hi ? LIGHT : INK,
                        fontVariationSettings: '"opsz" 96, "SOFT" 20',
                      }}
                    >
                      {plan.price}
                    </p>
                    <p
                      className="relative mt-3 text-[13px]"
                      style={{ color: hi ? "#b8c4f0" : FAINT }}
                    >
                      {plan.descriptor}
                    </p>
                    <div className="relative mt-7">
                      <button
                        onClick={() => fd.onCta(`pricing-${plan.name.toLowerCase()}`)}
                        className="ya-cta group inline-flex w-full items-center justify-center gap-2.5 rounded-full px-6 py-4 text-[15px] font-semibold"
                        style={
                          hi
                            ? { backgroundColor: GHOST, color: INK }
                            : { backgroundColor: INK, color: LIGHT }
                        }
                      >
                        {plan.ctaLabel}
                        <ArrowRight className="ya-arrow" style={{ width: 18, height: 18 }} strokeWidth={2.25} />
                      </button>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Everything included — translucent white card, two columns. */}
          <Reveal className="mt-6">
            <div
              className="rounded-[30px] px-7 py-8"
              style={{
                background: "rgba(255,255,255,0.5)",
                border: "1px solid rgba(255,255,255,0.7)",
                boxShadow: "0 22px 56px -50px rgba(38,35,90,0.5)",
                backdropFilter: "blur(8px)",
              }}
            >
              <p className="text-[11px] uppercase tracking-[0.28em]" style={{ color: SOFT }}>
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
                      className="mt-[2px] flex h-4 w-4 flex-none items-center justify-center rounded-full text-[10px]"
                      style={{ background: "linear-gradient(135deg, #EBE6FF, #D6E4FF)", color: INK }}
                    >
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <p
                className="mt-7 border-t pt-6 text-[13px] leading-[1.6]"
                style={{ borderColor: LINE, color: SOFT }}
              >
                {pricing.scarcityLine}
              </p>
            </div>
          </Reveal>
        </section>

        {/* ───────── STORIES (pull-quotes, hairline rules, no cards) ───────── */}
        <section className="mt-32">
          <Reveal>
            <h2
              className="font-[family-name:var(--font-fraunces)] text-[30px] leading-[1.14] tracking-[-0.02em]"
              style={{ color: INK, fontVariationSettings: FR_HEAD }}
            >
              From those who{" "}
              <span className="italic" style={{ color: PERI, fontVariationSettings: FR_ITALIC }}>
                started.
              </span>
            </h2>
          </Reveal>
          <div className="mt-8">
            {testimonials.map((t, i) => (
              <Reveal as="figure" key={i} delay={i * 80}>
                <figure
                  className="py-8"
                  style={i > 0 ? { borderTop: `1px solid ${LINE}` } : undefined}
                >
                  <blockquote
                    className="font-[family-name:var(--font-fraunces)] text-[20px] leading-[1.5] tracking-[-0.01em]"
                    style={{ color: INK, fontVariationSettings: FR_TITLE }}
                  >
                    <span className="italic" style={{ color: MUTE }}>
                      &ldquo;
                    </span>
                    {t.quote}
                    <span className="italic" style={{ color: MUTE }}>
                      &rdquo;
                    </span>
                  </blockquote>
                  <figcaption
                    className="mt-5 flex items-center gap-3 text-[12px] uppercase tracking-[0.18em]"
                    style={{ color: FAINT }}
                  >
                    <span className="inline-block h-px w-8" style={{ background: FAINT }} />
                    {t.name} · {t.age}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ───────── FAQ (<details>, hairline dividers, no card chrome) ───────── */}
        <section className="mt-32">
          <Reveal>
            <h2
              className="font-[family-name:var(--font-fraunces)] text-[30px] leading-[1.14] tracking-[-0.02em]"
              style={{ color: INK, fontVariationSettings: FR_HEAD }}
            >
              Questions you{" "}
              <span className="italic" style={{ color: PERI, fontVariationSettings: FR_ITALIC }}>
                might have.
              </span>
            </h2>
          </Reveal>
          <div className="mt-8">
            {faq.map((item, i) => (
              <Reveal key={i} delay={i * 70}>
                <details
                  className="group py-6"
                  style={{ borderTop: `1px solid ${LINE}` }}
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                    <span
                      className="font-[family-name:var(--font-fraunces)] text-[18px] leading-[1.32] tracking-[-0.005em]"
                      style={{ color: INK, fontVariationSettings: FR_TITLE }}
                    >
                      {item.q}
                    </span>
                    <span
                      className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-full text-[18px] leading-none transition-transform duration-300 group-open:rotate-45"
                      style={{ background: GHOST, color: INK }}
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-4 max-w-[46ch] text-[14.5px] leading-[1.72]" style={{ color: SOFT }}>
                    {item.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ───────── FINAL CTA (ink-gradient panel + faint marquee) ───────── */}
        <section className="mt-32">
          <Reveal>
            <div
              className="relative overflow-hidden rounded-[36px] px-8 py-14 text-center"
              style={{
                background: "radial-gradient(130% 100% at 50% 0%, #393577 0%, #26235A 65%)",
                color: LIGHT,
                boxShadow: "0 40px 90px -50px rgba(38,35,90,0.9)",
              }}
            >
              {/* Faint scrolling marquee atmosphere. */}
              <div
                className="pointer-events-none absolute inset-x-0 top-6 overflow-hidden opacity-[0.13]"
                aria-hidden
              >
                <div
                  className="ya-marquee-track font-[family-name:var(--font-fraunces)] text-[30px] tracking-[-0.01em]"
                  style={{ color: "#cdd6ff", fontVariationSettings: '"opsz" 60, "SOFT" 40' }}
                >
                  <span className="px-4">Leave them ready · Leave them ready · </span>
                  <span className="px-4">Leave them ready · Leave them ready · </span>
                </div>
              </div>
              <h2
                className="relative mx-auto max-w-[16ch] font-[family-name:var(--font-fraunces)] text-[32px] leading-[1.1] tracking-[-0.02em]"
                style={{ color: LIGHT, fontVariationSettings: FR_HEAD }}
              >
                {content.finalCta.headline}
              </h2>
              <div className="relative mt-9 flex justify-center">
                <button
                  onClick={() => fd.onCta("final")}
                  className="ya-cta group inline-flex items-center justify-center gap-2.5 rounded-full px-9 py-4 text-[15px] font-semibold"
                  style={{ backgroundColor: GHOST, color: INK }}
                >
                  {content.finalCta.ctaLabel}
                  <ArrowRight className="ya-arrow" style={{ width: 18, height: 18 }} strokeWidth={2.25} />
                </button>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ───────── FAKE-DOOR (translucent white card) ───────── */}
        {fd.showWaitlist && (
          <section
            id="waitlist"
            className="mt-12 rounded-[36px] px-7 py-11"
            style={{
              background: "rgba(255,255,255,0.6)",
              border: "1px solid rgba(255,255,255,0.7)",
              boxShadow: "0 24px 60px -50px rgba(38,35,90,0.6)",
              backdropFilter: "blur(8px)",
            }}
          >
            {fd.state === "done" ? (
              <div className="text-center">
                <p
                  className="font-[family-name:var(--font-fraunces)] text-[28px] leading-tight tracking-[-0.01em]"
                  style={{ color: INK, fontVariationSettings: FR_HEAD }}
                >
                  {content.confirmation.title}
                </p>
                <p className="mx-auto mt-5 max-w-[34ch] text-[14.5px] leading-[1.7]" style={{ color: SOFT }}>
                  {content.confirmation.body}
                </p>
              </div>
            ) : (
              <>
                <p
                  className="text-center font-[family-name:var(--font-fraunces)] text-[30px] italic leading-[1.12] tracking-[-0.015em]"
                  style={{ color: INK, fontVariationSettings: '"opsz" 48, "SOFT" 80' }}
                >
                  {fakedoor.title}
                </p>
                <p className="mx-auto mt-4 max-w-[34ch] text-center text-[14.5px] leading-[1.68]" style={{ color: SOFT }}>
                  {fakedoor.body}
                </p>
                <form onSubmit={fd.submit} className="mt-8 flex flex-col gap-3">
                  <label htmlFor="ya-email" className="sr-only">
                    {fakedoor.emailPlaceholder}
                  </label>
                  <input
                    id="ya-email"
                    type="email"
                    required
                    value={fd.email}
                    onChange={(e) => fd.setEmail(e.target.value)}
                    placeholder={fakedoor.emailPlaceholder}
                    className="w-full rounded-full border px-6 py-4 text-[15px] outline-none focus:ring-2"
                    style={{
                      background: "rgba(247,244,255,0.9)",
                      color: INK,
                      borderColor: "rgba(90,86,144,0.22)",
                    }}
                  />
                  <button
                    type="submit"
                    disabled={fd.state === "loading"}
                    className="ya-cta w-full rounded-full px-6 py-4 text-[15px] font-semibold disabled:opacity-60"
                    style={{ backgroundColor: INK, color: LIGHT }}
                  >
                    {fd.state === "loading" ? "Reserving…" : fakedoor.submitLabel}
                  </button>
                  {fd.state === "error" && (
                    <p className="text-center text-[13px]" style={{ color: PERI }}>
                      Something went wrong. Please try again.
                    </p>
                  )}
                </form>
                <p className="mt-5 text-center text-[12px]" style={{ color: MUTE }}>
                  {fakedoor.privacyLine}
                </p>
              </>
            )}
          </section>
        )}

        {/* ───────── FOOTER ───────── */}
        <footer className="mt-28 border-t pt-10" style={{ borderColor: LINE }}>
          <p className="mb-3">{wordmark(INK)}</p>
          <p
            className="font-[family-name:var(--font-fraunces)] text-[16px] italic leading-[1.4]"
            style={{ color: SOFT, fontVariationSettings: '"opsz" 22, "SOFT" 60' }}
          >
            {footer.lines[0]}
          </p>
          <p className="mt-4 text-[11px] uppercase tracking-[0.22em]" style={{ color: MUTE }}>
            {footer.lines.slice(1).join("   ·   ")}
          </p>
        </footer>
      </div>
    </main>
  );
}
