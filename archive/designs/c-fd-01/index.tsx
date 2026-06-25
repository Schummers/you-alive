"use client";

import Image from "next/image";
import { Fraunces, Figtree } from "next/font/google";
import type { DesignProps } from "@/designs/types";
import { useFakeDoor } from "@/designs/shared/useFakeDoor";

// Direction: VERY AIRY + VERY ROUNDED, light & calm.
// Cream canvas, deep-forest ink, lime reserved as a single quiet accent.
// Fraunces (a soft, slightly offbeat "wonky" serif) carries the contemplative
// voice; Figtree (a rounded humanist sans) keeps the body warm and legible.
// Full-radius pills, big soft cards, oceans of whitespace, restraint over
// decoration. The hero poster (wordmark already baked in) is framed, not
// overlaid; the page H1 lives on the cream below it.
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

const FOREST = "#16271F";
const LIME = "#C8F169";
const SAGE = "#9DB39A";

export default function AiryRoundedDesign({ content, slug }: DesignProps) {
  const fd = useFakeDoor(slug);
  const { hero, problem, solution, pricing, testimonials, faq, fakedoor, footer } = content;

  return (
    <main
      className={`${fraunces.variable} ${figtree.variable} font-[family-name:var(--font-figtree)] relative min-h-screen bg-[#F1ECDC] text-[#16271F] antialiased selection:bg-[#C8F169] selection:text-[#16271F]`}
    >
      <div className="relative mx-auto max-w-md px-6 pb-36">
        {/* ───────── NAV ───────── */}
        <header className="flex items-center justify-between pt-7">
          <span className="font-[family-name:var(--font-fraunces)] text-[18px] italic text-[#16271F]">
            {hero.brandLockup}
          </span>
          <span className="rounded-full border border-[#16271F]/15 px-3.5 py-1.5 text-[10px] uppercase tracking-[0.24em] text-[#5d6f63]">
            Legacy, gently kept
          </span>
        </header>

        {/* ───────── HERO ───────── */}
        <section className="pt-9">
          <div className="overflow-hidden rounded-[40px] shadow-[0_36px_80px_-50px_rgba(22,39,31,0.6)] ring-1 ring-[#16271F]/[0.06]">
            <div className="relative aspect-[3/4] w-full">
              <Image
                src="/designs/c/hero.jpeg"
                alt=""
                fill
                priority
                sizes="(max-width: 768px) 100vw, 448px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="px-1 pt-11 text-center">
            <h1
              className="text-balance font-[family-name:var(--font-fraunces)] text-[37px] font-medium leading-[1.06] tracking-[-0.012em] text-[#16271F]"
            >
              {hero.title}
            </h1>
            <p className="mx-auto mt-6 max-w-[32ch] text-[16px] leading-[1.65] text-[#4a5a50]">
              {hero.subtitle}
            </p>

            <button
              onClick={() => fd.onCta("hero")}
              className="group mt-9 inline-flex items-center justify-center gap-2.5 rounded-full bg-[#16271F] px-9 py-4 text-[15px] font-medium text-[#F1ECDC] transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-[0_24px_46px_-22px_rgba(22,39,31,0.7)]"
            >
              {hero.ctaLabel}
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </button>

            <p className="mt-7 inline-flex items-center gap-2.5 rounded-full bg-[#16271F]/[0.04] px-4 py-1.5 text-[12.5px] text-[#5d6f63]">
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: LIME }} />
              {hero.reassuranceLine}
            </p>
          </div>
        </section>

        {/* ───────── PROBLEM ───────── */}
        <section className="mt-32 text-center">
          <p className="mb-6 text-[10px] uppercase tracking-[0.34em] text-[#8a9a85]">
            The quiet problem
          </p>
          <h2 className="mx-auto max-w-[20ch] text-balance font-[family-name:var(--font-fraunces)] text-[28px] leading-[1.16] tracking-[-0.01em] text-[#16271F]">
            {problem.title}
          </h2>
          <p className="mx-auto mt-7 max-w-[34ch] text-[15.5px] leading-[1.7] text-[#4a5a50]">
            {problem.body}
          </p>
        </section>

        {/* ───────── SOLUTION ───────── */}
        <section className="mt-32">
          <div className="text-center">
            <p className="mb-4 text-[10px] uppercase tracking-[0.34em] text-[#8a9a85]">
              {solution.intro}
            </p>
            <p className="font-[family-name:var(--font-fraunces)] text-[15px] italic text-[#5d6f63]">
              three quiet steps
            </p>
          </div>

          <ol className="mt-12 space-y-6">
            {solution.steps.map((s, i) => (
              <li
                key={i}
                className="rounded-[34px] bg-white/55 px-7 py-8 shadow-[0_20px_54px_-44px_rgba(22,39,31,0.6)] ring-1 ring-[#16271F]/[0.05]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full font-[family-name:var(--font-fraunces)] text-[22px] italic" style={{ backgroundColor: LIME, color: FOREST }}>
                  {i + 1}
                </span>
                <h3 className="mt-6 font-[family-name:var(--font-fraunces)] text-[20px] leading-[1.25] tracking-[-0.005em] text-[#16271F]">
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
          <p className="mb-5 text-[10px] uppercase tracking-[0.34em] text-[#8a9a85]">
            Membership
          </p>
          <h2 className="mx-auto max-w-[20ch] text-balance font-[family-name:var(--font-fraunces)] text-[27px] leading-[1.16] tracking-[-0.01em] text-[#16271F]">
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
                    ? "relative rounded-[34px] bg-[#16271F] px-7 py-8 text-[#F1ECDC] shadow-[0_30px_64px_-38px_rgba(22,39,31,0.82)]"
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
                  className="font-[family-name:var(--font-fraunces)] text-[15px] italic"
                  style={{ color: plan.highlight ? SAGE : "#5d6f63" }}
                >
                  {plan.name}
                </p>
                <p className="mt-2 font-[family-name:var(--font-fraunces)] text-[40px] font-medium leading-none tracking-[-0.01em]">
                  {plan.price}
                </p>
                <p
                  className="mt-3 text-[13px]"
                  style={{ color: plan.highlight ? SAGE : "#5d6f63" }}
                >
                  {plan.descriptor}
                </p>
                <button
                  onClick={() => fd.onCta(`pricing-${plan.name.toLowerCase()}`)}
                  className={
                    plan.highlight
                      ? "mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-semibold text-[#16271F] transition hover:brightness-105"
                      : "mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#16271F] px-7 py-3.5 text-[15px] font-medium text-[#F1ECDC] transition hover:bg-[#1f3429]"
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
                <li key={i} className="flex items-center gap-3 text-[14.5px] text-[#37463d]">
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
        <section className="mt-32">
          <p className="mb-8 text-center text-[10px] uppercase tracking-[0.34em] text-[#8a9a85]">
            From those who started
          </p>
          <div className="space-y-6">
            {testimonials.map((t, i) => (
              <figure
                key={i}
                className="rounded-[34px] bg-white/55 px-7 py-8 ring-1 ring-[#16271F]/[0.05]"
              >
                <span
                  aria-hidden
                  className="block font-[family-name:var(--font-fraunces)] text-[44px] leading-none"
                  style={{ color: SAGE }}
                >
                  &ldquo;
                </span>
                <blockquote className="mt-1 font-[family-name:var(--font-fraunces)] text-[18.5px] leading-[1.5] tracking-[-0.005em] text-[#16271F]">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-5 text-[12px] uppercase tracking-[0.18em] text-[#5d6f63]">
                  {t.name} · {t.age}
                </figcaption>
              </figure>
            ))}
          </div>
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
                  <span className="font-[family-name:var(--font-fraunces)] text-[17px] leading-[1.3] tracking-[-0.005em] text-[#16271F]">
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
          <h2 className="mx-auto max-w-[16ch] text-balance font-[family-name:var(--font-fraunces)] text-[31px] font-medium leading-[1.1] tracking-[-0.01em]">
            {content.finalCta.headline}
          </h2>
          <button
            onClick={() => fd.onCta("final")}
            className="mt-9 inline-flex items-center justify-center gap-2.5 rounded-full px-9 py-4 text-[15px] font-semibold text-[#16271F] transition hover:brightness-105"
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
                <p className="font-[family-name:var(--font-fraunces)] text-[24px] leading-tight text-[#16271F]">
                  {content.confirmation.title}
                </p>
                <p className="mx-auto mt-4 max-w-[34ch] text-[14.5px] leading-[1.65] text-[#4a5a50]">
                  {content.confirmation.body}
                </p>
              </div>
            ) : (
              <>
                <p className="text-center font-[family-name:var(--font-fraunces)] text-[26px] italic leading-[1.15] tracking-[-0.01em] text-[#16271F]">
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
                    className="w-full rounded-full bg-[#16271F] px-6 py-4 text-[15px] font-medium text-[#F1ECDC] disabled:opacity-60"
                  >
                    {fd.state === "loading" ? "..." : fakedoor.submitLabel}
                  </button>
                  {fd.state === "error" && (
                    <p className="text-center text-[13px] text-[#16271F]">
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
          <p className="font-[family-name:var(--font-fraunces)] text-[16px] italic text-[#16271F]">
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
          className="mx-auto flex w-full max-w-md items-center justify-center gap-2 rounded-full bg-[#16271F] px-6 py-4 text-[15px] font-medium text-[#F1ECDC] shadow-[0_22px_46px_-20px_rgba(22,39,31,0.85)]"
        >
          {hero.ctaLabel}
          <span>→</span>
        </button>
      </div>
    </main>
  );
}
