"use client";

import { Fraunces, DM_Mono } from "next/font/google";
import type { DesignProps } from "@/designs/types";
import { useFakeDoor } from "@/designs/shared/useFakeDoor";

// Direction: SWISS / INTERNATIONAL STYLE
// Fraunces (variable: opsz+SOFT+WONK) as the display serif — optically rich,
// slightly retro character, creates Swiss poster energy on deep forest.
// DM Mono as body/UI — clinical, tight, "type specimen" Swiss-grid rigor.
// Palette: deep forest #16271F bg, electric lime #C8F169 accent, cream #EFEAD8
// body text, muted sage #9DB39A for secondary. Zero rounded corners, zero
// shadows, zero decorations. Horizontal rules as the only structural ornament.

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT", "WONK"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-dm-mono",
  weight: ["300", "400", "500"],
  display: "swap",
});

export default function SwissDesign({ content, slug }: DesignProps) {
  const fd = useFakeDoor(slug);
  const { hero, problem, solution, pricing, testimonials, faq, fakedoor, footer } = content;

  return (
    <div className={`${fraunces.variable} ${dmMono.variable}`}>
      <main
        className="relative min-h-screen bg-[#16271F] font-[family-name:var(--font-dm-mono)] text-[#EFEAD8] antialiased"
        style={{ fontFeatureSettings: '"tnum" 1' }}
      >
        <div className="mx-auto max-w-md px-5 pb-32">

          {/* ═══════════════════════════════════════
              HERO
          ═══════════════════════════════════════ */}
          <header className="pt-8">
            {/* Top rule + brand */}
            <div className="border-t border-[#C8F169] pt-4">
              <div className="flex items-baseline justify-between">
                <span
                  className="font-[family-name:var(--font-fraunces)] text-[13px] italic text-[#C8F169] tracking-[0.01em]"
                  style={{ fontVariationSettings: '"opsz" 9, "SOFT" 50, "WONK" 1' }}
                >
                  {hero.brandLockup}
                </span>
                <span className="text-[9px] uppercase tracking-[0.32em] text-[#9DB39A]">
                  Legacy planning
                </span>
              </div>
            </div>

            {/* Large typographic hero — Swiss poster style */}
            <div className="mt-10 border-b border-[#9DB39A]/30 pb-10">
              <h1
                className="font-[family-name:var(--font-fraunces)] text-[52px] font-normal leading-[0.95] tracking-[-0.02em] text-[#EFEAD8]"
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 0, "WONK" 0' }}
              >
                {hero.title}
              </h1>

              {/* Horizontal rule accent */}
              <div className="mt-8 flex items-center gap-4">
                <div className="h-[1px] flex-1 bg-[#C8F169]" />
                <span className="text-[9px] uppercase tracking-[0.4em] text-[#C8F169]">
                  Est. now
                </span>
              </div>

              <p className="mt-6 text-[13px] leading-[1.7] tracking-[0.01em] text-[#9DB39A]">
                {hero.subtitle}
              </p>

              <button
                onClick={() => fd.onCta("hero")}
                className="group mt-8 inline-flex items-center gap-3 border border-[#C8F169] px-6 py-3.5 text-[11px] uppercase tracking-[0.28em] text-[#C8F169] transition-colors duration-150 hover:bg-[#C8F169] hover:text-[#16271F]"
              >
                {hero.ctaLabel}
                <span className="transition-transform duration-150 group-hover:translate-x-1">→</span>
              </button>

              <p className="mt-5 text-[10px] tracking-[0.08em] text-[#9DB39A]/70">
                — {hero.reassuranceLine}
              </p>
            </div>
          </header>

          {/* ═══════════════════════════════════════
              PROBLEM
          ═══════════════════════════════════════ */}
          <section className="mt-16">
            <div className="flex items-start gap-5">
              <div className="pt-1">
                <span className="text-[9px] uppercase tracking-[0.4em] text-[#C8F169]">
                  01
                </span>
              </div>
              <div>
                <h2
                  className="font-[family-name:var(--font-fraunces)] text-[28px] leading-[1.1] tracking-[-0.01em] text-[#EFEAD8]"
                  style={{ fontVariationSettings: '"opsz" 72, "SOFT" 20, "WONK" 0' }}
                >
                  {problem.title}
                </h2>
                <p className="mt-5 text-[12.5px] leading-[1.75] tracking-[0.01em] text-[#9DB39A]">
                  {problem.body}
                </p>
              </div>
            </div>
          </section>

          {/* ═══════════════════════════════════════
              SOLUTION
          ═══════════════════════════════════════ */}
          <section className="mt-16">
            <div className="border-t border-[#9DB39A]/30 pt-6">
              <div className="flex items-baseline justify-between">
                <span className="text-[9px] uppercase tracking-[0.4em] text-[#C8F169]">
                  02
                </span>
                <span
                  className="font-[family-name:var(--font-fraunces)] text-[11px] italic text-[#9DB39A]"
                  style={{ fontVariationSettings: '"opsz" 9, "SOFT" 50, "WONK" 0' }}
                >
                  {solution.intro}
                </span>
              </div>
            </div>

            <ol className="mt-8 space-y-0">
              {solution.steps.map((s, i) => (
                <li
                  key={i}
                  className="border-b border-[#9DB39A]/20 py-7"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex-none">
                      <span
                        className="font-[family-name:var(--font-fraunces)] text-[36px] leading-none text-[#C8F169]/25"
                        style={{ fontVariationSettings: '"opsz" 72, "SOFT" 0, "WONK" 0' }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div>
                      <h3
                        className="font-[family-name:var(--font-fraunces)] text-[18px] leading-[1.2] tracking-[-0.005em] text-[#EFEAD8]"
                        style={{ fontVariationSettings: '"opsz" 36, "SOFT" 10, "WONK" 0' }}
                      >
                        {s.title}
                      </h3>
                      <p className="mt-3 text-[12px] leading-[1.7] tracking-[0.01em] text-[#9DB39A]">
                        {s.body}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* ═══════════════════════════════════════
              PRICING
          ═══════════════════════════════════════ */}
          <section
            ref={fd.pricingRef}
            className="mt-16"
          >
            <div className="border-t border-[#9DB39A]/30 pt-6">
              <div className="flex items-baseline justify-between">
                <span className="text-[9px] uppercase tracking-[0.4em] text-[#C8F169]">
                  03
                </span>
                <span className="text-[9px] uppercase tracking-[0.4em] text-[#9DB39A]">
                  Pricing
                </span>
              </div>
            </div>

            <h2
              className="mt-6 font-[family-name:var(--font-fraunces)] text-[26px] leading-[1.1] tracking-[-0.01em] text-[#EFEAD8]"
              style={{ fontVariationSettings: '"opsz" 48, "SOFT" 10, "WONK" 0' }}
            >
              {pricing.title}
            </h2>
            <p className="mt-4 text-[12px] leading-[1.7] text-[#9DB39A]">
              {pricing.subtitle}
            </p>

            {/* Plans */}
            <div className="mt-8 space-y-3">
              {pricing.plans.map((plan, i) => (
                <div
                  key={i}
                  className={
                    plan.highlight
                      ? "border border-[#C8F169] bg-[#C8F169] p-6"
                      : "border border-[#9DB39A]/30 p-6"
                  }
                >
                  {plan.highlight && (
                    <div className="mb-3 text-[9px] uppercase tracking-[0.38em] text-[#16271F]">
                      Best value
                    </div>
                  )}
                  <div className="flex items-end justify-between">
                    <div>
                      <p
                        className={`text-[9px] uppercase tracking-[0.32em] ${
                          plan.highlight ? "text-[#16271F]/60" : "text-[#9DB39A]"
                        }`}
                      >
                        {plan.name}
                      </p>
                      <p
                        className={`mt-1 font-[family-name:var(--font-fraunces)] text-[36px] leading-none tracking-[-0.02em] ${
                          plan.highlight ? "text-[#16271F]" : "text-[#EFEAD8]"
                        }`}
                        style={{ fontVariationSettings: '"opsz" 72, "SOFT" 0, "WONK" 0' }}
                      >
                        {plan.price}
                      </p>
                      <p
                        className={`mt-1 text-[10px] tracking-[0.06em] ${
                          plan.highlight ? "text-[#16271F]/70" : "text-[#9DB39A]/70"
                        }`}
                      >
                        {plan.descriptor}
                      </p>
                    </div>
                    <button
                      onClick={() => fd.onCta(`pricing-${plan.name.toLowerCase()}`)}
                      className={`text-[10px] uppercase tracking-[0.28em] border px-4 py-2.5 transition-colors duration-150 ${
                        plan.highlight
                          ? "border-[#16271F] text-[#16271F] hover:bg-[#16271F] hover:text-[#C8F169]"
                          : "border-[#C8F169] text-[#C8F169] hover:bg-[#C8F169] hover:text-[#16271F]"
                      }`}
                    >
                      {plan.ctaLabel}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Included features */}
            <div className="mt-6 border border-[#9DB39A]/20 p-6">
              <p className="mb-5 text-[9px] uppercase tracking-[0.4em] text-[#9DB39A]">
                Everything included
              </p>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
                {pricing.included.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-[11px] tracking-[0.04em] text-[#EFEAD8]/80"
                  >
                    <span className="h-[1px] w-3 flex-none bg-[#C8F169]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-4 text-[10px] tracking-[0.06em] text-[#9DB39A]/60">
              {pricing.scarcityLine}
            </p>
          </section>

          {/* ═══════════════════════════════════════
              TESTIMONIALS
          ═══════════════════════════════════════ */}
          <section className="mt-16">
            <div className="border-t border-[#9DB39A]/30 pt-6">
              <div className="flex items-baseline justify-between">
                <span className="text-[9px] uppercase tracking-[0.4em] text-[#C8F169]">
                  04
                </span>
                <span className="text-[9px] uppercase tracking-[0.4em] text-[#9DB39A]">
                  Voices
                </span>
              </div>
            </div>

            <div className="mt-8 space-y-0">
              {testimonials.map((t, i) => (
                <figure
                  key={i}
                  className="border-b border-[#9DB39A]/20 py-7"
                >
                  <blockquote
                    className="font-[family-name:var(--font-fraunces)] text-[17px] italic leading-[1.45] tracking-[-0.005em] text-[#EFEAD8]"
                    style={{ fontVariationSettings: '"opsz" 24, "SOFT" 30, "WONK" 0' }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-4 text-[9px] uppercase tracking-[0.38em] text-[#9DB39A]">
                    {t.name}, {t.age}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          {/* ═══════════════════════════════════════
              FAQ
          ═══════════════════════════════════════ */}
          <section className="mt-16">
            <div className="border-t border-[#9DB39A]/30 pt-6">
              <div className="flex items-baseline justify-between">
                <span className="text-[9px] uppercase tracking-[0.4em] text-[#C8F169]">
                  05
                </span>
                <span className="text-[9px] uppercase tracking-[0.4em] text-[#9DB39A]">
                  Questions
                </span>
              </div>
            </div>

            <div className="mt-8 space-y-0">
              {faq.map((item, i) => (
                <details
                  key={i}
                  className="group border-b border-[#9DB39A]/20"
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5">
                    <span
                      className="font-[family-name:var(--font-fraunces)] text-[15px] leading-[1.25] tracking-[-0.005em] text-[#EFEAD8]"
                      style={{ fontVariationSettings: '"opsz" 24, "SOFT" 10, "WONK" 0' }}
                    >
                      {item.q}
                    </span>
                    <span className="mt-0.5 flex-none text-[16px] leading-none text-[#C8F169] transition-transform duration-200 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="pb-5 text-[12px] leading-[1.75] tracking-[0.01em] text-[#9DB39A]">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </section>

          {/* ═══════════════════════════════════════
              FINAL CTA
          ═══════════════════════════════════════ */}
          <section className="mt-16 border border-[#C8F169] p-8 text-center">
            <h2
              className="font-[family-name:var(--font-fraunces)] text-[32px] leading-[1.05] tracking-[-0.015em] text-[#EFEAD8]"
              style={{ fontVariationSettings: '"opsz" 72, "SOFT" 10, "WONK" 0' }}
            >
              {content.finalCta.headline}
            </h2>
            <div className="mx-auto mt-6 h-[1px] w-12 bg-[#C8F169]" />
            <button
              onClick={() => fd.onCta("final")}
              className="mt-6 inline-flex items-center gap-3 bg-[#C8F169] px-7 py-3.5 text-[11px] uppercase tracking-[0.28em] text-[#16271F] transition-opacity duration-150 hover:opacity-80"
            >
              {content.finalCta.ctaLabel}
              <span>→</span>
            </button>
          </section>

          {/* ═══════════════════════════════════════
              FAKE-DOOR
          ═══════════════════════════════════════ */}
          {fd.showWaitlist && (
            <section
              id="waitlist"
              className="mt-8 border border-[#C8F169] p-7"
            >
              {fd.state === "done" ? (
                <div className="text-center">
                  <div className="mb-4 text-[9px] uppercase tracking-[0.4em] text-[#C8F169]">
                    Confirmed
                  </div>
                  <p
                    className="font-[family-name:var(--font-fraunces)] text-[22px] leading-[1.15] tracking-[-0.01em] text-[#EFEAD8]"
                    style={{ fontVariationSettings: '"opsz" 36, "SOFT" 20, "WONK" 0' }}
                  >
                    {content.confirmation.title}
                  </p>
                  <p className="mx-auto mt-4 text-[12px] leading-[1.7] text-[#9DB39A]">
                    {content.confirmation.body}
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-1 text-[9px] uppercase tracking-[0.4em] text-[#C8F169]">
                    Early access
                  </div>
                  <p
                    className="font-[family-name:var(--font-fraunces)] text-[22px] leading-[1.15] tracking-[-0.01em] text-[#EFEAD8]"
                    style={{ fontVariationSettings: '"opsz" 36, "SOFT" 20, "WONK" 0' }}
                  >
                    {fakedoor.title}
                  </p>
                  <p className="mt-3 text-[12px] leading-[1.7] text-[#9DB39A]">
                    {fakedoor.body}
                  </p>
                  <form onSubmit={fd.submit} className="mt-6 flex flex-col gap-3">
                    <input
                      type="email"
                      required
                      value={fd.email}
                      onChange={(e) => fd.setEmail(e.target.value)}
                      placeholder={fakedoor.emailPlaceholder}
                      className="w-full border border-[#9DB39A]/40 bg-transparent px-4 py-3 text-[12px] tracking-[0.04em] text-[#EFEAD8] placeholder:text-[#9DB39A]/50 focus:border-[#C8F169] focus:outline-none"
                    />
                    <button
                      type="submit"
                      disabled={fd.state === "loading"}
                      className="w-full bg-[#C8F169] px-6 py-3.5 text-[11px] uppercase tracking-[0.28em] text-[#16271F] transition-opacity duration-150 hover:opacity-80 disabled:opacity-50"
                    >
                      {fd.state === "loading" ? "..." : fakedoor.submitLabel}
                    </button>
                    {fd.state === "error" && (
                      <p className="text-center text-[11px] tracking-[0.06em] text-[#C8F169]/70">
                        Something went wrong. Try again.
                      </p>
                    )}
                  </form>
                  <p className="mt-4 text-[10px] tracking-[0.08em] text-[#9DB39A]/50">
                    {fakedoor.privacyLine}
                  </p>
                </>
              )}
            </section>
          )}

          {/* ═══════════════════════════════════════
              FOOTER
          ═══════════════════════════════════════ */}
          <footer className="mt-20 border-t border-[#9DB39A]/30 pt-8 pb-4">
            <p
              className="font-[family-name:var(--font-fraunces)] text-[13px] italic leading-[1.5] text-[#9DB39A]"
              style={{ fontVariationSettings: '"opsz" 9, "SOFT" 50, "WONK" 0' }}
            >
              {footer.lines[0]}
            </p>
            <p className="mt-3 text-[9px] uppercase tracking-[0.32em] text-[#9DB39A]/50">
              {footer.lines.slice(1).join("  ·  ")}
            </p>
          </footer>
        </div>

        {/* ═══════════════════════════════════════
            STICKY CTA
        ═══════════════════════════════════════ */}
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#C8F169]/30 bg-[#16271F] px-5 py-3">
          <div className="mx-auto max-w-md">
            <button
              onClick={() => fd.onCta("sticky")}
              className="flex w-full items-center justify-between border border-[#C8F169] px-5 py-3 text-[11px] uppercase tracking-[0.28em] text-[#C8F169] transition-colors duration-150 hover:bg-[#C8F169] hover:text-[#16271F]"
            >
              <span>{hero.ctaLabel}</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
