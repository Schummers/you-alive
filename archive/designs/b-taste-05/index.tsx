"use client";

import { Newsreader, Mona_Sans } from "next/font/google";
import type { DesignProps } from "@/designs/types";
import { useFakeDoor } from "@/designs/shared/useFakeDoor";

// Direction: TYPO-DRIVEN. No photography — the type IS the design. An oversized,
// luminous Newsreader display (optical-size axis dialed high, tender italics)
// dominates every section; dramatic scale contrast between giant heads and quiet
// Mona Sans body. Brand coherence comes entirely from PALETTE + TYPE + a single
// soft lavender→periwinkle mesh. Italic emphasis stays in the SAME family.
// Indigo ink on luminous lavender. Light-dominant, dignified, airy.
const display = Newsreader({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const body = Mona_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

// Palette (locked indigo / lavender / periwinkle family)
const INK = "#26235A"; // primary dark text
const SOFT = "#5A5690"; // secondary
const MUTE = "#9C98D4"; // faint labels

export default function TypoLuminousLavender({ content, slug }: DesignProps) {
  const fd = useFakeDoor(slug);
  const { pricingRef, showWaitlist, email, setEmail, state, onCta, submit } = fd;
  const { hero, problem, solution, pricing, testimonials, faq, fakedoor, footer } =
    content;

  return (
    <main
      className={`${display.variable} ${body.variable} font-[family-name:var(--font-body)] relative min-h-screen overflow-hidden antialiased`}
      style={{
        color: INK,
        background:
          "radial-gradient(120% 70% at 10% -4%, #F3ECFF 0%, rgba(243,236,255,0) 52%)," +
          "radial-gradient(110% 60% at 95% 14%, #D6E4FF 0%, rgba(214,228,255,0) 50%)," +
          "radial-gradient(130% 80% at 50% 104%, #EBE6FF 0%, rgba(235,230,255,0) 58%)," +
          "linear-gradient(180deg, #F7F4FF 0%, #F3ECFF 52%, #F7F4FF 100%)",
      }}
    >
      <style>{`
        @keyframes ya-rise { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
        .ya-rise { animation: ya-rise 0.9s cubic-bezier(0.16,1,0.3,1) both; }
        @media (prefers-reduced-motion: reduce) {
          .ya-rise { animation: none; }
        }
      `}</style>

      {/* one faint drifting orb for dreamlike depth (decorative, reduced-motion safe) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-[34%] h-80 w-80 rounded-full opacity-50 blur-3xl"
        style={{
          background: "radial-gradient(circle, #D6E4FF 0%, rgba(214,228,255,0) 70%)",
        }}
      />

      <div className="relative mx-auto max-w-md px-6 pb-44">
        {/* ───────── BRAND LOCKUP (small wordmark) ───────── */}
        <header className="pt-8">
          <span
            className="font-[family-name:var(--font-display)] text-[17px] italic"
            style={{ color: INK, fontVariationSettings: '"opsz" 18' }}
          >
            {hero.brandLockup}
          </span>
        </header>

        {/* ───────── HERO (type-led, no photo) ───────── */}
        {/* Hero stack = 4 elements: wordmark above, title, subtitle, CTA.
            reassuranceLine sits as a quiet line tied to the CTA. */}
        <section className="pt-16">
          <h1
            className="ya-rise font-[family-name:var(--font-display)] font-light tracking-[-0.02em]"
            style={{ color: INK, fontVariationSettings: '"opsz" 72' }}
          >
            <span className="block text-[52px] leading-[1.02]">Don&rsquo;t leave</span>
            <span className="block text-[52px] leading-[1.02]">your loved ones</span>
            <span
              className="block pb-1 text-[58px] italic leading-[1.1]"
              style={{ color: SOFT }}
            >
              guessing.
            </span>
          </h1>

          <p
            className="ya-rise mt-9 max-w-[34ch] text-[16px] leading-[1.7]"
            style={{ color: SOFT, animationDelay: "0.08s" }}
          >
            {hero.subtitle}
          </p>

          <div className="ya-rise mt-10" style={{ animationDelay: "0.16s" }}>
            <button
              onClick={() => onCta("hero")}
              className="group inline-flex items-center gap-3 text-[18px] font-medium transition-transform duration-300 hover:translate-x-1"
              style={{ color: INK }}
            >
              <span className="border-b-2 pb-1" style={{ borderColor: INK }}>
                {hero.ctaLabel}
              </span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
            <p className="mt-6 text-[13px]" style={{ color: MUTE }}>
              {hero.reassuranceLine}
            </p>
          </div>
        </section>

        {/* ───────── PROBLEM (giant editorial statement) ───────── */}
        <section className="mt-40">
          <p className="mb-7 text-[10px] uppercase tracking-[0.4em]" style={{ color: MUTE }}>
            The quiet problem
          </p>
          <h2
            className="font-[family-name:var(--font-display)] text-[34px] font-light leading-[1.18] tracking-[-0.015em]"
            style={{ color: INK, fontVariationSettings: '"opsz" 60' }}
          >
            Your loved ones won&rsquo;t know where to look, or{" "}
            <span className="italic" style={{ color: SOFT }}>
              what you wanted.
            </span>
          </h2>
          <p className="mt-8 max-w-[40ch] text-[15.5px] leading-[1.75]" style={{ color: SOFT }}>
            {problem.body}
          </p>
        </section>

        {/* ───────── SOLUTION (oversized numerals as the design) ───────── */}
        <section className="mt-40">
          <h2
            className="font-[family-name:var(--font-display)] text-[30px] font-light italic leading-[1.15] tracking-[-0.01em]"
            style={{ color: INK, fontVariationSettings: '"opsz" 48' }}
          >
            {solution.intro}
          </h2>

          <ol className="mt-14 space-y-16">
            {solution.steps.map((s, i) => (
              <li key={i} className="border-t pt-7" style={{ borderColor: "rgba(90,86,144,0.18)" }}>
                <span
                  className="block font-[family-name:var(--font-display)] text-[72px] font-light leading-none"
                  style={{ color: "rgba(138,134,216,0.55)", fontVariationSettings: '"opsz" 72' }}
                >
                  {i + 1}
                </span>
                <h3
                  className="mt-5 font-[family-name:var(--font-display)] text-[23px] font-light leading-[1.3] tracking-[-0.005em]"
                  style={{ color: INK, fontVariationSettings: '"opsz" 32' }}
                >
                  {s.title}
                </h3>
                <p className="mt-4 text-[14.5px] leading-[1.7]" style={{ color: SOFT }}>
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* ───────── PRICING ───────── */}
        <section ref={pricingRef} className="mt-40">
          <h2
            className="font-[family-name:var(--font-display)] text-[33px] font-light leading-[1.2] tracking-[-0.015em]"
            style={{ color: INK, fontVariationSettings: '"opsz" 56' }}
          >
            {pricing.title}
          </h2>
          <p className="mt-6 max-w-[40ch] text-[15px] leading-[1.7]" style={{ color: SOFT }}>
            {pricing.subtitle}
          </p>

          <div className="mt-12 space-y-px overflow-hidden rounded-[28px] ring-1 ring-white/70">
            {pricing.plans.map((plan, i) => {
              const isHi = plan.highlight;
              return (
                <div
                  key={i}
                  className="px-7 py-9"
                  style={{
                    background: isHi
                      ? "linear-gradient(160deg, #2E2A6B 0%, #26235A 100%)"
                      : "rgba(255,255,255,0.62)",
                    color: isHi ? "#F7F4FF" : INK,
                  }}
                >
                  <div className="flex items-baseline justify-between">
                    <span
                      className="font-[family-name:var(--font-display)] text-[18px] italic"
                      style={{
                        color: isHi ? "#C9D2FF" : SOFT,
                        fontVariationSettings: '"opsz" 20',
                      }}
                    >
                      {plan.name}
                    </span>
                    {isHi && (
                      <span
                        className="rounded-full px-3 py-1 text-[9px] uppercase tracking-[0.22em]"
                        style={{ background: "#C9D2FF", color: INK }}
                      >
                        Most chosen
                      </span>
                    )}
                  </div>
                  <p
                    className="mt-3 font-[family-name:var(--font-display)] text-[46px] font-light leading-none tracking-[-0.02em]"
                    style={{ fontVariationSettings: '"opsz" 72' }}
                  >
                    {plan.price}
                  </p>
                  <p
                    className="mt-3 text-[13px]"
                    style={{ color: isHi ? "#B9C2F2" : SOFT }}
                  >
                    {plan.descriptor}
                  </p>
                  <button
                    onClick={() => onCta(`pricing-${plan.name.toLowerCase()}`)}
                    className="group mt-7 inline-flex items-center gap-2.5 text-[16px] font-medium transition-transform duration-300 hover:translate-x-1"
                    style={{ color: isHi ? "#F7F4FF" : INK }}
                  >
                    <span
                      className="border-b-2 pb-1"
                      style={{ borderColor: isHi ? "#F7F4FF" : INK }}
                    >
                      {plan.ctaLabel}
                    </span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </button>
                </div>
              );
            })}
          </div>

          <ul className="mt-10 grid grid-cols-1 gap-y-3.5">
            {pricing.included.map((feature, i) => (
              <li
                key={i}
                className="flex items-center gap-3 text-[14.5px]"
                style={{ color: INK }}
              >
                <span
                  className="flex h-5 w-5 flex-none items-center justify-center rounded-full text-[11px]"
                  style={{ background: "rgba(201,210,255,0.7)", color: INK }}
                >
                  ✓
                </span>
                {feature}
              </li>
            ))}
          </ul>

          <p className="mt-9 max-w-[40ch] text-[12.5px] leading-[1.65]" style={{ color: SOFT }}>
            {pricing.scarcityLine}
          </p>
        </section>

        {/* ───────── TESTIMONIALS (oversized pull-quotes) ───────── */}
        <section className="mt-40">
          <p className="mb-10 text-[10px] uppercase tracking-[0.4em]" style={{ color: MUTE }}>
            From those who started
          </p>
          <div className="space-y-16">
            {testimonials.map((t, i) => (
              <figure key={i}>
                <blockquote
                  className="font-[family-name:var(--font-display)] text-[25px] font-light leading-[1.42] tracking-[-0.01em]"
                  style={{ color: INK, fontVariationSettings: '"opsz" 36' }}
                >
                  <span className="italic" style={{ color: SOFT }}>
                    &ldquo;
                  </span>
                  {t.quote}
                  <span className="italic" style={{ color: SOFT }}>
                    &rdquo;
                  </span>
                </blockquote>
                <figcaption className="mt-6 text-[12px] uppercase tracking-[0.2em]" style={{ color: SOFT }}>
                  {t.name} · {t.age}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ───────── FAQ ───────── */}
        <section className="mt-40">
          <h2
            className="mb-10 font-[family-name:var(--font-display)] text-[28px] font-light italic leading-[1.2] tracking-[-0.01em]"
            style={{ color: INK, fontVariationSettings: '"opsz" 44' }}
          >
            Questions you might have
          </h2>
          <div>
            {faq.map((item, i) => (
              <details
                key={i}
                className="group border-t py-6"
                style={{ borderColor: "rgba(90,86,144,0.18)" }}
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                  <span
                    className="font-[family-name:var(--font-display)] text-[19px] font-light leading-[1.34] tracking-[-0.005em]"
                    style={{ color: INK, fontVariationSettings: '"opsz" 26' }}
                  >
                    {item.q}
                  </span>
                  <span
                    className="mt-1 text-[22px] leading-none transition-transform duration-300 group-open:rotate-45"
                    style={{ color: MUTE }}
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 text-[14px] leading-[1.7]" style={{ color: SOFT }}>
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* ───────── FINAL CTA (giant closing line) ───────── */}
        <section className="mt-40">
          <h2
            className="font-[family-name:var(--font-display)] font-light tracking-[-0.02em]"
            style={{ color: INK, fontVariationSettings: '"opsz" 72' }}
          >
            <span className="block text-[44px] leading-[1.08]">Ready to leave</span>
            <span
              className="block pb-1 text-[50px] italic leading-[1.1]"
              style={{ color: SOFT }}
            >
              them ready?
            </span>
          </h2>
          <button
            onClick={() => onCta("final")}
            className="group mt-10 inline-flex items-center gap-3 text-[18px] font-medium transition-transform duration-300 hover:translate-x-1"
            style={{ color: INK }}
          >
            <span className="border-b-2 pb-1" style={{ borderColor: INK }}>
              {content.finalCta.ctaLabel}
            </span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </button>
        </section>

        {/* ───────── FAKE-DOOR ───────── */}
        {showWaitlist && (
          <section
            id="waitlist"
            className="mt-16 rounded-[32px] px-7 py-11 ring-1 ring-white/70"
            style={{ background: "rgba(255,255,255,0.6)" }}
          >
            {state === "done" ? (
              <div>
                <p
                  className="font-[family-name:var(--font-display)] text-[28px] font-light leading-tight tracking-[-0.01em]"
                  style={{ color: INK, fontVariationSettings: '"opsz" 44' }}
                >
                  {content.confirmation.title}
                </p>
                <p className="mt-5 max-w-[36ch] text-[14.5px] leading-[1.7]" style={{ color: SOFT }}>
                  {content.confirmation.body}
                </p>
              </div>
            ) : (
              <>
                <p
                  className="font-[family-name:var(--font-display)] text-[32px] font-light italic leading-[1.1] tracking-[-0.01em]"
                  style={{ color: INK, fontVariationSettings: '"opsz" 48' }}
                >
                  {fakedoor.title}
                </p>
                <p className="mt-5 max-w-[36ch] text-[14.5px] leading-[1.7]" style={{ color: SOFT }}>
                  {fakedoor.body}
                </p>
                <form onSubmit={submit} className="mt-8 flex flex-col gap-3">
                  <label htmlFor="ya-email" className="text-[11px] uppercase tracking-[0.22em]" style={{ color: MUTE }}>
                    Email
                  </label>
                  <input
                    id="ya-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={fakedoor.emailPlaceholder}
                    className="w-full rounded-2xl border bg-white/70 px-5 py-4 text-[15px] focus:outline-none focus:ring-2"
                    style={{ borderColor: "rgba(90,86,144,0.3)", color: INK }}
                  />
                  <button
                    type="submit"
                    disabled={state === "loading"}
                    className="mt-1 w-full rounded-2xl px-6 py-4 text-[15px] font-medium text-[#F7F4FF] transition disabled:opacity-60"
                    style={{ background: INK }}
                  >
                    {state === "loading" ? "Reserving…" : fakedoor.submitLabel}
                  </button>
                  {state === "error" && (
                    <p className="text-[13px]" style={{ color: "#8A86D8" }}>
                      Something went wrong. Please try again.
                    </p>
                  )}
                </form>
                <p className="mt-5 text-[12px]" style={{ color: SOFT }}>
                  {fakedoor.privacyLine}
                </p>
              </>
            )}
          </section>
        )}

        {/* ───────── FOOTER ───────── */}
        <footer className="mt-28 border-t pt-10" style={{ borderColor: "rgba(90,86,144,0.18)" }}>
          <p
            className="font-[family-name:var(--font-display)] text-[17px] font-light italic leading-[1.4]"
            style={{ color: INK, fontVariationSettings: '"opsz" 20' }}
          >
            {footer.lines[0]}
          </p>
          <p className="mt-5 text-[11px] uppercase tracking-[0.24em]" style={{ color: MUTE }}>
            {footer.lines.slice(1).join("   ·   ")}
          </p>
        </footer>
      </div>

      {/* Sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 px-6 pb-5">
        <button
          onClick={() => onCta("sticky")}
          className="mx-auto flex w-full max-w-md items-center justify-center gap-2 rounded-2xl px-6 py-4 text-[15px] font-medium text-[#F7F4FF]"
          style={{ background: INK, boxShadow: "0 22px 48px -20px rgba(38,35,90,0.85)" }}
        >
          {hero.ctaLabel}
          <span>→</span>
        </button>
      </div>
    </main>
  );
}
