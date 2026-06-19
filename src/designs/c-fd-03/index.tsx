"use client";

import Image from "next/image";
import { Fraunces, Familjen_Grotesk } from "next/font/google";
import type { DesignProps } from "@/designs/types";
import { useFakeDoor } from "@/designs/shared/useFakeDoor";

// Direction: INTENSE COLOR + MOTION. A deep-forest vault lit by electric lime
// pushed to the top of the family. Fraunces (with a touch of WONK + soft optical
// sizing) carries an offbeat-but-dignified display voice echoing the ad wordmark;
// Familjen Grotesk handles body + mono-tracked labels. Everything is CSS-only:
// staggered scroll-reveals, a slow living glow behind the hero, shimmer across the
// lime, a breathing "release" pulse. Reduced-motion ends every element visible.

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT", "WONK"],
  style: ["normal", "italic"],
  display: "swap",
});

const familjen = Familjen_Grotesk({
  subsets: ["latin"],
  variable: "--font-familjen",
  display: "swap",
});

export default function VaultAliveDesign({ content, slug }: DesignProps) {
  const fd = useFakeDoor(slug);
  const { hero, problem, solution, pricing, testimonials, faq, fakedoor, footer } = content;

  return (
    <main
      className={`${fraunces.variable} ${familjen.variable} font-[family-name:var(--font-familjen)] relative min-h-screen overflow-x-hidden bg-[#11201A] text-[#EFEAD8] antialiased selection:bg-[#C8F169] selection:text-[#0E1A14]`}
    >
      <style>{`
        @keyframes ya-rise {
          from { opacity: 0; transform: translateY(26px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes ya-glow {
          0%, 100% { transform: translate(-50%, 0) scale(1);   opacity: .55; }
          50%      { transform: translate(-50%, -3%) scale(1.12); opacity: .85; }
        }
        @keyframes ya-shimmer {
          0%   { background-position: -160% 0; }
          100% { background-position: 260% 0; }
        }
        @keyframes ya-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(200,241,105,.55); }
          50%      { box-shadow: 0 0 0 10px rgba(200,241,105,0); }
        }
        @keyframes ya-sweep {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        .ya-reveal {
          opacity: 0;
          animation: ya-rise .9s cubic-bezier(.2,.7,.2,1) both;
          animation-timeline: view();
          animation-range: entry 0% cover 32%;
        }
        .ya-shimmer {
          background: linear-gradient(100deg,
            #C8F169 0%, #C8F169 38%, #EBFFB4 50%, #C8F169 62%, #C8F169 100%);
          background-size: 220% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: ya-shimmer 5.5s linear infinite;
        }
        .ya-glow { animation: ya-glow 9s ease-in-out infinite; }
        .ya-pulse { animation: ya-pulse 2.6s ease-out infinite; }
        .ya-sweep { transform-origin: left; animation: ya-sweep 1.1s cubic-bezier(.2,.7,.2,1) both;
          animation-timeline: view(); animation-range: entry 0% cover 28%; }
        @media (prefers-reduced-motion: reduce) {
          .ya-reveal, .ya-sweep { opacity: 1; transform: none; animation: none; }
          .ya-glow, .ya-pulse { animation: none; }
          .ya-shimmer { animation: none; color: #C8F169; -webkit-text-fill-color: #C8F169; }
        }
      `}</style>

      <div className="relative mx-auto max-w-md px-5 pb-40">
        {/* ───────── NAV ───────── */}
        <nav className="flex items-center justify-between pt-6">
          <span
            className="font-[family-name:var(--font-fraunces)] text-[19px] italic text-[#C8F169]"
            style={{ fontVariationSettings: '"opsz" 40, "wght" 600, "SOFT" 40, "WONK" 1' }}
          >
            {hero.brandLockup}
          </span>
          <span className="rounded-full border border-[#C8F169]/30 px-3 py-1 text-[9.5px] font-medium uppercase tracking-[0.26em] text-[#9DB39A]">
            Legacy, kept alive
          </span>
        </nav>

        {/* ───────── HERO ───────── */}
        <header className="relative pt-6">
          <div
            aria-hidden
            className="ya-glow pointer-events-none absolute left-1/2 top-10 -z-0 h-72 w-72 rounded-full bg-[#C8F169] opacity-60 blur-[90px]"
          />
          <div className="relative overflow-hidden rounded-[30px] ring-1 ring-[#C8F169]/15 shadow-[0_40px_90px_-50px_rgba(0,0,0,0.9)]">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/designs/c/hero.jpeg"
                alt=""
                fill
                priority
                sizes="(max-width: 768px) 100vw, 450px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#11201A] via-transparent to-transparent" />
            </div>
          </div>

          <section className="relative z-10 px-1 pt-9">
            <h1 className="ya-reveal text-balance font-[family-name:var(--font-fraunces)] text-[37px] leading-[1.04] tracking-[-0.015em] text-[#EFEAD8]"
              style={{ fontVariationSettings: '"opsz" 90, "wght" 540, "SOFT" 30, "WONK" 0' }}>
              {hero.title}
            </h1>
            <p className="ya-reveal mt-6 max-w-[34ch] text-[16px] leading-[1.65] text-[#9DB39A]"
              style={{ animationDelay: ".08s" }}>
              {hero.subtitle}
            </p>

            <button
              onClick={() => fd.onCta("hero")}
              className="ya-reveal group mt-8 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#C8F169] px-8 py-4 text-[15px] font-semibold text-[#0E1A14] transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-[0_22px_50px_-18px_rgba(200,241,105,0.7)]"
              style={{ animationDelay: ".14s" }}
            >
              {hero.ctaLabel}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>

            <p className="ya-reveal mt-6 flex items-center justify-center gap-2.5 text-[12.5px] tracking-wide text-[#9DB39A]"
              style={{ animationDelay: ".2s" }}>
              <span className="ya-pulse h-2 w-2 rounded-full bg-[#C8F169]" />
              {hero.reassuranceLine}
            </p>
          </section>
        </header>

        {/* ───────── PROBLEM ───────── */}
        <section className="mt-32">
          <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.34em] text-[#C8F169]">
            The quiet problem
          </p>
          <h2 className="ya-reveal text-balance font-[family-name:var(--font-fraunces)] text-[28px] leading-[1.16] tracking-[-0.01em] text-[#EFEAD8]"
            style={{ fontVariationSettings: '"opsz" 60, "wght" 480, "SOFT" 40, "WONK" 0' }}>
            {problem.title}
          </h2>
          <p className="ya-reveal mt-6 max-w-[40ch] text-[15.5px] leading-[1.72] text-[#9DB39A]"
            style={{ animationDelay: ".08s" }}>
            {problem.body}
          </p>
        </section>

        {/* ───────── SOLUTION ───────── */}
        <section className="mt-32">
          <div className="flex items-baseline justify-between">
            <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#C8F169]">
              {solution.intro}
            </p>
            <span className="font-[family-name:var(--font-fraunces)] text-[13px] italic text-[#9DB39A]"
              style={{ fontVariationSettings: '"opsz" 24, "wght" 500, "WONK" 1' }}>
              three steps
            </span>
          </div>

          <ol className="mt-9 space-y-5">
            {solution.steps.map((s, i) => (
              <li
                key={i}
                className="ya-reveal group relative overflow-hidden rounded-[26px] border border-[#EFEAD8]/10 bg-[#16271F] px-6 py-7 transition-colors duration-300 hover:border-[#C8F169]/40"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <span
                  aria-hidden
                  className="absolute -right-2 -top-3 font-[family-name:var(--font-fraunces)] text-[80px] leading-none text-[#C8F169]/10"
                  style={{ fontVariationSettings: '"opsz" 144, "wght" 700' }}
                >
                  {i + 1}
                </span>
                <span className="ya-sweep block h-[2px] w-12 rounded-full bg-[#C8F169]" />
                <h3 className="mt-5 font-[family-name:var(--font-fraunces)] text-[20px] leading-[1.28] tracking-[-0.005em] text-[#EFEAD8]"
                  style={{ fontVariationSettings: '"opsz" 36, "wght" 500, "SOFT" 30' }}>
                  {s.title}
                </h3>
                <p className="mt-3 text-[14.5px] leading-[1.66] text-[#9DB39A]">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* ───────── PRICING ───────── */}
        <section ref={fd.pricingRef} className="mt-32">
          <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.34em] text-[#C8F169]">
            Membership
          </p>
          <h2 className="ya-reveal text-balance font-[family-name:var(--font-fraunces)] text-[27px] leading-[1.16] tracking-[-0.01em] text-[#EFEAD8]"
            style={{ fontVariationSettings: '"opsz" 60, "wght" 480, "SOFT" 40' }}>
            {pricing.title}
          </h2>
          <p className="ya-reveal mt-5 max-w-[40ch] text-[15px] leading-[1.66] text-[#9DB39A]"
            style={{ animationDelay: ".08s" }}>
            {pricing.subtitle}
          </p>

          <div className="mt-9 space-y-5">
            {pricing.plans.map((plan, i) => (
              <div
                key={i}
                className={
                  plan.highlight
                    ? "ya-reveal relative overflow-hidden rounded-[28px] bg-[#C8F169] px-7 py-8 text-[#0E1A14] shadow-[0_30px_70px_-30px_rgba(200,241,105,0.55)]"
                    : "ya-reveal relative rounded-[28px] border border-[#EFEAD8]/12 bg-[#16271F] px-7 py-8 text-[#EFEAD8]"
                }
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                {plan.highlight && (
                  <span className="absolute right-5 top-6 rounded-full bg-[#0E1A14] px-3 py-1 text-[9.5px] font-semibold uppercase tracking-[0.2em] text-[#C8F169]">
                    Most chosen
                  </span>
                )}
                <p className={`font-[family-name:var(--font-fraunces)] text-[15px] italic ${plan.highlight ? "text-[#2c4a1f]" : "text-[#9DB39A]"}`}
                  style={{ fontVariationSettings: '"opsz" 24, "wght" 540, "WONK" 1' }}>
                  {plan.name}
                </p>
                <p className="mt-2 font-[family-name:var(--font-fraunces)] text-[40px] leading-none tracking-[-0.02em]"
                  style={{ fontVariationSettings: '"opsz" 90, "wght" 560, "SOFT" 20' }}>
                  {plan.price}
                </p>
                <p className={`mt-3 text-[13px] ${plan.highlight ? "text-[#2c4a1f]" : "text-[#9DB39A]"}`}>
                  {plan.descriptor}
                </p>
                <button
                  onClick={() => fd.onCta(`pricing-${plan.name.toLowerCase()}`)}
                  className={
                    plan.highlight
                      ? "mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0E1A14] px-7 py-3.5 text-[15px] font-semibold text-[#C8F169] transition hover:bg-[#16271F]"
                      : "mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#C8F169] px-7 py-3.5 text-[15px] font-semibold text-[#0E1A14] transition hover:-translate-y-[1px]"
                  }
                >
                  {plan.ctaLabel}
                  <span>→</span>
                </button>
              </div>
            ))}
          </div>

          <div className="ya-reveal mt-8 rounded-[28px] border border-[#EFEAD8]/10 bg-[#16271F] px-6 py-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C8F169]">
              Everything included
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-y-3.5">
              {pricing.included.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-[14.5px] text-[#EFEAD8]">
                  <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[#C8F169] text-[11px] font-bold text-[#0E1A14]">
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-7 max-w-[40ch] text-[12.5px] leading-[1.6] text-[#9DB39A]">
            {pricing.scarcityLine}
          </p>
        </section>

        {/* ───────── TESTIMONIALS ───────── */}
        <section className="mt-32">
          <p className="mb-8 text-[10px] font-semibold uppercase tracking-[0.34em] text-[#C8F169]">
            From those who started
          </p>
          <div className="space-y-5">
            {testimonials.map((t, i) => (
              <figure
                key={i}
                className="ya-reveal rounded-[26px] border border-[#EFEAD8]/10 bg-[#16271F] px-6 py-7"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <span aria-hidden className="font-[family-name:var(--font-fraunces)] text-[42px] leading-none text-[#C8F169]"
                  style={{ fontVariationSettings: '"opsz" 90, "wght" 600, "WONK" 1' }}>
                  &ldquo;
                </span>
                <blockquote className="mt-1 font-[family-name:var(--font-fraunces)] text-[18.5px] leading-[1.5] tracking-[-0.005em] text-[#EFEAD8]"
                  style={{ fontVariationSettings: '"opsz" 36, "wght" 460, "SOFT" 30' }}>
                  {t.quote}
                </blockquote>
                <figcaption className="mt-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9DB39A]">
                  {t.name} · {t.age}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ───────── FAQ ───────── */}
        <section className="mt-32">
          <p className="mb-8 text-[10px] font-semibold uppercase tracking-[0.34em] text-[#C8F169]">
            Questions you might have
          </p>
          <div className="space-y-3.5">
            {faq.map((item, i) => (
              <details
                key={i}
                className="group rounded-[22px] border border-[#EFEAD8]/10 bg-[#16271F] px-6 py-5 open:border-[#C8F169]/35"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                  <span className="font-[family-name:var(--font-fraunces)] text-[17px] leading-[1.3] tracking-[-0.005em] text-[#EFEAD8]"
                    style={{ fontVariationSettings: '"opsz" 30, "wght" 500' }}>
                    {item.q}
                  </span>
                  <span className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-full bg-[#C8F169]/15 text-[18px] leading-none text-[#C8F169] transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-[14px] leading-[1.66] text-[#9DB39A]">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* ───────── FINAL CTA ───────── */}
        <section className="relative mt-32 overflow-hidden rounded-[32px] border border-[#C8F169]/25 bg-[#16271F] px-8 py-14 text-center">
          <div aria-hidden className="ya-glow pointer-events-none absolute left-1/2 top-0 h-48 w-48 rounded-full bg-[#C8F169] opacity-40 blur-[80px]" />
          <h2 className="relative font-[family-name:var(--font-fraunces)] text-[30px] leading-[1.12] tracking-[-0.01em]"
            style={{ fontVariationSettings: '"opsz" 72, "wght" 520, "SOFT" 40, "WONK" 1' }}>
            <span className="ya-shimmer">{content.finalCta.headline}</span>
          </h2>
          <button
            onClick={() => fd.onCta("final")}
            className="relative mt-9 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#C8F169] px-9 py-4 text-[15px] font-semibold text-[#0E1A14] transition-transform duration-300 hover:-translate-y-[2px]"
          >
            {content.finalCta.ctaLabel}
            <span>→</span>
          </button>
        </section>

        {/* ───────── FAKE-DOOR ───────── */}
        {fd.showWaitlist && (
          <section
            id="waitlist"
            className="mt-12 rounded-[30px] border border-[#C8F169]/25 bg-[#16271F] px-7 py-10"
          >
            {fd.state === "done" ? (
              <div className="text-center">
                <p className="font-[family-name:var(--font-fraunces)] text-[24px] leading-tight text-[#C8F169]"
                  style={{ fontVariationSettings: '"opsz" 48, "wght" 560, "WONK" 1' }}>
                  {content.confirmation.title}
                </p>
                <p className="mx-auto mt-4 max-w-[36ch] text-[14.5px] leading-[1.66] text-[#9DB39A]">
                  {content.confirmation.body}
                </p>
              </div>
            ) : (
              <>
                <p className="text-center font-[family-name:var(--font-fraunces)] text-[26px] italic leading-[1.15] tracking-[-0.01em] text-[#EFEAD8]"
                  style={{ fontVariationSettings: '"opsz" 48, "wght" 540, "SOFT" 30, "WONK" 1' }}>
                  {fakedoor.title}
                </p>
                <p className="mx-auto mt-4 max-w-[36ch] text-center text-[14.5px] leading-[1.66] text-[#9DB39A]">
                  {fakedoor.body}
                </p>
                <form onSubmit={fd.submit} className="mt-7 flex flex-col gap-3">
                  <input
                    type="email"
                    required
                    value={fd.email}
                    onChange={(e) => fd.setEmail(e.target.value)}
                    placeholder={fakedoor.emailPlaceholder}
                    className="w-full rounded-full border border-[#EFEAD8]/20 bg-[#11201A] px-6 py-4 text-[15px] text-[#EFEAD8] placeholder:text-[#9DB39A]/70 focus:border-[#C8F169] focus:outline-none focus:ring-2 focus:ring-[#C8F169]/30"
                  />
                  <button
                    type="submit"
                    disabled={fd.state === "loading"}
                    className="w-full rounded-full bg-[#C8F169] px-6 py-4 text-[15px] font-semibold text-[#0E1A14] transition hover:-translate-y-[1px] disabled:opacity-60"
                  >
                    {fd.state === "loading" ? "..." : fakedoor.submitLabel}
                  </button>
                  {fd.state === "error" && (
                    <p className="text-center text-[13px] text-[#C8F169]">
                      Something went wrong. Try again.
                    </p>
                  )}
                </form>
                <p className="mt-5 text-center text-[12px] text-[#9DB39A]">
                  {fakedoor.privacyLine}
                </p>
              </>
            )}
          </section>
        )}

        {/* ───────── FOOTER ───────── */}
        <footer className="mt-24 text-center">
          <p className="font-[family-name:var(--font-fraunces)] text-[16px] italic text-[#EFEAD8]"
            style={{ fontVariationSettings: '"opsz" 30, "wght" 480, "WONK" 1' }}>
            {footer.lines[0]}
          </p>
          <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.24em] text-[#9DB39A]">
            {footer.lines.slice(1).join("  ·  ")}
          </p>
        </footer>
      </div>

      {/* Sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 px-5 pb-5">
        <div className="mx-auto max-w-md">
          <button
            onClick={() => fd.onCta("sticky")}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-[#C8F169] px-6 py-4 text-[15px] font-semibold text-[#0E1A14] shadow-[0_20px_50px_-18px_rgba(200,241,105,0.75)]"
          >
            {hero.ctaLabel}
            <span>→</span>
          </button>
        </div>
      </div>
    </main>
  );
}
