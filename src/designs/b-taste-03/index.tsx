"use client";

import { useEffect, useRef, useState } from "react";
import { Bricolage_Grotesque, Geist } from "next/font/google";
import type { DesignProps } from "@/designs/types";
import { useFakeDoor } from "@/designs/shared/useFakeDoor";

// Direction: INTENSE COLOR + MOTION (text-led, no photography).
// A dreaming, luminous reading of the brand: the lavender→periwinkle→indigo
// mesh of the ad becomes a slowly breathing aurora field behind the whole page,
// rich indigo type floating over glowing periwinkle. Bricolage Grotesque (with
// its optical-size axis) carries an expressive-yet-tender display voice; Geist
// keeps the body clean. Every animation is motivated: the hero rises and the
// aurora drifts on entry, sections reveal as they scroll into view, CTAs press
// with spring-like physics. All motion is CSS-only and fully disabled under
// prefers-reduced-motion (page stays completely readable + static).
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  axes: ["opsz"],
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

// Palette (locked indigo / lavender / periwinkle family) — ONE accent intent.
const INK = "#26235A"; // primary dark text
const SOFT = "#5A5690"; // secondary text
const HALO = "#9C98D4"; // faint label tint
const GLOW = "#C9D2FF"; // periwinkle glow / selection

// Lightweight scroll-reveal: each wrapped block fades + rises once in view.
// Honors prefers-reduced-motion by skipping the observer and rendering visible.
function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  // Lazy initializer (render-time, client-only): reduced-motion users start
  // visible, so the effect only ever calls setState asynchronously inside the
  // observer callback — never synchronously in the effect body. The CSS
  // prefers-reduced-motion block is the static backstop regardless.
  const [shown, setShown] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    if (shown) return;
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShown(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={ref}
      className={`yav-reveal ${shown ? "yav-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function DreamAuroraIndigo({ content, slug }: DesignProps) {
  const fd = useFakeDoor(slug);
  const { hero, problem, solution, pricing, testimonials, faq, fakedoor, footer } =
    content;

  return (
    <main
      className={`${bricolage.variable} ${geist.variable} font-[family-name:var(--font-body)] relative min-h-screen overflow-hidden antialiased`}
      style={{
        color: INK,
        background:
          "linear-gradient(180deg, #F7F4FF 0%, #F3ECFF 48%, #F7F4FF 100%)",
      }}
    >
      {/* Component-scoped CSS: aurora drift, hero entrance, reveals, CTA physics.
          Everything inside @media (prefers-reduced-motion: reduce) is frozen. */}
      <style>{`
        @keyframes yav-drift-1 {
          0%   { transform: translate3d(-6%, -4%, 0) scale(1); }
          50%  { transform: translate3d(8%, 6%, 0) scale(1.12); }
          100% { transform: translate3d(-6%, -4%, 0) scale(1); }
        }
        @keyframes yav-drift-2 {
          0%   { transform: translate3d(6%, 4%, 0) scale(1.08); }
          50%  { transform: translate3d(-8%, -6%, 0) scale(1); }
          100% { transform: translate3d(6%, 4%, 0) scale(1.08); }
        }
        @keyframes yav-drift-3 {
          0%   { transform: translate3d(0, 0, 0) scale(1); }
          50%  { transform: translate3d(-5%, 7%, 0) scale(1.15); }
          100% { transform: translate3d(0, 0, 0) scale(1); }
        }
        @keyframes yav-rise {
          from { opacity: 0; transform: translateY(22px); filter: blur(6px); }
          to   { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        @keyframes yav-twinkle {
          0%, 100% { opacity: 0.35; }
          50%      { opacity: 0.9; }
        }
        .yav-orb { will-change: transform; }
        .yav-orb-1 { animation: yav-drift-1 22s ease-in-out infinite; }
        .yav-orb-2 { animation: yav-drift-2 28s ease-in-out infinite; }
        .yav-orb-3 { animation: yav-drift-3 25s ease-in-out infinite; }
        .yav-enter > * { opacity: 0; animation: yav-rise 0.9s cubic-bezier(0.16,1,0.3,1) forwards; }
        .yav-enter > *:nth-child(1) { animation-delay: 0.05s; }
        .yav-enter > *:nth-child(2) { animation-delay: 0.18s; }
        .yav-enter > *:nth-child(3) { animation-delay: 0.32s; }
        .yav-enter > *:nth-child(4) { animation-delay: 0.46s; }
        .yav-enter > *:nth-child(5) { animation-delay: 0.6s; }
        .yav-twinkle { animation: yav-twinkle 4.5s ease-in-out infinite; }
        .yav-reveal {
          opacity: 0;
          transform: translateY(26px);
          filter: blur(5px);
          transition: opacity 0.85s cubic-bezier(0.16,1,0.3,1),
                      transform 0.85s cubic-bezier(0.16,1,0.3,1),
                      filter 0.85s cubic-bezier(0.16,1,0.3,1);
        }
        .yav-reveal.yav-in { opacity: 1; transform: translateY(0); filter: blur(0); }
        .yav-cta {
          transition: transform 0.45s cubic-bezier(0.16,1,0.3,1),
                      box-shadow 0.45s cubic-bezier(0.16,1,0.3,1);
        }
        .yav-cta:hover { transform: translateY(-3px) scale(1.015); }
        .yav-cta:active { transform: translateY(0) scale(0.98); }
        .yav-cta .yav-arrow { transition: transform 0.45s cubic-bezier(0.16,1,0.3,1); }
        .yav-cta:hover .yav-arrow { transform: translateX(4px); }
        @media (prefers-reduced-motion: reduce) {
          .yav-orb-1, .yav-orb-2, .yav-orb-3, .yav-twinkle { animation: none !important; }
          .yav-enter > * { opacity: 1 !important; animation: none !important; }
          .yav-reveal { opacity: 1 !important; transform: none !important; filter: none !important; transition: none !important; }
          .yav-cta, .yav-cta .yav-arrow { transition: none !important; }
          .yav-cta:hover, .yav-cta:active { transform: none !important; }
        }
      `}</style>

      {/* ───────── ANIMATED AURORA FIELD ───────── */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div
          className="yav-orb yav-orb-1 absolute -left-40 -top-32 h-[58vh] w-[58vh] rounded-full blur-[90px]"
          style={{
            background:
              "radial-gradient(circle, rgba(143,150,255,0.55) 0%, rgba(214,228,255,0) 70%)",
          }}
        />
        <div
          className="yav-orb yav-orb-2 absolute -right-44 top-[28%] h-[64vh] w-[64vh] rounded-full blur-[100px]"
          style={{
            background:
              "radial-gradient(circle, rgba(201,210,255,0.6) 0%, rgba(243,236,255,0) 70%)",
          }}
        />
        <div
          className="yav-orb yav-orb-3 absolute left-[18%] bottom-[-10%] h-[60vh] w-[60vh] rounded-full blur-[110px]"
          style={{
            background:
              "radial-gradient(circle, rgba(184,178,236,0.5) 0%, rgba(235,230,255,0) 72%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-md px-6 pb-44">
        {/* ───────── NAV ───────── */}
        <header className="flex items-center justify-between pt-7">
          <span
            className="font-[family-name:var(--font-display)] text-[19px] font-semibold tracking-[-0.01em]"
            style={{ color: INK }}
          >
            {hero.brandLockup}
          </span>
          <span
            className="rounded-full px-3.5 py-1.5 text-[10px] uppercase tracking-[0.26em]"
            style={{
              border: "1px solid rgba(90,86,144,0.22)",
              color: SOFT,
              background: "rgba(255,255,255,0.45)",
            }}
          >
            Tenderly kept
          </span>
        </header>

        {/* ───────── HERO (text-led, animated entrance) ───────── */}
        <section className="yav-enter pt-20 text-center">
          <p
            className="text-[11px] uppercase tracking-[0.4em]"
            style={{ color: HALO }}
          >
            <span className="yav-twinkle mr-2 inline-block">✦</span>
            A gift of certainty
          </p>
          <h1
            className="mx-auto mt-7 max-w-[16ch] text-balance font-[family-name:var(--font-display)] text-[44px] font-semibold leading-[1.04] tracking-[-0.025em]"
            style={{ color: INK }}
          >
            {hero.title}
          </h1>
          <p
            className="mx-auto mt-6 max-w-[34ch] text-[16.5px] leading-[1.7]"
            style={{ color: SOFT }}
          >
            {hero.subtitle}
          </p>
          <div>
            <button
              onClick={() => fd.onCta("hero")}
              className="yav-cta mt-10 inline-flex items-center justify-center gap-3 rounded-full px-9 py-4 text-[15px] font-medium"
              style={{
                background: "linear-gradient(135deg, #34307E 0%, #26235A 100%)",
                color: "#F7F4FF",
                boxShadow: "0 26px 55px -24px rgba(38,35,90,0.7)",
              }}
            >
              {hero.ctaLabel}
              <span className="yav-arrow" aria-hidden>
                →
              </span>
            </button>
          </div>
          <p
            className="mx-auto mt-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12.5px]"
            style={{ background: "rgba(255,255,255,0.6)", color: SOFT }}
          >
            <span
              className="yav-twinkle h-1.5 w-1.5 rounded-full"
              style={{ background: "#8A86D8" }}
            />
            {hero.reassuranceLine}
          </p>
        </section>

        {/* ───────── PROBLEM ───────── */}
        <Reveal className="mt-36 text-center">
          <p
            className="mb-6 text-[10px] uppercase tracking-[0.38em]"
            style={{ color: HALO }}
          >
            The quiet problem
          </p>
          <h2
            className="mx-auto max-w-[20ch] text-balance font-[family-name:var(--font-display)] text-[29px] font-semibold leading-[1.16] tracking-[-0.018em]"
            style={{ color: INK }}
          >
            {problem.title}
          </h2>
          <p
            className="mx-auto mt-7 max-w-[35ch] text-[15.5px] leading-[1.75]"
            style={{ color: SOFT }}
          >
            {problem.body}
          </p>
        </Reveal>

        {/* ───────── SOLUTION ───────── */}
        <section className="mt-36">
          <Reveal className="text-center">
            <p
              className="mb-4 text-[10px] uppercase tracking-[0.38em]"
              style={{ color: HALO }}
            >
              {solution.intro}
            </p>
            <p
              className="font-[family-name:var(--font-display)] text-[17px] font-medium italic"
              style={{ color: SOFT }}
            >
              three quiet steps
            </p>
          </Reveal>

          <ol className="mt-12 space-y-7">
            {solution.steps.map((s, i) => (
              <Reveal key={i} delay={i * 90}>
                <li
                  className="rounded-[32px] px-7 py-9"
                  style={{
                    background: "rgba(255,255,255,0.55)",
                    border: "1px solid rgba(255,255,255,0.75)",
                    boxShadow: "0 26px 60px -50px rgba(38,35,90,0.55)",
                  }}
                >
                  <span
                    className="flex h-14 w-14 items-center justify-center rounded-full font-[family-name:var(--font-display)] text-[23px] font-semibold"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(201,210,255,0.85) 0%, rgba(214,228,255,0.6) 100%)",
                      color: INK,
                    }}
                  >
                    {i + 1}
                  </span>
                  <h3
                    className="mt-6 font-[family-name:var(--font-display)] text-[21px] font-semibold leading-[1.28] tracking-[-0.012em]"
                    style={{ color: INK }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="mt-3 text-[14.5px] leading-[1.7]"
                    style={{ color: SOFT }}
                  >
                    {s.body}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </section>

        {/* ───────── PRICING ───────── */}
        <section ref={fd.pricingRef} className="mt-36">
          <Reveal className="text-center">
            <p
              className="mb-5 text-[10px] uppercase tracking-[0.38em]"
              style={{ color: HALO }}
            >
              Membership
            </p>
            <h2
              className="mx-auto max-w-[20ch] text-balance font-[family-name:var(--font-display)] text-[28px] font-semibold leading-[1.18] tracking-[-0.018em]"
              style={{ color: INK }}
            >
              {pricing.title}
            </h2>
            <p
              className="mx-auto mt-5 max-w-[35ch] text-[15px] leading-[1.7]"
              style={{ color: SOFT }}
            >
              {pricing.subtitle}
            </p>
          </Reveal>

          <div className="mt-10 space-y-5">
            {pricing.plans.map((plan, i) => (
              <Reveal key={i} delay={i * 90}>
                {plan.highlight ? (
                  <div
                    className="relative rounded-[32px] px-7 py-9"
                    style={{
                      background:
                        "linear-gradient(155deg, #34307E 0%, #26235A 100%)",
                      color: "#F7F4FF",
                      boxShadow: "0 36px 70px -42px rgba(38,35,90,0.8)",
                    }}
                  >
                    <span
                      className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-[10px] uppercase tracking-[0.2em]"
                      style={{ background: GLOW, color: INK }}
                    >
                      Most chosen
                    </span>
                    <p
                      className="font-[family-name:var(--font-display)] text-[16px] font-medium italic"
                      style={{ color: "#BBC3F4" }}
                    >
                      {plan.name}
                    </p>
                    <p
                      className="mt-2 font-[family-name:var(--font-display)] text-[42px] font-semibold leading-none tracking-[-0.02em]"
                    >
                      {plan.price}
                    </p>
                    <p className="mt-3 text-[13px]" style={{ color: "#BBC3F4" }}>
                      {plan.descriptor}
                    </p>
                    <button
                      onClick={() => fd.onCta(`pricing-${plan.name.toLowerCase()}`)}
                      className="yav-cta mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-4 text-[15px] font-medium"
                      style={{ background: "#F7F4FF", color: INK }}
                    >
                      {plan.ctaLabel}
                      <span className="yav-arrow" aria-hidden>
                        →
                      </span>
                    </button>
                  </div>
                ) : (
                  <div
                    className="relative rounded-[32px] px-7 py-9"
                    style={{
                      background: "rgba(255,255,255,0.55)",
                      border: "1px solid rgba(255,255,255,0.75)",
                      color: INK,
                    }}
                  >
                    <p
                      className="font-[family-name:var(--font-display)] text-[16px] font-medium italic"
                      style={{ color: SOFT }}
                    >
                      {plan.name}
                    </p>
                    <p
                      className="mt-2 font-[family-name:var(--font-display)] text-[42px] font-semibold leading-none tracking-[-0.02em]"
                      style={{ color: INK }}
                    >
                      {plan.price}
                    </p>
                    <p className="mt-3 text-[13px]" style={{ color: SOFT }}>
                      {plan.descriptor}
                    </p>
                    <button
                      onClick={() => fd.onCta(`pricing-${plan.name.toLowerCase()}`)}
                      className="yav-cta mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-4 text-[15px] font-medium"
                      style={{
                        background:
                          "linear-gradient(135deg, #34307E 0%, #26235A 100%)",
                        color: "#F7F4FF",
                      }}
                    >
                      {plan.ctaLabel}
                      <span className="yav-arrow" aria-hidden>
                        →
                      </span>
                    </button>
                  </div>
                )}
              </Reveal>
            ))}
          </div>

          <Reveal
            className="mt-10 rounded-[32px] px-7 py-9"
            delay={120}
          >
            <div
              style={{
                background: "rgba(255,255,255,0.45)",
                border: "1px solid rgba(255,255,255,0.7)",
                borderRadius: 32,
                margin: "-2.25rem -1.75rem",
                padding: "2.25rem 1.75rem",
              }}
            >
              <p
                className="text-center text-[10px] uppercase tracking-[0.34em]"
                style={{ color: HALO }}
              >
                Everything included
              </p>
              <ul className="mt-6 grid grid-cols-1 gap-y-3.5">
                {pricing.included.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-[14.5px]"
                    style={{ color: INK }}
                  >
                    <span
                      className="flex h-5 w-5 flex-none items-center justify-center rounded-full text-[11px]"
                      style={{ background: "rgba(201,210,255,0.8)", color: INK }}
                      aria-hidden
                    >
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <p
            className="mx-auto mt-7 max-w-[35ch] text-center text-[12.5px] leading-[1.65]"
            style={{ color: SOFT }}
          >
            {pricing.scarcityLine}
          </p>
        </section>

        {/* ───────── TESTIMONIALS ───────── */}
        <section className="mt-36">
          <Reveal>
            <p
              className="mb-8 text-center text-[10px] uppercase tracking-[0.38em]"
              style={{ color: HALO }}
            >
              From those who started
            </p>
          </Reveal>
          <div className="space-y-6">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 90}>
                <figure
                  className="rounded-[32px] px-7 py-9"
                  style={{
                    background: "rgba(255,255,255,0.55)",
                    border: "1px solid rgba(255,255,255,0.75)",
                    boxShadow: "0 26px 60px -50px rgba(38,35,90,0.5)",
                  }}
                >
                  <span
                    aria-hidden
                    className="block font-[family-name:var(--font-display)] text-[46px] font-semibold leading-none"
                    style={{ color: "rgba(138,134,216,0.5)" }}
                  >
                    &ldquo;
                  </span>
                  <blockquote
                    className="mt-1 font-[family-name:var(--font-display)] text-[19px] font-medium leading-[1.5] tracking-[-0.008em]"
                    style={{ color: INK }}
                  >
                    {t.quote}
                  </blockquote>
                  <figcaption
                    className="mt-5 text-[12px] uppercase tracking-[0.2em]"
                    style={{ color: SOFT }}
                  >
                    {t.name} · {t.age}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ───────── FAQ ───────── */}
        <section className="mt-36">
          <Reveal>
            <p
              className="mb-8 text-center text-[10px] uppercase tracking-[0.38em]"
              style={{ color: HALO }}
            >
              Questions you might have
            </p>
          </Reveal>
          <div className="space-y-4">
            {faq.map((item, i) => (
              <Reveal key={i} delay={i * 70}>
                <details
                  className="group rounded-[26px] px-7 py-5"
                  style={{
                    background: "rgba(255,255,255,0.5)",
                    border: "1px solid rgba(255,255,255,0.7)",
                  }}
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                    <span
                      className="font-[family-name:var(--font-display)] text-[17px] font-semibold leading-[1.32] tracking-[-0.01em]"
                      style={{ color: INK }}
                    >
                      {item.q}
                    </span>
                    <span
                      className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-full text-[18px] leading-none transition-transform duration-300 group-open:rotate-45"
                      style={{ background: "rgba(214,228,255,0.7)", color: INK }}
                      aria-hidden
                    >
                      +
                    </span>
                  </summary>
                  <p
                    className="mt-4 text-[14px] leading-[1.7]"
                    style={{ color: SOFT }}
                  >
                    {item.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ───────── FINAL CTA ───────── */}
        <Reveal className="mt-36">
          <section
            className="rounded-[36px] px-8 py-16 text-center"
            style={{
              background: "linear-gradient(155deg, #34307E 0%, #26235A 100%)",
              color: "#F7F4FF",
              boxShadow: "0 40px 80px -44px rgba(38,35,90,0.8)",
            }}
          >
            <h2
              className="mx-auto max-w-[16ch] text-balance font-[family-name:var(--font-display)] text-[32px] font-semibold leading-[1.12] tracking-[-0.02em]"
            >
              {content.finalCta.headline}
            </h2>
            <button
              onClick={() => fd.onCta("final")}
              className="yav-cta mt-9 inline-flex items-center justify-center gap-2.5 rounded-full px-9 py-4 text-[15px] font-medium"
              style={{ background: "#F7F4FF", color: INK }}
            >
              {content.finalCta.ctaLabel}
              <span className="yav-arrow" aria-hidden>
                →
              </span>
            </button>
          </section>
        </Reveal>

        {/* ───────── FAKE-DOOR ───────── */}
        {fd.showWaitlist && (
          <section
            id="waitlist"
            className="mt-12 rounded-[36px] px-7 py-11"
            style={{
              background: "rgba(255,255,255,0.62)",
              border: "1px solid rgba(255,255,255,0.75)",
            }}
          >
            {fd.state === "done" ? (
              <div className="text-center">
                <p
                  className="font-[family-name:var(--font-display)] text-[25px] font-semibold leading-tight"
                  style={{ color: INK }}
                >
                  {content.confirmation.title}
                </p>
                <p
                  className="mx-auto mt-4 max-w-[34ch] text-[14.5px] leading-[1.7]"
                  style={{ color: SOFT }}
                >
                  {content.confirmation.body}
                </p>
              </div>
            ) : (
              <>
                <p
                  className="text-center font-[family-name:var(--font-display)] text-[27px] font-semibold italic leading-[1.15] tracking-[-0.015em]"
                  style={{ color: INK }}
                >
                  {fakedoor.title}
                </p>
                <p
                  className="mx-auto mt-4 max-w-[34ch] text-center text-[14.5px] leading-[1.7]"
                  style={{ color: SOFT }}
                >
                  {fakedoor.body}
                </p>
                <form onSubmit={fd.submit} className="mt-7 flex flex-col gap-3">
                  <input
                    type="email"
                    required
                    value={fd.email}
                    onChange={(e) => fd.setEmail(e.target.value)}
                    placeholder={fakedoor.emailPlaceholder}
                    className="w-full rounded-full px-6 py-4 text-[15px] focus:outline-none focus:ring-2"
                    style={{
                      background: "rgba(255,255,255,0.75)",
                      border: "1px solid rgba(90,86,144,0.28)",
                      color: INK,
                    }}
                  />
                  <button
                    type="submit"
                    disabled={fd.state === "loading"}
                    className="yav-cta w-full rounded-full px-6 py-4 text-[15px] font-medium disabled:opacity-60"
                    style={{
                      background:
                        "linear-gradient(135deg, #34307E 0%, #26235A 100%)",
                      color: "#F7F4FF",
                    }}
                  >
                    {fd.state === "loading" ? "…" : fakedoor.submitLabel}
                  </button>
                  {fd.state === "error" && (
                    <p
                      className="text-center text-[13px]"
                      style={{ color: "#7C77C8" }}
                    >
                      Something went wrong. Try again.
                    </p>
                  )}
                </form>
                <p
                  className="mt-5 text-center text-[12px]"
                  style={{ color: SOFT }}
                >
                  {fakedoor.privacyLine}
                </p>
              </>
            )}
          </section>
        )}

        {/* ───────── FOOTER ───────── */}
        <footer className="mt-24 text-center">
          <p
            className="font-[family-name:var(--font-display)] text-[16px] font-medium italic"
            style={{ color: INK }}
          >
            {footer.lines[0]}
          </p>
          <p
            className="mt-4 text-[11px] uppercase tracking-[0.26em]"
            style={{ color: HALO }}
          >
            {footer.lines.slice(1).join("  ·  ")}
          </p>
        </footer>
      </div>

      {/* Sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 px-6 pb-5">
        <button
          onClick={() => fd.onCta("sticky")}
          className="yav-cta mx-auto flex w-full max-w-md items-center justify-center gap-2 rounded-full px-6 py-4 text-[15px] font-medium"
          style={{
            background: "linear-gradient(135deg, #34307E 0%, #26235A 100%)",
            color: "#F7F4FF",
            boxShadow: "0 22px 48px -20px rgba(38,35,90,0.85)",
          }}
        >
          {hero.ctaLabel}
          <span className="yav-arrow" aria-hidden>
            →
          </span>
        </button>
      </div>
    </main>
  );
}
