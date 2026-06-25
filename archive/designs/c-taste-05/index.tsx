"use client";

import { Bricolage_Grotesque, Newsreader, Spline_Sans_Mono } from "next/font/google";
import type { DesignProps } from "@/designs/types";
import { useFakeDoor } from "@/designs/shared/useFakeDoor";

// Variant C — "Typo-driven."
// No photo. Type IS the design. Oversized Bricolage Grotesque (a wonky,
// characterful grotesque) carries the whole page on a deep-forest canvas;
// lime is the single locked accent; Newsreader italic is the dignified
// emphasis voice for full phrases (never a single injected word); Spline
// Sans Mono is the quiet meta/label voice. Dramatic scale contrast does the
// hierarchy work — minimal chrome, no cards-everywhere, one theme throughout.
const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  axes: ["opsz"],
  display: "swap",
});

const serif = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  style: ["normal", "italic"],
  axes: ["opsz"],
  display: "swap",
});

const mono = Spline_Sans_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const FOREST = "#16271F";
const LIME = "#C8F169";
const CREAM = "#EFEAD8";

export default function TypoDrivenDesign({ content, slug }: DesignProps) {
  const fd = useFakeDoor(slug);
  const { hero, problem, solution, pricing, testimonials, faq, finalCta, fakedoor, confirmation, footer } = content;

  return (
    <main
      className={`${display.variable} ${serif.variable} ${mono.variable} font-[family-name:var(--font-display)] min-h-screen antialiased`}
      style={{ backgroundColor: FOREST, color: CREAM }}
    >
      <style>{`
        @keyframes ya-rise { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
        .ya-rise { animation: ya-rise 0.7s cubic-bezier(0.16,1,0.3,1) both; }
        @media (prefers-reduced-motion: reduce) {
          .ya-rise { animation: none !important; }
          .ya-press { transition: none !important; }
        }
        .ya-press { transition: transform 0.15s ease; }
        .ya-press:active { transform: scale(0.985); }
      `}</style>

      <div className="mx-auto max-w-md px-5 pb-32">
        {/* ───────── WORDMARK ───────── */}
        <header className="flex items-center justify-between pt-6">
          <span className="font-[family-name:var(--font-mono)] text-[13px] tracking-[-0.01em]">
            {hero.brandLockup}
          </span>
          <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.22em]" style={{ color: "rgba(239,234,216,0.5)" }}>
            Legacy
          </span>
        </header>

        {/* ───────── HERO (≤4 elements: wordmark above, title, subtitle, CTA) ───────── */}
        <section className="ya-rise pt-14">
          <h1 className="font-[family-name:var(--font-display)] font-extrabold leading-[0.88] tracking-[-0.04em] text-[clamp(3.5rem,17vw,5.5rem)]">
            Don&apos;t leave
            <br />
            your loved
            <br />
            <span style={{ color: LIME }}>ones</span>{" "}
            <span className="font-[family-name:var(--font-serif)] font-light italic leading-[1.1] tracking-[-0.01em]" style={{ color: CREAM }}>
              guessing.
            </span>
          </h1>

          <p className="mt-8 max-w-[34ch] text-[17px] leading-[1.55]" style={{ color: "rgba(239,234,216,0.72)" }}>
            {hero.subtitle}
          </p>

          <button
            onClick={() => fd.onCta("hero")}
            className="ya-press mt-9 inline-flex w-full items-center justify-between gap-3 px-7 py-5 text-[18px] font-semibold"
            style={{ backgroundColor: LIME, color: FOREST, borderRadius: 4 }}
          >
            {hero.ctaLabel}
            <span aria-hidden>→</span>
          </button>
        </section>

        <p className="mt-6 font-[family-name:var(--font-mono)] text-[12px] tracking-[0.01em]" style={{ color: "rgba(200,241,105,0.85)" }}>
          {hero.reassuranceLine}
        </p>

        {/* ───────── PROBLEM (display scale carries it, no eyebrow) ───────── */}
        <section className="mt-32">
          <h2 className="font-[family-name:var(--font-display)] font-bold leading-[1.0] tracking-[-0.03em] text-[clamp(2rem,9vw,3rem)]">
            {problem.title}
          </h2>
          <p className="mt-7 max-w-[40ch] text-[16px] leading-[1.6]" style={{ color: "rgba(239,234,216,0.7)" }}>
            {problem.body}
          </p>
        </section>

        {/* ───────── SOLUTION (one eyebrow allowed here) ───────── */}
        <section className="mt-32">
          <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.26em]" style={{ color: "rgba(200,241,105,0.9)" }}>
            {solution.intro}
          </p>

          <ol className="mt-10 space-y-12">
            {solution.steps.map((s, i) => (
              <li key={i} className="border-t pt-7" style={{ borderColor: "rgba(239,234,216,0.16)" }}>
                <span
                  className="font-[family-name:var(--font-display)] font-extrabold leading-none tracking-[-0.03em] text-[clamp(3rem,15vw,4.5rem)]"
                  style={{ color: LIME }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-[family-name:var(--font-display)] text-[22px] font-semibold leading-[1.18] tracking-[-0.015em]">
                  {s.title}
                </h3>
                <p className="mt-3 max-w-[42ch] text-[15px] leading-[1.6]" style={{ color: "rgba(239,234,216,0.68)" }}>
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* ───────── PRICING ───────── */}
        <section ref={fd.pricingRef} className="mt-32">
          <h2 className="font-[family-name:var(--font-display)] font-bold leading-[1.0] tracking-[-0.03em] text-[clamp(2rem,9vw,3rem)]">
            {pricing.title}
          </h2>
          <p className="mt-6 max-w-[40ch] text-[16px] leading-[1.6]" style={{ color: "rgba(239,234,216,0.7)" }}>
            {pricing.subtitle}
          </p>

          <div className="mt-10 space-y-4">
            {pricing.plans.map((plan, i) => {
              const hi = !!plan.highlight;
              return (
                <div
                  key={i}
                  className="p-6"
                  style={{
                    borderRadius: 4,
                    backgroundColor: hi ? LIME : "transparent",
                    color: hi ? FOREST : CREAM,
                    border: hi ? "none" : "1px solid rgba(239,234,216,0.22)",
                  }}
                >
                  <div className="flex items-baseline justify-between">
                    <span className="font-[family-name:var(--font-mono)] text-[12px] uppercase tracking-[0.18em]" style={{ color: hi ? "rgba(22,39,31,0.65)" : "rgba(239,234,216,0.6)" }}>
                      {plan.name}
                    </span>
                    {hi && (
                      <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.16em]" style={{ color: FOREST }}>
                        Most chosen
                      </span>
                    )}
                  </div>
                  <p className="mt-3 font-[family-name:var(--font-display)] text-[40px] font-extrabold leading-none tracking-[-0.03em]">
                    {plan.price}
                  </p>
                  <p className="mt-3 text-[14px]" style={{ color: hi ? "rgba(22,39,31,0.7)" : "rgba(239,234,216,0.6)" }}>
                    {plan.descriptor}
                  </p>
                  <button
                    onClick={() => fd.onCta(`pricing-${plan.name.toLowerCase()}`)}
                    className="ya-press mt-6 inline-flex w-full items-center justify-between gap-3 px-6 py-4 text-[16px] font-semibold"
                    style={
                      hi
                        ? { backgroundColor: FOREST, color: LIME, borderRadius: 4 }
                        : { backgroundColor: LIME, color: FOREST, borderRadius: 4 }
                    }
                  >
                    {plan.ctaLabel}
                    <span aria-hidden>→</span>
                  </button>
                </div>
              );
            })}
          </div>

          <ul className="mt-10 grid grid-cols-1 gap-y-3">
            {pricing.included.map((feature, i) => (
              <li key={i} className="flex items-center gap-3 text-[15px]" style={{ color: "rgba(239,234,216,0.82)" }}>
                <span aria-hidden className="font-[family-name:var(--font-mono)] text-[13px]" style={{ color: LIME }}>
                  ✓
                </span>
                {feature}
              </li>
            ))}
          </ul>

          <p className="mt-8 max-w-[40ch] text-[13px] leading-[1.55]" style={{ color: "rgba(239,234,216,0.55)" }}>
            {pricing.scarcityLine}
          </p>
        </section>

        {/* ───────── TESTIMONIALS (no eyebrow) ───────── */}
        <section className="mt-32 space-y-12">
          {testimonials.map((t, i) => (
            <figure key={i} className="border-t pt-7" style={{ borderColor: "rgba(239,234,216,0.16)" }}>
              <blockquote className="font-[family-name:var(--font-serif)] text-[24px] font-light italic leading-[1.35] tracking-[-0.01em]">
                {t.quote}
              </blockquote>
              <figcaption className="mt-5 font-[family-name:var(--font-mono)] text-[12px] uppercase tracking-[0.18em]" style={{ color: "rgba(200,241,105,0.85)" }}>
                {t.name} · {t.age}
              </figcaption>
            </figure>
          ))}
        </section>

        {/* ───────── FAQ ───────── */}
        <section className="mt-32">
          <h2 className="font-[family-name:var(--font-display)] font-bold leading-[1.0] tracking-[-0.03em] text-[clamp(1.8rem,8vw,2.5rem)]">
            Questions, answered.
          </h2>
          <div className="mt-8">
            {faq.map((item, i) => (
              <details key={i} className="group border-t py-5" style={{ borderColor: "rgba(239,234,216,0.16)" }}>
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                  <span className="font-[family-name:var(--font-display)] text-[17px] font-semibold leading-[1.3] tracking-[-0.01em]">
                    {item.q}
                  </span>
                  <span
                    aria-hidden
                    className="font-[family-name:var(--font-mono)] mt-0.5 flex-none text-[20px] leading-none transition-transform duration-300 group-open:rotate-45"
                    style={{ color: LIME }}
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-[42ch] text-[15px] leading-[1.6]" style={{ color: "rgba(239,234,216,0.7)" }}>
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* ───────── FINAL CTA ───────── */}
        <section className="mt-32">
          <h2 className="font-[family-name:var(--font-display)] font-extrabold leading-[0.92] tracking-[-0.04em] text-[clamp(2.75rem,13vw,4.25rem)]">
            {finalCta.headline}
          </h2>
          <button
            onClick={() => fd.onCta("final")}
            className="ya-press mt-9 inline-flex w-full items-center justify-between gap-3 px-7 py-5 text-[18px] font-semibold"
            style={{ backgroundColor: LIME, color: FOREST, borderRadius: 4 }}
          >
            {finalCta.ctaLabel}
            <span aria-hidden>→</span>
          </button>
        </section>

        {/* ───────── FAKE-DOOR ───────── */}
        {fd.showWaitlist && (
          <section id="waitlist" className="mt-16 border-t pt-12" style={{ borderColor: "rgba(200,241,105,0.4)" }}>
            {fd.state === "done" ? (
              <div>
                <h2 className="font-[family-name:var(--font-display)] font-extrabold leading-[0.95] tracking-[-0.03em] text-[clamp(2.25rem,11vw,3.25rem)]" style={{ color: LIME }}>
                  {confirmation.title}
                </h2>
                <p className="mt-6 max-w-[40ch] text-[16px] leading-[1.6]" style={{ color: "rgba(239,234,216,0.75)" }}>
                  {confirmation.body}
                </p>
              </div>
            ) : (
              <>
                <h2 className="font-[family-name:var(--font-display)] font-extrabold leading-[0.95] tracking-[-0.03em] text-[clamp(2.5rem,12vw,3.5rem)]">
                  {fakedoor.title}
                </h2>
                <p className="mt-5 max-w-[40ch] text-[16px] leading-[1.6]" style={{ color: "rgba(239,234,216,0.72)" }}>
                  {fakedoor.body}
                </p>
                <form onSubmit={fd.submit} className="mt-8 flex flex-col gap-3">
                  <label htmlFor="ya-email" className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em]" style={{ color: "rgba(239,234,216,0.6)" }}>
                    Email
                  </label>
                  <input
                    id="ya-email"
                    type="email"
                    required
                    value={fd.email}
                    onChange={(e) => fd.setEmail(e.target.value)}
                    placeholder={fakedoor.emailPlaceholder}
                    className="w-full px-5 py-4 text-[16px] focus:outline-none"
                    style={{
                      borderRadius: 4,
                      backgroundColor: "rgba(239,234,216,0.06)",
                      border: "1px solid rgba(239,234,216,0.3)",
                      color: CREAM,
                    }}
                  />
                  <button
                    type="submit"
                    disabled={fd.state === "loading"}
                    className="ya-press mt-1 inline-flex w-full items-center justify-center px-6 py-4 text-[17px] font-semibold disabled:opacity-60"
                    style={{ backgroundColor: LIME, color: FOREST, borderRadius: 4 }}
                  >
                    {fd.state === "loading" ? "Reserving…" : fakedoor.submitLabel}
                  </button>
                  {fd.state === "error" && (
                    <p className="text-[14px]" style={{ color: LIME }}>
                      Something went wrong. Please try again.
                    </p>
                  )}
                </form>
                <p className="mt-5 font-[family-name:var(--font-mono)] text-[12px]" style={{ color: "rgba(239,234,216,0.5)" }}>
                  {fakedoor.privacyLine}
                </p>
              </>
            )}
          </section>
        )}

        {/* ───────── FOOTER ───────── */}
        <footer className="mt-28 border-t pt-8" style={{ borderColor: "rgba(239,234,216,0.16)" }}>
          <p className="font-[family-name:var(--font-serif)] text-[18px] italic leading-[1.4]" style={{ color: "rgba(239,234,216,0.85)" }}>
            {footer.lines[0]}
          </p>
          <p className="mt-5 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em]" style={{ color: "rgba(239,234,216,0.5)" }}>
            {footer.lines.slice(1).join("  ·  ")}
          </p>
        </footer>
      </div>
    </main>
  );
}
