"use client";

import { Fraunces, Karla } from "next/font/google";
import type { DesignProps } from "@/designs/types";
import { useFakeDoor } from "@/designs/shared/useFakeDoor";

// Direction: AXIS 04 — TEXTURE / DEPTH.
// Fraunces (soft optical serif with SOFT axis) for all display text — its
// slightly wonky, ink-pressed letterforms feel handmade and warm. Karla
// (humanist sans with a subtle quirkiness) for body — readable, light, never
// sterile. Together they read like something printed on textured paper.
// Cream ground, heavy grain overlay via SVG noise filter, layered radial
// gradients in terracotta and sage create atmospheric depth. Sections feel
// like different paper stocks: pressed cotton, worn linen, aged vellum.

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT"],
  style: ["normal", "italic"],
  display: "swap",
});

const karla = Karla({
  subsets: ["latin"],
  variable: "--font-karla",
  display: "swap",
});

// ─── Tiny reusable primitives ──────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] uppercase tracking-[0.36em] text-[#8a7a66] font-[family-name:var(--font-karla)]">
      {children}
    </p>
  );
}

function GrainLayer() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.055]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <filter id="grain-a17">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.72"
          numOctaves="4"
          stitchTiles="stitch"
        />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#grain-a17)" />
    </svg>
  );
}

// ─── Main component ────────────────────────────────────────────────────────

