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

// ─────────────────────────────────────────────────────────────────────────────
// MANUAL · B · "Bicolor"  (b-manual-04)
//
// Structurally mirrors the proven C "Retro Forest" base, reskinned for variant B
// and stripped to the B-manual family signature: ONE single lavender gradient
// field across the WHOLE page (no colored bands, no .ya-bleed). Sections sit on
// the background; rhythm = vertical spacing + 1px ink hairlines (same bg).
//
// Defining gesture for THIS version: every section title is the star. Each H2
// mixes Fraunces ROMAN ink + Fraunces ITALIC periwinkle on the operative word(s),
// so the title alone carries the hierarchy. No eyebrow kickers anywhere.
//
// Cards ONLY on: pricing plans, "everything included", final-CTA panel,
// fakedoor form. Problem / method / stories / FAQ render straight on the bg.
// ─────────────────────────────────────────────────────────────────────────────

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  display: "swap",
});

// Palette B (indigo / lavender / periwinkle)
const INK = "#26235A"; // primary text / ink fills
const SOFT = "#5A5690"; // secondary text
const MUTE = "#9C98D4"; // faint labels
const FAINT = "#8b86bf"; // hairline / quiet captions
const PERI = "#7A75C0"; // periwinkle accent — the operative word in titles
const LIGHT = "#F7F4FF"; // light label on ink
const HAIR = "rgba(38,35,90,0.14)"; // 1px ink hairline at low opacity

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

// Fraunces helpers — the bi-color font-mixing is the whole concept, so these
// keep roman/italic + ink/periwinkle consistent everywhere.
const ROMAN = '"opsz" 60, "SOFT" 40';
const ROMAN_SM = '"opsz" 28, "SOFT" 40';

