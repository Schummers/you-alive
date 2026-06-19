"use client";

import { Fraunces, Lora } from "next/font/google";
import type { DesignProps } from "@/designs/types";
import { useFakeDoor } from "@/designs/shared/useFakeDoor";

// AXIS 06 — EDITORIAL MAGAZINE
// Fraunces (opsz/SOFT/WONK variable) for display: ink-trap warmth, characterful
// Lora for body: bookish, warm, pairs with the forest palette
// Multi-column structure, lime hairline rules, drop cap openers, pull-quotes

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

// Palette
const C = {
  forest: "#16271F",
  lime: "#C8F169",
  cream: "#EFEAD8",
  sage: "#9DB39A",
  forestMid: "#1E3329",
  forestLight: "#243D2C",
  sageDim: "#6B8A68",
  limeDim: "#A8C955",
  creamDark: "#D8D1BC",
};

export default function EditorialMagazineDesign({ content, slug }: DesignProps) {
  const fd = useFakeDoor(slug);
  const { hero, problem, solution, pricing, testimonials, faq, fakedoor, footer } = content;

  return (
    <div className={`${fraunces.variable} ${lora.variable}`}>
      <main
        style={{
          background: C.forest,
          color: C.cream,
          fontFamily: "var(--font-lora), Georgia, serif",
          minHeight: "100vh",
          maxWidth: "390px",
          margin: "0 auto",
          overflowX: "hidden",
          WebkitFontSmoothing: "antialiased",
        }}
      >
        {/* ── HERO ── */}
        <header
          style={{
            padding: "0 0 0 0",
            position: "relative",
          }}
        >
          {/* Top bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "20px 24px 16px",
              borderBottom: `1px solid ${C.lime}`,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-fraunces)",
                fontStyle: "italic",
                fontSize: "13px",
                letterSpacing: "0.04em",
                color: C.lime,
                fontVariationSettings: '"opsz" 12, "SOFT" 30, "WONK" 0',
              }}
            >
              {hero.brandLockup}
            </span>
            <span
              style={{
                fontFamily: "var(--font-lora)",
                fontSize: "9px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: C.sage,
              }}
            >
              Legacy Planning
            </span>
          </div>

          {/* Issue line */}
          <div
            style={{
              padding: "10px 24px",
              borderBottom: `1px solid ${C.forestLight}`,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontSize: "9px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: C.sageDim,
              }}
            >
              No. 001
            </span>
            <span
              style={{
                fontSize: "9px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: C.sageDim,
              }}
            >
              The Legacy Issue
            </span>
          </div>

          {/* HERO HEADLINE — full editorial block */}
          <div
            style={{
              padding: "40px 24px 0",
              borderBottom: `3px solid ${C.lime}`,
              paddingBottom: "36px",
            }}
          >
            {/* Kicker */}
            <p
              style={{
                fontSize: "9px",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: C.lime,
                marginBottom: "18px",
                fontFamily: "var(--font-lora)",
              }}
            >
              Cover story
            </p>

            {/* Big display title */}
            <h1
              style={{
                fontFamily: "var(--font-fraunces)",
                fontStyle: "normal",
                fontSize: "52px",
                lineHeight: "0.92",
                letterSpacing: "-0.02em",
                color: C.cream,
                margin: "0 0 28px",
                fontVariationSettings: '"opsz" 144, "SOFT" 20, "WONK" 1',
              }}
            >
              {hero.title.split(" ").slice(0, 4).join(" ")}
              <br />
              <em
                style={{
                  color: C.lime,
                  fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 1',
                }}
              >
                {hero.title.split(" ").slice(4).join(" ") || "guessing."}
              </em>
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontFamily: "var(--font-lora)",
                fontSize: "14.5px",
                lineHeight: "1.68",
                color: C.sage,
                margin: "0 0 28px",
                maxWidth: "34ch",
              }}
            >
              {hero.subtitle}
            </p>

            {/* CTA row */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
              <button
                onClick={() => fd.onCta("hero")}
                style={{
                  background: C.lime,
                  color: C.forest,
                  border: "none",
                  padding: "13px 28px",
                  fontFamily: "var(--font-fraunces)",
                  fontStyle: "italic",
                  fontSize: "15px",
                  fontVariationSettings: '"opsz" 20, "SOFT" 0, "WONK" 0',
                  cursor: "pointer",
                  letterSpacing: "-0.01em",
                }}
              >
                {hero.ctaLabel} →
              </button>
              <span
                style={{
                  fontSize: "11px",
                  color: C.sageDim,
                  fontFamily: "var(--font-lora)",
                  lineHeight: "1.4",
                }}
              >
                {hero.reassuranceLine}
              </span>
            </div>
          </div>
        </header>

        {/* ── PROBLEM — editorial sidebar treatment ── */}
        <section
          style={{
            padding: "0",
            borderBottom: `1px solid ${C.forestLight}`,
          }}
        >
          {/* Column rule layout */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "3px 1fr",
              gap: "0",
            }}
          >
            {/* Lime vertical rule */}
            <div style={{ background: C.lime }} />

            <div style={{ padding: "36px 24px 36px 20px" }}>
              {/* Drop cap paragraph */}
              <p
                style={{
                  fontSize: "9px",
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  color: C.lime,
                  marginBottom: "16px",
                  fontFamily: "var(--font-lora)",
                }}
              >
                The problem
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-fraunces)",
                  fontStyle: "italic",
                  fontSize: "24px",
                  lineHeight: "1.18",
                  letterSpacing: "-0.01em",
                  color: C.cream,
                  margin: "0 0 18px",
                  fontVariationSettings: '"opsz" 36, "SOFT" 30, "WONK" 0',
                }}
              >
                {problem.title}
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-lora)",
                  fontSize: "14px",
                  lineHeight: "1.72",
                  color: C.sage,
                }}
              >
                {problem.body}
              </p>
            </div>
          </div>
        </section>

        {/* ── PULL QUOTE interstitial ── */}
        <div
          style={{
            padding: "32px 24px",
            background: C.forestMid,
            borderBottom: `1px solid ${C.lime}`,
            borderTop: `1px solid ${C.lime}`,
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Background watermark number */}
          <span
            aria-hidden
            style={{
              position: "absolute",
              right: "-10px",
              top: "-24px",
              fontFamily: "var(--font-fraunces)",
              fontSize: "160px",
              lineHeight: "1",
              color: C.lime,
              opacity: "0.04",
              fontVariationSettings: '"opsz" 144, "SOFT" 0, "WONK" 0',
              pointerEvents: "none",
              userSelect: "none",
            }}
          >
            &ldquo;
          </span>
          <blockquote
            style={{
              fontFamily: "var(--font-fraunces)",
              fontStyle: "italic",
              fontSize: "20px",
              lineHeight: "1.4",
              color: C.lime,
              margin: "0",
              fontVariationSettings: '"opsz" 36, "SOFT" 50, "WONK" 0',
            }}
          >
            The kindest thing you&rsquo;ll ever leave behind.
          </blockquote>
        </div>

        {/* ── SOLUTION — numbered editorial steps ── */}
        <section style={{ padding: "48px 0 0", borderBottom: `1px solid ${C.forestLight}` }}>
          {/* Section header with rules */}
          <div
            style={{
              padding: "0 24px",
              marginBottom: "32px",
              display: "flex",
              alignItems: "center",
              gap: "14px",
            }}
          >
            <div style={{ flex: 1, height: "1px", background: C.forestLight }} />
            <p
              style={{
                fontFamily: "var(--font-fraunces)",
                fontStyle: "italic",
                fontSize: "13px",
                color: C.lime,
                whiteSpace: "nowrap",
                fontVariationSettings: '"opsz" 12, "SOFT" 20, "WONK" 0',
              }}
            >
              {solution.intro}
            </p>
            <div style={{ flex: 1, height: "1px", background: C.forestLight }} />
          </div>

          <ol style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {solution.steps.map((step, i) => (
              <li
                key={i}
                style={{
                  borderTop: i === 0 ? `1px solid ${C.forestLight}` : "none",
                  borderBottom: `1px solid ${C.forestLight}`,
                  padding: "0",
                  display: "grid",
                  gridTemplateColumns: "52px 1fr",
                }}
              >
                {/* Step number column */}
                <div
                  style={{
                    borderRight: `1px solid ${C.forestLight}`,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    paddingTop: "24px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-fraunces)",
                      fontStyle: "italic",
                      fontSize: "28px",
                      color: i === 1 ? C.lime : C.sageDim,
                      lineHeight: "1",
                      fontVariationSettings: '"opsz" 36, "SOFT" 60, "WONK" 1',
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Content column */}
                <div style={{ padding: "24px 20px 28px" }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-fraunces)",
                      fontStyle: "normal",
                      fontSize: "17px",
                      lineHeight: "1.28",
                      letterSpacing: "-0.01em",
                      color: C.cream,
                      margin: "0 0 10px",
                      fontVariationSettings: '"opsz" 24, "SOFT" 10, "WONK" 0',
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-lora)",
                      fontSize: "13.5px",
                      lineHeight: "1.7",
                      color: C.sage,
                      margin: 0,
                    }}
                  >
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* ── TESTIMONIALS — editorial quotes ── */}
        <section
          style={{
            padding: "48px 24px",
            borderBottom: `1px solid ${C.forestLight}`,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              marginBottom: "36px",
            }}
          >
            <div style={{ flex: 1, height: "1px", background: C.lime }} />
            <p
              style={{
                fontFamily: "var(--font-lora)",
                fontStyle: "italic",
                fontSize: "10px",
                letterSpacing: "0.2em",
                color: C.sage,
                textTransform: "uppercase",
                whiteSpace: "nowrap",
              }}
            >
              Voices
            </p>
            <div style={{ flex: 1, height: "1px", background: C.lime }} />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {testimonials.map((t, i) => (
              <figure
                key={i}
                style={{
                  margin: 0,
                  padding: "28px 0",
                  borderBottom:
                    i < testimonials.length - 1 ? `1px solid ${C.forestLight}` : "none",
                }}
              >
                {/* Asymmetric: alternate alignment */}
                <div
                  style={{
                    paddingLeft: i % 2 === 1 ? "20px" : "0",
                    borderLeft: i % 2 === 1 ? `2px solid ${C.lime}` : "none",
                    paddingRight: i % 2 === 0 ? "20px" : "0",
                    borderRight: i % 2 === 0 ? `2px solid ${C.sageDim}` : "none",
                  }}
                >
                  <blockquote
                    style={{
                      fontFamily: "var(--font-fraunces)",
                      fontStyle: "italic",
                      fontSize: "16.5px",
                      lineHeight: "1.5",
                      color: C.cream,
                      margin: "0 0 12px",
                      fontVariationSettings: '"opsz" 24, "SOFT" 40, "WONK" 0',
                    }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption
                    style={{
                      fontFamily: "var(--font-lora)",
                      fontSize: "10px",
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: i % 2 === 1 ? C.lime : C.sageDim,
                    }}
                  >
                    {t.name} &middot; {t.age}
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>
        </section>

        {/* ── PRICING ── */}
        <section
          ref={fd.pricingRef}
          style={{
            padding: "48px 24px",
            borderBottom: `3px solid ${C.lime}`,
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-lora)",
              fontSize: "9px",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: C.lime,
              marginBottom: "16px",
            }}
          >
            Membership
          </p>
          <h2
            style={{
              fontFamily: "var(--font-fraunces)",
              fontStyle: "normal",
              fontSize: "30px",
              lineHeight: "1.1",
              letterSpacing: "-0.02em",
              color: C.cream,
              margin: "0 0 12px",
              fontVariationSettings: '"opsz" 48, "SOFT" 10, "WONK" 0',
            }}
          >
            {pricing.title}
          </h2>
          <p
            style={{
              fontFamily: "var(--font-lora)",
              fontStyle: "italic",
              fontSize: "14px",
              lineHeight: "1.65",
              color: C.sage,
              marginBottom: "36px",
            }}
          >
            {pricing.subtitle}
          </p>

          {/* Plans */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2px", marginBottom: "28px" }}>
            {pricing.plans.map((plan, i) => (
              <div
                key={i}
                style={{
                  background: plan.highlight ? C.lime : C.forestMid,
                  padding: "24px",
                  position: "relative",
                  border: plan.highlight ? "none" : `1px solid ${C.forestLight}`,
                }}
              >
                {plan.highlight && (
                  <span
                    style={{
                      position: "absolute",
                      top: "12px",
                      right: "16px",
                      fontFamily: "var(--font-lora)",
                      fontSize: "8px",
                      letterSpacing: "0.24em",
                      textTransform: "uppercase",
                      color: C.lime,
                      background: C.forest,
                      padding: "3px 8px",
                      border: `1px solid ${C.forest}`,
                    }}
                  >
                    Best value
                  </span>
                )}
                <p
                  style={{
                    fontFamily: "var(--font-lora)",
                    fontSize: "10px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: plan.highlight ? C.forest : C.sageDim,
                    marginBottom: "8px",
                  }}
                >
                  {plan.name}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-fraunces)",
                    fontStyle: "normal",
                    fontSize: "38px",
                    lineHeight: "1",
                    letterSpacing: "-0.02em",
                    color: plan.highlight ? C.forest : C.cream,
                    margin: "0 0 4px",
                    fontVariationSettings: '"opsz" 72, "SOFT" 0, "WONK" 0',
                  }}
                >
                  {plan.price}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-lora)",
                    fontStyle: "italic",
                    fontSize: "12px",
                    color: plan.highlight ? C.forestLight : C.sageDim,
                    marginBottom: "20px",
                  }}
                >
                  {plan.descriptor}
                </p>
                <button
                  onClick={() => fd.onCta(`pricing-${plan.name.toLowerCase()}`)}
                  style={{
                    display: "block",
                    width: "100%",
                    padding: "13px 0",
                    background: plan.highlight ? C.forest : C.lime,
                    color: plan.highlight ? C.lime : C.forest,
                    border: "none",
                    fontFamily: "var(--font-fraunces)",
                    fontStyle: "italic",
                    fontSize: "15px",
                    letterSpacing: "-0.01em",
                    fontVariationSettings: '"opsz" 20, "SOFT" 0, "WONK" 0',
                    cursor: "pointer",
                  }}
                >
                  {plan.ctaLabel} →
                </button>
              </div>
            ))}
          </div>

          {/* Included features — two-column grid */}
          <div
            style={{
              borderTop: `1px solid ${C.forestLight}`,
              paddingTop: "24px",
              marginBottom: "20px",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-lora)",
                fontSize: "9px",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: C.sageDim,
                marginBottom: "16px",
              }}
            >
              Everything included
            </p>
            <ul
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "10px 16px",
                listStyle: "none",
                margin: 0,
                padding: 0,
              }}
            >
              {pricing.included.map((feature, i) => (
                <li
                  key={i}
                  style={{
                    fontFamily: "var(--font-lora)",
                    fontSize: "12.5px",
                    lineHeight: "1.4",
                    color: C.sage,
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "6px",
                  }}
                >
                  <span style={{ color: C.lime, flexShrink: 0, marginTop: "1px" }}>—</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <p
            style={{
              fontFamily: "var(--font-lora)",
              fontStyle: "italic",
              fontSize: "12px",
              color: C.sageDim,
              textAlign: "center",
              lineHeight: "1.6",
            }}
          >
            {pricing.scarcityLine}
          </p>
        </section>

        {/* ── FAQ — accordion with editorial rules ── */}
        <section style={{ padding: "48px 0", borderBottom: `1px solid ${C.forestLight}` }}>
          <div
            style={{
              padding: "0 24px",
              marginBottom: "32px",
              display: "flex",
              alignItems: "center",
              gap: "14px",
            }}
          >
            <div style={{ flex: 1, height: "1px", background: C.forestLight }} />
            <p
              style={{
                fontFamily: "var(--font-fraunces)",
                fontStyle: "italic",
                fontSize: "13px",
                color: C.sage,
                whiteSpace: "nowrap",
                fontVariationSettings: '"opsz" 12, "SOFT" 20, "WONK" 0',
              }}
            >
              Questions
            </p>
            <div style={{ flex: 1, height: "1px", background: C.forestLight }} />
          </div>

          {faq.map((item, i) => (
            <details
              key={i}
              style={{
                borderTop: `1px solid ${C.forestLight}`,
              }}
            >
              <summary
                style={{
                  listStyle: "none",
                  padding: "20px 24px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: "12px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-fraunces)",
                    fontStyle: "normal",
                    fontSize: "15px",
                    lineHeight: "1.35",
                    letterSpacing: "-0.01em",
                    color: C.cream,
                    fontVariationSettings: '"opsz" 20, "SOFT" 10, "WONK" 0',
                  }}
                >
                  {item.q}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-fraunces)",
                    fontSize: "20px",
                    color: C.lime,
                    flexShrink: 0,
                    lineHeight: "1.2",
                    marginTop: "1px",
                    fontVariationSettings: '"opsz" 20, "SOFT" 0, "WONK" 0',
                  }}
                >
                  +
                </span>
              </summary>
              <p
                style={{
                  fontFamily: "var(--font-lora)",
                  fontSize: "13.5px",
                  lineHeight: "1.72",
                  color: C.sage,
                  padding: "0 24px 24px",
                  margin: 0,
                  borderLeft: `2px solid ${C.lime}`,
                  marginLeft: "24px",
                  paddingLeft: "20px",
                }}
              >
                {item.a}
              </p>
            </details>
          ))}
          <div style={{ borderTop: `1px solid ${C.forestLight}` }} />
        </section>

        {/* ── FINAL CTA ── */}
        <section
          style={{
            padding: "56px 24px",
            background: C.forestMid,
            borderBottom: `3px solid ${C.lime}`,
            textAlign: "center",
          }}
        >
          {/* Decorative rule above */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "32px",
            }}
          >
            <div style={{ flex: 1, height: "1px", background: C.lime }} />
            <span
              style={{
                fontFamily: "var(--font-lora)",
                fontSize: "8px",
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: C.lime,
                whiteSpace: "nowrap",
              }}
            >
              ✦
            </span>
            <div style={{ flex: 1, height: "1px", background: C.lime }} />
          </div>

          <h2
            style={{
              fontFamily: "var(--font-fraunces)",
              fontStyle: "italic",
              fontSize: "40px",
              lineHeight: "1.0",
              letterSpacing: "-0.02em",
              color: C.cream,
              margin: "0 0 28px",
              fontVariationSettings: '"opsz" 72, "SOFT" 40, "WONK" 0',
            }}
          >
            {content.finalCta.headline}
          </h2>
          <button
            onClick={() => fd.onCta("final")}
            style={{
              background: C.lime,
              color: C.forest,
              border: "none",
              padding: "16px 40px",
              fontFamily: "var(--font-fraunces)",
              fontStyle: "italic",
              fontSize: "17px",
              letterSpacing: "-0.01em",
              fontVariationSettings: '"opsz" 20, "SOFT" 0, "WONK" 0',
              cursor: "pointer",
              display: "inline-block",
            }}
          >
            {content.finalCta.ctaLabel} →
          </button>
        </section>

        {/* ── FAKE-DOOR ── */}
        {fd.showWaitlist && (
          <section
            id="waitlist"
            style={{
              padding: "48px 24px",
              background: C.forest,
              borderBottom: `1px solid ${C.lime}`,
            }}
          >
            {fd.state === "done" ? (
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    width: "40px",
                    height: "2px",
                    background: C.lime,
                    margin: "0 auto 24px",
                  }}
                />
                <p
                  style={{
                    fontFamily: "var(--font-fraunces)",
                    fontStyle: "italic",
                    fontSize: "28px",
                    lineHeight: "1.18",
                    color: C.cream,
                    margin: "0 0 16px",
                    fontVariationSettings: '"opsz" 48, "SOFT" 40, "WONK" 0',
                  }}
                >
                  {content.confirmation.title}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-lora)",
                    fontSize: "14px",
                    lineHeight: "1.7",
                    color: C.sage,
                  }}
                >
                  {content.confirmation.body}
                </p>
              </div>
            ) : (
              <>
                <p
                  style={{
                    fontFamily: "var(--font-lora)",
                    fontSize: "9px",
                    letterSpacing: "0.28em",
                    textTransform: "uppercase",
                    color: C.lime,
                    marginBottom: "14px",
                  }}
                >
                  Early access
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-fraunces)",
                    fontStyle: "italic",
                    fontSize: "28px",
                    lineHeight: "1.15",
                    letterSpacing: "-0.01em",
                    color: C.cream,
                    margin: "0 0 14px",
                    fontVariationSettings: '"opsz" 36, "SOFT" 40, "WONK" 0',
                  }}
                >
                  {fakedoor.title}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-lora)",
                    fontSize: "14px",
                    lineHeight: "1.7",
                    color: C.sage,
                    marginBottom: "28px",
                  }}
                >
                  {fakedoor.body}
                </p>
                <form
                  onSubmit={fd.submit}
                  style={{ display: "flex", flexDirection: "column", gap: "10px" }}
                >
                  <input
                    type="email"
                    required
                    value={fd.email}
                    onChange={(e) => fd.setEmail(e.target.value)}
                    placeholder={fakedoor.emailPlaceholder}
                    style={{
                      width: "100%",
                      padding: "14px 16px",
                      background: C.forestMid,
                      border: `1px solid ${C.forestLight}`,
                      color: C.cream,
                      fontFamily: "var(--font-lora)",
                      fontSize: "14px",
                      outline: "none",
                      boxSizing: "border-box",
                    }}
                  />
                  <button
                    type="submit"
                    disabled={fd.state === "loading"}
                    style={{
                      width: "100%",
                      padding: "15px",
                      background: fd.state === "loading" ? C.sageDim : C.lime,
                      color: C.forest,
                      border: "none",
                      fontFamily: "var(--font-fraunces)",
                      fontStyle: "italic",
                      fontSize: "16px",
                      letterSpacing: "-0.01em",
                      fontVariationSettings: '"opsz" 20, "SOFT" 0, "WONK" 0',
                      cursor: fd.state === "loading" ? "not-allowed" : "pointer",
                    }}
                  >
                    {fd.state === "loading" ? "Sending…" : fakedoor.submitLabel}
                  </button>
                  {fd.state === "error" && (
                    <p
                      style={{
                        fontFamily: "var(--font-lora)",
                        fontSize: "12px",
                        color: "#E06C5A",
                        textAlign: "center",
                        margin: 0,
                      }}
                    >
                      Something went wrong. Please try again.
                    </p>
                  )}
                </form>
                <p
                  style={{
                    fontFamily: "var(--font-lora)",
                    fontStyle: "italic",
                    fontSize: "11px",
                    color: C.sageDim,
                    textAlign: "center",
                    marginTop: "16px",
                  }}
                >
                  {fakedoor.privacyLine}
                </p>
              </>
            )}
          </section>
        )}

        {/* ── FOOTER ── */}
        <footer
          style={{
            padding: "32px 24px 40px",
            borderTop: `1px solid ${C.lime}`,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-fraunces)",
                fontStyle: "italic",
                fontSize: "12px",
                lineHeight: "1.5",
                color: C.sage,
                margin: 0,
                maxWidth: "22ch",
                fontVariationSettings: '"opsz" 12, "SOFT" 20, "WONK" 0',
              }}
            >
              {footer.lines[0]}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", alignItems: "flex-end" }}>
              {footer.lines.slice(1).map((line, i) => (
                <span
                  key={i}
                  style={{
                    fontFamily: "var(--font-lora)",
                    fontSize: "9px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: C.sageDim,
                  }}
                >
                  {line}
                </span>
              ))}
            </div>
          </div>
        </footer>

        {/* ── STICKY CTA ── */}
        <div
          style={{
            position: "fixed",
            inset: "auto 0 0 0",
            zIndex: 40,
            padding: "12px 24px 20px",
            background: `linear-gradient(to top, ${C.forest} 70%, transparent)`,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button
            onClick={() => fd.onCta("sticky")}
            style={{
              width: "100%",
              maxWidth: "342px",
              padding: "15px 24px",
              background: C.lime,
              color: C.forest,
              border: "none",
              fontFamily: "var(--font-fraunces)",
              fontStyle: "italic",
              fontSize: "16px",
              letterSpacing: "-0.01em",
              fontVariationSettings: '"opsz" 20, "SOFT" 0, "WONK" 0',
              cursor: "pointer",
              boxShadow: `0 8px 32px -8px ${C.lime}55`,
            }}
          >
            {hero.ctaLabel} →
          </button>
        </div>

        {/* Bottom spacer for sticky bar */}
        <div style={{ height: "72px" }} />
      </main>
    </div>
  );
}
