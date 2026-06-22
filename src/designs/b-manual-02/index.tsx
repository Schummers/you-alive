"use client";

import { Fraunces, Mulish } from "next/font/google";
import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type CSSProperties,
  type RefObject,
} from "react";
import { ArrowRight } from "lucide-react";
import type { DesignProps } from "@/designs/types";
import { useFakeDoor } from "@/designs/shared/useFakeDoor";
import { CountUp } from "@/designs/shared/CountUp";

// ─────────────────────────────────────────────────────────────────────────────
// MANUAL · B · b-manual-02 — "Air"
// The tender, calm member of the B-manual family. ONE single light, airy
// gradient field runs across the ENTIRE page (the variant-B signature): a
// near-white base with only two soft halos near the top, so the hero ghost
// wordmark "You Alive?" reads, then the field calms to near-white below the
// fold. Every section is transparent — rhythm is vertical whitespace only.
// NO cards except: pricing plans, "everything included", final-CTA panel, the
// fakedoor form. Titles use bi-color / Fraunces-italic word emphasis instead of
// eyebrow kickers. Larger, lighter type scale than the other versions.
// CTA constant: ink solid-fill + light label + lucide ArrowRight, everywhere.
// ─────────────────────────────────────────────────────────────────────────────
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT", "WONK"],
  style: ["normal", "italic"],
  display: "swap",
});

const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-mulish",
  display: "swap",
});

// Palette B (locked)
const INK = "#26235A"; // primary dark text / CTA fill
const SOFT = "#5A5690"; // secondary text
const MUTE = "#9C98D4"; // faint labels
const FAINT = "#8b86bf"; // faintest captions
const GHOST = "#EBE6FF"; // ghost hero wordmark
const LIGHT = "#F7F4FF"; // CTA label
const PERI = "#7E78C9"; // periwinkle accent for italic emphasis (AA on near-white)
const HAIR = "rgba(90,86,144,0.16)"; // hairline rules

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

const FV = (opsz: number, soft = 30, wonk = 0) =>
  ({ fontVariationSettings: `"opsz" ${opsz}, "SOFT" ${soft}, "WONK" ${wonk}` } as CSSProperties);

