"use client";

import Image from "next/image";
import { Fraunces, Hanken_Grotesk } from "next/font/google";
import type { DesignProps } from "@/designs/types";
import { useFakeDoor } from "@/designs/shared/useFakeDoor";

// AXIS: very airy + very rounded, light, minimal. Maximum whitespace, full-radius
// soft shapes, calm reading. The clean hero photo is overlaid directly with a
// soft cream scrim so the headline rests inside the scene. Cream lifted one notch
// brighter for an airier, lighter feel. Terracotta is the single locked accent.
//
// Type: Fraunces (display) is allowed here — the brief bans it as a *default*
// elsewhere, but the locked dials authorize this styling; it carries the tender,
// editorial-nature voice with high optical contrast. Hanken Grotesk (rounded
// humanist sans) keeps the body soft and legible.
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT", "WONK"],
  style: ["normal", "italic"],
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

export default function AiryRoundedTasteDesign({ content, slug }: DesignProps) {
  const fd = useFakeDoor(slug);
  const { hero, problem, solution, pricing, testimonials, faq, fakedoor, footer } = content;

  const cream = "#F8F4EC";
  const forest = "#1F2A22";
  const terracotta = "#B5754E";

  return (
    <main
      className={`${fraunces.variable} ${hanken.variable} font-[family-name:var(--font-hanken)] relative min-h-screen antialiased`}
      style={{ backgroundColor: cream, color: forest }}
    >
      <style>{`
        @keyframes ytFade {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .yt-rise { animation: ytFade 0.9s cubic-bezier(0.22,1,0.36,1) both; }
        @media (prefers-reduced-motion: reduce) {
          .yt-rise { animation: none; }
        }
      `}</style>

      <div className="relative mx-auto max-w-md px-6 pb-40">
        {/* ───────── HERO ───────── */}
        <header className="pt-7">
          <div className="flex items-center justify-between px-1">
            <span
              className="font-[family-name:var(--font-fraunces)] text-[18px] italic"
              style={{ fontVariationSettings: '"opsz" 40, "SOFT" 60' }}
            >
              {hero.brandLockup}
            </span>
            <span
              className="rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.24em]"
              style={{ color: "#7a8a7f", backgroundColor: "rgba(31,42,34,0.045)" }}
            >
              Legacy, gently kept
            </span>
          </div>

          {/* Hero photo with the headline resting inside, soft scrim, full radius */}
          <div className="yt-rise relative mt-7 overflow-hidden rounded-[40px] shadow-[0_36px_80px_-48px_rgba(31,42,34,0.5)]">
            <div className="relative aspect-[3/4] w-full">
              <Image
                src="/designs/a/hero-clean.jpeg"
                alt="Resting in a hammock, looking out through pines toward a distant coastal town"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 450px"
                className="object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(31,42,34,0.62) 0%, rgba(31,42,34,0.18) 42%, rgba(31,42,34,0) 70%)",
                }}
              />
              <div className="absolute inset-x-0 bottom-0 p-7 text-center">
                <h1
                  className="text-balance font-[family-name:var(--font-fraunces)] text-[33px] leading-[1.08] tracking-[-0.01em]"
                  style={{ color: cream, fontVariationSettings: '"opsz" 144, "SOFT" 50' }}
                >
                  {hero.title}
                </h1>
              </div>
            </div>
          </div>

          <section className="px-1 pt-9 text-center">
            <p
              className="mx-auto max-w-[33ch] text-[16px] leading-[1.7]"
              style={{ color: "#4a5a4f" }}
            >
              {hero.subtitle}
            </p>

            <button
              onClick={() => fd.onCta("hero")}
              className="group mt-9 inline-flex items-center justify-center gap-2.5 rounded-full px-10 py-4 text-[15px] font-medium transition-transform duration-300 hover:-translate-y-[2px]"
              style={{ backgroundColor: forest, color: cream }}
            >
              {hero.ctaLabel}
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
            </button>

            <p
              className="mt-7 inline-flex items-center gap-2 rounded-full px-5 py-2 text-[12.5px]"
              style={{ color: "#7a8a7f", backgroundColor: "rgba(31,42,34,0.04)" }}
            >
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: terracotta }} />
              {hero.reassuranceLine}
            </p>
          </section>
        </header>

        {/* ───────── PROBLEM ───────── */}
        <section className="mt-36 text-center">
          <p
            className="mb-7 text-[10px] uppercase tracking-[0.36em]"
            style={{ color: "#a89274" }}
          >
            The quiet problem
          </p>
          <h2
            className="mx-auto max-w-[20ch] text-balance font-[family-name:var(--font-fraunces)] text-[27px] leading-[1.2] tracking-[-0.01em]"
            style={{ fontVariationSettings: '"opsz" 72, "SOFT" 50' }}
          >
            {problem.title}
          </h2>
          <p
            className="mx-auto mt-7 max-w-[34ch] text-[15.5px] leading-[1.75]"
            style={{ color: "#4a5a4f" }}
          >
            {problem.body}
          </p>
        </section>

        {/* ───────── SOLUTION ───────── */}
        <section className="mt-36">
          <div className="text-center">
            <p
              className="mb-4 text-[10px] uppercase tracking-[0.36em]"
              style={{ color: "#a89274" }}
            >
              {solution.intro}
            </p>
            <p
              className="font-[family-name:var(--font-fraunces)] text-[15px] italic"
              style={{ color: "#7a8a7f", fontVariationSettings: '"opsz" 40' }}
            >
              three quiet steps
            </p>
          </div>

          <ol className="mt-12 space-y-7">
            {solution.steps.map((s, i) => (
              <li
                key={i}
                className="rounded-[36px] px-8 py-9"
                style={{
                  backgroundColor: "rgba(255,255,255,0.6)",
                  boxShadow: "0 22px 60px -48px rgba(31,42,34,0.55)",
                }}
              >
                <span
                  className="flex h-14 w-14 items-center justify-center rounded-full font-[family-name:var(--font-fraunces)] text-[24px] italic"
                  style={{
                    backgroundColor: "rgba(181,117,78,0.12)",
                    color: terracotta,
                    fontVariationSettings: '"opsz" 40',
                  }}
                >
                  {i + 1}
                </span>
                <h3
                  className="mt-6 font-[family-name:var(--font-fraunces)] text-[20px] leading-[1.28] tracking-[-0.005em]"
                  style={{ fontVariationSettings: '"opsz" 60, "SOFT" 40' }}
                >
                  {s.title}
                </h3>
                <p className="mt-3 text-[14.5px] leading-[1.7]" style={{ color: "#4a5a4f" }}>
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* ───────── PRICING ───────── */}
        <section ref={fd.pricingRef} className="mt-36 text-center">
          <p
            className="mb-5 text-[10px] uppercase tracking-[0.36em]"
            style={{ color: "#a89274" }}
          >
            Membership
          </p>
          <h2
            className="mx-auto max-w-[20ch] text-balance font-[family-name:var(--font-fraunces)] text-[26px] leading-[1.2] tracking-[-0.01em]"
            style={{ fontVariationSettings: '"opsz" 72, "SOFT" 50' }}
          >
            {pricing.title}
          </h2>
          <p
            className="mx-auto mt-5 max-w-[34ch] text-[15px] leading-[1.7]"
            style={{ color: "#4a5a4f" }}
          >
            {pricing.subtitle}
          </p>

          <div className="mt-10 space-y-5">
            {pricing.plans.map((plan, i) => (
              <div
                key={i}
                className="relative rounded-[36px] px-8 py-9"
                style={
                  plan.highlight
                    ? {
                        backgroundColor: forest,
                        color: cream,
                        boxShadow: "0 32px 70px -44px rgba(31,42,34,0.75)",
                      }
                    : {
                        backgroundColor: "rgba(255,255,255,0.6)",
                        color: forest,
                        boxShadow: "0 22px 60px -52px rgba(31,42,34,0.5)",
                      }
                }
              >
                {plan.highlight && (
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-[10px] uppercase tracking-[0.2em]"
                    style={{ backgroundColor: terracotta, color: cream }}
                  >
                    Most chosen
                  </span>
                )}
                <p
                  className="font-[family-name:var(--font-fraunces)] text-[15px] italic"
                  style={{
                    color: plan.highlight ? "#cdbb98" : "#7a8a7f",
                    fontVariationSettings: '"opsz" 40',
                  }}
                >
                  {plan.name}
                </p>
                <p
                  className="mt-2 font-[family-name:var(--font-fraunces)] text-[40px] leading-none tracking-[-0.01em]"
                  style={{ fontVariationSettings: '"opsz" 144, "SOFT" 40' }}
                >
                  {plan.price}
                </p>
                <p
                  className="mt-3 text-[13px]"
                  style={{ color: plan.highlight ? "#cdbb98" : "#7a8a7f" }}
                >
                  {plan.descriptor}
                </p>
                <button
                  onClick={() => fd.onCta(`pricing-${plan.name.toLowerCase()}`)}
                  className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-medium transition-transform duration-300 hover:-translate-y-[1px]"
                  style={
                    plan.highlight
                      ? { backgroundColor: cream, color: forest }
                      : { backgroundColor: forest, color: cream }
                  }
                >
                  {plan.ctaLabel}
                  <span>→</span>
                </button>
              </div>
            ))}
          </div>

          <div
            className="mt-10 rounded-[36px] px-8 py-9 text-left"
            style={{ backgroundColor: "rgba(255,255,255,0.5)" }}
          >
            <p
              className="text-center text-[10px] uppercase tracking-[0.32em]"
              style={{ color: "#a89274" }}
            >
              Everything included
            </p>
            <ul className="mt-7 grid grid-cols-1 gap-y-4">
              {pricing.included.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-[14.5px]" style={{ color: "#3a4a3f" }}>
                  <span
                    className="flex h-6 w-6 flex-none items-center justify-center rounded-full text-[11px]"
                    style={{ backgroundColor: "rgba(181,117,78,0.15)", color: terracotta }}
                  >
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <p
            className="mx-auto mt-7 max-w-[34ch] text-[12.5px] leading-[1.65]"
            style={{ color: "#7a8a7f" }}
          >
            {pricing.scarcityLine}
          </p>
        </section>

        {/* ───────── TESTIMONIALS ───────── */}
        <section className="mt-36">
          <p
            className="mb-9 text-center text-[10px] uppercase tracking-[0.36em]"
            style={{ color: "#a89274" }}
          >
            From those who started
          </p>

          <div className="space-y-6">
            {testimonials.map((t, i) => (
              <figure
                key={i}
                className="rounded-[36px] px-8 py-9"
                style={{ backgroundColor: "rgba(255,255,255,0.6)" }}
              >
                <span
                  aria-hidden
                  className="block font-[family-name:var(--font-fraunces)] text-[46px] leading-none"
                  style={{ color: "rgba(181,117,78,0.45)", fontVariationSettings: '"opsz" 144' }}
                >
                  &ldquo;
                </span>
                <blockquote
                  className="mt-1 font-[family-name:var(--font-fraunces)] text-[18.5px] leading-[1.55] tracking-[-0.005em]"
                  style={{ fontVariationSettings: '"opsz" 60, "SOFT" 40' }}
                >
                  {t.quote}
                </blockquote>
                <figcaption
                  className="mt-5 text-[12px] uppercase tracking-[0.18em]"
                  style={{ color: "#7a8a7f" }}
                >
                  {t.name} · {t.age}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ───────── FAQ ───────── */}
        <section className="mt-36">
          <p
            className="mb-9 text-center text-[10px] uppercase tracking-[0.36em]"
            style={{ color: "#a89274" }}
          >
            Questions you might have
          </p>
          <div className="space-y-4">
            {faq.map((item, i) => (
              <details
                key={i}
                className="group rounded-[30px] px-8 py-6"
                style={{ backgroundColor: "rgba(255,255,255,0.6)" }}
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                  <span
                    className="font-[family-name:var(--font-fraunces)] text-[17px] leading-[1.35] tracking-[-0.005em]"
                    style={{ fontVariationSettings: '"opsz" 60, "SOFT" 40' }}
                  >
                    {item.q}
                  </span>
                  <span
                    className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-full text-[18px] leading-none transition-transform duration-300 group-open:rotate-45"
                    style={{ backgroundColor: "rgba(181,117,78,0.12)", color: terracotta }}
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 text-[14px] leading-[1.7]" style={{ color: "#4a5a4f" }}>
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* ───────── FINAL CTA ───────── */}
        <section
          className="mt-36 rounded-[40px] px-8 py-16 text-center"
          style={{ backgroundColor: forest, color: cream }}
        >
          <h2
            className="mx-auto max-w-[16ch] text-balance font-[family-name:var(--font-fraunces)] text-[31px] leading-[1.12] tracking-[-0.01em]"
            style={{ fontVariationSettings: '"opsz" 144, "SOFT" 50' }}
          >
            {content.finalCta.headline}
          </h2>
          <button
            onClick={() => fd.onCta("final")}
            className="group mt-9 inline-flex items-center justify-center gap-2.5 rounded-full px-10 py-4 text-[15px] font-medium transition-transform duration-300 hover:-translate-y-[2px]"
            style={{ backgroundColor: cream, color: forest }}
          >
            {content.finalCta.ctaLabel}
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
          </button>
        </section>

        {/* ───────── FAKE-DOOR ───────── */}
        {fd.showWaitlist && (
          <section
            id="waitlist"
            className="mt-12 rounded-[40px] px-8 py-12"
            style={{ backgroundColor: "rgba(255,255,255,0.65)" }}
          >
            {fd.state === "done" ? (
              <div className="text-center">
                <p
                  className="font-[family-name:var(--font-fraunces)] text-[24px] leading-tight"
                  style={{ fontVariationSettings: '"opsz" 72, "SOFT" 50' }}
                >
                  {content.confirmation.title}
                </p>
                <p
                  className="mx-auto mt-4 max-w-[34ch] text-[14.5px] leading-[1.7]"
                  style={{ color: "#4a5a4f" }}
                >
                  {content.confirmation.body}
                </p>
              </div>
            ) : (
              <>
                <p
                  className="text-center font-[family-name:var(--font-fraunces)] text-[26px] italic leading-[1.15] tracking-[-0.01em]"
                  style={{ fontVariationSettings: '"opsz" 72, "SOFT" 50' }}
                >
                  {fakedoor.title}
                </p>
                <p
                  className="mx-auto mt-4 max-w-[34ch] text-center text-[14.5px] leading-[1.7]"
                  style={{ color: "#4a5a4f" }}
                >
                  {fakedoor.body}
                </p>
                <form onSubmit={fd.submit} className="mt-7 flex flex-col gap-3">
                  <input
                    type="email"
                    required
                    value={fd.email}
                    onChange={(e) => fd.setEmail(e.target.value)}
                    placeholder={fakedoor.emailPlaceholder}
                    className="w-full rounded-full px-6 py-4 text-[15px] focus:outline-none"
                    style={{
                      backgroundColor: cream,
                      border: "1px solid rgba(31,42,34,0.15)",
                      color: forest,
                    }}
                  />
                  <button
                    type="submit"
                    disabled={fd.state === "loading"}
                    className="w-full rounded-full px-6 py-4 text-[15px] font-medium disabled:opacity-60"
                    style={{ backgroundColor: forest, color: cream }}
                  >
                    {fd.state === "loading" ? "..." : fakedoor.submitLabel}
                  </button>
                  {fd.state === "error" && (
                    <p className="text-center text-[13px]" style={{ color: terracotta }}>
                      Something went wrong. Try again.
                    </p>
                  )}
                </form>
                <p className="mt-5 text-center text-[12px]" style={{ color: "#7a8a7f" }}>
                  {fakedoor.privacyLine}
                </p>
              </>
            )}
          </section>
        )}

        {/* ───────── FOOTER ───────── */}
        <footer className="mt-28 text-center">
          <p
            className="font-[family-name:var(--font-fraunces)] text-[16px] italic"
            style={{ fontVariationSettings: '"opsz" 40, "SOFT" 50' }}
          >
            {footer.lines[0]}
          </p>
          <p
            className="mt-4 text-[11px] uppercase tracking-[0.24em]"
            style={{ color: "#a89274" }}
          >
            {footer.lines.slice(1).join("  ·  ")}
          </p>
        </footer>
      </div>

      {/* Sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 px-6 pb-5">
        <button
          onClick={() => fd.onCta("sticky")}
          className="mx-auto flex w-full max-w-md items-center justify-center gap-2 rounded-full px-6 py-4 text-[15px] font-medium shadow-[0_24px_50px_-22px_rgba(31,42,34,0.85)]"
          style={{ backgroundColor: forest, color: cream }}
        >
          {hero.ctaLabel}
          <span>→</span>
        </button>
      </div>
    </main>
  );
}
