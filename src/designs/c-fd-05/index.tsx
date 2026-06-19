"use client";

import Image from "next/image";
import { Fraunces, Darker_Grotesque } from "next/font/google";
import type { DesignProps } from "@/designs/types";
import { useFakeDoor } from "@/designs/shared/useFakeDoor";

// Direction: TYPOGRAPHY-DRIVEN. An oversized retro display face (Fraunces, with
// optical sizing + soft terminals + WONK on, set in italic) dominates the page
// the way the slanted lime wordmark dominates the brand ad. Dramatic scale
// contrast: enormous warm headlines against a tight, tall grotesk (Darker
// Grotesque) for body and UI. The hero photo is demoted to a small framed
// inset — type carries the character. Deep forest ground, electric lime accent,
// cream type, sage support. Dignified, warm, characterful, never gimmicky.
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT", "WONK"],
  style: ["normal", "italic"],
  display: "swap",
});

const darker = Darker_Grotesque({
  subsets: ["latin"],
  variable: "--font-darker",
  display: "swap",
});

export default function TypeDrivenDesign({ content, slug }: DesignProps) {
  const fd = useFakeDoor(slug);
  const { hero, problem, solution, pricing, testimonials, faq, fakedoor, footer } = content;

  // Reusable display style: big retro italic Fraunces, soft + slightly wonky.
  const displayVar = '"opsz" 144, "SOFT" 60, "WONK" 1';

  return (
    <main
      className={`${fraunces.variable} ${darker.variable} font-[family-name:var(--font-darker)] relative min-h-screen overflow-hidden bg-[#14241C] text-[#EFEAD8] antialiased selection:bg-[#C8F169] selection:text-[#14241C]`}
    >
      {/* Atmospheric grain + glow */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.06] mix-blend-screen"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed -top-32 left-1/2 z-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[#C8F169]/12 blur-[110px]"
      />

      <div className="relative z-10 mx-auto max-w-md px-5 pb-40">
        {/* ───────── NAV ───────── */}
        <header className="flex items-center justify-between pt-6">
          <span className="font-[family-name:var(--font-fraunces)] text-[19px] font-medium italic tracking-[-0.01em] text-[#C8F169]">
            {hero.brandLockup}
          </span>
          <span className="text-[12px] font-semibold uppercase tracking-[0.28em] text-[#9DB39A]">
            Legacy
          </span>
        </header>

        {/* ───────── HERO ───────── */}
        <section className="pt-10">
          <p className="text-[14px] font-semibold uppercase tracking-[0.3em] text-[#9DB39A]">
            Prepared today
          </p>
          <h1
            className="mt-3 font-[family-name:var(--font-fraunces)] text-[64px] font-light italic leading-[0.92] tracking-[-0.02em] text-[#EFEAD8]"
            style={{ fontVariationSettings: displayVar }}
          >
            Don&rsquo;t leave
            <br />
            <span className="text-[#C8F169]">your loved ones</span>
            <br />
            guessing.
          </h1>

          <div className="mt-8 flex items-stretch gap-4">
            <div className="relative h-32 w-28 flex-none overflow-hidden rounded-[20px] ring-1 ring-[#EFEAD8]/15">
              <Image
                src="/designs/c/hero.jpeg"
                alt=""
                fill
                priority
                sizes="120px"
                className="object-cover"
              />
            </div>
            <p className="self-center text-[19px] font-medium leading-[1.25] text-[#cfd9c8]">
              {hero.subtitle}
            </p>
          </div>

          <button
            onClick={() => fd.onCta("hero")}
            className="group mt-8 flex w-full items-center justify-between rounded-full bg-[#C8F169] px-7 py-4 text-[20px] font-bold text-[#14241C] transition-transform duration-300 hover:-translate-y-[2px]"
          >
            {hero.ctaLabel}
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </button>

          <p className="mt-5 flex items-center gap-2.5 text-[16px] font-medium text-[#9DB39A]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C8F169]" />
            {hero.reassuranceLine}
          </p>
        </section>

        {/* ───────── PROBLEM ───────── */}
        <section className="mt-28">
          <p className="text-[13px] font-semibold uppercase tracking-[0.3em] text-[#C8F169]/80">
            The quiet problem
          </p>
          <h2
            className="mt-5 font-[family-name:var(--font-fraunces)] text-[38px] font-light italic leading-[1.02] tracking-[-0.015em] text-[#EFEAD8]"
            style={{ fontVariationSettings: '"opsz" 72, "SOFT" 50, "WONK" 1' }}
          >
            {problem.title}
          </h2>
          <p className="mt-6 text-[20px] font-medium leading-[1.3] text-[#9DB39A]">
            {problem.body}
          </p>
        </section>

        {/* ───────── SOLUTION ───────── */}
        <section className="mt-28">
          <p className="font-[family-name:var(--font-fraunces)] text-[28px] font-light italic text-[#C8F169]">
            {solution.intro}
          </p>
          <ol className="mt-10 space-y-10">
            {solution.steps.map((s, i) => (
              <li key={i} className="flex gap-4">
                <span
                  className="flex-none font-[family-name:var(--font-fraunces)] text-[56px] font-light italic leading-[0.8] text-[#C8F169]/35"
                  style={{ fontVariationSettings: displayVar }}
                >
                  {i + 1}
                </span>
                <div className="border-t border-[#EFEAD8]/12 pt-1">
                  <h3 className="text-[22px] font-bold leading-[1.1] text-[#EFEAD8]">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[18px] font-medium leading-[1.3] text-[#9DB39A]">
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* ───────── PRICING ───────── */}
        <section ref={fd.pricingRef} className="mt-28">
          <h2
            className="font-[family-name:var(--font-fraunces)] text-[40px] font-light italic leading-[1.0] tracking-[-0.015em] text-[#EFEAD8]"
            style={{ fontVariationSettings: '"opsz" 72, "SOFT" 50, "WONK" 1' }}
          >
            {pricing.title}
          </h2>
          <p className="mt-5 text-[19px] font-medium leading-[1.3] text-[#9DB39A]">
            {pricing.subtitle}
          </p>

          <div className="mt-9 space-y-4">
            {pricing.plans.map((plan, i) => (
              <div
                key={i}
                className={
                  plan.highlight
                    ? "relative rounded-[26px] bg-[#C8F169] px-6 py-6 text-[#14241C]"
                    : "relative rounded-[26px] border border-[#EFEAD8]/15 bg-[#1b2c22] px-6 py-6 text-[#EFEAD8]"
                }
              >
                {plan.highlight && (
                  <span className="absolute -top-3 right-5 rounded-full bg-[#14241C] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[#C8F169]">
                    Most chosen
                  </span>
                )}
                <div className="flex items-end justify-between">
                  <div>
                    <p
                      className={`text-[16px] font-bold uppercase tracking-[0.14em] ${
                        plan.highlight ? "text-[#14241C]/70" : "text-[#9DB39A]"
                      }`}
                    >
                      {plan.name}
                    </p>
                    <p
                      className="mt-1 font-[family-name:var(--font-fraunces)] text-[38px] font-light italic leading-[0.95] tracking-[-0.01em]"
                      style={{ fontVariationSettings: '"opsz" 72, "SOFT" 50, "WONK" 1' }}
                    >
                      {plan.price}
                    </p>
                  </div>
                </div>
                <p
                  className={`mt-2 text-[16px] font-medium ${
                    plan.highlight ? "text-[#14241C]/70" : "text-[#9DB39A]"
                  }`}
                >
                  {plan.descriptor}
                </p>
                <button
                  onClick={() => fd.onCta(`pricing-${plan.name.toLowerCase()}`)}
                  className={
                    plan.highlight
                      ? "mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#14241C] px-6 py-3.5 text-[18px] font-bold text-[#C8F169] transition hover:bg-[#0e1b14]"
                      : "mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#C8F169] px-6 py-3.5 text-[18px] font-bold text-[#14241C] transition hover:brightness-105"
                  }
                >
                  {plan.ctaLabel}
                  <span>→</span>
                </button>
              </div>
            ))}
          </div>

          <div className="mt-7 rounded-[26px] border border-[#EFEAD8]/12 bg-[#1b2c22]/60 px-6 py-7">
            <p className="text-[13px] font-semibold uppercase tracking-[0.26em] text-[#C8F169]/80">
              Everything included
            </p>
            <ul className="mt-5 grid grid-cols-1 gap-y-3">
              {pricing.included.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-[18px] font-medium text-[#cfd9c8]">
                  <span className="text-[15px] text-[#C8F169]">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-6 text-[16px] font-medium leading-[1.3] text-[#9DB39A]">
            {pricing.scarcityLine}
          </p>
        </section>

        {/* ───────── TESTIMONIALS ───────── */}
        <section className="mt-28">
          <p className="text-[13px] font-semibold uppercase tracking-[0.3em] text-[#9DB39A]">
            From those who started
          </p>
          <div className="mt-8 space-y-8">
            {testimonials.map((t, i) => (
              <figure key={i} className="border-t border-[#EFEAD8]/12 pt-6">
                <blockquote
                  className="font-[family-name:var(--font-fraunces)] text-[25px] font-light italic leading-[1.15] tracking-[-0.01em] text-[#EFEAD8]"
                  style={{ fontVariationSettings: '"opsz" 60, "SOFT" 50, "WONK" 1' }}
                >
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 text-[15px] font-bold uppercase tracking-[0.18em] text-[#C8F169]">
                  {t.name} · {t.age}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ───────── FAQ ───────── */}
        <section className="mt-28">
          <h2
            className="font-[family-name:var(--font-fraunces)] text-[34px] font-light italic leading-[1.0] tracking-[-0.015em] text-[#EFEAD8]"
            style={{ fontVariationSettings: '"opsz" 72, "SOFT" 50, "WONK" 1' }}
          >
            Questions you might have
          </h2>
          <div className="mt-7 divide-y divide-[#EFEAD8]/12 border-y border-[#EFEAD8]/12">
            {faq.map((item, i) => (
              <details key={i} className="group py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                  <span className="text-[20px] font-bold leading-[1.15] text-[#EFEAD8]">
                    {item.q}
                  </span>
                  <span className="mt-1 flex-none text-[22px] leading-none text-[#C8F169] transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-[18px] font-medium leading-[1.3] text-[#9DB39A]">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* ───────── FINAL CTA ───────── */}
        <section className="mt-28 text-center">
          <h2
            className="font-[family-name:var(--font-fraunces)] text-[52px] font-light italic leading-[0.95] tracking-[-0.02em] text-[#C8F169]"
            style={{ fontVariationSettings: displayVar }}
          >
            {content.finalCta.headline}
          </h2>
          <button
            onClick={() => fd.onCta("final")}
            className="group mt-9 inline-flex items-center justify-center gap-2.5 rounded-full bg-[#C8F169] px-9 py-4 text-[20px] font-bold text-[#14241C] transition-transform duration-300 hover:-translate-y-[2px]"
          >
            {content.finalCta.ctaLabel}
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </button>
        </section>

        {/* ───────── FAKE-DOOR ───────── */}
        {fd.showWaitlist && (
          <section
            id="waitlist"
            className="mt-12 rounded-[30px] border border-[#C8F169]/25 bg-[#1b2c22] px-6 py-9"
          >
            {fd.state === "done" ? (
              <div className="text-center">
                <p
                  className="font-[family-name:var(--font-fraunces)] text-[30px] font-light italic leading-[1.05] text-[#C8F169]"
                  style={{ fontVariationSettings: '"opsz" 60, "SOFT" 50, "WONK" 1' }}
                >
                  {content.confirmation.title}
                </p>
                <p className="mx-auto mt-4 max-w-[34ch] text-[18px] font-medium leading-[1.3] text-[#9DB39A]">
                  {content.confirmation.body}
                </p>
              </div>
            ) : (
              <>
                <p
                  className="text-center font-[family-name:var(--font-fraunces)] text-[34px] font-light italic leading-[1.0] text-[#EFEAD8]"
                  style={{ fontVariationSettings: '"opsz" 72, "SOFT" 50, "WONK" 1' }}
                >
                  {fakedoor.title}
                </p>
                <p className="mx-auto mt-4 max-w-[34ch] text-center text-[18px] font-medium leading-[1.3] text-[#9DB39A]">
                  {fakedoor.body}
                </p>
                <form onSubmit={fd.submit} className="mt-7 flex flex-col gap-3">
                  <input
                    type="email"
                    required
                    value={fd.email}
                    onChange={(e) => fd.setEmail(e.target.value)}
                    placeholder={fakedoor.emailPlaceholder}
                    className="w-full rounded-full border border-[#EFEAD8]/20 bg-[#14241C] px-6 py-4 text-[18px] font-medium text-[#EFEAD8] placeholder:text-[#9DB39A]/70 focus:border-[#C8F169] focus:outline-none"
                  />
                  <button
                    type="submit"
                    disabled={fd.state === "loading"}
                    className="w-full rounded-full bg-[#C8F169] px-6 py-4 text-[19px] font-bold text-[#14241C] disabled:opacity-60"
                  >
                    {fd.state === "loading" ? "…" : fakedoor.submitLabel}
                  </button>
                  {fd.state === "error" && (
                    <p className="text-center text-[15px] font-medium text-[#C8F169]">
                      Something went wrong. Try again.
                    </p>
                  )}
                </form>
                <p className="mt-5 text-center text-[15px] font-medium text-[#9DB39A]">
                  {fakedoor.privacyLine}
                </p>
              </>
            )}
          </section>
        )}

        {/* ───────── FOOTER ───────── */}
        <footer className="mt-24 border-t border-[#EFEAD8]/12 pt-8">
          <p className="font-[family-name:var(--font-fraunces)] text-[22px] font-light italic leading-[1.2] text-[#EFEAD8]">
            {footer.lines[0]}
          </p>
          <p className="mt-4 text-[14px] font-semibold uppercase tracking-[0.2em] text-[#9DB39A]">
            {footer.lines.slice(1).join("   ·   ")}
          </p>
        </footer>
      </div>

      {/* Sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 px-5 pb-5">
        <button
          onClick={() => fd.onCta("sticky")}
          className="mx-auto flex w-full max-w-md items-center justify-center gap-2 rounded-full bg-[#C8F169] px-6 py-4 text-[19px] font-bold text-[#14241C] shadow-[0_18px_40px_-18px_rgba(200,241,105,0.6)]"
        >
          {hero.ctaLabel}
          <span>→</span>
        </button>
      </div>
    </main>
  );
}
