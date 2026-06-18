"use client";

import Image from "next/image";
import { Bodoni_Moda, Spectral } from "next/font/google";
import type { DesignProps } from "@/designs/types";
import { useFakeDoor } from "@/designs/shared/useFakeDoor";

// Typography-driven direction — type IS the design. A dramatic high-contrast
// Didone (Bodoni Moda) carries oversized, lyrical display headlines; a refined
// serif body (Spectral) whispers underneath. The hero photo is demoted to a
// small quiet inset, secondary to the words. Warm cream paper, deep forest ink,
// terracotta accent. Contemplative, tender, dignified.
const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
  axes: ["opsz"],
  style: ["normal", "italic"],
  display: "swap",
});

const spectral = Spectral({
  subsets: ["latin"],
  variable: "--font-spectral",
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

export default function TypographyDrivenDesign({ content, slug }: DesignProps) {
  const { pricingRef, showWaitlist, email, setEmail, state, onCta, submit } =
    useFakeDoor(slug);
  const { hero, problem, solution, pricing, testimonials, faq, fakedoor, footer } = content;

  return (
    <main
      className={`${bodoni.variable} ${spectral.variable} relative min-h-screen overflow-hidden bg-[#F4EFE6] text-[#1F2A22] selection:bg-[#B5754E] selection:text-[#F4EFE6]`}
      style={{ fontFamily: "var(--font-spectral), ui-serif, Georgia, serif" }}
    >
      {/* Grain overlay */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.05] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative mx-auto max-w-md px-6 pb-32">
        {/* ───────── MASTHEAD ───────── */}
        <header className="flex items-center justify-between pt-8">
          <span className="font-[family-name:var(--font-bodoni)] text-[19px] italic tracking-tight text-[#1F2A22]">
            {hero.brandLockup}
          </span>
          <span className="text-[9px] uppercase tracking-[0.34em] text-[#9c8a6d]">
            est. for the living
          </span>
        </header>

        {/* ───────── HERO (type-led) ───────── */}
        <section className="pt-12">
          <p className="text-[10px] uppercase tracking-[0.34em] text-[#B5754E]">
            A quiet kind of love
          </p>

          {/* Oversized expressive display headline */}
          <h1
            className="mt-6 font-[family-name:var(--font-bodoni)] text-[clamp(52px,16vw,68px)] leading-[0.9] tracking-[-0.025em] text-[#1F2A22]"
            style={{ fontVariationSettings: '"opsz" 96' }}
          >
            Don&rsquo;t
            <span className="block italic text-[#B5754E]">leave them</span>
            <span className="block">guessing.</span>
          </h1>

          {/* Quiet photo inset — small, secondary to the type */}
          <figure className="mt-9 -rotate-[1.2deg]">
            <div className="relative h-40 w-44 overflow-hidden rounded-[3px] border border-[#1F2A22]/10 shadow-[0_22px_45px_-26px_rgba(31,42,34,0.65)]">
              <Image
                src="/designs/a/hero.jpeg"
                alt=""
                fill
                priority
                sizes="(max-width: 768px) 50vw, 200px"
                className="object-cover saturate-[0.92]"
              />
            </div>
          </figure>

          <p className="mt-9 max-w-[34ch] font-light text-[18px] leading-[1.6] text-[#3a4a3f]">
            {hero.subtitle}
          </p>

          <button
            onClick={() => onCta("hero")}
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#1F2A22] px-7 py-4 text-[15px] tracking-wide text-[#F4EFE6] transition-transform duration-300 hover:-translate-y-[1px] hover:shadow-[0_18px_40px_-20px_rgba(31,42,34,0.7)]"
          >
            {hero.ctaLabel}
            <span className="text-lg transition-transform group-hover:translate-x-0.5">&rarr;</span>
          </button>

          <p className="mt-5 flex items-center gap-3 text-[12.5px] tracking-wide text-[#6a7a6f]">
            <span className="inline-block h-[1px] w-7 bg-[#b8a888]" />
            {hero.reassuranceLine}
          </p>
        </section>

        {/* ───────── PROBLEM ───────── */}
        <section className="mt-28">
          <p className="mb-6 text-[10px] uppercase tracking-[0.34em] text-[#9c8a6d]">
            The problem
          </p>
          <h2
            className="font-[family-name:var(--font-bodoni)] text-[34px] leading-[1.04] tracking-[-0.02em] text-[#1F2A22]"
            style={{ fontVariationSettings: '"opsz" 72' }}
          >
            {problem.title}
          </h2>
          <p className="mt-7 max-w-[40ch] font-light text-[16px] leading-[1.65] text-[#3a4a3f]">
            {problem.body}
          </p>
        </section>

        {/* ───────── SOLUTION ───────── */}
        <section className="mt-28">
          <div className="flex items-baseline justify-between">
            <p className="text-[10px] uppercase tracking-[0.34em] text-[#9c8a6d]">
              How it works
            </p>
            <p className="font-[family-name:var(--font-bodoni)] text-[14px] italic text-[#6a7a6f]">
              three quiet steps
            </p>
          </div>
          <h2
            className="mt-3 font-[family-name:var(--font-bodoni)] text-[32px] leading-[1.05] tracking-[-0.02em] text-[#1F2A22]"
            style={{ fontVariationSettings: '"opsz" 72' }}
          >
            {solution.intro}
          </h2>

          <ol className="mt-12 space-y-14">
            {solution.steps.map((s, i) => (
              <li key={i}>
                <span
                  className="block font-[family-name:var(--font-bodoni)] text-[78px] leading-[0.8] text-[#B5754E]"
                  style={{ fontVariationSettings: '"opsz" 96' }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  className="mt-4 font-[family-name:var(--font-bodoni)] text-[22px] leading-[1.18] tracking-[-0.01em] text-[#1F2A22]"
                  style={{ fontVariationSettings: '"opsz" 40' }}
                >
                  {s.title}
                </h3>
                <p className="mt-3 max-w-[42ch] font-light text-[15px] leading-[1.62] text-[#3a4a3f]">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* ───────── PRICING ───────── */}
        <section
          ref={pricingRef}
          className="relative mt-28 overflow-hidden rounded-[4px] bg-[#1F2A22] px-7 py-11 text-[#F4EFE6]"
        >
          <div
            aria-hidden
            className="absolute -right-14 -top-14 h-48 w-48 rounded-full bg-[#B5754E]/30 blur-3xl"
          />
          <p className="text-[10px] uppercase tracking-[0.34em] text-[#b8a888]">
            Membership
          </p>
          <h2
            className="mt-4 font-[family-name:var(--font-bodoni)] text-[32px] leading-[1.06] tracking-[-0.02em]"
            style={{ fontVariationSettings: '"opsz" 72' }}
          >
            {pricing.title}
          </h2>
          <p className="mt-5 max-w-[40ch] font-light text-[15px] leading-[1.6] text-[#b8a888]">
            {pricing.subtitle}
          </p>

          {/* Plans */}
          <div className="mt-9 space-y-4">
            {pricing.plans.map((plan, i) => (
              <div
                key={i}
                className={`rounded-[3px] px-6 py-5 ${
                  plan.highlight
                    ? "bg-[#F4EFE6] text-[#1F2A22]"
                    : "border border-[#F4EFE6]/20 text-[#F4EFE6]"
                }`}
              >
                <div className="flex items-baseline justify-between gap-3">
                  <span
                    className="font-[family-name:var(--font-bodoni)] text-[20px] tracking-tight"
                    style={{ fontVariationSettings: '"opsz" 40' }}
                  >
                    {plan.name}
                  </span>
                  {plan.highlight && (
                    <span className="rounded-full bg-[#B5754E] px-3 py-1 text-[9px] uppercase tracking-[0.22em] text-[#F4EFE6]">
                      Recommended
                    </span>
                  )}
                </div>
                <p
                  className="mt-2 font-[family-name:var(--font-bodoni)] text-[42px] leading-none tracking-tight"
                  style={{ fontVariationSettings: '"opsz" 72' }}
                >
                  {plan.price}
                </p>
                <p
                  className={`mt-2 text-[13px] italic ${
                    plan.highlight ? "text-[#6a7a6f]" : "text-[#b8a888]"
                  }`}
                >
                  {plan.descriptor}
                </p>
                <button
                  onClick={() => onCta(`pricing-${plan.name.toLowerCase()}`)}
                  className={`mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[14px] tracking-wide transition ${
                    plan.highlight
                      ? "bg-[#1F2A22] text-[#F4EFE6] hover:bg-[#2a3830]"
                      : "bg-[#F4EFE6] text-[#1F2A22] hover:bg-white"
                  }`}
                >
                  {plan.ctaLabel}
                  <span className="text-base">&rarr;</span>
                </button>
              </div>
            ))}
          </div>

          {/* Included */}
          <ul className="mt-9 grid grid-cols-2 gap-x-5 gap-y-3">
            {pricing.included.map((feat, i) => (
              <li key={i} className="flex items-start gap-2 text-[13.5px] font-light text-[#dfd7c6]">
                <span className="mt-[7px] inline-block h-[3px] w-[3px] shrink-0 rounded-full bg-[#B5754E]" />
                {feat}
              </li>
            ))}
          </ul>

          <p className="mt-8 border-t border-[#F4EFE6]/15 pt-5 text-center text-[12px] text-[#b8a888]">
            {pricing.scarcityLine}
          </p>
        </section>

        {/* ───────── TESTIMONIALS ───────── */}
        <section className="mt-28">
          <p className="mb-7 text-[10px] uppercase tracking-[0.34em] text-[#9c8a6d]">
            From those who started
          </p>

          <div className="space-y-12">
            {testimonials.map((t, i) => (
              <figure key={i} className="relative">
                <span
                  aria-hidden
                  className="absolute -left-1 -top-5 font-[family-name:var(--font-bodoni)] text-[72px] leading-none text-[#B5754E]/45"
                  style={{ fontVariationSettings: '"opsz" 96' }}
                >
                  &ldquo;
                </span>
                <blockquote
                  className="pl-7 font-[family-name:var(--font-bodoni)] text-[21px] leading-[1.38] tracking-[-0.01em] text-[#1F2A22]"
                  style={{ fontVariationSettings: '"opsz" 40' }}
                >
                  {t.quote}
                </blockquote>
                <figcaption className="mt-4 pl-7 text-[11.5px] uppercase tracking-[0.18em] text-[#6a7a6f]">
                  {t.name} &middot; {t.age}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ───────── FAQ ───────── */}
        <section className="mt-28">
          <p className="mb-5 text-[10px] uppercase tracking-[0.34em] text-[#9c8a6d]">
            Questions you might have
          </p>
          <div className="divide-y divide-[#1F2A22]/15">
            {faq.map((item, i) => (
              <details key={i} className="group py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                  <span
                    className="font-[family-name:var(--font-bodoni)] text-[18px] leading-[1.3] tracking-[-0.005em] text-[#1F2A22]"
                    style={{ fontVariationSettings: '"opsz" 40' }}
                  >
                    {item.q}
                  </span>
                  <span className="mt-1 select-none font-[family-name:var(--font-bodoni)] text-[22px] leading-none text-[#B5754E] transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-[40ch] font-light text-[14.5px] leading-[1.6] text-[#3a4a3f]">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* ───────── FINAL CTA ───────── */}
        <section className="mt-28 text-center">
          <h2
            className="font-[family-name:var(--font-bodoni)] text-[clamp(40px,13vw,56px)] leading-[0.95] tracking-[-0.025em] text-[#1F2A22]"
            style={{ fontVariationSettings: '"opsz" 96' }}
          >
            <span className="italic">{content.finalCta.headline}</span>
          </h2>
          <button
            onClick={() => onCta("final")}
            className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[#B5754E] px-9 py-4 text-[16px] tracking-wide text-[#F4EFE6] transition-transform duration-300 hover:-translate-y-[1px] hover:shadow-[0_18px_40px_-20px_rgba(181,117,78,0.8)]"
          >
            {content.finalCta.ctaLabel}
            <span className="text-lg transition-transform group-hover:translate-x-0.5">&rarr;</span>
          </button>
        </section>

        {/* ───────── FAKE-DOOR ───────── */}
        {showWaitlist && (
          <section
            id="waitlist"
            className="mt-24 rounded-[4px] border border-[#1F2A22]/15 bg-[#EFE8DA] px-7 py-10"
          >
            {state === "done" ? (
              <div className="text-center">
                <p
                  className="font-[family-name:var(--font-bodoni)] text-[26px] leading-tight text-[#1F2A22]"
                  style={{ fontVariationSettings: '"opsz" 72' }}
                >
                  {content.confirmation.title}
                </p>
                <p className="mt-4 font-light text-[15px] leading-[1.6] text-[#3a4a3f]">
                  {content.confirmation.body}
                </p>
              </div>
            ) : (
              <>
                <p
                  className="font-[family-name:var(--font-bodoni)] text-[30px] leading-[1.05] tracking-[-0.02em] text-[#1F2A22]"
                  style={{ fontVariationSettings: '"opsz" 72' }}
                >
                  <span className="italic">{fakedoor.title}</span>
                </p>
                <p className="mt-4 font-light text-[15px] leading-[1.6] text-[#3a4a3f]">
                  {fakedoor.body}
                </p>
                <form onSubmit={submit} className="mt-7 flex flex-col gap-3">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={fakedoor.emailPlaceholder}
                    className="w-full rounded-full border border-[#1F2A22]/20 bg-[#F4EFE6] px-5 py-3.5 text-[15px] text-[#1F2A22] placeholder:text-[#9c8a6d] focus:border-[#1F2A22] focus:outline-none"
                  />
                  <button
                    type="submit"
                    disabled={state === "loading"}
                    className="w-full rounded-full bg-[#1F2A22] px-6 py-3.5 text-[15px] tracking-wide text-[#F4EFE6] disabled:opacity-60"
                  >
                    {state === "loading" ? "..." : fakedoor.submitLabel}
                  </button>
                  {state === "error" && (
                    <p className="text-[13px] text-[#B5754E]">
                      Something went wrong. Try again.
                    </p>
                  )}
                </form>
                <p className="mt-4 text-center text-[12px] text-[#6a7a6f]">
                  {fakedoor.privacyLine}
                </p>
              </>
            )}
          </section>
        )}

        {/* ───────── FOOTER ───────── */}
        <footer className="mt-24 border-t border-[#1F2A22]/15 pt-9 text-center">
          <p
            className="font-[family-name:var(--font-bodoni)] text-[16px] italic text-[#1F2A22]"
            style={{ fontVariationSettings: '"opsz" 40' }}
          >
            {footer.lines[0]}
          </p>
          <p className="mt-3 text-[11px] uppercase tracking-[0.26em] text-[#9c8a6d]">
            {footer.lines.slice(1).join(" · ")}
          </p>
        </footer>
      </div>

      {/* Sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#1F2A22]/10 bg-[#F4EFE6]/85 px-6 py-3 backdrop-blur-md">
        <button
          onClick={() => onCta("sticky")}
          className="mx-auto flex w-full max-w-md items-center justify-center gap-2 rounded-full bg-[#1F2A22] px-6 py-3.5 text-[15px] tracking-wide text-[#F4EFE6]"
        >
          {hero.ctaLabel}
          <span className="text-base">&rarr;</span>
        </button>
      </div>
    </main>
  );
}
