"use client";

import Image from "next/image";
import { Bodoni_Moda, Newsreader, Spline_Sans_Mono } from "next/font/google";
import type { DesignProps } from "@/designs/types";
import { useFakeDoor } from "@/designs/shared/useFakeDoor";

// ─────────────────────────────────────────────────────────────────────────────
// "OBSERVATORY / NIGHT LEDGER" direction.
// A nocturnal almanac for what you leave behind. Deep midnight-blue near-black,
// a faint starfield, brass-gold accents, pale silver text. High-contrast Didone
// (Bodoni Moda) display against a precise mono (Spline Sans Mono) for coordinate-
// style labels, with Newsreader carrying the body. The hero photo is rendered
// as a cold, night-tinted full-bleed — the will as a signal sent across distance.
// ─────────────────────────────────────────────────────────────────────────────

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
  axes: ["opsz"],
  style: ["normal", "italic"],
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const mono = Spline_Sans_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

const INK = "#080B14"; // midnight near-black
const PANEL = "#0E1322"; // raised panel
const SILVER = "#E7E9EF"; // pale text
const MUTE = "#8A93A8"; // muted slate
const BRASS = "#C8A35B"; // brass-gold accent

export default function ObservatoryNightDesign({ content, slug }: DesignProps) {
  const fd = useFakeDoor(slug);
  const { hero, problem, solution, pricing, testimonials, faq, fakedoor, footer } =
    content;
  const highlightPlan = pricing.plans.find((p) => p.highlight);

  return (
    <main
      className={`${bodoni.variable} ${newsreader.variable} ${mono.variable} relative min-h-screen overflow-hidden`}
      style={{
        backgroundColor: INK,
        color: SILVER,
        fontFamily: "var(--font-newsreader), ui-serif, Georgia, serif",
      }}
    >
      {/* Starfield + nebula atmosphere */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage: [
            `radial-gradient(1.5px 1.5px at 18% 22%, ${SILVER}, transparent)`,
            `radial-gradient(1px 1px at 72% 14%, ${SILVER}, transparent)`,
            `radial-gradient(1.5px 1.5px at 41% 58%, ${SILVER}, transparent)`,
            `radial-gradient(1px 1px at 88% 47%, ${SILVER}, transparent)`,
            `radial-gradient(1px 1px at 9% 71%, ${SILVER}, transparent)`,
            `radial-gradient(1.5px 1.5px at 63% 83%, ${SILVER}, transparent)`,
            `radial-gradient(1px 1px at 32% 91%, ${BRASS}, transparent)`,
            `radial-gradient(1px 1px at 95% 78%, ${SILVER}, transparent)`,
          ].join(","),
          opacity: 0.5,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(120% 90% at 75% -10%, rgba(40,58,110,0.45), transparent 60%), radial-gradient(90% 70% at 8% 115%, rgba(200,163,91,0.10), transparent 55%)`,
        }}
      />
      {/* Grain */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.05] mix-blend-screen"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative z-10 mx-auto max-w-md pb-28">
        {/* ───────── HERO ───────── */}
        <header>
          <div className="flex items-center justify-between px-5 pt-6">
            <span
              className="font-[family-name:var(--font-bodoni)] text-[15px] italic tracking-tight"
              style={{ color: SILVER }}
            >
              {hero.brandLockup}
            </span>
            <span
              className="font-[family-name:var(--font-mono)] text-[9.5px] uppercase tracking-[0.32em]"
              style={{ color: MUTE }}
            >
              Est. — for later
            </span>
          </div>

          <div className="relative mt-5 h-[64vh] min-h-[480px] w-full overflow-hidden">
            <Image
              src="/designs/a/hero.jpeg"
              alt=""
              fill
              priority
              sizes="(max-width: 768px) 100vw, 450px"
              className="object-cover"
              style={{ filter: "grayscale(0.5) brightness(0.62) contrast(1.05)" }}
            />
            {/* Night duotone wash */}
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(180deg, rgba(8,11,20,0.25) 0%, rgba(14,19,34,0.55) 55%, ${INK} 100%)`,
                mixBlendMode: "multiply",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(180deg, rgba(40,58,110,0.30), transparent 45%)`,
              }}
            />
            {/* Coordinate ticks */}
            <div className="absolute left-5 top-5">
              <span
                className="font-[family-name:var(--font-mono)] text-[10px] tracking-[0.18em]"
                style={{ color: BRASS }}
              >
                59°N · 18°E
              </span>
            </div>
          </div>

          <section className="px-5 pt-8">
            <p
              className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.34em]"
              style={{ color: BRASS }}
            >
              The provision
            </p>
            <h1
              className="mt-4 text-balance font-[family-name:var(--font-bodoni)] text-[40px] leading-[0.98] tracking-[-0.01em]"
              style={{ color: SILVER, fontVariationSettings: '"opsz" 96' }}
            >
              {hero.title}
            </h1>
            <p
              className="mt-5 text-[16.5px] leading-[1.55]"
              style={{ color: MUTE }}
            >
              {hero.subtitle}
            </p>

            <button
              onClick={() => fd.onCta("hero")}
              className="group mt-8 inline-flex w-full items-center justify-center gap-3 rounded-sm px-7 py-4 text-[14px] font-medium transition-all duration-300 hover:-translate-y-[1px]"
              style={{
                backgroundColor: BRASS,
                color: INK,
                fontFamily: "var(--font-mono)",
                letterSpacing: "0.06em",
                boxShadow: "0 18px 40px -22px rgba(200,163,91,0.8)",
              }}
            >
              {hero.ctaLabel}
              <span className="transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </button>

            <p
              className="mt-5 flex items-center justify-center gap-3 text-center font-[family-name:var(--font-mono)] text-[11px] tracking-[0.1em]"
              style={{ color: MUTE }}
            >
              <span
                className="inline-block h-[1px] w-6"
                style={{ backgroundColor: BRASS }}
              />
              {hero.reassuranceLine}
            </p>
          </section>
        </header>

        {/* ───────── PROBLEM ───────── */}
        <section className="mt-24 px-5">
          <p
            className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.34em]"
            style={{ color: MUTE }}
          >
            01 — The dark
          </p>
          <h2
            className="mt-5 text-balance font-[family-name:var(--font-bodoni)] text-[28px] leading-[1.08] tracking-[-0.01em]"
            style={{ color: SILVER, fontVariationSettings: '"opsz" 72' }}
          >
            {problem.title}
          </h2>
          <p className="mt-5 text-[15.5px] leading-[1.6]" style={{ color: MUTE }}>
            {problem.body}
          </p>
        </section>

        {/* ───────── SOLUTION ───────── */}
        <section className="mt-24 px-5">
          <p
            className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.34em]"
            style={{ color: MUTE }}
          >
            02 — The mechanism
          </p>
          <h2
            className="mt-4 font-[family-name:var(--font-bodoni)] text-[28px] italic leading-[1.05] tracking-[-0.01em]"
            style={{ color: SILVER, fontVariationSettings: '"opsz" 72' }}
          >
            {solution.intro}
          </h2>

          <ol className="mt-10 space-y-px">
            {solution.steps.map((s, i) => (
              <li
                key={i}
                className="relative border-t px-1 py-7"
                style={{ borderColor: "rgba(231,233,239,0.12)" }}
              >
                <div className="flex items-baseline justify-between">
                  <span
                    className="font-[family-name:var(--font-bodoni)] text-[34px] leading-none"
                    style={{ color: BRASS, fontVariationSettings: '"opsz" 96' }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="font-[family-name:var(--font-mono)] text-[9px] uppercase tracking-[0.3em]"
                    style={{ color: MUTE }}
                  >
                    step
                  </span>
                </div>
                <h3
                  className="mt-4 font-[family-name:var(--font-newsreader)] text-[19px] font-medium leading-[1.25]"
                  style={{ color: SILVER }}
                >
                  {s.title}
                </h3>
                <p
                  className="mt-2.5 text-[14.5px] leading-[1.6]"
                  style={{ color: MUTE }}
                >
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* ───────── PRICING ───────── */}
        <section ref={fd.pricingRef} className="mt-24 px-5">
          <p
            className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.34em]"
            style={{ color: MUTE }}
          >
            03 — The provision
          </p>
          <h2
            className="mt-4 text-balance font-[family-name:var(--font-bodoni)] text-[27px] leading-[1.08] tracking-[-0.01em]"
            style={{ color: SILVER, fontVariationSettings: '"opsz" 72' }}
          >
            {pricing.title}
          </h2>
          <p className="mt-4 text-[15px] leading-[1.55]" style={{ color: MUTE }}>
            {pricing.subtitle}
          </p>

          <div className="mt-8 space-y-4">
            {pricing.plans.map((plan, i) => {
              const isHi = !!plan.highlight;
              return (
                <div
                  key={i}
                  className="relative overflow-hidden rounded-md p-6"
                  style={{
                    backgroundColor: isHi ? PANEL : "transparent",
                    border: `1px solid ${
                      isHi ? BRASS : "rgba(231,233,239,0.14)"
                    }`,
                    boxShadow: isHi
                      ? "0 24px 60px -34px rgba(200,163,91,0.55)"
                      : "none",
                  }}
                >
                  {isHi && (
                    <span
                      className="absolute right-0 top-0 px-3 py-1 font-[family-name:var(--font-mono)] text-[8.5px] uppercase tracking-[0.26em]"
                      style={{ backgroundColor: BRASS, color: INK }}
                    >
                      Recommended
                    </span>
                  )}
                  <p
                    className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.28em]"
                    style={{ color: isHi ? BRASS : MUTE }}
                  >
                    {plan.name}
                  </p>
                  <p
                    className="mt-2 font-[family-name:var(--font-bodoni)] text-[34px] leading-none"
                    style={{ color: SILVER, fontVariationSettings: '"opsz" 96' }}
                  >
                    {plan.price}
                  </p>
                  <p className="mt-2 text-[13px]" style={{ color: MUTE }}>
                    {plan.descriptor}
                  </p>
                  <button
                    onClick={() => fd.onCta(isHi ? "pricing" : "pricing-alt")}
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-sm px-6 py-3.5 text-[13px] font-medium transition hover:-translate-y-[1px]"
                    style={{
                      backgroundColor: isHi ? BRASS : "transparent",
                      color: isHi ? INK : SILVER,
                      border: isHi ? "none" : `1px solid ${BRASS}`,
                      fontFamily: "var(--font-mono)",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {plan.ctaLabel}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Included */}
          <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-3">
            {pricing.included.map((feat, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-[13px] leading-snug"
                style={{ color: SILVER }}
              >
                <span style={{ color: BRASS }}>✦</span>
                {feat}
              </li>
            ))}
          </ul>

          <p
            className="mt-7 text-center font-[family-name:var(--font-mono)] text-[11px] tracking-[0.06em]"
            style={{ color: MUTE }}
          >
            {pricing.scarcityLine}
          </p>
        </section>

        {/* ───────── TESTIMONIALS ───────── */}
        <section className="mt-24 px-5">
          <p
            className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.34em]"
            style={{ color: MUTE }}
          >
            Logged voices
          </p>
          <div className="mt-8 space-y-10">
            {testimonials.map((t, i) => (
              <figure key={i}>
                <blockquote
                  className="font-[family-name:var(--font-bodoni)] text-[20px] italic leading-[1.4] tracking-[-0.005em]"
                  style={{ color: SILVER, fontVariationSettings: '"opsz" 48' }}
                >
                  {t.quote}
                </blockquote>
                <figcaption
                  className="mt-3 flex items-center gap-3 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.2em]"
                  style={{ color: MUTE }}
                >
                  <span
                    className="inline-block h-[1px] w-5"
                    style={{ backgroundColor: BRASS }}
                  />
                  {t.name} · {t.age}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ───────── FAQ ───────── */}
        <section className="mt-24 px-5">
          <p
            className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.34em]"
            style={{ color: MUTE }}
          >
            The fine print
          </p>
          <div
            className="mt-6 border-t"
            style={{ borderColor: "rgba(231,233,239,0.12)" }}
          >
            {faq.map((item, i) => (
              <details
                key={i}
                className="group border-b py-5"
                style={{ borderColor: "rgba(231,233,239,0.12)" }}
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                  <span
                    className="font-[family-name:var(--font-newsreader)] text-[16.5px] font-medium leading-[1.3]"
                    style={{ color: SILVER }}
                  >
                    {item.q}
                  </span>
                  <span
                    className="mt-0.5 select-none font-[family-name:var(--font-mono)] text-[18px] leading-none transition-transform duration-300 group-open:rotate-45"
                    style={{ color: BRASS }}
                  >
                    +
                  </span>
                </summary>
                <p
                  className="mt-3 max-w-[40ch] text-[14px] leading-[1.6]"
                  style={{ color: MUTE }}
                >
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* ───────── FINAL CTA ───────── */}
        <section className="mt-24 px-5 text-center">
          <h2
            className="text-balance font-[family-name:var(--font-bodoni)] text-[34px] italic leading-[1.02] tracking-[-0.01em]"
            style={{ color: SILVER, fontVariationSettings: '"opsz" 96' }}
          >
            {content.finalCta.headline}
          </h2>
          <button
            onClick={() => fd.onCta("final")}
            className="group mt-7 inline-flex w-full items-center justify-center gap-3 rounded-sm px-7 py-4 text-[14px] font-medium transition-all duration-300 hover:-translate-y-[1px]"
            style={{
              backgroundColor: BRASS,
              color: INK,
              fontFamily: "var(--font-mono)",
              letterSpacing: "0.06em",
              boxShadow: "0 18px 40px -22px rgba(200,163,91,0.8)",
            }}
          >
            {content.finalCta.ctaLabel}
            <span className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </button>
        </section>

        {/* ───────── FAKE-DOOR ───────── */}
        {fd.showWaitlist && (
          <section
            id="waitlist"
            className="mt-24 mx-5 rounded-md p-7"
            style={{
              backgroundColor: PANEL,
              border: `1px solid ${BRASS}`,
            }}
          >
            {fd.state === "done" ? (
              <div className="text-center">
                <p
                  className="font-[family-name:var(--font-bodoni)] text-[26px] italic leading-tight"
                  style={{ color: SILVER, fontVariationSettings: '"opsz" 72' }}
                >
                  {content.confirmation.title}
                </p>
                <p
                  className="mt-3 text-[14.5px] leading-[1.6]"
                  style={{ color: MUTE }}
                >
                  {content.confirmation.body}
                </p>
              </div>
            ) : (
              <>
                <p
                  className="font-[family-name:var(--font-bodoni)] text-[28px] italic leading-[1.05]"
                  style={{ color: SILVER, fontVariationSettings: '"opsz" 72' }}
                >
                  {fakedoor.title}
                </p>
                <p
                  className="mt-3 text-[14.5px] leading-[1.6]"
                  style={{ color: MUTE }}
                >
                  {fakedoor.body}
                </p>
                <form onSubmit={fd.submit} className="mt-6 flex flex-col gap-3">
                  <input
                    type="email"
                    required
                    value={fd.email}
                    onChange={(e) => fd.setEmail(e.target.value)}
                    placeholder={fakedoor.emailPlaceholder}
                    className="w-full rounded-sm px-5 py-3.5 text-[15px] focus:outline-none"
                    style={{
                      backgroundColor: INK,
                      color: SILVER,
                      border: "1px solid rgba(231,233,239,0.2)",
                    }}
                  />
                  <button
                    type="submit"
                    disabled={fd.state === "loading"}
                    className="w-full rounded-sm px-6 py-3.5 text-[14px] font-medium disabled:opacity-60"
                    style={{
                      backgroundColor: BRASS,
                      color: INK,
                      fontFamily: "var(--font-mono)",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {fd.state === "loading" ? "…" : fakedoor.submitLabel}
                  </button>
                  {fd.state === "error" && (
                    <p className="text-[13px]" style={{ color: BRASS }}>
                      Something went wrong. Try again.
                    </p>
                  )}
                </form>
                <p
                  className="mt-4 text-center font-[family-name:var(--font-mono)] text-[11px] tracking-[0.06em]"
                  style={{ color: MUTE }}
                >
                  {fakedoor.privacyLine}
                </p>
              </>
            )}
          </section>
        )}

        {/* ───────── FOOTER ───────── */}
        <footer
          className="mt-20 mx-5 border-t pt-8 text-center"
          style={{ borderColor: "rgba(231,233,239,0.12)" }}
        >
          <p
            className="font-[family-name:var(--font-bodoni)] text-[15px] italic"
            style={{ color: SILVER, fontVariationSettings: '"opsz" 48' }}
          >
            {footer.lines[0]}
          </p>
          <p
            className="mt-3 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.24em]"
            style={{ color: MUTE }}
          >
            {footer.lines.slice(1).join("  ·  ")}
          </p>
        </footer>
      </div>

      {/* Sticky CTA */}
      <div
        className="fixed inset-x-0 bottom-0 z-40 px-5 py-3 backdrop-blur-md"
        style={{
          backgroundColor: "rgba(8,11,20,0.82)",
          borderTop: "1px solid rgba(231,233,239,0.1)",
        }}
      >
        <button
          onClick={() => fd.onCta("sticky")}
          className="mx-auto flex w-full max-w-md items-center justify-center gap-2 rounded-sm px-6 py-3.5 text-[14px] font-medium"
          style={{
            backgroundColor: BRASS,
            color: INK,
            fontFamily: "var(--font-mono)",
            letterSpacing: "0.05em",
          }}
        >
          {highlightPlan ? highlightPlan.ctaLabel : hero.ctaLabel}
          <span>→</span>
        </button>
      </div>
    </main>
  );
}
