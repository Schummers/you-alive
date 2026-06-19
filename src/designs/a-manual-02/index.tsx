"use client";

import Image from "next/image";
import { Fraunces, Quicksand } from "next/font/google";
import type { DesignProps } from "@/designs/types";
import { useFakeDoor } from "@/designs/shared/useFakeDoor";
import { useScrollReveal } from "@/designs/shared/useScrollReveal";
import { CountUp } from "@/designs/shared/CountUp";

// ─────────────────────────────────────────────────────────────────────────────
// MANUAL · 02 — "Forme organique"
// Worked by hand with Jonathan. Same a-taste-08 body (organic warmth) but the
// hero photo sits inside an organic blob frame instead of full-bleed. Clean
// (text-free) photo. "You Alive?" wordmark left, NOTHING top-right (the old
// "Kept warm, kept safe" pill is gone). Headline + subtitle + CTA centred under
// the blob. Dusty-rose accent alongside terracotta, scroll-reveal apparitions,
// no sticky CTA.
// ─────────────────────────────────────────────────────────────────────────────
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT"],
  style: ["normal", "italic"],
  display: "swap",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  display: "swap",
});

const CREAM = "#F4EFE6";
const FOREST = "#1F2A22";
const TERRA = "#B5754E";

export default function ManualOrganicDesign({ content, slug }: DesignProps) {
  const fd = useFakeDoor(slug);
  useScrollReveal();
  const { hero, problem, solution, pricing, testimonials, faq, fakedoor, footer } =
    content;

  // Signature moment #1 — H1 split into clauses for a line-by-line reveal.
  const titleLines = hero.title.split(/(?<=\.)\s+/).filter(Boolean);
  // Signature moment #2 — count up the first number in the reassurance line.
  const reMatch = hero.reassuranceLine.match(/^(.*?)([\d.,]+)(.*)$/);

  const wordmark = (color: string) => (
    <span
      className="font-[family-name:var(--font-fraunces)] text-[20px] italic tracking-[-0.01em]"
      style={{ color, fontVariationSettings: '"opsz" 40, "SOFT" 60' }}
    >
      {hero.brandLockup.replace("?", "")}
      <span style={{ color: TERRA }}>?</span>
    </span>
  );

  return (
    <main
      className={`${fraunces.variable} ${quicksand.variable} font-[family-name:var(--font-quicksand)] relative min-h-screen overflow-hidden antialiased`}
      style={{ backgroundColor: CREAM, color: FOREST }}
    >
      {/* Soft warm gradient washes + organic blobs. */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="ya-float absolute -left-24 -top-16 h-72 w-72 rounded-[58%_42%_55%_45%/55%_48%_52%_45%] opacity-70 blur-2xl"
          style={{
            background:
              "radial-gradient(circle at 35% 35%, rgba(181,117,78,0.30), rgba(181,117,78,0) 70%)",
          }}
        />
        <div
          className="ya-float-slow absolute right-[-30%] top-[34%] h-80 w-80 rounded-[42%_58%_46%_54%/52%_44%_56%_48%] opacity-60 blur-2xl"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(31,42,34,0.14), rgba(31,42,34,0) 72%)",
          }}
        />
        <div
          className="ya-float absolute bottom-[6%] left-[-20%] h-72 w-72 rounded-[54%_46%_40%_60%/48%_56%_44%_52%] opacity-60 blur-2xl"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(181,117,78,0.22), rgba(181,117,78,0) 70%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-md px-6 pb-28">
        {/* ───────── HERO — organic blob ───────── */}
        <header className="pt-7">
          <div className="ya-hero ya-hero-1 flex items-center justify-between px-1">
            {wordmark(FOREST)}
            {/* nothing top-right */}
          </div>

          {/* Hero photo in an organic soft-blob frame. */}
          <div
            className="ya-hero ya-hero-2 mt-7 overflow-hidden bg-[#1F2A22]/[0.04] p-2 shadow-[0_34px_80px_-46px_rgba(31,42,34,0.55)]"
            style={{ borderRadius: "44% 56% 52% 48% / 40% 42% 58% 60%" }}
          >
            <div
              className="relative aspect-[4/5] w-full overflow-hidden"
              style={{ borderRadius: "44% 56% 52% 48% / 40% 42% 58% 60%" }}
            >
              <Image
                src="/designs/a/hero-clean.jpeg"
                alt="Resting in a hammock, looking out through pines toward a distant coastal town"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 450px"
                className="ya-kenburns object-cover object-center"
              />
            </div>
          </div>

          <section className="px-1 pt-10 text-center">
            <h1
              className="text-balance font-[family-name:var(--font-fraunces)] text-[34px] leading-[1.1] tracking-[-0.01em]"
              style={{ fontVariationSettings: '"opsz" 80, "SOFT" 80', fontWeight: 480 }}
            >
              {titleLines.map((line, i) => (
                <span
                  key={i}
                  className="ya-hero block"
                  style={{ animationDelay: `${0.36 + i * 0.16}s` }}
                >
                  {line}
                </span>
              ))}
            </h1>
            <p
              className="ya-hero ya-hero-4 mx-auto mt-6 max-w-[32ch] text-[16px] leading-[1.7]"
              style={{ color: "#4a5a4f" }}
            >
              {hero.subtitle}
            </p>

            <button
              onClick={() => fd.onCta("hero")}
              className="ya-hero ya-hero-5 group mt-9 inline-flex items-center justify-center gap-2.5 rounded-full px-9 py-4 text-[15px] font-semibold transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-[2px] active:scale-[0.98]"
              style={{ backgroundColor: FOREST, color: CREAM }}
            >
              {hero.ctaLabel}
              <span
                className="flex h-7 w-7 items-center justify-center rounded-full transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5"
                style={{ backgroundColor: "rgba(244,239,230,0.15)" }}
              >
                →
              </span>
            </button>

            <p
              className="ya-hero ya-hero-6 mt-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12.5px]"
              style={{ backgroundColor: "rgba(181,117,78,0.10)", color: "#8a5e3f" }}
            >
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: TERRA }} />
              {reMatch ? (
                <span>
                  {reMatch[1]}
                  <CountUp end={parseInt(reMatch[2].replace(/[.,]/g, ""), 10)} />
                  {reMatch[3]}
                </span>
              ) : (
                hero.reassuranceLine
              )}
            </p>
          </section>
        </header>

        {/* ───────── PROBLEM ───────── */}
        <section className="mt-28 text-center">
          <h2
            className="mx-auto max-w-[20ch] text-balance font-[family-name:var(--font-fraunces)] text-[27px] leading-[1.2] tracking-[-0.01em]"
            style={{ fontVariationSettings: '"opsz" 48, "SOFT" 90', fontWeight: 460 }}
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
        <section className="mt-28">
          <div className="text-center">
            <p className="font-[family-name:var(--font-fraunces)] text-[22px] italic leading-tight">
              {solution.intro}
            </p>
          </div>

          <ol className="mt-10 space-y-6">
            {solution.steps.map((s, i) => (
              <li
                key={i}
                data-reveal
                style={{
                  borderRadius: "38px 38px 38px 12px",
                  transitionDelay: `${i * 90}ms`,
                  backgroundColor: "rgba(255,255,255,0.55)",
                }}
                className="relative px-7 py-8 shadow-[0_22px_56px_-44px_rgba(31,42,34,0.6)] ring-1 ring-[#1F2A22]/[0.05] backdrop-blur-[2px]"
              >
                <span
                  className="flex h-12 w-12 items-center justify-center font-[family-name:var(--font-fraunces)] text-[22px] italic"
                  style={{
                    borderRadius: "52% 48% 56% 44% / 50% 56% 44% 50%",
                    backgroundColor: "rgba(181,117,78,0.14)",
                    color: TERRA,
                  }}
                >
                  {i + 1}
                </span>
                <h3
                  className="mt-6 font-[family-name:var(--font-fraunces)] text-[20px] leading-[1.28] tracking-[-0.005em]"
                  style={{ fontVariationSettings: '"opsz" 36, "SOFT" 90', fontWeight: 500 }}
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
        <section ref={fd.pricingRef} className="mt-28 text-center">
          <h2
            className="mx-auto max-w-[20ch] text-balance font-[family-name:var(--font-fraunces)] text-[26px] leading-[1.2] tracking-[-0.01em]"
            style={{ fontVariationSettings: '"opsz" 48, "SOFT" 90', fontWeight: 460 }}
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
                style={{
                  borderRadius: plan.highlight
                    ? "40px 40px 16px 40px"
                    : "40px 16px 40px 40px",
                }}
                className={
                  plan.highlight
                    ? "relative bg-gradient-to-br from-[#26342b] to-[#1F2A22] px-7 py-8 text-[#F4EFE6] shadow-[0_30px_64px_-38px_rgba(31,42,34,0.8)]"
                    : "relative bg-white/55 px-7 py-8 text-[#1F2A22] ring-1 ring-[#1F2A22]/[0.06] backdrop-blur-[2px]"
                }
              >
                {plan.highlight && (
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-[10px] uppercase tracking-[0.18em] text-[#F4EFE6]"
                    style={{ backgroundColor: TERRA }}
                  >
                    Most chosen
                  </span>
                )}
                <p
                  className={`font-[family-name:var(--font-fraunces)] text-[16px] italic ${
                    plan.highlight ? "text-[#d9c4a0]" : "text-[#6a7a6f]"
                  }`}
                >
                  {plan.name}
                </p>
                <p
                  className="mt-2 font-[family-name:var(--font-fraunces)] text-[40px] leading-none tracking-[-0.01em]"
                  style={{ fontVariationSettings: '"opsz" 72, "SOFT" 70', fontWeight: 540 }}
                >
                  {plan.price}
                </p>
                <p
                  className={`mt-3 text-[13px] ${
                    plan.highlight ? "text-[#d9c4a0]" : "text-[#6a7a6f]"
                  }`}
                >
                  {plan.descriptor}
                </p>
                <button
                  onClick={() => fd.onCta(`pricing-${plan.name.toLowerCase()}`)}
                  className={
                    plan.highlight
                      ? "mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#F4EFE6] px-7 py-3.5 text-[15px] font-semibold text-[#1F2A22] transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-[1px] active:scale-[0.98]"
                      : "mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1F2A22] px-7 py-3.5 text-[15px] font-semibold text-[#F4EFE6] transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-[1px] active:scale-[0.98]"
                  }
                >
                  {plan.ctaLabel}
                  <span>→</span>
                </button>
              </div>
            ))}
          </div>

          <div
            className="mt-10 bg-white/45 px-7 py-8 text-left ring-1 ring-[#1F2A22]/[0.05] backdrop-blur-[2px]"
            style={{ borderRadius: "40px" }}
          >
            <p className="text-center font-[family-name:var(--font-fraunces)] text-[18px] italic">
              Everything included
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-y-3.5">
              {pricing.included.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-[14.5px]"
                  style={{ color: "#3a4a3f" }}
                >
                  <span
                    className="flex h-5 w-5 flex-none items-center justify-center text-[11px]"
                    style={{
                      borderRadius: "56% 44% 50% 50% / 50% 50% 44% 56%",
                      backgroundColor: "rgba(181,117,78,0.16)",
                      color: TERRA,
                    }}
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
            style={{ color: "#6a7a6f" }}
          >
            {pricing.scarcityLine}
          </p>
        </section>

        {/* ───────── TESTIMONIALS ───────── */}
        <section className="mt-28">
          <p className="mb-8 text-center font-[family-name:var(--font-fraunces)] text-[22px] italic">
            From those who started
          </p>

          <div className="space-y-6">
            {testimonials.map((t, i) => (
              <figure
                key={i}
                data-reveal
                style={{
                  transitionDelay: `${i * 90}ms`,
                  borderRadius:
                    i % 2 === 0 ? "40px 16px 40px 40px" : "16px 40px 40px 40px",
                  backgroundColor: "rgba(255,255,255,0.55)",
                }}
                className="px-7 py-8 ring-1 ring-[#1F2A22]/[0.05] backdrop-blur-[2px]"
              >
                <span
                  aria-hidden
                  className="block font-[family-name:var(--font-fraunces)] text-[44px] leading-none"
                  style={{
                    color: "rgba(181,117,78,0.45)",
                    fontVariationSettings: '"opsz" 72, "SOFT" 100',
                  }}
                >
                  &ldquo;
                </span>
                <blockquote
                  className="mt-1 font-[family-name:var(--font-fraunces)] text-[18.5px] leading-[1.55] tracking-[-0.005em]"
                  style={{ fontVariationSettings: '"opsz" 36, "SOFT" 90', fontWeight: 460 }}
                >
                  {t.quote}
                </blockquote>
                <figcaption className="mt-5 text-[13px]" style={{ color: "#6a7a6f" }}>
                  {t.name}, {t.age}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ───────── FAQ ───────── */}
        <section className="mt-28">
          <p className="mb-8 text-center font-[family-name:var(--font-fraunces)] text-[22px] italic">
            Questions you might have
          </p>
          <div className="space-y-4">
            {faq.map((item, i) => (
              <details
                key={i}
                style={{ borderRadius: "28px" }}
                className="group bg-white/55 px-7 py-5 ring-1 ring-[#1F2A22]/[0.05] backdrop-blur-[2px] open:bg-white/70"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                  <span
                    className="font-[family-name:var(--font-fraunces)] text-[17px] leading-[1.35] tracking-[-0.005em]"
                    style={{ fontVariationSettings: '"opsz" 36, "SOFT" 90', fontWeight: 500 }}
                  >
                    {item.q}
                  </span>
                  <span
                    className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center text-[18px] leading-none transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-open:rotate-45"
                    style={{
                      borderRadius: "54% 46% 50% 50% / 50% 50% 46% 54%",
                      backgroundColor: "rgba(181,117,78,0.12)",
                      color: TERRA,
                    }}
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
          className="relative mt-28 overflow-hidden bg-gradient-to-br from-[#26342b] to-[#1F2A22] px-8 py-14 text-center text-[#F4EFE6]"
          style={{ borderRadius: "52px 52px 52px 20px" }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 opacity-50 blur-2xl"
            style={{
              background:
                "radial-gradient(circle, rgba(181,117,78,0.45), rgba(181,117,78,0) 70%)",
              borderRadius: "50%",
            }}
          />
          <h2
            className="relative mx-auto max-w-[16ch] text-balance font-[family-name:var(--font-fraunces)] text-[30px] leading-[1.15] tracking-[-0.01em]"
            style={{ fontVariationSettings: '"opsz" 72, "SOFT" 80', fontWeight: 480 }}
          >
            {content.finalCta.headline}
          </h2>
          <button
            onClick={() => fd.onCta("final")}
            className="group relative mt-9 inline-flex items-center justify-center gap-2.5 rounded-full bg-[#F4EFE6] px-9 py-4 text-[15px] font-semibold text-[#1F2A22] transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-[2px] active:scale-[0.98]"
          >
            {content.finalCta.ctaLabel}
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1F2A22]/10 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5">
              →
            </span>
          </button>
        </section>

        {/* ───────── FAKE-DOOR ───────── */}
        {fd.showWaitlist && (
          <section
            id="waitlist"
            className="mt-12 bg-white/60 px-7 py-10 ring-1 ring-[#1F2A22]/[0.06] backdrop-blur-[2px]"
            style={{ borderRadius: "44px" }}
          >
            {fd.state === "done" ? (
              <div className="text-center">
                <p
                  className="font-[family-name:var(--font-fraunces)] text-[24px] leading-tight"
                  style={{ fontVariationSettings: '"opsz" 48, "SOFT" 90', fontWeight: 480 }}
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
                  className="text-center font-[family-name:var(--font-fraunces)] text-[26px] italic leading-[1.18] tracking-[-0.01em]"
                  style={{ fontVariationSettings: '"opsz" 48, "SOFT" 100', fontWeight: 460 }}
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
                  <label htmlFor="ya-email" className="sr-only">
                    {fakedoor.emailPlaceholder}
                  </label>
                  <input
                    id="ya-email"
                    type="email"
                    required
                    value={fd.email}
                    onChange={(e) => fd.setEmail(e.target.value)}
                    placeholder={fakedoor.emailPlaceholder}
                    className="w-full rounded-full border border-[#1F2A22]/15 bg-[#F4EFE6] px-6 py-4 text-[15px] text-[#1F2A22] placeholder:text-[#9c8a6d] focus:border-[#1F2A22] focus:outline-none focus:ring-2 focus:ring-[#B5754E]/40"
                  />
                  <button
                    type="submit"
                    disabled={fd.state === "loading"}
                    className="w-full rounded-full bg-[#1F2A22] px-6 py-4 text-[15px] font-semibold text-[#F4EFE6] transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-[1px] active:scale-[0.98] disabled:opacity-60"
                  >
                    {fd.state === "loading" ? "…" : fakedoor.submitLabel}
                  </button>
                  {fd.state === "error" && (
                    <p className="text-center text-[13px]" style={{ color: TERRA }}>
                      Something went wrong. Try again.
                    </p>
                  )}
                </form>
                <p className="mt-5 text-center text-[12px]" style={{ color: "#6a7a6f" }}>
                  {fakedoor.privacyLine}
                </p>
              </>
            )}
          </section>
        )}

        {/* ───────── FOOTER ───────── */}
        <footer className="mt-24 text-center">
          <p className="mb-3">{wordmark(FOREST)}</p>
          <p
            className="font-[family-name:var(--font-fraunces)] text-[16px] italic"
            style={{ fontVariationSettings: '"opsz" 36, "SOFT" 90' }}
          >
            {footer.lines[0]}
          </p>
          <p className="mt-4 text-[12px]" style={{ color: "#9c8a6d" }}>
            {footer.lines.slice(1).join("  ·  ")}
          </p>
        </footer>
      </div>

      <style>{`
        @keyframes yaFloat {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(10px, -16px, 0) scale(1.05); }
        }
        @keyframes yaHeroRise {
          from { opacity: 0; transform: translateY(22px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes yaKenburns {
          from { transform: scale(1.04); }
          to { transform: scale(1.1); }
        }
        .ya-float { animation: yaFloat 14s ease-in-out infinite; }
        .ya-float-slow { animation: yaFloat 20s ease-in-out infinite; }
        .ya-kenburns { animation: yaKenburns 20s ease-out both; }

        .ya-hero { animation: yaHeroRise 0.9s cubic-bezier(0.16,1,0.3,1) both; }
        .ya-hero-1 { animation-delay: 0.05s; }
        .ya-hero-2 { animation-delay: 0.16s; }
        .ya-hero-3 { animation-delay: 0.36s; }
        .ya-hero-4 { animation-delay: 0.48s; }
        .ya-hero-5 { animation-delay: 0.60s; }
        .ya-hero-6 { animation-delay: 0.72s; }

        [data-reveal] { opacity: 0; transform: translateY(22px); }
        [data-reveal][data-revealed="true"] {
          opacity: 1;
          transform: none;
          transition: opacity 0.8s cubic-bezier(0.16,1,0.3,1),
                      transform 0.8s cubic-bezier(0.16,1,0.3,1);
        }

        @media (prefers-reduced-motion: reduce) {
          .ya-float, .ya-float-slow, .ya-kenburns, .ya-hero { animation: none !important; }
          [data-reveal] { opacity: 1; transform: none; }
        }
      `}</style>
    </main>
  );
}
