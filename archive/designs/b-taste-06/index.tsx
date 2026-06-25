"use client";

import { Newsreader, Archivo } from "next/font/google";
import type { DesignProps } from "@/designs/types";
import { useFakeDoor } from "@/designs/shared/useFakeDoor";

// ─────────────────────────────────────────────────────────────────────────────
// VARIANT B — "Editorial magazine" reading of the SOFT / WELLNESS brand.
//
// The page is laid out like a tender print feature: a masthead wordmark, a
// hairline-ruled lede, a drop-cap opening paragraph, multi-column body that
// collapses to one column on mobile, pull-quotes set in italic display, and a
// folio-style footer. No photography — the lavender/periwinkle palette + the
// serif do all the work.
//
// SERIF JUSTIFICATION: Newsreader is a genuine news/magazine editorial face
// (optical-size axis, real italics designed for long reading). This is the rare
// brief where serif IS the right call — the axis is literally "magazine
// feature." Banned Fraunces/Instrument_Serif avoided; rotated to Newsreader.
// Body/labels in Archivo, a clean grotesque, for crisp running text and folios.
//
// DIALS: VARIANCE 8 (asymmetric column grid, off-axis drop cap, ragged pull-
// quotes), MOTION 3 (CSS-only fade-rise on scroll via @keyframes, reduced-
// motion honored), DENSITY 5 (columnar text, hairline rules, considered air).
// ─────────────────────────────────────────────────────────────────────────────

