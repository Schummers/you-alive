"use client";

import Image from "next/image";
import { Newsreader, Spectral } from "next/font/google";
import type { DesignProps } from "@/designs/types";
import { useFakeDoor } from "@/designs/shared/useFakeDoor";

// Iteration #12 — RICH TEXTURE + DEPTH.
// A pressed-paper keepsake: layered paper grain, soft stacked shadows, terracotta
// gradient washes at dusk, and a recurring pine-frond botanical motif echoing the
// hammock photograph. Newsreader (literary serif, optical sizing + italics) carries
// the contemplative voice; Spectral sets the calm body text. Deep forest ink on
// warm cream, terracotta as the single warm flame. Depth = high, never noisy.
const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
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

// A single pine frond — used as a quiet botanical divider / texture accent.
function PineFrond({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 120 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    >
      <path d="M4 12 H116" opacity="0.55" />
      {Array.from({ length: 13 }).map((_, i) => {
        const x = 10 + i * 8.2;
        const len = 6 + Math.sin(i * 0.7) * 2.5;
        return (
          <g key={i} opacity="0.5">
            <path d={`M${x} 12 L${x - 5} ${12 - len}`} />
            <path d={`M${x} 12 L${x - 5} ${12 + len}`} />
          </g>
        );
      })}
    </svg>
  );
}

