"use client";

import Image from "next/image";
import { Spectral, IBM_Plex_Mono } from "next/font/google";
import type { DesignProps } from "@/designs/types";
import { useFakeDoor } from "@/designs/shared/useFakeDoor";

// Dense bento + sharp corners. A compact, information-dense modular grid with
// crisp 0px corners — structured, editorial-systematic, the grid itself is the
// statement. Spectral (a tender, high-contrast serif) carries the dignified
// voice; IBM Plex Mono sets the systematic coordinate/label layer that frames
// each tile. Locked brand palette: cream paper, forest ink, terracotta.
const spectral = Spectral({
  subsets: ["latin"],
  variable: "--font-spectral",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export default function DenseBentoDesign({ content, slug }: DesignProps) {
  const fd = useFakeDoor(slug);
  const { hero, problem, solution, pricing, testimonials, faq, fakedoor, footer } =
    content;

  const tileBorder = "border border-[#1F2A22]/18";
  const label =
    "font-[family-name:var(--font-mono)] text-[9.5px] uppercase tracking-[0.22em] text-[#8a6f54]";

  return (
    <main
      className={`${spectral.variable} ${mono.variable} relative min-h-screen bg-[#EFE9DC] text-[#1F2A22] selection:bg-[#1F2A22] selection:text-[#EFE9DC]`}
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

      <div className="relative mx-auto max-w-md pb-28">
        {/* ───────── MASTHEAD STRIP ───────── */}
        <div className="flex items-stretch justify-between border-b border-[#1F2A22]/25">
          <div className="flex items-center gap-2 px-4 py-2.5">
            <span className="block h-2 w-2 bg-[#B5754E]" aria-hidden />
            <span className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.28em] text-[#1F2A22]">
              You Alive
            </span>
          </div>
          <div className="border-l border-[#1F2A22]/25 px-4 py-2.5">
            <span className="font-[family-name:var(--font-mono)] text-[9.5px] uppercase tracking-[0.22em] text-[#8a6f54]">
              EST · FOR · LATER
            </span>
          </div>
        </div>

        {/* ───────── HERO ───────── */}
        <header className="border-b border-[#1F2A22]/25">
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src="/designs/a/hero.jpeg"
              alt=""
              fill
              priority
              sizes="(max-width: 768px) 100vw, 450px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1F2A22]/30" />
            <div className="absolute inset-x-0 top-0 flex justify-between px-3 pt-3">
              <span className="font-[family-name:var(--font-mono)] text-[9px] uppercase tracking-[0.24em] text-[#EFE9DC]/85">
                fig. 01
              </span>
              <span className="font-[family-name:var(--font-mono)] text-[9px] uppercase tracking-[0.24em] text-[#EFE9DC]/85">
                contemplative
              </span>
            </div>
          </div>

          {/* Hero text tile under photo */}
          <div className="border-t border-[#1F2A22]/25 px-4 py-6">
            <p className="text-[17px] font-light leading-[1.5] text-[#33433a]">
              {hero.subtitle}
            </p>
          </div>

          {/* CTA + reassurance bento row */}
          <div className="grid grid-cols-[1fr_auto] border-t border-[#1F2A22]/25">
            <button
              onClick={() => fd.onCta("hero")}
              className="group flex items-center justify-between gap-3 bg-[#1F2A22] px-4 py-5 text-left text-[15px] font-medium text-[#EFE9DC] transition-colors hover:bg-[#14201a]"
            >
              {hero.ctaLabel}
              <span className="font-[family-name:var(--font-mono)] text-lg transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>
            <div className="flex items-center border-l border-[#1F2A22]/25 bg-[#B5754E] px-4">
              <span className="font-[family-name:var(--font-mono)] text-[9px] uppercase leading-[1.4] tracking-[0.14em] text-[#1F2A22]">
                Verified
                <br />
                release
              </span>
            </div>
          </div>
          <div className="border-t border-[#1F2A22]/25 px-4 py-3">
            <p className={label}>{hero.reassuranceLine}</p>
          </div>
        </header>

        {/* ───────── PROBLEM ───────── */}
        <section className="border-b border-[#1F2A22]/25 px-4 py-8">
          <div className="mb-4 flex items-center justify-between">
            <span className={label}>A · The problem</span>
            <span className="font-[family-name:var(--font-mono)] text-[9.5px] text-[#8a6f54]">
              [001]
            </span>
          </div>
          <h2 className="text-[27px] font-medium leading-[1.08] tracking-[-0.01em]">
            {problem.title}
          </h2>
          <p className="mt-5 text-[15px] font-light leading-[1.55] text-[#33433a]">
            {problem.body}
          </p>
        </section>

        {/* ───────── SOLUTION (bento steps) ───────── */}
        <section className="border-b border-[#1F2A22]/25">
          <div className="flex items-center justify-between px-4 py-4">
            <span className={label}>B · {solution.intro}</span>
            <span className="font-[family-name:var(--font-mono)] text-[9.5px] text-[#8a6f54]">
              3 steps
            </span>
          </div>
          <div className="grid grid-cols-1 border-t border-[#1F2A22]/25">
            {solution.steps.map((s, i) => (
              <div
                key={i}
                className="grid grid-cols-[3.2rem_1fr] border-b border-[#1F2A22]/25 last:border-b-0"
              >
                <div className="flex items-start justify-center border-r border-[#1F2A22]/25 bg-[#1F2A22] pt-4">
                  <span className="font-[family-name:var(--font-mono)] text-[15px] font-medium text-[#B5754E]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="px-4 py-5">
                  <h3 className="text-[18px] font-medium leading-[1.2] tracking-[-0.005em]">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 text-[13.5px] font-light leading-[1.55] text-[#33433a]">
                    {s.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ───────── PRICING ───────── */}
        <section
          ref={fd.pricingRef}
          className="border-b border-[#1F2A22]/25 bg-[#1F2A22] text-[#EFE9DC]"
        >
          <div className="flex items-center justify-between border-b border-[#EFE9DC]/15 px-4 py-4">
            <span className="font-[family-name:var(--font-mono)] text-[9.5px] uppercase tracking-[0.22em] text-[#c9a37f]">
              C · Membership
            </span>
            <span className="font-[family-name:var(--font-mono)] text-[9.5px] text-[#c9a37f]">
              [pricing]
            </span>
          </div>

          <div className="px-4 py-6">
            <h2 className="text-[24px] font-medium leading-[1.12] tracking-[-0.01em]">
              {pricing.title}
            </h2>
            <p className="mt-3 text-[13.5px] font-light leading-[1.5] text-[#cdd3cb]">
              {pricing.subtitle}
            </p>
          </div>

          {/* Two plan tiles */}
          <div className="grid grid-cols-2 border-t border-[#EFE9DC]/15">
            {pricing.plans.map((plan, i) => (
              <div
                key={i}
                className={`flex flex-col px-4 py-5 ${
                  i === 0 ? "border-r border-[#EFE9DC]/15" : ""
                } ${plan.highlight ? "bg-[#B5754E] text-[#1F2A22]" : ""}`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`font-[family-name:var(--font-mono)] text-[9.5px] uppercase tracking-[0.2em] ${
                      plan.highlight ? "text-[#1F2A22]" : "text-[#c9a37f]"
                    }`}
                  >
                    {plan.name}
                  </span>
                  {plan.highlight && (
                    <span className="font-[family-name:var(--font-mono)] text-[8.5px] uppercase tracking-[0.16em] text-[#1F2A22]">
                      ◆ best
                    </span>
                  )}
                </div>
                <span className="mt-3 text-[26px] font-medium leading-none tracking-[-0.01em]">
                  {plan.price.split(" ")[0]}
                </span>
                <span
                  className={`mt-1 font-[family-name:var(--font-mono)] text-[9.5px] ${
                    plan.highlight ? "text-[#1F2A22]/80" : "text-[#cdd3cb]"
                  }`}
                >
                  {plan.price.split(" ").slice(1).join(" ")}
                </span>
                <span
                  className={`mt-2 text-[12px] font-light leading-[1.35] ${
                    plan.highlight ? "text-[#1F2A22]/90" : "text-[#cdd3cb]"
                  }`}
                >
                  {plan.descriptor}
                </span>
                <button
                  onClick={() => fd.onCta(`pricing-${plan.name.toLowerCase()}`)}
                  className={`mt-4 w-full px-3 py-2.5 text-[13px] font-medium transition-colors ${
                    plan.highlight
                      ? "bg-[#1F2A22] text-[#EFE9DC] hover:bg-[#14201a]"
                      : "border border-[#EFE9DC]/30 text-[#EFE9DC] hover:bg-[#EFE9DC]/10"
                  }`}
                >
                  {plan.ctaLabel}
                </button>
              </div>
            ))}
          </div>

          {/* Included feature grid */}
          <div className="grid grid-cols-3 border-t border-[#EFE9DC]/15">
            {pricing.included.map((feature, i) => (
              <div
                key={i}
                className={`px-3 py-3.5 ${
                  (i + 1) % 3 !== 0 ? "border-r border-[#EFE9DC]/15" : ""
                } ${i < pricing.included.length - 3 ? "border-b border-[#EFE9DC]/15" : ""}`}
              >
                <span className="font-[family-name:var(--font-mono)] text-[8px] text-[#B5754E]">
                  +
                </span>
                <p className="mt-1 text-[11.5px] font-light leading-[1.25] text-[#e3e6df]">
                  {feature}
                </p>
              </div>
            ))}
          </div>

          <p className="border-t border-[#EFE9DC]/15 px-4 py-3.5 font-[family-name:var(--font-mono)] text-[9.5px] uppercase tracking-[0.14em] text-[#cdd3cb]">
            {pricing.scarcityLine}
          </p>
        </section>

        {/* ───────── TESTIMONIALS ───────── */}
        <section className="border-b border-[#1F2A22]/25">
          <div className="flex items-center justify-between px-4 py-4">
            <span className={label}>D · From those who started</span>
            <span className="font-[family-name:var(--font-mono)] text-[9.5px] text-[#8a6f54]">
              {testimonials.length} voices
            </span>
          </div>
          <div className="grid grid-cols-1 border-t border-[#1F2A22]/25">
            {testimonials.map((t, i) => (
              <figure
                key={i}
                className="border-b border-[#1F2A22]/25 px-4 py-5 last:border-b-0"
              >
                <blockquote className="text-[16px] font-light italic leading-[1.4]">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-3 flex items-center gap-2">
                  <span className="block h-1.5 w-1.5 bg-[#B5754E]" aria-hidden />
                  <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.16em] text-[#6a7a6f]">
                    {t.name} · {t.age}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ───────── FAQ ───────── */}
        <section className="border-b border-[#1F2A22]/25">
          <div className="flex items-center justify-between px-4 py-4">
            <span className={label}>E · Questions</span>
            <span className="font-[family-name:var(--font-mono)] text-[9.5px] text-[#8a6f54]">
              {faq.length} entries
            </span>
          </div>
          <div className="border-t border-[#1F2A22]/25">
            {faq.map((item, i) => (
              <details
                key={i}
                className="group border-b border-[#1F2A22]/25 last:border-b-0"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-3 px-4 py-4">
                  <span className="flex items-start gap-2.5">
                    <span className="font-[family-name:var(--font-mono)] pt-1 text-[9.5px] text-[#8a6f54]">
                      Q{i + 1}
                    </span>
                    <span className="text-[15.5px] font-medium leading-[1.3]">
                      {item.q}
                    </span>
                  </span>
                  <span className="mt-0.5 select-none font-[family-name:var(--font-mono)] text-[18px] leading-none text-[#B5754E] transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="px-4 pb-5 pl-[2.6rem] text-[13.5px] font-light leading-[1.55] text-[#33433a]">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* ───────── FINAL CTA ───────── */}
        <section className="grid grid-cols-1 border-b border-[#1F2A22]/25 bg-[#B5754E] text-[#1F2A22]">
          <div className="px-4 py-8">
            <span className="font-[family-name:var(--font-mono)] text-[9.5px] uppercase tracking-[0.22em] text-[#1F2A22]/70">
              F · One last thing
            </span>
            <h2 className="mt-3 text-[28px] font-medium leading-[1.05] tracking-[-0.01em]">
              {content.finalCta.headline}
            </h2>
          </div>
          <button
            onClick={() => fd.onCta("final")}
            className="group flex items-center justify-between gap-3 border-t border-[#1F2A22]/25 bg-[#1F2A22] px-4 py-5 text-left text-[15px] font-medium text-[#EFE9DC] transition-colors hover:bg-[#14201a]"
          >
            {content.finalCta.ctaLabel}
            <span className="font-[family-name:var(--font-mono)] text-lg transition-transform group-hover:translate-x-1">
              →
            </span>
          </button>
        </section>

        {/* ───────── FAKE-DOOR ───────── */}
        {fd.showWaitlist && (
          <section
            id="waitlist"
            className={`${tileBorder} mx-4 mt-8 bg-[#E6DFCF]`}
          >
            {fd.state === "done" ? (
              <div className="px-5 py-9 text-center">
                <span className="font-[family-name:var(--font-mono)] text-[9.5px] uppercase tracking-[0.22em] text-[#8a6f54]">
                  Confirmed
                </span>
                <h2 className="mt-3 text-[24px] font-medium leading-tight">
                  {content.confirmation.title}
                </h2>
                <p className="mt-3 text-[14px] font-light leading-[1.55] text-[#33433a]">
                  {content.confirmation.body}
                </p>
              </div>
            ) : (
              <div className="px-5 py-7">
                <span className="font-[family-name:var(--font-mono)] text-[9.5px] uppercase tracking-[0.22em] text-[#8a6f54]">
                  Waitlist
                </span>
                <h2 className="mt-2 text-[26px] font-medium italic leading-[1.05]">
                  {fakedoor.title}
                </h2>
                <p className="mt-3 text-[14px] font-light leading-[1.55] text-[#33433a]">
                  {fakedoor.body}
                </p>
                <form onSubmit={fd.submit} className="mt-5 flex flex-col gap-2.5">
                  <input
                    type="email"
                    required
                    value={fd.email}
                    onChange={(e) => fd.setEmail(e.target.value)}
                    placeholder={fakedoor.emailPlaceholder}
                    className="w-full border border-[#1F2A22]/25 bg-[#EFE9DC] px-4 py-3 text-[15px] text-[#1F2A22] placeholder:text-[#9c8a6d] focus:border-[#1F2A22] focus:outline-none"
                  />
                  <button
                    type="submit"
                    disabled={fd.state === "loading"}
                    className="w-full bg-[#1F2A22] px-5 py-3 text-[15px] font-medium text-[#EFE9DC] transition-colors hover:bg-[#14201a] disabled:opacity-60"
                  >
                    {fd.state === "loading" ? "..." : fakedoor.submitLabel}
                  </button>
                  {fd.state === "error" && (
                    <p className="font-[family-name:var(--font-mono)] text-[12px] text-[#B5754E]">
                      Something went wrong. Try again.
                    </p>
                  )}
                </form>
                <p className="mt-4 text-center font-[family-name:var(--font-mono)] text-[9.5px] uppercase tracking-[0.14em] text-[#6a7a6f]">
                  {fakedoor.privacyLine}
                </p>
              </div>
            )}
          </section>
        )}

        {/* ───────── FOOTER ───────── */}
        <footer className="mt-8 border-t border-[#1F2A22]/25 px-4 py-7">
          <p className="text-[15px] font-light italic leading-[1.4]">
            {footer.lines[0]}
          </p>
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5">
            {footer.lines.slice(1).map((line, i) => (
              <span
                key={i}
                className="font-[family-name:var(--font-mono)] text-[9.5px] uppercase tracking-[0.18em] text-[#8a6f54]"
              >
                {line}
              </span>
            ))}
          </div>
        </footer>
      </div>

      {/* Sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 mx-auto max-w-md border-t border-[#1F2A22]/25 bg-[#EFE9DC]/90 backdrop-blur-md">
        <button
          onClick={() => fd.onCta("sticky")}
          className="flex w-full items-center justify-between gap-2 bg-[#1F2A22] px-4 py-4 text-[15px] font-medium text-[#EFE9DC]"
        >
          {hero.ctaLabel}
          <span className="font-[family-name:var(--font-mono)] text-base">→</span>
        </button>
      </div>
    </main>
  );
}