const display = Newsreader({
  subsets: ["latin"],
  variable: "--font-display",
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const text = Archivo({
  subsets: ["latin"],
  variable: "--font-text",
  weight: ["400", "500", "600"],
  display: "swap",
});

// Locked palette (indigo ink on luminous lavender/periwinkle)
const INK = "#26235A";
const SOFT = "#5A5690";
const MUTE = "#8C88BE";
const RULE = "rgba(38,35,90,0.16)";
const PAPER = "#F7F4FF";

export default function EditorialMagazineLavender({ content, slug }: DesignProps) {
  const fd = useFakeDoor(slug);
  const { pricingRef, showWaitlist, email, setEmail, state, onCta, submit } = fd;
  const { hero, problem, solution, pricing, testimonials, faq, finalCta, fakedoor, confirmation, footer } =
    content;

  return (
    <main
      className={`${display.variable} ${text.variable} font-[family-name:var(--font-text)] relative min-h-screen overflow-hidden antialiased`}
      style={{
        color: INK,
        background:
          "radial-gradient(115% 70% at 8% 2%, #F3ECFF 0%, rgba(243,236,255,0) 52%)," +
          "radial-gradient(95% 60% at 96% 14%, #D6E4FF 0%, rgba(214,228,255,0) 50%)," +
          "radial-gradient(120% 80% at 50% 104%, #EBE6FF 0%, rgba(235,230,255,0) 58%)," +
          "linear-gradient(180deg, #F7F4FF 0%, #F3ECFF 48%, #F7F4FF 100%)",
      }}
    >
      {/* Local styles: drop cap, columns, hairline reveal motion */}
      <style>{`
        @keyframes ya-rise { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: none; } }
        .ya-rise { animation: ya-rise 0.7s cubic-bezier(0.16,1,0.3,1) both; }
        .ya-dropcap::first-letter {
          font-family: var(--font-display); float: left; font-weight: 500;
          font-size: 4.6em; line-height: 0.78; padding: 0.06em 0.12em 0 0;
          color: ${INK}; font-variation-settings: "opsz" 72;
        }
        .ya-cols { column-count: 1; }
        @media (min-width: 360px) { .ya-cols { column-count: 2; column-gap: 1.4rem; } }
        .ya-cols p { break-inside: avoid; margin: 0 0 0.85rem; }
        @media (prefers-reduced-motion: reduce) { .ya-rise { animation: none; } }
      `}</style>

      <div className="relative mx-auto max-w-md px-5 pb-36">
        {/* ───────── MASTHEAD ───────── */}
        <header className="flex items-end justify-between border-b pt-7 pb-3" style={{ borderColor: RULE }}>
          <span
            className="font-[family-name:var(--font-display)] text-[19px] tracking-[-0.01em]"
            style={{ color: INK, fontVariationSettings: '"opsz" 28' }}
          >
            {hero.brandLockup}
          </span>
          <span
            className="font-[family-name:var(--font-text)] text-[9.5px] font-medium uppercase tracking-[0.34em]"
            style={{ color: MUTE }}
          >
            A Field Guide
          </span>
        </header>
        <div
          className="flex items-center justify-between py-2 text-[9.5px] uppercase tracking-[0.26em]"
          style={{ color: MUTE }}
        >
          <span>Issue 01</span>
          <span>Prepared today</span>
        </div>

        {/* ───────── HERO / LEDE ───────── */}
        <section className="ya-rise border-t pt-8" style={{ borderColor: RULE }}>
          <h1
            className="font-[family-name:var(--font-display)] text-[42px] font-light leading-[1.04] tracking-[-0.015em]"
            style={{ color: INK, fontVariationSettings: '"opsz" 72' }}
          >
            {hero.title}
          </h1>
          <p
            className="mt-6 max-w-[34ch] font-[family-name:var(--font-display)] text-[18px] italic leading-[1.55]"
            style={{ color: SOFT, fontVariationSettings: '"opsz" 22' }}
          >
            {hero.subtitle}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <button
              onClick={() => onCta("hero")}
              className="group inline-flex items-center gap-2 px-7 py-3.5 text-[14px] font-medium tracking-wide transition-transform duration-300 hover:-translate-y-[2px] active:translate-y-0"
              style={{ background: INK, color: PAPER }}
            >
              {hero.ctaLabel}
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </button>
            <span
              className="font-[family-name:var(--font-text)] text-[12px] leading-snug"
              style={{ color: SOFT }}
            >
              {hero.reassuranceLine}
            </span>
          </div>
        </section>

        {/* ───────── PROBLEM — drop-cap feature opener ───────── */}
        <article className="mt-20 border-t pt-7" style={{ borderColor: RULE }}>
          <h2
            className="max-w-[24ch] font-[family-name:var(--font-display)] text-[26px] font-normal leading-[1.18] tracking-[-0.01em]"
            style={{ color: INK, fontVariationSettings: '"opsz" 40' }}
          >
            {problem.title}
          </h2>
          <p
            className="ya-dropcap mt-6 text-[15px] leading-[1.74]"
            style={{ color: SOFT }}
          >
            {problem.body}
          </p>
        </article>

        {/* ───────── SOLUTION — numbered editorial entries ───────── */}
        <section className="mt-20 border-t pt-7" style={{ borderColor: RULE }}>
          <p
            className="mb-7 font-[family-name:var(--font-text)] text-[10px] font-medium uppercase tracking-[0.32em]"
            style={{ color: MUTE }}
          >
            {solution.intro}
          </p>

          <ol className="space-y-9">
            {solution.steps.map((s, i) => (
              <li key={i} className="grid grid-cols-[auto_1fr] gap-x-4">
                <span
                  className="font-[family-name:var(--font-display)] text-[34px] font-light italic leading-none"
                  style={{ color: MUTE, fontVariationSettings: '"opsz" 48' }}
                >
                  {i + 1}
                </span>
                <div className="border-l pl-4" style={{ borderColor: RULE }}>
                  <h3
                    className="font-[family-name:var(--font-display)] text-[19px] font-normal leading-[1.28] tracking-[-0.005em]"
                    style={{ color: INK, fontVariationSettings: '"opsz" 30' }}
                  >
                    {s.title}
                  </h3>
                  <p className="mt-2.5 text-[14px] leading-[1.7]" style={{ color: SOFT }}>
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* ───────── TESTIMONIALS — pull-quotes ───────── */}
        <section className="mt-20 border-t pt-7" style={{ borderColor: RULE }}>
          <div className="space-y-10">
            {testimonials.map((t, i) => (
              <figure key={i}>
                <blockquote
                  className="font-[family-name:var(--font-display)] text-[21px] font-light italic leading-[1.42] tracking-[-0.005em]"
                  style={{ color: INK, fontVariationSettings: '"opsz" 36' }}
                >
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption
                  className="mt-3 font-[family-name:var(--font-text)] text-[10.5px] uppercase tracking-[0.24em]"
                  style={{ color: MUTE }}
                >
                  {t.name}, {t.age}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ───────── PRICING ───────── */}
        <section ref={pricingRef} className="mt-20 border-t pt-7" style={{ borderColor: RULE }}>
          <h2
            className="max-w-[22ch] font-[family-name:var(--font-display)] text-[27px] font-normal leading-[1.16] tracking-[-0.01em]"
            style={{ color: INK, fontVariationSettings: '"opsz" 44' }}
          >
            {pricing.title}
          </h2>
          <p className="mt-4 max-w-[42ch] text-[14px] leading-[1.7]" style={{ color: SOFT }}>
            {pricing.subtitle}
          </p>

          <div className="mt-9 grid grid-cols-1 gap-5">
            {pricing.plans.map((plan, i) =>
              plan.highlight ? (
                <div key={i} className="p-6" style={{ background: INK, color: PAPER }}>
                  <div className="flex items-baseline justify-between">
                    <p
                      className="font-[family-name:var(--font-display)] text-[16px] italic"
                      style={{ color: "#C9D2FF", fontVariationSettings: '"opsz" 20' }}
                    >
                      {plan.name}
                    </p>
                    <p
                      className="font-[family-name:var(--font-text)] text-[9px] font-medium uppercase tracking-[0.26em]"
                      style={{ color: "#9FA6E6" }}
                    >
                      Recommended
                    </p>
                  </div>
                  <p
                    className="mt-2 font-[family-name:var(--font-display)] text-[34px] font-light leading-none tracking-[-0.01em]"
                    style={{ fontVariationSettings: '"opsz" 60' }}
                  >
                    {plan.price}
                  </p>
                  <p className="mt-2.5 text-[12.5px]" style={{ color: "#B9C2F2" }}>
                    {plan.descriptor}
                  </p>
                  <button
                    onClick={() => onCta(`pricing-${plan.name.toLowerCase()}`)}
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 px-6 py-3.5 text-[14px] font-medium transition hover:opacity-90 active:scale-[0.99]"
                    style={{ background: PAPER, color: INK }}
                  >
                    {plan.ctaLabel}
                    <span>→</span>
                  </button>
                </div>
              ) : (
                <div key={i} className="border p-6" style={{ borderColor: RULE, color: INK }}>
                  <p
                    className="font-[family-name:var(--font-display)] text-[16px] italic"
                    style={{ color: SOFT, fontVariationSettings: '"opsz" 20' }}
                  >
                    {plan.name}
                  </p>
                  <p
                    className="mt-2 font-[family-name:var(--font-display)] text-[34px] font-light leading-none tracking-[-0.01em]"
                    style={{ color: INK, fontVariationSettings: '"opsz" 60' }}
                  >
                    {plan.price}
                  </p>
                  <p className="mt-2.5 text-[12.5px]" style={{ color: SOFT }}>
                    {plan.descriptor}
                  </p>
                  <button
                    onClick={() => onCta(`pricing-${plan.name.toLowerCase()}`)}
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 px-6 py-3.5 text-[14px] font-medium transition hover:-translate-y-[1px] active:translate-y-0"
                    style={{ background: INK, color: PAPER }}
                  >
                    {plan.ctaLabel}
                    <span>→</span>
                  </button>
                </div>
              )
            )}
          </div>

          {/* Included — two-column index, collapses to one on narrowest */}
          <div className="mt-9 border-t pt-6" style={{ borderColor: RULE }}>
            <p
              className="mb-4 font-[family-name:var(--font-text)] text-[10px] font-medium uppercase tracking-[0.3em]"
              style={{ color: MUTE }}
            >
              Everything included
            </p>
            <ul className="ya-cols text-[13.5px]" style={{ color: INK }}>
              {pricing.included.map((feature, i) => (
                <li key={i} className="flex items-baseline gap-2 leading-[1.5]">
                  <span style={{ color: MUTE }}>·</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-6 max-w-[42ch] text-[12px] leading-[1.6]" style={{ color: SOFT }}>
            {pricing.scarcityLine}
          </p>
        </section>

        {/* ───────── FAQ ───────── */}
        <section className="mt-20 border-t pt-7" style={{ borderColor: RULE }}>
          <p
            className="mb-5 font-[family-name:var(--font-text)] text-[10px] font-medium uppercase tracking-[0.32em]"
            style={{ color: MUTE }}
          >
            Questions
          </p>
          <div>
            {faq.map((item, i) => (
              <details key={i} className="group border-b py-4" style={{ borderColor: RULE }}>
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                  <span
                    className="font-[family-name:var(--font-display)] text-[16.5px] font-normal leading-[1.32] tracking-[-0.005em]"
                    style={{ color: INK, fontVariationSettings: '"opsz" 24' }}
                  >
                    {item.q}
                  </span>
                  <span
                    className="mt-1 text-[18px] leading-none transition-transform duration-300 group-open:rotate-45"
                    style={{ color: MUTE }}
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-[46ch] text-[13.5px] leading-[1.7]" style={{ color: SOFT }}>
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* ───────── FINAL CTA ───────── */}
        <section className="mt-20 border-t pt-12 pb-2 text-center" style={{ borderColor: RULE }}>
          <h2
            className="mx-auto max-w-[18ch] font-[family-name:var(--font-display)] text-[30px] font-light leading-[1.12] tracking-[-0.01em]"
            style={{ color: INK, fontVariationSettings: '"opsz" 60' }}
          >
            {finalCta.headline}
          </h2>
          <button
            onClick={() => onCta("final")}
            className="mt-7 inline-flex items-center gap-2 px-9 py-4 text-[14px] font-medium transition hover:-translate-y-[2px] active:translate-y-0"
            style={{ background: INK, color: PAPER }}
          >
            {finalCta.ctaLabel}
            <span>→</span>
          </button>
        </section>

        {/* ───────── FAKE-DOOR ───────── */}
        {showWaitlist && (
          <section id="waitlist" className="mt-14 border p-7" style={{ borderColor: RULE }}>
            {state === "done" ? (
              <div className="text-center">
                <p
                  className="font-[family-name:var(--font-display)] text-[24px] font-light leading-tight"
                  style={{ color: INK, fontVariationSettings: '"opsz" 40' }}
                >
                  {confirmation.title}
                </p>
                <p className="mx-auto mt-4 max-w-[38ch] text-[14px] leading-[1.7]" style={{ color: SOFT }}>
                  {confirmation.body}
                </p>
              </div>
            ) : (
              <>
                <p
                  className="font-[family-name:var(--font-display)] text-[25px] font-light italic leading-[1.12] tracking-[-0.01em]"
                  style={{ color: INK, fontVariationSettings: '"opsz" 44' }}
                >
                  {fakedoor.title}
                </p>
                <p className="mt-3 max-w-[42ch] text-[14px] leading-[1.7]" style={{ color: SOFT }}>
                  {fakedoor.body}
                </p>
                <form onSubmit={submit} className="mt-6 flex flex-col gap-3">
                  <label htmlFor="ya-email" className="sr-only">
                    {fakedoor.emailPlaceholder}
                  </label>
                  <input
                    id="ya-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={fakedoor.emailPlaceholder}
                    className="w-full border bg-white/70 px-5 py-3.5 text-[15px] outline-none focus:border-[#26235A]"
                    style={{ borderColor: RULE, color: INK }}
                  />
                  <button
                    type="submit"
                    disabled={state === "loading"}
                    className="w-full px-6 py-3.5 text-[14px] font-medium transition hover:-translate-y-[1px] active:translate-y-0 disabled:opacity-60"
                    style={{ background: INK, color: PAPER }}
                  >
                    {state === "loading" ? "Reserving…" : fakedoor.submitLabel}
                  </button>
                  {state === "error" && (
                    <p className="text-[12.5px]" style={{ color: "#9F2F6B" }}>
                      Something went wrong. Please try again.
                    </p>
                  )}
                </form>
                <p className="mt-4 text-[11.5px]" style={{ color: MUTE }}>
                  {fakedoor.privacyLine}
                </p>
              </>
            )}
          </section>
        )}

        {/* ───────── FOLIO / FOOTER ───────── */}
        <footer className="mt-20 border-t pt-6" style={{ borderColor: RULE }}>
          <p
            className="font-[family-name:var(--font-display)] text-[15px] italic"
            style={{ color: INK, fontVariationSettings: '"opsz" 20' }}
          >
            {footer.lines[0]}
          </p>
          <p className="mt-4 text-[10px] uppercase tracking-[0.24em]" style={{ color: MUTE }}>
            {footer.lines.slice(1).join("  ·  ")}
          </p>
        </footer>
      </div>
    </main>
  );
}
