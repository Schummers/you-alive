"use client";

import { Fraunces, DM_Mono } from "next/font/google";
import type { DesignProps } from "@/designs/types";
import { useFakeDoor } from "@/designs/shared/useFakeDoor";

// Direction: AXIS 05 — TYPO-DRIVEN. Deep forest + electric lime with
// Fraunces (optical variable serif, retro-worm personality) at extreme
// display scale. Type IS the visual. Lime on forest = high drama.
// DM Mono for body / UI: quiet, slightly odd, amplifies the offbeat tone.

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
  style: ["normal", "italic"],
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-dm-mono",
  weight: "400",
  display: "swap",
  style: ["normal", "italic"],
});

export default function CFd12({ content, slug }: DesignProps) {
  const fd = useFakeDoor(slug);
  const { hero, problem, solution, pricing, testimonials, faq, fakedoor, footer } = content;

  return (
    <div className={`${fraunces.variable} ${dmMono.variable}`}>
      <main
        className="relative min-h-screen bg-[#16271F] text-[#EFEAD8] antialiased"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 50% -10%, #1e3828 0%, transparent 70%)",
        }}
      >
        {/* Grain overlay */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
            backgroundSize: "200px 200px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-md px-5 pb-40">

          {/* ─── HERO ─── */}
          <header className="pt-8">
            {/* Brand lockup — small mono label */}
            <p className="font-[family-name:var(--font-dm-mono)] text-[11px] uppercase tracking-[0.3em] text-[#9DB39A]">
              {hero.brandLockup}
            </p>

            {/* Display headline — fills the viewport dramatically */}
            <h1
              className="mt-6 font-[family-name:var(--font-fraunces)] text-[#C8F169] leading-[0.92] tracking-[-0.03em]"
              style={{
                fontSize: "clamp(64px, 22vw, 88px)",
                fontVariationSettings: '"opsz" 144, "SOFT" 0, "WONK" 1',
              }}
            >
              {hero.title}
            </h1>

            {/* Lime rule */}
            <div className="mt-8 h-px bg-[#C8F169]/25" />

            <p className="font-[family-name:var(--font-dm-mono)] mt-7 text-[14px] leading-[1.75] text-[#EFEAD8]/70">
              {hero.subtitle}
            </p>

            <button
              onClick={() => fd.onCta("hero")}
              className="group mt-9 inline-flex items-center gap-3 rounded-none border border-[#C8F169] bg-[#C8F169] px-7 py-4 font-[family-name:var(--font-fraunces)] text-[17px] text-[#16271F] transition-all duration-200 hover:bg-transparent hover:text-[#C8F169]"
              style={{ fontVariationSettings: '"opsz" 24, "SOFT" 50, "WONK" 0' }}
            >
              {hero.ctaLabel}
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </button>

            <p className="font-[family-name:var(--font-dm-mono)] mt-6 text-[11px] text-[#9DB39A]">
              {hero.reassuranceLine}
            </p>
          </header>

          {/* ─── PROBLEM ─── */}
          <section className="mt-28">
            <span className="font-[family-name:var(--font-dm-mono)] text-[10px] uppercase tracking-[0.35em] text-[#9DB39A]">
              The reality
            </span>
            <h2
              className="mt-5 font-[family-name:var(--font-fraunces)] text-[#C8F169] leading-[1.05] tracking-[-0.02em]"
              style={{
                fontSize: "clamp(38px, 12vw, 52px)",
                fontVariationSettings: '"opsz" 72, "SOFT" 20, "WONK" 0',
              }}
            >
              {problem.title}
            </h2>
            <div className="mt-6 h-px bg-[#C8F169]/20" />
            <p className="font-[family-name:var(--font-dm-mono)] mt-6 text-[14px] leading-[1.75] text-[#EFEAD8]/65">
              {problem.body}
            </p>
          </section>

          {/* ─── SOLUTION ─── */}
          <section className="mt-28">
            <p className="font-[family-name:var(--font-dm-mono)] text-[10px] uppercase tracking-[0.35em] text-[#9DB39A]">
              {solution.intro}
            </p>

            <ol className="mt-10 space-y-1">
              {solution.steps.map((s, i) => (
                <li
                  key={i}
                  className="border border-[#9DB39A]/15 bg-[#1e3026]/40 px-6 py-7"
                  style={{ borderTopWidth: i === 0 ? "1px" : "0" }}
                >
                  {/* Step number in huge faint lime */}
                  <span
                    aria-hidden
                    className="block font-[family-name:var(--font-fraunces)] leading-none text-[#C8F169]/20 select-none"
                    style={{
                      fontSize: "72px",
                      fontVariationSettings: '"opsz" 144, "SOFT" 0, "WONK" 1',
                      marginBottom: "-32px",
                      marginLeft: "-4px",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3
                    className="font-[family-name:var(--font-fraunces)] text-[#EFEAD8] leading-[1.15] tracking-[-0.01em]"
                    style={{
                      fontSize: "21px",
                      fontVariationSettings: '"opsz" 36, "SOFT" 30, "WONK" 0',
                    }}
                  >
                    {s.title}
                  </h3>
                  <p className="font-[family-name:var(--font-dm-mono)] mt-4 text-[13px] leading-[1.75] text-[#EFEAD8]/55">
                    {s.body}
                  </p>
                </li>
              ))}
            </ol>
          </section>

          {/* ─── TESTIMONIALS ─── */}
          <section className="mt-28">
            <p className="font-[family-name:var(--font-dm-mono)] mb-8 text-[10px] uppercase tracking-[0.35em] text-[#9DB39A]">
              From those who started
            </p>

            <div className="space-y-5">
              {testimonials.map((t, i) => (
                <figure
                  key={i}
                  className="border-l-2 border-[#C8F169]/50 pl-6 py-1"
                >
                  <blockquote
                    className="font-[family-name:var(--font-fraunces)] italic text-[#EFEAD8] leading-[1.45]"
                    style={{
                      fontSize: "19px",
                      fontVariationSettings: '"opsz" 36, "SOFT" 40, "WONK" 0',
                    }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="font-[family-name:var(--font-dm-mono)] mt-4 text-[11px] uppercase tracking-[0.25em] text-[#9DB39A]">
                    {t.name} &middot; {t.age}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          {/* ─── PRICING ─── */}
          <section
            ref={fd.pricingRef}
            className="mt-28"
          >
            <span className="font-[family-name:var(--font-dm-mono)] text-[10px] uppercase tracking-[0.35em] text-[#9DB39A]">
              Membership
            </span>
            <h2
              className="mt-5 font-[family-name:var(--font-fraunces)] text-[#C8F169] leading-[1.0] tracking-[-0.02em]"
              style={{
                fontSize: "clamp(34px, 10vw, 46px)",
                fontVariationSettings: '"opsz" 72, "SOFT" 20, "WONK" 0',
              }}
            >
              {pricing.title}
            </h2>
            <p className="font-[family-name:var(--font-dm-mono)] mt-5 text-[13px] leading-[1.75] text-[#EFEAD8]/60">
              {pricing.subtitle}
            </p>

            <div className="mt-10 space-y-4">
              {pricing.plans.map((plan, i) => (
                <div
                  key={i}
                  className={
                    plan.highlight
                      ? "relative border border-[#C8F169] bg-[#C8F169] px-6 py-8 text-[#16271F]"
                      : "relative border border-[#9DB39A]/25 bg-[#1e3026]/30 px-6 py-8 text-[#EFEAD8]"
                  }
                >
                  {plan.highlight && (
                    <span className="font-[family-name:var(--font-dm-mono)] absolute -top-3 left-5 bg-[#16271F] px-3 py-0.5 text-[10px] uppercase tracking-[0.25em] text-[#C8F169]">
                      Best value
                    </span>
                  )}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p
                        className={`font-[family-name:var(--font-dm-mono)] text-[11px] uppercase tracking-[0.25em] ${
                          plan.highlight ? "text-[#16271F]/60" : "text-[#9DB39A]"
                        }`}
                      >
                        {plan.name}
                      </p>
                      <p
                        className="mt-2 font-[family-name:var(--font-fraunces)] leading-none tracking-[-0.02em]"
                        style={{
                          fontSize: "38px",
                          fontVariationSettings: '"opsz" 72, "SOFT" 0, "WONK" 1',
                        }}
                      >
                        {plan.price}
                      </p>
                      <p
                        className={`font-[family-name:var(--font-dm-mono)] mt-2 text-[12px] ${
                          plan.highlight ? "text-[#16271F]/60" : "text-[#EFEAD8]/45"
                        }`}
                      >
                        {plan.descriptor}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => fd.onCta(`pricing-${plan.name.toLowerCase()}`)}
                    className={
                      plan.highlight
                        ? "group mt-7 inline-flex w-full items-center justify-center gap-3 border border-[#16271F] bg-[#16271F] px-6 py-3.5 font-[family-name:var(--font-fraunces)] text-[16px] text-[#C8F169] transition-all hover:bg-transparent hover:text-[#16271F]"
                        : "group mt-7 inline-flex w-full items-center justify-center gap-3 border border-[#C8F169]/60 bg-transparent px-6 py-3.5 font-[family-name:var(--font-fraunces)] text-[16px] text-[#C8F169] transition-all hover:border-[#C8F169] hover:bg-[#C8F169]/10"
                    }
                    style={{ fontVariationSettings: '"opsz" 24, "SOFT" 40, "WONK" 0' }}
                  >
                    {plan.ctaLabel}
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </button>
                </div>
              ))}
            </div>

            {/* Included features */}
            <div className="mt-8 border border-[#9DB39A]/15 bg-[#1e3026]/25 px-6 py-7">
              <p className="font-[family-name:var(--font-dm-mono)] mb-5 text-[10px] uppercase tracking-[0.35em] text-[#9DB39A]">
                Everything included
              </p>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
                {pricing.included.map((feature, i) => (
                  <li
                    key={i}
                    className="font-[family-name:var(--font-dm-mono)] flex items-center gap-2.5 text-[12.5px] text-[#EFEAD8]/70"
                  >
                    <span className="h-1 w-1 flex-none rounded-full bg-[#C8F169]/60" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <p className="font-[family-name:var(--font-dm-mono)] mt-5 text-center text-[11.5px] text-[#9DB39A]">
              {pricing.scarcityLine}
            </p>
          </section>

          {/* ─── FAQ ─── */}
          <section className="mt-28">
            <p className="font-[family-name:var(--font-dm-mono)] mb-8 text-[10px] uppercase tracking-[0.35em] text-[#9DB39A]">
              Questions
            </p>

            <div className="divide-y divide-[#9DB39A]/15 border-t border-b border-[#9DB39A]/15">
              {faq.map((item, i) => (
                <details key={i} className="group py-0">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-6">
                    <span
                      className="font-[family-name:var(--font-fraunces)] leading-[1.25] text-[#EFEAD8]"
                      style={{
                        fontSize: "17px",
                        fontVariationSettings: '"opsz" 24, "SOFT" 30, "WONK" 0',
                      }}
                    >
                      {item.q}
                    </span>
                    <span className="font-[family-name:var(--font-dm-mono)] mt-0.5 flex-none text-[20px] leading-none text-[#C8F169] transition-transform duration-200 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="font-[family-name:var(--font-dm-mono)] pb-7 text-[13px] leading-[1.75] text-[#EFEAD8]/55">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </section>

          {/* ─── FINAL CTA ─── */}
          <section className="mt-28">
            {/* Big display headline */}
            <h2
              className="font-[family-name:var(--font-fraunces)] text-[#C8F169] leading-[0.95] tracking-[-0.03em]"
              style={{
                fontSize: "clamp(56px, 19vw, 80px)",
                fontVariationSettings: '"opsz" 144, "SOFT" 0, "WONK" 1',
              }}
            >
              {content.finalCta.headline}
            </h2>
            <div className="mt-7 h-px bg-[#C8F169]/25" />
            <button
              onClick={() => fd.onCta("final")}
              className="group mt-8 inline-flex items-center gap-3 border border-[#C8F169] bg-[#C8F169] px-8 py-4 font-[family-name:var(--font-fraunces)] text-[17px] text-[#16271F] transition-all duration-200 hover:bg-transparent hover:text-[#C8F169]"
              style={{ fontVariationSettings: '"opsz" 24, "SOFT" 50, "WONK" 0' }}
            >
              {content.finalCta.ctaLabel}
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </button>
          </section>

          {/* ─── FAKE-DOOR ─── */}
          {fd.showWaitlist && (
            <section
              id="waitlist"
              className="mt-12 border border-[#C8F169]/30 bg-[#1e3026]/60 px-6 py-10"
            >
              {fd.state === "done" ? (
                <div>
                  <h3
                    className="font-[family-name:var(--font-fraunces)] text-[#C8F169] leading-[1.1]"
                    style={{
                      fontSize: "34px",
                      fontVariationSettings: '"opsz" 48, "SOFT" 20, "WONK" 0',
                    }}
                  >
                    {content.confirmation.title}
                  </h3>
                  <p className="font-[family-name:var(--font-dm-mono)] mt-5 text-[13px] leading-[1.75] text-[#EFEAD8]/65">
                    {content.confirmation.body}
                  </p>
                </div>
              ) : (
                <>
                  <h3
                    className="font-[family-name:var(--font-fraunces)] text-[#C8F169] leading-[1.1]"
                    style={{
                      fontSize: "34px",
                      fontVariationSettings: '"opsz" 48, "SOFT" 20, "WONK" 0',
                    }}
                  >
                    {fakedoor.title}
                  </h3>
                  <p className="font-[family-name:var(--font-dm-mono)] mt-4 text-[13px] leading-[1.75] text-[#EFEAD8]/65">
                    {fakedoor.body}
                  </p>
                  <form onSubmit={fd.submit} className="mt-8 flex flex-col gap-3">
                    <input
                      type="email"
                      required
                      value={fd.email}
                      onChange={(e) => fd.setEmail(e.target.value)}
                      placeholder={fakedoor.emailPlaceholder}
                      className="font-[family-name:var(--font-dm-mono)] w-full border border-[#9DB39A]/30 bg-[#16271F] px-5 py-4 text-[14px] text-[#EFEAD8] placeholder:text-[#EFEAD8]/30 focus:border-[#C8F169] focus:outline-none"
                    />
                    <button
                      type="submit"
                      disabled={fd.state === "loading"}
                      className="font-[family-name:var(--font-fraunces)] w-full border border-[#C8F169] bg-[#C8F169] px-6 py-4 text-[16px] text-[#16271F] transition-colors disabled:opacity-50 hover:bg-transparent hover:text-[#C8F169]"
                      style={{ fontVariationSettings: '"opsz" 24, "SOFT" 40, "WONK" 0' }}
                    >
                      {fd.state === "loading" ? "..." : fakedoor.submitLabel}
                    </button>
                    {fd.state === "error" && (
                      <p className="font-[family-name:var(--font-dm-mono)] text-center text-[12px] text-[#C8F169]/70">
                        Something went wrong. Try again.
                      </p>
                    )}
                  </form>
                  <p className="font-[family-name:var(--font-dm-mono)] mt-5 text-[11px] text-[#9DB39A]">
                    {fakedoor.privacyLine}
                  </p>
                </>
              )}
            </section>
          )}

          {/* ─── FOOTER ─── */}
          <footer className="mt-24 border-t border-[#9DB39A]/20 pt-8 pb-4">
            <p
              className="font-[family-name:var(--font-fraunces)] italic text-[#EFEAD8]/50 leading-[1.3]"
              style={{
                fontSize: "16px",
                fontVariationSettings: '"opsz" 24, "SOFT" 60, "WONK" 0',
              }}
            >
              {footer.lines[0]}
            </p>
            <p className="font-[family-name:var(--font-dm-mono)] mt-4 text-[11px] uppercase tracking-[0.3em] text-[#9DB39A]/60">
              {footer.lines.slice(1).join("  ·  ")}
            </p>
          </footer>
        </div>

        {/* ─── STICKY CTA ─── */}
        <div className="fixed inset-x-0 bottom-0 z-50 px-5 pb-5">
          <button
            onClick={() => fd.onCta("sticky")}
            className="mx-auto flex w-full max-w-md items-center justify-center gap-3 bg-[#C8F169] px-6 py-4 font-[family-name:var(--font-fraunces)] text-[16px] text-[#16271F] shadow-[0_-20px_60px_-10px_rgba(22,39,31,0.9)] transition-colors hover:bg-[#d4f57e]"
            style={{ fontVariationSettings: '"opsz" 24, "SOFT" 40, "WONK" 0' }}
          >
            {hero.ctaLabel}
            <span>→</span>
          </button>
        </div>
      </main>
    </div>
  );
}
