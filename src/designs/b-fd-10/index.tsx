"use client";

import { Fraunces, DM_Serif_Display } from "next/font/google";
import type { DesignProps } from "@/designs/types";
import { useFakeDoor } from "@/designs/shared/useFakeDoor";

// Direction: AXIS 06 — EDITORIAL MAGAZINE
// Fraunces (optical-size, SOFT, WONK axes) as the expressive display face —
// it has ink traps, terminal swashes, and a warm personality that feels
// like a literary wellness quarterly. DM Serif Display for pull-quotes and
// stand-alone moments of weight. No sans body font: everything is serif,
// letting column rules and type scale carry the hierarchy alone.
// Palette: ink #26235A on lavender-white mesh. Dividing rules in indigo/20.
// Drop caps, asymmetric grid columns, numbered folio-style section labels.

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT", "WONK"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-dm-serif",
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

export default function EditorialMagazine({ content, slug }: DesignProps) {
  const fd = useFakeDoor(slug);

  const { hero, problem, solution, pricing, testimonials, faq, fakedoor, footer } = content;

  return (
    <div className={`${fraunces.variable} ${dmSerif.variable}`}>
      <main
        className="relative min-h-screen overflow-x-hidden antialiased"
        style={{
          background:
            "radial-gradient(ellipse 120% 60% at 80% 0%, #D6E4FF 0%, transparent 55%), radial-gradient(ellipse 100% 50% at 0% 30%, #EBE6FF 0%, transparent 50%), radial-gradient(ellipse 80% 60% at 60% 100%, #F3ECFF 0%, transparent 50%), #F7F4FF",
          color: "#26235A",
          fontFamily: "var(--font-fraunces)",
        }}
      >
        {/* ── MASTHEAD ─────────────────────────────── */}
        <header className="relative mx-auto max-w-md px-5 pt-8">
          {/* Top rule */}
          <div
            className="mb-3 h-[2px] w-full"
            style={{ background: "#26235A" }}
            aria-hidden
          />
          <div className="flex items-baseline justify-between">
            <span
              className="text-[11px] uppercase tracking-[0.35em]"
              style={{ color: "#5A5690", letterSpacing: "0.35em" }}
            >
              Vol. I
            </span>
            <span
              className="text-[22px] italic"
              style={{
                fontFamily: "var(--font-fraunces)",
                fontVariationSettings: '"opsz" 36, "SOFT" 80, "WONK" 1',
                color: "#26235A",
              }}
            >
              {hero.brandLockup}
            </span>
            <span
              className="text-[11px] uppercase tracking-[0.35em]"
              style={{ color: "#5A5690" }}
            >
              Legacy
            </span>
          </div>
          {/* Bottom rule */}
          <div
            className="mt-3 h-px w-full"
            style={{ background: "rgba(38,35,90,0.18)" }}
            aria-hidden
          />
        </header>

        {/* ── HERO ─────────────────────────────────── */}
        <section className="relative mx-auto max-w-md px-5 pt-10">
          {/* Issue label */}
          <p
            className="mb-5 text-[10px] uppercase tracking-[0.32em]"
            style={{ color: "#5A5690" }}
          >
            01 — Cover Story
          </p>

          {/* H1: editorial headline with drop-cap feel */}
          <h1
            className="text-[38px] leading-[1.04] tracking-[-0.02em]"
            style={{
              fontFamily: "var(--font-fraunces)",
              fontVariationSettings: '"opsz" 72, "SOFT" 60, "WONK" 0',
              color: "#26235A",
            }}
          >
            {hero.title}
          </h1>

          {/* CSS-only hero block: lavender gradient shape + typographic texture */}
          <div className="relative my-8 overflow-hidden rounded-2xl" style={{ minHeight: 220 }}>
            {/* Gradient background */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 90% 80% at 30% 20%, #D6E4FF 0%, #EBE6FF 55%, #F3ECFF 100%)",
              }}
              aria-hidden
            />
            {/* Decorative shapes */}
            <div
              className="absolute"
              style={{
                width: 180,
                height: 180,
                borderRadius: "50%",
                border: "1.5px solid rgba(38,35,90,0.12)",
                top: -40,
                right: -40,
              }}
              aria-hidden
            />
            <div
              className="absolute"
              style={{
                width: 110,
                height: 110,
                borderRadius: "50%",
                border: "1px solid rgba(38,35,90,0.08)",
                bottom: -30,
                left: 20,
              }}
              aria-hidden
            />
            {/* Large decorative numeral */}
            <div
              aria-hidden
              className="absolute select-none"
              style={{
                fontFamily: "var(--font-fraunces)",
                fontVariationSettings: '"opsz" 144, "SOFT" 0, "WONK" 0',
                fontSize: 200,
                lineHeight: 1,
                color: "rgba(38,35,90,0.06)",
                bottom: -30,
                right: -10,
                letterSpacing: "-0.06em",
              }}
            >
              ?
            </div>
            {/* Pull-quote centered */}
            <div className="relative flex h-full min-h-[220px] flex-col items-start justify-center px-8 py-10">
              <p
                className="text-[13px] uppercase tracking-[0.28em] mb-4"
                style={{ color: "#5A5690" }}
              >
                A question worth asking
              </p>
              <p
                className="text-[28px] leading-[1.18] italic"
                style={{
                  fontFamily: "var(--font-dm-serif)",
                  color: "#26235A",
                  maxWidth: "14ch",
                }}
              >
                "The kindest thing you'll ever leave behind."
              </p>
            </div>
          </div>

          {/* Subtitle as body-text column */}
          <p
            className="text-[16px] leading-[1.72]"
            style={{ color: "#5A5690" }}
          >
            {hero.subtitle}
          </p>

          {/* CTA */}
          <button
            onClick={() => fd.onCta("hero")}
            className="mt-8 inline-flex items-center gap-3 rounded-none border-b-2 pb-1 text-[15px] font-medium transition-all duration-200 hover:gap-4"
            style={{
              fontFamily: "var(--font-fraunces)",
              fontVariationSettings: '"opsz" 18, "SOFT" 0, "WONK" 0',
              color: "#26235A",
              borderColor: "#26235A",
              background: "transparent",
            }}
          >
            {hero.ctaLabel}
            <span style={{ fontSize: 18 }}>→</span>
          </button>

          {/* Reassurance */}
          <p
            className="mt-5 flex items-center gap-2 text-[12.5px]"
            style={{ color: "#5A5690" }}
          >
            <span
              className="inline-block h-1.5 w-1.5 rounded-full"
              style={{ background: "#5A5690" }}
              aria-hidden
            />
            {hero.reassuranceLine}
          </p>

          {/* Section rule */}
          <div
            className="mt-12 h-px"
            style={{ background: "rgba(38,35,90,0.15)" }}
            aria-hidden
          />
        </section>

        {/* ── PROBLEM ──────────────────────────────── */}
        <section className="relative mx-auto max-w-md px-5 pt-12">
          <div className="flex gap-5">
            {/* Left: folio label */}
            <div className="flex flex-col items-center pt-1" style={{ minWidth: 28 }}>
              <span
                className="text-[10px] uppercase tracking-[0.28em]"
                style={{ color: "#5A5690", writingMode: "vertical-rl", transform: "rotate(180deg)" }}
              >
                02
              </span>
              <div
                className="mt-2 flex-1"
                style={{ width: 1, background: "rgba(38,35,90,0.15)", minHeight: 60 }}
                aria-hidden
              />
            </div>
            {/* Right: content */}
            <div className="flex-1 pb-4">
              <p
                className="mb-4 text-[10px] uppercase tracking-[0.32em]"
                style={{ color: "#5A5690" }}
              >
                The quiet crisis
              </p>
              <h2
                className="text-[26px] leading-[1.18] tracking-[-0.01em]"
                style={{
                  fontFamily: "var(--font-fraunces)",
                  fontVariationSettings: '"opsz" 48, "SOFT" 40, "WONK" 0',
                  color: "#26235A",
                }}
              >
                {problem.title}
              </h2>
              {/* Drop cap body text */}
              <p
                className="mt-6 text-[15.5px] leading-[1.75]"
                style={{ color: "#5A5690" }}
              >
                <span
                  aria-hidden
                  className="float-left mr-2 mt-0.5 leading-none"
                  style={{
                    fontFamily: "var(--font-dm-serif)",
                    fontSize: 62,
                    lineHeight: "0.82",
                    color: "#26235A",
                  }}
                >
                  {problem.body.charAt(0)}
                </span>
                {problem.body.slice(1)}
              </p>
            </div>
          </div>

          <div
            className="mt-10 h-px"
            style={{ background: "rgba(38,35,90,0.15)" }}
            aria-hidden
          />
        </section>

        {/* ── SOLUTION ─────────────────────────────── */}
        <section className="relative mx-auto max-w-md px-5 pt-12">
          <p
            className="mb-2 text-[10px] uppercase tracking-[0.32em]"
            style={{ color: "#5A5690" }}
          >
            03 — {solution.intro}
          </p>
          <div
            className="mb-10 h-[2px] w-12"
            style={{ background: "#26235A" }}
            aria-hidden
          />

          <ol className="space-y-0">
            {solution.steps.map((step, i) => (
              <li key={i}>
                <div className="flex gap-5">
                  {/* Step number */}
                  <div
                    className="shrink-0 pt-1 text-[40px] leading-none italic"
                    style={{
                      fontFamily: "var(--font-fraunces)",
                      fontVariationSettings: '"opsz" 72, "SOFT" 100, "WONK" 1',
                      color: "rgba(38,35,90,0.15)",
                      minWidth: 36,
                    }}
                    aria-hidden
                  >
                    {i + 1}
                  </div>
                  {/* Content */}
                  <div className="flex-1 pb-10">
                    <h3
                      className="text-[19px] leading-[1.25] tracking-[-0.005em]"
                      style={{
                        fontFamily: "var(--font-fraunces)",
                        fontVariationSettings: '"opsz" 36, "SOFT" 30, "WONK" 0',
                        color: "#26235A",
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="mt-3 text-[14.5px] leading-[1.72]"
                      style={{ color: "#5A5690" }}
                    >
                      {step.body}
                    </p>
                  </div>
                </div>
                {i < solution.steps.length - 1 && (
                  <div
                    className="mb-10 h-px"
                    style={{ background: "rgba(38,35,90,0.1)" }}
                    aria-hidden
                  />
                )}
              </li>
            ))}
          </ol>

          <div
            className="h-px"
            style={{ background: "rgba(38,35,90,0.15)" }}
            aria-hidden
          />
        </section>

        {/* ── TESTIMONIALS ─────────────────────────── */}
        <section className="relative mx-auto max-w-md px-5 pt-12">
          <p
            className="mb-8 text-[10px] uppercase tracking-[0.32em]"
            style={{ color: "#5A5690" }}
          >
            04 — Voices
          </p>

          <div className="space-y-8">
            {testimonials.map((t, i) => (
              <figure key={i}>
                {/* Asymmetric: alternate alignment */}
                <div className={i % 2 === 1 ? "pl-8" : ""}>
                  <blockquote
                    className="text-[19px] leading-[1.48] italic"
                    style={{
                      fontFamily: "var(--font-dm-serif)",
                      color: "#26235A",
                    }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption
                    className="mt-3 flex items-center gap-3 text-[11.5px] uppercase tracking-[0.22em]"
                    style={{ color: "#5A5690" }}
                  >
                    <span
                      className="inline-block h-px flex-1"
                      style={{ background: "rgba(38,35,90,0.2)", maxWidth: 28 }}
                      aria-hidden
                    />
                    {t.name}, {t.age}
                  </figcaption>
                </div>
                {i < testimonials.length - 1 && (
                  <div
                    className="mt-8 h-px"
                    style={{ background: "rgba(38,35,90,0.1)" }}
                    aria-hidden
                  />
                )}
              </figure>
            ))}
          </div>

          <div
            className="mt-12 h-px"
            style={{ background: "rgba(38,35,90,0.15)" }}
            aria-hidden
          />
        </section>

        {/* ── PRICING ──────────────────────────────── */}
        <section
          ref={fd.pricingRef as React.RefObject<HTMLElement>}
          className="relative mx-auto max-w-md px-5 pt-12"
        >
          <p
            className="mb-2 text-[10px] uppercase tracking-[0.32em]"
            style={{ color: "#5A5690" }}
          >
            05 — Membership
          </p>
          <div
            className="mb-8 h-[2px] w-12"
            style={{ background: "#26235A" }}
            aria-hidden
          />

          <h2
            className="text-[26px] leading-[1.18] tracking-[-0.01em]"
            style={{
              fontFamily: "var(--font-fraunces)",
              fontVariationSettings: '"opsz" 48, "SOFT" 40, "WONK" 0',
              color: "#26235A",
            }}
          >
            {pricing.title}
          </h2>
          <p
            className="mt-4 text-[15px] leading-[1.7]"
            style={{ color: "#5A5690" }}
          >
            {pricing.subtitle}
          </p>

          {/* Plans */}
          <div className="mt-10 space-y-5">
            {pricing.plans.map((plan, i) => (
              <div
                key={i}
                className="relative"
                style={
                  plan.highlight
                    ? {
                        background:
                          "linear-gradient(135deg, #26235A 0%, #5A5690 100%)",
                        borderRadius: 20,
                        padding: "28px 28px",
                        color: "#F7F4FF",
                      }
                    : {
                        background: "rgba(235,230,255,0.45)",
                        borderRadius: 20,
                        padding: "28px 28px",
                        border: "1px solid rgba(38,35,90,0.12)",
                        color: "#26235A",
                      }
                }
              >
                {plan.highlight && (
                  <div
                    className="absolute -top-3 right-6 text-[9.5px] uppercase tracking-[0.24em] rounded-full px-3 py-1"
                    style={{ background: "#EBE6FF", color: "#26235A" }}
                  >
                    Best value
                  </div>
                )}

                {/* Plan header: two columns */}
                <div className="flex items-baseline justify-between">
                  <p
                    className="text-[11px] uppercase tracking-[0.28em]"
                    style={{ opacity: plan.highlight ? 0.65 : 0.55 }}
                  >
                    {plan.name}
                  </p>
                  <p
                    className="text-[13px]"
                    style={{ opacity: plan.highlight ? 0.65 : 0.55 }}
                  >
                    {plan.descriptor}
                  </p>
                </div>

                {/* Price as editorial display */}
                <p
                  className="mt-3 text-[44px] leading-none tracking-[-0.02em]"
                  style={{
                    fontFamily: "var(--font-fraunces)",
                    fontVariationSettings: '"opsz" 72, "SOFT" 0, "WONK" 0',
                  }}
                >
                  {plan.price}
                </p>

                {/* Dividing rule */}
                <div
                  className="my-6 h-px"
                  style={{ background: plan.highlight ? "rgba(247,244,255,0.2)" : "rgba(38,35,90,0.12)" }}
                  aria-hidden
                />

                <button
                  onClick={() => fd.onCta(`pricing-${plan.name.toLowerCase()}`)}
                  className="flex items-center gap-3 text-[15px] font-medium transition-all duration-200 hover:gap-4 border-b pb-0.5"
                  style={{
                    fontFamily: "var(--font-fraunces)",
                    fontVariationSettings: '"opsz" 18',
                    color: plan.highlight ? "#F7F4FF" : "#26235A",
                    borderColor: plan.highlight ? "rgba(247,244,255,0.5)" : "rgba(38,35,90,0.4)",
                    background: "transparent",
                  }}
                >
                  {plan.ctaLabel}
                  <span>→</span>
                </button>
              </div>
            ))}
          </div>

          {/* Features list: two-column magazine grid */}
          <div
            className="mt-8 rounded-2xl px-7 py-7"
            style={{ background: "rgba(214,228,255,0.3)", border: "1px solid rgba(38,35,90,0.08)" }}
          >
            <p
              className="mb-5 text-[10px] uppercase tracking-[0.3em]"
              style={{ color: "#5A5690" }}
            >
              Everything included
            </p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
              {pricing.included.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-[13.5px] leading-[1.4]"
                  style={{ color: "#26235A" }}
                >
                  <span
                    className="mt-[3px] shrink-0 text-[10px]"
                    style={{ color: "#5A5690" }}
                    aria-hidden
                  >
                    ✦
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <p
            className="mt-6 text-[12.5px] leading-[1.6] text-center"
            style={{ color: "#5A5690" }}
          >
            {pricing.scarcityLine}
          </p>

          <div
            className="mt-12 h-px"
            style={{ background: "rgba(38,35,90,0.15)" }}
            aria-hidden
          />
        </section>

        {/* ── FAQ ──────────────────────────────────── */}
        <section className="relative mx-auto max-w-md px-5 pt-12">
          <p
            className="mb-2 text-[10px] uppercase tracking-[0.32em]"
            style={{ color: "#5A5690" }}
          >
            06 — Questions
          </p>
          <div
            className="mb-8 h-[2px] w-12"
            style={{ background: "#26235A" }}
            aria-hidden
          />

          <div className="space-y-0">
            {faq.map((item, i) => (
              <details
                key={i}
                className="group border-b"
                style={{ borderColor: "rgba(38,35,90,0.12)" }}
              >
                <summary
                  className="flex cursor-pointer list-none items-start justify-between gap-4 py-5"
                >
                  <span
                    className="text-[17px] leading-[1.3] tracking-[-0.005em]"
                    style={{
                      fontFamily: "var(--font-fraunces)",
                      fontVariationSettings: '"opsz" 24, "SOFT" 20, "WONK" 0',
                      color: "#26235A",
                    }}
                  >
                    {item.q}
                  </span>
                  <span
                    className="mt-0.5 shrink-0 text-[20px] leading-none transition-transform duration-300 group-open:rotate-45"
                    style={{ color: "#5A5690" }}
                  >
                    +
                  </span>
                </summary>
                <p
                  className="pb-6 text-[14px] leading-[1.72]"
                  style={{ color: "#5A5690" }}
                >
                  {item.a}
                </p>
              </details>
            ))}
          </div>

          <div
            className="mt-12 h-px"
            style={{ background: "rgba(38,35,90,0.15)" }}
            aria-hidden
          />
        </section>

        {/* ── FINAL CTA ────────────────────────────── */}
        <section className="relative mx-auto max-w-md px-5 pt-12 pb-6">
          {/* Full-bleed editorial CTA box */}
          <div
            className="relative overflow-hidden rounded-2xl px-8 py-14"
            style={{
              background:
                "radial-gradient(ellipse 120% 100% at 10% 0%, #D6E4FF 0%, #EBE6FF 50%, #26235A 100%)",
            }}
          >
            {/* Large background letter */}
            <div
              aria-hidden
              className="pointer-events-none absolute select-none"
              style={{
                fontFamily: "var(--font-fraunces)",
                fontVariationSettings: '"opsz" 144, "SOFT" 0, "WONK" 0',
                fontSize: 240,
                lineHeight: 1,
                color: "rgba(38,35,90,0.07)",
                bottom: -60,
                right: -20,
                letterSpacing: "-0.05em",
              }}
            >
              Y
            </div>

            <p
              className="relative mb-6 text-[10px] uppercase tracking-[0.32em]"
              style={{ color: "rgba(38,35,90,0.55)" }}
            >
              07 — Begin
            </p>

            <h2
              className="relative text-[32px] leading-[1.1] tracking-[-0.015em]"
              style={{
                fontFamily: "var(--font-fraunces)",
                fontVariationSettings: '"opsz" 72, "SOFT" 60, "WONK" 0',
                color: "#26235A",
                maxWidth: "14ch",
              }}
            >
              {content.finalCta.headline}
            </h2>

            <button
              onClick={() => fd.onCta("final")}
              className="relative mt-10 flex items-center gap-3 rounded-none border-b-2 pb-1 text-[15px] font-medium transition-all duration-200 hover:gap-4"
              style={{
                fontFamily: "var(--font-fraunces)",
                fontVariationSettings: '"opsz" 18',
                color: "#26235A",
                borderColor: "#26235A",
                background: "transparent",
              }}
            >
              {content.finalCta.ctaLabel}
              <span style={{ fontSize: 18 }}>→</span>
            </button>
          </div>
        </section>

        {/* ── FAKE-DOOR ────────────────────────────── */}
        {fd.showWaitlist && (
          <section
            id="waitlist"
            className="relative mx-auto max-w-md px-5 pb-10"
          >
            <div
              className="rounded-2xl px-7 py-10"
              style={{
                background: "rgba(235,230,255,0.55)",
                border: "1px solid rgba(38,35,90,0.12)",
              }}
            >
              {fd.state === "done" ? (
                <div className="text-center">
                  <p
                    className="text-[26px] leading-tight tracking-[-0.01em]"
                    style={{
                      fontFamily: "var(--font-fraunces)",
                      fontVariationSettings: '"opsz" 48, "SOFT" 40',
                      color: "#26235A",
                    }}
                  >
                    {content.confirmation.title}
                  </p>
                  <p
                    className="mx-auto mt-5 text-[14.5px] leading-[1.7]"
                    style={{ color: "#5A5690", maxWidth: "34ch" }}
                  >
                    {content.confirmation.body}
                  </p>
                </div>
              ) : (
                <>
                  <p
                    className="text-center text-[26px] italic leading-[1.15] tracking-[-0.01em]"
                    style={{
                      fontFamily: "var(--font-dm-serif)",
                      color: "#26235A",
                    }}
                  >
                    {fakedoor.title}
                  </p>
                  <p
                    className="mx-auto mt-4 text-center text-[14.5px] leading-[1.7]"
                    style={{ color: "#5A5690", maxWidth: "34ch" }}
                  >
                    {fakedoor.body}
                  </p>
                  <form onSubmit={fd.submit} className="mt-8 flex flex-col gap-3">
                    <input
                      type="email"
                      required
                      value={fd.email}
                      onChange={(e) => fd.setEmail(e.target.value)}
                      placeholder={fakedoor.emailPlaceholder}
                      className="w-full rounded-none border-0 border-b-2 bg-transparent px-0 py-3 text-[15px] placeholder:opacity-40 focus:outline-none"
                      style={{
                        fontFamily: "var(--font-fraunces)",
                        fontVariationSettings: '"opsz" 18',
                        color: "#26235A",
                        borderColor: "rgba(38,35,90,0.35)",
                        caretColor: "#26235A",
                      }}
                    />
                    <button
                      type="submit"
                      disabled={fd.state === "loading"}
                      className="mt-2 flex w-full items-center justify-center gap-3 rounded-none border-b-2 py-3 text-[15px] font-medium transition-all duration-200 disabled:opacity-50"
                      style={{
                        fontFamily: "var(--font-fraunces)",
                        fontVariationSettings: '"opsz" 18',
                        color: "#26235A",
                        borderColor: "#26235A",
                        background: "transparent",
                      }}
                    >
                      {fd.state === "loading" ? "…" : fakedoor.submitLabel}
                    </button>
                    {fd.state === "error" && (
                      <p
                        className="text-center text-[13px]"
                        style={{ color: "#5A5690" }}
                      >
                        Something went wrong — try again.
                      </p>
                    )}
                  </form>
                  <p
                    className="mt-6 text-center text-[12px]"
                    style={{ color: "rgba(38,35,90,0.45)" }}
                  >
                    {fakedoor.privacyLine}
                  </p>
                </>
              )}
            </div>
          </section>
        )}

        {/* ── FOOTER ───────────────────────────────── */}
        <footer className="relative mx-auto max-w-md px-5 pb-32">
          <div
            className="mb-5 h-[2px] w-full"
            style={{ background: "#26235A" }}
            aria-hidden
          />
          <div className="flex items-baseline justify-between gap-4">
            <p
              className="text-[14px] italic leading-[1.5]"
              style={{
                fontFamily: "var(--font-fraunces)",
                fontVariationSettings: '"opsz" 18, "SOFT" 60',
                color: "#26235A",
                maxWidth: "26ch",
              }}
            >
              {footer.lines[0]}
            </p>
            <p
              className="shrink-0 text-[10px] uppercase tracking-[0.24em]"
              style={{ color: "#5A5690" }}
            >
              {footer.lines.slice(1).join(" · ")}
            </p>
          </div>
          <div
            className="mt-4 h-px"
            style={{ background: "rgba(38,35,90,0.12)" }}
            aria-hidden
          />
        </footer>

        {/* ── STICKY BAR ───────────────────────────── */}
        <div
          className="fixed inset-x-0 bottom-0 z-40 px-5 pb-5"
          style={{ pointerEvents: "none" }}
        >
          <div
            className="mx-auto max-w-md"
            style={{ pointerEvents: "auto" }}
          >
            <button
              onClick={() => fd.onCta("sticky")}
              className="flex w-full items-center justify-between rounded-2xl px-6 py-4 text-[15px] font-medium transition-all duration-200 hover:brightness-110"
              style={{
                fontFamily: "var(--font-fraunces)",
                fontVariationSettings: '"opsz" 18',
                background:
                  "linear-gradient(135deg, #26235A 0%, #5A5690 100%)",
                color: "#F7F4FF",
                boxShadow: "0 16px 40px -16px rgba(38,35,90,0.7)",
              }}
            >
              <span>{hero.ctaLabel}</span>
              <span style={{ fontSize: 18 }}>→</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