export default function BManual02Air({ content, slug }: DesignProps) {
  const fd = useFakeDoor(slug);
  const { hero, problem, solution, pricing, testimonials, faq, fakedoor, footer } =
    content;

  const reMatch = hero.reassuranceLine.match(/^(.*?)([\d.,]+)(.*)$/);

  // "You Alive ?" wordmark — Fraunces italic, "?" as periwinkle accent mark.
  const wordmark = (size: number, color: string) => (
    <span
      className="font-[family-name:var(--font-fraunces)] italic"
      style={{ fontSize: size, color, ...FV(Math.max(14, size), 70) }}
    >
      {hero.brandLockup.replace("?", "")}
      <span style={{ color: PERI }}>?</span>
    </span>
  );

  // THE constant CTA: ink solid-fill, light label, lucide ArrowRight. No stroke.
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

  return (
    <main
      className={`${fraunces.variable} ${mulish.variable} font-[family-name:var(--font-mulish)] relative min-h-[100dvh] overflow-x-clip antialiased`}
      style={{
        color: INK,
        // ONE single light, airy field across the ENTIRE page. Two soft halos
        // near the very top (hero halo a touch stronger so the ghost reads),
        // then it calms to near-white below the fold.
        background:
          "radial-gradient(150% 62% at 28% -2%, #EBE6FF 0%, rgba(235,230,255,0) 46%)," +
          "radial-gradient(120% 48% at 88% 4%, #D6E4FF 0%, rgba(214,228,255,0) 42%)," +
          "radial-gradient(120% 30% at 50% 16%, #F3ECFF 0%, rgba(243,236,255,0) 50%)," +
          "#F9F7FF",
      }}
    >
      <style>{`
        .reveal { opacity: 0; transform: translateY(22px); filter: blur(6px);
          transition: opacity .85s cubic-bezier(.16,1,.3,1), transform .85s cubic-bezier(.16,1,.3,1), filter .85s cubic-bezier(.16,1,.3,1);
          will-change: transform, opacity; }
        .reveal[data-reveal="in"] { opacity: 1; transform: translateY(0); filter: blur(0); }
        @keyframes ya-rise { from { opacity: 0; transform: translateY(28px); filter: blur(7px); } to { opacity: 1; transform: translateY(0); filter: blur(0); } }
        @keyframes ya-pulse { 0%,100% { opacity: .5; transform: scale(1); } 50% { opacity: 1; transform: scale(1.4); } }
        .ya-stage > * { opacity: 0; animation: ya-rise 1s cubic-bezier(.16,1,.3,1) forwards; }
        .ya-pulse-dot { animation: ya-pulse 2.8s ease-in-out infinite; }
        .ya-cta { transition: transform .4s cubic-bezier(.16,1,.3,1), box-shadow .4s cubic-bezier(.16,1,.3,1), background-color .3s ease; box-shadow: 0 14px 34px -18px rgba(38,35,90,0.55); }
        .ya-cta:hover { transform: translateY(-3px); background-color: #312d6e; box-shadow: 0 22px 46px -18px rgba(38,35,90,0.6); }
        .ya-cta:active { transform: translateY(0) scale(.985); }
        .ya-arrow { transition: transform .4s cubic-bezier(.16,1,.3,1); }
        .ya-cta:hover .ya-arrow { transform: translateX(4px); }
        @media (prefers-reduced-motion: reduce) {
          .reveal { opacity: 1 !important; transform: none !important; filter: none !important; transition: none !important; }
          .ya-stage > * { animation: none !important; opacity: 1 !important; transform: none !important; }
          .ya-pulse-dot { animation: none !important; }
          .ya-cta, .ya-cta:hover { transform: none !important; }
        }
      `}</style>

      <div className="relative z-10 mx-auto max-w-xl px-6">
        {/* ───────── NAV ───────── */}
        <header className="flex items-center justify-between pt-8">
          {wordmark(18, INK)}
          <span
            className="rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.22em]"
            style={{ borderColor: HAIR, color: SOFT }}
          >
            Early access
          </span>
        </header>

        {/* ───────── HERO ───────── */}
        {/* Giant ghost "You Alive?" wordmark behind, near-transparent lavender;
            H1 sits on top. */}
        <section className="ya-stage relative pt-14 md:pt-20">
          <p
            aria-hidden
            className="pointer-events-none absolute -top-2 left-1/2 -z-10 w-full -translate-x-1/2 select-none text-center font-[family-name:var(--font-fraunces)] leading-[0.82] tracking-[-0.03em]"
            style={{
              color: GHOST,
              fontSize: "clamp(86px, 26vw, 168px)",
              animationDelay: "0s",
              textShadow: "0 2px 50px rgba(90,86,144,0.12)",
              ...FV(144, 100, 0),
            }}
          >
            You
            <br />
            Alive?
          </p>

          <h1
            className="relative font-[family-name:var(--font-fraunces)] tracking-[-0.02em]"
            style={{ color: INK, animationDelay: "0.12s", ...FV(72, 36) }}
          >
            <span className="block text-[40px] leading-[1.06] md:text-[52px]">
              Leave nothing{" "}
              <span className="italic" style={{ color: PERI }}>
                unsaid.
              </span>
            </span>
            <span className="mt-1 block text-[40px] leading-[1.06] md:text-[52px]">
              Leave nothing{" "}
              <span className="italic" style={{ color: PERI }}>
                unfound.
              </span>
            </span>
          </h1>

          <p
            className="mt-7 max-w-[40ch] text-[17px] leading-[1.7] md:text-[18px]"
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
              className="ya-pulse-dot inline-block h-1.5 w-1.5 flex-none rounded-full"
              style={{ background: MUTE, boxShadow: `0 0 7px 2px ${GHOST}` }}
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
        </section>

        {/* ───────── PROBLEM (on the field, no card) ───────── */}
        <section className="mt-32 md:mt-40">
          <Reveal>
            <h2
              className="font-[family-name:var(--font-fraunces)] text-[30px] leading-[1.16] tracking-[-0.015em] md:text-[34px]"
              style={{ color: INK, ...FV(60, 30) }}
            >
              Logins, documents, last wishes:{" "}
              <span className="italic" style={{ color: PERI }}>
                someone has to sort it all.
              </span>
            </h2>
            <p
              className="mt-7 max-w-[46ch] text-[16px] leading-[1.78] md:text-[16.5px]"
              style={{ color: SOFT }}
            >
              {problem.body}
            </p>
          </Reveal>
        </section>

        {/* ───────── METHOD (3 steps, airy, slim numerals, no card) ───────── */}
        <section className="mt-32 md:mt-40">
          <Reveal>
            <h2
              className="font-[family-name:var(--font-fraunces)] text-[28px] italic leading-[1.18] tracking-[-0.01em] md:text-[32px]"
              style={{ color: INK, ...FV(48, 60) }}
            >
              {solution.intro}
            </h2>
          </Reveal>

          <ol className="mt-14 space-y-16">
            {solution.steps.map((s, i) => (
              <Reveal as="li" key={i} delay={i * 90}>
                <li className="border-t pt-8" style={{ borderColor: HAIR }}>
                  <span
                    className="block font-[family-name:var(--font-fraunces)] text-[68px] leading-none md:text-[76px]"
                    style={{ color: "rgba(126,120,201,0.55)", ...FV(72, 20) }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3
                    className="mt-5 font-[family-name:var(--font-fraunces)] text-[22px] leading-[1.28] tracking-[-0.005em] md:text-[24px]"
                    style={{ color: INK, ...FV(32, 30) }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="mt-4 max-w-[46ch] text-[15.5px] leading-[1.72]"
                    style={{ color: SOFT }}
                  >
                    {s.body}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </section>

        {/* ───────── PRICING (cards — minimal translucent white) ───────── */}
        <section ref={fd.pricingRef as RefObject<HTMLElement>} className="mt-32 md:mt-40">
          <Reveal>
            <h2
              className="font-[family-name:var(--font-fraunces)] text-[31px] leading-[1.14] tracking-[-0.015em] md:text-[35px]"
              style={{ color: INK, ...FV(56, 30) }}
            >
              Take care of them,{" "}
              <span className="italic" style={{ color: PERI }}>
                before you can&rsquo;t.
              </span>
            </h2>
            <p
              className="mt-6 max-w-[42ch] text-[16px] leading-[1.72]"
              style={{ color: SOFT }}
            >
              {pricing.subtitle}
            </p>
          </Reveal>

          <div className="mt-12 space-y-5">
            {pricing.plans.map((plan, i) => {
              const hi = !!plan.highlight;
              return (
                <Reveal key={i} delay={i * 90}>
                  <div
                    className="relative rounded-[28px] p-8"
                    style={{
                      // Both light/translucent; highlight only subtly tinted.
                      background: hi
                        ? "rgba(235,230,255,0.55)"
                        : "rgba(255,255,255,0.6)",
                      boxShadow: hi
                        ? "inset 0 0 0 1.5px rgba(126,120,201,0.45), 0 18px 44px -28px rgba(38,35,90,0.4)"
                        : "inset 0 0 0 1px rgba(90,86,144,0.14)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    {hi && (
                      <span
                        className="absolute -top-3 left-8 rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.18em]"
                        style={{ background: INK, color: LIGHT }}
                      >
                        Most chosen
                      </span>
                    )}
                    <p
                      className="font-[family-name:var(--font-fraunces)] text-[15px] italic"
                      style={{ color: hi ? PERI : SOFT, ...FV(18, 70) }}
                    >
                      {plan.name}
                    </p>
                    <p
                      className="mt-3 font-[family-name:var(--font-fraunces)] text-[46px] leading-none tracking-[-0.02em] md:text-[50px]"
                      style={{ color: INK, ...FV(72, 20) }}
                    >
                      {plan.price}
                    </p>
                    <p className="mt-3 text-[13.5px]" style={{ color: SOFT }}>
                      {plan.descriptor}
                    </p>
                    <div className="mt-7">
                      <Cta
                        label={plan.ctaLabel}
                        onClick={() => fd.onCta(`pricing-${plan.name.toLowerCase()}`)}
                        full
                      />
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Everything included — light translucent card. */}
          <Reveal className="mt-5">
            <div
              className="rounded-[28px] p-8"
              style={{
                background: "rgba(255,255,255,0.5)",
                boxShadow: "inset 0 0 0 1px rgba(90,86,144,0.12)",
              }}
            >
              <p
                className="text-[10px] uppercase tracking-[0.3em]"
                style={{ color: FAINT }}
              >
                Everything included
              </p>
              <ul className="mt-7 grid grid-cols-1 gap-y-3.5 sm:grid-cols-2 sm:gap-x-6">
                {pricing.included.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-[14.5px] leading-[1.4]"
                    style={{ color: INK }}
                  >
                    <span
                      className="mt-[2px] flex h-5 w-5 flex-none items-center justify-center rounded-full text-[11px]"
                      style={{ background: "rgba(214,228,255,0.85)", color: INK }}
                    >
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <p
                className="mt-7 border-t pt-6 text-[13px] leading-[1.65]"
                style={{ borderColor: HAIR, color: SOFT }}
              >
                {pricing.scarcityLine}
              </p>
            </div>
          </Reveal>
        </section>

        {/* ───────── STORIES (pull-quotes, hairline rules, no card) ───────── */}
        <section className="mt-32 md:mt-40">
          <Reveal>
            <h2
              className="font-[family-name:var(--font-fraunces)] text-[28px] italic leading-[1.18] tracking-[-0.01em] md:text-[32px]"
              style={{ color: INK, ...FV(48, 60) }}
            >
              From those who started
            </h2>
          </Reveal>
          <div className="mt-12 space-y-14">
            {testimonials.map((t, i) => (
              <Reveal as="figure" key={i} delay={i * 80}>
                <figure
                  style={i > 0 ? { borderTop: `1px solid ${HAIR}`, paddingTop: 56 } : undefined}
                >
                  <blockquote
                    className="font-[family-name:var(--font-fraunces)] text-[23px] leading-[1.46] tracking-[-0.01em] md:text-[26px]"
                    style={{ color: INK, ...FV(36, 30) }}
                  >
                    <span className="italic" style={{ color: PERI }}>
                      &ldquo;
                    </span>
                    {t.quote}
                    <span className="italic" style={{ color: PERI }}>
                      &rdquo;
                    </span>
                  </blockquote>
                  <figcaption
                    className="mt-6 flex items-center gap-3 text-[12px] uppercase tracking-[0.2em]"
                    style={{ color: FAINT }}
                  >
                    <span
                      className="inline-block h-px w-8"
                      style={{ background: MUTE }}
                    />
                    {t.name} · {t.age}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ───────── FAQ (<details>, hairline dividers, no card) ───────── */}
        <section className="mt-32 md:mt-40">
          <Reveal>
            <h2
              className="font-[family-name:var(--font-fraunces)] text-[28px] leading-[1.18] tracking-[-0.01em] md:text-[32px]"
              style={{ color: INK, ...FV(44, 30) }}
            >
              Questions you{" "}
              <span className="italic" style={{ color: PERI }}>
                might have.
              </span>
            </h2>
          </Reveal>
          <div className="mt-10">
            {faq.map((item, i) => (
              <Reveal key={i} delay={i * 70}>
                <details className="group border-t py-6" style={{ borderColor: HAIR }}>
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                    <span
                      className="font-[family-name:var(--font-fraunces)] text-[19px] leading-[1.34] tracking-[-0.005em] md:text-[20px]"
                      style={{ color: INK, ...FV(26, 30) }}
                    >
                      {item.q}
                    </span>
                    <span
                      className="mt-1 flex-none text-[22px] leading-none transition-transform duration-300 group-open:rotate-45"
                      style={{ color: MUTE }}
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-4 max-w-[52ch] text-[14.5px] leading-[1.72]" style={{ color: SOFT }}>
                    {item.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ───────── FINAL CTA (soft rounded panel) ───────── */}
        <section className="mt-32 md:mt-40">
          <Reveal>
            <div
              className="relative overflow-hidden rounded-[36px] px-8 py-16 text-center"
              style={{
                background:
                  "radial-gradient(120% 90% at 50% -10%, #34306f 0%, #26235A 60%)",
                color: LIGHT,
                boxShadow: "0 32px 70px -34px rgba(38,35,90,0.6)",
              }}
            >
              <p
                aria-hidden
                className="pointer-events-none mb-[-0.5em] select-none font-[family-name:var(--font-fraunces)] leading-none"
                style={{
                  color: "rgba(235,230,255,0.12)",
                  fontSize: "clamp(64px, 20vw, 96px)",
                  ...FV(144, 100),
                }}
              >
                ?
              </p>
              <h2
                className="relative mx-auto max-w-[16ch] text-balance font-[family-name:var(--font-fraunces)] text-[32px] leading-[1.12] tracking-[-0.015em] md:text-[38px]"
                style={{ color: LIGHT, ...FV(72, 40) }}
              >
                Ready to leave them{" "}
                <span className="italic" style={{ color: GHOST }}>
                  ready?
                </span>
              </h2>
              <div className="relative mt-9 flex justify-center">
                <button
                  onClick={() => fd.onCta("final")}
                  className="ya-cta group inline-flex items-center justify-center gap-2.5 rounded-full px-9 py-4 text-[15px] font-semibold"
                  style={{ background: GHOST, color: INK }}
                >
                  {content.finalCta.ctaLabel}
                  <ArrowRight className="ya-arrow" style={{ width: 18, height: 18 }} strokeWidth={2.25} />
                </button>
              </div>
            </div>
          </Reveal>
        </section>

        {/* ───────── FAKE-DOOR (inline, card) ───────── */}
        {fd.showWaitlist && (
          <section
            id="waitlist"
            className="mt-12 rounded-[36px] px-8 py-12"
            style={{
              background: "rgba(255,255,255,0.6)",
              boxShadow: "inset 0 0 0 1px rgba(90,86,144,0.14)",
              backdropFilter: "blur(8px)",
            }}
          >
            {fd.state === "done" ? (
              <div className="text-center">
                <p
                  className="font-[family-name:var(--font-fraunces)] text-[28px] leading-tight tracking-[-0.01em] md:text-[30px]"
                  style={{ color: INK, ...FV(48, 40) }}
                >
                  {content.confirmation.title}
                </p>
                <p
                  className="mx-auto mt-5 max-w-[36ch] text-[14.5px] leading-[1.72]"
                  style={{ color: SOFT }}
                >
                  {content.confirmation.body}
                </p>
              </div>
            ) : (
              <>
                <p
                  className="text-center font-[family-name:var(--font-fraunces)] text-[30px] italic leading-[1.1] tracking-[-0.015em] md:text-[32px]"
                  style={{ color: INK, ...FV(48, 80) }}
                >
                  {fakedoor.title}
                </p>
                <p
                  className="mx-auto mt-5 max-w-[36ch] text-center text-[14.5px] leading-[1.72]"
                  style={{ color: SOFT }}
                >
                  {fakedoor.body}
                </p>
                <form onSubmit={fd.submit} className="mx-auto mt-8 flex max-w-sm flex-col gap-3">
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
                    className="w-full rounded-full border px-6 py-4 text-[15px] outline-none transition focus:border-[#7E78C9]"
                    style={{
                      background: "rgba(249,247,255,0.9)",
                      borderColor: "rgba(90,86,144,0.25)",
                      color: INK,
                    }}
                  />
                  <button
                    type="submit"
                    disabled={fd.state === "loading"}
                    className="ya-cta w-full rounded-full px-6 py-4 text-[15px] font-semibold disabled:opacity-60"
                    style={{ background: INK, color: LIGHT }}
                  >
                    {fd.state === "loading" ? "Reserving…" : fakedoor.submitLabel}
                  </button>
                  {fd.state === "error" && (
                    <p className="text-center text-[13px]" style={{ color: PERI }}>
                      Something went wrong. Please try again.
                    </p>
                  )}
                </form>
                <p className="mt-5 text-center text-[12px]" style={{ color: FAINT }}>
                  {fakedoor.privacyLine}
                </p>
              </>
            )}
          </section>
        )}

        {/* ───────── FOOTER ───────── */}
        <footer className="mt-28 border-t pb-20 pt-10" style={{ borderColor: HAIR }}>
          <p className="mb-4">{wordmark(17, INK)}</p>
          <p
            className="font-[family-name:var(--font-fraunces)] text-[16px] italic leading-[1.4]"
            style={{ color: SOFT, ...FV(20, 60) }}
          >
            {footer.lines[0]}
          </p>
          <p className="mt-5 text-[11px] uppercase tracking-[0.24em]" style={{ color: FAINT }}>
            {footer.lines.slice(1).join("   ·   ")}
          </p>
        </footer>
      </div>
    </main>
  );
}
