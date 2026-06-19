"use client";

import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import type { DesignProps } from "@/designs/types";
import { useFakeDoor } from "@/designs/shared/useFakeDoor";

// Direction: SWISS / INTERNATIONAL STYLE — flat and light.
// Strict modular grid, small precise typography, generous air, zero shadows,
// zero gradients, fully flat lavender/indigo color blocks (no mesh — flatness
// is the point). Indigo is the ink; one accent intent locked page-wide. A
// precise grotesk (Space Grotesk) carries headlines on the grid; a mono
// (IBM Plex Mono) handles the modular coordinate labels, numerals and meta.
// No photography, no shadows, no gradients, no rounded pills on containers.
const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

// Palette (locked indigo / lavender family, flat blocks)
const INK = "#26235A"; // primary dark text / accent
const SOFT = "#5A5690"; // secondary
const LAV = "#EBE6FF"; // flat lavender block
const LAV_2 = "#F3ECFF"; // lighter block
const PAPER = "#F7F4FF"; // canvas
const RULE = "rgba(38,35,90,0.16)"; // hairline rule

export default function SwissFlatLavender({ content, slug }: DesignProps) {
  const fd = useFakeDoor(slug);
  const {
    hero,
    problem,
    solution,
    pricing,
    testimonials,
    faq,
    fakedoor,
    footer,
  } = content;

  // Small grid-label helper kept inline; the eyebrow/label budget is restrained.
  const label = (s: string) => (
    <span
      className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.22em]"
      style={{ color: SOFT }}
    >
      {s}
    </span>
  );

  return (
    <main
      className={`${grotesk.variable} ${mono.variable} font-[family-name:var(--font-grotesk)] min-h-screen antialiased`}
      style={{ background: PAPER, color: INK }}
    >
      <div className="mx-auto max-w-md">
        {/* ───────── NAV ───────── */}
        <header
          className="flex items-center justify-between border-b px-6 py-5"
          style={{ borderColor: RULE }}
        >
          <span className="text-[15px] font-medium tracking-[-0.01em]">
            {hero.brandLockup}
          </span>
          {label("01 / Legacy")}
        </header>

        {/* ───────── HERO ───────── */}
        <section
          className="border-b px-6 pt-16 pb-14"
          style={{ borderColor: RULE }}
        >
          <div className="grid grid-cols-12 gap-x-4">
            <div className="col-span-3">{label("A.01")}</div>
            <div className="col-span-9">
              <h1 className="text-[34px] font-medium leading-[1.04] tracking-[-0.02em]">
                {hero.title}
              </h1>
              <p
                className="mt-6 max-w-[34ch] text-[15px] leading-[1.6]"
                style={{ color: SOFT }}
              >
                {hero.subtitle}
              </p>
              <button
                onClick={() => fd.onCta("hero")}
                className="mt-9 inline-flex items-center gap-3 px-7 py-3.5 text-[14px] font-medium transition-transform duration-200 active:scale-[0.98]"
                style={{ background: INK, color: PAPER }}
              >
                {hero.ctaLabel}
                <span aria-hidden>→</span>
              </button>
              <p
                className="mt-6 font-[family-name:var(--font-mono)] text-[11px] tracking-[0.02em]"
                style={{ color: SOFT }}
              >
                {hero.reassuranceLine}
              </p>
            </div>
          </div>
        </section>

        {/* ───────── PROBLEM ───────── */}
        <section
          className="border-b px-6 py-14"
          style={{ borderColor: RULE, background: LAV_2 }}
        >
          <div className="grid grid-cols-12 gap-x-4">
            <div className="col-span-3">{label("A.02")}</div>
            <div className="col-span-9">
              <h2 className="text-[23px] font-medium leading-[1.2] tracking-[-0.01em]">
                {problem.title}
              </h2>
              <p
                className="mt-5 text-[14.5px] leading-[1.65]"
                style={{ color: SOFT }}
              >
                {problem.body}
              </p>
            </div>
          </div>
        </section>

        {/* ───────── SOLUTION ───────── */}
        <section className="border-b px-6 py-14" style={{ borderColor: RULE }}>
          <div className="grid grid-cols-12 gap-x-4">
            <div className="col-span-3">{label("A.03")}</div>
            <div className="col-span-9">
              <h2 className="text-[19px] font-medium tracking-[-0.01em]">
                {solution.intro}
              </h2>
            </div>
          </div>

          <ol className="mt-10">
            {solution.steps.map((s, i) => (
              <li
                key={i}
                className="grid grid-cols-12 gap-x-4 border-t py-7"
                style={{ borderColor: RULE }}
              >
                <div className="col-span-3">
                  <span
                    className="font-[family-name:var(--font-mono)] text-[13px]"
                    style={{ color: INK }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="col-span-9">
                  <h3 className="text-[16px] font-medium leading-[1.3] tracking-[-0.01em]">
                    {s.title}
                  </h3>
                  <p
                    className="mt-3 text-[14px] leading-[1.65]"
                    style={{ color: SOFT }}
                  >
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* ───────── PRICING ───────── */}
        <section
          ref={fd.pricingRef}
          className="border-b px-6 py-14"
          style={{ borderColor: RULE }}
        >
          <div className="grid grid-cols-12 gap-x-4">
            <div className="col-span-3">{label("B.01")}</div>
            <div className="col-span-9">
              <h2 className="text-[23px] font-medium leading-[1.2] tracking-[-0.01em]">
                {pricing.title}
              </h2>
              <p
                className="mt-5 text-[14.5px] leading-[1.65]"
                style={{ color: SOFT }}
              >
                {pricing.subtitle}
              </p>
            </div>
          </div>

          {/* plans — flat blocks, highlight via inverted indigo fill */}
          <div className="mt-10 grid grid-cols-1 gap-px" style={{ background: RULE }}>
            {pricing.plans.map((plan, i) => {
              const hi = plan.highlight;
              return (
                <div
                  key={i}
                  className="flex items-end justify-between px-6 py-7"
                  style={{
                    background: hi ? INK : LAV,
                    color: hi ? PAPER : INK,
                  }}
                >
                  <div>
                    <p className="text-[13px] font-medium uppercase tracking-[0.08em]">
                      {plan.name}
                    </p>
                    <p className="mt-2 text-[26px] font-medium tracking-[-0.02em]">
                      {plan.price}
                    </p>
                    <p
                      className="mt-1 font-[family-name:var(--font-mono)] text-[11px]"
                      style={{ color: hi ? "#C9C4F2" : SOFT }}
                    >
                      {plan.descriptor}
                    </p>
                  </div>
                  <button
                    onClick={() =>
                      fd.onCta(`pricing-${plan.name.toLowerCase()}`)
                    }
                    className="px-5 py-3 text-[13px] font-medium transition-transform duration-200 active:scale-[0.98]"
                    style={{
                      background: hi ? PAPER : INK,
                      color: hi ? INK : PAPER,
                    }}
                  >
                    {plan.ctaLabel}
                  </button>
                </div>
              );
            })}
          </div>

          {/* included — strict two-column modular list */}
          <div className="mt-10 border-t pt-8" style={{ borderColor: RULE }}>
            {label("Included")}
            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3">
              {pricing.included.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-baseline gap-2 text-[13.5px] leading-[1.3]"
                >
                  <span
                    aria-hidden
                    className="font-[family-name:var(--font-mono)] text-[11px]"
                    style={{ color: SOFT }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <p
            className="mt-8 font-[family-name:var(--font-mono)] text-[11px] leading-[1.6]"
            style={{ color: SOFT }}
          >
            {pricing.scarcityLine}
          </p>
        </section>

        {/* ───────── TESTIMONIALS ───────── */}
        <section
          className="border-b px-6 py-14"
          style={{ borderColor: RULE, background: LAV_2 }}
        >
          <div className="grid grid-cols-12 gap-x-4">
            <div className="col-span-3">{label("C.01")}</div>
            <div className="col-span-9">
              {testimonials.map((t, i) => (
                <figure
                  key={i}
                  className={i > 0 ? "mt-7 border-t pt-7" : ""}
                  style={i > 0 ? { borderColor: RULE } : undefined}
                >
                  <blockquote className="text-[16px] font-medium leading-[1.4] tracking-[-0.01em]">
                    {t.quote}
                  </blockquote>
                  <figcaption
                    className="mt-3 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.12em]"
                    style={{ color: SOFT }}
                  >
                    {t.name} / {t.age}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ───────── FAQ ───────── */}
        <section className="border-b px-6 py-14" style={{ borderColor: RULE }}>
          <div className="grid grid-cols-12 gap-x-4">
            <div className="col-span-3">{label("C.02")}</div>
            <div className="col-span-9">
              {faq.map((item, i) => (
                <details
                  key={i}
                  className="group border-t py-4"
                  style={{ borderColor: RULE }}
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                    <span className="text-[15px] font-medium leading-[1.35] tracking-[-0.01em]">
                      {item.q}
                    </span>
                    <span
                      aria-hidden
                      className="mt-0.5 font-[family-name:var(--font-mono)] text-[16px] leading-none transition-transform duration-200 group-open:rotate-45"
                      style={{ color: INK }}
                    >
                      +
                    </span>
                  </summary>
                  <p
                    className="mt-4 text-[13.5px] leading-[1.65]"
                    style={{ color: SOFT }}
                  >
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ───────── FINAL CTA ───────── */}
        <section className="px-6 py-16" style={{ background: INK, color: PAPER }}>
          <div className="grid grid-cols-12 gap-x-4">
            <div className="col-span-3">
              <span
                className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.22em]"
                style={{ color: "#C9C4F2" }}
              >
                D.01
              </span>
            </div>
            <div className="col-span-9">
              <h2 className="text-[28px] font-medium leading-[1.08] tracking-[-0.02em]">
                {content.finalCta.headline}
              </h2>
              <button
                onClick={() => fd.onCta("final")}
                className="mt-8 inline-flex items-center gap-3 px-7 py-3.5 text-[14px] font-medium transition-transform duration-200 active:scale-[0.98]"
                style={{ background: PAPER, color: INK }}
              >
                {content.finalCta.ctaLabel}
                <span aria-hidden>→</span>
              </button>
            </div>
          </div>
        </section>

        {/* ───────── FAKE-DOOR ───────── */}
        {fd.showWaitlist && (
          <section
            id="waitlist"
            className="border-b px-6 py-14"
            style={{ borderColor: RULE, background: LAV }}
          >
            {fd.state === "done" ? (
              <div className="grid grid-cols-12 gap-x-4">
                <div className="col-span-3">{label("E.01")}</div>
                <div className="col-span-9">
                  <h2 className="text-[22px] font-medium leading-[1.15] tracking-[-0.01em]">
                    {content.confirmation.title}
                  </h2>
                  <p
                    className="mt-4 text-[14px] leading-[1.65]"
                    style={{ color: SOFT }}
                  >
                    {content.confirmation.body}
                  </p>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-12 gap-x-4">
                <div className="col-span-3">{label("E.01")}</div>
                <div className="col-span-9">
                  <h2 className="text-[22px] font-medium leading-[1.15] tracking-[-0.01em]">
                    {fakedoor.title}
                  </h2>
                  <p
                    className="mt-4 text-[14px] leading-[1.65]"
                    style={{ color: SOFT }}
                  >
                    {fakedoor.body}
                  </p>
                  <form onSubmit={fd.submit} className="mt-7 flex flex-col gap-3">
                    <label
                      className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.18em]"
                      style={{ color: SOFT }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={fd.email}
                      onChange={(e) => fd.setEmail(e.target.value)}
                      placeholder={fakedoor.emailPlaceholder}
                      className="w-full border bg-white px-4 py-3.5 text-[14px] focus:outline-none focus:ring-1"
                      style={{ borderColor: INK, color: INK }}
                    />
                    <button
                      type="submit"
                      disabled={fd.state === "loading"}
                      className="w-full px-6 py-3.5 text-[14px] font-medium transition-transform duration-200 active:scale-[0.98] disabled:opacity-60"
                      style={{ background: INK, color: PAPER }}
                    >
                      {fd.state === "loading" ? "Sending…" : fakedoor.submitLabel}
                    </button>
                    {fd.state === "error" && (
                      <p
                        className="font-[family-name:var(--font-mono)] text-[12px]"
                        style={{ color: INK }}
                      >
                        Something went wrong. Please try again.
                      </p>
                    )}
                  </form>
                  <p
                    className="mt-5 font-[family-name:var(--font-mono)] text-[11px]"
                    style={{ color: SOFT }}
                  >
                    {fakedoor.privacyLine}
                  </p>
                </div>
              </div>
            )}
          </section>
        )}

        {/* ───────── FOOTER ───────── */}
        <footer
          className="px-6 py-10"
          style={{ borderTop: `1px solid ${RULE}` }}
        >
          <p className="text-[13px] leading-[1.5]">{footer.lines[0]}</p>
          <p
            className="mt-4 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.16em]"
            style={{ color: SOFT }}
          >
            {footer.lines.slice(1).join("  ·  ")}
          </p>
        </footer>
      </div>
    </main>
  );
}
