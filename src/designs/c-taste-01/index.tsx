"use client";

import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";
import type { DesignProps } from "@/designs/types";
import { useFakeDoor } from "@/designs/shared/useFakeDoor";

// Direction: VERY AIRY + VERY ROUNDED, light & calm (variant C, taste-skill).
// NO PHOTOGRAPHY. The hero is a typographic poster on a cream canvas: the
// "You Alive?" wordmark sits inside a soft, full-radius lime color-field
// (a sealed-envelope feeling rendered purely in CSS, no images, no SVG icons),
// and the page H1 carries the message below it. Deep-forest ink, cream ground,
// electric lime as the single locked accent. Bricolage Grotesque is the
// characterful-but-dignified display (warm, slightly offbeat, never serif);
// Hanken Grotesk keeps the body soft and legible. Full-radius pills, big
// rounded surfaces, hairline rings instead of heavy cards, oceans of
// whitespace. Motion is CSS-only and collapses under prefers-reduced-motion.
const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const FOREST = "#16271F";
const LIME = "#C8F169";

export default function AiryRoundedTaste({ content, slug }: DesignProps) {
  const fd = useFakeDoor(slug);
  const { hero, problem, solution, pricing, testimonials, faq, fakedoor, footer } =
    content;

  return (
    <main
      className={`${display.variable} ${body.variable} font-[family-name:var(--font-body)] relative min-h-screen bg-[#F1ECDC] text-[#16271F] antialiased selection:bg-[#C8F169] selection:text-[#16271F]`}
    >
      <style>{`
        @keyframes ya-rise { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
        .ya-rise { animation: ya-rise 0.75s cubic-bezier(0.16,1,0.3,1) both; }
        .ya-rise-2 { animation: ya-rise 0.75s cubic-bezier(0.16,1,0.3,1) 0.08s both; }
        .ya-rise-3 { animation: ya-rise 0.75s cubic-bezier(0.16,1,0.3,1) 0.16s both; }
        @media (prefers-reduced-motion: reduce) {
          .ya-rise, .ya-rise-2, .ya-rise-3 { animation: none; }
        }
      `}</style>

      <div className="relative mx-auto max-w-md px-6 pb-40">
        {/* ───────── NAV ───────── */}
        <header className="flex items-center justify-between pt-8">
          <span className="font-[family-name:var(--font-display)] text-[19px] font-semibold tracking-[-0.01em]">
            {hero.brandLockup}
          </span>
          <span className="rounded-full border border-[#16271F]/12 px-4 py-1.5 text-[10px] uppercase tracking-[0.26em] text-[#5d6f63]">
            Gently kept
          </span>
        </header>

        {/* ───────── HERO ───────── */}
        <section className="pt-10">
          {/* Text-led poster: wordmark inside a soft lime color-field, no photo */}
          <div
            className="ya-rise relative overflow-hidden rounded-[44px] px-8 pb-12 pt-14 ring-1 ring-[#16271F]/[0.06]"
            style={{
              background:
                "radial-gradient(120% 90% at 50% 0%, rgba(200,241,105,0.55) 0%, rgba(200,241,105,0.16) 42%, rgba(241,236,220,0) 78%), #F4EFE0",
            }}
          >
            <span
              className="mx-auto flex h-16 w-16 items-center justify-center rounded-full font-[family-name:var(--font-display)] text-[26px] font-semibold"
              style={{ backgroundColor: FOREST, color: LIME }}
            >
              Y
            </span>
            <p className="mt-7 text-center font-[family-name:var(--font-display)] text-[44px] font-semibold leading-[0.98] tracking-[-0.03em]">
              {hero.brandLockup}
            </p>
            <p className="mx-auto mt-5 max-w-[26ch] text-center text-[13px] uppercase tracking-[0.24em] text-[#5d6f63]">
              Prepared today, delivered when it matters
            </p>
          </div>

          <div className="px-1 pt-12 text-center">
            <h1 className="ya-rise-2 text-balance font-[family-name:var(--font-display)] text-[38px] font-semibold leading-[1.05] tracking-[-0.02em]">
              {hero.title}
            </h1>
            <p className="ya-rise-2 mx-auto mt-6 max-w-[32ch] text-[16px] leading-[1.65] text-[#4a5a50]">
              {hero.subtitle}
            </p>

            <button
              onClick={() => fd.onCta("hero")}
              className="ya-rise-3 group mt-9 inline-flex items-center justify-center gap-2.5 rounded-full bg-[#16271F] px-9 py-4 text-[15px] font-medium text-[#F1ECDC] transition-transform duration-300 hover:-translate-y-[2px] active:scale-[0.98]"
            >
              {hero.ctaLabel}
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                →
              </span>
            </button>

            <p className="ya-rise-3 mx-auto mt-7 inline-flex items-center gap-2.5 rounded-full bg-[#16271F]/[0.04] px-4 py-1.5 text-[12.5px] text-[#5d6f63]">
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: LIME }}
              />
              {hero.reassuranceLine}
            </p>
          </div>
        </section>

        {/* ───────── PROBLEM ───────── */}
        <section className="mt-32 text-center">
          <h2 className="mx-auto max-w-[20ch] text-balance font-[family-name:var(--font-display)] text-[28px] font-semibold leading-[1.16] tracking-[-0.015em]">
            {problem.title}
          </h2>
          <p className="mx-auto mt-7 max-w-[34ch] text-[15.5px] leading-[1.7] text-[#4a5a50]">
            {problem.body}
          </p>
        </section>

        {/* ───────── SOLUTION ───────── */}
        <section className="mt-32">
          <p className="mb-10 text-center text-[10px] uppercase tracking-[0.34em] text-[#8a9a85]">
            {solution.intro}
          </p>

          <ol className="space-y-6">
            {solution.steps.map((s, i) => (
              <li
                key={i}
                className="rounded-[34px] bg-white/55 px-7 py-8 ring-1 ring-[#16271F]/[0.05]"
              >
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-full font-[family-name:var(--font-display)] text-[20px] font-semibold"
                  style={{ backgroundColor: LIME, color: FOREST }}
                >
                  {i + 1}
                </span>
                <h3 className="mt-6 font-[family-name:var(--font-display)] text-[20px] font-semibold leading-[1.25] tracking-[-0.01em]">
                  {s.title}
                </h3>
                <p className="mt-3 text-[14.5px] leading-[1.65] text-[#4a5a50]">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* ───────── PRICING ───────── */}
        <section ref={fd.pricingRef} className="mt-32 text-center">
          <h2 className="mx-auto max-w-[20ch] text-balance font-[family-name:var(--font-display)] text-[27px] font-semibold leading-[1.16] tracking-[-0.015em]">
            {pricing.title}
          </h2>
          <p className="mx-auto mt-5 max-w-[34ch] text-[15px] leading-[1.65] text-[#4a5a50]">
            {pricing.subtitle}
          </p>

          <div className="mt-10 space-y-5">
            {pricing.plans.map((plan, i) => (
              <div
                key={i}
                className={
                  plan.highlight
                    ? "relative rounded-[34px] bg-[#16271F] px-7 py-8 text-[#F1ECDC]"
                    : "relative rounded-[34px] bg-white/55 px-7 py-8 text-[#16271F] ring-1 ring-[#16271F]/[0.06]"
                }
              >
                {plan.highlight && (
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.16em]"
                    style={{ backgroundColor: LIME, color: FOREST }}
                  >
                    Most chosen
                  </span>
                )}
                <p
                  className="text-[13px] uppercase tracking-[0.16em]"
                  style={{ color: plan.highlight ? "#9DB39A" : "#5d6f63" }}
                >
                  {plan.name}
                </p>
                <p className="mt-3 font-[family-name:var(--font-display)] text-[38px] font-semibold leading-none tracking-[-0.015em]">
                  {plan.price}
                </p>
                <p
                  className="mt-3 text-[13px]"
                  style={{ color: plan.highlight ? "#9DB39A" : "#5d6f63" }}
                >
                  {plan.descriptor}
                </p>
                <button
                  onClick={() => fd.onCta(`pricing-${plan.name.toLowerCase()}`)}
                  className={
                    plan.highlight
                      ? "mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-semibold text-[#16271F] transition hover:brightness-105 active:scale-[0.98]"
                      : "mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#16271F] px-7 py-3.5 text-[15px] font-medium text-[#F1ECDC] transition hover:bg-[#1f3429] active:scale-[0.98]"
                  }
                  style={plan.highlight ? { backgroundColor: LIME } : undefined}
                >
                  {plan.ctaLabel}
                  <span>→</span>
                </button>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-[34px] bg-white/45 px-7 py-8 text-left ring-1 ring-[#16271F]/[0.05]">
            <p className="text-center text-[10px] uppercase tracking-[0.3em] text-[#8a9a85]">
              Everything included
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-y-3.5">
              {pricing.included.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-[14.5px] text-[#37463d]"
                >
                  <span
                    className="flex h-5 w-5 flex-none items-center justify-center rounded-full text-[11px]"
                    style={{ backgroundColor: LIME, color: FOREST }}
                  >
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <p className="mx-auto mt-7 max-w-[34ch] text-[12.5px] leading-[1.6] text-[#5d6f63]">
            {pricing.scarcityLine}
          </p>
        </section>

        {/* ───────── TESTIMONIALS ───────── */}
        <section className="mt-32 space-y-6">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="rounded-[34px] bg-white/55 px-7 py-8 ring-1 ring-[#16271F]/[0.05]"
            >
              <blockquote className="font-[family-name:var(--font-display)] text-[18.5px] font-medium leading-[1.5] tracking-[-0.01em]">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 text-[12px] uppercase tracking-[0.18em] text-[#5d6f63]">
                {t.name}, {t.age}
              </figcaption>
            </figure>
          ))}
        </section>

        {/* ───────── FAQ ───────── */}
        <section className="mt-32">
          <p className="mb-8 text-center text-[10px] uppercase tracking-[0.34em] text-[#8a9a85]">
            Questions you might have
          </p>
          <div className="space-y-4">
            {faq.map((item, i) => (
              <details
                key={i}
                className="group rounded-[28px] bg-white/55 px-7 py-5 ring-1 ring-[#16271F]/[0.05] open:bg-white/70"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                  <span className="font-[family-name:var(--font-display)] text-[17px] font-medium leading-[1.3] tracking-[-0.005em]">
                    {item.q}
                  </span>
                  <span
                    className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-full text-[18px] leading-none transition-transform duration-300 group-open:rotate-45"
                    style={{ backgroundColor: LIME, color: FOREST }}
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 text-[14px] leading-[1.65] text-[#4a5a50]">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* ───────── FINAL CTA ───────── */}
        <section className="mt-32 rounded-[40px] bg-[#16271F] px-8 py-14 text-center text-[#F1ECDC]">
          <h2 className="mx-auto max-w-[16ch] text-balance font-[family-name:var(--font-display)] text-[31px] font-semibold leading-[1.1] tracking-[-0.015em]">
            {content.finalCta.headline}
          </h2>
          <button
            onClick={() => fd.onCta("final")}
            className="mt-9 inline-flex items-center justify-center gap-2.5 rounded-full px-9 py-4 text-[15px] font-semibold text-[#16271F] transition hover:brightness-105 active:scale-[0.98]"
            style={{ backgroundColor: LIME }}
          >
            {content.finalCta.ctaLabel}
            <span>→</span>
          </button>
        </section>

        {/* ───────── FAKE-DOOR ───────── */}
        {fd.showWaitlist && (
          <section
            id="waitlist"
            className="mt-12 rounded-[40px] bg-white/60 px-7 py-10 ring-1 ring-[#16271F]/[0.06]"
          >
            {fd.state === "done" ? (
              <div className="text-center">
                <p className="font-[family-name:var(--font-display)] text-[24px] font-semibold leading-tight">
                  {content.confirmation.title}
                </p>
                <p className="mx-auto mt-4 max-w-[34ch] text-[14.5px] leading-[1.65] text-[#4a5a50]">
                  {content.confirmation.body}
                </p>
              </div>
            ) : (
              <>
                <p className="text-center font-[family-name:var(--font-display)] text-[26px] font-semibold leading-[1.15] tracking-[-0.015em]">
                  {fakedoor.title}
                </p>
                <p className="mx-auto mt-4 max-w-[34ch] text-center text-[14.5px] leading-[1.65] text-[#4a5a50]">
                  {fakedoor.body}
                </p>
                <form onSubmit={fd.submit} className="mt-7 flex flex-col gap-3">
                  <input
                    type="email"
                    required
                    value={fd.email}
                    onChange={(e) => fd.setEmail(e.target.value)}
                    placeholder={fakedoor.emailPlaceholder}
                    className="w-full rounded-full border border-[#16271F]/15 bg-[#F1ECDC] px-6 py-4 text-[15px] text-[#16271F] placeholder:text-[#8a9a85] focus:border-[#16271F] focus:outline-none"
                  />
                  <button
                    type="submit"
                    disabled={fd.state === "loading"}
                    className="w-full rounded-full bg-[#16271F] px-6 py-4 text-[15px] font-medium text-[#F1ECDC] transition active:scale-[0.98] disabled:opacity-60"
                  >
                    {fd.state === "loading" ? "Saving..." : fakedoor.submitLabel}
                  </button>
                  {fd.state === "error" && (
                    <p className="text-center text-[13px] text-[#9F2F2D]">
                      Something went wrong. Try again.
                    </p>
                  )}
                </form>
                <p className="mt-5 text-center text-[12px] text-[#5d6f63]">
                  {fakedoor.privacyLine}
                </p>
              </>
            )}
          </section>
        )}

        {/* ───────── FOOTER ───────── */}
        <footer className="mt-24 text-center">
          <p className="font-[family-name:var(--font-display)] text-[16px] font-medium">
            {footer.lines[0]}
          </p>
          <p className="mt-4 text-[11px] uppercase tracking-[0.24em] text-[#8a9a85]">
            {footer.lines.slice(1).join("  ·  ")}
          </p>
        </footer>
      </div>

      {/* Sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 px-6 pb-5">
        <button
          onClick={() => fd.onCta("sticky")}
          className="mx-auto flex w-full max-w-md items-center justify-center gap-2 rounded-full bg-[#16271F] px-6 py-4 text-[15px] font-medium text-[#F1ECDC] shadow-[0_22px_46px_-20px_rgba(22,39,31,0.85)] active:scale-[0.98]"
        >
          {hero.ctaLabel}
          <span>→</span>
        </button>
      </div>
    </main>
  );
}
