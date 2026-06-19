"use client";

import { Space_Grotesk, Space_Mono } from "next/font/google";
import type { DesignProps } from "@/designs/types";
import { useFakeDoor } from "@/designs/shared/useFakeDoor";

// Direction: DENSE BENTO, SHARP 0px CORNERS, MODULAR GRID — read through B's
// SOFT/WELLNESS lens. Brutalist STRUCTURE (rigid 1px-seam grid, telemetry mono
// labels, extreme scale contrast) made tender: indigo is the structural dark,
// lavender/periwinkle the luminous fields. No photography — the page is carried
// by typography + the lavender mesh + crisp modular compartments. Nothing
// floats; every block is anchored to a grid track. Dignified, never military.
//
// Type: Space Grotesk (clean grotesk) builds the structural headers; Space Mono
// gives the grid its quiet telemetry axis (lowercase, not shouty). Both are
// non-variable, so no `axes`.
const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});

const mono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});

// Palette (locked indigo / lavender / periwinkle family).
const INK = "#26235A"; // structural dark
const SOFT = "#5A5690"; // muted purple, secondary text
const SEAM = "#26235A"; // grid seam color (the 1px gridlines)
const FIELD = "#F7F4FF"; // base luminous field
const LAV = "#EBE6FF"; // lavender tile
const PERI = "#D6E4FF"; // periwinkle tile
const MIST = "#F3ECFF"; // pale violet tile