export default function TextureDepthDesign({ content, slug }: DesignProps) {
  const fd = useFakeDoor(slug);
  const { hero, problem, solution, pricing, testimonials, faq, fakedoor, footer } = content;

  return (
    <div
      className={`${fraunces.variable} ${karla.variable} font-[family-name:var(--font-karla)]`}
    >
      {/* Global grain + base */}
      <div
        className="relative min-h-screen antialiased selection:bg-[#B5754E] selection:text-[#F7F3EB]"
        style={{ background: "#F7F3EB", color: "#1F2A22" }}
      >
        {/* Page-wide grain */}
        <GrainLayer />

        {/* Ambient radial light — top left, terracotta warmth */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 55% at 10% 0%, rgba(181,117,78,0.13) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 90% 100%, rgba(106,122,111,0.10) 0%, transparent 65%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-md px-5 pb-40">

          {/* ══════════════════════════════════════════
              HERO
          ══════════════════════════════════════════ */}
          <header className="pt-8">
            {/* Brand lockup */}
            <div className="flex items-center justify-between">
              <span
                className="font-[family-name:var(--font-fraunces)] text-[18px] italic text-[#1F2A22]"
                style={{ fontVariationSettings: '"opsz" 36, "SOFT" 60' }}
              >
                {hero.brandLockup}
              </span>
              <span className="rounded-sm border border-[#1F2A22]/12 px-3 py-1 text-[9.5px] uppercase tracking-[0.28em] text-[#6a7a6f]">
                Legacy
              </span>
            </div>

            {/* Hero card — layered texture block */}
            <div
              className="relative mt-8 overflow-hidden rounded-2xl px-7 py-14"
              style={{
                background:
                  "linear-gradient(160deg, #2a3a2d 0%, #1F2A22 55%, #2d2015 100%)",
                boxShadow:
                  "0 40px 80px -30px rgba(31,42,34,0.65), inset 0 1px 0 rgba(247,243,235,0.06)",
              }}
            >
              {/* Grain inside hero card */}
              <svg
                aria-hidden
                className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.08]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <filter id="grain-hero-a17">
                  <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.65"
                    numOctaves="4"
                    stitchTiles="stitch"
                  />
                  <feColorMatrix type="saturate" values="0" />
                </filter>
                <rect width="100%" height="100%" filter="url(#grain-hero-a17)" />
              </svg>

              {/* Warm glow inside card */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(181,117,78,0.22) 0%, transparent 70%)",
                }}
              />

              {/* Decorative ring */}
              <div
                aria-hidden
                className="absolute right-6 top-6 h-20 w-20 rounded-full opacity-10"
                style={{
                  border: "1.5px solid #F7F3EB",
                }}
              />
              <div
                aria-hidden
                className="absolute right-10 top-10 h-10 w-10 rounded-full opacity-8"
                style={{
                  border: "1px solid #B5754E",
                }}
              />

              <div className="relative">
                <h1
                  className="text-balance font-[family-name:var(--font-fraunces)] text-[38px] leading-[1.06] tracking-[-0.01em] text-[#F7F3EB]"
                  style={{ fontVariationSettings: '"opsz" 72, "SOFT" 30' }}
                >
                  {hero.title}
                </h1>
                <p className="mt-6 text-[15.5px] leading-[1.68] text-[#c8bfad]">
                  {hero.subtitle}
                </p>

                <button
                  onClick={() => fd.onCta("hero")}
                  className="group mt-10 inline-flex items-center gap-3 rounded-xl bg-[#F7F3EB] px-7 py-4 text-[15px] font-semibold text-[#1F2A22] transition-all duration-300 hover:bg-white hover:shadow-[0_16px_36px_-16px_rgba(247,243,235,0.4)]"
                >
                  {hero.ctaLabel}
                  <span className="translate-x-0 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </button>

                <p className="mt-6 flex items-center gap-2 text-[12px] text-[#8a7a66]">
                  <span
                    className="inline-block h-1.5 w-1.5 rounded-full bg-[#B5754E]"
                    style={{ boxShadow: "0 0 5px rgba(181,117,78,0.6)" }}
                  />
                  {hero.reassuranceLine}
                </p>
              </div>
            </div>
          </header>

          {/* ══════════════════════════════════════════
              PROBLEM
          ══════════════════════════════════════════ */}
          <section className="mt-24">
            {/* Decorative divider */}
            <div className="mb-10 flex items-center gap-4">
              <div className="h-px flex-1 bg-[#1F2A22]/10" />
              <span className="h-1 w-1 rounded-full bg-[#B5754E] opacity-60" />
              <div className="h-px flex-1 bg-[#1F2A22]/10" />
            </div>

            <SectionLabel>The quiet problem</SectionLabel>

            <h2
              className="mt-4 text-balance font-[family-name:var(--font-fraunces)] text-[29px] leading-[1.15] tracking-[-0.01em] text-[#1F2A22]"
              style={{ fontVariationSettings: '"opsz" 48, "SOFT" 20' }}
            >
              {problem.title}
            </h2>

            {/* Textured callout block */}
            <div
              className="relative mt-7 overflow-hidden rounded-xl px-6 py-7"
              style={{
                background:
                  "linear-gradient(135deg, rgba(106,122,111,0.09) 0%, rgba(181,117,78,0.06) 100%)",
                border: "1px solid rgba(31,42,34,0.09)",
              }}
            >
              <svg
                aria-hidden
                className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.04]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <filter id="grain-pb-a17">
                  <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.8"
                    numOctaves="3"
                    stitchTiles="stitch"
                  />
                  <feColorMatrix type="saturate" values="0" />
                </filter>
                <rect width="100%" height="100%" filter="url(#grain-pb-a17)" />
              </svg>
              {/* Vertical accent rule */}
              <div className="absolute left-0 top-4 bottom-4 w-[3px] rounded-full bg-[#B5754E] opacity-50" />
              <p className="text-[15.5px] leading-[1.72] text-[#3a4a3f]">
                {problem.body}
              </p>
            </div>
          </section>

          {/* ══════════════════════════════════════════
              SOLUTION
          ══════════════════════════════════════════ */}
          <section className="mt-24">
            <div className="mb-10 flex items-center gap-4">
              <div className="h-px flex-1 bg-[#1F2A22]/10" />
              <span className="h-1 w-1 rounded-full bg-[#6a7a6f] opacity-50" />
              <div className="h-px flex-1 bg-[#1F2A22]/10" />
            </div>

            <SectionLabel>{solution.intro}</SectionLabel>
            <p
              className="mt-2 font-[family-name:var(--font-fraunces)] text-[16px] italic text-[#6a7a6f]"
              style={{ fontVariationSettings: '"opsz" 24, "SOFT" 50' }}
            >
              three quiet steps
            </p>

            <ol className="mt-10 space-y-5">
              {solution.steps.map((s, i) => (
                <li
                  key={i}
                  className="relative overflow-hidden rounded-2xl px-6 py-7"
                  style={{
                    background:
                      i === 1
                        ? "linear-gradient(145deg, #2a3a2d 0%, #1F2A22 100%)"
                        : "linear-gradient(145deg, rgba(247,243,235,0.9) 0%, rgba(240,234,222,0.7) 100%)",
                    border:
                      i === 1
                        ? "1px solid rgba(247,243,235,0.06)"
                        : "1px solid rgba(31,42,34,0.08)",
                    boxShadow:
                      i === 1
                        ? "0 24px 48px -24px rgba(31,42,34,0.5)"
                        : "0 8px 32px -16px rgba(31,42,34,0.18)",
                  }}
                >
                  {/* Grain in each step */}
                  <svg
                    aria-hidden
                    className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.045]"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <filter id={`grain-step-a17-${i}`}>
                      <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.75"
                        numOctaves="3"
                        stitchTiles="stitch"
                      />
                      <feColorMatrix type="saturate" values="0" />
                    </filter>
                    <rect width="100%" height="100%" filter={`url(#grain-step-a17-${i})`} />
                  </svg>

                  <div className="relative">
                    {/* Step number */}
                    <span
                      className="font-[family-name:var(--font-fraunces)] text-[48px] leading-none italic"
                      style={{
                        fontVariationSettings: '"opsz" 72, "SOFT" 40',
                        color: i === 1 ? "rgba(181,117,78,0.55)" : "rgba(31,42,34,0.12)",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3
                      className="mt-3 font-[family-name:var(--font-fraunces)] text-[20px] leading-[1.22] tracking-[-0.005em]"
                      style={{
                        fontVariationSettings: '"opsz" 36, "SOFT" 20',
                        color: i === 1 ? "#F7F3EB" : "#1F2A22",
                      }}
                    >
                      {s.title}
                    </h3>
                    <p
                      className="mt-3 text-[14.5px] leading-[1.68]"
                      style={{ color: i === 1 ? "#b8ae9e" : "#4a5a4f" }}
                    >
                      {s.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* ══════════════════════════════════════════
              PRICING
          ══════════════════════════════════════════ */}
          <section
            ref={fd.pricingRef as React.RefObject<HTMLElement>}
            className="mt-24"
          >
            <div className="mb-10 flex items-center gap-4">
              <div className="h-px flex-1 bg-[#1F2A22]/10" />
              <span className="h-1 w-1 rounded-full bg-[#B5754E] opacity-60" />
              <div className="h-px flex-1 bg-[#1F2A22]/10" />
            </div>

            <SectionLabel>Membership</SectionLabel>
            <h2
              className="mt-4 text-balance font-[family-name:var(--font-fraunces)] text-[27px] leading-[1.15] tracking-[-0.01em] text-[#1F2A22]"
              style={{ fontVariationSettings: '"opsz" 48, "SOFT" 20' }}
            >
              {pricing.title}
            </h2>
            <p className="mt-4 text-[15px] leading-[1.68] text-[#4a5a4f]">
              {pricing.subtitle}
            </p>

            <div className="mt-8 space-y-4">
              {pricing.plans.map((plan, i) => (
                <div
                  key={i}
                  className="relative overflow-hidden rounded-2xl px-6 py-7"
                  style={
                    plan.highlight
                      ? {
                          background:
                            "linear-gradient(150deg, #B5754E 0%, #96573a 100%)",
                          boxShadow:
                            "0 28px 56px -24px rgba(181,117,78,0.55), inset 0 1px 0 rgba(247,243,235,0.15)",
                        }
                      : {
                          background:
                            "linear-gradient(145deg, rgba(247,243,235,0.85) 0%, rgba(236,228,215,0.7) 100%)",
                          border: "1px solid rgba(31,42,34,0.09)",
                          boxShadow: "0 6px 24px -12px rgba(31,42,34,0.15)",
                        }
                  }
                >
                  {/* Grain */}
                  <svg
                    aria-hidden
                    className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.06]"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <filter id={`grain-plan-a17-${i}`}>
                      <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.7"
                        numOctaves="3"
                        stitchTiles="stitch"
                      />
                      <feColorMatrix type="saturate" values="0" />
                    </filter>
                    <rect width="100%" height="100%" filter={`url(#grain-plan-a17-${i})`} />
                  </svg>

                  {plan.highlight && (
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0"
                      style={{
                        background:
                          "radial-gradient(ellipse 80% 60% at 80% 110%, rgba(255,255,255,0.12) 0%, transparent 70%)",
                      }}
                    />
                  )}

                  {plan.highlight && (
                    <span
                      className="relative mb-5 inline-block rounded-sm px-3 py-1 text-[9px] uppercase tracking-[0.3em] font-[family-name:var(--font-karla)]"
                      style={{
                        background: "rgba(31,42,34,0.25)",
                        color: "#f7e4d4",
                      }}
                    >
                      Best value
                    </span>
                  )}

                  <div className="relative">
                    <p
                      className="font-[family-name:var(--font-fraunces)] text-[13px] italic"
                      style={{
                        fontVariationSettings: '"opsz" 18, "SOFT" 50',
                        color: plan.highlight ? "rgba(247,227,210,0.85)" : "#6a7a6f",
                      }}
                    >
                      {plan.name}
                    </p>
                    <p
                      className="mt-1 font-[family-name:var(--font-fraunces)] text-[42px] leading-none tracking-[-0.02em]"
                      style={{
                        fontVariationSettings: '"opsz" 72, "SOFT" 10',
                        color: plan.highlight ? "#F7F3EB" : "#1F2A22",
                      }}
                    >
                      {plan.price}
                    </p>
                    <p
                      className="mt-2 text-[13px]"
                      style={{ color: plan.highlight ? "rgba(247,227,210,0.7)" : "#6a7a6f" }}
                    >
                      {plan.descriptor}
                    </p>
                    <button
                      onClick={() => fd.onCta(`pricing-${plan.name.toLowerCase()}`)}
                      className="mt-6 w-full rounded-xl px-6 py-3.5 text-[15px] font-semibold transition-all duration-200"
                      style={
                        plan.highlight
                          ? {
                              background: "#F7F3EB",
                              color: "#1F2A22",
                              boxShadow: "0 8px 20px -8px rgba(31,42,34,0.25)",
                            }
                          : {
                              background: "#1F2A22",
                              color: "#F7F3EB",
                            }
                      }
                    >
                      {plan.ctaLabel}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Included features */}
            <div
              className="relative mt-6 overflow-hidden rounded-2xl px-6 py-7"
              style={{
                background:
                  "linear-gradient(135deg, rgba(106,122,111,0.07) 0%, rgba(247,243,235,0.6) 100%)",
                border: "1px solid rgba(31,42,34,0.08)",
              }}
            >
              <svg
                aria-hidden
                className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.035]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <filter id="grain-incl-a17">
                  <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.78"
                    numOctaves="3"
                    stitchTiles="stitch"
                  />
                  <feColorMatrix type="saturate" values="0" />
                </filter>
                <rect width="100%" height="100%" filter="url(#grain-incl-a17)" />
              </svg>
              <p className="relative text-[10px] uppercase tracking-[0.3em] text-[#8a7a66] font-[family-name:var(--font-karla)]">
                Everything included
              </p>
              <ul className="relative mt-5 space-y-3">
                {pricing.included.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-[14.5px] text-[#3a4a3f]">
                    <span
                      className="flex h-5 w-5 flex-none items-center justify-center rounded-sm text-[10px] text-[#B5754E]"
                      style={{ background: "rgba(181,117,78,0.12)" }}
                    >
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-5 text-center text-[12.5px] leading-[1.6] text-[#6a7a6f]">
              {pricing.scarcityLine}
            </p>
          </section>

          {/* ══════════════════════════════════════════
              TESTIMONIALS
          ══════════════════════════════════════════ */}
          <section className="mt-24">
            <div className="mb-10 flex items-center gap-4">
              <div className="h-px flex-1 bg-[#1F2A22]/10" />
              <span className="h-1 w-1 rounded-full bg-[#6a7a6f] opacity-50" />
              <div className="h-px flex-1 bg-[#1F2A22]/10" />
            </div>

            <SectionLabel>From those who started</SectionLabel>

            <div className="mt-8 space-y-5">
              {testimonials.map((t, i) => (
                <figure
                  key={i}
                  className="relative overflow-hidden rounded-2xl px-6 py-7"
                  style={{
                    background:
                      i % 2 === 0
                        ? "linear-gradient(145deg, rgba(247,243,235,0.9) 0%, rgba(237,230,218,0.65) 100%)"
                        : "linear-gradient(145deg, rgba(240,233,221,0.75) 0%, rgba(247,243,235,0.5) 100%)",
                    border: "1px solid rgba(31,42,34,0.08)",
                    boxShadow: "0 6px 28px -14px rgba(31,42,34,0.18)",
                  }}
                >
                  <svg
                    aria-hidden
                    className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.04]"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <filter id={`grain-testi-a17-${i}`}>
                      <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.72"
                        numOctaves="3"
                        stitchTiles="stitch"
                      />
                      <feColorMatrix type="saturate" values="0" />
                    </filter>
                    <rect width="100%" height="100%" filter={`url(#grain-testi-a17-${i})`} />
                  </svg>

                  {/* Large decorative quote mark */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute right-4 top-2 font-[family-name:var(--font-fraunces)] text-[80px] leading-none text-[#B5754E] opacity-[0.12]"
                    style={{ fontVariationSettings: '"opsz" 72, "SOFT" 0' }}
                  >
                    &rdquo;
                  </span>

                  <div className="relative">
                    <blockquote
                      className="font-[family-name:var(--font-fraunces)] text-[18px] leading-[1.5] tracking-[-0.005em] text-[#1F2A22]"
                      style={{ fontVariationSettings: '"opsz" 36, "SOFT" 30' }}
                    >
                      {t.quote}
                    </blockquote>
                    <figcaption className="mt-5 flex items-center gap-2">
                      <span
                        className="h-px flex-1 opacity-25"
                        style={{ background: "#1F2A22" }}
                      />
                      <span className="text-[11px] uppercase tracking-[0.2em] text-[#6a7a6f] font-[family-name:var(--font-karla)]">
                        {t.name} · {t.age}
                      </span>
                    </figcaption>
                  </div>
                </figure>
              ))}
            </div>
          </section>

          {/* ══════════════════════════════════════════
              FAQ
          ══════════════════════════════════════════ */}
          <section className="mt-24">
            <div className="mb-10 flex items-center gap-4">
              <div className="h-px flex-1 bg-[#1F2A22]/10" />
              <span className="h-1 w-1 rounded-full bg-[#B5754E] opacity-60" />
              <div className="h-px flex-1 bg-[#1F2A22]/10" />
            </div>

            <SectionLabel>Questions you might have</SectionLabel>

            <div className="mt-8 space-y-3">
              {faq.map((item, i) => (
                <details
                  key={i}
                  className="group relative overflow-hidden rounded-xl open:rounded-2xl"
                  style={{
                    background:
                      "linear-gradient(145deg, rgba(247,243,235,0.88) 0%, rgba(238,231,219,0.6) 100%)",
                    border: "1px solid rgba(31,42,34,0.08)",
                  }}
                >
                  <svg
                    aria-hidden
                    className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.04]"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <filter id={`grain-faq-a17-${i}`}>
                      <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.76"
                        numOctaves="3"
                        stitchTiles="stitch"
                      />
                      <feColorMatrix type="saturate" values="0" />
                    </filter>
                    <rect width="100%" height="100%" filter={`url(#grain-faq-a17-${i})`} />
                  </svg>
                  <summary className="relative flex cursor-pointer list-none items-start justify-between gap-4 px-5 py-5">
                    <span
                      className="font-[family-name:var(--font-fraunces)] text-[16.5px] leading-[1.28] text-[#1F2A22]"
                      style={{ fontVariationSettings: '"opsz" 24, "SOFT" 20' }}
                    >
                      {item.q}
                    </span>
                    <span
                      className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-sm text-[20px] leading-none text-[#B5754E] transition-transform duration-300 group-open:rotate-45"
                      style={{ background: "rgba(181,117,78,0.1)" }}
                    >
                      +
                    </span>
                  </summary>
                  <div className="relative px-5 pb-5">
                    <div
                      className="mb-4 h-px"
                      style={{ background: "rgba(31,42,34,0.08)" }}
                    />
                    <p className="text-[14px] leading-[1.7] text-[#4a5a4f]">
                      {item.a}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* ══════════════════════════════════════════
              FINAL CTA
          ══════════════════════════════════════════ */}
          <section className="mt-24">
            <div
              className="relative overflow-hidden rounded-2xl px-7 py-14 text-center"
              style={{
                background:
                  "linear-gradient(155deg, #2d3d30 0%, #1F2A22 50%, #2a1f14 100%)",
                boxShadow:
                  "0 40px 80px -30px rgba(31,42,34,0.6), inset 0 1px 0 rgba(247,243,235,0.05)",
              }}
            >
              {/* Grain */}
              <svg
                aria-hidden
                className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.07]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <filter id="grain-fcta-a17">
                  <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.65"
                    numOctaves="4"
                    stitchTiles="stitch"
                  />
                  <feColorMatrix type="saturate" values="0" />
                </filter>
                <rect width="100%" height="100%" filter="url(#grain-fcta-a17)" />
              </svg>
              {/* Terracotta bloom */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse 60% 40% at 50% 110%, rgba(181,117,78,0.25) 0%, transparent 65%)",
                }}
              />

              <div className="relative">
                <h2
                  className="text-balance font-[family-name:var(--font-fraunces)] text-[32px] leading-[1.1] tracking-[-0.01em] text-[#F7F3EB]"
                  style={{ fontVariationSettings: '"opsz" 72, "SOFT" 25' }}
                >
                  {content.finalCta.headline}
                </h2>
                <button
                  onClick={() => fd.onCta("final")}
                  className="group mt-10 inline-flex items-center gap-3 rounded-xl bg-[#F7F3EB] px-8 py-4 text-[15px] font-semibold text-[#1F2A22] transition-all duration-300 hover:bg-white"
                >
                  {content.finalCta.ctaLabel}
                  <span className="translate-x-0 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </button>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════════════
              FAKE-DOOR WAITLIST
          ══════════════════════════════════════════ */}
          {fd.showWaitlist && (
            <section
              id="waitlist"
              className="relative mt-10 overflow-hidden rounded-2xl px-6 py-10"
              style={{
                background:
                  "linear-gradient(145deg, rgba(247,243,235,0.95) 0%, rgba(238,231,219,0.8) 100%)",
                border: "1px solid rgba(31,42,34,0.1)",
                boxShadow: "0 20px 48px -20px rgba(31,42,34,0.2)",
              }}
            >
              <svg
                aria-hidden
                className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.04]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <filter id="grain-fd-a17">
                  <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.72"
                    numOctaves="3"
                    stitchTiles="stitch"
                  />
                  <feColorMatrix type="saturate" values="0" />
                </filter>
                <rect width="100%" height="100%" filter="url(#grain-fd-a17)" />
              </svg>

              {fd.state === "done" ? (
                <div className="relative text-center">
                  <p
                    className="font-[family-name:var(--font-fraunces)] text-[26px] leading-tight text-[#1F2A22]"
                    style={{ fontVariationSettings: '"opsz" 48, "SOFT" 30' }}
                  >
                    {content.confirmation.title}
                  </p>
                  <p className="mx-auto mt-5 max-w-[34ch] text-[14.5px] leading-[1.68] text-[#4a5a4f]">
                    {content.confirmation.body}
                  </p>
                </div>
              ) : (
                <div className="relative">
                  <p
                    className="text-center font-[family-name:var(--font-fraunces)] text-[27px] italic leading-[1.14] tracking-[-0.01em] text-[#1F2A22]"
                    style={{ fontVariationSettings: '"opsz" 48, "SOFT" 40' }}
                  >
                    {fakedoor.title}
                  </p>
                  <p className="mx-auto mt-4 max-w-[34ch] text-center text-[14.5px] leading-[1.68] text-[#4a5a4f]">
                    {fakedoor.body}
                  </p>
                  <form onSubmit={fd.submit} className="mt-7 flex flex-col gap-3">
                    <input
                      type="email"
                      required
                      value={fd.email}
                      onChange={(e) => fd.setEmail(e.target.value)}
                      placeholder={fakedoor.emailPlaceholder}
                      className="w-full rounded-xl border bg-[#F7F3EB] px-5 py-4 text-[15px] text-[#1F2A22] placeholder:text-[#9c8a6d] focus:outline-none focus:ring-2 focus:ring-[#B5754E]/40"
                      style={{ borderColor: "rgba(31,42,34,0.15)" }}
                    />
                    <button
                      type="submit"
                      disabled={fd.state === "loading"}
                      className="w-full rounded-xl bg-[#1F2A22] px-6 py-4 text-[15px] font-semibold text-[#F7F3EB] transition-opacity disabled:opacity-60"
                    >
                      {fd.state === "loading" ? "..." : fakedoor.submitLabel}
                    </button>
                    {fd.state === "error" && (
                      <p className="text-center text-[13px] text-[#B5754E]">
                        Something went wrong. Try again.
                      </p>
                    )}
                  </form>
                  <p className="mt-5 text-center text-[12px] text-[#6a7a6f]">
                    {fakedoor.privacyLine}
                  </p>
                </div>
              )}
            </section>
          )}

          {/* ══════════════════════════════════════════
              FOOTER
          ══════════════════════════════════════════ */}
          <footer className="mt-20 text-center">
            <div className="mb-6 flex items-center gap-4">
              <div className="h-px flex-1 bg-[#1F2A22]/08" />
              <span className="h-1 w-1 rounded-full bg-[#B5754E] opacity-40" />
              <div className="h-px flex-1 bg-[#1F2A22]/08" />
            </div>
            <p
              className="font-[family-name:var(--font-fraunces)] text-[15px] italic text-[#4a5a4f]"
              style={{ fontVariationSettings: '"opsz" 24, "SOFT" 40' }}
            >
              {footer.lines[0]}
            </p>
            <p className="mt-3 text-[10.5px] uppercase tracking-[0.26em] text-[#9c8a6d] font-[family-name:var(--font-karla)]">
              {footer.lines.slice(1).join("  ·  ")}
            </p>
          </footer>
        </div>

        {/* ── Sticky CTA bar ── */}
        <div
          className="fixed inset-x-0 bottom-0 z-40 px-5 pb-5 pt-2"
          style={{
            background:
              "linear-gradient(to top, rgba(247,243,235,0.98) 60%, rgba(247,243,235,0))",
          }}
        >
          <button
            onClick={() => fd.onCta("sticky")}
            className="mx-auto flex w-full max-w-md items-center justify-center gap-2 rounded-xl bg-[#1F2A22] px-6 py-4 text-[15px] font-semibold text-[#F7F3EB]"
            style={{
              boxShadow: "0 20px 48px -16px rgba(31,42,34,0.75)",
            }}
          >
            {hero.ctaLabel}
            <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
