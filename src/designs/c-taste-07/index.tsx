"use client";

import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import type { DesignProps } from "@/designs/types";
import { useFakeDoor } from "@/designs/shared/useFakeDoor";

// Direction: Swiss / International style — flat and light.
// Strict modular grid, small precise typography, generous air, zero shadows,
// zero gradients, fully flat. Cream canvas, deep-forest ink, electric lime as
// the single accent locked page-wide (rules, ticks, the one highlighted plan).
// Space Grotesk is the precise grotesk that carries the Swiss voice; IBM Plex
// Mono numbers the grid (section indices, coordinates, meta) like a spec sheet.
// No photography, no curves beyond a 2px functional radius on inputs/buttons.
const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

const FOREST = "#16271F";
const LIME = "#C8F169";

export default function SwissFlatDesign({ content, slug }: DesignProps) {
  const fd = useFakeDoor(slug);
  const { hero, problem, solution, pricing, testimonials, faq, finalCta, fakedoor, confirmation, footer } = content;

  // Mono index label for the strict grid rhythm.
  const idx = (n: number) => String(n).padStart(2, "0");

  return (
    <main
      className={`${grotesk.variable} ${mono.variable} font-[family-name:var(--font-grotesk)] min-h-screen bg-[#EFEAD8] text-[#16271F] antialiased selection:bg-[#C8F169] selection:text-[#16271F]`}
    >
      <div className="mx-auto max-w-md px-5 pb-32">
        {/* ───────── HEADER / BRAND LOCKUP ───────── */}
        <header className="flex items-baseline justify-between border-b-2 border-[#16271F] pt-6 pb-3">
          <span className="text-[15px] font-bold tracking-[-0.02em]">{hero.brandLockup}</span>
          <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.18em] text-[#16271F]/60">
            Legacy · Index
          </span>
        </header>

        {/* ───────── HERO ───────── */}
        <section className="border-b border-[#16271F]/20 pt-12 pb-12">
          <div className="grid grid-cols-12 gap-x-3">
            <p className="col-span-2 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.16em] text-[#16271F]/55">
              {idx(0)}
            </p>
            <div className="col-span-10">
              <h1 className="text-[34px] font-medium leading-[1.04] tracking-[-0.03em]">
                {hero.title}
              </h1>
              <p className="mt-6 max-w-[34ch] text-[14px] leading-[1.6] text-[#16271F]/75">
                {hero.subtitle}
              </p>

              <div className="mt-9 flex items-center gap-4">
                <button
                  onClick={() => fd.onCta("hero")}
                  className="rounded-[2px] bg-[#16271F] px-6 py-3 text-[13px] font-medium tracking-[-0.01em] text-[#EFEAD8] transition-transform duration-200 active:scale-[0.98]"
                >
                  {hero.ctaLabel}
                </button>
                <span
                  aria-hidden
                  className="h-[2px] w-10"
                  style={{ backgroundColor: LIME }}
                />
              </div>

              <p className="mt-7 font-[family-name:var(--font-mono)] text-[11px] tracking-[0.01em] text-[#16271F]/60">
                {hero.reassuranceLine}
              </p>
            </div>
          </div>
        </section>

        {/* ───────── PROBLEM ───────── */}
        <section className="border-b border-[#16271F]/20 py-12">
          <div className="grid grid-cols-12 gap-x-3">
            <p className="col-span-2 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.16em] text-[#16271F]/55">
              {idx(1)}
            </p>
            <div className="col-span-10">
              <h2 className="text-[22px] font-medium leading-[1.18] tracking-[-0.02em]">
                {problem.title}
              </h2>
              <p className="mt-5 max-w-[40ch] text-[14px] leading-[1.65] text-[#16271F]/75">
                {problem.body}
              </p>
            </div>
          </div>
        </section>

        {/* ───────── SOLUTION ───────── */}
        <section className="border-b border-[#16271F]/20 py-12">
          <div className="grid grid-cols-12 gap-x-3">
            <p className="col-span-2 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.16em] text-[#16271F]/55">
              {idx(2)}
            </p>
            <div className="col-span-10">
              <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.16em] text-[#16271F]/60">
                {solution.intro}
              </p>
            </div>
          </div>

          <ol className="mt-9 divide-y divide-[#16271F]/20 border-y border-[#16271F]/20">
            {solution.steps.map((s, i) => (
              <li key={i} className="grid grid-cols-12 gap-x-3 py-7">
                <p
                  className="col-span-2 font-[family-name:var(--font-mono)] text-[13px] font-medium leading-none"
                  style={{ color: FOREST }}
                >
                  {idx(i + 1)}
                </p>
                <div className="col-span-10">
                  <h3 className="text-[16px] font-medium leading-[1.3] tracking-[-0.015em]">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[13.5px] leading-[1.6] text-[#16271F]/75">
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* ───────── PRICING ───────── */}
        <section ref={fd.pricingRef} className="border-b border-[#16271F]/20 py-12">
          <div className="grid grid-cols-12 gap-x-3">
            <p className="col-span-2 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.16em] text-[#16271F]/55">
              {idx(3)}
            </p>
            <div className="col-span-10">
              <h2 className="text-[22px] font-medium leading-[1.18] tracking-[-0.02em]">
                {pricing.title}
              </h2>
              <p className="mt-5 max-w-[40ch] text-[14px] leading-[1.65] text-[#16271F]/75">
                {pricing.subtitle}
              </p>
            </div>
          </div>

          {/* Plans */}
          <div className="mt-9 grid grid-cols-1 divide-y divide-[#16271F]/20 border border-[#16271F]/20">
            {pricing.plans.map((plan, i) => (
              <div
                key={i}
                className="grid grid-cols-12 items-center gap-x-3 px-4 py-6"
                style={plan.highlight ? { backgroundColor: LIME } : undefined}
              >
                <div className="col-span-7">
                  <div className="flex items-center gap-2">
                    <p className="text-[13px] font-semibold uppercase tracking-[0.06em]">
                      {plan.name}
                    </p>
                    {plan.highlight && (
                      <span className="rounded-[2px] border border-[#16271F] px-1.5 py-0.5 font-[family-name:var(--font-mono)] text-[9px] uppercase tracking-[0.12em]">
                        Pick
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-[24px] font-medium leading-none tracking-[-0.02em]">
                    {plan.price}
                  </p>
                  <p className="mt-2 font-[family-name:var(--font-mono)] text-[11px] tracking-[0.01em] text-[#16271F]/70">
                    {plan.descriptor}
                  </p>
                </div>
                <div className="col-span-5 flex justify-end">
                  <button
                    onClick={() => fd.onCta(`pricing-${plan.name.toLowerCase()}`)}
                    className={
                      plan.highlight
                        ? "rounded-[2px] border-2 border-[#16271F] px-4 py-2.5 text-[12px] font-medium tracking-[-0.01em] text-[#16271F] transition-transform duration-200 active:scale-[0.98]"
                        : "rounded-[2px] bg-[#16271F] px-4 py-2.5 text-[12px] font-medium tracking-[-0.01em] text-[#EFEAD8] transition-transform duration-200 active:scale-[0.98]"
                    }
                  >
                    {plan.ctaLabel}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Included list — strict modular grid, lime ticks */}
          <div className="mt-7 border-t-2 border-[#16271F] pt-5">
            <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.16em] text-[#16271F]/60">
              Included
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-3 gap-y-3">
              {pricing.included.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-[12.5px] leading-[1.35]">
                  <span
                    aria-hidden
                    className="mt-[5px] h-[7px] w-[7px] flex-none"
                    style={{ backgroundColor: LIME }}
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-7 font-[family-name:var(--font-mono)] text-[11px] leading-[1.5] tracking-[0.01em] text-[#16271F]/65">
            {pricing.scarcityLine}
          </p>
        </section>

        {/* ───────── TESTIMONIALS ───────── */}
        <section className="border-b border-[#16271F]/20 py-12">
          <div className="grid grid-cols-12 gap-x-3">
            <p className="col-span-2 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.16em] text-[#16271F]/55">
              {idx(4)}
            </p>
            <div className="col-span-10">
              <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.16em] text-[#16271F]/60">
                In their words
              </p>
            </div>
          </div>

          <div className="mt-9 divide-y divide-[#16271F]/20 border-y border-[#16271F]/20">
            {testimonials.map((t, i) => (
              <figure key={i} className="grid grid-cols-12 gap-x-3 py-7">
                <p className="col-span-2 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.12em] text-[#16271F]/55">
                  {idx(i + 1)}
                </p>
                <div className="col-span-10">
                  <blockquote className="text-[15px] font-medium leading-[1.4] tracking-[-0.01em]">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-4 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.1em] text-[#16271F]/60">
                    {t.name}, {t.age}
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>
        </section>

        {/* ───────── FAQ ───────── */}
        <section className="border-b border-[#16271F]/20 py-12">
          <div className="grid grid-cols-12 gap-x-3">
            <p className="col-span-2 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.16em] text-[#16271F]/55">
              {idx(5)}
            </p>
            <div className="col-span-10">
              <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.16em] text-[#16271F]/60">
                Questions
              </p>
            </div>
          </div>

          <div className="mt-7 border-t border-[#16271F]/20">
            {faq.map((item, i) => (
              <details key={i} className="group border-b border-[#16271F]/20 py-4">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                  <span className="text-[14px] font-medium leading-[1.35] tracking-[-0.01em]">
                    {item.q}
                  </span>
                  <span
                    aria-hidden
                    className="mt-0.5 font-[family-name:var(--font-mono)] text-[16px] leading-none transition-transform duration-200 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-[42ch] text-[13px] leading-[1.6] text-[#16271F]/75">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* ───────── FINAL CTA ───────── */}
        <section className="border-b-2 border-[#16271F] py-14">
          <div className="grid grid-cols-12 gap-x-3">
            <p className="col-span-2 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.16em] text-[#16271F]/55">
              {idx(6)}
            </p>
            <div className="col-span-10">
              <h2 className="text-[26px] font-medium leading-[1.1] tracking-[-0.03em]">
                {finalCta.headline}
              </h2>
              <button
                onClick={() => fd.onCta("final")}
                className="mt-7 rounded-[2px] px-6 py-3 text-[13px] font-semibold tracking-[-0.01em] text-[#16271F] transition-transform duration-200 active:scale-[0.98]"
                style={{ backgroundColor: LIME }}
              >
                {finalCta.ctaLabel}
              </button>
            </div>
          </div>
        </section>

        {/* ───────── FAKE-DOOR ───────── */}
        {fd.showWaitlist && (
          <section id="waitlist" className="border-b border-[#16271F]/20 py-12">
            {fd.state === "done" ? (
              <div className="grid grid-cols-12 gap-x-3">
                <p className="col-span-2 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.16em] text-[#16271F]/55">
                  ✓
                </p>
                <div className="col-span-10">
                  <h2 className="text-[20px] font-medium leading-[1.2] tracking-[-0.02em]">
                    {confirmation.title}
                  </h2>
                  <p className="mt-4 max-w-[40ch] text-[14px] leading-[1.6] text-[#16271F]/75">
                    {confirmation.body}
                  </p>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-12 gap-x-3">
                <p className="col-span-2 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.16em] text-[#16271F]/55">
                  {idx(7)}
                </p>
                <div className="col-span-10">
                  <h2 className="text-[20px] font-medium leading-[1.2] tracking-[-0.02em]">
                    {fakedoor.title}
                  </h2>
                  <p className="mt-4 max-w-[40ch] text-[14px] leading-[1.6] text-[#16271F]/75">
                    {fakedoor.body}
                  </p>
                  <form onSubmit={fd.submit} className="mt-7 flex flex-col gap-3">
                    <input
                      type="email"
                      required
                      value={fd.email}
                      onChange={(e) => fd.setEmail(e.target.value)}
                      placeholder={fakedoor.emailPlaceholder}
                      className="w-full rounded-[2px] border border-[#16271F] bg-transparent px-4 py-3 text-[14px] text-[#16271F] placeholder:text-[#16271F]/45 focus:outline-none focus:ring-2 focus:ring-[#16271F]"
                    />
                    <button
                      type="submit"
                      disabled={fd.state === "loading"}
                      className="w-full rounded-[2px] bg-[#16271F] px-4 py-3 text-[13px] font-medium tracking-[-0.01em] text-[#EFEAD8] transition-transform duration-200 active:scale-[0.98] disabled:opacity-60"
                    >
                      {fd.state === "loading" ? "Sending…" : fakedoor.submitLabel}
                    </button>
                    {fd.state === "error" && (
                      <p className="font-[family-name:var(--font-mono)] text-[11px] tracking-[0.01em] text-[#16271F]">
                        Something went wrong. Please try again.
                      </p>
                    )}
                  </form>
                  <p className="mt-5 font-[family-name:var(--font-mono)] text-[11px] tracking-[0.01em] text-[#16271F]/60">
                    {fakedoor.privacyLine}
                  </p>
                </div>
              </div>
            )}
          </section>
        )}

        {/* ───────── FOOTER ───────── */}
        <footer className="pt-10">
          <p className="text-[13px] font-medium tracking-[-0.01em]">{footer.lines[0]}</p>
          <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
            {footer.lines.slice(1).map((line, i) => (
              <li
                key={i}
                className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.12em] text-[#16271F]/60"
              >
                {line}
              </li>
            ))}
          </ul>
        </footer>
      </div>
    </main>
  );
}
