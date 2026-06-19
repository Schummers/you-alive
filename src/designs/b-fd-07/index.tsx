"use client";

import Image from "next/image";
import { Fraunces, Archivo } from "next/font/google";
import type { DesignProps } from "@/designs/types";
import { useFakeDoor } from "@/designs/shared/useFakeDoor";

// Direction: SWISS / INTERNATIONAL — flat, gridded, quiet rigor. Zero shadows
// and zero gradients on the chrome; the only softness is the lavender→periwinkle
// mesh living in the page background. Strict hairline rules, small precise
// labels with wide tracking and monospaced index numbers, generous air.
// Type: Fraunces (literary serif, opsz/soft axis) for the tender voice;
// Archivo (a clean grotesque) for the rigorous body, labels and numerals.
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT", "WONK"],
  style: ["normal", "italic"],
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

export default function SwissFlatDesign({ content, slug }: DesignProps) {
  const fd = useFakeDoor(slug);
  const { hero, problem, solution, pricing, testimonials, faq, fakedoor, footer } =
    content;

  const ink = "#26235A";
  const soft = "#5A5690";
  const rule = "#26235A1A"; // hairline indigo, 10%

  return (
    <main
      className={`${fraunces.variable} ${archivo.variable} font-[family-name:var(--font-archivo)] relative min-h-screen text-[#26235A] antialiased selection:bg-[#26235A] selection:text-[#F7F4FF]`}
      style={{
        backgroundColor: "#F7F4FF",
        backgroundImage: `
          radial-gradient(120% 90% at 12% 4%, #EBE6FF 0%, transparent 55%),
          radial-gradient(110% 80% at 92% 18%, #D6E4FF 0%, transparent 50%),
          radial-gradient(130% 100% at 50% 100%, #F3ECFF 0%, transparent 60%)
        `,
      }}
    >
      <div className="mx-auto max-w-md px-6 pb-32">
        {/* ───────── NAV ───────── */}
        <header
          className="flex items-center justify-between border-b py-4"
          style={{ borderColor: rule }}
        >
          <span
            className="font-[family-name:var(--font-fraunces)] text-[15px] italic"
            style={{ fontVariationSettings: '"opsz" 30, "SOFT" 0' }}
          >
            {hero.brandLockup}
          </span>
          <span className="text-[10px] uppercase tracking-[0.28em]" style={{ color: soft }}>
            Est. for those you love
          </span>
        </header>

        {/* ───────── HERO ───────── */}
        <section className="pt-10">
          <div className="flex items-baseline justify-between">
            <span className="font-[family-name:var(--font-archivo)] text-[11px] uppercase tracking-[0.3em]" style={{ color: soft }}>
              01 — Legacy
            </span>
            <span className="text-[11px] tabular-nums" style={{ color: soft }}>
              §
            </span>
          </div>

          <h1
            className="mt-5 text-balance font-[family-name:var(--font-fraunces)] text-[40px] leading-[1.02] tracking-[-0.015em]"
            style={{ fontVariationSettings: '"opsz" 144, "SOFT" 0, "WONK" 0' }}
          >
            {hero.title}
          </h1>

          <p className="mt-6 max-w-[34ch] text-[15px] leading-[1.6]" style={{ color: soft }}>
            {hero.subtitle}
          </p>

          {/* Flat full-bleed photo, sharp corners, hairline frame. No shadow. */}
          <div className="mt-8 border" style={{ borderColor: rule }}>
            <div className="relative aspect-[3/4] w-full">
              <Image
                src="/designs/b/hero.jpeg"
                alt=""
                fill
                priority
                sizes="(max-width: 768px) 100vw, 450px"
                className="object-cover"
              />
            </div>
          </div>

          <button
            onClick={() => fd.onCta("hero")}
            className="mt-8 flex w-full items-center justify-between border px-6 py-4 text-left text-[15px] font-medium transition-colors hover:bg-[#26235A] hover:text-[#F7F4FF]"
            style={{ borderColor: ink }}
          >
            {hero.ctaLabel}
            <span aria-hidden>→</span>
          </button>

          <p className="mt-5 text-[12px] tracking-[0.01em]" style={{ color: soft }}>
            {hero.reassuranceLine}
          </p>
        </section>

        {/* ───────── PROBLEM ───────── */}
        <section className="mt-24 border-t pt-8" style={{ borderColor: rule }}>
          <span className="font-[family-name:var(--font-archivo)] text-[11px] uppercase tracking-[0.3em]" style={{ color: soft }}>
            02 — The gap
          </span>
          <h2
            className="mt-6 text-balance font-[family-name:var(--font-fraunces)] text-[26px] leading-[1.16] tracking-[-0.01em]"
            style={{ fontVariationSettings: '"opsz" 60, "SOFT" 0' }}
          >
            {problem.title}
          </h2>
          <p className="mt-5 max-w-[40ch] text-[15px] leading-[1.65]" style={{ color: soft }}>
            {problem.body}
          </p>
        </section>

        {/* ───────── SOLUTION ───────── */}
        <section className="mt-24 border-t pt-8" style={{ borderColor: rule }}>
          <span className="font-[family-name:var(--font-archivo)] text-[11px] uppercase tracking-[0.3em]" style={{ color: soft }}>
            03 — {solution.intro}
          </span>

          <ol className="mt-10">
            {solution.steps.map((s, i) => (
              <li
                key={i}
                className="grid grid-cols-[auto_1fr] gap-x-5 border-t py-7 first:border-t-0 first:pt-0"
                style={{ borderColor: rule }}
              >
                <span
                  className="font-[family-name:var(--font-fraunces)] text-[22px] italic tabular-nums leading-none"
                  style={{ color: soft, fontVariationSettings: '"opsz" 30, "WONK" 1' }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3
                    className="font-[family-name:var(--font-fraunces)] text-[19px] leading-[1.25] tracking-[-0.005em]"
                    style={{ fontVariationSettings: '"opsz" 40, "SOFT" 0' }}
                  >
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-[1.6]" style={{ color: soft }}>
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* ───────── PRICING ───────── */}
        <section
          ref={fd.pricingRef}
          className="mt-24 border-t pt-8"
          style={{ borderColor: rule }}
        >
          <span className="font-[family-name:var(--font-archivo)] text-[11px] uppercase tracking-[0.3em]" style={{ color: soft }}>
            04 — Membership
          </span>
          <h2
            className="mt-6 text-balance font-[family-name:var(--font-fraunces)] text-[26px] leading-[1.16] tracking-[-0.01em]"
            style={{ fontVariationSettings: '"opsz" 60, "SOFT" 0' }}
          >
            {pricing.title}
          </h2>
          <p className="mt-5 max-w-[40ch] text-[14px] leading-[1.6]" style={{ color: soft }}>
            {pricing.subtitle}
          </p>

          <div className="mt-9 grid grid-cols-1 gap-px" style={{ backgroundColor: rule }}>
            {pricing.plans.map((plan, i) => (
              <div
                key={i}
                className="px-6 py-7"
                style={
                  plan.highlight
                    ? { backgroundColor: ink, color: "#F7F4FF" }
                    : { backgroundColor: "#F7F4FF" }
                }
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-[0.28em]" style={{ color: plan.highlight ? "#C9C2F5" : soft }}>
                    {plan.name}
                  </span>
                  {plan.highlight && (
                    <span className="text-[10px] uppercase tracking-[0.24em]" style={{ color: "#C9C2F5" }}>
                      Recommended
                    </span>
                  )}
                </div>
                <p
                  className="mt-4 font-[family-name:var(--font-fraunces)] text-[34px] leading-none tracking-[-0.01em]"
                  style={{ fontVariationSettings: '"opsz" 144, "SOFT" 0' }}
                >
                  {plan.price}
                </p>
                <p className="mt-3 text-[12.5px]" style={{ color: plan.highlight ? "#C9C2F5" : soft }}>
                  {plan.descriptor}
                </p>
                <button
                  onClick={() => fd.onCta(`pricing-${plan.name.toLowerCase()}`)}
                  className="mt-6 flex w-full items-center justify-between border px-5 py-3.5 text-[14px] font-medium transition-colors"
                  style={
                    plan.highlight
                      ? { borderColor: "#F7F4FF" }
                      : { borderColor: ink }
                  }
                >
                  {plan.ctaLabel}
                  <span aria-hidden>→</span>
                </button>
              </div>
            ))}
          </div>

          {/* Included — strict two-column index grid */}
          <div className="mt-9 border-t pt-7" style={{ borderColor: rule }}>
            <p className="text-[11px] uppercase tracking-[0.3em]" style={{ color: soft }}>
              Included, in full
            </p>
            <ul className="mt-5 grid grid-cols-2 gap-x-5">
              {pricing.included.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-baseline gap-2.5 border-t py-2.5 text-[13px] leading-[1.35]"
                  style={{ borderColor: rule }}
                >
                  <span className="text-[10px] tabular-nums" style={{ color: soft }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-7 text-[12px] leading-[1.55]" style={{ color: soft }}>
            {pricing.scarcityLine}
          </p>
        </section>

        {/* ───────── TESTIMONIALS ───────── */}
        <section className="mt-24 border-t pt-8" style={{ borderColor: rule }}>
          <span className="font-[family-name:var(--font-archivo)] text-[11px] uppercase tracking-[0.3em]" style={{ color: soft }}>
            05 — In their words
          </span>
          <div className="mt-8">
            {testimonials.map((t, i) => (
              <figure
                key={i}
                className="border-t py-8 first:border-t-0 first:pt-0"
                style={{ borderColor: rule }}
              >
                <blockquote
                  className="font-[family-name:var(--font-fraunces)] text-[18px] leading-[1.45] tracking-[-0.005em]"
                  style={{ fontVariationSettings: '"opsz" 40, "SOFT" 0' }}
                >
                  {t.quote}
                </blockquote>
                <figcaption className="mt-5 text-[11px] uppercase tracking-[0.24em]" style={{ color: soft }}>
                  {t.name}, {t.age}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ───────── FAQ ───────── */}
        <section className="mt-24 border-t pt-8" style={{ borderColor: rule }}>
          <span className="font-[family-name:var(--font-archivo)] text-[11px] uppercase tracking-[0.3em]" style={{ color: soft }}>
            06 — Questions
          </span>
          <div className="mt-6">
            {faq.map((item, i) => (
              <details
                key={i}
                className="group border-t py-5"
                style={{ borderColor: rule }}
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-5">
                  <span className="font-[family-name:var(--font-archivo)] text-[15px] font-medium leading-[1.35]">
                    {item.q}
                  </span>
                  <span className="mt-0.5 text-[18px] leading-none transition-transform duration-300 group-open:rotate-45" style={{ color: soft }}>
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-[44ch] text-[14px] leading-[1.6]" style={{ color: soft }}>
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* ───────── FINAL CTA ───────── */}
        <section className="mt-24 border-y py-14 text-center" style={{ borderColor: ink }}>
          <h2
            className="mx-auto max-w-[16ch] text-balance font-[family-name:var(--font-fraunces)] text-[30px] leading-[1.1] tracking-[-0.01em]"
            style={{ fontVariationSettings: '"opsz" 144, "SOFT" 0' }}
          >
            {content.finalCta.headline}
          </h2>
          <button
            onClick={() => fd.onCta("final")}
            className="mt-8 inline-flex items-center justify-center gap-3 border px-8 py-4 text-[15px] font-medium transition-colors hover:bg-[#26235A] hover:text-[#F7F4FF]"
            style={{ borderColor: ink }}
          >
            {content.finalCta.ctaLabel}
            <span aria-hidden>→</span>
          </button>
        </section>

        {/* ───────── FAKE-DOOR ───────── */}
        {fd.showWaitlist && (
          <section
            id="waitlist"
            className="mt-12 border p-7"
            style={{ borderColor: ink }}
          >
            {fd.state === "done" ? (
              <div>
                <p
                  className="font-[family-name:var(--font-fraunces)] text-[24px] leading-tight tracking-[-0.01em]"
                  style={{ fontVariationSettings: '"opsz" 60, "SOFT" 0' }}
                >
                  {content.confirmation.title}
                </p>
                <p className="mt-4 max-w-[40ch] text-[14px] leading-[1.6]" style={{ color: soft }}>
                  {content.confirmation.body}
                </p>
              </div>
            ) : (
              <>
                <p
                  className="font-[family-name:var(--font-fraunces)] text-[24px] italic leading-tight tracking-[-0.01em]"
                  style={{ fontVariationSettings: '"opsz" 60, "SOFT" 0, "WONK" 1' }}
                >
                  {fakedoor.title}
                </p>
                <p className="mt-4 max-w-[40ch] text-[14px] leading-[1.6]" style={{ color: soft }}>
                  {fakedoor.body}
                </p>
                <form onSubmit={fd.submit} className="mt-6 flex flex-col gap-px" style={{ backgroundColor: rule }}>
                  <input
                    type="email"
                    required
                    value={fd.email}
                    onChange={(e) => fd.setEmail(e.target.value)}
                    placeholder={fakedoor.emailPlaceholder}
                    className="w-full border px-5 py-4 text-[15px] placeholder:text-[#5A5690] focus:outline-none focus:ring-1 focus:ring-[#26235A]"
                    style={{ borderColor: rule, backgroundColor: "#F7F4FF" }}
                  />
                  <button
                    type="submit"
                    disabled={fd.state === "loading"}
                    className="w-full px-5 py-4 text-[15px] font-medium text-[#F7F4FF] transition-opacity disabled:opacity-60"
                    style={{ backgroundColor: ink }}
                  >
                    {fd.state === "loading" ? "Reserving…" : fakedoor.submitLabel}
                  </button>
                </form>
                {fd.state === "error" && (
                  <p className="mt-3 text-[13px]" style={{ color: ink }}>
                    Something went wrong. Please try again.
                  </p>
                )}
                <p className="mt-4 text-[12px]" style={{ color: soft }}>
                  {fakedoor.privacyLine}
                </p>
              </>
            )}
          </section>
        )}

        {/* ───────── FOOTER ───────── */}
        <footer className="mt-20 border-t pt-8" style={{ borderColor: rule }}>
          <p
            className="font-[family-name:var(--font-fraunces)] text-[16px] italic leading-snug"
            style={{ fontVariationSettings: '"opsz" 30, "SOFT" 0' }}
          >
            {footer.lines[0]}
          </p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[11px] uppercase tracking-[0.22em]" style={{ color: soft }}>
            {footer.lines.slice(1).map((line, i) => (
              <span key={i}>{line}</span>
            ))}
          </div>
        </footer>
      </div>
    </main>
  );
}