export default function TenderBentoGrid({ content, slug }: DesignProps) {
  const fd = useFakeDoor(slug);
  const { hero, problem, solution, pricing, testimonials, faq, fakedoor, footer } = content;

  return (
    <main
      className={`${grotesk.variable} ${mono.variable} font-[family-name:var(--font-grotesk)] min-h-screen text-[#26235A] antialiased selection:bg-[#C9D2FF] selection:text-[#26235A]`}
      style={
        {
          "--seam": SEAM,
          "--field": FIELD,
          background:
            "linear-gradient(180deg, #F7F4FF 0%, #F3ECFF 100%)",
        } as React.CSSProperties
      }
    >
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .ta-rise { animation: ta-rise .7s cubic-bezier(.16,1,.3,1) both; }
        }
        @keyframes ta-rise {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="mx-auto max-w-md">
        {/* ───────── MASTHEAD (telemetry strip) ───────── */}
        <header
          className="grid grid-cols-[1fr_auto] items-center border-x border-b px-4 py-3"
          style={{ borderColor: "rgba(38,35,90,0.15)", background: FIELD }}
        >
          <span className="font-[family-name:var(--font-grotesk)] text-[16px] font-bold tracking-[-0.02em]">
            {hero.brandLockup}
          </span>
          <span
            className="font-[family-name:var(--font-mono)] text-[10px] lowercase tracking-[0.12em]"
            style={{ color: SOFT }}
          >
            legacy / kept safe
          </span>
        </header>

        {/* ───────── HERO (text-led, modular) ───────── */}
        <section className="border-x" style={{ borderColor: "rgba(38,35,90,0.15)" }}>
          {/* index row */}
          <div
            className="grid grid-cols-3 font-[family-name:var(--font-mono)] text-[10px] lowercase tracking-[0.1em]"
            style={{ color: SOFT }}
          >
            <span className="border-b border-r px-4 py-2.5" style={{ borderColor: "rgba(38,35,90,0.15)" }}>
              01 / for those you love
            </span>
            <span className="border-b border-r px-4 py-2.5" style={{ borderColor: "rgba(38,35,90,0.15)" }}>
              quietly ready
            </span>
            <span className="border-b px-4 py-2.5" style={{ borderColor: "rgba(38,35,90,0.15)" }}>
              when needed
            </span>
          </div>

          <div className="ta-rise px-5 pb-7 pt-8" style={{ background: MIST }}>
            <h1 className="text-balance font-[family-name:var(--font-grotesk)] text-[40px] font-medium leading-[1.02] tracking-[-0.03em]">
              {hero.title}
            </h1>
            <p
              className="mt-5 max-w-[34ch] text-[15px] leading-[1.65]"
              style={{ color: SOFT }}
            >
              {hero.subtitle}
            </p>
          </div>

          <button
            onClick={() => fd.onCta("hero")}
            className="block w-full border-t px-5 py-5 text-left font-[family-name:var(--font-grotesk)] text-[16px] font-medium text-[#F7F4FF] transition-colors"
            style={{ borderColor: "rgba(38,35,90,0.15)", background: INK }}
          >
            <span className="flex items-center justify-between">
              {hero.ctaLabel}
              <span aria-hidden>→</span>
            </span>
          </button>

          <p
            className="border-t px-5 py-3 font-[family-name:var(--font-mono)] text-[11px] lowercase tracking-[0.06em]"
            style={{ borderColor: "rgba(38,35,90,0.15)", color: SOFT, background: FIELD }}
          >
            {hero.reassuranceLine}
          </p>
        </section>

        {/* ───────── PROBLEM ───────── */}
        <section
          className="border-x border-t px-5 py-9"
          style={{ borderColor: "rgba(38,35,90,0.15)", background: LAV }}
        >
          <p
            className="mb-4 font-[family-name:var(--font-mono)] text-[10px] lowercase tracking-[0.16em]"
            style={{ color: SOFT }}
          >
            02 / the quiet problem
          </p>
          <h2 className="text-balance font-[family-name:var(--font-grotesk)] text-[24px] font-medium leading-[1.18] tracking-[-0.02em]">
            {problem.title}
          </h2>
          <p className="mt-4 text-[14.5px] leading-[1.7]" style={{ color: SOFT }}>
            {problem.body}
          </p>
        </section>

        {/* ───────── SOLUTION (3 modular steps) ───────── */}
        <section className="border-x border-t" style={{ borderColor: "rgba(38,35,90,0.15)" }}>
          <div className="px-5 py-6" style={{ background: FIELD }}>
            <p
              className="font-[family-name:var(--font-mono)] text-[10px] lowercase tracking-[0.16em]"
              style={{ color: SOFT }}
            >
              03 / how it works
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-grotesk)] text-[22px] font-medium tracking-[-0.02em]">
              {solution.intro}
            </h2>
          </div>

          {solution.steps.map((s, i) => (
            <article
              key={i}
              className="grid grid-cols-[auto_1fr] gap-x-4 border-t px-5 py-7"
              style={{
                borderColor: "rgba(38,35,90,0.15)",
                background: i === 1 ? PERI : FIELD,
              }}
            >
              <span className="font-[family-name:var(--font-mono)] text-[28px] font-bold leading-none tracking-[-0.02em]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-[family-name:var(--font-grotesk)] text-[17px] font-medium leading-[1.28] tracking-[-0.01em]">
                  {s.title}
                </h3>
                <p className="mt-2.5 text-[14px] leading-[1.65]" style={{ color: SOFT }}>
                  {s.body}
                </p>
              </div>
            </article>
          ))}
        </section>

        {/* ───────── PRICING ───────── */}
        <section
          ref={fd.pricingRef}
          className="border-x border-t"
          style={{ borderColor: "rgba(38,35,90,0.15)" }}
        >
          <div className="px-5 py-9" style={{ background: MIST }}>
            <p
              className="mb-4 font-[family-name:var(--font-mono)] text-[10px] lowercase tracking-[0.16em]"
              style={{ color: SOFT }}
            >
              04 / membership
            </p>
            <h2 className="text-balance font-[family-name:var(--font-grotesk)] text-[24px] font-medium leading-[1.18] tracking-[-0.02em]">
              {pricing.title}
            </h2>
            <p className="mt-4 max-w-[36ch] text-[14px] leading-[1.65]" style={{ color: SOFT }}>
              {pricing.subtitle}
            </p>
          </div>

          {/* plan grid — exactly 2 cells, 1px seam between */}
          <div
            className="grid grid-cols-2 border-t"
            style={{ borderColor: "rgba(38,35,90,0.15)", gap: 1, background: "rgba(38,35,90,0.15)" }}
          >
            {pricing.plans.map((plan, i) =>
              plan.highlight ? (
                <div key={i} className="flex flex-col p-5 text-[#F7F4FF]" style={{ background: INK }}>
                  <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.14em]" style={{ color: "#B9C2F2" }}>
                    most chosen
                  </span>
                  <span className="mt-3 font-[family-name:var(--font-grotesk)] text-[18px] font-medium">
                    {plan.name}
                  </span>
                  <span className="mt-1 font-[family-name:var(--font-grotesk)] text-[26px] font-bold tracking-[-0.02em]">
                    {plan.price}
                  </span>
                  <span className="mt-2 text-[12.5px] leading-[1.45]" style={{ color: "#B9C2F2" }}>
                    {plan.descriptor}
                  </span>
                  <button
                    onClick={() => fd.onCta(`pricing-${plan.name.toLowerCase()}`)}
                    className="mt-5 w-full border px-3 py-3 font-[family-name:var(--font-grotesk)] text-[14px] font-medium"
                    style={{ borderColor: "#F7F4FF", color: INK, background: "#F7F4FF" }}
                  >
                    {plan.ctaLabel}
                  </button>
                </div>
              ) : (
                <div key={i} className="flex flex-col p-5" style={{ background: FIELD }}>
                  <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.14em]" style={{ color: SOFT }}>
                    flexible
                  </span>
                  <span className="mt-3 font-[family-name:var(--font-grotesk)] text-[18px] font-medium">
                    {plan.name}
                  </span>
                  <span className="mt-1 font-[family-name:var(--font-grotesk)] text-[26px] font-bold tracking-[-0.02em]">
                    {plan.price}
                  </span>
                  <span className="mt-2 text-[12.5px] leading-[1.45]" style={{ color: SOFT }}>
                    {plan.descriptor}
                  </span>
                  <button
                    onClick={() => fd.onCta(`pricing-${plan.name.toLowerCase()}`)}
                    className="mt-5 w-full border px-3 py-3 font-[family-name:var(--font-grotesk)] text-[14px] font-medium text-[#F7F4FF]"
                    style={{ borderColor: INK, background: INK }}
                  >
                    {plan.ctaLabel}
                  </button>
                </div>
              )
            )}
          </div>

          {/* included — dense 2-col bento of features, gapless seams */}
          <div className="border-t px-5 pt-6" style={{ borderColor: "rgba(38,35,90,0.15)", background: FIELD }}>
            <p
              className="font-[family-name:var(--font-mono)] text-[10px] lowercase tracking-[0.16em]"
              style={{ color: SOFT }}
            >
              everything included
            </p>
          </div>
          <ul
            className="grid grid-cols-2 border-t"
            style={{ borderColor: "rgba(38,35,90,0.15)", gap: 1, background: "rgba(38,35,90,0.15)" }}
          >
            {pricing.included.map((feature, i) => (
              <li
                key={i}
                className="flex items-start gap-2 p-4 text-[13.5px] leading-[1.4]"
                style={{ background: FIELD }}
              >
                <span aria-hidden style={{ color: INK }}>
                  ✓
                </span>
                {feature}
              </li>
            ))}
          </ul>

          <p
            className="border-t px-5 py-4 font-[family-name:var(--font-mono)] text-[11px] lowercase leading-[1.55] tracking-[0.04em]"
            style={{ borderColor: "rgba(38,35,90,0.15)", color: SOFT, background: FIELD }}
          >
            {pricing.scarcityLine}
          </p>
        </section>

        {/* ───────── TESTIMONIALS ───────── */}
        <section className="border-x border-t" style={{ borderColor: "rgba(38,35,90,0.15)" }}>
          <div className="px-5 py-6" style={{ background: LAV }}>
            <p
              className="font-[family-name:var(--font-mono)] text-[10px] lowercase tracking-[0.16em]"
              style={{ color: SOFT }}
            >
              05 / from those who started
            </p>
          </div>
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="border-t px-5 py-7"
              style={{
                borderColor: "rgba(38,35,90,0.15)",
                background: i === 1 ? PERI : FIELD,
              }}
            >
              <blockquote className="font-[family-name:var(--font-grotesk)] text-[17px] font-medium leading-[1.4] tracking-[-0.01em]">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption
                className="mt-4 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.12em]"
                style={{ color: SOFT }}
              >
                {t.name} / {t.age}
              </figcaption>
            </figure>
          ))}
        </section>

        {/* ───────── FAQ ───────── */}
        <section className="border-x border-t" style={{ borderColor: "rgba(38,35,90,0.15)" }}>
          <div className="px-5 py-6" style={{ background: FIELD }}>
            <p
              className="font-[family-name:var(--font-mono)] text-[10px] lowercase tracking-[0.16em]"
              style={{ color: SOFT }}
            >
              06 / questions
            </p>
          </div>
          {faq.map((item, i) => (
            <details
              key={i}
              className="group border-t px-5 py-5"
              style={{ borderColor: "rgba(38,35,90,0.15)", background: FIELD }}
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                <span className="font-[family-name:var(--font-grotesk)] text-[15.5px] font-medium leading-[1.32] tracking-[-0.01em]">
                  {item.q}
                </span>
                <span
                  aria-hidden
                  className="mt-0.5 font-[family-name:var(--font-mono)] text-[18px] leading-none transition-transform duration-300 group-open:rotate-45"
                  style={{ color: INK }}
                >
                  +
                </span>
              </summary>
              <p className="mt-3.5 text-[14px] leading-[1.65]" style={{ color: SOFT }}>
                {item.a}
              </p>
            </details>
          ))}
        </section>

        {/* ───────── FINAL CTA ───────── */}
        <section
          className="border-x border-t px-5 py-12 text-[#F7F4FF]"
          style={{ borderColor: "rgba(38,35,90,0.15)", background: INK }}
        >
          <p
            className="mb-4 font-[family-name:var(--font-mono)] text-[10px] lowercase tracking-[0.16em]"
            style={{ color: "#B9C2F2" }}
          >
            07 / ready
          </p>
          <h2 className="text-balance font-[family-name:var(--font-grotesk)] text-[30px] font-medium leading-[1.1] tracking-[-0.02em]">
            {content.finalCta.headline}
          </h2>
          <button
            onClick={() => fd.onCta("final")}
            className="mt-7 flex w-full items-center justify-between border px-5 py-4 font-[family-name:var(--font-grotesk)] text-[16px] font-medium"
            style={{ borderColor: "#F7F4FF", background: "#F7F4FF", color: INK }}
          >
            {content.finalCta.ctaLabel}
            <span aria-hidden>→</span>
          </button>
        </section>

        {/* ───────── FAKE-DOOR ───────── */}
        {fd.showWaitlist && (
          <section
            id="waitlist"
            className="border-x border-t px-5 py-10"
            style={{ borderColor: "rgba(38,35,90,0.15)", background: MIST }}
          >
            {fd.state === "done" ? (
              <div>
                <h2 className="font-[family-name:var(--font-grotesk)] text-[24px] font-medium leading-[1.15] tracking-[-0.02em]">
                  {content.confirmation.title}
                </h2>
                <p className="mt-4 max-w-[36ch] text-[14.5px] leading-[1.7]" style={{ color: SOFT }}>
                  {content.confirmation.body}
                </p>
              </div>
            ) : (
              <>
                <p
                  className="font-[family-name:var(--font-mono)] text-[10px] lowercase tracking-[0.16em]"
                  style={{ color: SOFT }}
                >
                  reserve / waitlist
                </p>
                <h2 className="mt-3 font-[family-name:var(--font-grotesk)] text-[26px] font-medium leading-[1.1] tracking-[-0.02em]">
                  {fakedoor.title}
                </h2>
                <p className="mt-3 max-w-[36ch] text-[14.5px] leading-[1.7]" style={{ color: SOFT }}>
                  {fakedoor.body}
                </p>
                <form onSubmit={fd.submit} className="mt-6 flex flex-col">
                  <input
                    type="email"
                    required
                    value={fd.email}
                    onChange={(e) => fd.setEmail(e.target.value)}
                    placeholder={fakedoor.emailPlaceholder}
                    className="w-full border px-4 py-4 text-[15px] focus:outline-none focus:ring-1"
                    style={{ borderColor: "rgba(38,35,90,0.3)", background: FIELD, color: INK, borderRadius: 0 }}
                  />
                  <button
                    type="submit"
                    disabled={fd.state === "loading"}
                    className="mt-2 w-full border px-4 py-4 font-[family-name:var(--font-grotesk)] text-[15px] font-medium text-[#F7F4FF] disabled:opacity-60"
                    style={{ borderColor: INK, background: INK, borderRadius: 0 }}
                  >
                    {fd.state === "loading" ? "sending…" : fakedoor.submitLabel}
                  </button>
                  {fd.state === "error" && (
                    <p className="mt-3 font-[family-name:var(--font-mono)] text-[12px] lowercase" style={{ color: "#8A5BD8" }}>
                      something went wrong. please try again.
                    </p>
                  )}
                </form>
                <p
                  className="mt-4 font-[family-name:var(--font-mono)] text-[11px] lowercase tracking-[0.04em]"
                  style={{ color: SOFT }}
                >
                  {fakedoor.privacyLine}
                </p>
              </>
            )}
          </section>
        )}

        {/* ───────── FOOTER ───────── */}
        <footer
          className="border-x border-b border-t px-5 py-8"
          style={{ borderColor: "rgba(38,35,90,0.15)", background: FIELD }}
        >
          <p className="font-[family-name:var(--font-grotesk)] text-[15px] font-medium leading-[1.4] tracking-[-0.01em]">
            {footer.lines[0]}
          </p>
          <p
            className="mt-4 font-[family-name:var(--font-mono)] text-[11px] lowercase tracking-[0.08em]"
            style={{ color: SOFT }}
          >
            {footer.lines.slice(1).join("  /  ")}
          </p>
        </footer>
      </div>

      {/* Sticky CTA — flush, sharp, anchored bar */}
      <div className="sticky bottom-0 z-40 mx-auto max-w-md">
        <button
          onClick={() => fd.onCta("sticky")}
          className="flex w-full items-center justify-between border-t px-5 py-4 font-[family-name:var(--font-grotesk)] text-[15px] font-medium text-[#F7F4FF]"
          style={{ borderColor: "rgba(247,244,255,0.2)", background: INK }}
        >
          {hero.ctaLabel}
          <span aria-hidden>→</span>
        </button>
      </div>
    </main>
  );
}
