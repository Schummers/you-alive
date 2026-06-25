"use client";

import Image from "next/image";
import { Fraunces, Mulish } from "next/font/google";
import type { DesignProps } from "@/designs/types";
import { useFakeDoor } from "@/designs/shared/useFakeDoor";

// Direction: TEXTURE / DEPTH. A dreamlike, luminous reading of the brand built
// from layered soft shadows, lavender gradient washes, a fine grain overlay and
// recurring aura/halo + dotted motifs. Fraunces (soft "old-style" optical serif,
// gentle and a touch wonky) carries the contemplative voice; Mulish (a quiet,
// refined rounded sans) keeps the body airy. Everything stays inside the
// ink-indigo / lavender / periwinkle family — depth from light, never from dark.
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT"],
  style: ["normal", "italic"],
  display: "swap",
});

const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-mulish",
  display: "swap",
});

export default function TextureDepthDesign({ content, slug }: DesignProps) {
  const fd = useFakeDoor(slug);
  const { hero, problem, solution, pricing, testimonials, faq, fakedoor, footer } = content;

  // Reusable soft grain + dotted aura definitions, injected once.
  const atmosphere = (
    <svg className="pointer-events-none fixed inset-0 -z-10 h-full w-full opacity-[0.5]" aria-hidden>
      <defs>
        <filter id="b04-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <radialGradient id="b04-halo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#F3ECFF" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#EBE6FF" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" filter="url(#b04-grain)" opacity="0.06" />
    </svg>
  );

  return (
    <main
      className={`${fraunces.variable} ${mulish.variable} font-[family-name:var(--font-mulish)] relative min-h-screen overflow-hidden text-[#26235A] antialiased selection:bg-[#26235A] selection:text-[#F7F4FF]`}
      style={{
        background:
          "radial-gradient(120% 80% at 12% -5%, #F3ECFF 0%, transparent 55%), radial-gradient(100% 70% at 95% 8%, #D6E4FF 0%, transparent 50%), radial-gradient(130% 90% at 50% 110%, #EBE6FF 0%, transparent 60%), linear-gradient(180deg, #F7F4FF 0%, #EBE6FF 45%, #F3ECFF 100%)",
      }}
    >
      {atmosphere}

      <div className="relative mx-auto max-w-md px-5 pb-40">
        {/* ───────── NAV ───────── */}
        <header className="flex items-center justify-between px-1 pt-7">
          <span className="font-[family-name:var(--font-fraunces)] text-[18px] italic text-[#26235A]">
            {hero.brandLockup}
          </span>
          <span className="rounded-full border border-[#5A5690]/25 bg-white/40 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-[#5A5690] backdrop-blur-sm">
            Quietly prepared
          </span>
        </header>

        {/* ───────── HERO ───────── */}
        <section className="relative pt-7">
          {/* aura behind the photo */}
          <div
            className="pointer-events-none absolute -inset-6 -z-10 blur-2xl"
            style={{ background: "radial-gradient(60% 50% at 50% 40%, rgba(214,228,255,0.85) 0%, transparent 70%)" }}
            aria-hidden
          />
          <div className="relative overflow-hidden rounded-[40px] shadow-[0_2px_2px_rgba(255,255,255,0.6),0_40px_90px_-50px_rgba(38,35,90,0.55),0_18px_40px_-30px_rgba(90,86,144,0.45)] ring-1 ring-white/50">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/designs/b/hero.jpeg"
                alt=""
                fill
                priority
                sizes="(max-width: 768px) 100vw, 448px"
                className="object-cover"
              />
              {/* dotted halo motif, top-right */}
              <svg className="absolute right-4 top-4 h-20 w-20 opacity-40" viewBox="0 0 80 80" fill="none" aria-hidden>
                <circle cx="40" cy="40" r="38" stroke="#26235A" strokeOpacity="0.5" strokeDasharray="1 7" strokeWidth="1.5" />
                <circle cx="40" cy="40" r="26" stroke="#26235A" strokeOpacity="0.35" strokeDasharray="1 7" strokeWidth="1.5" />
              </svg>
            </div>
          </div>

          <div className="px-1 pt-10 text-center">
            <h1
              className="text-balance font-[family-name:var(--font-fraunces)] text-[36px] leading-[1.06] tracking-[-0.015em] text-[#26235A]"
              style={{ fontVariationSettings: '"opsz" 144, "SOFT" 60' }}
            >
              {hero.title}
            </h1>
            <p className="mx-auto mt-6 max-w-[33ch] text-[16px] leading-[1.68] text-[#5A5690]">
              {hero.subtitle}
            </p>

            <button
              onClick={() => fd.onCta("hero")}
              className="group relative mt-9 inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full bg-[#26235A] px-9 py-4 text-[15px] font-semibold text-[#F7F4FF] shadow-[0_18px_40px_-18px_rgba(38,35,90,0.85)] transition-transform duration-300 hover:-translate-y-[2px]"
            >
              <span
                className="pointer-events-none absolute inset-0 opacity-60"
                style={{ background: "radial-gradient(80% 120% at 50% -20%, rgba(214,228,255,0.4) 0%, transparent 60%)" }}
                aria-hidden
              />
              <span className="relative">{hero.ctaLabel}</span>
              <span className="relative transition-transform group-hover:translate-x-0.5">→</span>
            </button>

            <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/45 px-4 py-1.5 text-[12.5px] text-[#5A5690] ring-1 ring-white/60 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#5A5690]" />
              {hero.reassuranceLine}
            </p>
          </div>
        </section>

        {/* ───────── PROBLEM ───────── */}
        <section className="mt-28 text-center">
          <p className="mb-6 text-[10px] uppercase tracking-[0.34em] text-[#8b86bf]">
            The quiet problem
          </p>
          <h2
            className="mx-auto max-w-[20ch] text-balance font-[family-name:var(--font-fraunces)] text-[27px] leading-[1.2] tracking-[-0.01em] text-[#26235A]"
            style={{ fontVariationSettings: '"opsz" 80, "SOFT" 80' }}
          >
            {problem.title}
          </h2>
          <p className="mx-auto mt-7 max-w-[34ch] text-[15.5px] leading-[1.72] text-[#5A5690]">
            {problem.body}
          </p>
        </section>

        {/* ───────── SOLUTION ───────── */}
        <section className="mt-28">
          <div className="text-center">
            <p className="mb-3 text-[10px] uppercase tracking-[0.34em] text-[#8b86bf]">
              {solution.intro}
            </p>
            <p className="font-[family-name:var(--font-fraunces)] text-[15px] italic text-[#5A5690]">
              three gentle steps
            </p>
          </div>

          <ol className="relative mt-12 space-y-6">
            {solution.steps.map((s, i) => (
              <li
                key={i}
                className="relative overflow-hidden rounded-[32px] bg-white/55 px-7 py-8 shadow-[0_1px_1px_rgba(255,255,255,0.7),0_24px_60px_-44px_rgba(38,35,90,0.65)] ring-1 ring-white/60 backdrop-blur-sm"
              >
                <span
                  className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full opacity-70 blur-2xl"
                  style={{ background: "radial-gradient(circle, rgba(214,228,255,0.9) 0%, transparent 70%)" }}
                  aria-hidden
                />
                <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#EBE6FF] to-[#D6E4FF] font-[family-name:var(--font-fraunces)] text-[22px] italic text-[#26235A] shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),0_8px_18px_-10px_rgba(38,35,90,0.5)]">
                  {i + 1}
                </span>
                <h3
                  className="relative mt-6 font-[family-name:var(--font-fraunces)] text-[20px] leading-[1.28] tracking-[-0.005em] text-[#26235A]"
                  style={{ fontVariationSettings: '"opsz" 56, "SOFT" 60' }}
                >
                  {s.title}
                </h3>
                <p className="relative mt-3 text-[14.5px] leading-[1.68] text-[#5A5690]">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* ───────── PRICING ───────── */}
        <section ref={fd.pricingRef} className="mt-28 text-center">
          <p className="mb-5 text-[10px] uppercase tracking-[0.34em] text-[#8b86bf]">
            Membership
          </p>
          <h2
            className="mx-auto max-w-[20ch] text-balance font-[family-name:var(--font-fraunces)] text-[26px] leading-[1.2] tracking-[-0.01em] text-[#26235A]"
            style={{ fontVariationSettings: '"opsz" 72, "SOFT" 80' }}
          >
            {pricing.title}
          </h2>
          <p className="mx-auto mt-5 max-w-[34ch] text-[15px] leading-[1.68] text-[#5A5690]">
            {pricing.subtitle}
          </p>

          <div className="mt-10 space-y-5">
            {pricing.plans.map((plan, i) => (
              <div
                key={i}
                className={
                  plan.highlight
                    ? "relative overflow-hidden rounded-[34px] px-7 py-9 text-[#F7F4FF] shadow-[0_30px_70px_-40px_rgba(38,35,90,0.9)] ring-1 ring-white/10"
                    : "relative overflow-hidden rounded-[34px] bg-white/55 px-7 py-9 text-[#26235A] shadow-[0_20px_50px_-44px_rgba(38,35,90,0.6)] ring-1 ring-white/60 backdrop-blur-sm"
                }
                style={
                  plan.highlight
                    ? { background: "radial-gradient(120% 90% at 20% 0%, #393577 0%, #26235A 60%)" }
                    : undefined
                }
              >
                {plan.highlight && (
                  <>
                    <span
                      className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full opacity-60 blur-2xl"
                      style={{ background: "radial-gradient(circle, rgba(214,228,255,0.7) 0%, transparent 70%)" }}
                      aria-hidden
                    />
                    <span className="relative inline-block rounded-full bg-white/15 px-4 py-1 text-[10px] uppercase tracking-[0.2em] text-[#D6E4FF] ring-1 ring-white/20">
                      Most chosen
                    </span>
                  </>
                )}
                <p
                  className={`relative ${plan.highlight ? "mt-4" : ""} font-[family-name:var(--font-fraunces)] text-[15px] italic ${
                    plan.highlight ? "text-[#cdd6ff]" : "text-[#5A5690]"
                  }`}
                >
                  {plan.name}
                </p>
                <p
                  className="relative mt-2 font-[family-name:var(--font-fraunces)] text-[40px] leading-none tracking-[-0.01em]"
                  style={{ fontVariationSettings: '"opsz" 144, "SOFT" 40' }}
                >
                  {plan.price}
                </p>
                <p
                  className={`relative mt-3 text-[13px] ${
                    plan.highlight ? "text-[#b8c4f0]" : "text-[#8b86bf]"
                  }`}
                >
                  {plan.descriptor}
                </p>
                <button
                  onClick={() => fd.onCta(`pricing-${plan.name.toLowerCase()}`)}
                  className={
                    plan.highlight
                      ? "relative mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#F7F4FF] px-7 py-3.5 text-[15px] font-semibold text-[#26235A] shadow-[0_14px_30px_-16px_rgba(0,0,0,0.5)] transition hover:bg-white"
                      : "relative mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#26235A] px-7 py-3.5 text-[15px] font-semibold text-[#F7F4FF] transition hover:bg-[#322e69]"
                  }
                >
                  {plan.ctaLabel}
                  <span>→</span>
                </button>
              </div>
            ))}
          </div>

          <div className="relative mt-10 overflow-hidden rounded-[34px] bg-white/45 px-7 py-9 text-left shadow-[0_20px_50px_-46px_rgba(38,35,90,0.5)] ring-1 ring-white/60 backdrop-blur-sm">
            <span
              className="pointer-events-none absolute -left-10 bottom-0 h-40 w-40 rounded-full opacity-60 blur-2xl"
              style={{ background: "radial-gradient(circle, rgba(243,236,255,0.95) 0%, transparent 70%)" }}
              aria-hidden
            />
            <p className="relative text-center text-[10px] uppercase tracking-[0.3em] text-[#8b86bf]">
              Everything included
            </p>
            <ul className="relative mt-6 grid grid-cols-1 gap-y-3.5">
              {pricing.included.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-[14.5px] text-[#3c3877]">
                  <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gradient-to-br from-[#EBE6FF] to-[#D6E4FF] text-[11px] text-[#26235A] shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)]">
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <p className="mx-auto mt-7 max-w-[34ch] text-[12.5px] leading-[1.6] text-[#8b86bf]">
            {pricing.scarcityLine}
          </p>
        </section>

        {/* ───────── TESTIMONIALS ───────── */}
        <section className="mt-28">
          <p className="mb-8 text-center text-[10px] uppercase tracking-[0.34em] text-[#8b86bf]">
            From those who started
          </p>

          <div className="space-y-6">
            {testimonials.map((t, i) => (
              <figure
                key={i}
                className="relative overflow-hidden rounded-[32px] bg-white/55 px-7 py-8 shadow-[0_1px_1px_rgba(255,255,255,0.7),0_22px_56px_-46px_rgba(38,35,90,0.6)] ring-1 ring-white/60 backdrop-blur-sm"
              >
                <span
                  aria-hidden
                  className="block font-[family-name:var(--font-fraunces)] text-[48px] leading-none text-[#5A5690]/35"
                  style={{ fontVariationSettings: '"opsz" 144, "SOFT" 0' }}
                >
                  &ldquo;
                </span>
                <blockquote
                  className="mt-1 font-[family-name:var(--font-fraunces)] text-[18.5px] leading-[1.5] tracking-[-0.005em] text-[#26235A]"
                  style={{ fontVariationSettings: '"opsz" 48, "SOFT" 50' }}
                >
                  {t.quote}
                </blockquote>
                <figcaption className="mt-5 text-[12px] uppercase tracking-[0.18em] text-[#5A5690]">
                  {t.name} · {t.age}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ───────── FAQ ───────── */}
        <section className="mt-28">
          <p className="mb-8 text-center text-[10px] uppercase tracking-[0.34em] text-[#8b86bf]">
            Questions you might have
          </p>
          <div className="space-y-4">
            {faq.map((item, i) => (
              <details
                key={i}
                className="group rounded-[28px] bg-white/55 px-7 py-5 shadow-[0_16px_40px_-44px_rgba(38,35,90,0.5)] ring-1 ring-white/60 backdrop-blur-sm open:bg-white/70"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                  <span
                    className="font-[family-name:var(--font-fraunces)] text-[17px] leading-[1.32] tracking-[-0.005em] text-[#26235A]"
                    style={{ fontVariationSettings: '"opsz" 40, "SOFT" 60' }}
                  >
                    {item.q}
                  </span>
                  <span className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-full bg-gradient-to-br from-[#EBE6FF] to-[#D6E4FF] text-[18px] leading-none text-[#26235A] shadow-[inset_0_1px_1px_rgba(255,255,255,0.9)] transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-[14px] leading-[1.68] text-[#5A5690]">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* ───────── FINAL CTA ───────── */}
        <section
          className="relative mt-28 overflow-hidden rounded-[40px] px-8 py-16 text-center text-[#F7F4FF] shadow-[0_40px_90px_-50px_rgba(38,35,90,0.9)]"
          style={{ background: "radial-gradient(130% 100% at 50% 0%, #393577 0%, #26235A 65%)" }}
        >
          <span
            className="pointer-events-none absolute left-1/2 top-0 h-48 w-48 -translate-x-1/2 -translate-y-1/4 rounded-full opacity-50 blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(214,228,255,0.7) 0%, transparent 70%)" }}
            aria-hidden
          />
          <svg className="pointer-events-none absolute -bottom-6 right-6 h-24 w-24 opacity-30" viewBox="0 0 80 80" fill="none" aria-hidden>
            <circle cx="40" cy="40" r="38" stroke="#D6E4FF" strokeDasharray="1 7" strokeWidth="1.5" />
            <circle cx="40" cy="40" r="24" stroke="#D6E4FF" strokeDasharray="1 7" strokeWidth="1.5" />
          </svg>
          <h2
            className="relative mx-auto max-w-[16ch] text-balance font-[family-name:var(--font-fraunces)] text-[31px] leading-[1.12] tracking-[-0.01em]"
            style={{ fontVariationSettings: '"opsz" 144, "SOFT" 60' }}
          >
            {content.finalCta.headline}
          </h2>
          <button
            onClick={() => fd.onCta("final")}
            className="relative mt-9 inline-flex items-center justify-center gap-2.5 rounded-full bg-[#F7F4FF] px-9 py-4 text-[15px] font-semibold text-[#26235A] shadow-[0_18px_40px_-18px_rgba(0,0,0,0.5)] transition hover:bg-white"
          >
            {content.finalCta.ctaLabel}
            <span>→</span>
          </button>
        </section>

        {/* ───────── FAKE-DOOR ───────── */}
        {fd.showWaitlist && (
          <section
            id="waitlist"
            className="relative mt-12 overflow-hidden rounded-[36px] bg-white/60 px-7 py-10 shadow-[0_24px_60px_-50px_rgba(38,35,90,0.6)] ring-1 ring-white/60 backdrop-blur-sm"
          >
            <span
              className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full opacity-60 blur-3xl"
              style={{ background: "radial-gradient(circle, rgba(214,228,255,0.85) 0%, transparent 70%)" }}
              aria-hidden
            />
            {fd.state === "done" ? (
              <div className="relative text-center">
                <p
                  className="font-[family-name:var(--font-fraunces)] text-[24px] leading-tight text-[#26235A]"
                  style={{ fontVariationSettings: '"opsz" 72, "SOFT" 60' }}
                >
                  {content.confirmation.title}
                </p>
                <p className="mx-auto mt-4 max-w-[34ch] text-[14.5px] leading-[1.68] text-[#5A5690]">
                  {content.confirmation.body}
                </p>
              </div>
            ) : (
              <div className="relative">
                <p
                  className="text-center font-[family-name:var(--font-fraunces)] text-[26px] italic leading-[1.15] tracking-[-0.01em] text-[#26235A]"
                  style={{ fontVariationSettings: '"opsz" 72, "SOFT" 80' }}
                >
                  {fakedoor.title}
                </p>
                <p className="mx-auto mt-4 max-w-[34ch] text-center text-[14.5px] leading-[1.68] text-[#5A5690]">
                  {fakedoor.body}
                </p>
                <form onSubmit={fd.submit} className="mt-7 flex flex-col gap-3">
                  <input
                    type="email"
                    required
                    value={fd.email}
                    onChange={(e) => fd.setEmail(e.target.value)}
                    placeholder={fakedoor.emailPlaceholder}
                    className="w-full rounded-full border border-[#5A5690]/25 bg-white/70 px-6 py-4 text-[15px] text-[#26235A] placeholder:text-[#8b86bf] focus:border-[#26235A] focus:outline-none"
                  />
                  <button
                    type="submit"
                    disabled={fd.state === "loading"}
                    className="w-full rounded-full bg-[#26235A] px-6 py-4 text-[15px] font-semibold text-[#F7F4FF] shadow-[0_16px_36px_-18px_rgba(38,35,90,0.85)] disabled:opacity-60"
                  >
                    {fd.state === "loading" ? "..." : fakedoor.submitLabel}
                  </button>
                  {fd.state === "error" && (
                    <p className="text-center text-[13px] text-[#9a3b6e]">
                      Something went wrong. Try again.
                    </p>
                  )}
                </form>
                <p className="mt-5 text-center text-[12px] text-[#8b86bf]">
                  {fakedoor.privacyLine}
                </p>
              </div>
            )}
          </section>
        )}

        {/* ───────── FOOTER ───────── */}
        <footer className="mt-24 text-center">
          <p
            className="font-[family-name:var(--font-fraunces)] text-[16px] italic text-[#26235A]"
            style={{ fontVariationSettings: '"opsz" 40, "SOFT" 60' }}
          >
            {footer.lines[0]}
          </p>
          <p className="mt-4 text-[11px] uppercase tracking-[0.24em] text-[#8b86bf]">
            {footer.lines.slice(1).join("  ·  ")}
          </p>
        </footer>
      </div>

      {/* Sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 px-5 pb-5">
        <button
          onClick={() => fd.onCta("sticky")}
          className="mx-auto flex w-full max-w-md items-center justify-center gap-2 rounded-full bg-[#26235A] px-6 py-4 text-[15px] font-semibold text-[#F7F4FF] shadow-[0_22px_48px_-20px_rgba(38,35,90,0.9)] ring-1 ring-white/10"
        >
          {hero.ctaLabel}
          <span>→</span>
        </button>
      </div>
    </main>
  );
}