export default function PressedPaperDepthDesign({ content, slug }: DesignProps) {
  const fd = useFakeDoor(slug);
  const { hero, problem, solution, pricing, testimonials, faq, fakedoor, footer } =
    content;

  const highlightPlan =
    pricing.plans.find((p) => p.highlight) ?? pricing.plans[0];
  const otherPlans = pricing.plans.filter((p) => p !== highlightPlan);

  return (
    <main
      className={`${newsreader.variable} ${spectral.variable} relative min-h-screen overflow-hidden bg-[#F1EBDD] text-[#1F2A22] selection:bg-[#1F2A22] selection:text-[#F4EFE6]`}
      style={{ fontFamily: "var(--font-spectral), ui-serif, Georgia, serif" }}
    >
      {/* ── Atmosphere: stacked gradient washes for depth ── */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(120% 60% at 50% -10%, rgba(181,117,78,0.18), transparent 60%), radial-gradient(90% 50% at 100% 110%, rgba(31,42,34,0.16), transparent 55%), linear-gradient(180deg, #F4EFE6 0%, #F1EBDD 45%, #ECE3D1 100%)",
        }}
      />

      {/* ── Paper grain (fine) ── */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.07] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 220 220' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='220' height='220' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      {/* ── Soft vignette for dusk depth ── */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-40"
        style={{
          boxShadow: "inset 0 0 180px 40px rgba(31,42,34,0.16)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-md px-5 pb-36">
        {/* ───────── HERO ───────── */}
        <header className="-mx-5">
          <div className="relative">
            {/* Layered paper edge under the photo for tactile depth */}
            <div className="relative mx-3 mt-4 overflow-hidden rounded-b-[34px] shadow-[0_26px_60px_-28px_rgba(31,42,34,0.75),0_8px_18px_-12px_rgba(31,42,34,0.5)] ring-1 ring-[#1F2A22]/10">
              <div className="relative h-[80vh] min-h-[580px] w-full">
                <Image
                  src="/designs/a/hero.jpeg"
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
                      "linear-gradient(180deg, rgba(31,42,34,0.35) 0%, transparent 28%, transparent 55%, rgba(31,42,34,0.65) 100%)",
                  }}
                />
                {/* Masthead */}
                <div className="absolute inset-x-0 top-0 px-6 pt-7">
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-[#F4EFE6]/85">
                    <span className="font-[family-name:var(--font-newsreader)] text-[15px] italic tracking-normal">
                      {hero.brandLockup}
                    </span>
                    <span>est. for the ones you love</span>
                  </div>
                  <PineFrond className="mt-4 h-3 w-40 text-[#F4EFE6]/60" />
                </div>
              </div>
            </div>
          </div>

          {/* Subtitle + CTA on cream */}
          <section className="px-5 pt-10">
            <PineFrond className="mb-6 h-3 w-28 text-[#B5754E]/70" />
            <p
              className="font-[family-name:var(--font-newsreader)] text-[21px] font-light leading-[1.45] tracking-[-0.01em] text-[#27332b]"
              style={{ fontVariationSettings: '"opsz" 30' }}
            >
              {hero.subtitle}
            </p>

            <button
              onClick={() => fd.onCta("hero")}
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-gradient-to-b from-[#26332b] to-[#1A231C] px-8 py-4 text-[15px] font-medium tracking-wide text-[#F4EFE6] shadow-[0_16px_34px_-16px_rgba(31,42,34,0.85),inset_0_1px_0_rgba(255,255,255,0.08)] transition-transform duration-300 hover:-translate-y-[1.5px]"
              style={{ fontFamily: "var(--font-spectral)" }}
            >
              {hero.ctaLabel}
              <span className="text-lg transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </button>

            <p className="mt-5 flex items-center gap-2.5 text-[12.5px] tracking-wide text-[#6a7a6f]">
              <span className="inline-block h-[1px] w-7 bg-[#B5754E]/70" />
              {hero.reassuranceLine}
            </p>
          </section>
        </header>

        {/* ───────── PROBLEM ───────── */}
        <section className="mt-24">
          <p className="mb-5 text-[10px] uppercase tracking-[0.34em] text-[#9c8a6d]">
            The problem
          </p>
          <h2
            className="text-balance font-[family-name:var(--font-newsreader)] text-[31px] font-light leading-[1.08] tracking-[-0.015em] text-[#1F2A22]"
            style={{ fontVariationSettings: '"opsz" 72' }}
          >
            <span className="italic">{problem.title.split(",")[0]},</span>
            {problem.title.includes(",") && (
              <span className="block opacity-90">
                {problem.title.split(",").slice(1).join(",").trim()}
              </span>
            )}
          </h2>
          <p className="mt-6 text-[16px] leading-[1.65] text-[#3a4a3f]">
            {problem.body}
          </p>
        </section>

        {/* ───────── SOLUTION ───────── */}
        <section className="mt-24">
          <div className="flex items-baseline justify-between">
            <p className="text-[10px] uppercase tracking-[0.34em] text-[#9c8a6d]">
              How it works
            </p>
            <p className="font-[family-name:var(--font-newsreader)] text-[13px] italic text-[#6a7a6f]">
              three quiet steps
            </p>
          </div>
          <h2
            className="mt-3 font-[family-name:var(--font-newsreader)] text-[31px] font-light leading-[1.08] tracking-[-0.015em] text-[#1F2A22]"
            style={{ fontVariationSettings: '"opsz" 72' }}
          >
            {solution.intro}
          </h2>

          <ol className="mt-10 space-y-6">
            {solution.steps.map((s, i) => (
              <li
                key={i}
                className="relative overflow-hidden rounded-[24px] border border-[#1F2A22]/10 bg-gradient-to-b from-[#F7F2E7] to-[#EFE7D5] px-6 py-7 shadow-[0_18px_38px_-26px_rgba(31,42,34,0.6),inset_0_1px_0_rgba(255,255,255,0.55)]"
              >
                <div
                  aria-hidden
                  className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#B5754E]/12 blur-2xl"
                />
                <div className="relative grid grid-cols-[auto_1fr] gap-5">
                  <span
                    className="font-[family-name:var(--font-newsreader)] text-[46px] leading-none text-[#B5754E]"
                    style={{ fontVariationSettings: '"opsz" 72' }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3
                      className="font-[family-name:var(--font-newsreader)] text-[20px] font-medium leading-[1.22] tracking-[-0.005em] text-[#1F2A22]"
                      style={{ fontVariationSettings: '"opsz" 24' }}
                    >
                      {s.title}
                    </h3>
                    <p className="mt-2.5 text-[14.5px] leading-[1.6] text-[#3a4a3f]">
                      {s.body}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* ───────── PRICING ───────── */}
        <section
          ref={fd.pricingRef}
          className="relative mt-24 overflow-hidden rounded-[30px] px-7 py-10 text-[#F4EFE6] shadow-[0_30px_70px_-30px_rgba(31,42,34,0.9)] ring-1 ring-[#1F2A22]/40"
          style={{
            background:
              "radial-gradient(120% 80% at 80% -10%, rgba(181,117,78,0.45), transparent 55%), linear-gradient(180deg, #26332b 0%, #1A231C 100%)",
          }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-screen"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='m'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23m)'/%3E%3C/svg%3E\")",
            }}
          />
          <div className="relative">
            <p className="text-[10px] uppercase tracking-[0.34em] text-[#d8b48f]">
              Membership
            </p>
            <h2
              className="mt-3 text-balance font-[family-name:var(--font-newsreader)] text-[29px] font-light leading-[1.12] tracking-[-0.015em]"
              style={{ fontVariationSettings: '"opsz" 72' }}
            >
              {pricing.title}
            </h2>
            <p className="mt-4 text-[14.5px] leading-[1.6] text-[#cdd4cb]">
              {pricing.subtitle}
            </p>

            {/* Plans */}
            <div className="mt-8 space-y-4">
              {/* Highlight plan as a wax-seal-style medallion card */}
              <div className="relative overflow-hidden rounded-[22px] border border-[#d8b48f]/40 bg-gradient-to-b from-[#B5754E]/30 to-[#1A231C]/10 px-6 py-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                <span className="absolute right-5 top-5 rounded-full bg-[#B5754E] px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-[#F4EFE6] shadow-[0_6px_14px_-6px_rgba(0,0,0,0.6)]">
                  {highlightPlan.descriptor.split("·")[0].trim()}
                </span>
                <p className="font-[family-name:var(--font-newsreader)] text-[15px] italic text-[#d8b48f]">
                  {highlightPlan.name}
                </p>
                <p
                  className="mt-1 font-[family-name:var(--font-newsreader)] text-[44px] font-light leading-none"
                  style={{ fontVariationSettings: '"opsz" 72' }}
                >
                  {highlightPlan.price}
                </p>
                <p className="mt-2 text-[12.5px] text-[#cdd4cb]">
                  {highlightPlan.descriptor}
                </p>
                <button
                  onClick={() => fd.onCta("pricing-annual")}
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#F4EFE6] px-6 py-3.5 text-[15px] font-medium text-[#1F2A22] shadow-[0_12px_26px_-14px_rgba(0,0,0,0.7)] transition hover:bg-white"
                  style={{ fontFamily: "var(--font-spectral)" }}
                >
                  {highlightPlan.ctaLabel}
                  <span className="text-base">→</span>
                </button>
              </div>

              {otherPlans.map((plan, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between gap-4 rounded-[20px] border border-[#F4EFE6]/15 bg-[#F4EFE6]/[0.04] px-6 py-5"
                >
                  <div>
                    <p className="font-[family-name:var(--font-newsreader)] text-[15px] italic text-[#d8b48f]">
                      {plan.name}
                    </p>
                    <p
                      className="font-[family-name:var(--font-newsreader)] text-[24px] font-light leading-tight"
                      style={{ fontVariationSettings: '"opsz" 36' }}
                    >
                      {plan.price}
                    </p>
                    <p className="mt-0.5 text-[12px] text-[#cdd4cb]">
                      {plan.descriptor}
                    </p>
                  </div>
                  <button
                    onClick={() => fd.onCta("pricing-monthly")}
                    className="shrink-0 rounded-full border border-[#F4EFE6]/40 px-5 py-2.5 text-[13px] font-medium text-[#F4EFE6] transition hover:bg-[#F4EFE6]/10"
                    style={{ fontFamily: "var(--font-spectral)" }}
                  >
                    {plan.ctaLabel}
                  </button>
                </div>
              ))}
            </div>

            {/* Included list */}
            <div className="mt-8 border-t border-[#F4EFE6]/15 pt-6">
              <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#d8b48f]">
                Everything included
              </p>
              <ul className="grid grid-cols-1 gap-2.5">
                {pricing.included.map((feat, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-[14px] text-[#e8e3d6]"
                  >
                    <span className="text-[#d8b48f]">✦</span>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-6 text-center text-[12px] text-[#cdd4cb]">
              {pricing.scarcityLine}
            </p>
          </div>
        </section>

        {/* ───────── TESTIMONIALS ───────── */}
        <section className="mt-24">
          <p className="mb-2 text-[10px] uppercase tracking-[0.34em] text-[#9c8a6d]">
            From those who started
          </p>
          <PineFrond className="mb-7 h-3 w-32 text-[#B5754E]/60" />

          <div className="space-y-6">
            {testimonials.map((t, i) => (
              <figure
                key={i}
                className="relative overflow-hidden rounded-[24px] border border-[#1F2A22]/10 bg-gradient-to-b from-[#F7F2E7] to-[#EFE7D5] px-6 py-7 shadow-[0_18px_38px_-26px_rgba(31,42,34,0.55),inset_0_1px_0_rgba(255,255,255,0.55)]"
              >
                <span
                  aria-hidden
                  className="absolute -left-1 -top-4 font-[family-name:var(--font-newsreader)] text-[70px] leading-none text-[#B5754E]/35"
                  style={{ fontVariationSettings: '"opsz" 72' }}
                >
                  &ldquo;
                </span>
                <blockquote
                  className="relative pl-7 font-[family-name:var(--font-newsreader)] text-[19px] font-light italic leading-[1.42] tracking-[-0.005em] text-[#1F2A22]"
                  style={{ fontVariationSettings: '"opsz" 36' }}
                >
                  {t.quote}
                </blockquote>
                <figcaption className="mt-4 pl-7 text-[12px] uppercase tracking-[0.18em] text-[#6a7a6f]">
                  {t.name} · {t.age}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ───────── FAQ ───────── */}
        <section className="mt-24">
          <p className="mb-5 text-[10px] uppercase tracking-[0.34em] text-[#9c8a6d]">
            Questions you might have
          </p>
          <div className="overflow-hidden rounded-[24px] border border-[#1F2A22]/10 bg-gradient-to-b from-[#F7F2E7] to-[#EFE7D5] px-6 shadow-[0_18px_38px_-28px_rgba(31,42,34,0.5),inset_0_1px_0_rgba(255,255,255,0.5)]">
            <div className="divide-y divide-[#1F2A22]/12">
              {faq.map((item, i) => (
                <details key={i} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                    <span
                      className="font-[family-name:var(--font-newsreader)] text-[17px] font-medium tracking-[-0.005em] text-[#1F2A22]"
                      style={{ fontVariationSettings: '"opsz" 24' }}
                    >
                      {item.q}
                    </span>
                    <span className="mt-0.5 select-none font-[family-name:var(--font-newsreader)] text-[24px] leading-none text-[#B5754E] transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 max-w-[36ch] text-[14px] leading-[1.6] text-[#3a4a3f]">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ───────── FINAL CTA ───────── */}
        <section className="mt-24 text-center">
          <PineFrond className="mx-auto mb-6 h-3 w-36 text-[#B5754E]/70" />
          <h2
            className="text-balance font-[family-name:var(--font-newsreader)] text-[34px] font-light italic leading-[1.08] tracking-[-0.015em] text-[#1F2A22]"
            style={{ fontVariationSettings: '"opsz" 72' }}
          >
            {content.finalCta.headline}
          </h2>
          <button
            onClick={() => fd.onCta("final")}
            className="group mt-7 inline-flex items-center gap-3 rounded-full bg-gradient-to-b from-[#26332b] to-[#1A231C] px-9 py-4 text-[15px] font-medium tracking-wide text-[#F4EFE6] shadow-[0_16px_34px_-16px_rgba(31,42,34,0.85),inset_0_1px_0_rgba(255,255,255,0.08)] transition-transform duration-300 hover:-translate-y-[1.5px]"
            style={{ fontFamily: "var(--font-spectral)" }}
          >
            {content.finalCta.ctaLabel}
            <span className="text-lg transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </button>
        </section>

        {/* ───────── FAKE-DOOR ───────── */}
        {fd.showWaitlist && (
          <section
            id="waitlist"
            className="mt-24 overflow-hidden rounded-[28px] border border-[#1F2A22]/15 bg-gradient-to-b from-[#F2ECDD] to-[#E7DCC6] px-6 py-9 shadow-[0_24px_54px_-30px_rgba(31,42,34,0.6),inset_0_1px_0_rgba(255,255,255,0.55)]"
          >
            {fd.state === "done" ? (
              <div className="text-center">
                <PineFrond className="mx-auto mb-5 h-3 w-28 text-[#B5754E]/70" />
                <p
                  className="font-[family-name:var(--font-newsreader)] text-[25px] font-light leading-tight text-[#1F2A22]"
                  style={{ fontVariationSettings: '"opsz" 72' }}
                >
                  {content.confirmation.title}
                </p>
                <p className="mt-3 text-[14.5px] leading-[1.6] text-[#3a4a3f]">
                  {content.confirmation.body}
                </p>
              </div>
            ) : (
              <>
                <p
                  className="font-[family-name:var(--font-newsreader)] text-[27px] font-light leading-[1.12] tracking-[-0.015em] text-[#1F2A22]"
                  style={{ fontVariationSettings: '"opsz" 72' }}
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
                    className="w-full rounded-full border border-[#1F2A22]/20 bg-[#F8F3E8] px-5 py-3.5 text-[15px] text-[#1F2A22] shadow-[inset_0_1px_3px_rgba(31,42,34,0.08)] placeholder:text-[#9c8a6d] focus:border-[#1F2A22] focus:outline-none"
                    style={{ fontFamily: "var(--font-spectral)" }}
                  />
                  <button
                    type="submit"
                    disabled={fd.state === "loading"}
                    className="w-full rounded-full bg-gradient-to-b from-[#26332b] to-[#1A231C] px-6 py-3.5 text-[15px] font-medium text-[#F4EFE6] shadow-[0_12px_26px_-14px_rgba(31,42,34,0.8)] disabled:opacity-60"
                    style={{ fontFamily: "var(--font-spectral)" }}
                  >
                    {fd.state === "loading" ? "…" : fakedoor.submitLabel}
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
              </>
            )}
          </section>
        )}

        {/* ───────── FOOTER ───────── */}
        <footer className="mt-20 border-t border-[#1F2A22]/15 pt-8 text-center">
          <PineFrond className="mx-auto mb-5 h-3 w-24 text-[#B5754E]/50" />
          <p
            className="font-[family-name:var(--font-newsreader)] text-[16px] font-light italic text-[#1F2A22]"
            style={{ fontVariationSettings: '"opsz" 24' }}
          >
            {footer.lines[0]}
          </p>
          <p className="mt-3 text-[11px] uppercase tracking-[0.26em] text-[#9c8a6d]">
            {footer.lines.slice(1).join(" · ")}
          </p>
        </footer>
      </div>

      {/* ── Sticky CTA ── */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#1F2A22]/10 bg-[#F1EBDD]/85 px-5 py-3 backdrop-blur-md">
        <button
          onClick={() => fd.onCta("sticky")}
          className="mx-auto flex w-full max-w-md items-center justify-center gap-2 rounded-full bg-gradient-to-b from-[#26332b] to-[#1A231C] px-6 py-3.5 text-[15px] font-medium text-[#F4EFE6] shadow-[0_14px_30px_-16px_rgba(31,42,34,0.8)]"
          style={{ fontFamily: "var(--font-spectral)" }}
        >
          {hero.ctaLabel}
          <span className="text-base">→</span>
        </button>
      </div>
    </main>
  );
}
