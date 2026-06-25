"use client";

// b-fd-09 · AXIS 04 — TEXTURE / DEPTH
// Direction: luminous manuscript. Lavender-periwinkle mesh bleeds through every
// section. Fraunces (wobbly optical serif, wistful) as display voice; Lora as
// the contemplative body companion. Grain SVG filter baked into the root bg.
// Layered translucent cards with inset shadows + drop shadows give material
// depth — like vellum pages stacked in soft light.

import { Fraunces, Lora } from "next/font/google";
import type { DesignProps } from "@/designs/types";
import { useFakeDoor } from "@/designs/shared/useFakeDoor";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT", "WONK"],
  style: ["normal", "italic"],
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  style: ["normal", "italic"],
  display: "swap",
});

// ─── tiny helpers ────────────────────────────────────────────────────────────

const Display = ({
  children,
  className = "",
  opsz = 72,
  italic = false,
}: {
  children: React.ReactNode;
  className?: string;
  opsz?: number;
  italic?: boolean;
}) => (
  <span
    className={`font-[family-name:var(--font-fraunces)] ${italic ? "italic" : ""} ${className}`}
    style={{ fontVariationSettings: `"opsz" ${opsz}, "SOFT" 60, "WONK" 0` }}
  >
    {children}
  </span>
);

const Body = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <span className={`font-[family-name:var(--font-lora)] ${className}`}>
    {children}
  </span>
);

// ─── main component ───────────────────────────────────────────────────────────

