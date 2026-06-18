"use client";

import Image from "next/image";
import { Cormorant_Garamond, Spectral } from "next/font/google";
import type { DesignProps } from "@/designs/types";
import { useFakeDoor } from "@/designs/shared/useFakeDoor";

// ─── "Archival twilight" ────────────────────────────────────────────────────
// A private vault-ledger at dusk. Deep ink-blue near-black, warm parchment
// text, brass-gold accent. High-contrast classical display serif (Cormorant
// Garamond) paired with a refined transitional body serif (Spectral). The hero
// photo runs full-bleed under a midnight wash with a hairline brass frame.
// Quiet, dignified, ceremonial — the opposite of clinical.
const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const body = Spectral({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const INK = "#0B1119";
const PARCHMENT = "#E9E0CC";
const BRASS = "#C2A15B";
const MUTED = "#8C8473";

export default function ArchivalTwilightDesign({ content, slug }: DesignProps) {
  const fd = useFakeDoor(slug);
  const { hero, problem, solution, pricing, testimonials, faq, fakedoor, footer } =
    content;
  const featured = pricing.plans.find((p) => p.highlight) ?? pricing.plans[0];

  return (
    <main
      className={`${display.variable} ${body.variable} relative min-h-screen overflow-hidden bg-[#0B1119] text-[#E9E0CC] antialiased selection:bg-[#C2A15B] selection:text-[#0B1119]`}
      style={{ fontFamily: "var(--font-body), ui-serif, Georgia, serif" }}
    >
      {/* Atmospheric base: vertical dusk gradient + brass vignette glow */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(120% 60% at 50% -5%, rgba(194,161,91,0.16), transparent 55%), radial-gradient(90% 50% at 50% 105%, rgba(34,46,66,0.7), transparent 60%), linear-gradient(180deg, #0B1119 0%, #0D1420 50%, #090E16 100%)",
        }}
      />
      {/* Grain */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.05] mix-blend-soft-light"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative z-10 mx-auto max-w-md px-6 pb-36">
        {/* ───────── HERO ───────── */}
        <header className="-mx-6">
          {/* Masthead */}
          <div className="px-6 pt-7">
            <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.34em] text-[#C2A15B]">
              <span className="font-[family-name:var(--font-display)] text-[15px] tracking-[0.12em]">
                You Alive
              </span>
              <span className="text-[#8C8473]">est. for the day it matters</span>
            </div>
            <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-[#C2A15B]/45 to-transparent" />
          </div>

          {/* Framed full-bleed photo with midnight wash (no duplicate headline) */}
          <div className="relative mt-6 px-6">
            <div className="relative h-[62vh] min-h-[440px] w-full overflow-hidden rounded-[2px] ring-1 ring-[#C2A15B]/30">
              <Image
                src="/designs/a/hero.jpeg"
                alt=""
                fill
                priority
                sizes="(max-width: 768px) 100vw, 450px"
                className="object-cover"
                style={{ filter: "saturate(0.7) contrast(1.04) brightness(0.82)" }}
              />
              {/* duotone-ish midnight wash */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(11,17,25,0.55) 0%, rgba(11,17,25,0.15) 35%, rgba(11,17,25,0.92) 100%)",
                  mixBlendMode: "multiply",
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(70% 50% at 50% 30%, rgba(194,161,91,0.10), transparent 70%)",
                }}
              />
              {/* corner ticks */}
              <span className="absolute left-3 top-3 h-4 w-4 border-l border-t border-[#C2A15B]/70" />
              <span className="absolute right-3 top-3 h-4 w-4 border-r border-t border-[#C2A15B]/70" />
              <span className="absolute bottom-3 left-3 h-4 w-4 border-b border-l border-[#C2A15B]/70" />
              <span className="absolute bottom-3 right-3 h-4 w-4 border-b border-r border-[#C2A15B]/70" />
            </div>
          </div>

          {/* Title + subtitle + CTA */}
          <section className="px-6 pt-10">
            <h1 className="font-[family-name:var(--font-display)] text-[46px] font-light leading-[0.96] tracking-[-0.01em] text-[#E9E0CC]">
              {hero.title.split(" ").slice(0, -2).join(" ")}{" "}
              <span className="italic text-[#C2A15B]">
                {hero.title.split(" ").slice(-2).join(" ")}
              </span>
            </h1>

            <p className="mt-6 text-[16.5px] font-light leading-[1.6] text-[#cfc6b2]">
              {hero.subtitle}
            </p>

            <button
              onClick={() => fd.onCta("hero")}
              className="group mt-8 inline-flex w-full items-center justify-between gap-3 rounded-[2px] bg-[#C2A15B] px-7 py-4 text-[14px] uppercase tracking-[0.18em] text-[#0B1119] transition-all duration-300 hover:bg-[#d4b46c] hover:shadow-[0_18px_50px_-20px_rgba(194,161,91,0.6)]"
            >
              <span className="font-medium">{hero.ctaLabel}</span>
              <span className="text-lg transition-transform group-hover:translate-x-1">
                &rarr;
              </span>
            </button>

            <p className="mt-5 flex items-center gap-3 text-[12.5px] tracking-wide text-[#8C8473]">
              <span className="inline-block h-px w-7 bg-[#C2A15B]/60" />
              {hero.reassuranceLine}
            </p>
          </section>
        </header>

        {/* ───────── PROBLEM ───────── */}
        <section className="mt-28">
          <p className="mb-6 text-[10px] uppercase tracking-[0.36em] text-[#C2A15B]">
            i · the silence after
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-[32px] font-light leading-[1.08] tracking-[-0.01em] text-[#E9E0CC]">
            {problem.title}
          </h2>
          <p className="mt-6 text-[15.5px] font-light leading-[1.65] text-[#b7af9c]">
            {problem.body}
          </p>
        </section>

        {/* ───────── SOLUTION ───────── */}
        <section className="mt-28">
          <div className="flex items-baseline justify-between">
            <p className="text-[10px] uppercase tracking-[0.36em] text-[#C2A15B]">
              ii · the method
            </p>
            <p className="font-[family-name:var(--font-display)] text-[14px] italic text-[#8C8473]">
              three safeguards
            </p>
          </div>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-[32px] font-light leading-[1.05] text-[#E9E0CC]">
            {solution.intro}
          </h2>

          <ol className="mt-10 space-y-px">
            {solution.steps.map((s, i) => (
              <li
                key={i}
                className="border-t border-[#C2A15B]/20 py-7 first:border-t-[#C2A15B]/40"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-[family-name:var(--font-display)] text-[28px] font-light leading-none text-[#C2A15B]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-[family-name:var(--font-display)] text-[21px] font-medium leading-[1.18] text-[#E9E0CC]">
                    {s.title}
                  </h3>
                </div>
                <p className="mt-3 pl-[3.1rem] text-[14.5px] font-light leading-[1.6] text-[#b7af9c]">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* ───────── PRICING ───────── */}
        <section ref={fd.pricingRef} className="mt-28">
          <p className="text-[10px] uppercase tracking-[0.36em] text-[#C2A15B]">
            iii · membership
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-[32px] font-light leading-[1.06] text-[#E9E0CC]">
            {pricing.title}
          </h2>
          <p className="mt-4 text-[14.5px] font-light leading-[1.6] text-[#b7af9c]">
            {pricing.subtitle}
          </p>

          {/* Plans */}
          <div className="mt-8 space-y-4">
            {pricing.plans.map((plan, i) => {
              const hl = !!plan.highlight;
              return (
                <div
                  key={i}
                  className={
                    hl
                      ? "relative overflow-hidden rounded-[3px] border border-[#C2A15B] bg-[#C2A15B]/[0.07] px-6 py-6"
                      : "rounded-[3px] border border-[#C2A15B]/25 bg-white/[0.02] px-6 py-6"
                  }
                >
                  {hl && (
                    <span className="absolute right-0 top-0 rounded-bl-[3px] bg-[#C2A15B] px-3 py-1 text-[9px] uppercase tracking-[0.22em] text-[#0B1119]">
                      Recommended
                    </span>
                  )}
                  <div className="flex items-baseline justify-between">
                    <span className="font-[family-name:var(--font-display)] text-[22px] text-[#E9E0CC]">
                      {plan.name}
                    </span>
                    <span className="font-[family-name:var(--font-display)] text-[26px] font-light text-[#C2A15B]">
                      {plan.price}
                    </span>
                  </div>
                  <p className="mt-1 text-[12.5px] tracking-wide text-[#8C8473]">
                    {plan.descriptor}
                  </p>
                  <button
                    onClick={() => fd.onCta(hl ? "pricing" : "pricing-monthly")}
                    className={
                      hl
                        ? "mt-5 w-full rounded-[2px] bg-[#C2A15B] px-6 py-3.5 text-[13px] uppercase tracking-[0.18em] font-medium text-[#0B1119] transition hover:bg-[#d4b46c]"
                        : "mt-5 w-full rounded-[2px] border border-[#C2A15B]/50 px-6 py-3.5 text-[13px] uppercase tracking-[0.18em] text-[#E9E0CC] transition hover:border-[#C2A15B] hover:text-[#C2A15B]"
                    }
                  >
                    {plan.ctaLabel}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Included ledger */}
          <div className="mt-8 rounded-[3px] border border-[#C2A15B]/20 px-6 py-6">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#8C8473]">
              Every plan includes
            </p>
            <ul className="mt-4 grid grid-cols-1 gap-y-2.5">
              {pricing.included.map((f, i) => (
                <li
                  key={i}
                  className="flex items-baseline gap-3 text-[14px] font-light text-[#cfc6b2]"
                >
                  <span className="text-[#C2A15B]">&middot;</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-6 text-center text-[12.5px] italic font-light text-[#8C8473]">
            {pricing.scarcityLine}
          </p>
          <p className="sr-only">{featured.name}</p>
        </section>

        {/* ───────── TESTIMONIALS ───────── */}
        <section className="mt-28">
          <p className="mb-7 text-[10px] uppercase tracking-[0.36em] text-[#C2A15B]">
            iv · in their words
          </p>
          <div className="space-y-10">
            {testimonials.map((t, i) => (
              <figure key={i} className="border-l border-[#C2A15B]/40 pl-5">
                <blockquote className="font-[family-name:var(--font-display)] text-[20px] font-light italic leading-[1.4] text-[#E9E0CC]">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-3 text-[11px] uppercase tracking-[0.22em] text-[#8C8473]">
                  {t.name} &middot; {t.age}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ───────── FAQ ───────── */}
        <section className="mt-28">
          <p className="mb-5 text-[10px] uppercase tracking-[0.36em] text-[#C2A15B]">
            v · what people ask
          </p>
          <div className="divide-y divide-[#C2A15B]/20 border-t border-[#C2A15B]/20">
            {faq.map((item, i) => (
              <details key={i} className="group py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                  <span className="font-[family-name:var(--font-display)] text-[18px] font-medium leading-[1.25] text-[#E9E0CC]">
                    {item.q}
                  </span>
                  <span className="mt-1 select-none text-[20px] leading-none text-[#C2A15B] transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-[14px] font-light leading-[1.6] text-[#b7af9c]">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* ───────── FINAL CTA ───────── */}
        <section className="mt-28 text-center">
          <div className="mx-auto mb-7 h-px w-16 bg-gradient-to-r from-transparent via-[#C2A15B] to-transparent" />
          <h2 className="font-[family-name:var(--font-display)] text-[38px] font-light leading-[1.05] text-[#E9E0CC]">
            {content.finalCta.headline}
          </h2>
          <button
            onClick={() => fd.onCta("final")}
            className="group mt-8 inline-flex items-center justify-center gap-3 rounded-[2px] bg-[#C2A15B] px-10 py-4 text-[14px] uppercase tracking-[0.18em] font-medium text-[#0B1119] transition hover:bg-[#d4b46c]"
          >
            {content.finalCta.ctaLabel}
            <span className="transition-transform group-hover:translate-x-1">
              &rarr;
            </span>
          </button>
        </section>

        {/* ───────── FAKE-DOOR ───────── */}
        {fd.showWaitlist && (
          <section
            id="waitlist"
            className="mt-24 overflow-hidden rounded-[3px] border border-[#C2A15B]/40 bg-white/[0.025] px-7 py-9"
          >
            {fd.state === "done" ? (
              <div className="text-center">
                <p className="font-[family-name:var(--font-display)] text-[28px] font-light italic text-[#C2A15B]">
                  {content.confirmation.title}
                </p>
                <p className="mt-4 text-[15px] font-light leading-[1.6] text-[#cfc6b2]">
                  {content.confirmation.body}
                </p>
              </div>
            ) : (
              <>
                <p className="font-[family-name:var(--font-display)] text-[30px] font-light italic leading-[1.05] text-[#E9E0CC]">
                  {fakedoor.title}
                </p>
                <p className="mt-3 text-[14.5px] font-light leading-[1.6] text-[#b7af9c]">
                  {fakedoor.body}
                </p>
                <form onSubmit={fd.submit} className="mt-6 flex flex-col gap-3">
                  <input
                    type="email"
                    required
                    value={fd.email}
                    onChange={(e) => fd.setEmail(e.target.value)}
                    placeholder={fakedoor.emailPlaceholder}
                    className="w-full rounded-[2px] border border-[#C2A15B]/35 bg-[#0B1119] px-5 py-3.5 text-[15px] text-[#E9E0CC] placeholder:text-[#8C8473] focus:border-[#C2A15B] focus:outline-none"
                  />
                  <button
                    type="submit"
                    disabled={fd.state === "loading"}
                    className="w-full rounded-[2px] bg-[#C2A15B] px-6 py-3.5 text-[14px] uppercase tracking-[0.18em] font-medium text-[#0B1119] transition hover:bg-[#d4b46c] disabled:opacity-60"
                  >
                    {fd.state === "loading" ? "..." : fakedoor.submitLabel}
                  </button>
                  {fd.state === "error" && (
                    <p className="text-[13px] italic text-[#d4b46c]">
                      Something went wrong. Try again.
                    </p>
                  )}
                </form>
                <p className="mt-4 text-center text-[12px] text-[#8C8473]">
                  {fakedoor.privacyLine}
                </p>
              </>
            )}
          </section>
        )}

        {/* ───────── FOOTER ───────── */}
        <footer className="mt-24 border-t border-[#C2A15B]/20 pt-8 text-center">
          <p className="font-[family-name:var(--font-display)] text-[16px] italic font-light text-[#cfc6b2]">
            {footer.lines[0]}
          </p>
          <p className="mt-3 text-[10px] uppercase tracking-[0.28em] text-[#8C8473]">
            {footer.lines.slice(1).join("  ·  ")}
          </p>
        </footer>
      </div>

      {/* Sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#C2A15B]/25 bg-[#0B1119]/90 px-6 py-3 backdrop-blur-md">
        <button
          onClick={() => fd.onCta("sticky")}
          className="mx-auto flex w-full max-w-md items-center justify-center gap-2 rounded-[2px] bg-[#C2A15B] px-6 py-3.5 text-[13px] uppercase tracking-[0.18em] font-medium text-[#0B1119]"
        >
          {hero.ctaLabel}
          <span>&rarr;</span>
        </button>
      </div>
    </main>
  );
}
