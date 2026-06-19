"use client";

import Image from "next/image";
import { Big_Shoulders, Fraunces, Spline_Sans_Mono } from "next/font/google";
import type { DesignProps } from "@/designs/types";
import { useFakeDoor } from "@/designs/shared/useFakeDoor";

// ───────────────────────────────────────────────────────────────────────────
// Direction: DENSE BENTO. Sharp 0px corners, hairline-ruled modular grid,
// maximum information density — the page reads like a beautifully typeset
// archival ledger. The warmth lives in the palette (deep forest / electric
// lime / cream / sage) and the type, never in roundness. Big Shoulders is the
// industrial-condensed display voice (echoing the baked-in wordmark); Spline
// Sans Mono supplies the structural field-labels and figures that make the
// grid feel like instrumentation; Fraunces carries the dignified, human body
// voice for anything meant to be *read* rather than scanned.
// ───────────────────────────────────────────────────────────────────────────

const display = Big_Shoulders({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const mono = Spline_Sans_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

// Palette (locked family, ~one notch allowed)
const FOREST = "#16271F";
const FOREST_2 = "#1D3328"; // one notch up for cell separation
const LIME = "#C8F169";
const CREAM = "#EFEAD8";
const SAGE = "#9DB39A";

export default function DenseBentoDesign({ content, slug }: DesignProps) {
  const fd = useFakeDoor(slug);
  const { hero, problem, solution, pricing, testimonials, faq, fakedoor, footer } =
    content;

  // Reusable hairline + mono-label helpers expressed inline for self-containment.
  const hair = `${SAGE}33`; // 20% sage hairline on forest

  return (
    <main
      className={`${display.variable} ${fraunces.variable} ${mono.variable} font-[family-name:var(--font-fraunces)] min-h-screen w-full antialiased`}
      style={{ backgroundColor: FOREST, color: CREAM }}
    >
      <div className="mx-auto max-w-md px-3 pb-28 pt-3">
        {/* ───────── TOP BAR ───────── */}
        <header
          className="flex items-stretch justify-between border text-[11px]"
          style={{ borderColor: hair }}
        >
          <span
            className="flex items-center gap-2 border-r px-3 py-2 font-[family-name:var(--font-mono)] uppercase tracking-[0.18em]"
            style={{ borderColor: hair, color: CREAM }}
          >
            <span
              className="inline-block h-2 w-2"
              style={{ backgroundColor: LIME }}
            />
            {hero.brandLockup}
          </span>
          <span
            className="flex items-center px-3 py-2 font-[family-name:var(--font-mono)] uppercase tracking-[0.18em]"
            style={{ color: SAGE }}
          >
            est. legacy / v.01
          </span>
        </header>

        {/* ───────── HERO BENTO ───────── */}
        <section className="mt-2 grid grid-cols-3 gap-2">
          {/* Photo tile (wordmark already baked in — no overlay) */}
          <div
            className="relative col-span-1 row-span-2 border"
            style={{ borderColor: hair }}
          >
            <div className="relative h-full min-h-[260px] w-full">
              <Image
                src="/designs/c/hero.jpeg"
                alt="You Alive — notify your loved ones when you don't reply"
                fill
                priority
                sizes="(max-width: 768px) 40vw, 180px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Headline tile */}
          <div
            className="col-span-2 border px-4 py-4"
            style={{ borderColor: hair, backgroundColor: FOREST_2 }}
          >
            <p
              className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.22em]"
              style={{ color: SAGE }}
            >
              [ 01 — the kindest handover ]
            </p>
            <h1
              className="mt-3 font-[family-name:var(--font-display)] text-[40px] font-[700] uppercase leading-[0.92] tracking-[-0.01em]"
              style={{ color: CREAM }}
            >
              {hero.title}
            </h1>
          </div>

          {/* Subtitle tile */}
          <div
            className="col-span-2 border px-4 py-4"
            style={{ borderColor: hair }}
          >
            <p
              className="text-[14px] leading-[1.5]"
              style={{ color: SAGE }}
            >
              {hero.subtitle}
            </p>
            <button
              onClick={() => fd.onCta("hero")}
              className="mt-4 flex w-full items-center justify-between px-4 py-3 font-[family-name:var(--font-mono)] text-[13px] font-[600] uppercase tracking-[0.14em] transition-colors"
              style={{ backgroundColor: LIME, color: FOREST }}
            >
              {hero.ctaLabel}
              <span aria-hidden>→</span>
            </button>
          </div>
        </section>

        {/* Reassurance ticker cell */}
        <div
          className="mt-2 flex items-center gap-3 border px-4 py-3"
          style={{ borderColor: hair, backgroundColor: FOREST_2 }}
        >
          <span
            className="font-[family-name:var(--font-display)] text-[26px] font-[800] leading-none"
            style={{ color: LIME }}
          >
            2,400+
          </span>
          <span
            className="font-[family-name:var(--font-mono)] text-[11px] leading-[1.4] uppercase tracking-[0.1em]"
            style={{ color: SAGE }}
          >
            {hero.reassuranceLine}
          </span>
        </div>

        {/* ───────── PROBLEM ───────── */}
        <section
          className="mt-2 border px-4 py-6"
          style={{ borderColor: hair }}
        >
          <p
            className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.22em]"
            style={{ color: SAGE }}
          >
            [ 02 — the quiet problem ]
          </p>
          <h2
            className="mt-3 font-[family-name:var(--font-display)] text-[27px] font-[600] uppercase leading-[1.0] tracking-[-0.005em]"
            style={{ color: LIME }}
          >
            {problem.title}
          </h2>
          <p className="mt-4 text-[14px] leading-[1.6]" style={{ color: CREAM }}>
            {problem.body}
          </p>
        </section>

        {/* ───────── SOLUTION (bento steps) ───────── */}
        <section className="mt-2">
          <div
            className="flex items-center justify-between border px-4 py-3"
            style={{ borderColor: hair, backgroundColor: LIME, color: FOREST }}
          >
            <p className="font-[family-name:var(--font-display)] text-[20px] font-[700] uppercase leading-none">
              {solution.intro}
            </p>
            <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.18em]">
              03 · 3 steps
            </span>
          </div>

          <div className="mt-2 grid gap-2">
            {solution.steps.map((s, i) => (
              <article
                key={i}
                className="grid grid-cols-[auto_1fr] border"
                style={{ borderColor: hair }}
              >
                <div
                  className="flex items-start justify-center border-r px-3 py-4 font-[family-name:var(--font-display)] text-[34px] font-[800] leading-none"
                  style={{ borderColor: hair, color: LIME }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="px-4 py-4">
                  <h3
                    className="font-[family-name:var(--font-fraunces)] text-[16px] font-[600] leading-[1.25]"
                    style={{ color: CREAM }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="mt-2 text-[13px] leading-[1.55]"
                    style={{ color: SAGE }}
                  >
                    {s.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ───────── PRICING ───────── */}
        <section ref={fd.pricingRef} className="mt-2">
          <div
            className="border px-4 py-6"
            style={{ borderColor: hair, backgroundColor: FOREST_2 }}
          >
            <p
              className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.22em]"
              style={{ color: SAGE }}
            >
              [ 04 — membership ]
            </p>
            <h2
              className="mt-3 font-[family-name:var(--font-display)] text-[27px] font-[600] uppercase leading-[1.0]"
              style={{ color: LIME }}
            >
              {pricing.title}
            </h2>
            <p className="mt-3 text-[13.5px] leading-[1.55]" style={{ color: CREAM }}>
              {pricing.subtitle}
            </p>
          </div>

          {/* Plan cells */}
          <div className="mt-2 grid grid-cols-2 gap-2">
            {pricing.plans.map((plan, i) => {
              const on = plan.highlight;
              return (
                <div
                  key={i}
                  className="relative flex flex-col border px-4 py-5"
                  style={{
                    borderColor: on ? LIME : hair,
                    backgroundColor: on ? LIME : "transparent",
                    color: on ? FOREST : CREAM,
                  }}
                >
                  {on && (
                    <span
                      className="absolute right-0 top-0 px-2 py-1 font-[family-name:var(--font-mono)] text-[9px] uppercase tracking-[0.14em]"
                      style={{ backgroundColor: FOREST, color: LIME }}
                    >
                      pick
                    </span>
                  )}
                  <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.18em]">
                    {plan.name}
                  </p>
                  <p className="mt-2 font-[family-name:var(--font-display)] text-[28px] font-[800] leading-none">
                    {plan.price}
                  </p>
                  <p
                    className="mt-2 text-[11.5px] leading-[1.35]"
                    style={{ color: on ? FOREST : SAGE }}
                  >
                    {plan.descriptor}
                  </p>
                  <button
                    onClick={() => fd.onCta(`pricing-${plan.name.toLowerCase()}`)}
                    className="mt-4 w-full border px-2 py-2.5 font-[family-name:var(--font-mono)] text-[11px] font-[600] uppercase tracking-[0.1em] transition-colors"
                    style={{
                      borderColor: on ? FOREST : LIME,
                      backgroundColor: on ? FOREST : "transparent",
                      color: on ? LIME : CREAM,
                    }}
                  >
                    {plan.ctaLabel}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Included — dense feature grid */}
          <div className="mt-2 border" style={{ borderColor: hair }}>
            <p
              className="border-b px-4 py-2 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.22em]"
              style={{ borderColor: hair, color: SAGE }}
            >
              everything included
            </p>
            <ul className="grid grid-cols-2">
              {pricing.included.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 border-b border-r px-3 py-2.5 text-[12.5px]"
                  style={{
                    borderColor: hair,
                    color: CREAM,
                  }}
                >
                  <span
                    aria-hidden
                    className="font-[family-name:var(--font-mono)] text-[12px]"
                    style={{ color: LIME }}
                  >
                    +
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <p
            className="mt-2 border px-4 py-3 font-[family-name:var(--font-mono)] text-[11px] leading-[1.5] tracking-[0.04em]"
            style={{ borderColor: hair, color: SAGE }}
          >
            {pricing.scarcityLine}
          </p>
        </section>

        {/* ───────── TESTIMONIALS ───────── */}
        <section className="mt-2">
          <div
            className="border-x border-t px-4 py-3 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.22em]"
            style={{ borderColor: hair, color: SAGE }}
          >
            [ 05 — from those who started ]
          </div>
          <div className="grid">
            {testimonials.map((t, i) => (
              <figure
                key={i}
                className="border-x border-t px-4 py-5 last:border-b"
                style={{
                  borderColor: hair,
                  backgroundColor: i % 2 === 1 ? FOREST_2 : "transparent",
                }}
              >
                <blockquote
                  className="font-[family-name:var(--font-fraunces)] text-[16px] italic leading-[1.45]"
                  style={{ color: CREAM }}
                >
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption
                  className="mt-3 flex items-center gap-2 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.16em]"
                  style={{ color: SAGE }}
                >
                  <span
                    className="inline-block h-1.5 w-1.5"
                    style={{ backgroundColor: LIME }}
                  />
                  {t.name} · {t.age}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ───────── FAQ ───────── */}
        <section className="mt-2">
          <div
            className="border-x border-t px-4 py-3 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.22em]"
            style={{ borderColor: hair, color: SAGE }}
          >
            [ 06 — questions ]
          </div>
          <div className="grid">
            {faq.map((item, i) => (
              <details
                key={i}
                className="group border-x border-t px-4 py-3 last:border-b"
                style={{ borderColor: hair }}
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-3">
                  <span
                    className="font-[family-name:var(--font-display)] text-[17px] font-[600] uppercase leading-[1.05]"
                    style={{ color: CREAM }}
                  >
                    {item.q}
                  </span>
                  <span
                    className="mt-0.5 font-[family-name:var(--font-mono)] text-[16px] leading-none transition-transform duration-200 group-open:rotate-45"
                    style={{ color: LIME }}
                  >
                    +
                  </span>
                </summary>
                <p
                  className="mt-3 text-[13px] leading-[1.6]"
                  style={{ color: SAGE }}
                >
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* ───────── FINAL CTA ───────── */}
        <section
          className="mt-2 border px-5 py-9 text-center"
          style={{ borderColor: LIME, backgroundColor: LIME, color: FOREST }}
        >
          <h2 className="font-[family-name:var(--font-display)] text-[34px] font-[800] uppercase leading-[0.95]">
            {content.finalCta.headline}
          </h2>
          <button
            onClick={() => fd.onCta("final")}
            className="mt-5 inline-flex w-full items-center justify-between px-5 py-3.5 font-[family-name:var(--font-mono)] text-[13px] font-[600] uppercase tracking-[0.14em]"
            style={{ backgroundColor: FOREST, color: LIME }}
          >
            {content.finalCta.ctaLabel}
            <span aria-hidden>→</span>
          </button>
        </section>

        {/* ───────── FAKE-DOOR ───────── */}
        {fd.showWaitlist && (
          <section
            id="waitlist"
            className="mt-2 border px-4 py-7"
            style={{ borderColor: hair, backgroundColor: FOREST_2 }}
          >
            {fd.state === "done" ? (
              <div>
                <p
                  className="font-[family-name:var(--font-display)] text-[26px] font-[700] uppercase leading-none"
                  style={{ color: LIME }}
                >
                  {content.confirmation.title}
                </p>
                <p
                  className="mt-3 text-[14px] leading-[1.6]"
                  style={{ color: CREAM }}
                >
                  {content.confirmation.body}
                </p>
              </div>
            ) : (
              <>
                <p
                  className="font-[family-name:var(--font-display)] text-[28px] font-[800] uppercase leading-none"
                  style={{ color: LIME }}
                >
                  {fakedoor.title}
                </p>
                <p
                  className="mt-3 text-[13.5px] leading-[1.55]"
                  style={{ color: CREAM }}
                >
                  {fakedoor.body}
                </p>
                <form onSubmit={fd.submit} className="mt-5 grid gap-2">
                  <input
                    type="email"
                    required
                    value={fd.email}
                    onChange={(e) => fd.setEmail(e.target.value)}
                    placeholder={fakedoor.emailPlaceholder}
                    className="w-full border px-4 py-3 font-[family-name:var(--font-mono)] text-[14px] outline-none placeholder:text-[#9DB39A]/70 focus:border-[var(--lime)]"
                    style={
                      {
                        borderColor: hair,
                        backgroundColor: FOREST,
                        color: CREAM,
                        ["--lime" as string]: LIME,
                      } as React.CSSProperties
                    }
                  />
                  <button
                    type="submit"
                    disabled={fd.state === "loading"}
                    className="w-full px-4 py-3 font-[family-name:var(--font-mono)] text-[13px] font-[600] uppercase tracking-[0.14em] disabled:opacity-50"
                    style={{ backgroundColor: LIME, color: FOREST }}
                  >
                    {fd.state === "loading" ? "..." : fakedoor.submitLabel}
                  </button>
                  {fd.state === "error" && (
                    <p
                      className="font-[family-name:var(--font-mono)] text-[12px] uppercase tracking-[0.1em]"
                      style={{ color: "#E8B4A0" }}
                    >
                      Something went wrong. Try again.
                    </p>
                  )}
                </form>
                <p
                  className="mt-4 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.14em]"
                  style={{ color: SAGE }}
                >
                  {fakedoor.privacyLine}
                </p>
              </>
            )}
          </section>
        )}

        {/* ───────── FOOTER ───────── */}
        <footer
          className="mt-2 border px-4 py-5"
          style={{ borderColor: hair }}
        >
          <p
            className="font-[family-name:var(--font-fraunces)] text-[14px] italic leading-[1.4]"
            style={{ color: CREAM }}
          >
            {footer.lines[0]}
          </p>
          <p
            className="mt-3 flex flex-wrap gap-x-3 gap-y-1 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.16em]"
            style={{ color: SAGE }}
          >
            {footer.lines.slice(1).map((line, i) => (
              <span key={i}>{line}</span>
            ))}
          </p>
        </footer>
      </div>

      {/* Sticky CTA bar */}
      <div
        className="fixed inset-x-0 bottom-0 z-40 border-t"
        style={{ borderColor: hair, backgroundColor: FOREST }}
      >
        <div className="mx-auto max-w-md px-3 py-2.5">
          <button
            onClick={() => fd.onCta("sticky")}
            className="flex w-full items-center justify-between px-4 py-3 font-[family-name:var(--font-mono)] text-[13px] font-[600] uppercase tracking-[0.14em]"
            style={{ backgroundColor: LIME, color: FOREST }}
          >
            {hero.ctaLabel}
            <span aria-hidden>→</span>
          </button>
        </div>
      </div>
    </main>
  );
}
