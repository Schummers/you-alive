"use client";

import Image from "next/image";
import { Fraunces, Nunito_Sans } from "next/font/google";
import type { DesignProps } from "@/designs/types";
import { useFakeDoor } from "@/designs/shared/useFakeDoor";

// Organic + warm direction — soft curved blob dividers, sunset terracotta→cream
// →forest gradient washes, rounded geometry, a tactile hand-made calm. Fraunces
// (SOFT optical serif) for tender lyrical heads; Nunito Sans (rounded humanist)
// for a gentle, embracing body. Same locked brand palette.
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT"],
  style: ["normal", "italic"],
  display: "swap",
});

const nunito = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito",
  axes: ["opsz"],
  display: "swap",
});

export default function OrganicWarmDesign({ content, slug }: DesignProps) {
  const fd = useFakeDoor(slug);
  const { hero, problem, solution, pricing, testimonials, faq, fakedoor, footer } = content;

  return (
    <main
      className={`${fraunces.variable} ${nunito.variable} relative min-h-screen overflow-hidden bg-[#F4EFE6] font-[family-name:var(--font-nunito)] text-[#1F2A22] selection:bg-[#B5754E] selection:text-[#F4EFE6]`}
    >
      {/* Warm sunset gradient wash, fixed behind everything */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(120% 80% at 15% -5%, rgba(181,117,78,0.28) 0%, rgba(181,117,78,0) 45%), radial-gradient(130% 70% at 110% 18%, rgba(212,160,120,0.22) 0%, rgba(244,239,230,0) 55%), radial-gradient(140% 90% at 50% 118%, rgba(31,42,34,0.18) 0%, rgba(244,239,230,0) 50%)",
        }}
      />

      {/* Grain overlay */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.05] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative z-10 mx-auto max-w-md px-5 pb-32">
        {/* ───────── HERO ───────── */}
        <header className="-mx-5">
          <div className="relative">
            <div className="relative h-[76vh] min-h-[540px] w-full overflow-hidden rounded-b-[44px]">
              <Image
                src="/designs/a/hero.jpeg"
                alt=""
                fill
                priority
                sizes="(max-width: 768px) 100vw, 450px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#1F2A22]/10 via-transparent to-[#1F2A22]/55" />

              {/* Soft masthead */}
              <div className="absolute inset-x-0 top-0 px-7 pt-8">
                <span className="font-[family-name:var(--font-fraunces)] text-[15px] italic tracking-tight text-[#F4EFE6]">
                  {hero.brandLockup}
                </span>
              </div>
            </div>

            {/* Curved blob divider tucked under the photo */}
            <svg
              aria-hidden
              viewBox="0 0 390 70"
              preserveAspectRatio="none"
              className="absolute -bottom-px left-0 h-[70px] w-full text-[#F4EFE6]"
            >
              <path
                fill="currentColor"
                d="M0,40 C70,4 150,4 210,30 C270,56 330,58 390,30 L390,71 L0,71 Z"
              />
            </svg>
          </div>

          {/* Subtitle + CTA on cream */}
          <section className="px-5 pt-6">
            <p className="text-[17.5px] leading-[1.55] text-[#3a4a3f]">
              {hero.subtitle}
            </p>

            <button
              onClick={() => fd.onCta("hero")}
              className="group mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#B5754E] px-7 py-4 text-[15.5px] font-bold text-[#F4EFE6] shadow-[0_20px_44px_-22px_rgba(181,117,78,0.9)] transition-transform duration-300 hover:-translate-y-[2px]"
            >
              {hero.ctaLabel}
              <span className="text-lg transition-transform group-hover:translate-x-0.5">→</span>
            </button>

            <p className="mt-5 flex items-center justify-center gap-2 text-center text-[12.5px] tracking-wide text-[#6a7a6f]">
              <span className="inline-block h-[6px] w-[6px] rounded-full bg-[#B5754E]" />
              {hero.reassuranceLine}
            </p>
          </section>
        </header>

        {/* ───────── PROBLEM ───────── */}
        <section className="relative mt-20 overflow-hidden rounded-[36px] bg-gradient-to-br from-[#EFE3D2] to-[#F4EFE6] px-7 py-10">
          <div
            aria-hidden
            className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-[#B5754E]/20 blur-2xl"
          />
          <p className="relative mb-4 text-[10px] font-bold uppercase tracking-[0.32em] text-[#9c8a6d]">
            The problem
          </p>
          <h2
            className="relative text-balance font-[family-name:var(--font-fraunces)] text-[29px] leading-[1.08] tracking-[-0.015em] text-[#1F2A22]"
            style={{ fontVariationSettings: '"opsz" 144, "SOFT" 60' }}
          >
            {problem.title}
          </h2>
          <p className="relative mt-5 text-[15.5px] leading-[1.6] text-[#3a4a3f]">
            {problem.body}
          </p>
        </section>

        {/* ───────── SOLUTION ───────── */}
        <section className="mt-20 px-2">
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.32em] text-[#9c8a6d]">
            {solution.intro}
          </p>

          <ol className="mt-9 space-y-7">
            {solution.steps.map((s, i) => (
              <li
                key={i}
                className="relative rounded-[30px] bg-[#FBF7EF] p-7 shadow-[0_24px_50px_-34px_rgba(31,42,34,0.5)] ring-1 ring-[#1F2A22]/5"
              >
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#C98A5E] to-[#B5754E] font-[family-name:var(--font-fraunces)] text-[20px] text-[#F4EFE6]"
                  style={{ fontVariationSettings: '"opsz" 32' }}
                >
                  {i + 1}
                </span>
                <h3
                  className="mt-5 font-[family-name:var(--font-fraunces)] text-[20px] leading-[1.22] tracking-[-0.005em] text-[#1F2A22]"
                  style={{ fontVariationSettings: '"opsz" 32, "SOFT" 50' }}
                >
                  {s.title}
                </h3>
                <p className="mt-3 text-[14.5px] leading-[1.6] text-[#3a4a3f]">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* ───────── PRICING ───────── */}
        <section
          ref={fd.pricingRef}
          className="relative mt-20 overflow-hidden rounded-[40px] bg-gradient-to-b from-[#243029] to-[#1F2A22] px-6 py-11 text-[#F4EFE6]"
        >
          <div
            aria-hidden
            className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#B5754E]/35 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-20 -left-16 h-52 w-52 rounded-full bg-[#C98A5E]/20 blur-3xl"
          />

          <div className="relative">
            <h2
              className="text-balance font-[family-name:var(--font-fraunces)] text-[27px] leading-[1.1] tracking-[-0.015em]"
              style={{ fontVariationSettings: '"opsz" 144, "SOFT" 70' }}
            >
              {pricing.title}
            </h2>
            <p className="mt-4 text-[14.5px] leading-[1.6] text-[#cdbfa6]">
              {pricing.subtitle}
            </p>

            <div className="mt-8 space-y-4">
              {pricing.plans.map((plan, i) => (
                <div
                  key={i}
                  className={`relative rounded-[28px] p-6 ${
                    plan.highlight
                      ? "bg-[#F4EFE6] text-[#1F2A22] shadow-[0_24px_50px_-28px_rgba(181,117,78,0.8)]"
                      : "bg-[#F4EFE6]/8 text-[#F4EFE6] ring-1 ring-[#F4EFE6]/15"
                  }`}
                >
                  {plan.highlight && (
                    <span className="absolute -top-3 left-6 rounded-full bg-[#B5754E] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#F4EFE6]">
                      {plan.descriptor}
                    </span>
                  )}
                  <div className="flex items-baseline justify-between">
                    <span
                      className="font-[family-name:var(--font-fraunces)] text-[19px]"
                      style={{ fontVariationSettings: '"opsz" 32' }}
                    >
                      {plan.name}
                    </span>
                    <span
                      className="font-[family-name:var(--font-fraunces)] text-[26px] leading-none"
                      style={{ fontVariationSettings: '"opsz" 144' }}
                    >
                      {plan.price}
                    </span>
                  </div>
                  {!plan.highlight && (
                    <p className="mt-1 text-[12.5px] text-[#cdbfa6]">{plan.descriptor}</p>
                  )}
                  <button
                    onClick={() => fd.onCta(`pricing-${plan.name.toLowerCase()}`)}
                    className={`mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-bold transition hover:-translate-y-[1px] ${
                      plan.highlight
                        ? "bg-[#B5754E] text-[#F4EFE6]"
                        : "bg-[#F4EFE6] text-[#1F2A22]"
                    }`}
                  >
                    {plan.ctaLabel}
                    <span className="text-base">→</span>
                  </button>
                </div>
              ))}
            </div>

            <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-3">
              {pricing.included.map((feat, i) => (
                <li key={i} className="flex items-start gap-2 text-[13px] text-[#e6dcc8]">
                  <span className="mt-[5px] inline-block h-[6px] w-[6px] shrink-0 rounded-full bg-[#B5754E]" />
                  {feat}
                </li>
              ))}
            </ul>

            <p className="mt-7 text-center text-[12px] leading-[1.5] text-[#cdbfa6]">
              {pricing.scarcityLine}
            </p>
          </div>
        </section>

        {/* ───────── TESTIMONIALS ───────── */}
        <section className="mt-20">
          <p className="mb-7 text-center text-[10px] font-bold uppercase tracking-[0.32em] text-[#9c8a6d]">
            From those who started
          </p>

          <div className="space-y-5">
            {testimonials.map((t, i) => (
              <figure
                key={i}
                className="relative overflow-hidden rounded-[30px] bg-[#FBF7EF] p-7 shadow-[0_24px_50px_-36px_rgba(31,42,34,0.5)] ring-1 ring-[#1F2A22]/5"
              >
                <span
                  aria-hidden
                  className="absolute -right-1 -top-4 font-[family-name:var(--font-fraunces)] text-[72px] leading-none text-[#B5754E]/30"
                  style={{ fontVariationSettings: '"opsz" 144' }}
                >
                  &rdquo;
                </span>
                <blockquote
                  className="relative font-[family-name:var(--font-fraunces)] text-[18px] leading-[1.45] tracking-[-0.005em] text-[#1F2A22]"
                  style={{ fontVariationSettings: '"opsz" 32, "SOFT" 60' }}
                >
                  {t.quote}
                </blockquote>
                <figcaption className="mt-4 flex items-center gap-2 text-[12.5px] uppercase tracking-[0.16em] text-[#6a7a6f]">
                  <span className="inline-block h-[6px] w-6 rounded-full bg-[#B5754E]/60" />
                  {t.name} · {t.age}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ───────── FAQ ───────── */}
        <section className="mt-20">
          <p className="mb-6 text-center text-[10px] font-bold uppercase tracking-[0.32em] text-[#9c8a6d]">
            Questions you might have
          </p>
          <div className="space-y-3">
            {faq.map((item, i) => (
              <details
                key={i}
                className="group rounded-[26px] bg-[#FBF7EF] px-6 py-5 ring-1 ring-[#1F2A22]/5 transition open:bg-[#F4EFE6]"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                  <span
                    className="font-[family-name:var(--font-fraunces)] text-[16.5px] leading-[1.3] tracking-[-0.005em] text-[#1F2A22]"
                    style={{ fontVariationSettings: '"opsz" 32' }}
                  >
                    {item.q}
                  </span>
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 select-none items-center justify-center rounded-full bg-[#B5754E]/15 text-[18px] leading-none text-[#B5754E] transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-[14px] leading-[1.6] text-[#3a4a3f]">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* ───────── FINAL CTA ───────── */}
        <section className="relative mt-20 overflow-hidden rounded-[40px] bg-gradient-to-br from-[#C98A5E] via-[#B5754E] to-[#1F2A22] px-7 py-12 text-center text-[#F4EFE6]">
          <div
            aria-hidden
            className="absolute -bottom-16 -right-10 h-48 w-48 rounded-full bg-[#F4EFE6]/15 blur-2xl"
          />
          <h2
            className="relative text-balance font-[family-name:var(--font-fraunces)] text-[30px] leading-[1.08] tracking-[-0.015em]"
            style={{ fontVariationSettings: '"opsz" 144, "SOFT" 80' }}
          >
            {content.finalCta.headline}
          </h2>
          <button
            onClick={() => fd.onCta("final")}
            className="relative mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#F4EFE6] px-7 py-4 text-[15.5px] font-bold text-[#1F2A22] transition-transform duration-300 hover:-translate-y-[2px]"
          >
            {content.finalCta.ctaLabel}
            <span className="text-lg">→</span>
          </button>
        </section>

        {/* ───────── FAKE-DOOR ───────── */}
        {fd.showWaitlist && (
          <section
            id="waitlist"
            className="relative mt-20 overflow-hidden rounded-[36px] bg-[#FBF7EF] px-6 py-9 ring-1 ring-[#1F2A22]/10"
          >
            <div
              aria-hidden
              className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#B5754E]/20 blur-2xl"
            />
            {fd.state === "done" ? (
              <div className="relative text-center">
                <p
                  className="font-[family-name:var(--font-fraunces)] text-[25px] leading-tight text-[#1F2A22]"
                  style={{ fontVariationSettings: '"opsz" 144, "SOFT" 80' }}
                >
                  {content.confirmation.title}
                </p>
                <p className="mt-3 text-[14.5px] leading-[1.6] text-[#3a4a3f]">
                  {content.confirmation.body}
                </p>
              </div>
            ) : (
              <div className="relative">
                <p
                  className="font-[family-name:var(--font-fraunces)] text-[27px] leading-[1.1] tracking-[-0.015em] text-[#1F2A22]"
                  style={{ fontVariationSettings: '"opsz" 144, "SOFT" 90' }}
                >
                  <span className="italic">{fakedoor.title}</span>
                </p>
                <p className="mt-3 text-[14.5px] leading-[1.6] text-[#3a4a3f]">
                  {fakedoor.body}
                </p>
                <form onSubmit={fd.submit} className="mt-6 flex flex-col gap-3">
                  <input
                    type="email"
                    required
                    value={fd.email}
                    onChange={(e) => fd.setEmail(e.target.value)}
                    placeholder={fakedoor.emailPlaceholder}
                    className="w-full rounded-full border border-[#1F2A22]/15 bg-[#F4EFE6] px-5 py-3.5 text-[15px] text-[#1F2A22] placeholder:text-[#9c8a6d] focus:border-[#B5754E] focus:outline-none"
                  />
                  <button
                    type="submit"
                    disabled={fd.state === "loading"}
                    className="w-full rounded-full bg-[#B5754E] px-6 py-3.5 text-[15px] font-bold text-[#F4EFE6] disabled:opacity-60"
                  >
                    {fd.state === "loading" ? "..." : fakedoor.submitLabel}
                  </button>
                  {fd.state === "error" && (
                    <p className="text-[13px] text-[#B5754E]">
                      Something went wrong. Try again.
                    </p>
                  )}
                </form>
                <p className="mt-4 text-center text-[12px] text-[#6a7a6f]">
                  {fakedoor.privacyLine}
                </p>
              </div>
            )}
          </section>
        )}

        {/* ───────── FOOTER ───────── */}
        <footer className="mt-20 text-center">
          <div aria-hidden className="mx-auto mb-7 h-[3px] w-16 rounded-full bg-[#B5754E]/50" />
          <p
            className="font-[family-name:var(--font-fraunces)] text-[15px] italic text-[#1F2A22]"
            style={{ fontVariationSettings: '"opsz" 32' }}
          >
            {footer.lines[0]}
          </p>
          <p className="mt-3 text-[11px] uppercase tracking-[0.24em] text-[#9c8a6d]">
            {footer.lines.slice(1).join(" · ")}
          </p>
        </footer>
      </div>

      {/* Sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 px-4 pb-4">
        <button
          onClick={() => fd.onCta("sticky")}
          className="mx-auto flex w-full max-w-md items-center justify-center gap-2 rounded-full bg-[#1F2A22] px-6 py-4 text-[15px] font-bold text-[#F4EFE6] shadow-[0_18px_44px_-18px_rgba(31,42,34,0.9)]"
        >
          {hero.ctaLabel}
          <span className="text-base">→</span>
        </button>
      </div>
    </main>
  );
}
