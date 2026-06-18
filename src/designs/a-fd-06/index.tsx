"use client";

import Image from "next/image";
import { Spectral, JetBrains_Mono } from "next/font/google";
import type { DesignProps } from "@/designs/types";
import { useFakeDoor } from "@/designs/shared/useFakeDoor";

// Direction: "Sealed Registry" — a cold, archival safe-deposit dossier. Bone
// paper, deep slate-ink, a single oxidized-brass accent. Engraved hairline
// rules, ledger numerals, monospace custody metadata. The product reads as a
// legal instrument held in custody and released only on verification — precise,
// quiet, institutional. Opposite of warm/editorial.
const spectral = Spectral({
  subsets: ["latin"],
  variable: "--font-spectral",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-reg",
  weight: ["400", "500"],
  display: "swap",
});

export default function SealedRegistryDesign({ content, slug }: DesignProps) {
  const fd = useFakeDoor(slug);
  const { hero, problem, solution, pricing, testimonials, faq, fakedoor, footer } = content;
  const highlightPlan = pricing.plans.find((p) => p.highlight);

  const INK = "#1B2430";
  const PAPER = "#E8E3D7";
  const BRASS = "#9A6B3B";

  return (
    <main
      className={`${spectral.variable} ${mono.variable} relative min-h-screen overflow-hidden bg-[#E8E3D7] text-[#1B2430] selection:bg-[#1B2430] selection:text-[#E8E3D7]`}
      style={{ fontFamily: "var(--font-mono-reg), ui-monospace, monospace" }}
    >
      {/* Paper grain + faint ledger ruling */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.05] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative mx-auto max-w-md">
        {/* ───────── REGISTRY HEADER STRIP ───────── */}
        <div className="flex items-center justify-between border-b border-[#1B2430]/30 px-5 py-2.5 text-[9px] uppercase tracking-[0.25em] text-[#1B2430]/70">
          <span className="font-[family-name:var(--font-mono-reg)]">REG. NO · YA-0024</span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#9A6B3B]" />
            HELD IN CUSTODY
          </span>
        </div>

        {/* ───────── HERO ───────── */}
        <header className="px-5 pt-8">
          <div className="flex items-baseline justify-between border-b border-[#1B2430]/20 pb-2 text-[9px] uppercase tracking-[0.28em] text-[#1B2430]/60">
            <span className="font-[family-name:var(--font-spectral)] text-[13px] tracking-[0.04em] text-[#1B2430]">
              You Alive
            </span>
            <span className="font-[family-name:var(--font-mono-reg)]">FILE / SEALED</span>
          </div>

          <h1
            className="mt-7 text-balance font-[family-name:var(--font-spectral)] text-[40px] font-light leading-[1.0] tracking-[-0.01em] text-[#1B2430]"
          >
            {hero.title}
          </h1>

          <p className="mt-6 max-w-[40ch] text-[14.5px] leading-[1.6] text-[#3a4150]">
            {hero.subtitle}
          </p>

          {/* Hero document plate */}
          <figure className="mt-8 -mx-5">
            <div className="relative h-[340px] w-full overflow-hidden border-y border-[#1B2430]/25">
              <Image
                src="/designs/a/hero.jpeg"
                alt=""
                fill
                priority
                sizes="(max-width: 768px) 100vw, 450px"
                className="object-cover grayscale-[0.35] contrast-[1.05]"
                style={{ filter: "sepia(0.18)" }}
              />
              <div className="absolute inset-0 bg-[#1B2430]/20 mix-blend-multiply" />
              {/* corner registration marks */}
              <span aria-hidden className="absolute left-3 top-3 h-4 w-4 border-l border-t border-[#E8E3D7]/80" />
              <span aria-hidden className="absolute right-3 top-3 h-4 w-4 border-r border-t border-[#E8E3D7]/80" />
              <span aria-hidden className="absolute bottom-3 left-3 h-4 w-4 border-b border-l border-[#E8E3D7]/80" />
              <span aria-hidden className="absolute bottom-3 right-3 h-4 w-4 border-b border-r border-[#E8E3D7]/80" />
              <figcaption className="absolute bottom-3 left-1/2 -translate-x-1/2 font-[family-name:var(--font-mono-reg)] text-[8px] uppercase tracking-[0.3em] text-[#E8E3D7]/90">
                EXHIBIT A · ENCRYPTED
              </figcaption>
            </div>
          </figure>

          <button
            onClick={() => fd.onCta("hero")}
            className="group mt-8 flex w-full items-center justify-between border border-[#1B2430] bg-[#1B2430] px-6 py-4 text-[13px] uppercase tracking-[0.18em] text-[#E8E3D7] transition-colors duration-300 hover:bg-[#9A6B3B] hover:border-[#9A6B3B]"
          >
            <span className="font-[family-name:var(--font-mono-reg)]">{hero.ctaLabel}</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>

          <p className="mt-4 flex items-center gap-2 text-[11px] tracking-wide text-[#5a6172]">
            <span aria-hidden className="inline-block h-[1px] w-5 bg-[#9A6B3B]" />
            {hero.reassuranceLine}
          </p>
        </header>

        {/* ───────── PROBLEM ───────── */}
        <section className="mt-20 px-5">
          <p className="font-[family-name:var(--font-mono-reg)] text-[9px] uppercase tracking-[0.3em] text-[#9A6B3B]">
            § 01 — THE PROBLEM
          </p>
          <h2 className="mt-4 text-balance font-[family-name:var(--font-spectral)] text-[26px] font-light leading-[1.12] tracking-[-0.01em] text-[#1B2430]">
            {problem.title}
          </h2>
          <p className="mt-5 text-[14px] leading-[1.65] text-[#3a4150]">
            {problem.body}
          </p>
        </section>

        {/* ───────── SOLUTION ───────── */}
        <section className="mt-20 px-5">
          <p className="font-[family-name:var(--font-mono-reg)] text-[9px] uppercase tracking-[0.3em] text-[#9A6B3B]">
            § 02 — PROCEDURE
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-spectral)] text-[26px] font-light italic leading-[1.1] text-[#1B2430]">
            {solution.intro}
          </h2>

          <ol className="mt-9 border-t border-[#1B2430]/20">
            {solution.steps.map((s, i) => (
              <li
                key={i}
                className="grid grid-cols-[auto_1fr] gap-x-4 border-b border-[#1B2430]/20 py-6"
              >
                <span
                  className="font-[family-name:var(--font-spectral)] text-[34px] font-light leading-none text-[#9A6B3B]"
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-[family-name:var(--font-spectral)] text-[18px] font-normal leading-[1.25] text-[#1B2430]">
                    {s.title}
                  </h3>
                  <p className="mt-2.5 text-[13.5px] leading-[1.6] text-[#3a4150]">
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* ───────── PRICING ───────── */}
        <section ref={fd.pricingRef} className="mt-20 px-5">
          <p className="font-[family-name:var(--font-mono-reg)] text-[9px] uppercase tracking-[0.3em] text-[#9A6B3B]">
            § 03 — TERMS OF CUSTODY
          </p>
          <h2 className="mt-4 text-balance font-[family-name:var(--font-spectral)] text-[26px] font-light leading-[1.12] text-[#1B2430]">
            {pricing.title}
          </h2>
          <p className="mt-4 text-[13.5px] leading-[1.6] text-[#3a4150]">
            {pricing.subtitle}
          </p>

          {/* Plans */}
          <div className="mt-8 space-y-px bg-[#1B2430]/20">
            {pricing.plans.map((plan, i) => {
              const isHi = !!plan.highlight;
              return (
                <div
                  key={i}
                  className={
                    isHi
                      ? "relative bg-[#1B2430] px-5 py-6 text-[#E8E3D7]"
                      : "relative bg-[#E8E3D7] px-5 py-6 text-[#1B2430]"
                  }
                >
                  <div className="flex items-baseline justify-between">
                    <span className="font-[family-name:var(--font-mono-reg)] text-[10px] uppercase tracking-[0.28em] opacity-70">
                      {plan.name}
                    </span>
                    {isHi && (
                      <span className="font-[family-name:var(--font-mono-reg)] text-[8px] uppercase tracking-[0.24em] text-[#E8E3D7] bg-[#9A6B3B] px-2 py-0.5">
                        RECOMMENDED
                      </span>
                    )}
                  </div>
                  <p className="mt-2 font-[family-name:var(--font-spectral)] text-[32px] font-light leading-none">
                    {plan.price}
                  </p>
                  <p className={`mt-2 text-[11.5px] ${isHi ? "text-[#c7b48f]" : "text-[#5a6172]"}`}>
                    {plan.descriptor}
                  </p>
                  <button
                    onClick={() => fd.onCta(isHi ? "pricing" : "pricing-alt")}
                    className={
                      isHi
                        ? "group mt-5 flex w-full items-center justify-between border border-[#E8E3D7] bg-[#E8E3D7] px-5 py-3.5 text-[12px] uppercase tracking-[0.18em] text-[#1B2430] transition-colors hover:bg-[#9A6B3B] hover:border-[#9A6B3B] hover:text-[#E8E3D7]"
                        : "group mt-5 flex w-full items-center justify-between border border-[#1B2430] px-5 py-3.5 text-[12px] uppercase tracking-[0.18em] text-[#1B2430] transition-colors hover:bg-[#1B2430] hover:text-[#E8E3D7]"
                    }
                  >
                    <span className="font-[family-name:var(--font-mono-reg)]">{plan.ctaLabel}</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Included manifest */}
          <div className="mt-8 border border-[#1B2430]/30">
            <p className="border-b border-[#1B2430]/30 px-4 py-2.5 font-[family-name:var(--font-mono-reg)] text-[9px] uppercase tracking-[0.28em] text-[#1B2430]/70">
              MANIFEST · WHAT IS DEPOSITED
            </p>
            <ul className="grid grid-cols-1 divide-y divide-[#1B2430]/15">
              {pricing.included.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 px-4 py-2.5 text-[12.5px] text-[#3a4150]"
                >
                  <span className="font-[family-name:var(--font-mono-reg)] text-[9px] text-[#9A6B3B]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-5 text-center text-[11px] leading-[1.5] text-[#5a6172]">
            {pricing.scarcityLine}
          </p>
        </section>

        {/* ───────── TESTIMONIALS ───────── */}
        <section className="mt-20 px-5">
          <p className="font-[family-name:var(--font-mono-reg)] text-[9px] uppercase tracking-[0.3em] text-[#9A6B3B]">
            § 04 — DEPOSITIONS
          </p>
          <div className="mt-7 space-y-px bg-[#1B2430]/20">
            {testimonials.map((t, i) => (
              <figure key={i} className="bg-[#E8E3D7] px-5 py-6">
                <blockquote className="font-[family-name:var(--font-spectral)] text-[17px] font-light italic leading-[1.4] text-[#1B2430]">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 flex items-center gap-2 font-[family-name:var(--font-mono-reg)] text-[9px] uppercase tracking-[0.24em] text-[#5a6172]">
                  <span aria-hidden className="inline-block h-[1px] w-4 bg-[#9A6B3B]" />
                  {t.name} · AGE {t.age}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ───────── FAQ ───────── */}
        <section className="mt-20 px-5">
          <p className="font-[family-name:var(--font-mono-reg)] text-[9px] uppercase tracking-[0.3em] text-[#9A6B3B]">
            § 05 — POINTS OF ORDER
          </p>
          <div className="mt-6 border-t border-[#1B2430]/25">
            {faq.map((item, i) => (
              <details key={i} className="group border-b border-[#1B2430]/25 py-4">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                  <span className="font-[family-name:var(--font-spectral)] text-[16px] font-normal leading-[1.3] text-[#1B2430]">
                    {item.q}
                  </span>
                  <span className="mt-0.5 select-none font-[family-name:var(--font-mono-reg)] text-[16px] leading-none text-[#9A6B3B] transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-[40ch] text-[13px] leading-[1.6] text-[#3a4150]">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* ───────── FINAL CTA ───────── */}
        <section className="mt-20 mx-5 border border-[#1B2430] bg-[#1B2430] px-6 py-12 text-center text-[#E8E3D7]">
          <p className="font-[family-name:var(--font-mono-reg)] text-[9px] uppercase tracking-[0.3em] text-[#c7b48f]">
            SEAL & FILE
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-spectral)] text-[28px] font-light leading-[1.1] text-[#E8E3D7]">
            {content.finalCta.headline}
          </h2>
          <button
            onClick={() => fd.onCta("final")}
            className="group mt-7 inline-flex w-full items-center justify-between border border-[#E8E3D7] bg-[#E8E3D7] px-6 py-4 text-[13px] uppercase tracking-[0.18em] text-[#1B2430] transition-colors hover:bg-[#9A6B3B] hover:border-[#9A6B3B] hover:text-[#E8E3D7]"
          >
            <span className="font-[family-name:var(--font-mono-reg)]">{content.finalCta.ctaLabel}</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
          {highlightPlan && (
            <p className="mt-4 font-[family-name:var(--font-mono-reg)] text-[10px] uppercase tracking-[0.2em] text-[#c7b48f]">
              {highlightPlan.price} · {highlightPlan.descriptor}
            </p>
          )}
        </section>

        {/* ───────── FAKE-DOOR ───────── */}
        {fd.showWaitlist && (
          <section id="waitlist" className="mt-20 mx-5 border border-[#1B2430]/40 bg-[#DED7C7] px-6 py-10">
            {fd.state === "done" ? (
              <div className="text-center">
                <p className="font-[family-name:var(--font-mono-reg)] text-[9px] uppercase tracking-[0.3em] text-[#9A6B3B]">
                  ENTRY RECORDED
                </p>
                <p className="mt-4 font-[family-name:var(--font-spectral)] text-[24px] font-light leading-tight text-[#1B2430]">
                  {content.confirmation.title}
                </p>
                <p className="mt-3 text-[13.5px] leading-[1.6] text-[#3a4150]">
                  {content.confirmation.body}
                </p>
              </div>
            ) : (
              <>
                <p className="font-[family-name:var(--font-mono-reg)] text-[9px] uppercase tracking-[0.3em] text-[#9A6B3B]">
                  WAITLIST REGISTER
                </p>
                <p className="mt-4 font-[family-name:var(--font-spectral)] text-[26px] font-light italic leading-[1.1] text-[#1B2430]">
                  {fakedoor.title}
                </p>
                <p className="mt-3 text-[13.5px] leading-[1.6] text-[#3a4150]">
                  {fakedoor.body}
                </p>
                <form onSubmit={fd.submit} className="mt-6 flex flex-col gap-3">
                  <input
                    type="email"
                    required
                    value={fd.email}
                    onChange={(e) => fd.setEmail(e.target.value)}
                    placeholder={fakedoor.emailPlaceholder}
                    className="w-full border border-[#1B2430]/40 bg-[#E8E3D7] px-4 py-3.5 font-[family-name:var(--font-mono-reg)] text-[14px] text-[#1B2430] placeholder:text-[#7a8092] focus:border-[#1B2430] focus:outline-none"
                  />
                  <button
                    type="submit"
                    disabled={fd.state === "loading"}
                    className="flex w-full items-center justify-between border border-[#1B2430] bg-[#1B2430] px-6 py-3.5 text-[13px] uppercase tracking-[0.18em] text-[#E8E3D7] transition-colors hover:bg-[#9A6B3B] hover:border-[#9A6B3B] disabled:opacity-60"
                  >
                    <span className="font-[family-name:var(--font-mono-reg)]">
                      {fd.state === "loading" ? "RECORDING…" : fakedoor.submitLabel}
                    </span>
                    <span>→</span>
                  </button>
                  {fd.state === "error" && (
                    <p className="font-[family-name:var(--font-mono-reg)] text-[11px] uppercase tracking-[0.16em] text-[#9A6B3B]">
                      ENTRY FAILED — TRY AGAIN
                    </p>
                  )}
                </form>
                <p className="mt-4 text-center text-[11px] text-[#5a6172]">
                  {fakedoor.privacyLine}
                </p>
              </>
            )}
          </section>
        )}

        {/* ───────── FOOTER ───────── */}
        <footer className="mt-20 border-t border-[#1B2430]/30 px-5 pb-32 pt-8">
          <p className="font-[family-name:var(--font-spectral)] text-[15px] font-light italic text-[#1B2430]">
            {footer.lines[0]}
          </p>
          <p className="mt-4 font-[family-name:var(--font-mono-reg)] text-[9px] uppercase tracking-[0.24em] text-[#5a6172]">
            {footer.lines.slice(1).join("  /  ")}
          </p>
        </footer>
      </div>

      {/* Sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#1B2430]/30 bg-[#E8E3D7]/90 px-5 py-3 backdrop-blur-md">
        <button
          onClick={() => fd.onCta("sticky")}
          className="group mx-auto flex w-full max-w-md items-center justify-between border border-[#1B2430] bg-[#1B2430] px-6 py-3.5 text-[12px] uppercase tracking-[0.18em] text-[#E8E3D7] transition-colors hover:bg-[#9A6B3B] hover:border-[#9A6B3B]"
        >
          <span className="font-[family-name:var(--font-mono-reg)]">{hero.ctaLabel}</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </button>
      </div>
    </main>
  );
}
