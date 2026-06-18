"use client";

import Image from "next/image";
import { Playfair_Display, Newsreader } from "next/font/google";
import type { DesignProps } from "@/designs/types";
import { useFakeDoor } from "@/designs/shared/useFakeDoor";

// EDITORIAL MAGAZINE direction — a tender memorial feature in a fine print
// quarterly. Masthead, section folios, hairline rules, drop cap, pull-quote,
// captioned imagery and byline-style labels. High-contrast Playfair Display for
// the display headlines; Newsreader (with italic) for the running body text.
// Locked brand palette: cream paper #F4EFE6, forest ink #1F2A22, terracotta #B5754E.
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  style: ["normal", "italic"],
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  style: ["normal", "italic"],
  display: "swap",
});

export default function EditorialMagazineDesign({ content, slug }: DesignProps) {
  const fd = useFakeDoor(slug);
  const { hero, problem, solution, pricing, testimonials, faq, fakedoor, footer } =
    content;

  const dropCap = problem.body.charAt(0);
  const dropRest = problem.body.slice(1);

  return (
    <main
      className={`${playfair.variable} ${newsreader.variable} relative min-h-screen overflow-hidden bg-[#F4EFE6] text-[#1F2A22] selection:bg-[#B5754E] selection:text-[#F4EFE6] font-[family-name:var(--font-newsreader)]`}
    >
      {/* Paper grain overlay */}
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
        <div className="border-b border-[#1F2A22]/30 pt-7 pb-3">
          <div className="flex items-center justify-between text-[9px] uppercase tracking-[0.34em] text-[#6a7a6f]">
            <span>A Quarterly on Endings</span>
            <span>No. 14</span>
          </div>
          <div className="mt-3 flex items-end justify-between">
            <h1 className="font-[family-name:var(--font-playfair)] text-[30px] leading-none tracking-[-0.01em] text-[#1F2A22]">
              {hero.brandLockup}
            </h1>
            <span className="pb-1 font-[family-name:var(--font-newsreader)] text-[11px] italic text-[#9c8a6d]">
              Summer Issue
            </span>
          </div>
        </div>

        {/* ───────── COVER FEATURE ───────── */}
        <header className="pt-6">
          <p className="text-[9px] uppercase tracking-[0.34em] text-[#B5754E]">
            The Cover Feature
          </p>

          {/* Captioned cover image — title is already baked in; do not overlay */}
          <figure className="mt-4 -mx-6">
            <div className="relative h-[62vh] min-h-[440px] w-full overflow-hidden">
              <Image
                src="/designs/a/hero.jpeg"
                alt=""
                fill
                priority
                sizes="(max-width: 768px) 100vw, 450px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1F2A22]/30" />
            </div>
            <figcaption className="mt-2.5 flex items-start gap-3 px-6 text-[11px] leading-snug text-[#6a7a6f]">
              <span className="mt-[2px] inline-block h-px w-7 shrink-0 bg-[#B5754E]" />
              <span className="font-[family-name:var(--font-newsreader)] italic">
                A quiet afternoon, suspended. The ordinary days are the ones worth
                preparing for.
              </span>
            </figcaption>
          </figure>

          {/* Feature headline + standfirst */}
          <div className="mt-9">
            <h2 className="text-balance font-[family-name:var(--font-playfair)] text-[40px] leading-[1.02] tracking-[-0.015em] text-[#1F2A22]">
              {hero.title}
            </h2>
            <p className="mt-5 font-[family-name:var(--font-newsreader)] text-[18px] leading-[1.5] text-[#3a4a3f]">
              {hero.subtitle}
            </p>

            <div className="mt-7">
              <button
                onClick={() => fd.onCta("hero")}
                className="group inline-flex items-center gap-3 rounded-none border border-[#1F2A22] bg-[#1F2A22] px-7 py-3.5 text-[14px] font-medium uppercase tracking-[0.12em] text-[#F4EFE6] transition-colors duration-300 hover:bg-transparent hover:text-[#1F2A22]"
              >
                {hero.ctaLabel}
                <span className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </button>
            </div>

            <p className="mt-5 flex items-center gap-3 text-[12px] tracking-wide text-[#6a7a6f]">
              <span className="inline-block h-px w-7 bg-[#b8a888]" />
              {hero.reassuranceLine}
            </p>
          </div>
        </header>

        {/* ───────── PROBLEM (essay opener, drop cap) ───────── */}
        <article className="mt-20">
          <div className="flex items-baseline justify-between border-t border-[#1F2A22]/30 pt-3">
            <span className="text-[9px] uppercase tracking-[0.34em] text-[#9c8a6d]">
              I. The Reckoning
            </span>
            <span className="font-[family-name:var(--font-newsreader)] text-[11px] italic text-[#9c8a6d]">
              folio i
            </span>
          </div>

          <h3 className="mt-6 text-balance font-[family-name:var(--font-playfair)] text-[27px] leading-[1.1] tracking-[-0.01em] text-[#1F2A22]">
            {problem.title}
          </h3>

          <p className="mt-6 font-[family-name:var(--font-newsreader)] text-[16px] leading-[1.62] text-[#3a4a3f]">
            <span className="float-left mr-3 mt-1 font-[family-name:var(--font-playfair)] text-[58px] leading-[0.72] text-[#B5754E]">
              {dropCap}
            </span>
            {dropRest}
          </p>
        </article>

        {/* ───────── PULL QUOTE ───────── */}
        <aside className="mt-16 border-y border-[#1F2A22]/30 py-9 text-center">
          <p className="font-[family-name:var(--font-playfair)] text-[24px] italic leading-[1.25] tracking-[-0.01em] text-[#1F2A22]">
            &ldquo;The kindest thing you&rsquo;ll ever leave behind.&rdquo;
          </p>
        </aside>

        {/* ───────── SOLUTION (numbered feature) ───────── */}
        <article className="mt-16">
          <div className="flex items-baseline justify-between border-t border-[#1F2A22]/30 pt-3">
            <span className="text-[9px] uppercase tracking-[0.34em] text-[#9c8a6d]">
              II. {solution.intro}
            </span>
            <span className="font-[family-name:var(--font-newsreader)] text-[11px] italic text-[#9c8a6d]">
              folio ii
            </span>
          </div>

          <ol className="mt-9 space-y-11">
            {solution.steps.map((s, i) => (
              <li
                key={i}
                className="border-b border-dotted border-[#1F2A22]/25 pb-9 last:border-0 last:pb-0"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-[family-name:var(--font-playfair)] text-[34px] italic leading-none text-[#B5754E]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h4 className="font-[family-name:var(--font-playfair)] text-[20px] leading-[1.18] tracking-[-0.005em] text-[#1F2A22]">
                    {s.title}
                  </h4>
                </div>
                <p className="mt-3 font-[family-name:var(--font-newsreader)] text-[15px] leading-[1.6] text-[#3a4a3f]">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </article>

        {/* ───────── PRICING (advertisement plate) ───────── */}
        <section
          ref={fd.pricingRef}
          className="relative mt-20 overflow-hidden border border-[#1F2A22] bg-[#1F2A22] px-7 py-11 text-[#F4EFE6]"
        >
          <p className="text-[9px] uppercase tracking-[0.34em] text-[#b8a888]">
            Subscription · A Notice
          </p>
          <h3 className="mt-4 text-balance font-[family-name:var(--font-playfair)] text-[27px] leading-[1.12] tracking-[-0.01em]">
            {pricing.title}
          </h3>
          <p className="mt-4 font-[family-name:var(--font-newsreader)] text-[15px] leading-[1.55] text-[#cdbfa3]">
            {pricing.subtitle}
          </p>

          {/* Plans */}
          <div className="mt-8 space-y-4">
            {pricing.plans.map((plan, i) => (
              <div
                key={i}
                className={`flex items-center justify-between gap-4 border px-5 py-4 ${
                  plan.highlight
                    ? "border-[#B5754E] bg-[#B5754E]/15"
                    : "border-[#F4EFE6]/25"
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-[family-name:var(--font-playfair)] text-[18px] leading-none">
                      {plan.name}
                    </p>
                    {plan.highlight && (
                      <span className="border border-[#B5754E] px-1.5 py-[1px] text-[8px] uppercase tracking-[0.2em] text-[#e7c4a6]">
                        Recommended
                      </span>
                    )}
                  </div>
                  <p className="mt-1.5 font-[family-name:var(--font-newsreader)] text-[12px] italic text-[#cdbfa3]">
                    {plan.descriptor}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-[family-name:var(--font-playfair)] text-[20px] leading-none">
                    {plan.price}
                  </p>
                  <button
                    onClick={() => fd.onCta(`pricing-${plan.name.toLowerCase()}`)}
                    className="mt-2 text-[10px] uppercase tracking-[0.16em] text-[#e7c4a6] underline underline-offset-4 transition-colors hover:text-[#F4EFE6]"
                  >
                    {plan.ctaLabel}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Included list — two-column ledger */}
          <p className="mt-8 text-[9px] uppercase tracking-[0.34em] text-[#b8a888]">
            What is included
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-x-5 gap-y-2.5">
            {pricing.included.map((feat, i) => (
              <li
                key={i}
                className="flex items-start gap-2 font-[family-name:var(--font-newsreader)] text-[13px] leading-snug text-[#e6ddcb]"
              >
                <span className="mt-[6px] inline-block h-1 w-1 shrink-0 rounded-full bg-[#B5754E]" />
                {feat}
              </li>
            ))}
          </ul>

          <button
            onClick={() => fd.onCta("pricing")}
            className="mt-9 inline-flex w-full items-center justify-center gap-3 border border-[#F4EFE6] bg-[#F4EFE6] px-7 py-3.5 text-[14px] font-medium uppercase tracking-[0.12em] text-[#1F2A22] transition-colors hover:bg-transparent hover:text-[#F4EFE6]"
          >
            {pricing.ctaLabel}
            <span>→</span>
          </button>

          <p className="mt-5 text-center font-[family-name:var(--font-newsreader)] text-[12px] italic text-[#b8a888]">
            {pricing.scarcityLine}
          </p>
        </section>

        {/* ───────── TESTIMONIALS (letters to the editor) ───────── */}
        <section className="mt-20">
          <div className="flex items-baseline justify-between border-t border-[#1F2A22]/30 pt-3">
            <span className="text-[9px] uppercase tracking-[0.34em] text-[#9c8a6d]">
              III. Letters from Members
            </span>
            <span className="font-[family-name:var(--font-newsreader)] text-[11px] italic text-[#9c8a6d]">
              folio iii
            </span>
          </div>

          <div className="mt-9 space-y-10">
            {testimonials.map((t, i) => (
              <figure key={i} className="border-l-2 border-[#B5754E] pl-5">
                <blockquote className="font-[family-name:var(--font-playfair)] text-[19px] italic leading-[1.42] tracking-[-0.005em] text-[#1F2A22]">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-3 text-[11px] uppercase tracking-[0.2em] text-[#6a7a6f]">
                  — {t.name}, {t.age}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ───────── FAQ (the small print) ───────── */}
        <section className="mt-20">
          <div className="flex items-baseline justify-between border-t border-[#1F2A22]/30 pt-3">
            <span className="text-[9px] uppercase tracking-[0.34em] text-[#9c8a6d]">
              IV. Questions &amp; Answers
            </span>
            <span className="font-[family-name:var(--font-newsreader)] text-[11px] italic text-[#9c8a6d]">
              folio iv
            </span>
          </div>

          <div className="mt-4 divide-y divide-[#1F2A22]/20">
            {faq.map((item, i) => (
              <details key={i} className="group py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                  <span className="font-[family-name:var(--font-playfair)] text-[17px] leading-[1.25] tracking-[-0.005em] text-[#1F2A22]">
                    {item.q}
                  </span>
                  <span className="mt-1 select-none font-[family-name:var(--font-playfair)] text-[20px] leading-none text-[#B5754E] transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 font-[family-name:var(--font-newsreader)] text-[14px] leading-[1.6] text-[#3a4a3f]">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* ───────── FINAL CTA (colophon close) ───────── */}
        <section className="mt-20 border-t border-[#1F2A22]/30 pt-12 text-center">
          <h3 className="text-balance font-[family-name:var(--font-playfair)] text-[32px] italic leading-[1.1] tracking-[-0.01em] text-[#1F2A22]">
            {content.finalCta.headline}
          </h3>
          <button
            onClick={() => fd.onCta("final")}
            className="group mt-7 inline-flex items-center gap-3 rounded-none border border-[#1F2A22] bg-[#1F2A22] px-8 py-3.5 text-[14px] font-medium uppercase tracking-[0.12em] text-[#F4EFE6] transition-colors duration-300 hover:bg-transparent hover:text-[#1F2A22]"
          >
            {content.finalCta.ctaLabel}
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </button>
        </section>

        {/* ───────── FAKE-DOOR ───────── */}
        {fd.showWaitlist && (
          <section
            id="waitlist"
            className="mt-20 border border-[#1F2A22]/40 bg-[#EFE8DA] px-6 py-10"
          >
            {fd.state === "done" ? (
              <div className="text-center">
                <p className="font-[family-name:var(--font-playfair)] text-[25px] leading-tight text-[#1F2A22]">
                  {content.confirmation.title}
                </p>
                <p className="mt-3 font-[family-name:var(--font-newsreader)] text-[15px] leading-[1.6] text-[#3a4a3f]">
                  {content.confirmation.body}
                </p>
              </div>
            ) : (
              <>
                <p className="text-[9px] uppercase tracking-[0.34em] text-[#B5754E]">
                  Editor&rsquo;s note
                </p>
                <p className="mt-3 font-[family-name:var(--font-playfair)] text-[27px] italic leading-[1.1] tracking-[-0.01em] text-[#1F2A22]">
                  {fakedoor.title}
                </p>
                <p className="mt-3 font-[family-name:var(--font-newsreader)] text-[15px] leading-[1.6] text-[#3a4a3f]">
                  {fakedoor.body}
                </p>
                <form onSubmit={fd.submit} className="mt-6 flex flex-col gap-3">
                  <input
                    type="email"
                    required
                    value={fd.email}
                    onChange={(e) => fd.setEmail(e.target.value)}
                    placeholder={fakedoor.emailPlaceholder}
                    className="w-full rounded-none border border-[#1F2A22]/40 bg-[#F4EFE6] px-5 py-3.5 text-[15px] text-[#1F2A22] placeholder:text-[#9c8a6d] focus:border-[#1F2A22] focus:outline-none"
                  />
                  <button
                    type="submit"
                    disabled={fd.state === "loading"}
                    className="w-full rounded-none bg-[#1F2A22] px-6 py-3.5 text-[14px] font-medium uppercase tracking-[0.12em] text-[#F4EFE6] disabled:opacity-60"
                  >
                    {fd.state === "loading" ? "…" : fakedoor.submitLabel}
                  </button>
                  {fd.state === "error" && (
                    <p className="font-[family-name:var(--font-newsreader)] text-[13px] text-[#B5754E]">
                      Something went wrong. Try again.
                    </p>
                  )}
                </form>
                <p className="mt-4 text-center font-[family-name:var(--font-newsreader)] text-[12px] italic text-[#6a7a6f]">
                  {fakedoor.privacyLine}
                </p>
              </>
            )}
          </section>
        )}

        {/* ───────── COLOPHON / FOOTER ───────── */}
        <footer className="mt-20 border-t border-[#1F2A22]/30 pt-8 text-center">
          <p className="font-[family-name:var(--font-playfair)] text-[16px] italic text-[#1F2A22]">
            {footer.lines[0]}
          </p>
          <p className="mt-3 text-[10px] uppercase tracking-[0.26em] text-[#9c8a6d]">
            {footer.lines.slice(1).join("  ·  ")}
          </p>
        </footer>
      </div>

      {/* Sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#1F2A22]/20 bg-[#F4EFE6]/90 px-6 py-3 backdrop-blur-md">
        <button
          onClick={() => fd.onCta("sticky")}
          className="mx-auto flex w-full max-w-md items-center justify-center gap-2 rounded-none bg-[#1F2A22] px-6 py-3.5 text-[14px] font-medium uppercase tracking-[0.12em] text-[#F4EFE6]"
        >
          {hero.ctaLabel}
          <span>→</span>
        </button>
      </div>
    </main>
  );
}
