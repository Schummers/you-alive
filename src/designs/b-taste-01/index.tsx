"use client";

import { Newsreader, Figtree } from "next/font/google";
import type { DesignProps } from "@/designs/types";
import { useFakeDoor } from "@/designs/shared/useFakeDoor";

// Direction (Variant B — SOFT / WELLNESS): "Very airy + very rounded, light, minimal."
// No photography. The lavender→periwinkle mesh IS the brand identity, executed with
// restraint: one luminous light field, indigo ink as the only dark counterpoint, soft
// purple for secondary. Max whitespace, full-radius pillowy shapes, calm reading rhythm.
// Newsreader (soft optical serif, opsz + italic) carries the contemplative voice;
// Figtree (rounded humanist sans) handles body and UI. CSS-only motion, reduced-motion safe.
const display = Newsreader({
  subsets: ["latin"],
  variable: "--font-display",
  axes: ["opsz"],
  style: ["normal", "italic"],
  display: "swap",
});

const sans = Figtree({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Palette (locked indigo / soft-purple / lavender family)
const INK = "#26235A"; // primary dark text + ink counterpoint
const SOFT = "#5A5690"; // secondary text
const HAZE = "#9C98D4"; // faint labels

export default function SoftWellnessLavender({ content, slug }: DesignProps) {
  const fd = useFakeDoor(slug);
  const { hero, problem, solution, pricing, testimonials, faq, finalCta, fakedoor, footer } =
    content;

  return (
    <main
      className={`${display.variable} ${sans.variable} font-[family-name:var(--font-sans)] relative min-h-screen overflow-hidden antialiased`}
      style={{
        color: INK,
        background:
          "radial-gradient(125% 80% at 10% 2%, #F3ECFF 0%, rgba(243,236,255,0) 55%)," +
          "radial-gradient(115% 72% at 94% 14%, #D6E4FF 0%, rgba(214,228,255,0) 55%)," +
          "radial-gradient(135% 95% at 50% 106%, #EBE6FF 0%, rgba(235,230,255,0) 60%)," +
          "linear-gradient(180deg, #F7F4FF 0%, #F3ECFF 52%, #F7F4FF 100%)",
      }}
    >
      {/* soft drifting orbs — dreamlike depth, motion only when allowed */}
      <div
        aria-hidden
        className="ya-float pointer-events-none absolute -left-28 top-44 h-72 w-72 rounded-full opacity-50 blur-3xl"
        style={{ background: "radial-gradient(circle, #D6E4FF 0%, rgba(214,228,255,0) 70%)" }}
      />
      <div
        aria-hidden
        className="ya-float-slow pointer-events-none absolute -right-32 top-[62%] h-80 w-80 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, #EBE6FF 0%, rgba(235,230,255,0) 70%)" }}
      />

      <style>{`
        @keyframes ya-rise { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes ya-drift { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-22px); } }
        .ya-rise { animation: ya-rise 0.9s cubic-bezier(0.16,1,0.3,1) both; }
        .ya-float { animation: ya-drift 18s ease-in-out infinite; }
        .ya-float-slow { animation: ya-drift 26s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .ya-rise, .ya-float, .ya-float-slow { animation: none !important; }
        }
      `}</style>

      <div className="relative mx-auto max-w-md px-6 pb-44">
        {/* ───────── NAV / BRAND LOCKUP ───────── */}
        <header className="flex items-center justify-between pt-8">
          <span
            className="font-[family-name:var(--font-display)] text-[19px] italic"
            style={{ color: INK }}
          >
            {hero.brandLockup}
          </span>
          <span
            className="rounded-full border px-4 py-1.5 text-[10px] uppercase tracking-[0.22em]"
            style={{ borderColor: "rgba(90,86,144,0.22)", color: SOFT }}
          >
            Tenderly kept
          </span>
        </header>

        {/* ───────── HERO (text-led, no photo) ───────── */}
        <section className="ya-rise pt-20 text-center">
          <h1
            className="text-balance font-[family-name:var(--font-display)] text-[42px] leading-[1.05] tracking-[-0.015em]"
            style={{ color: INK }}
          >
            {hero.title}
          </h1>
          <p
            className="mx-auto mt-7 max-w-[33ch] text-[16.5px] leading-[1.72]"
            style={{ color: SOFT }}
          >
            {hero.subtitle}
          </p>

          <button
            onClick={() => fd.onCta("hero")}
            className="group mt-10 inline-flex items-center justify-center gap-2.5 rounded-full px-9 py-4 text-[15px] font-medium transition-transform duration-300 hover:-translate-y-[2px] active:translate-y-0"
            style={{
              background: INK,
              color: "#F7F4FF",
              boxShadow: "0 24px 50px -22px rgba(38,35,90,0.6)",
            }}
          >
            {hero.ctaLabel}
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </button>

          <p
            className="mx-auto mt-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12.5px]"
            style={{ background: "rgba(255,255,255,0.6)", color: SOFT }}
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#8A86D8" }} />
            {hero.reassuranceLine}
          </p>
        </section>

        {/* ───────── PROBLEM ───────── */}
        <section className="mt-40 text-center">
          <h2
            className="mx-auto max-w-[20ch] text-balance font-[family-name:var(--font-display)] text-[29px] leading-[1.2] tracking-[-0.01em]"
            style={{ color: INK }}
          >
            {problem.title}
          </h2>
          <p
            className="mx-auto mt-7 max-w-[35ch] text-[15.5px] leading-[1.75]"
            style={{ color: SOFT }}
          >
            {problem.body}
          </p>
        </section>

        {/* ───────── SOLUTION ───────── */}
        <section className="mt-40">
          <p
            className="mb-10 text-center text-[10px] uppercase tracking-[0.34em]"
            style={{ color: HAZE }}
          >
            {solution.intro}
          </p>

          <ol className="space-y-7">
            {solution.steps.map((s, i) => (
              <li
                key={i}
                className="rounded-[36px] px-7 py-9 ring-1 ring-white/70"
                style={{
                  background: "rgba(255,255,255,0.55)",
                  boxShadow: "0 24px 60px -48px rgba(38,35,90,0.5)",
                }}
              >
                <span
                  className="flex h-14 w-14 items-center justify-center rounded-full font-[family-name:var(--font-display)] text-[24px] italic"
                  style={{ background: "rgba(214,228,255,0.6)", color: INK }}
                >
                  {i + 1}
                </span>
                <h3
                  className="mt-6 font-[family-name:var(--font-display)] text-[21px] leading-[1.3] tracking-[-0.005em]"
                  style={{ color: INK }}
                >
                  {s.title}
                </h3>
                <p className="mt-3 text-[14.5px] leading-[1.72]" style={{ color: SOFT }}>
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* ───────── PRICING ───────── */}
        <section ref={fd.pricingRef} className="mt-40 text-center">
          <h2
            className="mx-auto max-w-[20ch] text-balance font-[family-name:var(--font-display)] text-[28px] leading-[1.2] tracking-[-0.01em]"
            style={{ color: INK }}
          >
            {pricing.title}
          </h2>
          <p
            className="mx-auto mt-5 max-w-[35ch] text-[15px] leading-[1.7]"
            style={{ color: SOFT }}
          >
            {pricing.subtitle}
          </p>

          <div className="mt-10 space-y-5">
            {pricing.plans.map((plan, i) =>
              plan.highlight ? (
                <div
                  key={i}
                  className="relative rounded-[36px] px-7 py-9"
                  style={{
                    background: "linear-gradient(160deg, #2E2A6B 0%, #26235A 100%)",
                    color: "#F7F4FF",
                    boxShadow: "0 34px 70px -40px rgba(38,35,90,0.8)",
                  }}
                >
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-[10px] uppercase tracking-[0.18em]"
                    style={{ background: "#C9D2FF", color: INK }}
                  >
                    Most chosen
                  </span>
                  <p
                    className="font-[family-name:var(--font-display)] text-[16px] italic"
                    style={{ color: "#B9C2F2" }}
                  >
                    {plan.name}
                  </p>
                  <p className="mt-2 font-[family-name:var(--font-display)] text-[40px] leading-none tracking-[-0.01em]">
                    {plan.price}
                  </p>
                  <p className="mt-3 text-[13px]" style={{ color: "#B9C2F2" }}>
                    {plan.descriptor}
                  </p>
                  <button
                    onClick={() => fd.onCta(`pricing-${plan.name.toLowerCase()}`)}
                    className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-4 text-[15px] font-medium transition hover:opacity-90 active:scale-[0.98]"
                    style={{ background: "#F7F4FF", color: INK }}
                  >
                    {plan.ctaLabel}
                    <span>→</span>
                  </button>
                </div>
              ) : (
                <div
                  key={i}
                  className="relative rounded-[36px] px-7 py-9 ring-1 ring-white/70"
                  style={{ background: "rgba(255,255,255,0.55)", color: INK }}
                >
                  <p
                    className="font-[family-name:var(--font-display)] text-[16px] italic"
                    style={{ color: SOFT }}
                  >
                    {plan.name}
                  </p>
                  <p
                    className="mt-2 font-[family-name:var(--font-display)] text-[40px] leading-none tracking-[-0.01em]"
                    style={{ color: INK }}
                  >
                    {plan.price}
                  </p>
                  <p className="mt-3 text-[13px]" style={{ color: SOFT }}>
                    {plan.descriptor}
                  </p>
                  <button
                    onClick={() => fd.onCta(`pricing-${plan.name.toLowerCase()}`)}
                    className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-4 text-[15px] font-medium transition hover:-translate-y-[1px] active:translate-y-0"
                    style={{ background: INK, color: "#F7F4FF" }}
                  >
                    {plan.ctaLabel}
                    <span>→</span>
                  </button>
                </div>
              )
            )}
          </div>

          {/* Included list */}
          <div
            className="mt-10 rounded-[36px] px-7 py-9 text-left ring-1 ring-white/70"
            style={{ background: "rgba(255,255,255,0.45)" }}
          >
            <p
              className="text-center text-[10px] uppercase tracking-[0.3em]"
              style={{ color: HAZE }}
            >
              Everything included
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-y-3.5">
              {pricing.included.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-[14.5px]" style={{ color: INK }}>
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
          </div>

          <p
            className="mx-auto mt-7 max-w-[35ch] text-[12.5px] leading-[1.65]"
            style={{ color: SOFT }}
          >
            {pricing.scarcityLine}
          </p>
        </section>

        {/* ───────── TESTIMONIALS ───────── */}
        <section className="mt-40 space-y-6">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="rounded-[36px] px-7 py-9 ring-1 ring-white/70"
              style={{ background: "rgba(255,255,255,0.55)" }}
            >
              <span
                aria-hidden
                className="block font-[family-name:var(--font-display)] text-[46px] leading-none"
                style={{ color: "rgba(138,134,216,0.5)" }}
              >
                &ldquo;
              </span>
              <blockquote
                className="mt-1 font-[family-name:var(--font-display)] text-[19px] leading-[1.5] tracking-[-0.005em]"
                style={{ color: INK }}
              >
                {t.quote}
              </blockquote>
              <figcaption
                className="mt-5 text-[12px] uppercase tracking-[0.18em]"
                style={{ color: SOFT }}
              >
                {t.name} · {t.age}
              </figcaption>
            </figure>
          ))}
        </section>

        {/* ───────── FAQ ───────── */}
        <section className="mt-40 space-y-4">
          {faq.map((item, i) => (
            <details
              key={i}
              className="group rounded-[30px] px-7 py-5 ring-1 ring-white/70 open:bg-white/70"
              style={{ background: "rgba(255,255,255,0.5)" }}
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                <span
                  className="font-[family-name:var(--font-display)] text-[17px] leading-[1.34] tracking-[-0.005em]"
                  style={{ color: INK }}
                >
                  {item.q}
                </span>
                <span
                  className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-full text-[18px] leading-none transition-transform duration-300 group-open:rotate-45"
                  style={{ background: "rgba(214,228,255,0.6)", color: INK }}
                >
                  +
                </span>
              </summary>
              <p className="mt-4 text-[14px] leading-[1.72]" style={{ color: SOFT }}>
                {item.a}
              </p>
            </details>
          ))}
        </section>

        {/* ───────── FINAL CTA ───────── */}
        <section
          className="mt-40 rounded-[40px] px-8 py-16 text-center"
          style={{
            background: "linear-gradient(160deg, #2E2A6B 0%, #26235A 100%)",
            color: "#F7F4FF",
            boxShadow: "0 40px 80px -44px rgba(38,35,90,0.8)",
          }}
        >
          <h2 className="mx-auto max-w-[16ch] text-balance font-[family-name:var(--font-display)] text-[31px] leading-[1.14] tracking-[-0.01em]">
            {finalCta.headline}
          </h2>
          <button
            onClick={() => fd.onCta("final")}
            className="mt-9 inline-flex items-center justify-center gap-2.5 rounded-full px-9 py-4 text-[15px] font-medium transition hover:-translate-y-[1px] active:translate-y-0"
            style={{ background: "#F7F4FF", color: INK }}
          >
            {finalCta.ctaLabel}
            <span>→</span>
          </button>
        </section>

        {/* ───────── FAKE-DOOR ───────── */}
        {fd.showWaitlist && (
          <section
            id="waitlist"
            className="mt-12 rounded-[40px] px-7 py-11 ring-1 ring-white/70"
            style={{ background: "rgba(255,255,255,0.6)" }}
          >
            {fd.state === "done" ? (
              <div className="text-center">
                <p
                  className="font-[family-name:var(--font-display)] text-[25px] leading-tight"
                  style={{ color: INK }}
                >
                  {content.confirmation.title}
                </p>
                <p
                  className="mx-auto mt-4 max-w-[34ch] text-[14.5px] leading-[1.72]"
                  style={{ color: SOFT }}
                >
                  {content.confirmation.body}
                </p>
              </div>
            ) : (
              <>
                <p
                  className="text-center font-[family-name:var(--font-display)] text-[27px] italic leading-[1.15] tracking-[-0.01em]"
                  style={{ color: INK }}
                >
                  {fakedoor.title}
                </p>
                <p
                  className="mx-auto mt-4 max-w-[34ch] text-center text-[14.5px] leading-[1.72]"
                  style={{ color: SOFT }}
                >
                  {fakedoor.body}
                </p>
                <form onSubmit={fd.submit} className="mt-7 flex flex-col gap-3">
                  <input
                    type="email"
                    required
                    value={fd.email}
                    onChange={(e) => fd.setEmail(e.target.value)}
                    placeholder={fakedoor.emailPlaceholder}
                    className="w-full rounded-full border bg-white/70 px-6 py-4 text-[15px] focus:outline-none focus:ring-2"
                    style={{ borderColor: "rgba(90,86,144,0.25)", color: INK }}
                  />
                  <button
                    type="submit"
                    disabled={fd.state === "loading"}
                    className="w-full rounded-full px-6 py-4 text-[15px] font-medium disabled:opacity-60"
                    style={{ background: INK, color: "#F7F4FF" }}
                  >
                    {fd.state === "loading" ? "..." : fakedoor.submitLabel}
                  </button>
                  {fd.state === "error" && (
                    <p className="text-center text-[13px]" style={{ color: "#8A86D8" }}>
                      Something went wrong. Try again.
                    </p>
                  )}
                </form>
                <p className="mt-5 text-center text-[12px]" style={{ color: SOFT }}>
                  {fakedoor.privacyLine}
                </p>
              </>
            )}
          </section>
        )}

        {/* ───────── FOOTER ───────── */}
        <footer className="mt-24 text-center">
          <p
            className="font-[family-name:var(--font-display)] text-[16px] italic"
            style={{ color: INK }}
          >
            {footer.lines[0]}
          </p>
          <p className="mt-4 text-[11px] uppercase tracking-[0.24em]" style={{ color: HAZE }}>
            {footer.lines.slice(1).join("  ·  ")}
          </p>
        </footer>
      </div>

      {/* Sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 px-6 pb-5">
        <button
          onClick={() => fd.onCta("sticky")}
          className="mx-auto flex w-full max-w-md items-center justify-center gap-2 rounded-full px-6 py-4 text-[15px] font-medium"
          style={{
            background: INK,
            color: "#F7F4FF",
            boxShadow: "0 22px 48px -20px rgba(38,35,90,0.85)",
          }}
        >
          {hero.ctaLabel}
          <span>→</span>
        </button>
      </div>
    </main>
  );
}
