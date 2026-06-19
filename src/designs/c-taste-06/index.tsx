"use client";

import { Newsreader, Spline_Sans } from "next/font/google";
import type { DesignProps } from "@/designs/types";
import { useFakeDoor } from "@/designs/shared/useFakeDoor";

// ─────────────────────────────────────────────────────────────────────────────
// Variant C · "taste-06" · EDITORIAL MAGAZINE reading of You Alive.
//
// Brand family C: deep forest, electric lime (single accent, page-wide lock),
// cream. Warm, grounded, dignified. NO photography - the page is text-led, the
// ad creative is only a mood/palette source.
//
// AXIS: Editorial magazine. A literary feature spread on a cream page. Hairline
// rules, a masthead wordmark, a drop cap on the lede, a pull-quote, asymmetric
// two-column collapses. Serif IS justified here: this is genuine long-form
// editorial, the headlines and lede read like a printed essay. The serif is
// NEWSREADER - a true text-and-display reading serif drawn for the screen
// (warm, literary, variable optical sizing + italic), deliberately NOT the
// LLM-default Fraunces / Instrument Serif. The text face is SPLINE SANS, a
// clean grotesque for labels, captions and UI chrome.
//
// Anti-slop honored: serif articulated (real editorial), ≤1 eyebrow per 3
// sections, no split-header pattern, no section-number eyebrows, no decorative
// status dots, no em-dashes added (fixed copy verbatim), one accent locked,
// one theme (cream) page-wide, multi-column collapses declared per section.
// ─────────────────────────────────────────────────────────────────────────────

const editorial = Newsreader({
  subsets: ["latin"],
  variable: "--font-editorial",
  style: ["normal", "italic"],
  axes: ["opsz"],
  display: "swap",
});

const grotesk = Spline_Sans({
  subsets: ["latin"],
  variable: "--font-grotesk",
  weight: ["400", "500", "600"],
  display: "swap",
});

const FOREST = "#16271F";
const LIME = "#C8F169";

