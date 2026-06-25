"use client";

import Image from "next/image";
import { Fraunces, Figtree } from "next/font/google";
import type { DesignProps } from "@/designs/types";
import { useFakeDoor } from "@/designs/shared/useFakeDoor";

// AXIS: Organic warmth. A soft, tactile reading of the brand built on curved
// forms, blob/arch masks, and gentle radial washes that stay inside the single
// palette family (cream / deep forest / terracotta). Fraunces (soft humanist
// serif, opsz + SOFT axes for rounded terminals) carries the contemplative
// voice; Figtree (rounded humanist sans) carries the body. Full-pill CTAs,
// generous squircle radii, warm tinted shadows. Terracotta is the single accent
// page-wide. CSS-only motion, honoring prefers-reduced-motion.
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT", "WONK"],
  style: ["normal", "italic"],
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

export default function OrganicWarmthDesign({ content, slug }: DesignProps) {
  const fd = useFakeDoor(slug);
  const { hero, problem, solution, pricing, testimonials, faq, fakedoor, footer } =
    content;

  return (
    <main
      className={`${fraunces.variable} ${figtree.variable} font-[family-name:var(--font-figtree)] relative min-h-screen overflow-hidden bg-[#F4EFE6] text-[#1F2A22] antialiased selection:bg-[#B5754E] selection:text-[#F4EFE6]`}
    >
      {/* soft organic washes — stay inside the cream/forest/terracotta family */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 40% at 18% 8%, rgba(181,117,78,0.16), transparent 70%), radial-gradient(55% 38% at 92% 60%, rgba(31,42,34,0.10), transparent 72%), radial-gradient(50% 35% at 50% 100%, rgba(181,117,78,0.10), transparent 70%)",
        }}
      />

      <style>{`
        @keyframes ya16-rise {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes ya16-drift {
          0%, 100% { border-radius: 62% 38% 54% 46% / 56% 52% 48% 44%; }
          50%      { border-radius: 44% 56% 40% 60% / 48% 44% 56% 52%; }
        }
        .ya16-reveal { animation: ya16-rise 0.9s cubic-bezier(0.16,1,0.3,1) both; }
        .ya16-blob { animation: ya16-drift 16s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .ya16-reveal { animation: none; }
          .ya16-blob { animation: none; }
        }
      `}</style>

      <div className="relative mx-auto max-w-md px-6 pb-40">
        {/* ───────── HERO ───────── */}
        <header className="pt-7">
          <div className="flex items-center justify-between px-1">
            <span className="font-[family-name:var(--font-fraunces)] text-[18px] italic text-[#1F2A22]">
              {hero.brandLockup}
            </span>
            <span className="rounded-full bg-[#1F2A22]/[0.05] px-3.5 py-1.5 text-[11px] text-[#5d6c61]">
              Kept gently, for later
            </span>
          </div>

          {/* arch-masked hero photo with a soft drifting blob backing it */}
          <div className="relative mt-7">
            <div
              aria-hidden
              className="ya16-blob absolute -inset-3 -z-10 bg-[#B5754E]/15"
            />
            <div
              className="relative overflow-hidden shadow-[0_36px_80px_-44px_rgba(31,42,34,0.6)]"
              style={{ borderRadius: "48% 48% 28px 28px / 38% 38% 6% 6%" }}
            >
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/designs/a/hero-clean.jpeg"
                  alt=""
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover"
                />
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(31,42,34,0.42), transparent 46%)",
                  }}
                />
              </div>
            </div>
          </div>

          <section className="ya16-reveal px-1 pt-10 text-center">
            <h1
              className="text-balance font-[family-name:var(--font-fraunces)] text-[35px] leading-[1.08] tracking-[-0.01em] text-[#1F2A22]"
              style={{ fontVariationSettings: '"opsz" 80, "SOFT" 60, "WONK" 0' }}
            >
              {hero.title}
            </h1>
            <p className="mx-auto mt-6 max-w-[33ch] text-[16px] leading-[1.65] text-[#4a5a4f]">
              {hero.subtitle}
            </p>

            <button
              onClick={() => fd.onCta("hero")}
              className="group mt-9 inline-flex items-center gap-2 rounded-full bg-[#1F2A22] py-2 pl-7 pr-2 text-[15px] font-medium text-[#F4EFE6] transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-[2px] active:scale-[0.98]"
            >
              {hero.ctaLabel}
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#B5754E] text-[#F4EFE6] transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5">
                →
              </span>
            </button>

            <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/55 px-4 py-1.5 text-[12.5px] text-[#5d6c61] ring-1 ring-[#1F2A22]/[0.05]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#B5754E]" />
              {hero.reassuranceLine}
            </p>
          </section>
        </header>

        {/* ───────── PROBLEM ───────── */}
        <section className="mt-28 text-center">
          <h2
            className="mx-auto max-w-[20ch] text-balance font-[family-name:var(--font-fraunces)] text-[27px] leading-[1.2] tracking-[-0.01em] text-[#1F2A22]"
            style={{ fontVariationSettings: '"opsz" 52, "SOFT" 60, "WONK" 0' }}
          >
            {problem.title}
          </h2>
          <p className="mx-auto mt-6 max-w-[34ch] text-[15.5px] leading-[1.7] text-[#4a5a4f]">
            {problem.body}
          </p>
        </section>

        {/* ───────── SOLUTION ───────── */}
        <section className="mt-28">
          <p className="text-center font-[family-name:var(--font-fraunces)] text-[15px] italic text-[#B5754E]">
            {solution.intro}
          </p>

          <ol className="mt-10 space-y-6">
            {solution.steps.map((s, i) => (
              <li
                key={i}
                className="relative bg-white/55 px-7 py-8 shadow-[0_20px_54px_-42px_rgba(31,42,34,0.6)] ring-1 ring-[#1F2A22]/[0.05]"
                style={{
                  borderRadius:
                    i % 2 === 0
                      ? "34px 34px 34px 10px"
                      : "34px 34px 10px 34px",
                }}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#B5754E]/15 font-[family-name:var(--font-fraunces)] text-[22px] italic text-[#B5754E]">
                  {i + 1}
                </span>
                <h3
                  className="mt-6 font-[family-name:var(--font-fraunces)] text-[20px] leading-[1.28] tracking-[-0.005em] text-[#1F2A22]"
                  style={{ fontVariationSettings: '"opsz" 36, "SOFT" 60, "WONK" 0' }}
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
        <section ref={fd.pricingRef} className="mt-28 text-center">
          <h2
            className="mx-auto max-w-[20ch] text-balance font-[family-name:var(--font-fraunces)] text-[26px] leading-[1.2] tracking-[-0.01em] text-[#1F2A22]"
            style={{ fontVariationSettings: '"opsz" 52, "SOFT" 60, "WONK" 0' }}
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
                    ? "relative bg-[#1F2A22] px-7 py-8 text-[#F4EFE6] shadow-[0_30px_64px_-38px_rgba(31,42,34,0.85)]"
                    : "relative bg-white/55 px-7 py-8 text-[#1F2A22] ring-1 ring-[#1F2A22]/[0.06]"
                }
                style={{ borderRadius: "34px" }}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#B5754E] px-4 py-1 text-[11px] text-[#F4EFE6]">
                    Most chosen
                  </span>
                )}
                <p
                  className={`font-[family-name:var(--font-fraunces)] text-[15px] italic ${
                    plan.highlight ? "text-[#d8c4a4]" : "text-[#5d6c61]"
                  }`}
                >
                  {plan.name}
                </p>
                <p
                  className="mt-2 font-[family-name:var(--font-fraunces)] text-[40px] leading-none tracking-[-0.01em]"
                  style={{ fontVariationSettings: '"opsz" 80, "SOFT" 60, "WONK" 0' }}
                >
                  {plan.price}
                </p>
                <p
                  className={`mt-3 text-[13px] ${
                    plan.highlight ? "text-[#d8c4a4]" : "text-[#5d6c61]"
                  }`}
                >
                  {plan.descriptor}
                </p>
                <button
                  onClick={() => fd.onCta(`pricing-${plan.name.toLowerCase()}`)}
                  className={
                    plan.highlight
                      ? "mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#B5754E] px-7 py-3.5 text-[15px] font-medium text-[#F4EFE6] transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-[1px] active:scale-[0.98]"
                      : "mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1F2A22] px-7 py-3.5 text-[15px] font-medium text-[#F4EFE6] transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-[1px] active:scale-[0.98]"
                  }
                >
                  {plan.ctaLabel}
                  <span>→</span>
                </button>
              </div>
            ))}
          </div>

          <div
            className="mt-10 bg-white/45 px-7 py-8 text-left ring-1 ring-[#1F2A22]/[0.05]"
            style={{ borderRadius: "34px" }}
          >
            <p className="text-center font-[family-name:var(--font-fraunces)] text-[15px] italic text-[#B5754E]">
              Everything included
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-y-3.5">
              {pricing.included.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-[14.5px] text-[#3a4a3f]"
                >
                  <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[#B5754E]/15 text-[11px] text-[#B5754E]">
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <p className="mx-auto mt-7 max-w-[34ch] text-[12.5px] leading-[1.6] text-[#5d6c61]">
            {pricing.scarcityLine}
          </p>
        </section>

        {/* ───────── TESTIMONIALS ───────── */}
        <section className="mt-28 space-y-6">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="bg-white/55 px-7 py-8 ring-1 ring-[#1F2A22]/[0.05]"
              style={{
                borderRadius:
                  i % 2 === 0 ? "34px 34px 10px 34px" : "34px 34px 34px 10px",
              }}
            >
              <span
                aria-hidden
                className="block font-[family-name:var(--font-fraunces)] text-[44px] leading-none text-[#B5754E]/45"
                style={{ fontVariationSettings: '"opsz" 80, "SOFT" 80, "WONK" 0' }}
              >
                &ldquo;
              </span>
              <blockquote
                className="mt-1 font-[family-name:var(--font-fraunces)] text-[18.5px] leading-[1.5] tracking-[-0.005em] text-[#1F2A22]"
                style={{ fontVariationSettings: '"opsz" 36, "SOFT" 60, "WONK" 0' }}
              >
                {t.quote}
              </blockquote>
              <figcaption className="mt-5 text-[13px] text-[#5d6c61]">
                {t.name}, {t.age}
              </figcaption>
            </figure>
          ))}
        </section>

        {/* ───────── FAQ ───────── */}
        <section className="mt-28">
          <p className="mb-8 text-center font-[family-name:var(--font-fraunces)] text-[15px] italic text-[#B5754E]">
            Questions you might have
          </p>
          <div className="space-y-4">
            {faq.map((item, i) => (
              <details
                key={i}
                className="group bg-white/55 px-7 py-5 ring-1 ring-[#1F2A22]/[0.05] open:bg-white/70"
                style={{ borderRadius: "26px" }}
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                  <span
                    className="font-[family-name:var(--font-fraunces)] text-[17px] leading-[1.32] tracking-[-0.005em] text-[#1F2A22]"
                    style={{
                      fontVariationSettings: '"opsz" 32, "SOFT" 60, "WONK" 0',
                    }}
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
        <section
          className="relative mt-28 overflow-hidden bg-[#1F2A22] px-8 py-14 text-center text-[#F4EFE6]"
          style={{ borderRadius: "44px" }}
        >
          <div
            aria-hidden
            className="ya16-blob pointer-events-none absolute -right-10 -top-10 h-40 w-40 bg-[#B5754E]/25"
          />
          <h2
            className="relative mx-auto max-w-[16ch] text-balance font-[family-name:var(--font-fraunces)] text-[30px] leading-[1.14] tracking-[-0.01em]"
            style={{ fontVariationSettings: '"opsz" 72, "SOFT" 60, "WONK" 0' }}
          >
            {content.finalCta.headline}
          </h2>
          <button
            onClick={() => fd.onCta("final")}
            className="group relative mt-9 inline-flex items-center gap-2 rounded-full bg-[#F4EFE6] py-2 pl-7 pr-2 text-[15px] font-medium text-[#1F2A22] transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-[2px] active:scale-[0.98]"
          >
            {content.finalCta.ctaLabel}
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#B5754E] text-[#F4EFE6] transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5">
              →
            </span>
          </button>
        </section>

        {/* ───────── FAKE-DOOR ───────── */}
        {fd.showWaitlist && (
          <section
            id="waitlist"
            className="mt-12 bg-white/60 px-7 py-10 ring-1 ring-[#1F2A22]/[0.06]"
            style={{ borderRadius: "44px" }}
          >
            {fd.state === "done" ? (
              <div className="text-center">
                <p
                  className="font-[family-name:var(--font-fraunces)] text-[24px] leading-tight text-[#1F2A22]"
                  style={{ fontVariationSettings: '"opsz" 48, "SOFT" 60, "WONK" 0' }}
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
                  className="text-center font-[family-name:var(--font-fraunces)] text-[26px] italic leading-[1.15] tracking-[-0.01em] text-[#1F2A22]"
                  style={{ fontVariationSettings: '"opsz" 48, "SOFT" 60, "WONK" 0' }}
                >
                  {fakedoor.title}
                </p>
                <p className="mx-auto mt-4 max-w-[34ch] text-center text-[14.5px] leading-[1.65] text-[#4a5a4f]">
                  {fakedoor.body}
                </p>
                <form onSubmit={fd.submit} className="mt-7 flex flex-col gap-3">
                  <label htmlFor="ya16-email" className="sr-only">
                    {fakedoor.emailPlaceholder}
                  </label>
                  <input
                    id="ya16-email"
                    type="email"
                    required
                    value={fd.email}
                    onChange={(e) => fd.setEmail(e.target.value)}
                    placeholder={fakedoor.emailPlaceholder}
                    className="w-full rounded-full border border-[#1F2A22]/15 bg-[#F4EFE6] px-6 py-4 text-[15px] text-[#1F2A22] placeholder:text-[#8a8067] focus:border-[#1F2A22] focus:outline-none"
                  />
                  <button
                    type="submit"
                    disabled={fd.state === "loading"}
                    className="w-full rounded-full bg-[#B5754E] px-6 py-4 text-[15px] font-medium text-[#F4EFE6] transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-[1px] active:scale-[0.98] disabled:opacity-60"
                  >
                    {fd.state === "loading" ? "..." : fakedoor.submitLabel}
                  </button>
                  {fd.state === "error" && (
                    <p className="text-center text-[13px] text-[#B5754E]">
                      Something went wrong. Try again.
                    </p>
                  )}
                </form>
                <p className="mt-5 text-center text-[12px] text-[#5d6c61]">
                  {fakedoor.privacyLine}
                </p>
              </>
            )}
          </section>
        )}

        {/* ───────── FOOTER ───────── */}
        <footer className="mt-24 text-center">
          <p
            className="font-[family-name:var(--font-fraunces)] text-[16px] italic text-[#1F2A22]"
            style={{ fontVariationSettings: '"opsz" 36, "SOFT" 60, "WONK" 0' }}
          >
            {footer.lines[0]}
          </p>
          <p className="mt-4 text-[12px] text-[#8a8067]">
            {footer.lines.slice(1).join("   ·   ")}
          </p>
        </footer>
      </div>

      {/* Sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 px-6 pb-5">
        <button
          onClick={() => fd.onCta("sticky")}
          className="group mx-auto flex w-full max-w-md items-center justify-center gap-2 rounded-full bg-[#1F2A22] px-6 py-4 text-[15px] font-medium text-[#F4EFE6] shadow-[0_22px_46px_-20px_rgba(31,42,34,0.85)] transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]"
        >
          {hero.ctaLabel}
          <span className="transition-transform group-hover:translate-x-0.5">→</span>
        </button>
      </div>
    </main>
  );
}
