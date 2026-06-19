"use client";

import Image from "next/image";
import { Spectral, Archivo } from "next/font/google";
import type { DesignProps } from "@/designs/types";
import { useFakeDoor } from "@/designs/shared/useFakeDoor";

// Direction: SWISS / INTERNATIONAL STYLE. Flat and matte forest, one sharp
// lime accent, a strict hairline grid and small precise type. Zero shadows,
// zero gradients, generous air. Quiet rigor for a grief/legacy product.
// Type: Spectral (a dignified literary serif, real weights) carries the
// editorial voice and numerals; Archivo (a technical grotesque) does the
// gridwork — tracked-out micro-labels, indices and body.
//
// Palette, kept flat: forest #16271F bg, electric lime #C8F169 accent,
// cream #EFEAD8 text-on-dark, muted sage #9DB39A secondary.
const spectral = Spectral({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-spectral",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-archivo",
  display: "swap",
});

// Hairline divider — the structural motif of the whole page (a single sage rule).
const RULE = "border-t border-[#9DB39A]/25";

export default function SwissForestDesign({ content, slug }: DesignProps) {
  const fd = useFakeDoor(slug);
  const { hero, problem, solution, pricing, testimonials, faq, fakedoor, footer } = content;

  return (
    <main
      className={`${spectral.variable} ${archivo.variable} font-[family-name:var(--font-archivo)] min-h-screen bg-[#16271F] text-[#EFEAD8] antialiased selection:bg-[#C8F169] selection:text-[#16271F]`}
    >
      <div className="mx-auto max-w-md">
        {/* ───────── NAV ───────── */}
        <nav className="flex items-center justify-between px-5 py-4">
          <span className="font-[family-name:var(--font-spectral)] text-[15px] italic tracking-tight">
            {hero.brandLockup}
          </span>
          <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-[#9DB39A]">
            <span className="inline-block h-1.5 w-1.5 bg-[#C8F169]" />
            Index / 01
          </span>
        </nav>

        {/* ───────── HERO ───────── */}
        <header className="px-5">
          {/* Photo already carries the "You Alive?" wordmark — no overlay H1. */}
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src="/designs/c/hero.jpeg"
              alt="You Alive?"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 448px"
              className="object-cover"
            />
          </div>

          <div className={`grid grid-cols-[auto_1fr] gap-x-4 ${RULE} pt-5`}>
            <span className="font-[family-name:var(--font-archivo)] text-[11px] tabular-nums text-[#9DB39A]">
              00
            </span>
            <div>
              <h1 className="font-[family-name:var(--font-spectral)] text-[30px] font-light leading-[1.12] tracking-[-0.01em]">
                {hero.title}
              </h1>
              <p className="mt-5 max-w-[34ch] text-[14px] leading-[1.6] text-[#9DB39A]">
                {hero.subtitle}
              </p>

              <button
                onClick={() => fd.onCta("hero")}
                className="mt-7 flex w-full items-center justify-between bg-[#C8F169] px-5 py-3.5 text-[13px] font-medium uppercase tracking-[0.12em] text-[#16271F] transition-colors hover:bg-[#EFEAD8]"
              >
                {hero.ctaLabel}
                <span aria-hidden>→</span>
              </button>

              <p className="mt-4 pb-8 text-[11px] uppercase tracking-[0.16em] text-[#9DB39A]">
                {hero.reassuranceLine}
              </p>
            </div>
          </div>
        </header>

        {/* ───────── PROBLEM ───────── */}
        <section className={`mx-5 ${RULE} py-12`}>
          <p className="mb-7 text-[10px] uppercase tracking-[0.34em] text-[#C8F169]">
            The problem
          </p>
          <h2 className="font-[family-name:var(--font-spectral)] text-[23px] font-light leading-[1.25] tracking-[-0.005em]">
            {problem.title}
          </h2>
          <p className="mt-6 max-w-[40ch] text-[14px] leading-[1.65] text-[#9DB39A]">
            {problem.body}
          </p>
        </section>

        {/* ───────── SOLUTION ───────── */}
        <section className={`mx-5 ${RULE} py-12`}>
          <p className="mb-9 text-[10px] uppercase tracking-[0.34em] text-[#C8F169]">
            {solution.intro}
          </p>
          <ol>
            {solution.steps.map((s, i) => (
              <li
                key={i}
                className={`grid grid-cols-[auto_1fr] gap-x-5 py-7 ${i > 0 ? RULE : ""}`}
              >
                <span className="font-[family-name:var(--font-spectral)] text-[28px] font-light tabular-nums leading-none text-[#C8F169]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-[family-name:var(--font-spectral)] text-[18px] font-normal leading-[1.3] tracking-[-0.005em]">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[13.5px] leading-[1.6] text-[#9DB39A]">
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* ───────── PRICING ───────── */}
        <section ref={fd.pricingRef} className={`mx-5 ${RULE} py-12`}>
          <p className="mb-7 text-[10px] uppercase tracking-[0.34em] text-[#C8F169]">
            Membership
          </p>
          <h2 className="font-[family-name:var(--font-spectral)] text-[23px] font-light leading-[1.25] tracking-[-0.005em]">
            {pricing.title}
          </h2>
          <p className="mt-5 max-w-[40ch] text-[14px] leading-[1.6] text-[#9DB39A]">
            {pricing.subtitle}
          </p>

          {/* Plans — flat panels, lime fill on the highlighted one. */}
          <div className="mt-9 space-y-px">
            {pricing.plans.map((plan, i) => {
              const hi = plan.highlight;
              return (
                <div
                  key={i}
                  className={
                    hi
                      ? "bg-[#C8F169] px-5 py-6 text-[#16271F]"
                      : "border border-[#9DB39A]/30 px-5 py-6 text-[#EFEAD8]"
                  }
                >
                  <div className="flex items-baseline justify-between">
                    <span className="text-[11px] uppercase tracking-[0.22em]">
                      {plan.name}
                    </span>
                    {hi && (
                      <span className="text-[10px] uppercase tracking-[0.2em]">
                        ●
                      </span>
                    )}
                  </div>
                  <p className="mt-3 font-[family-name:var(--font-spectral)] text-[32px] font-light leading-none tabular-nums tracking-tight">
                    {plan.price}
                  </p>
                  <p
                    className={`mt-3 text-[12px] ${
                      hi ? "text-[#16271F]/70" : "text-[#9DB39A]"
                    }`}
                  >
                    {plan.descriptor}
                  </p>
                  <button
                    onClick={() => fd.onCta(`pricing-${plan.name.toLowerCase()}`)}
                    className={
                      hi
                        ? "mt-6 flex w-full items-center justify-between border border-[#16271F] px-4 py-3 text-[12px] font-medium uppercase tracking-[0.12em] transition-colors hover:bg-[#16271F] hover:text-[#C8F169]"
                        : "mt-6 flex w-full items-center justify-between bg-[#EFEAD8] px-4 py-3 text-[12px] font-medium uppercase tracking-[0.12em] text-[#16271F] transition-colors hover:bg-[#C8F169]"
                    }
                  >
                    {plan.ctaLabel}
                    <span aria-hidden>→</span>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Included — strict two-column index grid. */}
          <div className={`mt-9 ${RULE} pt-7`}>
            <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-[#9DB39A]">
              Everything included
            </p>
            <ul className="grid grid-cols-2 gap-x-5 gap-y-3">
              {pricing.included.map((feature, i) => (
                <li
                  key={i}
                  className="grid grid-cols-[auto_1fr] gap-x-2 text-[12.5px] leading-snug"
                >
                  <span className="font-[family-name:var(--font-archivo)] tabular-nums text-[#C8F169]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[#EFEAD8]">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className={`mt-7 ${RULE} pt-5 text-[11px] uppercase leading-[1.6] tracking-[0.12em] text-[#9DB39A]`}>
            {pricing.scarcityLine}
          </p>
        </section>

        {/* ───────── TESTIMONIALS ───────── */}
        <section className={`mx-5 ${RULE} py-12`}>
          <p className="mb-9 text-[10px] uppercase tracking-[0.34em] text-[#C8F169]">
            In their words
          </p>
          <div>
            {testimonials.map((t, i) => (
              <figure
                key={i}
                className={`grid grid-cols-[auto_1fr] gap-x-5 py-7 ${i > 0 ? RULE : ""}`}
              >
                <span className="font-[family-name:var(--font-archivo)] text-[11px] tabular-nums text-[#9DB39A]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <blockquote className="font-[family-name:var(--font-spectral)] text-[17px] font-light italic leading-[1.45] tracking-[-0.005em]">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-4 text-[10px] uppercase tracking-[0.22em] text-[#9DB39A]">
                    {t.name}, {t.age}
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>
        </section>

        {/* ───────── FAQ ───────── */}
        <section className={`mx-5 ${RULE} py-12`}>
          <p className="mb-7 text-[10px] uppercase tracking-[0.34em] text-[#C8F169]">
            Questions
          </p>
          <div>
            {faq.map((item, i) => (
              <details key={i} className={`group py-5 ${i > 0 ? RULE : ""}`}>
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                  <span className="font-[family-name:var(--font-spectral)] text-[16px] font-normal leading-[1.35] tracking-[-0.005em]">
                    {item.q}
                  </span>
                  <span className="mt-1 font-[family-name:var(--font-archivo)] text-[14px] leading-none text-[#C8F169] transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-[42ch] text-[13.5px] leading-[1.65] text-[#9DB39A]">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* ───────── FINAL CTA ───────── */}
        <section className={`mx-5 ${RULE} py-16`}>
          <h2 className="font-[family-name:var(--font-spectral)] text-[28px] font-light leading-[1.15] tracking-[-0.01em]">
            {content.finalCta.headline}
          </h2>
          <button
            onClick={() => fd.onCta("final")}
            className="mt-8 flex w-full items-center justify-between bg-[#C8F169] px-5 py-3.5 text-[13px] font-medium uppercase tracking-[0.12em] text-[#16271F] transition-colors hover:bg-[#EFEAD8]"
          >
            {content.finalCta.ctaLabel}
            <span aria-hidden>→</span>
          </button>
        </section>

        {/* ───────── FAKE-DOOR ───────── */}
        {fd.showWaitlist && (
          <section id="waitlist" className={`mx-5 ${RULE} py-12`}>
            {fd.state === "done" ? (
              <div>
                <p className="mb-6 text-[10px] uppercase tracking-[0.34em] text-[#C8F169]">
                  Reserved
                </p>
                <h2 className="font-[family-name:var(--font-spectral)] text-[24px] font-light leading-[1.2] tracking-[-0.005em]">
                  {content.confirmation.title}
                </h2>
                <p className="mt-5 max-w-[40ch] text-[14px] leading-[1.65] text-[#9DB39A]">
                  {content.confirmation.body}
                </p>
              </div>
            ) : (
              <>
                <p className="mb-6 text-[10px] uppercase tracking-[0.34em] text-[#C8F169]">
                  Waitlist
                </p>
                <h2 className="font-[family-name:var(--font-spectral)] text-[24px] font-light italic leading-[1.2] tracking-[-0.005em]">
                  {fakedoor.title}
                </h2>
                <p className="mt-5 max-w-[40ch] text-[14px] leading-[1.65] text-[#9DB39A]">
                  {fakedoor.body}
                </p>
                <form onSubmit={fd.submit} className="mt-7">
                  <input
                    type="email"
                    required
                    value={fd.email}
                    onChange={(e) => fd.setEmail(e.target.value)}
                    placeholder={fakedoor.emailPlaceholder}
                    className="w-full border border-[#9DB39A]/40 bg-transparent px-4 py-3.5 text-[14px] text-[#EFEAD8] placeholder:text-[#9DB39A] focus:border-[#C8F169] focus:outline-none"
                  />
                  <button
                    type="submit"
                    disabled={fd.state === "loading"}
                    className="mt-px flex w-full items-center justify-between bg-[#C8F169] px-5 py-3.5 text-[13px] font-medium uppercase tracking-[0.12em] text-[#16271F] transition-colors hover:bg-[#EFEAD8] disabled:opacity-60"
                  >
                    {fd.state === "loading" ? "Sending…" : fakedoor.submitLabel}
                    <span aria-hidden>→</span>
                  </button>
                  {fd.state === "error" && (
                    <p className="mt-4 text-[12px] uppercase tracking-[0.12em] text-[#C8F169]">
                      Something went wrong. Try again.
                    </p>
                  )}
                </form>
                <p className="mt-5 text-[11px] uppercase tracking-[0.16em] text-[#9DB39A]">
                  {fakedoor.privacyLine}
                </p>
              </>
            )}
          </section>
        )}

        {/* ───────── FOOTER ───────── */}
        <footer className={`mx-5 ${RULE} py-10`}>
          <p className="font-[family-name:var(--font-spectral)] text-[15px] font-light italic leading-snug">
            {footer.lines[0]}
          </p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[10px] uppercase tracking-[0.22em] text-[#9DB39A]">
            {footer.lines.slice(1).map((line, i) => (
              <span key={i}>{line}</span>
            ))}
          </div>
        </footer>
      </div>
    </main>
  );
}