export default function BFd09TextureDepth({ content, slug }: DesignProps) {
  const fd = useFakeDoor(slug);
  const { hero, problem, solution, pricing, testimonials, faq, fakedoor, footer } =
    content;

  return (
    <div className={`${fraunces.variable} ${lora.variable}`}>
      {/* ── grain + mesh root ── */}
      <main
        className="relative min-h-screen antialiased"
        style={{
          background:
            "radial-gradient(ellipse 130% 60% at 60% -10%, #D6E4FF 0%, transparent 55%)," +
            "radial-gradient(ellipse 90% 50% at -10% 35%, #EBE6FF 0%, transparent 50%)," +
            "radial-gradient(ellipse 80% 60% at 110% 65%, #D6E4FF 0%, transparent 55%)," +
            "radial-gradient(ellipse 70% 40% at 30% 90%, #F3ECFF 0%, transparent 55%)," +
            "#F7F4FF",
          color: "#26235A",
        }}
      >
        {/* SVG grain overlay — purely atmospheric, aria-hidden */}
        <svg
          aria-hidden
          className="pointer-events-none fixed inset-0 z-10 h-full w-full opacity-[0.028] mix-blend-multiply"
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter id="grain">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.72"
              numOctaves="4"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#grain)" />
        </svg>

        {/* ── decorative circles — depth layer ── */}
        <div
          aria-hidden
          className="pointer-events-none fixed left-1/2 top-0 -z-0 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/3 rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, #C7B8F5 0%, #A5B4FC 40%, transparent 70%)",
            filter: "blur(48px)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none fixed bottom-0 right-0 -z-0 h-[320px] w-[320px] translate-x-1/4 translate-y-1/4 rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, #B8D0FF 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-md px-5 pb-36">

          {/* ─────────────── HERO ─────────────── */}
          <header className="pt-8">
            {/* brand lockup */}
            <div className="flex items-center justify-between px-1">
              <Display
                className="text-[18px] tracking-[-0.01em] text-[#26235A]"
                italic
                opsz={36}
              >
                {hero.brandLockup}
              </Display>
              <span
                className="rounded-full px-3 py-1 text-[9.5px] uppercase tracking-[0.28em] text-[#5A5690]"
                style={{
                  background: "rgba(90,86,144,0.10)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.55), 0 1px 2px rgba(38,35,90,0.08)",
                }}
              >
                legacy · vault
              </span>
            </div>

            {/* hero headline area — CSS-only, no image */}
            <div
              className="relative mt-6 overflow-hidden rounded-[40px] px-7 pb-14 pt-16 text-center"
              style={{
                background:
                  "linear-gradient(160deg, rgba(235,230,255,0.85) 0%, rgba(214,228,255,0.75) 60%, rgba(243,236,255,0.60) 100%)",
                boxShadow:
                  "inset 0 1px 0 rgba(255,255,255,0.80), inset 0 -2px 12px rgba(90,86,144,0.08), 0 24px 60px -28px rgba(38,35,90,0.22), 0 4px 20px -8px rgba(38,35,90,0.10)",
              }}
            >
              {/* decorative arcs — depth */}
              <div
                aria-hidden
                className="absolute -bottom-24 -right-16 h-56 w-56 rounded-full border border-[#5A5690]/10"
              />
              <div
                aria-hidden
                className="absolute -left-10 -top-10 h-36 w-36 rounded-full border border-[#5A5690]/08"
              />
              <div
                aria-hidden
                className="absolute left-1/2 top-6 h-1 w-16 -translate-x-1/2 rounded-full bg-[#5A5690]/20"
              />

              {/* floating grain card effect */}
              <div
                aria-hidden
                className="absolute inset-0 rounded-[40px] opacity-[0.018]"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E\")",
                }}
              />

              <h1 className="relative text-balance text-[32px] leading-[1.1] tracking-[-0.02em]">
                <Display className="text-[#26235A]" opsz={72}>
                  {hero.title}
                </Display>
              </h1>
              <p className="relative mx-auto mt-5 max-w-[30ch] text-[15.5px] leading-[1.68] text-[#5A5690]">
                <Body>{hero.subtitle}</Body>
              </p>

              <button
                onClick={() => fd.onCta("hero")}
                className="group relative mt-9 inline-flex items-center justify-center gap-2.5 rounded-full px-9 py-4 text-[15px] font-medium text-[#F7F4FF] transition-all duration-300 hover:-translate-y-[2px]"
                style={{
                  background: "linear-gradient(135deg, #26235A 0%, #3D3A7A 100%)",
                  boxShadow:
                    "0 18px 36px -18px rgba(38,35,90,0.60), 0 2px 8px -2px rgba(38,35,90,0.28), inset 0 1px 0 rgba(255,255,255,0.12)",
                }}
              >
                <Display className="text-[15px]" opsz={14}>
                  {hero.ctaLabel}
                </Display>
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                  →
                </span>
              </button>

              <p
                className="relative mt-7 inline-flex items-center gap-2 rounded-full px-4 py-2 text-[12px] text-[#5A5690]"
                style={{
                  background: "rgba(90,86,144,0.08)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.60)",
                }}
              >
                <span
                  className="h-1.5 w-1.5 flex-none rounded-full"
                  style={{ background: "linear-gradient(135deg, #A5B4FC, #7C6FCD)" }}
                />
                <Body className="italic text-[11.5px]">{hero.reassuranceLine}</Body>
              </p>
            </div>
          </header>

          {/* ─────────────── PROBLEM ─────────────── */}
          <section className="mt-28 text-center">
            <p className="mb-5 text-[9.5px] uppercase tracking-[0.38em] text-[#5A5690]/70">
              The quiet problem
            </p>
            <h2 className="mx-auto max-w-[22ch] text-balance text-[26px] leading-[1.2] tracking-[-0.015em]">
              <Display className="text-[#26235A]" opsz={48}>
                {problem.title}
              </Display>
            </h2>
            <p className="mx-auto mt-7 max-w-[34ch] text-[15px] leading-[1.72] text-[#5A5690]">
              <Body>{problem.body}</Body>
            </p>
          </section>

          {/* ─────────────── SOLUTION ─────────────── */}
          <section className="mt-28">
            <div className="text-center">
              <p className="text-[9.5px] uppercase tracking-[0.38em] text-[#5A5690]/70">
                {solution.intro}
              </p>
              <p className="mt-2">
                <Display className="text-[14px] italic text-[#5A5690]" opsz={20}>
                  three careful steps
                </Display>
              </p>
            </div>

            <ol className="mt-10 space-y-5">
              {solution.steps.map((s, i) => (
                <li
                  key={i}
                  className="relative overflow-hidden rounded-[28px] px-6 py-7"
                  style={{
                    background:
                      i === 0
                        ? "linear-gradient(140deg, rgba(235,230,255,0.90) 0%, rgba(214,228,255,0.65) 100%)"
                        : i === 1
                        ? "linear-gradient(140deg, rgba(214,228,255,0.85) 0%, rgba(243,236,255,0.65) 100%)"
                        : "linear-gradient(140deg, rgba(243,236,255,0.90) 0%, rgba(235,230,255,0.65) 100%)",
                    boxShadow:
                      "inset 0 1px 0 rgba(255,255,255,0.75), inset 0 -1px 0 rgba(90,86,144,0.06), 0 8px 32px -16px rgba(38,35,90,0.18)",
                  }}
                >
                  {/* step number */}
                  <div className="mb-5 flex items-center gap-3">
                    <span
                      className="flex h-10 w-10 flex-none items-center justify-center rounded-full text-[20px]"
                      style={{
                        background: "rgba(38,35,90,0.08)",
                        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.7)",
                      }}
                    >
                      <Display className="italic text-[#26235A]" opsz={36}>
                        {i + 1}
                      </Display>
                    </span>
                    <span
                      className="h-px flex-1 opacity-30"
                      style={{
                        background: "linear-gradient(90deg, #5A5690, transparent)",
                      }}
                    />
                  </div>

                  <h3 className="text-[18.5px] leading-[1.28] tracking-[-0.01em]">
                    <Display className="text-[#26235A]" opsz={36}>
                      {s.title}
                    </Display>
                  </h3>
                  <p className="mt-3 text-[14px] leading-[1.68] text-[#5A5690]">
                    <Body>{s.body}</Body>
                  </p>
                </li>
              ))}
            </ol>
          </section>

          {/* ─────────────── PRICING ─────────────── */}
          <section
            ref={fd.pricingRef}
            className="mt-28 text-center"
          >
            <p className="mb-5 text-[9.5px] uppercase tracking-[0.38em] text-[#5A5690]/70">
              Membership
            </p>
            <h2 className="mx-auto max-w-[22ch] text-balance text-[25px] leading-[1.2] tracking-[-0.015em]">
              <Display className="text-[#26235A]" opsz={48}>
                {pricing.title}
              </Display>
            </h2>
            <p className="mx-auto mt-5 max-w-[32ch] text-[15px] leading-[1.68] text-[#5A5690]">
              <Body>{pricing.subtitle}</Body>
            </p>

            <div className="mt-10 space-y-4">
              {pricing.plans.map((plan, i) => (
                <div
                  key={i}
                  className="relative overflow-hidden rounded-[28px] px-6 py-8"
                  style={
                    plan.highlight
                      ? {
                          background:
                            "linear-gradient(155deg, #26235A 0%, #3D3A7A 55%, #4A4090 100%)",
                          boxShadow:
                            "0 20px 50px -24px rgba(38,35,90,0.65), 0 4px 16px -6px rgba(38,35,90,0.30), inset 0 1px 0 rgba(255,255,255,0.14)",
                        }
                      : {
                          background:
                            "linear-gradient(140deg, rgba(235,230,255,0.80) 0%, rgba(214,228,255,0.55) 100%)",
                          boxShadow:
                            "inset 0 1px 0 rgba(255,255,255,0.75), 0 6px 24px -12px rgba(38,35,90,0.14)",
                        }
                  }
                >
                  {/* grain texture inside highlighted card */}
                  {plan.highlight && (
                    <div
                      aria-hidden
                      className="absolute inset-0 opacity-[0.04] mix-blend-screen"
                      style={{
                        backgroundImage:
                          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)'/%3E%3C/svg%3E\")",
                      }}
                    />
                  )}

                  {plan.highlight && (
                    <span
                      className="absolute -top-px left-1/2 -translate-x-1/2 rounded-b-full px-5 py-1.5 text-[9px] uppercase tracking-[0.24em]"
                      style={{
                        background: "rgba(165,180,252,0.25)",
                        color: "#C7D2FE",
                        boxShadow: "0 2px 8px -2px rgba(165,180,252,0.40)",
                      }}
                    >
                      Best value
                    </span>
                  )}

                  <p
                    className={`text-[11px] uppercase tracking-[0.26em] ${
                      plan.highlight ? "text-[#A5B4FC]" : "text-[#5A5690]/70"
                    }`}
                  >
                    {plan.name}
                  </p>

                  <p
                    className={`mt-2 text-[38px] leading-none tracking-[-0.025em] ${
                      plan.highlight ? "text-[#F7F4FF]" : "text-[#26235A]"
                    }`}
                  >
                    <Display opsz={72}>{plan.price}</Display>
                  </p>

                  <p
                    className={`mt-3 text-[12.5px] ${
                      plan.highlight ? "text-[#A5B4FC]" : "text-[#5A5690]/80"
                    }`}
                  >
                    <Body className="italic">{plan.descriptor}</Body>
                  </p>

                  <button
                    onClick={() => fd.onCta(`pricing-${plan.name.toLowerCase()}`)}
                    className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-[14.5px] font-medium transition-all duration-300 hover:-translate-y-[1px]"
                    style={
                      plan.highlight
                        ? {
                            background:
                              "linear-gradient(135deg, rgba(247,244,255,1) 0%, rgba(235,230,255,0.95) 100%)",
                            color: "#26235A",
                            boxShadow:
                              "0 10px 28px -10px rgba(247,244,255,0.50), inset 0 1px 0 rgba(255,255,255,0.90)",
                          }
                        : {
                            background:
                              "linear-gradient(135deg, #26235A 0%, #3D3A7A 100%)",
                            color: "#F7F4FF",
                            boxShadow:
                              "0 10px 28px -12px rgba(38,35,90,0.45), inset 0 1px 0 rgba(255,255,255,0.12)",
                          }
                    }
                  >
                    <Display
                      className={`text-[14.5px] ${plan.highlight ? "text-[#26235A]" : "text-[#F7F4FF]"}`}
                      opsz={14}
                    >
                      {plan.ctaLabel}
                    </Display>
                    <span>→</span>
                  </button>
                </div>
              ))}
            </div>

            {/* included features */}
            <div
              className="mt-6 rounded-[28px] px-6 py-8 text-left"
              style={{
                background:
                  "linear-gradient(140deg, rgba(243,236,255,0.70) 0%, rgba(235,230,255,0.50) 100%)",
                boxShadow:
                  "inset 0 1px 0 rgba(255,255,255,0.75), 0 4px 20px -10px rgba(38,35,90,0.10)",
              }}
            >
              <p className="text-center text-[9.5px] uppercase tracking-[0.32em] text-[#5A5690]/70">
                Everything included
              </p>
              <ul className="mt-6 space-y-3">
                {pricing.included.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-[14px] text-[#26235A]">
                    <span
                      className="flex h-5 w-5 flex-none items-center justify-center rounded-full text-[10px]"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(165,180,252,0.35) 0%, rgba(167,139,250,0.25) 100%)",
                        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.75)",
                        color: "#5A5690",
                      }}
                    >
                      ✓
                    </span>
                    <Body>{feature}</Body>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mx-auto mt-6 max-w-[34ch] text-[12px] leading-[1.6] text-[#5A5690]/70">
              <Body className="italic">{pricing.scarcityLine}</Body>
            </p>
          </section>

          {/* ─────────────── TESTIMONIALS ─────────────── */}
          <section className="mt-28">
            <p className="mb-8 text-center text-[9.5px] uppercase tracking-[0.38em] text-[#5A5690]/70">
              From those who started
            </p>

            <div className="space-y-5">
              {testimonials.map((t, i) => (
                <figure
                  key={i}
                  className="relative overflow-hidden rounded-[28px] px-6 py-8"
                  style={{
                    background:
                      i % 2 === 0
                        ? "linear-gradient(150deg, rgba(235,230,255,0.85) 0%, rgba(214,228,255,0.60) 100%)"
                        : "linear-gradient(150deg, rgba(214,228,255,0.80) 0%, rgba(243,236,255,0.60) 100%)",
                    boxShadow:
                      "inset 0 1px 0 rgba(255,255,255,0.80), inset 0 -1px 0 rgba(90,86,144,0.05), 0 8px 30px -14px rgba(38,35,90,0.16)",
                  }}
                >
                  {/* decorative quote mark */}
                  <span
                    aria-hidden
                    className="absolute -top-2 left-5 text-[60px] leading-none text-[#5A5690]/12"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    &ldquo;
                  </span>
                  <blockquote className="relative text-[17px] leading-[1.55] tracking-[-0.008em] text-[#26235A]">
                    <Display opsz={24}>
                      {t.quote}
                    </Display>
                  </blockquote>
                  <figcaption className="mt-5 flex items-center gap-2">
                    <span
                      className="h-px flex-1"
                      style={{
                        background:
                          "linear-gradient(90deg, transparent, rgba(90,86,144,0.20))",
                      }}
                    />
                    <span className="text-[11px] uppercase tracking-[0.22em] text-[#5A5690]/70">
                      {t.name} · {t.age}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          {/* ─────────────── FAQ ─────────────── */}
          <section className="mt-28">
            <p className="mb-8 text-center text-[9.5px] uppercase tracking-[0.38em] text-[#5A5690]/70">
              Questions you might have
            </p>
            <div className="space-y-3">
              {faq.map((item, i) => (
                <details
                  key={i}
                  className="group overflow-hidden rounded-[24px]"
                  style={{
                    background:
                      "linear-gradient(140deg, rgba(235,230,255,0.75) 0%, rgba(247,244,255,0.60) 100%)",
                    boxShadow:
                      "inset 0 1px 0 rgba(255,255,255,0.80), 0 4px 16px -8px rgba(38,35,90,0.10)",
                  }}
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 px-6 py-5">
                    <span className="text-[16px] leading-[1.35] tracking-[-0.008em] text-[#26235A]">
                      <Display opsz={24}>{item.q}</Display>
                    </span>
                    <span
                      className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-full text-[16px] leading-none text-[#5A5690] transition-transform duration-300 group-open:rotate-45"
                      style={{
                        background: "rgba(90,86,144,0.12)",
                        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.65)",
                      }}
                    >
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-6">
                    <div
                      className="mb-4 h-px w-full"
                      style={{
                        background:
                          "linear-gradient(90deg, rgba(90,86,144,0.15), transparent)",
                      }}
                    />
                    <p className="text-[14px] leading-[1.68] text-[#5A5690]">
                      <Body>{item.a}</Body>
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* ─────────────── FINAL CTA ─────────────── */}
          <section
            className="relative mt-28 overflow-hidden rounded-[36px] px-7 py-16 text-center"
            style={{
              background:
                "linear-gradient(155deg, #26235A 0%, #3D3A7A 55%, #1A1842 100%)",
              boxShadow:
                "0 28px 64px -32px rgba(38,35,90,0.70), 0 6px 20px -8px rgba(38,35,90,0.35), inset 0 1px 0 rgba(255,255,255,0.12)",
            }}
          >
            {/* depth rings */}
            <div
              aria-hidden
              className="absolute -bottom-20 -right-20 h-52 w-52 rounded-full border border-white/06"
            />
            <div
              aria-hidden
              className="absolute -left-12 -top-12 h-40 w-40 rounded-full border border-white/04"
            />
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.03] mix-blend-screen"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.80' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)'/%3E%3C/svg%3E\")",
              }}
            />

            <h2 className="relative mx-auto max-w-[18ch] text-balance text-[28px] leading-[1.15] tracking-[-0.02em] text-[#F7F4FF]">
              <Display opsz={72}>{content.finalCta.headline}</Display>
            </h2>

            <button
              onClick={() => fd.onCta("final")}
              className="group relative mt-10 inline-flex items-center justify-center gap-2.5 rounded-full px-9 py-4 text-[15px] font-medium transition-all duration-300 hover:-translate-y-[2px]"
              style={{
                background:
                  "linear-gradient(135deg, rgba(247,244,255,1) 0%, rgba(235,230,255,0.95) 100%)",
                color: "#26235A",
                boxShadow:
                  "0 14px 36px -14px rgba(247,244,255,0.50), inset 0 1px 0 rgba(255,255,255,0.90)",
              }}
            >
              <Display className="text-[#26235A] text-[15px]" opsz={14}>
                {content.finalCta.ctaLabel}
              </Display>
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                →
              </span>
            </button>
          </section>

          {/* ─────────────── FAKE-DOOR ─────────────── */}
          {fd.showWaitlist && (
            <section
              id="waitlist"
              className="mt-10 overflow-hidden rounded-[32px] px-6 py-10"
              style={{
                background:
                  "linear-gradient(145deg, rgba(247,244,255,0.96) 0%, rgba(235,230,255,0.92) 100%)",
                boxShadow:
                  "inset 0 1px 0 rgba(255,255,255,0.90), 0 16px 48px -20px rgba(38,35,90,0.22), 0 2px 8px -2px rgba(38,35,90,0.08)",
              }}
            >
              {fd.state === "done" ? (
                <div className="text-center">
                  <p className="text-[24px] leading-tight tracking-[-0.01em] text-[#26235A]">
                    <Display opsz={48}>{content.confirmation.title}</Display>
                  </p>
                  <p className="mx-auto mt-4 max-w-[32ch] text-[14.5px] leading-[1.68] text-[#5A5690]">
                    <Body className="italic">{content.confirmation.body}</Body>
                  </p>
                </div>
              ) : (
                <>
                  <p className="text-center text-[24px] leading-tight tracking-[-0.01em] text-[#26235A]">
                    <Display italic opsz={48}>
                      {fakedoor.title}
                    </Display>
                  </p>
                  <p className="mx-auto mt-4 max-w-[32ch] text-center text-[14.5px] leading-[1.68] text-[#5A5690]">
                    <Body>{fakedoor.body}</Body>
                  </p>
                  <form onSubmit={fd.submit} className="mt-7 flex flex-col gap-3">
                    <input
                      type="email"
                      required
                      value={fd.email}
                      onChange={(e) => fd.setEmail(e.target.value)}
                      placeholder={fakedoor.emailPlaceholder}
                      className="w-full rounded-full border border-[#5A5690]/20 bg-white/80 px-6 py-4 text-[15px] text-[#26235A] placeholder:text-[#5A5690]/45 focus:border-[#26235A]/40 focus:outline-none focus:ring-2 focus:ring-[#26235A]/10"
                      style={{
                        boxShadow: "inset 0 2px 6px rgba(38,35,90,0.06)",
                      }}
                    />
                    <button
                      type="submit"
                      disabled={fd.state === "loading"}
                      className="w-full rounded-full py-4 text-[15px] font-medium text-[#F7F4FF] transition-opacity disabled:opacity-60"
                      style={{
                        background:
                          "linear-gradient(135deg, #26235A 0%, #3D3A7A 100%)",
                        boxShadow:
                          "0 10px 28px -12px rgba(38,35,90,0.50), inset 0 1px 0 rgba(255,255,255,0.12)",
                      }}
                    >
                      <Display className="text-[#F7F4FF] text-[15px]" opsz={14}>
                        {fd.state === "loading" ? "…" : fakedoor.submitLabel}
                      </Display>
                    </button>
                    {fd.state === "error" && (
                      <p className="text-center text-[13px] text-[#7C6FCD]">
                        Something went wrong. Please try again.
                      </p>
                    )}
                  </form>
                  <p className="mt-5 text-center text-[12px] text-[#5A5690]/60">
                    <Body className="italic">{fakedoor.privacyLine}</Body>
                  </p>
                </>
              )}
            </section>
          )}

          {/* ─────────────── FOOTER ─────────────── */}
          <footer className="mt-24 pb-4 text-center">
            <div
              className="mb-8 h-px w-full"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(90,86,144,0.18) 30%, rgba(90,86,144,0.18) 70%, transparent)",
              }}
            />
            <p className="text-[15px] italic tracking-[-0.005em] text-[#26235A]">
              <Display opsz={20}>{footer.lines[0]}</Display>
            </p>
            <p className="mt-4 text-[11px] uppercase tracking-[0.26em] text-[#5A5690]/60">
              {footer.lines.slice(1).join("  ·  ")}
            </p>
          </footer>
        </div>

        {/* ── sticky CTA ── */}
        <div
          className="fixed inset-x-0 bottom-0 z-40 px-5 pb-5 pt-3"
          style={{
            background:
              "linear-gradient(to top, rgba(247,244,255,0.95) 60%, transparent)",
            backdropFilter: "blur(8px)",
          }}
        >
          <button
            onClick={() => fd.onCta("sticky")}
            className="mx-auto flex w-full max-w-md items-center justify-center gap-2.5 rounded-full py-4 text-[15px] font-medium text-[#F7F4FF] transition-all duration-300 hover:-translate-y-[1px]"
            style={{
              background:
                "linear-gradient(135deg, #26235A 0%, #3D3A7A 100%)",
              boxShadow:
                "0 16px 36px -14px rgba(38,35,90,0.65), 0 3px 10px -3px rgba(38,35,90,0.30), inset 0 1px 0 rgba(255,255,255,0.12)",
            }}
          >
            <Display className="text-[#F7F4FF] text-[15px]" opsz={14}>
              {hero.ctaLabel}
            </Display>
            <span>→</span>
          </button>
        </div>
      </main>
    </div>
  );
}
