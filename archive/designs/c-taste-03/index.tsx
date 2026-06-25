"use client";

import { Bricolage_Grotesque, Space_Grotesk } from "next/font/google";
import { useEffect, useRef, useState, type ReactNode } from "react";
import type { DesignProps } from "@/designs/types";
import { useFakeDoor } from "@/designs/shared/useFakeDoor";

// Direction (variant C — "Intense color + motion"):
// Deep forest canvas, electric lime as the SINGLE accent pushed to the top of
// its family, warm cream ink. Bricolage Grotesque (an offbeat, characterful
// variable display) carries the dignified-but-grounded voice; Space Grotesk
// keeps the body clean and slightly mechanical-warm. Motion is high but
// motivated: hero entrance cascade, scroll-reveals that sequence the narrative,
// CTA hover physics. All CSS-only, fully readable/static under reduced-motion.
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

const FOREST = "#16271F";
const LIME = "#C8F169";

// Tiny scroll-reveal primitive: IntersectionObserver toggles a data-attr that
// CSS animates. Under prefers-reduced-motion the CSS rules below short-circuit
// to the resolved (visible) state, so content is fully readable when still.
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

export default function ColorMotionDesign({ content, slug }: DesignProps) {
  const fd = useFakeDoor(slug);
  const { hero, problem, solution, pricing, testimonials, faq, fakedoor, footer } =
    content;

  return (
    <main
      className={`${bricolage.variable} ${space.variable} font-[family-name:var(--font-body)] relative min-h-[100dvh] overflow-x-clip bg-[#16271F] text-[#EFEAD8] antialiased selection:bg-[#C8F169] selection:text-[#16271F]`}
    >
      {/* ── Scoped CSS: keyframes + reveal logic, reduced-motion safe ── */}
      <style>{`
        .reveal {
          opacity: 0;
          transform: translateY(26px);
          filter: blur(6px);
          transition:
            opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.8s cubic-bezier(0.16, 1, 0.3, 1),
            filter 0.8s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform, opacity;
        }
        .reveal[data-reveal="in"] {
          opacity: 1;
          transform: translateY(0);
          filter: blur(0);
        }
        @keyframes ya-rise {
          from { opacity: 0; transform: translateY(34px); filter: blur(8px); }
          to   { opacity: 1; transform: translateY(0);    filter: blur(0); }
        }
        @keyframes ya-draw {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        @keyframes ya-pulse {
          0%, 100% { opacity: 0.55; transform: scale(1); }
          50%      { opacity: 1;    transform: scale(1.35); }
        }
        @keyframes ya-drift {
          0%   { transform: translate3d(0,0,0); }
          50%  { transform: translate3d(0,-3%,0) scale(1.04); }
          100% { transform: translate3d(0,0,0); }
        }
        .ya-stage > * {
          opacity: 0;
          animation: ya-rise 0.9s cubic-bezier(0.16,1,0.3,1) forwards;
        }
        .ya-underline {
          transform-origin: left center;
          animation: ya-draw 0.9s cubic-bezier(0.16,1,0.3,1) 0.5s both;
        }
        .ya-pulse-dot { animation: ya-pulse 2.6s ease-in-out infinite; }
        .ya-orb { animation: ya-drift 16s ease-in-out infinite; }
        .ya-cta {
          transition: transform 0.4s cubic-bezier(0.16,1,0.3,1),
                      box-shadow 0.4s cubic-bezier(0.16,1,0.3,1),
                      background-color 0.3s ease;
        }
        .ya-cta:hover { transform: translateY(-3px); }
        .ya-cta:active { transform: translateY(0) scale(0.98); }
        .ya-cta .ya-arrow { transition: transform 0.4s cubic-bezier(0.16,1,0.3,1); }
        .ya-cta:hover .ya-arrow { transform: translateX(4px); }
        .ya-marquee-track {
          display: inline-flex;
          white-space: nowrap;
          animation: ya-marquee 26s linear infinite;
        }
        @keyframes ya-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .reveal {
            opacity: 1 !important;
            transform: none !important;
            filter: none !important;
            transition: none !important;
          }
          .ya-stage > *,
          .ya-underline { animation: none !important; opacity: 1 !important; transform: none !important; }
          .ya-pulse-dot, .ya-orb, .ya-marquee-track { animation: none !important; }
          .ya-cta, .ya-cta:hover { transform: none !important; }
        }
      `}</style>

      {/* ── Ambient lime orb (atmosphere, single accent) ── */}
      <div
        aria-hidden
        className="ya-orb pointer-events-none absolute -top-24 left-1/2 -z-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full opacity-[0.16] blur-[90px]"
        style={{ backgroundColor: LIME }}
      />

      <div className="relative z-10 mx-auto max-w-md px-6 pb-40">
        {/* ───────── NAV ───────── */}
        <header className="flex items-center justify-between pt-7">
          <span className="font-[family-name:var(--font-display)] text-[19px] font-semibold tracking-[-0.01em] text-[#EFEAD8]">
            {hero.brandLockup}
          </span>
          <span className="flex items-center gap-2 rounded-full border border-[#EFEAD8]/15 px-3.5 py-1.5 text-[10px] uppercase tracking-[0.24em] text-[#EFEAD8]/65">
            <span
              className="ya-pulse-dot h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: LIME }}
            />
            Kept for later
          </span>
        </header>

        {/* ───────── HERO ───────── */}
        <section className="ya-stage pt-16">
          <p
            className="text-[11px] font-medium uppercase tracking-[0.34em] text-[#C8F169]"
            style={{ animationDelay: "0.05s" }}
          >
            Plan now, delivered when it matters
          </p>

          <h1
            className="mt-6 font-[family-name:var(--font-display)] text-[44px] font-semibold leading-[1.02] tracking-[-0.025em] text-[#EFEAD8]"
            style={{ animationDelay: "0.18s" }}
          >
            {hero.title}
          </h1>

          <div
            className="ya-underline mt-5 h-[3px] w-28 rounded-full"
            style={{ backgroundColor: LIME }}
            aria-hidden
          />

          <p
            className="mt-7 max-w-[34ch] text-[16px] leading-[1.65] text-[#EFEAD8]/75"
            style={{ animationDelay: "0.32s" }}
          >
            {hero.subtitle}
          </p>

          <button
            onClick={() => fd.onCta("hero")}
            className="ya-cta group mt-9 inline-flex items-center gap-3 rounded-full px-3 py-3 pl-7 text-[15.5px] font-semibold text-[#16271F] shadow-[0_18px_50px_-20px_rgba(200,241,105,0.7)]"
            style={{ backgroundColor: LIME, animationDelay: "0.46s" }}
          >
            {hero.ctaLabel}
            <span className="ya-arrow flex h-9 w-9 items-center justify-center rounded-full bg-[#16271F] text-[15px] text-[#C8F169]">
              →
            </span>
          </button>

          <p
            className="mt-7 inline-flex items-center gap-2.5 text-[12.5px] text-[#EFEAD8]/60"
            style={{ animationDelay: "0.6s" }}
          >
            <span
              className="ya-pulse-dot h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: LIME }}
            />
            {hero.reassuranceLine}
          </p>
        </section>

        {/* ───────── PROBLEM ───────── */}
        <Reveal as="section" className="mt-32">
          <h2 className="font-[family-name:var(--font-display)] text-[29px] font-semibold leading-[1.14] tracking-[-0.015em] text-[#EFEAD8]">
            {problem.title}
          </h2>
          <p className="mt-7 max-w-[36ch] text-[15.5px] leading-[1.72] text-[#EFEAD8]/70">
            {problem.body}
          </p>
        </Reveal>

        {/* ───────── SOLUTION ───────── */}
        <section className="mt-32">
          <Reveal>
            <h2 className="font-[family-name:var(--font-display)] text-[26px] font-semibold tracking-[-0.01em] text-[#EFEAD8]">
              {solution.intro}
            </h2>
          </Reveal>

          <ol className="mt-12 space-y-5">
            {solution.steps.map((s, i) => (
              <Reveal as="li" key={i} delay={i * 90}>
                <div className="relative overflow-hidden rounded-[28px] border border-[#EFEAD8]/10 bg-[#1d3328] p-7">
                  <span
                    className="font-[family-name:var(--font-display)] text-[40px] font-semibold leading-none tracking-[-0.02em]"
                    style={{ color: LIME }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 font-[family-name:var(--font-display)] text-[19px] font-semibold leading-[1.28] tracking-[-0.005em] text-[#EFEAD8]">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-[1.68] text-[#EFEAD8]/70">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </section>

        {/* ───────── PRICING ───────── */}
        <section ref={fd.pricingRef} className="mt-32">
          <Reveal>
            <h2 className="font-[family-name:var(--font-display)] text-[27px] font-semibold leading-[1.14] tracking-[-0.015em] text-[#EFEAD8]">
              {pricing.title}
            </h2>
            <p className="mt-5 max-w-[36ch] text-[15px] leading-[1.68] text-[#EFEAD8]/70">
              {pricing.subtitle}
            </p>
          </Reveal>

          <div className="mt-10 space-y-5">
            {pricing.plans.map((plan, i) => (
              <Reveal key={i} delay={i * 90}>
                <div
                  className={
                    plan.highlight
                      ? "relative rounded-[28px] p-7"
                      : "relative rounded-[28px] border border-[#EFEAD8]/12 bg-[#1d3328] p-7"
                  }
                  style={
                    plan.highlight
                      ? { backgroundColor: LIME, color: FOREST }
                      : undefined
                  }
                >
                  {plan.highlight && (
                    <span className="absolute right-6 top-7 rounded-full bg-[#16271F] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#C8F169]">
                      Most chosen
                    </span>
                  )}
                  <p
                    className="text-[13px] font-medium uppercase tracking-[0.18em]"
                    style={{
                      color: plan.highlight ? "#16271F" : "rgba(239,234,216,0.55)",
                    }}
                  >
                    {plan.name}
                  </p>
                  <p className="mt-3 font-[family-name:var(--font-display)] text-[36px] font-semibold leading-none tracking-[-0.02em]">
                    {plan.price}
                  </p>
                  <p
                    className="mt-3 text-[13px]"
                    style={{
                      color: plan.highlight
                        ? "rgba(22,39,31,0.7)"
                        : "rgba(239,234,216,0.6)",
                    }}
                  >
                    {plan.descriptor}
                  </p>
                  <button
                    onClick={() => fd.onCta(`pricing-${plan.name.toLowerCase()}`)}
                    className={
                      plan.highlight
                        ? "ya-cta group mt-7 flex w-full items-center justify-center gap-2.5 rounded-full bg-[#16271F] px-7 py-3.5 text-[15px] font-semibold text-[#C8F169]"
                        : "ya-cta group mt-7 flex w-full items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-[15px] font-semibold text-[#16271F]"
                    }
                    style={plan.highlight ? undefined : { backgroundColor: LIME }}
                  >
                    {plan.ctaLabel}
                    <span className="ya-arrow">→</span>
                  </button>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Included list — two-column to avoid a long flat list */}
          <Reveal className="mt-8 rounded-[28px] border border-[#EFEAD8]/10 bg-[#1d3328] p-7">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#EFEAD8]/50">
              Everything included
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3.5">
              {pricing.included.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-[13.5px] leading-[1.35] text-[#EFEAD8]/85"
                >
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
          </Reveal>

          <Reveal className="mt-6">
            <p className="max-w-[36ch] text-[12.5px] leading-[1.6] text-[#EFEAD8]/55">
              {pricing.scarcityLine}
            </p>
          </Reveal>
        </section>

        {/* ───────── TESTIMONIALS ───────── */}
        <section className="mt-32">
          <div className="space-y-5">
            {testimonials.map((t, i) => (
              <Reveal as="figure" key={i} delay={i * 80}>
                <figure className="rounded-[28px] border border-[#EFEAD8]/10 bg-[#1d3328] p-7">
                  <span
                    aria-hidden
                    className="block font-[family-name:var(--font-display)] text-[46px] font-semibold leading-[0.6]"
                    style={{ color: LIME }}
                  >
                    &ldquo;
                  </span>
                  <blockquote className="mt-3 text-[16.5px] leading-[1.55] text-[#EFEAD8]/90">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-5 text-[12px] uppercase tracking-[0.18em] text-[#EFEAD8]/55">
                    {t.name} · {t.age}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ───────── FAQ ───────── */}
        <section className="mt-32">
          <Reveal>
            <h2 className="font-[family-name:var(--font-display)] text-[26px] font-semibold tracking-[-0.01em] text-[#EFEAD8]">
              Questions you might have
            </h2>
          </Reveal>
          <div className="mt-9 space-y-4">
            {faq.map((item, i) => (
              <Reveal key={i} delay={i * 70}>
                <details className="group rounded-[24px] border border-[#EFEAD8]/10 bg-[#1d3328] px-6 py-5 open:border-[#C8F169]/30">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                    <span className="font-[family-name:var(--font-display)] text-[16.5px] font-medium leading-[1.32] tracking-[-0.005em] text-[#EFEAD8]">
                      {item.q}
                    </span>
                    <span
                      className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-full text-[18px] leading-none transition-transform duration-300 group-open:rotate-45"
                      style={{ backgroundColor: LIME, color: FOREST }}
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-[14px] leading-[1.68] text-[#EFEAD8]/72">
                    {item.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ───────── FINAL CTA ───────── */}
        <Reveal className="mt-32">
          <section
            className="relative overflow-hidden rounded-[36px] p-9 text-center"
            style={{ backgroundColor: LIME }}
          >
            {/* single marquee — quiet brand whisper, not filler */}
            <div
              className="pointer-events-none absolute inset-x-0 top-5 overflow-hidden opacity-[0.14]"
              aria-hidden
            >
              <div className="ya-marquee-track font-[family-name:var(--font-display)] text-[30px] font-semibold uppercase tracking-[-0.01em] text-[#16271F]">
                <span className="px-4">Leave them ready · Leave them ready · </span>
                <span className="px-4">Leave them ready · Leave them ready · </span>
              </div>
            </div>
            <h2 className="relative font-[family-name:var(--font-display)] text-[32px] font-semibold leading-[1.08] tracking-[-0.02em] text-[#16271F]">
              {content.finalCta.headline}
            </h2>
            <button
              onClick={() => fd.onCta("final")}
              className="ya-cta group relative mt-8 inline-flex items-center gap-3 rounded-full bg-[#16271F] px-3 py-3 pl-7 text-[15.5px] font-semibold text-[#C8F169]"
            >
              {content.finalCta.ctaLabel}
              <span className="ya-arrow flex h-9 w-9 items-center justify-center rounded-full bg-[#C8F169] text-[15px] text-[#16271F]">
                →
              </span>
            </button>
          </section>
        </Reveal>

        {/* ───────── FAKE-DOOR ───────── */}
        {fd.showWaitlist && (
          <section
            id="waitlist"
            className="mt-12 rounded-[36px] border border-[#EFEAD8]/12 bg-[#1d3328] p-8"
          >
            {fd.state === "done" ? (
              <div className="text-center">
                <p className="font-[family-name:var(--font-display)] text-[25px] font-semibold leading-tight text-[#EFEAD8]">
                  {content.confirmation.title}
                </p>
                <p className="mx-auto mt-4 max-w-[34ch] text-[14.5px] leading-[1.68] text-[#EFEAD8]/70">
                  {content.confirmation.body}
                </p>
              </div>
            ) : (
              <>
                <p className="text-center font-[family-name:var(--font-display)] text-[26px] font-semibold leading-[1.12] tracking-[-0.01em] text-[#EFEAD8]">
                  {fakedoor.title}
                </p>
                <p className="mx-auto mt-4 max-w-[34ch] text-center text-[14.5px] leading-[1.68] text-[#EFEAD8]/70">
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
                    className="w-full rounded-full border border-[#EFEAD8]/20 bg-[#16271F] px-6 py-4 text-[15px] text-[#EFEAD8] placeholder:text-[#EFEAD8]/45 focus:border-[#C8F169] focus:outline-none"
                  />
                  <button
                    type="submit"
                    disabled={fd.state === "loading"}
                    className="ya-cta w-full rounded-full px-6 py-4 text-[15px] font-semibold text-[#16271F] disabled:opacity-60"
                    style={{ backgroundColor: LIME }}
                  >
                    {fd.state === "loading" ? "Reserving…" : fakedoor.submitLabel}
                  </button>
                  {fd.state === "error" && (
                    <p className="text-center text-[13px] text-[#C8F169]">
                      Something went wrong. Try again.
                    </p>
                  )}
                </form>
                <p className="mt-5 text-center text-[12px] text-[#EFEAD8]/55">
                  {fakedoor.privacyLine}
                </p>
              </>
            )}
          </section>
        )}

        {/* ───────── FOOTER ───────── */}
        <footer className="mt-24 border-t border-[#EFEAD8]/10 pt-8">
          <p className="font-[family-name:var(--font-display)] text-[16px] font-medium text-[#EFEAD8]">
            {footer.lines[0]}
          </p>
          <p className="mt-4 text-[11px] uppercase tracking-[0.22em] text-[#EFEAD8]/45">
            {footer.lines.slice(1).join("   ·   ")}
          </p>
        </footer>
      </div>

      {/* Sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 px-6 pb-5">
        <button
          onClick={() => fd.onCta("sticky")}
          className="ya-cta group mx-auto flex w-full max-w-md items-center justify-center gap-2.5 rounded-full px-6 py-4 text-[15px] font-semibold text-[#16271F] shadow-[0_18px_44px_-16px_rgba(200,241,105,0.65)]"
          style={{ backgroundColor: LIME }}
        >
          {hero.ctaLabel}
          <span className="ya-arrow">→</span>
        </button>
      </div>
    </main>
  );
}