export default function BManual04Bicolor({ content, slug }: DesignProps) {
  const fd = useFakeDoor(slug);
  const { hero, problem, solution, pricing, testimonials, faq, fakedoor, footer } =
    content;

  const reMatch = hero.reassuranceLine.match(/^(.*?)([\d.,]+)(.*)$/);

  // THE constant CTA: solid ink fill, light label, lucide arrow. Same everywhere.
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
      className={`ya-cta group inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-4 text-[15px] font-medium ${
        full ? "w-full" : ""
      }`}
      style={{ backgroundColor: INK, color: LIGHT }}
    >
      {label}
      <ArrowRight
        className="ya-arrow"
        style={{ width: 18, height: 18 }}
        strokeWidth={2.25}
      />
    </button>
  );

  // Reusable italic-periwinkle emphasis span inside a roman-ink title.
  const Em = ({ children }: { children: ReactNode }) => (
    <span className="italic" style={{ color: PERI }}>
      {children}
    </span>
  );

  return (
    <main
      className={`${fraunces.variable} ${dmSans.variable} font-[family-name:var(--font-dm)] relative min-h-[100dvh] overflow-x-clip antialiased`}
      style={{
        color: INK,
        // ONE single background across the entire page (B signature).
        background:
          "radial-gradient(120% 64% at 12% -4%, #F3ECFF 0%, rgba(243,236,255,0) 52%)," +
          "radial-gradient(110% 56% at 94% 12%, #D6E4FF 0%, rgba(214,228,255,0) 50%)," +
          "radial-gradient(130% 78% at 50% 104%, #EBE6FF 0%, rgba(235,230,255,0) 58%)," +
          "linear-gradient(180deg, #F3ECFF 0%, #EFEAFF 50%, #F3ECFF 100%)",
      }}
    >
      <style>{`
        .reveal { opacity: 0; transform: translateY(24px); filter: blur(6px);
          transition: opacity .8s cubic-bezier(.16,1,.3,1), transform .8s cubic-bezier(.16,1,.3,1), filter .8s cubic-bezier(.16,1,.3,1);
          will-change: transform, opacity; }
        .reveal[data-reveal="in"] { opacity: 1; transform: translateY(0); filter: blur(0); }
        @keyframes ya-rise { from { opacity: 0; transform: translateY(20px); filter: blur(7px); } to { opacity: 1; transform: translateY(0); filter: blur(0); } }
        @keyframes ya-pulse { 0%,100% { opacity: .5; transform: scale(1); } 50% { opacity: 1; transform: scale(1.3); } }
        @keyframes ya-orbit { 0% { transform: translate3d(0,0,0); } 50% { transform: translate3d(0,-3%,0) scale(1.04); } 100% { transform: translate3d(0,0,0); } }
        .ya-stage > * { opacity: 0; animation: ya-rise .9s cubic-bezier(.16,1,.3,1) forwards; }
        .ya-pulse-dot { animation: ya-pulse 2.6s ease-in-out infinite; }
        .ya-orb { animation: ya-orbit 18s ease-in-out infinite; }
        .ya-cta { transition: transform .4s cubic-bezier(.16,1,.3,1), box-shadow .4s cubic-bezier(.16,1,.3,1);
          box-shadow: 0 18px 38px -22px rgba(38,35,90,0.8); }
        .ya-cta:hover { transform: translateY(-3px); box-shadow: 0 24px 46px -20px rgba(38,35,90,0.85); }
        .ya-cta:active { transform: translateY(0) scale(.98); }
        .ya-arrow { transition: transform .4s cubic-bezier(.16,1,.3,1); }
        .ya-cta:hover .ya-arrow { transform: translateX(4px); }
        @media (prefers-reduced-motion: reduce) {
          .reveal { opacity: 1 !important; transform: none !important; filter: none !important; transition: none !important; }
          .ya-stage > * { animation: none !important; opacity: 1 !important; transform: none !important; }
          .ya-pulse-dot, .ya-orb { animation: none !important; }
          .ya-cta, .ya-cta:hover { transform: none !important; }
        }
      `}</style>

      {/* One faint drifting orb for quiet depth (decorative, reduced-motion safe). */}
      <div
        aria-hidden
        className="ya-orb pointer-events-none absolute left-1/2 top-[120vh] -z-0 h-[440px] w-[440px] -translate-x-1/2 rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, #D6E4FF 0%, rgba(214,228,255,0) 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-xl px-6">
        {/* ───────── NAV ───────── */}
        <header className="flex items-center justify-between pt-7">
          <span
            className="font-[family-name:var(--font-fraunces)] text-[17px] italic"
            style={{ color: INK, fontVariationSettings: '"opsz" 18, "SOFT" 60' }}
          >
            {hero.brandLockup}
          </span>
        </header>

        {/* ───────── HERO ───────── */}
        {/* Giant ghost "You Alive?" wordmark behind, near-transparent lavender;
            bi-color H1 on top. */}
        <section className="ya-stage relative pt-14 md:pt-20">
          <p
            aria-hidden
            className="pointer-events-none absolute -left-1 -top-2 -z-0 select-none font-[family-name:var(--font-fraunces)] leading-[0.84] tracking-[-0.03em]"
            style={{
              color: "#EBE6FF",
              fontSize: "clamp(82px, 26vw, 128px)",
              fontVariationSettings: '"opsz" 144, "SOFT" 100',
              animationDelay: "0s",
            }}
          >
            You
            <br />
            Alive?
          </p>

          <h1
            className="relative font-[family-name:var(--font-fraunces)] leading-[1.04] tracking-[-0.02em]"
            style={{
              color: INK,
              fontVariationSettings: ROMAN,
              animationDelay: "0.1s",
            }}
          >
            <span className="block text-[42px] md:text-[50px]">
              Leave nothing <Em>unsaid.</Em>
            </span>
            <span className="block pb-1 text-[42px] md:text-[50px]">
              Leave nothing <Em>unfound.</Em>
            </span>
          </h1>

          <p
            className="relative mt-6 max-w-[40ch] text-[16px] leading-[1.7]"
            style={{ color: SOFT, animationDelay: "0.3s" }}
          >
            {hero.subtitle}
          </p>

          <div className="relative mt-9" style={{ animationDelay: "0.44s" }}>
            <Cta label={hero.ctaLabel} onClick={() => fd.onCta("hero")} />
          </div>

          <p
            className="relative mt-7 flex items-center gap-2.5 text-[13px]"
            style={{ color: SOFT, animationDelay: "0.58s" }}
          >
            <span
              className="ya-pulse-dot h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: PERI }}
            />
            <span>
              {reMatch ? (
                <>
                  {reMatch[1]}
                  <CountUp
                    end={parseInt(reMatch[2].replace(/[.,]/g, ""), 10)}
                  />
                  {reMatch[3]}
                </>
              ) : (
                hero.reassuranceLine
              )}
            </span>
          </p>
        </section>

        {/* hairline */}
        <div className="mt-16 h-px w-full" style={{ backgroundColor: HAIR }} aria-hidden />

        {/* ───────── PROBLEM (on bg, no card) ───────── */}
        <section className="pt-16">
          <Reveal>
            <h2
              className="font-[family-name:var(--font-fraunces)] text-[30px] leading-[1.16] tracking-[-0.015em]"
              style={{ color: INK, fontVariationSettings: ROMAN }}
            >
              Logins, documents, last wishes:{" "}
              <Em>someone has to sort it all.</Em>
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p
              className="mt-6 max-w-[46ch] text-[16px] leading-[1.75]"
              style={{ color: SOFT }}
            >
              {problem.body}
            </p>
          </Reveal>
        </section>

        {/* hairline */}
        <div className="mt-16 h-px w-full" style={{ backgroundColor: HAIR }} aria-hidden />

        {/* ───────── METHOD (3 steps, slim numerals, no card) ───────── */}
        <section className="pt-16">
          <Reveal>
            <h2
              className="font-[family-name:var(--font-fraunces)] text-[30px] leading-[1.16] tracking-[-0.015em]"
              style={{ color: INK, fontVariationSettings: ROMAN }}
            >
              How <Em>You Alive</Em> works
            </h2>
          </Reveal>

          <ol className="mt-12 space-y-12">
            {solution.steps.map((s, i) => {
              // Split each step title so the closing clause becomes the
              // italic-periwinkle operative phrase.
              const m = s.title.match(/^(.*?[,;:])\s*(.+)$/);
              const lead = m ? m[1] : s.title;
              const tail = m ? m[2] : "";
              return (
                <Reveal as="li" key={i} delay={i * 90}>
                  <div className="flex items-center gap-4">
                    <span
                      className="font-[family-name:var(--font-fraunces)] text-[52px] font-light leading-none tracking-[-0.02em]"
                      style={{
                        color: "rgba(122,117,192,0.55)",
                        fontVariationSettings: '"opsz" 72, "SOFT" 0',
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="h-px flex-1"
                      style={{ backgroundColor: HAIR }}
                    />
                  </div>
                  <h3
                    className="mt-4 font-[family-name:var(--font-fraunces)] text-[21px] leading-[1.28] tracking-[-0.005em]"
                    style={{ color: INK, fontVariationSettings: ROMAN_SM }}
                  >
                    {lead}
                    {tail && (
                      <>
                        {" "}
                        <Em>{tail}</Em>
                      </>
                    )}
                  </h3>
                  <p
                    className="mt-3 max-w-[46ch] text-[15.5px] leading-[1.7]"
                    style={{ color: SOFT }}
                  >
                    {s.body}
                  </p>
                </Reveal>
              );
            })}
          </ol>
        </section>

        {/* hairline */}
        <div className="mt-20 h-px w-full" style={{ backgroundColor: HAIR }} aria-hidden />

        {/* ───────── PRICING (cards — allowed) ───────── */}
        <section ref={fd.pricingRef} className="pt-16">
          <Reveal>
            <h2
              className="font-[family-name:var(--font-fraunces)] text-[31px] leading-[1.16] tracking-[-0.015em]"
              style={{ color: INK, fontVariationSettings: ROMAN }}
            >
              Take care of them, <Em>before you can&rsquo;t.</Em>
            </h2>
          </Reveal>
          <Reveal delay={70}>
            <p
              className="mt-5 max-w-[40ch] text-[16px] leading-[1.65]"
              style={{ color: SOFT }}
            >
              {pricing.subtitle}
            </p>
          </Reveal>

          <div className="mt-9 space-y-5">
            {pricing.plans.map((plan, i) => {
              const hi = !!plan.highlight; // Annual = ink-gradient card
              return (
                <Reveal key={i} delay={i * 90}>
                  <div
                    className="relative overflow-hidden rounded-[28px] p-7"
                    style={{
                      background: hi
                        ? "linear-gradient(158deg, #312D78 0%, #26235A 62%, #211E50 100%)"
                        : "rgba(255,255,255,0.62)",
                      color: hi ? LIGHT : INK,
                      boxShadow: hi
                        ? "0 30px 60px -28px rgba(38,35,90,0.65)"
                        : "0 18px 44px -30px rgba(38,35,90,0.4)",
                      border: hi
                        ? "1px solid rgba(201,210,255,0.22)"
                        : "1px solid rgba(255,255,255,0.7)",
                    }}
                  >
                    {hi && (
                      <span
                        className="absolute right-6 top-7 rounded-full px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.2em]"
                        style={{ backgroundColor: "#C9D2FF", color: INK }}
                      >
                        Most chosen
                      </span>
                    )}
                    <p
                      className="font-[family-name:var(--font-fraunces)] text-[19px] italic"
                      style={{
                        color: hi ? "#C9D2FF" : PERI,
                        fontVariationSettings: '"opsz" 20, "SOFT" 60',
                      }}
                    >
                      {plan.name}
                    </p>
                    <p
                      className="mt-3 font-[family-name:var(--font-fraunces)] text-[44px] font-light leading-none tracking-[-0.02em]"
                      style={{ fontVariationSettings: '"opsz" 72, "SOFT" 0' }}
                    >
                      {plan.price}
                    </p>
                    <p
                      className="mt-3 text-[13px]"
                      style={{ color: hi ? "#B9C2F2" : SOFT }}
                    >
                      {plan.descriptor}
                    </p>
                    <div className="mt-7">
                      {hi ? (
                        <button
                          onClick={() =>
                            fd.onCta(`pricing-${plan.name.toLowerCase()}`)
                          }
                          className="ya-cta group inline-flex w-full items-center justify-center gap-2.5 rounded-full px-7 py-4 text-[15px] font-medium"
                          style={{ backgroundColor: "#C9D2FF", color: INK }}
                        >
                          {plan.ctaLabel}
                          <ArrowRight
                            className="ya-arrow"
                            style={{ width: 18, height: 18 }}
                            strokeWidth={2.25}
                          />
                        </button>
                      ) : (
                        <Cta
                          label={plan.ctaLabel}
                          onClick={() =>
                            fd.onCta(`pricing-${plan.name.toLowerCase()}`)
                          }
                          full
                        />
                      )}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Everything included — translucent card, two columns. */}
          <Reveal className="mt-6">
            <div
              className="rounded-[28px] p-7"
              style={{
                background: "rgba(255,255,255,0.58)",
                border: "1px solid rgba(255,255,255,0.7)",
                boxShadow: "0 18px 44px -30px rgba(38,35,90,0.4)",
              }}
            >
              <p
                className="font-[family-name:var(--font-fraunces)] text-[20px] leading-tight tracking-[-0.01em]"
                style={{ color: INK, fontVariationSettings: ROMAN_SM }}
              >
                <Em>Everything</Em> included
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
                      style={{ backgroundColor: "rgba(201,210,255,0.75)", color: INK }}
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

        {/* hairline */}
        <div className="mt-20 h-px w-full" style={{ backgroundColor: HAIR }} aria-hidden />

        {/* ───────── STORIES (pull-quotes, hairline rules, no card) ───────── */}
        <section className="pt-16">
          <Reveal>
            <h2
              className="font-[family-name:var(--font-fraunces)] text-[30px] leading-[1.16] tracking-[-0.015em]"
              style={{ color: INK, fontVariationSettings: ROMAN }}
            >
              From those <Em>who started</Em>
            </h2>
          </Reveal>
          <div className="mt-8">
            {testimonials.map((t, i) => (
              <Reveal as="figure" key={i} delay={i * 80}>
                <figure
                  className="py-7"
                  style={i > 0 ? { borderTop: `1px solid ${HAIR}` } : undefined}
                >
                  <blockquote
                    className="font-[family-name:var(--font-fraunces)] text-[20px] leading-[1.46] tracking-[-0.01em]"
                    style={{ color: INK, fontVariationSettings: ROMAN_SM }}
                  >
                    <Em>&ldquo;</Em>
                    {t.quote}
                    <Em>&rdquo;</Em>
                  </blockquote>
                  <figcaption
                    className="mt-4 flex items-center gap-3 text-[12px] uppercase tracking-[0.2em]"
                    style={{ color: FAINT }}
                  >
                    <span
                      className="inline-block h-px w-8"
                      style={{ backgroundColor: FAINT }}
                    />
                    {t.name} · {t.age}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </section>

        {/* hairline */}
        <div className="mt-20 h-px w-full" style={{ backgroundColor: HAIR }} aria-hidden />

        {/* ───────── FAQ (<details>, hairline dividers, no card) ───────── */}
        <section className="pt-16">
          <Reveal>
            <h2
              className="font-[family-name:var(--font-fraunces)] text-[30px] leading-[1.16] tracking-[-0.015em]"
              style={{ color: INK, fontVariationSettings: ROMAN }}
            >
              Questions <Em>you might have</Em>
            </h2>
          </Reveal>
          <div className="mt-8">
            {faq.map((item, i) => (
              <Reveal key={i} delay={i * 70}>
                <details
                  className="group py-6"
                  style={{ borderTop: `1px solid ${HAIR}` }}
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                    <span
                      className="font-[family-name:var(--font-fraunces)] text-[18px] leading-[1.34] tracking-[-0.005em]"
                      style={{ color: INK, fontVariationSettings: ROMAN_SM }}
                    >
                      {item.q}
                    </span>
                    <span
                      className="mt-0.5 text-[22px] leading-none transition-transform duration-300 group-open:rotate-45"
                      style={{ color: PERI }}
                    >
                      +
                    </span>
                  </summary>
                  <p
                    className="mt-4 max-w-[48ch] text-[14.5px] leading-[1.7]"
                    style={{ color: SOFT }}
                  >
                    {item.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ───────── FINAL CTA (ink-gradient panel — allowed) ───────── */}
        <section className="pt-20">
          <Reveal>
            <div
              className="relative overflow-hidden rounded-[36px] p-10 text-center"
              style={{
                background:
                  "linear-gradient(158deg, #312D78 0%, #26235A 60%, #211E50 100%)",
                color: LIGHT,
                boxShadow: "0 36px 70px -30px rgba(38,35,90,0.7)",
                border: "1px solid rgba(201,210,255,0.18)",
              }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-40 blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle, #4A4699 0%, rgba(74,70,153,0) 70%)",
                }}
              />
              <h2
                className="relative font-[family-name:var(--font-fraunces)] text-[34px] leading-[1.1] tracking-[-0.02em]"
                style={{ fontVariationSettings: ROMAN }}
              >
                Ready to leave them{" "}
                <span className="italic" style={{ color: "#C9D2FF" }}>
                  ready?
                </span>
              </h2>
              <div className="relative mt-8 flex justify-center">
                <button
                  onClick={() => fd.onCta("final")}
                  className="ya-cta group inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-4 text-[15px] font-medium"
                  style={{ backgroundColor: "#C9D2FF", color: INK }}
                >
                  {content.finalCta.ctaLabel}
                  <ArrowRight
                    className="ya-arrow"
                    style={{ width: 18, height: 18 }}
                    strokeWidth={2.25}
                  />
                </button>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ───────── FAKE-DOOR (card — allowed) ───────── */}
        {fd.showWaitlist && (
          <section
            id="waitlist"
            className="mt-12 rounded-[36px] p-8"
            style={{
              background: "rgba(255,255,255,0.6)",
              border: "1px solid rgba(255,255,255,0.7)",
              boxShadow: "0 22px 50px -32px rgba(38,35,90,0.45)",
            }}
          >
            {fd.state === "done" ? (
              <div>
                <p
                  className="font-[family-name:var(--font-fraunces)] text-[28px] leading-tight tracking-[-0.01em]"
                  style={{ color: INK, fontVariationSettings: ROMAN }}
                >
                  Your spot is <Em>reserved.</Em>
                </p>
                <p
                  className="mt-5 max-w-[36ch] text-[14.5px] leading-[1.7]"
                  style={{ color: SOFT }}
                >
                  {content.confirmation.body}
                </p>
              </div>
            ) : (
              <>
                <p
                  className="font-[family-name:var(--font-fraunces)] text-[30px] leading-[1.1] tracking-[-0.01em]"
                  style={{ color: INK, fontVariationSettings: ROMAN }}
                >
                  Thank you for your <Em>interest!</Em>
                </p>
                <p
                  className="mt-4 max-w-[38ch] text-[14.5px] leading-[1.7]"
                  style={{ color: SOFT }}
                >
                  {fakedoor.body}
                </p>
                <form onSubmit={fd.submit} className="mt-7 flex flex-col gap-3">
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
                    className="w-full rounded-2xl border bg-white/70 px-5 py-4 text-[15px] outline-none focus:ring-2"
                    style={{ borderColor: "rgba(90,86,144,0.3)", color: INK }}
                  />
                  <button
                    type="submit"
                    disabled={fd.state === "loading"}
                    className="ya-cta inline-flex w-full items-center justify-center gap-2.5 rounded-full px-6 py-4 text-[15px] font-medium disabled:opacity-60"
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
                <p className="mt-5 text-center text-[12px]" style={{ color: SOFT }}>
                  {fakedoor.privacyLine}
                </p>
              </>
            )}
          </section>
        )}

        {/* ───────── FOOTER ───────── */}
        <footer
          className="mt-24 border-t pb-20 pt-10"
          style={{ borderColor: HAIR }}
        >
          <p
            className="font-[family-name:var(--font-fraunces)] text-[17px] italic leading-[1.4]"
            style={{ color: INK, fontVariationSettings: '"opsz" 20, "SOFT" 60' }}
          >
            {footer.lines[0]}
          </p>
          <p
            className="mt-4 text-[11px] uppercase tracking-[0.24em]"
            style={{ color: MUTE }}
          >
            {footer.lines.slice(1).join("   ·   ")}
          </p>
        </footer>
      </div>
    </main>
  );
}
