"use client";

import { Quicksand, Nunito } from "next/font/google";
import type { DesignProps } from "@/designs/types";
import { useFakeDoor } from "@/designs/shared/useFakeDoor";

// Direction: ORGANIC WARMTH. A tender, dreamy reading of the variant-B brand,
// built entirely from soft CSS: blob shapes (asymmetric border-radius), gentle
// radial washes within the lavender→periwinkle→indigo family, rounded forms and
// a tactile, pillowy feel. No photography, no icons — only CSS and text glyphs.
// Quicksand (rounded geometric, variable wght) carries the headings with a soft
// humanist warmth; Nunito (rounded humanist, variable wght) handles body. Ink
// indigo on a luminous lavender mesh. One accent intent, locked page-wide.
const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

// Palette — locked indigo / muted-purple / lavender / periwinkle family.
const INK = "#26235A"; // primary dark text (the ink)
const SOFT = "#5A5690"; // secondary muted purple
const MIST = "#9C98D4"; // eyebrow / quietest tone (same family)
const ACCENT = "#8A86D8"; // single locked accent intent

export default function OrganicWarmthLavender({ content, slug }: DesignProps) {
  const fd = useFakeDoor(slug);
  const { hero, problem, solution, pricing, testimonials, faq, fakedoor, footer } =
    content;

  return (
    <main
      className={`${quicksand.variable} ${nunito.variable} font-[family-name:var(--font-nunito)] relative min-h-screen overflow-hidden antialiased selection:bg-[#D6E4FF] selection:text-[#26235A]`}
      style={{
        color: INK,
        background:
          "radial-gradient(95% 60% at 18% 2%, #F3ECFF 0%, rgba(243,236,255,0) 55%)," +
          "radial-gradient(85% 55% at 88% 14%, #D6E4FF 0%, rgba(214,228,255,0) 55%)," +
          "radial-gradient(120% 80% at 50% 102%, #EBE6FF 0%, rgba(235,230,255,0) 60%)," +
          "linear-gradient(180deg, #F7F4FF 0%, #F3ECFF 48%, #F7F4FF 100%)",
      }}
    >
      {/* drifting soft blobs — dreamlike organic depth, all CSS */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-24 h-72 w-72 opacity-50 blur-3xl ya-blob ya-drift"
        style={{ background: "radial-gradient(circle, #D6E4FF 0%, rgba(214,228,255,0) 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-28 top-[52%] h-80 w-80 opacity-40 blur-3xl ya-blob-2 ya-drift-slow"
        style={{ background: "radial-gradient(circle, #EBE6FF 0%, rgba(235,230,255,0) 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[82%] h-64 w-64 -translate-x-1/2 opacity-40 blur-3xl ya-blob ya-drift"
        style={{ background: "radial-gradient(circle, #F3ECFF 0%, rgba(243,236,255,0) 70%)" }}
      />

      <div className="relative mx-auto max-w-md px-6 pb-40">
        {/* ───────── NAV / brand lockup ───────── */}
        <header className="flex items-center justify-between pt-8">
          <span
            className="font-[family-name:var(--font-quicksand)] text-[18px] font-bold tracking-[-0.01em]"
            style={{ color: INK }}
          >
            {hero.brandLockup}
          </span>
          <span
            className="rounded-full px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em]"
            style={{ background: "rgba(255,255,255,0.6)", color: MIST }}
          >
            Tenderly kept
          </span>
        </header>

        {/* ───────── HERO (text-led, no photo) ───────── */}
        <section className="pt-16 text-center">
          {/* soft organic halo behind the title */}
          <div className="relative">
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-72 -translate-x-1/2 -translate-y-1/2 opacity-70 blur-2xl ya-blob ya-breathe"
              style={{
                background:
                  "radial-gradient(circle at 40% 40%, rgba(214,228,255,0.85) 0%, rgba(243,236,255,0) 70%)",
              }}
            />
            <h1
              className="relative text-balance font-[family-name:var(--font-quicksand)] text-[38px] font-bold leading-[1.08] tracking-[-0.02em]"
              style={{ color: INK }}
            >
              {hero.title}
            </h1>
          </div>
          <p
            className="mx-auto mt-7 max-w-[32ch] text-[16px] leading-[1.7]"
            style={{ color: SOFT }}
          >
            {hero.subtitle}
          </p>

          <button
            onClick={() => fd.onCta("hero")}
            className="group mt-9 inline-flex items-center justify-center gap-2.5 px-9 py-4 text-[15px] font-semibold text-[#F7F4FF] transition-transform duration-300 hover:-translate-y-[2px]"
            style={{
              background: "linear-gradient(150deg, #5A5690 0%, #26235A 100%)",
              borderRadius: "42% 58% 56% 44% / 56% 48% 52% 44%",
              boxShadow: "0 24px 50px -22px rgba(38,35,90,0.6)",
            }}
          >
            {hero.ctaLabel}
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </button>

          <p
            className="mx-auto mt-7 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12.5px]"
            style={{ background: "rgba(255,255,255,0.6)", color: SOFT }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full ya-pulse"
              style={{ background: ACCENT }}
            />
            {hero.reassuranceLine}
          </p>
        </section>

        {/* ───────── PROBLEM ───────── */}
        <section className="mt-36 text-center">
          <p
            className="mb-6 text-[10px] font-semibold uppercase tracking-[0.34em]"
            style={{ color: MIST }}
          >
            The quiet problem
          </p>
          <h2
            className="mx-auto max-w-[20ch] text-balance font-[family-name:var(--font-quicksand)] text-[28px] font-bold leading-[1.2] tracking-[-0.015em]"
            style={{ color: INK }}
          >
            {problem.title}
          </h2>
          <p
            className="mx-auto mt-7 max-w-[34ch] text-[15.5px] leading-[1.75]"
            style={{ color: SOFT }}
          >
            {problem.body}
          </p>
        </section>

        {/* ───────── SOLUTION ───────── */}
        <section className="mt-36">
          <p
            className="mb-10 text-center text-[10px] font-semibold uppercase tracking-[0.34em]"
            style={{ color: MIST }}
          >
            {solution.intro}
          </p>

          <ol className="space-y-7">
            {solution.steps.map((s, i) => (
              <li
                key={i}
                className="px-7 py-9 ya-card"
                style={{
                  background: "rgba(255,255,255,0.55)",
                  borderRadius: "48px 40px 52px 38px",
                  boxShadow: "0 24px 60px -48px rgba(38,35,90,0.5)",
                  backdropFilter: "blur(6px)",
                }}
              >
                <span
                  className="flex h-14 w-14 items-center justify-center font-[family-name:var(--font-quicksand)] text-[22px] font-bold"
                  style={{
                    background: "rgba(214,228,255,0.7)",
                    color: INK,
                    borderRadius: "58% 42% 48% 52% / 50% 56% 44% 50%",
                  }}
                >
                  {i + 1}
                </span>
                <h3
                  className="mt-6 font-[family-name:var(--font-quicksand)] text-[20px] font-bold leading-[1.3] tracking-[-0.01em]"
                  style={{ color: INK }}
                >
                  {s.title}
                </h3>
                <p className="mt-3 text-[14.5px] leading-[1.7]" style={{ color: SOFT }}>
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* ───────── PRICING ───────── */}
        <section ref={fd.pricingRef} className="mt-36 text-center">
          <p
            className="mb-5 text-[10px] font-semibold uppercase tracking-[0.34em]"
            style={{ color: MIST }}
          >
            Membership
          </p>
          <h2
            className="mx-auto max-w-[20ch] text-balance font-[family-name:var(--font-quicksand)] text-[27px] font-bold leading-[1.2] tracking-[-0.015em]"
            style={{ color: INK }}
          >
            {pricing.title}
          </h2>
          <p
            className="mx-auto mt-5 max-w-[34ch] text-[15px] leading-[1.7]"
            style={{ color: SOFT }}
          >
            {pricing.subtitle}
          </p>

          <div className="mt-10 space-y-5">
            {pricing.plans.map((plan, i) =>
              plan.highlight ? (
                <div
                  key={i}
                  className="relative px-7 py-9 text-[#F7F4FF]"
                  style={{
                    background: "linear-gradient(155deg, #2E2A6B 0%, #26235A 100%)",
                    borderRadius: "52px 44px 50px 46px",
                    boxShadow: "0 34px 70px -40px rgba(38,35,90,0.8)",
                  }}
                >
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.2em]"
                    style={{ background: "#C9D2FF", color: INK }}
                  >
                    Most chosen
                  </span>
                  <p
                    className="font-[family-name:var(--font-quicksand)] text-[16px] font-semibold"
                    style={{ color: "#B9C2F2" }}
                  >
                    {plan.name}
                  </p>
                  <p
                    className="mt-2 font-[family-name:var(--font-quicksand)] text-[40px] font-bold leading-none tracking-[-0.02em]"
                  >
                    {plan.price}
                  </p>
                  <p className="mt-3 text-[13px]" style={{ color: "#B9C2F2" }}>
                    {plan.descriptor}
                  </p>
                  <button
                    onClick={() => fd.onCta(`pricing-${plan.name.toLowerCase()}`)}
                    className="mt-7 inline-flex w-full items-center justify-center gap-2 px-7 py-4 text-[15px] font-semibold transition hover:opacity-90"
                    style={{
                      background: "#F7F4FF",
                      color: INK,
                      borderRadius: "44% 56% 52% 48% / 60% 50% 50% 40%",
                    }}
                  >
                    {plan.ctaLabel}
                    <span>→</span>
                  </button>
                </div>
              ) : (
                <div
                  key={i}
                  className="relative px-7 py-9"
                  style={{
                    background: "rgba(255,255,255,0.55)",
                    color: INK,
                    borderRadius: "44px 52px 40px 50px",
                  }}
                >
                  <p
                    className="font-[family-name:var(--font-quicksand)] text-[16px] font-semibold"
                    style={{ color: SOFT }}
                  >
                    {plan.name}
                  </p>
                  <p
                    className="mt-2 font-[family-name:var(--font-quicksand)] text-[40px] font-bold leading-none tracking-[-0.02em]"
                    style={{ color: INK }}
                  >
                    {plan.price}
                  </p>
                  <p className="mt-3 text-[13px]" style={{ color: SOFT }}>
                    {plan.descriptor}
                  </p>
                  <button
                    onClick={() => fd.onCta(`pricing-${plan.name.toLowerCase()}`)}
                    className="mt-7 inline-flex w-full items-center justify-center gap-2 px-7 py-4 text-[15px] font-semibold text-[#F7F4FF] transition hover:-translate-y-[1px]"
                    style={{
                      background: "linear-gradient(150deg, #5A5690 0%, #26235A 100%)",
                      borderRadius: "56% 44% 48% 52% / 50% 60% 40% 50%",
                    }}
                  >
                    {plan.ctaLabel}
                    <span>→</span>
                  </button>
                </div>
              )
            )}
          </div>

          <div
            className="mt-10 px-7 py-9 text-left"
            style={{
              background: "rgba(255,255,255,0.45)",
              borderRadius: "50px 42px 50px 44px",
            }}
          >
            <p
              className="text-center text-[10px] font-semibold uppercase tracking-[0.3em]"
              style={{ color: MIST }}
            >
              Everything included
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-y-3.5">
              {pricing.included.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-[14.5px]"
                  style={{ color: INK }}
                >
                  <span
                    className="flex h-5 w-5 flex-none items-center justify-center text-[11px]"
                    style={{
                      background: "rgba(201,210,255,0.8)",
                      color: INK,
                      borderRadius: "58% 42% 50% 50% / 50% 56% 44% 50%",
                    }}
                  >
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <p
            className="mx-auto mt-7 max-w-[34ch] text-[12.5px] leading-[1.65]"
            style={{ color: SOFT }}
          >
            {pricing.scarcityLine}
          </p>
        </section>

        {/* ───────── TESTIMONIALS ───────── */}
        <section className="mt-36">
          <p
            className="mb-8 text-center text-[10px] font-semibold uppercase tracking-[0.34em]"
            style={{ color: MIST }}
          >
            From those who started
          </p>

          <div className="space-y-6">
            {testimonials.map((t, i) => (
              <figure
                key={i}
                className="px-7 py-9 ya-card"
                style={{
                  background: "rgba(255,255,255,0.55)",
                  borderRadius:
                    i % 2 === 0
                      ? "48px 40px 52px 38px"
                      : "40px 52px 38px 50px",
                }}
              >
                <span
                  aria-hidden
                  className="block font-[family-name:var(--font-quicksand)] text-[46px] font-bold leading-none"
                  style={{ color: "rgba(138,134,216,0.5)" }}
                >
                  &ldquo;
                </span>
                <blockquote
                  className="mt-1 font-[family-name:var(--font-quicksand)] text-[18px] font-semibold leading-[1.5] tracking-[-0.01em]"
                  style={{ color: INK }}
                >
                  {t.quote}
                </blockquote>
                <figcaption
                  className="mt-5 text-[12px] font-semibold uppercase tracking-[0.2em]"
                  style={{ color: SOFT }}
                >
                  {t.name} · {t.age}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ───────── FAQ ───────── */}
        <section className="mt-36">
          <p
            className="mb-8 text-center text-[10px] font-semibold uppercase tracking-[0.34em]"
            style={{ color: MIST }}
          >
            Questions you might have
          </p>
          <div className="space-y-4">
            {faq.map((item, i) => (
              <details
                key={i}
                className="group px-7 py-5 open:bg-white/70"
                style={{
                  background: "rgba(255,255,255,0.5)",
                  borderRadius: "34px 28px 34px 30px",
                }}
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                  <span
                    className="font-[family-name:var(--font-quicksand)] text-[16px] font-bold leading-[1.34] tracking-[-0.01em]"
                    style={{ color: INK }}
                  >
                    {item.q}
                  </span>
                  <span
                    className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center text-[18px] leading-none transition-transform duration-300 group-open:rotate-45"
                    style={{
                      background: "rgba(214,228,255,0.7)",
                      color: INK,
                      borderRadius: "56% 44% 50% 50% / 50% 56% 44% 50%",
                    }}
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

        {/* ───────── FINAL CTA ───────── */}
        <section
          className="relative mt-36 overflow-hidden px-8 py-16 text-center text-[#F7F4FF]"
          style={{
            background: "linear-gradient(155deg, #2E2A6B 0%, #26235A 100%)",
            borderRadius: "60px 48px 58px 50px",
            boxShadow: "0 40px 80px -44px rgba(38,35,90,0.8)",
          }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-12 h-56 w-56 opacity-40 blur-2xl ya-blob ya-breathe"
            style={{ background: "radial-gradient(circle, #5A5690 0%, rgba(90,86,144,0) 70%)" }}
          />
          <h2
            className="relative mx-auto max-w-[16ch] text-balance font-[family-name:var(--font-quicksand)] text-[31px] font-bold leading-[1.14] tracking-[-0.02em]"
          >
            {content.finalCta.headline}
          </h2>
          <button
            onClick={() => fd.onCta("final")}
            className="relative mt-9 inline-flex items-center justify-center gap-2.5 px-9 py-4 text-[15px] font-semibold transition hover:-translate-y-[1px]"
            style={{
              background: "#F7F4FF",
              color: INK,
              borderRadius: "44% 56% 52% 48% / 60% 50% 50% 40%",
            }}
          >
            {content.finalCta.ctaLabel}
            <span>→</span>
          </button>
        </section>

        {/* ───────── FAKE-DOOR ───────── */}
        {fd.showWaitlist && (
          <section
            id="waitlist"
            className="mt-12 px-7 py-11"
            style={{
              background: "rgba(255,255,255,0.6)",
              borderRadius: "56px 46px 54px 48px",
            }}
          >
            {fd.state === "done" ? (
              <div className="text-center">
                <p
                  className="font-[family-name:var(--font-quicksand)] text-[24px] font-bold leading-tight tracking-[-0.01em]"
                  style={{ color: INK }}
                >
                  {content.confirmation.title}
                </p>
                <p
                  className="mx-auto mt-4 max-w-[34ch] text-[14.5px] leading-[1.7]"
                  style={{ color: SOFT }}
                >
                  {content.confirmation.body}
                </p>
              </div>
            ) : (
              <>
                <p
                  className="text-center font-[family-name:var(--font-quicksand)] text-[26px] font-bold leading-[1.15] tracking-[-0.02em]"
                  style={{ color: INK }}
                >
                  {fakedoor.title}
                </p>
                <p
                  className="mx-auto mt-4 max-w-[34ch] text-center text-[14.5px] leading-[1.7]"
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
                    className="w-full rounded-full bg-white/70 px-6 py-4 text-[15px] outline-none ring-1 ring-[rgba(90,86,144,0.25)] focus:ring-2 focus:ring-[#8A86D8]"
                    style={{ color: INK }}
                  />
                  <button
                    type="submit"
                    disabled={fd.state === "loading"}
                    className="w-full px-6 py-4 text-[15px] font-semibold text-[#F7F4FF] disabled:opacity-60"
                    style={{
                      background: "linear-gradient(150deg, #5A5690 0%, #26235A 100%)",
                      borderRadius: "44% 56% 52% 48% / 60% 50% 50% 40%",
                    }}
                  >
                    {fd.state === "loading" ? "..." : fakedoor.submitLabel}
                  </button>
                  {fd.state === "error" && (
                    <p className="text-center text-[13px]" style={{ color: ACCENT }}>
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
            className="font-[family-name:var(--font-quicksand)] text-[16px] font-semibold tracking-[-0.01em]"
            style={{ color: INK }}
          >
            {footer.lines[0]}
          </p>
          <p
            className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em]"
            style={{ color: MIST }}
          >
            {footer.lines.slice(1).join("  ·  ")}
          </p>
        </footer>
      </div>

      {/* Sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 px-6 pb-5">
        <button
          onClick={() => fd.onCta("sticky")}
          className="mx-auto flex w-full max-w-md items-center justify-center gap-2 px-6 py-4 text-[15px] font-semibold text-[#F7F4FF]"
          style={{
            background: "linear-gradient(150deg, #5A5690 0%, #26235A 100%)",
            borderRadius: "40px 34px 40px 36px",
            boxShadow: "0 22px 48px -20px rgba(38,35,90,0.85)",
          }}
        >
          {hero.ctaLabel}
          <span>→</span>
        </button>
      </div>

      {/* CSS-only organic motion (respects reduced motion) */}
      <style>{`
        .ya-blob { border-radius: 58% 42% 47% 53% / 54% 48% 52% 46%; }
        .ya-blob-2 { border-radius: 42% 58% 52% 48% / 48% 54% 46% 52%; }
        @keyframes yaDrift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(14px, -18px) scale(1.06); }
        }
        @keyframes yaDriftSlow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-16px, 14px) scale(1.05); }
        }
        @keyframes yaBreathe {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.7; }
          50% { transform: translate(-50%, -50%) scale(1.08); opacity: 0.85; }
        }
        @keyframes yaPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.55; }
        }
        .ya-drift { animation: yaDrift 16s ease-in-out infinite; }
        .ya-drift-slow { animation: yaDriftSlow 22s ease-in-out infinite; }
        .ya-breathe { animation: yaBreathe 9s ease-in-out infinite; }
        .ya-pulse { animation: yaPulse 2.6s ease-in-out infinite; }
        .ya-card { transition: transform .4s ease, box-shadow .4s ease; }
        .ya-card:hover { transform: translateY(-3px); box-shadow: 0 34px 70px -44px rgba(38,35,90,0.55); }
        @media (prefers-reduced-motion: reduce) {
          .ya-drift, .ya-drift-slow, .ya-breathe, .ya-pulse { animation: none; }
          .ya-card { transition: none; }
        }
      `}</style>
    </main>
  );
}
