"use client";

import Image from "next/image";
import { Newsreader, Hanken_Grotesk } from "next/font/google";
import type { DesignProps } from "@/designs/types";
import { useFakeDoor } from "@/designs/shared/useFakeDoor";

// Direction: VERY AIRY + VERY ROUNDED. A bright, breathing, serene reading of
// the brand. Soft literary serif (Newsreader, with optical sizing + italics)
// for the contemplative voice; rounded humanist sans (Hanken Grotesk) for body.
// Full-radius pills, soft rounded cards, generous negative space, restraint
// over decoration. Cream nudged one notch brighter for a light, calm feel.
const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  axes: ["opsz"],
  style: ["normal", "italic"],
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

export default function AiryRoundedDesign({ content, slug }: DesignProps) {
  const fd = useFakeDoor(slug);
  const { hero, problem, solution, pricing, testimonials, faq, fakedoor, footer } = content;

  return (
    <main
      className={`${newsreader.variable} ${hanken.variable} font-[family-name:var(--font-hanken)] relative min-h-screen bg-[#F7F3EB] text-[#1F2A22] antialiased selection:bg-[#B5754E] selection:text-[#F7F3EB]`}
    >
      <div className="relative mx-auto max-w-md px-6 pb-36">
        {/* ───────── HERO ───────── */}
        <header className="pt-6">
          <div className="flex items-center justify-between px-1">
            <span className="font-[family-name:var(--font-newsreader)] text-[17px] italic text-[#1F2A22]">
              {hero.brandLockup}
            </span>
            <span className="rounded-full border border-[#1F2A22]/15 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-[#6a7a6f]">
              Legacy, gently kept
            </span>
          </div>

          <div className="mt-6 overflow-hidden rounded-[36px] shadow-[0_30px_70px_-40px_rgba(31,42,34,0.55)]">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/designs/a/hero.jpeg"
                alt=""
                fill
                priority
                sizes="(max-width: 768px) 100vw, 450px"
                className="object-cover"
              />
            </div>
          </div>

          <section className="px-1 pt-10 text-center">
            <h1
              className="text-balance font-[family-name:var(--font-newsreader)] text-[34px] leading-[1.08] tracking-[-0.01em] text-[#1F2A22]"
              style={{ fontVariationSettings: '"opsz" 72' }}
            >
              {hero.title}
            </h1>
            <p className="mx-auto mt-6 max-w-[32ch] text-[16px] leading-[1.65] text-[#4a5a4f]">
              {hero.subtitle}
            </p>

            <button
              onClick={() => fd.onCta("hero")}
              className="group mt-9 inline-flex items-center justify-center gap-2.5 rounded-full bg-[#1F2A22] px-9 py-4 text-[15px] font-medium text-[#F7F3EB] transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-[0_22px_44px_-22px_rgba(31,42,34,0.75)]"
            >
              {hero.ctaLabel}
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </button>

            <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#1F2A22]/[0.04] px-4 py-1.5 text-[12.5px] text-[#6a7a6f]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#B5754E]" />
              {hero.reassuranceLine}
            </p>
          </section>
        </header>

        {/* ───────── PROBLEM ───────── */}
        <section className="mt-32 text-center">
          <p className="mb-6 text-[10px] uppercase tracking-[0.34em] text-[#a08a6d]">
            The quiet problem
          </p>
          <h2
            className="mx-auto max-w-[20ch] text-balance font-[family-name:var(--font-newsreader)] text-[27px] leading-[1.18] tracking-[-0.01em] text-[#1F2A22]"
            style={{ fontVariationSettings: '"opsz" 48' }}
          >
            {problem.title}
          </h2>
          <p className="mx-auto mt-7 max-w-[34ch] text-[15.5px] leading-[1.7] text-[#4a5a4f]">
            {problem.body}
          </p>
        </section>

        {/* ───────── SOLUTION ───────── */}
        <section className="mt-32">
          <div className="text-center">
            <p className="mb-4 text-[10px] uppercase tracking-[0.34em] text-[#a08a6d]">
              {solution.intro}
            </p>
            <p className="font-[family-name:var(--font-newsreader)] text-[15px] italic text-[#6a7a6f]">
              three quiet steps
            </p>
          </div>

          <ol className="mt-12 space-y-7">
            {solution.steps.map((s, i) => (
              <li
                key={i}
                className="rounded-[32px] bg-white/55 px-7 py-8 shadow-[0_18px_50px_-40px_rgba(31,42,34,0.6)] ring-1 ring-[#1F2A22]/[0.05]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#B5754E]/12 font-[family-name:var(--font-newsreader)] text-[22px] italic text-[#B5754E]">
                  {i + 1}
                </span>
                <h3
                  className="mt-6 font-[family-name:var(--font-newsreader)] text-[20px] leading-[1.25] tracking-[-0.005em] text-[#1F2A22]"
                  style={{ fontVariationSettings: '"opsz" 36' }}
                >
                  {s.title}
                </h3>
                <p className="mt-3 text-[14.5px] leading-[1.65] text-[#4a5a4f]">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* ───────── PRICING ───────── */}
        <section
          ref={fd.pricingRef}
          className="mt-32 text-center"
        >
          <p className="mb-5 text-[10px] uppercase tracking-[0.34em] text-[#a08a6d]">
            Membership
          </p>
          <h2
            className="mx-auto max-w-[20ch] text-balance font-[family-name:var(--font-newsreader)] text-[26px] leading-[1.18] tracking-[-0.01em] text-[#1F2A22]"
            style={{ fontVariationSettings: '"opsz" 48' }}
          >
            {pricing.title}
          </h2>
          <p className="mx-auto mt-5 max-w-[34ch] text-[15px] leading-[1.65] text-[#4a5a4f]">
            {pricing.subtitle}
          </p>

          <div className="mt-10 space-y-5">
            {pricing.plans.map((plan, i) => (
              <div
                key={i}
                className={
                  plan.highlight
                    ? "relative rounded-[32px] bg-[#1F2A22] px-7 py-8 text-[#F7F3EB] shadow-[0_28px_60px_-36px_rgba(31,42,34,0.8)]"
                    : "relative rounded-[32px] bg-white/55 px-7 py-8 text-[#1F2A22] ring-1 ring-[#1F2A22]/[0.06]"
                }
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#B5754E] px-4 py-1 text-[10px] uppercase tracking-[0.18em] text-[#F7F3EB]">
                    Most chosen
                  </span>
                )}
                <p
                  className={`font-[family-name:var(--font-newsreader)] text-[15px] italic ${
                    plan.highlight ? "text-[#cdbb98]" : "text-[#6a7a6f]"
                  }`}
                >
                  {plan.name}
                </p>
                <p
                  className="mt-2 font-[family-name:var(--font-newsreader)] text-[40px] leading-none tracking-[-0.01em]"
                  style={{ fontVariationSettings: '"opsz" 72' }}
                >
                  {plan.price}
                </p>
                <p
                  className={`mt-3 text-[13px] ${
                    plan.highlight ? "text-[#cdbb98]" : "text-[#6a7a6f]"
                  }`}
                >
                  {plan.descriptor}
                </p>
                <button
                  onClick={() => fd.onCta(`pricing-${plan.name.toLowerCase()}`)}
                  className={
                    plan.highlight
                      ? "mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#F7F3EB] px-7 py-3.5 text-[15px] font-medium text-[#1F2A22] transition hover:bg-white"
                      : "mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1F2A22] px-7 py-3.5 text-[15px] font-medium text-[#F7F3EB] transition hover:bg-[#26342b]"
                  }
                >
                  {plan.ctaLabel}
                  <span>→</span>
                </button>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-[32px] bg-white/45 px-7 py-8 text-left ring-1 ring-[#1F2A22]/[0.05]">
            <p className="text-center text-[10px] uppercase tracking-[0.3em] text-[#a08a6d]">
              Everything included
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-x-5 gap-y-3.5">
              {pricing.included.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-[14.5px] text-[#3a4a3f]">
                  <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[#B5754E]/15 text-[11px] text-[#B5754E]">
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <p className="mx-auto mt-7 max-w-[34ch] text-[12.5px] leading-[1.6] text-[#6a7a6f]">
            {pricing.scarcityLine}
          </p>
        </section>

        {/* ───────── TESTIMONIALS ───────── */}
        <section className="mt-32">
          <p className="mb-8 text-center text-[10px] uppercase tracking-[0.34em] text-[#a08a6d]">
            From those who started
          </p>

          <div className="space-y-6">
            {testimonials.map((t, i) => (
              <figure
                key={i}
                className="rounded-[32px] bg-white/55 px-7 py-8 ring-1 ring-[#1F2A22]/[0.05]"
              >
                <span
                  aria-hidden
                  className="block font-[family-name:var(--font-newsreader)] text-[44px] leading-none text-[#B5754E]/45"
                  style={{ fontVariationSettings: '"opsz" 72' }}
                >
                  &ldquo;
                </span>
                <blockquote
                  className="mt-1 font-[family-name:var(--font-newsreader)] text-[18.5px] leading-[1.5] tracking-[-0.005em] text-[#1F2A22]"
                  style={{ fontVariationSettings: '"opsz" 36' }}
                >
                  {t.quote}
                </blockquote>
                <figcaption className="mt-5 text-[12px] uppercase tracking-[0.18em] text-[#6a7a6f]">
                  {t.name} · {t.age}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ───────── FAQ ───────── */}
        <section className="mt-32">
          <p className="mb-8 text-center text-[10px] uppercase tracking-[0.34em] text-[#a08a6d]">
            Questions you might have
          </p>
          <div className="space-y-4">
            {faq.map((item, i) => (
              <details
                key={i}
                className="group rounded-[28px] bg-white/55 px-7 py-5 ring-1 ring-[#1F2A22]/[0.05] open:bg-white/70"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                  <span
                    className="font-[family-name:var(--font-newsreader)] text-[17px] leading-[1.3] tracking-[-0.005em] text-[#1F2A22]"
                    style={{ fontVariationSettings: '"opsz" 36' }}
                  >
                    {item.q}
                  </span>
                  <span className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-full bg-[#B5754E]/12 text-[18px] leading-none text-[#B5754E] transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-[14px] leading-[1.65] text-[#4a5a4f]">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* ───────── FINAL CTA ───────── */}
        <section className="mt-32 rounded-[36px] bg-[#1F2A22] px-8 py-14 text-center text-[#F7F3EB]">
          <h2
            className="mx-auto max-w-[16ch] text-balance font-[family-name:var(--font-newsreader)] text-[30px] leading-[1.12] tracking-[-0.01em]"
            style={{ fontVariationSettings: '"opsz" 72' }}
          >
            {content.finalCta.headline}
          </h2>
          <button
            onClick={() => fd.onCta("final")}
            className="mt-9 inline-flex items-center justify-center gap-2.5 rounded-full bg-[#F7F3EB] px-9 py-4 text-[15px] font-medium text-[#1F2A22] transition hover:bg-white"
          >
            {content.finalCta.ctaLabel}
            <span>→</span>
          </button>
        </section>

        {/* ───────── FAKE-DOOR ───────── */}
        {fd.showWaitlist && (
          <section
            id="waitlist"
            className="mt-12 rounded-[36px] bg-white/60 px-7 py-10 ring-1 ring-[#1F2A22]/[0.06]"
          >
            {fd.state === "done" ? (
              <div className="text-center">
                <p
                  className="font-[family-name:var(--font-newsreader)] text-[24px] leading-tight text-[#1F2A22]"
                  style={{ fontVariationSettings: '"opsz" 48' }}
                >
                  {content.confirmation.title}
                </p>
                <p className="mx-auto mt-4 max-w-[34ch] text-[14.5px] leading-[1.65] text-[#4a5a4f]">
                  {content.confirmation.body}
                </p>
              </div>
            ) : (
              <>
                <p
                  className="text-center font-[family-name:var(--font-newsreader)] text-[26px] italic leading-[1.15] tracking-[-0.01em] text-[#1F2A22]"
                  style={{ fontVariationSettings: '"opsz" 48' }}
                >
                  {fakedoor.title}
                </p>
                <p className="mx-auto mt-4 max-w-[34ch] text-center text-[14.5px] leading-[1.65] text-[#4a5a4f]">
                  {fakedoor.body}
                </p>
                <form onSubmit={fd.submit} className="mt-7 flex flex-col gap-3">
                  <input
                    type="email"
                    required
                    value={fd.email}
                    onChange={(e) => fd.setEmail(e.target.value)}
                    placeholder={fakedoor.emailPlaceholder}
                    className="w-full rounded-full border border-[#1F2A22]/15 bg-[#F7F3EB] px-6 py-4 text-[15px] text-[#1F2A22] placeholder:text-[#9c8a6d] focus:border-[#1F2A22] focus:outline-none"
                  />
                  <button
                    type="submit"
                    disabled={fd.state === "loading"}
                    className="w-full rounded-full bg-[#1F2A22] px-6 py-4 text-[15px] font-medium text-[#F7F3EB] disabled:opacity-60"
                  >
                    {fd.state === "loading" ? "..." : fakedoor.submitLabel}
                  </button>
                  {fd.state === "error" && (
                    <p className="text-center text-[13px] text-[#B5754E]">
                      Something went wrong. Try again.
                    </p>
                  )}
                </form>
                <p className="mt-5 text-center text-[12px] text-[#6a7a6f]">
                  {fakedoor.privacyLine}
                </p>
              </>
            )}
          </section>
        )}

        {/* ───────── FOOTER ───────── */}
        <footer className="mt-24 text-center">
          <p
            className="font-[family-name:var(--font-newsreader)] text-[16px] italic text-[#1F2A22]"
            style={{ fontVariationSettings: '"opsz" 36' }}
          >
            {footer.lines[0]}
          </p>
          <p className="mt-4 text-[11px] uppercase tracking-[0.24em] text-[#9c8a6d]">
            {footer.lines.slice(1).join("  ·  ")}
          </p>
        </footer>
      </div>

      {/* Sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 px-6 pb-5">
        <button
          onClick={() => fd.onCta("sticky")}
          className="mx-auto flex w-full max-w-md items-center justify-center gap-2 rounded-full bg-[#1F2A22] px-6 py-4 text-[15px] font-medium text-[#F7F3EB] shadow-[0_20px_44px_-20px_rgba(31,42,34,0.85)]"
        >
          {hero.ctaLabel}
          <span>→</span>
        </button>
      </div>
    </main>
  );
}