export default function EditorialMagazineDesign({ content, slug }: DesignProps) {
  const fd = useFakeDoor(slug);
  const { hero, problem, solution, pricing, testimonials, faq, finalCta, fakedoor, confirmation, footer } =
    content;

  return (
    <main
      className={`${editorial.variable} ${grotesk.variable} font-[family-name:var(--font-grotesk)] min-h-screen bg-[#EFEAD8] text-[#16271F] antialiased selection:bg-[#C8F169] selection:text-[#16271F]`}
    >
      {/* multi-column note: every column rule below is `md:` only; on mobile
          (<768px, our target 390px) the page is a strict single column. */}
      <div className="mx-auto max-w-md px-5 pb-28">
        {/* ═══════════ MASTHEAD ═══════════ */}
        <header className="border-b-2 border-[#16271F] pt-7 pb-3">
          <div className="flex items-baseline justify-between">
            <p className="font-[family-name:var(--font-grotesk)] text-[10px] font-medium uppercase tracking-[0.32em] text-[#4a5a50]">
              Issue 01
            </p>
            <p className="font-[family-name:var(--font-grotesk)] text-[10px] font-medium uppercase tracking-[0.32em] text-[#4a5a50]">
              A field guide
            </p>
          </div>
          <h1 className="mt-2 font-[family-name:var(--font-editorial)] text-[40px] font-medium italic leading-[0.92] tracking-[-0.02em] text-[#16271F]">
            {hero.brandLockup}
          </h1>
        </header>

        {/* ═══════════ HERO / LEDE ═══════════ */}
        <section className="pt-8">
          <h2 className="font-[family-name:var(--font-editorial)] text-[34px] font-medium leading-[1.07] tracking-[-0.018em] text-[#16271F]">
            {hero.title}
          </h2>

          {/* lede with drop cap - the print feature opener */}
          <p className="mt-6 font-[family-name:var(--font-editorial)] text-[18px] leading-[1.6] text-[#33433a] [&::first-letter]:float-left [&::first-letter]:mr-2 [&::first-letter]:mt-1.5 [&::first-letter]:font-[family-name:var(--font-editorial)] [&::first-letter]:text-[58px] [&::first-letter]:font-medium [&::first-letter]:leading-[0.7] [&::first-letter]:text-[#16271F]">
            {hero.subtitle}
          </p>

          <button
            onClick={() => fd.onCta("hero")}
            className="reveal mt-8 inline-flex w-full items-center justify-between gap-3 border border-[#16271F] bg-[#16271F] px-6 py-4 text-[15px] font-medium text-[#EFEAD8] transition-transform duration-200 active:scale-[0.985] motion-safe:hover:-translate-y-px"
          >
            {hero.ctaLabel}
            <span aria-hidden>&rarr;</span>
          </button>

          <p className="mt-4 font-[family-name:var(--font-grotesk)] text-[12.5px] leading-[1.5] text-[#5d6f63]">
            {hero.reassuranceLine}
          </p>
        </section>

        {/* ═══════════ PROBLEM - pull-quote feature ═══════════ */}
        <section className="mt-16 border-t border-[#16271F]/25 pt-9">
          {/* pull-quote: the headline is the loud line, lime sidebar rule */}
          <div className="border-l-[3px] pl-5" style={{ borderColor: LIME }}>
            <h2 className="font-[family-name:var(--font-editorial)] text-[27px] font-medium italic leading-[1.18] tracking-[-0.01em] text-[#16271F]">
              {problem.title}
            </h2>
          </div>
          <p className="mt-6 font-[family-name:var(--font-editorial)] text-[16.5px] leading-[1.68] text-[#33433a]">
            {problem.body}
          </p>
        </section>

        {/* ═══════════ SOLUTION - numbered editorial entries ═══════════ */}
        <section className="mt-16 border-t border-[#16271F]/25 pt-9">
          {/* sole eyebrow allowed in this 3-section stretch (restraint rule) */}
          <p className="font-[family-name:var(--font-grotesk)] text-[10.5px] font-medium uppercase tracking-[0.3em] text-[#5d6f63]">
            {solution.intro}
          </p>

          <div className="mt-7 divide-y divide-[#16271F]/15">
            {solution.steps.map((s, i) => (
              <article key={i} className="reveal grid grid-cols-[auto_1fr] gap-x-5 py-7 first:pt-0">
                <span
                  className="font-[family-name:var(--font-editorial)] text-[30px] font-medium italic leading-none"
                  style={{ color: i === 0 ? FOREST : "#9aab93" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-[family-name:var(--font-editorial)] text-[20px] font-medium leading-[1.24] tracking-[-0.005em] text-[#16271F]">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 font-[family-name:var(--font-grotesk)] text-[14px] leading-[1.62] text-[#46564c]">
                    {s.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ═══════════ PRICING - the rate card ═══════════ */}
        <section ref={fd.pricingRef} className="mt-16 border-t-2 border-[#16271F] pt-9">
          <h2 className="font-[family-name:var(--font-editorial)] text-[26px] font-medium leading-[1.14] tracking-[-0.012em] text-[#16271F]">
            {pricing.title}
          </h2>
          <p className="mt-4 font-[family-name:var(--font-editorial)] text-[16px] italic leading-[1.6] text-[#33433a]">
            {pricing.subtitle}
          </p>

          {/* two plans: stacked single column on mobile, side-by-side md+ */}
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            {pricing.plans.map((plan, i) => {
              const hl = !!plan.highlight;
              return (
                <div
                  key={i}
                  className={
                    hl
                      ? "flex flex-col bg-[#16271F] px-6 py-7 text-[#EFEAD8]"
                      : "flex flex-col border border-[#16271F]/30 px-6 py-7 text-[#16271F]"
                  }
                >
                  {hl && (
                    <span
                      className="mb-3 self-start px-2.5 py-1 font-[family-name:var(--font-grotesk)] text-[10px] font-semibold uppercase tracking-[0.16em]"
                      style={{ backgroundColor: LIME, color: FOREST }}
                    >
                      Most chosen
                    </span>
                  )}
                  <p
                    className="font-[family-name:var(--font-grotesk)] text-[11px] font-medium uppercase tracking-[0.24em]"
                    style={{ color: hl ? "#9aab93" : "#5d6f63" }}
                  >
                    {plan.name}
                  </p>
                  <p className="mt-2 font-[family-name:var(--font-editorial)] text-[34px] font-medium leading-none tracking-[-0.01em]">
                    {plan.price}
                  </p>
                  <p
                    className="mt-3 font-[family-name:var(--font-grotesk)] text-[13px] leading-[1.5]"
                    style={{ color: hl ? "#9aab93" : "#5d6f63" }}
                  >
                    {plan.descriptor}
                  </p>
                  <button
                    onClick={() => fd.onCta(`pricing-${plan.name.toLowerCase()}`)}
                    className={
                      hl
                        ? "mt-6 inline-flex w-full items-center justify-center px-5 py-3 font-[family-name:var(--font-grotesk)] text-[14px] font-semibold text-[#16271F] transition-transform duration-200 active:scale-[0.985] motion-safe:hover:brightness-105"
                        : "mt-6 inline-flex w-full items-center justify-center border border-[#16271F] px-5 py-3 font-[family-name:var(--font-grotesk)] text-[14px] font-medium text-[#16271F] transition-colors duration-200 motion-safe:hover:bg-[#16271F] motion-safe:hover:text-[#EFEAD8]"
                    }
                    style={hl ? { backgroundColor: LIME } : undefined}
                  >
                    {plan.ctaLabel}
                  </button>
                </div>
              );
            })}
          </div>

          {/* included - set as a magazine index, two columns md+, hairlines */}
          <div className="mt-8 border-t border-[#16271F]/25 pt-6">
            <p className="font-[family-name:var(--font-grotesk)] text-[10.5px] font-medium uppercase tracking-[0.3em] text-[#5d6f63]">
              What is inside
            </p>
            <ul className="mt-4 grid grid-cols-1 gap-x-6 md:grid-cols-2">
              {pricing.included.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-baseline gap-3 border-b border-[#16271F]/12 py-2.5 font-[family-name:var(--font-grotesk)] text-[14px] text-[#33433a]"
                >
                  <span
                    aria-hidden
                    className="font-[family-name:var(--font-editorial)] text-[12px] italic tabular-nums text-[#8a9a85]"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
            <p className="mt-5 font-[family-name:var(--font-grotesk)] text-[12.5px] leading-[1.6] text-[#5d6f63]">
              {pricing.scarcityLine}
            </p>
          </div>
        </section>

        {/* ═══════════ TESTIMONIALS - letters to the editor ═══════════ */}
        <section className="mt-16 border-t border-[#16271F]/25 pt-9">
          <div className="space-y-9">
            {testimonials.map((t, i) => (
              <figure key={i} className="reveal">
                <blockquote className="font-[family-name:var(--font-editorial)] text-[19px] leading-[1.5] tracking-[-0.005em] text-[#16271F]">
                  <span aria-hidden style={{ color: LIME }}>
                    &ldquo;
                  </span>
                  {t.quote}
                  <span aria-hidden style={{ color: LIME }}>
                    &rdquo;
                  </span>
                </blockquote>
                <figcaption className="mt-3 font-[family-name:var(--font-grotesk)] text-[11px] font-medium uppercase tracking-[0.2em] text-[#5d6f63]">
                  {t.name}, {t.age}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ═══════════ FAQ - the marginalia ═══════════ */}
        <section className="mt-16 border-t border-[#16271F]/25 pt-9">
          <p className="font-[family-name:var(--font-grotesk)] text-[10.5px] font-medium uppercase tracking-[0.3em] text-[#5d6f63]">
            Questions, answered
          </p>
          <div className="mt-4 divide-y divide-[#16271F]/15">
            {faq.map((item, i) => (
              <details key={i} className="group py-4 open:pb-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                  <span className="font-[family-name:var(--font-editorial)] text-[17px] font-medium leading-[1.32] tracking-[-0.005em] text-[#16271F]">
                    {item.q}
                  </span>
                  <span
                    aria-hidden
                    className="mt-1 select-none font-[family-name:var(--font-grotesk)] text-[18px] leading-none text-[#16271F] transition-transform duration-200 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 font-[family-name:var(--font-grotesk)] text-[14px] leading-[1.65] text-[#46564c]">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* ═══════════ FINAL CTA - the colophon turn ═══════════ */}
        <section className="mt-16 bg-[#16271F] px-7 py-12 text-center text-[#EFEAD8]">
          <h2 className="mx-auto max-w-[16ch] font-[family-name:var(--font-editorial)] text-[30px] font-medium italic leading-[1.1] tracking-[-0.01em]">
            {finalCta.headline}
          </h2>
          <button
            onClick={() => fd.onCta("final")}
            className="mt-8 inline-flex items-center justify-center gap-2.5 px-8 py-4 font-[family-name:var(--font-grotesk)] text-[15px] font-semibold text-[#16271F] transition-transform duration-200 active:scale-[0.985] motion-safe:hover:brightness-105"
            style={{ backgroundColor: LIME }}
          >
            {finalCta.ctaLabel}
            <span aria-hidden>&rarr;</span>
          </button>
        </section>

        {/* ═══════════ FAKE-DOOR ═══════════ */}
        {fd.showWaitlist && (
          <section id="waitlist" className="mt-12 border-2 border-[#16271F] px-6 py-9">
            {fd.state === "done" ? (
              <div>
                <h2 className="font-[family-name:var(--font-editorial)] text-[24px] font-medium leading-[1.18] tracking-[-0.01em] text-[#16271F]">
                  {confirmation.title}
                </h2>
                <p className="mt-4 font-[family-name:var(--font-grotesk)] text-[14.5px] leading-[1.65] text-[#46564c]">
                  {confirmation.body}
                </p>
              </div>
            ) : (
              <>
                <h2 className="font-[family-name:var(--font-editorial)] text-[26px] font-medium italic leading-[1.12] tracking-[-0.01em] text-[#16271F]">
                  {fakedoor.title}
                </h2>
                <p className="mt-4 font-[family-name:var(--font-grotesk)] text-[14.5px] leading-[1.62] text-[#46564c]">
                  {fakedoor.body}
                </p>
                <form onSubmit={fd.submit} className="mt-6 flex flex-col gap-3">
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
                    className="w-full border border-[#16271F]/35 bg-[#EFEAD8] px-5 py-3.5 font-[family-name:var(--font-grotesk)] text-[15px] text-[#16271F] placeholder:text-[#8a9a85] focus:border-[#16271F] focus:outline-none focus:ring-2 focus:ring-[#16271F]/15"
                  />
                  <button
                    type="submit"
                    disabled={fd.state === "loading"}
                    className="w-full bg-[#16271F] px-5 py-3.5 font-[family-name:var(--font-grotesk)] text-[15px] font-semibold text-[#EFEAD8] transition-opacity duration-200 disabled:opacity-60"
                  >
                    {fd.state === "loading" ? "Reserving…" : fakedoor.submitLabel}
                  </button>
                  {fd.state === "error" && (
                    <p className="font-[family-name:var(--font-grotesk)] text-[13px] text-[#9F2F2D]">
                      Something went wrong. Please try again.
                    </p>
                  )}
                </form>
                <p className="mt-4 font-[family-name:var(--font-grotesk)] text-[12px] text-[#5d6f63]">
                  {fakedoor.privacyLine}
                </p>
              </>
            )}
          </section>
        )}

        {/* ═══════════ FOOTER / COLOPHON ═══════════ */}
        <footer className="mt-16 border-t-2 border-[#16271F] pt-5">
          <p className="font-[family-name:var(--font-editorial)] text-[15px] italic leading-[1.5] text-[#16271F]">
            {footer.lines[0]}
          </p>
          <p className="mt-4 flex flex-wrap gap-x-6 gap-y-1 font-[family-name:var(--font-grotesk)] text-[11px] font-medium uppercase tracking-[0.22em] text-[#5d6f63]">
            {footer.lines.slice(1).map((line, i) => (
              <span key={i}>{line}</span>
            ))}
          </p>
        </footer>
      </div>

      {/* CSS-only scroll reveal, gated on prefers-reduced-motion (MOTION 3) */}
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .reveal {
            animation: yaFade 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
          }
          @keyframes yaFade {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: none; }
          }
        }
      `}</style>
    </main>
  );
}
