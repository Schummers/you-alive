"use client";

import Image from "next/image";
import { Archivo, Newsreader } from "next/font/google";
import type { DesignProps } from "@/designs/types";
import { useFakeDoor } from "@/designs/shared/useFakeDoor";

// Swiss / International Typographic Style, light.
// A strict rational grid, small precise grotesque type, abundant whitespace,
// flat surfaces (no shadows, gradients or grain), left-aligned and objective.
// Terracotta is rationed to a single hairline accent. Newsreader appears only
// for the few human, spoken moments; Archivo carries all structure.
const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["400", "500", "600"],
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  style: ["normal", "italic"],
  display: "swap",
});

export default function SwissGridDesign({ content, slug }: DesignProps) {
  const fd = useFakeDoor(slug);
  const { hero, problem, solution, pricing, testimonials, faq, fakedoor, footer } = content;

  return (
    <main
      className={`${archivo.variable} ${newsreader.variable} min-h-screen bg-[#F4EFE6] text-[#1F2A22] selection:bg-[#1F2A22] selection:text-[#F4EFE6] font-[family-name:var(--font-archivo)]`}
    >
      <div className="mx-auto max-w-md">
        {/* ───────── MASTHEAD ───────── */}
        <header className="grid grid-cols-12 items-baseline gap-x-3 border-b border-[#1F2A22] px-5 pb-3 pt-6">
          <span className="col-span-6 text-[12px] font-semibold uppercase tracking-[0.18em]">
            {hero.brandLockup}
          </span>
          <span className="col-span-6 text-right text-[10px] uppercase tracking-[0.24em] text-[#1F2A22]/55">
            Est. release / verified
          </span>
        </header>

        {/* ───────── HERO ───────── */}
        <section className="px-5">
          {/* Photo carries its own baked-in title; no overlay headline. */}
          <div className="relative mt-5 aspect-[4/5] w-full overflow-hidden">
            <Image
              src="/designs/a/hero.jpeg"
              alt=""
              fill
              priority
              sizes="(max-width: 768px) 100vw, 450px"
              className="object-cover"
            />
          </div>

          <div className="grid grid-cols-12 gap-x-3 border-t border-[#1F2A22] pt-5">
            <p className="col-span-2 text-[10px] uppercase leading-[1.4] tracking-[0.2em] text-[#1F2A22]/55">
              01
            </p>
            <h1 className="col-span-10 text-[26px] font-semibold leading-[1.12] tracking-[-0.02em]">
              {hero.title}
            </h1>
          </div>

          <div className="mt-6 grid grid-cols-12 gap-x-3">
            <div className="col-start-3 col-end-13">
              <p className="text-[15px] leading-[1.55] text-[#1F2A22]/80">
                {hero.subtitle}
              </p>

              <button
                onClick={() => fd.onCta("hero")}
                className="mt-6 inline-flex items-center gap-3 border border-[#1F2A22] px-6 py-3 text-[13px] font-medium uppercase tracking-[0.14em] transition-colors hover:bg-[#1F2A22] hover:text-[#F4EFE6]"
              >
                {hero.ctaLabel}
                <span aria-hidden>→</span>
              </button>

              <p className="mt-5 flex items-center gap-3 text-[12px] tracking-[0.02em] text-[#1F2A22]/55">
                <span aria-hidden className="inline-block h-[5px] w-[5px] bg-[#B5754E]" />
                {hero.reassuranceLine}
              </p>
            </div>
          </div>
        </section>

        {/* ───────── PROBLEM ───────── */}
        <section className="mt-20 px-5">
          <div className="grid grid-cols-12 gap-x-3 border-t border-[#1F2A22] pt-4">
            <p className="col-span-2 text-[10px] uppercase tracking-[0.2em] text-[#1F2A22]/55">
              02
            </p>
            <p className="col-span-10 text-[10px] uppercase tracking-[0.24em] text-[#1F2A22]/55">
              The problem
            </p>
          </div>
          <div className="mt-6 grid grid-cols-12 gap-x-3">
            <h2 className="col-span-12 text-[21px] font-semibold leading-[1.18] tracking-[-0.015em]">
              {problem.title}
            </h2>
            <p className="col-start-3 col-end-13 mt-5 text-[14px] leading-[1.6] text-[#1F2A22]/80">
              {problem.body}
            </p>
          </div>
        </section>

        {/* ───────── SOLUTION ───────── */}
        <section className="mt-20 px-5">
          <div className="grid grid-cols-12 gap-x-3 border-t border-[#1F2A22] pt-4">
            <p className="col-span-2 text-[10px] uppercase tracking-[0.2em] text-[#1F2A22]/55">
              03
            </p>
            <p className="col-span-10 text-[10px] uppercase tracking-[0.24em] text-[#1F2A22]/55">
              {solution.intro}
            </p>
          </div>

          <ol className="mt-2">
            {solution.steps.map((s, i) => (
              <li
                key={i}
                className="grid grid-cols-12 gap-x-3 border-t border-[#1F2A22]/15 py-6 first:border-t-0"
              >
                <div className="col-span-2">
                  <span className="text-[12px] font-semibold tabular-nums tracking-[0.1em] text-[#B5754E]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="col-span-10">
                  <h3 className="text-[16px] font-semibold leading-[1.25] tracking-[-0.01em]">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 text-[13.5px] leading-[1.6] text-[#1F2A22]/75">
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* ───────── PRICING ───────── */}
        <section ref={fd.pricingRef} className="mt-20 px-5">
          <div className="grid grid-cols-12 gap-x-3 border-t border-[#1F2A22] pt-4">
            <p className="col-span-2 text-[10px] uppercase tracking-[0.2em] text-[#1F2A22]/55">
              04
            </p>
            <p className="col-span-10 text-[10px] uppercase tracking-[0.24em] text-[#1F2A22]/55">
              Membership
            </p>
          </div>

          <div className="mt-6 grid grid-cols-12 gap-x-3">
            <h2 className="col-span-12 text-[21px] font-semibold leading-[1.18] tracking-[-0.015em]">
              {pricing.title}
            </h2>
            <p className="col-start-3 col-end-13 mt-4 text-[14px] leading-[1.6] text-[#1F2A22]/80">
              {pricing.subtitle}
            </p>
          </div>

          {/* Plans */}
          <div className="mt-8 grid grid-cols-1">
            {pricing.plans.map((plan, i) => (
              <div
                key={i}
                className={`grid grid-cols-12 items-end gap-x-3 border-t py-5 ${
                  plan.highlight ? "border-[#B5754E]" : "border-[#1F2A22]/20"
                }`}
              >
                <div className="col-span-7">
                  <div className="flex items-center gap-2">
                    <span className="text-[12px] font-semibold uppercase tracking-[0.16em]">
                      {plan.name}
                    </span>
                    {plan.highlight && (
                      <span className="border border-[#B5754E] px-1.5 py-0.5 text-[8px] font-semibold uppercase tracking-[0.18em] text-[#B5754E]">
                        Best value
                      </span>
                    )}
                  </div>
                  <p className="mt-1.5 text-[24px] font-semibold leading-none tracking-[-0.02em]">
                    {plan.price}
                  </p>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.1em] text-[#1F2A22]/55">
                    {plan.descriptor}
                  </p>
                </div>
                <div className="col-span-5">
                  <button
                    onClick={() => fd.onCta(`pricing-${plan.name.toLowerCase()}`)}
                    className={`w-full px-3 py-3 text-[11px] font-medium uppercase tracking-[0.12em] transition-colors ${
                      plan.highlight
                        ? "bg-[#1F2A22] text-[#F4EFE6] hover:bg-[#B5754E]"
                        : "border border-[#1F2A22] hover:bg-[#1F2A22] hover:text-[#F4EFE6]"
                    }`}
                  >
                    {plan.ctaLabel}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Included */}
          <div className="mt-8 grid grid-cols-12 gap-x-3 border-t border-[#1F2A22]/15 pt-4">
            <p className="col-span-2 text-[10px] uppercase tracking-[0.2em] text-[#1F2A22]/55">
              Incl.
            </p>
            <ul className="col-span-10 grid grid-cols-2 gap-x-3 gap-y-2">
              {pricing.included.map((feat, i) => (
                <li
                  key={i}
                  className="flex items-baseline gap-2 text-[12px] leading-[1.3] text-[#1F2A22]/80"
                >
                  <span aria-hidden className="text-[#B5754E]">·</span>
                  {feat}
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-6 border-t border-[#1F2A22]/15 pt-4 text-[11px] leading-[1.5] tracking-[0.02em] text-[#1F2A22]/55">
            {pricing.scarcityLine}
          </p>
        </section>

        {/* ───────── TESTIMONIALS ───────── */}
        <section className="mt-20 px-5">
          <div className="grid grid-cols-12 gap-x-3 border-t border-[#1F2A22] pt-4">
            <p className="col-span-2 text-[10px] uppercase tracking-[0.2em] text-[#1F2A22]/55">
              05
            </p>
            <p className="col-span-10 text-[10px] uppercase tracking-[0.24em] text-[#1F2A22]/55">
              From those who started
            </p>
          </div>

          <div className="mt-2">
            {testimonials.map((t, i) => (
              <figure
                key={i}
                className="grid grid-cols-12 gap-x-3 border-t border-[#1F2A22]/15 py-6 first:border-t-0"
              >
                <figcaption className="col-span-2 text-[10px] uppercase leading-[1.4] tracking-[0.12em] text-[#1F2A22]/55">
                  {t.name}
                  <span className="block tabular-nums text-[#B5754E]">{t.age}</span>
                </figcaption>
                <blockquote className="col-span-10 font-[family-name:var(--font-newsreader)] text-[17px] italic leading-[1.4] text-[#1F2A22]">
                  {t.quote}
                </blockquote>
              </figure>
            ))}
          </div>
        </section>

        {/* ───────── FAQ ───────── */}
        <section className="mt-20 px-5">
          <div className="grid grid-cols-12 gap-x-3 border-t border-[#1F2A22] pt-4">
            <p className="col-span-2 text-[10px] uppercase tracking-[0.2em] text-[#1F2A22]/55">
              06
            </p>
            <p className="col-span-10 text-[10px] uppercase tracking-[0.24em] text-[#1F2A22]/55">
              Questions
            </p>
          </div>

          <div className="mt-2">
            {faq.map((item, i) => (
              <details
                key={i}
                className="group border-t border-[#1F2A22]/15 py-4 first:border-t-0"
              >
                <summary className="grid cursor-pointer list-none grid-cols-12 items-start gap-x-3">
                  <span className="col-span-2 text-[11px] font-semibold tabular-nums tracking-[0.1em] text-[#1F2A22]/55">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="col-span-9 text-[14px] font-semibold leading-[1.3] tracking-[-0.005em]">
                    {item.q}
                  </span>
                  <span
                    aria-hidden
                    className="col-span-1 select-none text-right text-[16px] leading-none text-[#B5754E] transition-transform duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <div className="grid grid-cols-12 gap-x-3">
                  <p className="col-start-3 col-end-13 mt-3 text-[13px] leading-[1.6] text-[#1F2A22]/75">
                    {item.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* ───────── FINAL CTA ───────── */}
        <section className="mt-20 px-5">
          <div className="grid grid-cols-12 gap-x-3 border-t border-b border-[#1F2A22] py-10">
            <h2 className="col-span-12 text-[24px] font-semibold leading-[1.12] tracking-[-0.02em]">
              {content.finalCta.headline}
            </h2>
            <div className="col-span-12 mt-6">
              <button
                onClick={() => fd.onCta("final")}
                className="inline-flex items-center gap-3 border border-[#1F2A22] px-6 py-3 text-[13px] font-medium uppercase tracking-[0.14em] transition-colors hover:bg-[#1F2A22] hover:text-[#F4EFE6]"
              >
                {content.finalCta.ctaLabel}
                <span aria-hidden>→</span>
              </button>
            </div>
          </div>
        </section>

        {/* ───────── FAKE-DOOR ───────── */}
        {fd.showWaitlist && (
          <section id="waitlist" className="mt-20 px-5">
            {fd.state === "done" ? (
              <div className="grid grid-cols-12 gap-x-3 border-t border-[#1F2A22] pt-6">
                <p className="col-span-2 text-[10px] uppercase tracking-[0.2em] text-[#B5754E]">
                  ✓
                </p>
                <div className="col-span-10">
                  <h2 className="text-[20px] font-semibold leading-[1.15] tracking-[-0.015em]">
                    {content.confirmation.title}
                  </h2>
                  <p className="mt-3 text-[14px] leading-[1.6] text-[#1F2A22]/80">
                    {content.confirmation.body}
                  </p>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-12 gap-x-3 border-t border-[#1F2A22] pt-6">
                <p className="col-span-2 text-[10px] uppercase tracking-[0.2em] text-[#1F2A22]/55">
                  07
                </p>
                <div className="col-span-10">
                  <h2 className="text-[20px] font-semibold leading-[1.15] tracking-[-0.015em]">
                    {fakedoor.title}
                  </h2>
                  <p className="mt-3 text-[14px] leading-[1.6] text-[#1F2A22]/80">
                    {fakedoor.body}
                  </p>
                  <form onSubmit={fd.submit} className="mt-6">
                    <input
                      type="email"
                      required
                      value={fd.email}
                      onChange={(e) => fd.setEmail(e.target.value)}
                      placeholder={fakedoor.emailPlaceholder}
                      className="w-full border border-[#1F2A22] bg-transparent px-4 py-3 text-[14px] text-[#1F2A22] placeholder:text-[#1F2A22]/40 focus:border-[#B5754E] focus:outline-none"
                    />
                    <button
                      type="submit"
                      disabled={fd.state === "loading"}
                      className="mt-3 w-full bg-[#1F2A22] px-6 py-3 text-[12px] font-medium uppercase tracking-[0.14em] text-[#F4EFE6] transition-colors hover:bg-[#B5754E] disabled:opacity-50"
                    >
                      {fd.state === "loading" ? "Sending…" : fakedoor.submitLabel}
                    </button>
                    {fd.state === "error" && (
                      <p className="mt-3 text-[12px] uppercase tracking-[0.1em] text-[#B5754E]">
                        Something went wrong. Please try again.
                      </p>
                    )}
                  </form>
                  <p className="mt-4 text-[11px] tracking-[0.02em] text-[#1F2A22]/55">
                    {fakedoor.privacyLine}
                  </p>
                </div>
              </div>
            )}
          </section>
        )}

        {/* ───────── FOOTER ───────── */}
        <footer className="mt-20 grid grid-cols-12 gap-x-3 gap-y-2 border-t border-[#1F2A22] px-5 py-8">
          <p className="col-span-12 text-[12px] leading-[1.5] tracking-[0.01em] text-[#1F2A22]/80">
            {footer.lines[0]}
          </p>
          {footer.lines.slice(1).map((line, i) => (
            <p
              key={i}
              className="col-span-6 text-[10px] uppercase tracking-[0.18em] text-[#1F2A22]/55"
            >
              {line}
            </p>
          ))}
        </footer>
      </div>
    </main>
  );
}
