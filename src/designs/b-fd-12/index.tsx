"use client";

import { Fraunces, DM_Sans } from "next/font/google";
import type { DesignProps } from "@/designs/types";
import { useFakeDoor } from "@/designs/shared/useFakeDoor";

// Direction: AXIS 05 — TYPO-DRIVEN.
// Fraunces (variable optical-size serif, softly whimsical) at radical scale
// dominates the hero — the brand name set at ~120px bleeds as pure atmosphere.
// DM Sans for all body copy: warm, legible, zero pretension.
// Palette: white ground with layered periwinkle/lavender radial halos (echoing
// the moodboard gradient field) + ink #26235A for type. CSS grain overlay adds
// tactile depth without any image asset.

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT", "WONK"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  display: "swap",
});

export default function BFd12({ content, slug }: DesignProps) {
  const fd = useFakeDoor(slug);
  const { hero, problem, solution, pricing, testimonials, faq, fakedoor, footer } = content;

  return (
    <div className={`${fraunces.variable} ${dmSans.variable}`}>
      {/* SVG grain filter — referenced by CSS filter: url(#grain) */}
      <svg width="0" height="0" className="absolute" aria-hidden>
        <filter id="grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.72"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
          <feBlend in="SourceGraphic" mode="multiply" />
        </filter>
      </svg>

      <main
        className="font-[family-name:var(--font-dm)] relative min-h-screen text-[#26235A] antialiased"
        style={{
          background:
            "radial-gradient(ellipse 120% 60% at 15% 0%, #D6E4FF 0%, transparent 60%)," +
            "radial-gradient(ellipse 100% 50% at 90% 10%, #EBE6FF 0%, transparent 55%)," +
            "radial-gradient(ellipse 80% 40% at 50% 100%, #F3ECFF 0%, transparent 65%)," +
            "#F7F4FF",
        }}
      >
        {/* Grain overlay */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-0 opacity-[0.035]"
          style={{ filter: "url(#grain)", mixBlendMode: "multiply" }}
        />

        <div className="relative z-10 mx-auto max-w-md px-5 pb-32">

          {/* ─────────────────── HERO ─────────────────── */}
          <header className="pt-8">

            {/* Nav row */}
            <div className="flex items-center justify-between">
              <span
                className="font-[family-name:var(--font-fraunces)] text-[13px] italic text-[#5A5690]"
                style={{ fontVariationSettings: '"opsz" 12, "SOFT" 80, "WONK" 0' }}
              >
                {hero.brandLockup}
              </span>
              <span className="rounded-full border border-[#5A5690]/20 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-[#5A5690]">
                Early access
              </span>
            </div>

            {/* Giant display brand name — the visual IS the type */}
            <div className="mt-10 -mx-5 overflow-hidden px-4">
              <p
                aria-hidden
                className="font-[family-name:var(--font-fraunces)] select-none leading-[0.88] text-[#EBE6FF] tracking-[-0.03em]"
                style={{
                  fontSize: "clamp(96px, 28vw, 120px)",
                  fontVariationSettings: '"opsz" 144, "SOFT" 100, "WONK" 0',
                  textShadow: "0 2px 40px rgba(90,86,144,0.18)",
                }}
              >
                You<br />Alive?
              </p>
            </div>

            {/* Headline — sits on top of the faded display, slightly overlapping */}
            <div className="-mt-4 px-1">
              <h1
                className="font-[family-name:var(--font-fraunces)] text-[34px] leading-[1.08] tracking-[-0.02em] text-[#26235A]"
                style={{ fontVariationSettings: '"opsz" 72, "SOFT" 40, "WONK" 0' }}
              >
                {hero.title}
              </h1>
              <p className="mt-5 text-[16px] leading-[1.65] text-[#5A5690] max-w-[34ch]">
                {hero.subtitle}
              </p>

              <button
                onClick={() => fd.onCta("hero")}
                className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-[#26235A] px-8 py-4 text-[15px] font-medium text-[#F7F4FF] transition-all duration-300 hover:bg-[#3a3780] hover:shadow-[0_20px_40px_-16px_rgba(38,35,90,0.55)]"
              >
                {hero.ctaLabel}
                <span className="text-[#D6E4FF]">→</span>
              </button>

              <p className="mt-5 flex items-center gap-2 text-[12.5px] text-[#5A5690]">
                <span
                  className="inline-block h-1.5 w-1.5 rounded-full"
                  style={{ background: "#D6E4FF", boxShadow: "0 0 6px 2px #D6E4FF" }}
                />
                {hero.reassuranceLine}
              </p>
            </div>
          </header>

          {/* ─────────────────── PROBLEM ─────────────────── */}
          <section className="mt-28">
            <div
              className="rounded-[32px] px-7 py-10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(235,230,255,0.7) 0%, rgba(246,243,255,0.9) 100%)",
                border: "1px solid rgba(90,86,144,0.12)",
              }}
            >
              <p className="text-[10px] uppercase tracking-[0.32em] text-[#5A5690] mb-5">
                The quiet problem
              </p>
              <h2
                className="font-[family-name:var(--font-fraunces)] text-[26px] leading-[1.15] tracking-[-0.015em] text-[#26235A]"
                style={{ fontVariationSettings: '"opsz" 48, "SOFT" 30, "WONK" 0' }}
              >
                {problem.title}
              </h2>
              <p className="mt-5 text-[15px] leading-[1.7] text-[#5A5690]">
                {problem.body}
              </p>
            </div>
          </section>

          {/* ─────────────────── SOLUTION ─────────────────── */}
          <section className="mt-28">
            <div className="text-center mb-12">
              <p className="text-[10px] uppercase tracking-[0.32em] text-[#5A5690] mb-3">
                {solution.intro}
              </p>
              <p
                className="font-[family-name:var(--font-fraunces)] text-[17px] italic text-[#5A5690]"
                style={{ fontVariationSettings: '"opsz" 24, "SOFT" 80, "WONK" 0' }}
              >
                three quiet steps
              </p>
            </div>

            <ol className="space-y-5">
              {solution.steps.map((s, i) => (
                <li
                  key={i}
                  className="relative rounded-[28px] px-7 py-8 overflow-hidden"
                  style={{
                    background: "rgba(247,244,255,0.85)",
                    border: "1px solid rgba(90,86,144,0.1)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  {/* Big faded step number — typo as texture */}
                  <span
                    aria-hidden
                    className="absolute -right-2 -top-3 font-[family-name:var(--font-fraunces)] leading-none text-[#EBE6FF] select-none pointer-events-none"
                    style={{
                      fontSize: "88px",
                      fontVariationSettings: '"opsz" 144, "SOFT" 100, "WONK" 0',
                    }}
                  >
                    {i + 1}
                  </span>
                  <span
                    className="relative inline-flex h-8 w-8 items-center justify-center rounded-full text-[13px] font-semibold text-[#F7F4FF]"
                    style={{ background: "#5A5690" }}
                  >
                    {i + 1}
                  </span>
                  <h3
                    className="relative mt-5 font-[family-name:var(--font-fraunces)] text-[20px] leading-[1.22] tracking-[-0.01em] text-[#26235A]"
                    style={{ fontVariationSettings: '"opsz" 36, "SOFT" 30, "WONK" 0' }}
                  >
                    {s.title}
                  </h3>
                  <p className="relative mt-3 text-[14.5px] leading-[1.68] text-[#5A5690]">
                    {s.body}
                  </p>
                </li>
              ))}
            </ol>
          </section>

          {/* ─────────────────── TESTIMONIALS ─────────────────── */}
          <section className="mt-28">
            <p className="text-center text-[10px] uppercase tracking-[0.32em] text-[#5A5690] mb-10">
              From those who started
            </p>

            <div className="space-y-5">
              {testimonials.map((t, i) => (
                <figure
                  key={i}
                  className="rounded-[28px] px-7 py-8"
                  style={{
                    background:
                      i % 2 === 0
                        ? "linear-gradient(135deg, rgba(214,228,255,0.5) 0%, rgba(247,244,255,0.9) 100%)"
                        : "linear-gradient(135deg, rgba(235,230,255,0.5) 0%, rgba(247,244,255,0.9) 100%)",
                    border: "1px solid rgba(90,86,144,0.1)",
                  }}
                >
                  <span
                    aria-hidden
                    className="block font-[family-name:var(--font-fraunces)] text-[52px] leading-none text-[#D6E4FF] mb-1 select-none"
                    style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100, "WONK" 0' }}
                  >
                    &ldquo;
                  </span>
                  <blockquote
                    className="font-[family-name:var(--font-fraunces)] text-[18px] leading-[1.5] tracking-[-0.005em] text-[#26235A]"
                    style={{ fontVariationSettings: '"opsz" 36, "SOFT" 30, "WONK" 0' }}
                  >
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-5 text-[11px] uppercase tracking-[0.2em] text-[#5A5690]">
                    {t.name} · {t.age}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          {/* ─────────────────── PRICING ─────────────────── */}
          <section
            ref={fd.pricingRef as React.RefObject<HTMLElement>}
            className="mt-28"
          >
            <div className="text-center mb-10">
              <p className="text-[10px] uppercase tracking-[0.32em] text-[#5A5690] mb-4">
                Membership
              </p>
              <h2
                className="font-[family-name:var(--font-fraunces)] text-[28px] leading-[1.12] tracking-[-0.015em] text-[#26235A] mx-auto max-w-[20ch] text-balance"
                style={{ fontVariationSettings: '"opsz" 48, "SOFT" 30, "WONK" 0' }}
              >
                {pricing.title}
              </h2>
              <p className="mt-4 text-[15px] leading-[1.65] text-[#5A5690] max-w-[34ch] mx-auto">
                {pricing.subtitle}
              </p>
            </div>

            <div className="space-y-4">
              {pricing.plans.map((plan, i) => (
                <div
                  key={i}
                  className="relative rounded-[28px] px-7 py-8"
                  style={
                    plan.highlight
                      ? {
                          background: "#26235A",
                          boxShadow: "0 24px 56px -24px rgba(38,35,90,0.65)",
                        }
                      : {
                          background: "rgba(247,244,255,0.85)",
                          border: "1px solid rgba(90,86,144,0.12)",
                        }
                  }
                >
                  {plan.highlight && (
                    <span
                      className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-[10px] uppercase tracking-[0.18em] text-[#26235A]"
                      style={{ background: "#D6E4FF" }}
                    >
                      Best value
                    </span>
                  )}
                  <p
                    className="font-[family-name:var(--font-fraunces)] text-[13px] italic mb-2"
                    style={{
                      color: plan.highlight ? "#D6E4FF" : "#5A5690",
                      fontVariationSettings: '"opsz" 16, "SOFT" 80, "WONK" 0',
                    }}
                  >
                    {plan.name}
                  </p>
                  <p
                    className="font-[family-name:var(--font-fraunces)] text-[44px] leading-none tracking-[-0.02em]"
                    style={{
                      color: plan.highlight ? "#F7F4FF" : "#26235A",
                      fontVariationSettings: '"opsz" 72, "SOFT" 20, "WONK" 0',
                    }}
                  >
                    {plan.price}
                  </p>
                  <p
                    className="mt-2 text-[13px]"
                    style={{ color: plan.highlight ? "#9C99CC" : "#5A5690" }}
                  >
                    {plan.descriptor}
                  </p>
                  <button
                    onClick={() => fd.onCta(`pricing-${plan.name.toLowerCase()}`)}
                    className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-[15px] font-medium transition-all duration-200"
                    style={
                      plan.highlight
                        ? {
                            background: "#EBE6FF",
                            color: "#26235A",
                          }
                        : {
                            background: "#26235A",
                            color: "#F7F4FF",
                          }
                    }
                  >
                    {plan.ctaLabel}
                    <span>→</span>
                  </button>
                </div>
              ))}
            </div>

            {/* Included features */}
            <div
              className="mt-6 rounded-[28px] px-7 py-8"
              style={{
                background: "rgba(235,230,255,0.4)",
                border: "1px solid rgba(90,86,144,0.1)",
              }}
            >
              <p className="text-center text-[10px] uppercase tracking-[0.3em] text-[#5A5690] mb-6">
                Everything included
              </p>
              <ul className="grid grid-cols-1 gap-3">
                {pricing.included.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-[14px] text-[#26235A]">
                    <span
                      className="flex h-5 w-5 flex-none items-center justify-center rounded-full text-[10px] text-[#F7F4FF]"
                      style={{ background: "#5A5690" }}
                    >
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-6 text-center text-[12.5px] leading-[1.6] text-[#5A5690]">
              {pricing.scarcityLine}
            </p>
          </section>

          {/* ─────────────────── FAQ ─────────────────── */}
          <section className="mt-28">
            <p className="text-center text-[10px] uppercase tracking-[0.32em] text-[#5A5690] mb-8">
              Questions you might have
            </p>
            <div className="space-y-3">
              {faq.map((item, i) => (
                <details
                  key={i}
                  className="group rounded-[24px] px-6 py-5 open:pb-6"
                  style={{
                    background: "rgba(247,244,255,0.85)",
                    border: "1px solid rgba(90,86,144,0.1)",
                  }}
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                    <span
                      className="font-[family-name:var(--font-fraunces)] text-[17px] leading-[1.3] tracking-[-0.005em] text-[#26235A]"
                      style={{ fontVariationSettings: '"opsz" 36, "SOFT" 30, "WONK" 0' }}
                    >
                      {item.q}
                    </span>
                    <span
                      className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-full text-[18px] leading-none transition-transform duration-300 group-open:rotate-45"
                      style={{ background: "#EBE6FF", color: "#26235A" }}
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-[14px] leading-[1.68] text-[#5A5690]">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </section>

          {/* ─────────────────── FINAL CTA ─────────────────── */}
          <section
            className="mt-28 rounded-[32px] px-8 py-14 text-center"
            style={{
              background: "#26235A",
              boxShadow: "0 28px 64px -28px rgba(38,35,90,0.6)",
            }}
          >
            {/* Oversized display type behind the headline */}
            <p
              aria-hidden
              className="font-[family-name:var(--font-fraunces)] leading-none text-[#3a3778] select-none pointer-events-none mb-[-0.6em]"
              style={{
                fontSize: "clamp(60px, 18vw, 80px)",
                fontVariationSettings: '"opsz" 144, "SOFT" 100, "WONK" 0',
              }}
            >
              ?
            </p>
            <h2
              className="relative font-[family-name:var(--font-fraunces)] text-[30px] leading-[1.12] tracking-[-0.015em] text-[#F7F4FF] mx-auto max-w-[16ch] text-balance"
              style={{ fontVariationSettings: '"opsz" 72, "SOFT" 40, "WONK" 0' }}
            >
              {content.finalCta.headline}
            </h2>
            <button
              onClick={() => fd.onCta("final")}
              className="relative mt-9 inline-flex items-center justify-center gap-2.5 rounded-full px-9 py-4 text-[15px] font-medium transition-all duration-200 hover:opacity-90"
              style={{ background: "#EBE6FF", color: "#26235A" }}
            >
              {content.finalCta.ctaLabel}
              <span>→</span>
            </button>
          </section>

          {/* ─────────────────── FAKE-DOOR ─────────────────── */}
          {fd.showWaitlist && (
            <section
              id="waitlist"
              className="mt-10 rounded-[32px] px-7 py-10"
              style={{
                background:
                  "linear-gradient(135deg, rgba(235,230,255,0.85) 0%, rgba(247,244,255,0.95) 100%)",
                border: "1px solid rgba(90,86,144,0.14)",
              }}
            >
              {fd.state === "done" ? (
                <div className="text-center">
                  <p
                    className="font-[family-name:var(--font-fraunces)] text-[26px] leading-tight text-[#26235A]"
                    style={{ fontVariationSettings: '"opsz" 48, "SOFT" 40, "WONK" 0' }}
                  >
                    {content.confirmation.title}
                  </p>
                  <p className="mx-auto mt-4 max-w-[34ch] text-[14.5px] leading-[1.65] text-[#5A5690]">
                    {content.confirmation.body}
                  </p>
                </div>
              ) : (
                <>
                  <p
                    className="text-center font-[family-name:var(--font-fraunces)] text-[28px] italic leading-[1.1] tracking-[-0.015em] text-[#26235A]"
                    style={{ fontVariationSettings: '"opsz" 48, "SOFT" 80, "WONK" 0' }}
                  >
                    {fakedoor.title}
                  </p>
                  <p className="mx-auto mt-4 max-w-[34ch] text-center text-[14.5px] leading-[1.65] text-[#5A5690]">
                    {fakedoor.body}
                  </p>
                  <form onSubmit={fd.submit} className="mt-8 flex flex-col gap-3">
                    <input
                      type="email"
                      required
                      value={fd.email}
                      onChange={(e) => fd.setEmail(e.target.value)}
                      placeholder={fakedoor.emailPlaceholder}
                      className="w-full rounded-full border px-6 py-4 text-[15px] text-[#26235A] placeholder:text-[#9C99CC] focus:outline-none"
                      style={{
                        background: "rgba(247,244,255,0.9)",
                        borderColor: "rgba(90,86,144,0.2)",
                      }}
                    />
                    <button
                      type="submit"
                      disabled={fd.state === "loading"}
                      className="w-full rounded-full py-4 text-[15px] font-medium text-[#F7F4FF] disabled:opacity-60 transition-opacity"
                      style={{ background: "#26235A" }}
                    >
                      {fd.state === "loading" ? "…" : fakedoor.submitLabel}
                    </button>
                    {fd.state === "error" && (
                      <p className="text-center text-[13px] text-[#5A5690]">
                        Something went wrong. Please try again.
                      </p>
                    )}
                  </form>
                  <p className="mt-5 text-center text-[12px] text-[#9C99CC]">
                    {fakedoor.privacyLine}
                  </p>
                </>
              )}
            </section>
          )}

          {/* ─────────────────── FOOTER ─────────────────── */}
          <footer className="mt-24 text-center">
            <p
              className="font-[family-name:var(--font-fraunces)] text-[15px] italic text-[#5A5690]"
              style={{ fontVariationSettings: '"opsz" 24, "SOFT" 60, "WONK" 0' }}
            >
              {footer.lines[0]}
            </p>
            <p className="mt-4 text-[11px] uppercase tracking-[0.22em] text-[#9C99CC]">
              {footer.lines.slice(1).join("  ·  ")}
            </p>
          </footer>
        </div>

        {/* ─────────────────── STICKY CTA ─────────────────── */}
        <div className="fixed inset-x-0 bottom-0 z-40 px-5 pb-5">
          <button
            onClick={() => fd.onCta("sticky")}
            className="mx-auto flex w-full max-w-md items-center justify-center gap-2 rounded-full py-4 text-[15px] font-medium text-[#F7F4FF] transition-all duration-200 hover:opacity-90"
            style={{
              background: "#26235A",
              boxShadow: "0 16px 40px -12px rgba(38,35,90,0.75)",
            }}
          >
            {hero.ctaLabel}
            <span className="text-[#D6E4FF]">→</span>
          </button>
        </div>
      </main>
    </div>
  );
}
