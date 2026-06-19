"use client";

import { Fraunces, DM_Serif_Display } from "next/font/google";
import type { DesignProps } from "@/designs/types";
import { useFakeDoor } from "@/designs/shared/useFakeDoor";

// AXIS 04 — TEXTURE / DEPTH
// Display: Fraunces (variable — opsz, SOFT, WONK axes only) — warm, ink-pressed
//   softness. The SOFT axis gives rounded serifs; WONK tilts glyphs off-center,
//   a deliberate imperfection that reads as hand-set letterpress.
// Body / labels: DM Serif Display — classical, confident, lighter weight.
// Palette: deep forest #16271F dominant, electric lime #C8F169 accent,
//   cream #EFEAD8 for card surfaces, muted sage #9DB39A for secondary text.
// Texture: SVG feTurbulence grain filter as a fixed overlay (CSS pointer-events:none).
//   Layered radial gradients + pseudo-element vignettes create material depth.
//   Cards feel like aged paper pressed into dark earth.

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

// ─── PALETTE tokens ─────────────────────────────────────────────────────────
const C = {
  forest: "#16271F",
  lime: "#C8F169",
  cream: "#EFEAD8",
  sage: "#9DB39A",
  dimSage: "#6B8C73",
  darkCard: "#1E3228",
  midCard: "#243B2C",
  limeText: "#B8E055",
  forestText: "#16271F",
  creamy: "#F5F0E4",
} as const;

export default function TextureDepthDesign({ content, slug }: DesignProps) {
  const fd = useFakeDoor(slug);
  const { hero, problem, solution, pricing, testimonials, faq, fakedoor, footer } = content;

  return (
    <div className={`${fraunces.variable} ${dmSerif.variable}`}>
      {/* ── GRAIN OVERLAY (fixed, pointer-events none) ── */}
      <div
        aria-hidden
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 999,
          pointerEvents: "none",
          opacity: 0.055,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "300px 300px",
        }}
      />

      <main
        style={{
          background: `radial-gradient(ellipse 120% 60% at 50% 0%, #1F3A28 0%, ${C.forest} 55%)`,
          minHeight: "100vh",
          color: C.cream,
          fontFamily: "var(--font-dm-serif), Georgia, serif",
          WebkitFontSmoothing: "antialiased",
        }}
      >
        <div style={{ maxWidth: 420, margin: "0 auto", padding: "0 20px 120px" }}>

          {/* ───────────────────── HERO ───────────────────── */}
          <header style={{ paddingTop: 32 }}>

            {/* Brand lockup */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 40 }}>
              <span
                style={{
                  fontFamily: "var(--font-fraunces), serif",
                  fontStyle: "italic",
                  fontSize: 18,
                  color: C.lime,
                  fontVariationSettings: '"opsz" 72, "SOFT" 50, "WONK" 1',
                  letterSpacing: "0.01em",
                }}
              >
                {hero.brandLockup}
              </span>
              <span
                style={{
                  fontSize: 9,
                  textTransform: "uppercase",
                  letterSpacing: "0.26em",
                  color: C.sage,
                  border: `1px solid ${C.dimSage}44`,
                  borderRadius: 999,
                  padding: "4px 12px",
                }}
              >
                Legacy, gently kept
              </span>
            </div>

            {/* Hero text block — CSS-only, no image */}
            <div
              style={{
                position: "relative",
                borderRadius: 28,
                overflow: "hidden",
                background: `radial-gradient(ellipse 90% 70% at 30% 20%, #243B2C, #16271F 80%)`,
                boxShadow: `0 32px 80px -24px rgba(0,0,0,0.7), inset 0 1px 0 rgba(200,241,105,0.08)`,
                border: `1px solid rgba(200,241,105,0.10)`,
                padding: "48px 32px 40px",
                marginBottom: 32,
              }}
            >
              {/* decorative lime ring — top right */}
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  top: -60,
                  right: -60,
                  width: 180,
                  height: 180,
                  borderRadius: "50%",
                  border: `1px solid rgba(200,241,105,0.12)`,
                  pointerEvents: "none",
                }}
              />
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  top: -30,
                  right: -30,
                  width: 120,
                  height: 120,
                  borderRadius: "50%",
                  border: `1px solid rgba(200,241,105,0.18)`,
                  pointerEvents: "none",
                }}
              />

              {/* Step counter / kicker */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 24,
                  background: "rgba(200,241,105,0.08)",
                  borderRadius: 999,
                  padding: "5px 14px 5px 8px",
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: C.lime,
                    display: "inline-block",
                    boxShadow: `0 0 8px ${C.lime}`,
                  }}
                />
                <span style={{ fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: C.sage }}>
                  For those who care
                </span>
              </div>

              <h1
                style={{
                  fontFamily: "var(--font-fraunces), serif",
                  fontVariationSettings: '"opsz" 72, "SOFT" 30, "WONK" 0',
                  fontSize: 38,
                  lineHeight: 1.06,
                  letterSpacing: "-0.02em",
                  color: C.cream,
                  margin: 0,
                  marginBottom: 20,
                }}
              >
                {hero.title}
              </h1>

              <p
                style={{
                  fontSize: 15.5,
                  lineHeight: 1.68,
                  color: C.sage,
                  margin: 0,
                  marginBottom: 32,
                  maxWidth: "34ch",
                }}
              >
                {hero.subtitle}
              </p>

              <button
                onClick={() => fd.onCta("hero")}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  background: C.lime,
                  color: C.forest,
                  border: "none",
                  borderRadius: 999,
                  padding: "15px 28px",
                  fontSize: 15,
                  fontWeight: 700,
                  fontFamily: "var(--font-fraunces), serif",
                  fontVariationSettings: '"opsz" 18, "SOFT" 0, "WONK" 0',
                  cursor: "pointer",
                  letterSpacing: "-0.01em",
                  boxShadow: `0 12px 36px -12px rgba(200,241,105,0.45)`,
                  width: "100%",
                  justifyContent: "center",
                }}
              >
                {hero.ctaLabel}
                <span style={{ fontSize: 18 }}>→</span>
              </button>

              <p
                style={{
                  marginTop: 18,
                  textAlign: "center",
                  fontSize: 12,
                  color: C.dimSage,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 6,
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    background: C.lime,
                  }}
                />
                {hero.reassuranceLine}
              </p>
            </div>
          </header>

          {/* ───────────────────── PROBLEM ───────────────────── */}
          <section style={{ marginTop: 72, textAlign: "center" }}>
            <p
              style={{
                fontSize: 9.5,
                textTransform: "uppercase",
                letterSpacing: "0.36em",
                color: C.dimSage,
                marginBottom: 24,
              }}
            >
              The quiet problem
            </p>

            {/* Ink rule */}
            <div
              style={{
                width: 32,
                height: 2,
                background: `linear-gradient(90deg, transparent, ${C.lime}, transparent)`,
                margin: "0 auto 24px",
                borderRadius: 999,
              }}
            />

            <h2
              style={{
                fontFamily: "var(--font-fraunces), serif",
                fontVariationSettings: '"opsz" 48, "SOFT" 20, "WONK" 0',
                fontSize: 28,
                lineHeight: 1.18,
                letterSpacing: "-0.01em",
                color: C.cream,
                margin: "0 auto 20px",
                maxWidth: "22ch",
              }}
            >
              {problem.title}
            </h2>

            <p
              style={{
                fontSize: 15,
                lineHeight: 1.72,
                color: C.sage,
                margin: "0 auto",
                maxWidth: "34ch",
              }}
            >
              {problem.body}
            </p>
          </section>

          {/* ───────────────────── SOLUTION ───────────────────── */}
          <section style={{ marginTop: 80 }}>
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <p
                style={{
                  fontSize: 9.5,
                  textTransform: "uppercase",
                  letterSpacing: "0.36em",
                  color: C.dimSage,
                  marginBottom: 8,
                }}
              >
                {solution.intro}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-fraunces), serif",
                  fontStyle: "italic",
                  fontSize: 14,
                  color: C.sage,
                  fontVariationSettings: '"opsz" 18, "SOFT" 50, "WONK" 1',
                }}
              >
                three grounded steps
              </p>
            </div>

            <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
              {solution.steps.map((s, i) => (
                <li
                  key={i}
                  style={{
                    position: "relative",
                    borderRadius: 22,
                    background: `linear-gradient(145deg, ${C.darkCard}, ${C.midCard})`,
                    border: `1px solid rgba(200,241,105,0.07)`,
                    boxShadow: `0 20px 48px -24px rgba(0,0,0,0.55), inset 0 1px 0 rgba(239,234,216,0.04)`,
                    padding: "28px 24px 28px",
                    overflow: "hidden",
                  }}
                >
                  {/* Corner texture mark */}
                  <div
                    aria-hidden
                    style={{
                      position: "absolute",
                      bottom: -20,
                      right: -20,
                      width: 80,
                      height: 80,
                      borderRadius: "50%",
                      border: `1px solid rgba(200,241,105,0.06)`,
                      pointerEvents: "none",
                    }}
                  />

                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      background: "rgba(200,241,105,0.08)",
                      border: `1px solid rgba(200,241,105,0.2)`,
                      fontFamily: "var(--font-fraunces), serif",
                      fontVariationSettings: '"opsz" 36, "SOFT" 30, "WONK" 0',
                      fontStyle: "italic",
                      fontSize: 18,
                      color: C.lime,
                      marginBottom: 16,
                    }}
                  >
                    {i + 1}
                  </span>

                  <h3
                    style={{
                      fontFamily: "var(--font-fraunces), serif",
                      fontVariationSettings: '"opsz" 36, "SOFT" 20, "WONK" 0',
                      fontSize: 19,
                      lineHeight: 1.25,
                      color: C.cream,
                      margin: "0 0 12px",
                      letterSpacing: "-0.005em",
                    }}
                  >
                    {s.title}
                  </h3>

                  <p
                    style={{
                      fontSize: 13.5,
                      lineHeight: 1.68,
                      color: C.sage,
                      margin: 0,
                    }}
                  >
                    {s.body}
                  </p>
                </li>
              ))}
            </ol>
          </section>

          {/* ───────────────────── PRICING ───────────────────── */}
          <section
            ref={fd.pricingRef}
            style={{ marginTop: 80 }}
          >
            <div style={{ textAlign: "center", marginBottom: 32 }}>
              <p
                style={{
                  fontSize: 9.5,
                  textTransform: "uppercase",
                  letterSpacing: "0.36em",
                  color: C.dimSage,
                  marginBottom: 16,
                }}
              >
                Membership
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-fraunces), serif",
                  fontVariationSettings: '"opsz" 48, "SOFT" 20, "WONK" 0',
                  fontSize: 26,
                  lineHeight: 1.18,
                  color: C.cream,
                  margin: "0 auto 14px",
                  maxWidth: "22ch",
                  letterSpacing: "-0.01em",
                }}
              >
                {pricing.title}
              </h2>
              <p
                style={{
                  fontSize: 14.5,
                  lineHeight: 1.65,
                  color: C.sage,
                  margin: "0 auto",
                  maxWidth: "34ch",
                }}
              >
                {pricing.subtitle}
              </p>
            </div>

            {/* Plans */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {pricing.plans.map((plan, i) => (
                <div
                  key={i}
                  style={
                    plan.highlight
                      ? {
                          position: "relative",
                          borderRadius: 22,
                          background: `linear-gradient(150deg, #1E4030, #16271F)`,
                          border: `1px solid rgba(200,241,105,0.28)`,
                          boxShadow: `0 0 0 1px rgba(200,241,105,0.06), 0 28px 64px -28px rgba(200,241,105,0.2)`,
                          padding: "28px 24px 24px",
                          overflow: "hidden",
                        }
                      : {
                          position: "relative",
                          borderRadius: 22,
                          background: `linear-gradient(145deg, ${C.darkCard}, ${C.midCard})`,
                          border: `1px solid rgba(200,241,105,0.06)`,
                          boxShadow: `0 16px 40px -20px rgba(0,0,0,0.45)`,
                          padding: "24px 24px 22px",
                          overflow: "hidden",
                        }
                  }
                >
                  {plan.highlight && (
                    <>
                      {/* Top label */}
                      <div
                        style={{
                          position: "absolute",
                          top: -1,
                          left: "50%",
                          transform: "translateX(-50%)",
                          background: C.lime,
                          color: C.forest,
                          fontSize: 9,
                          fontWeight: 700,
                          letterSpacing: "0.2em",
                          textTransform: "uppercase",
                          padding: "4px 14px",
                          borderRadius: "0 0 10px 10px",
                        }}
                      >
                        Best value
                      </div>
                      {/* Ambient lime glow */}
                      <div
                        aria-hidden
                        style={{
                          position: "absolute",
                          top: -40,
                          right: -40,
                          width: 140,
                          height: 140,
                          borderRadius: "50%",
                          background: "rgba(200,241,105,0.05)",
                          pointerEvents: "none",
                        }}
                      />
                    </>
                  )}

                  <div style={{ marginTop: plan.highlight ? 12 : 0 }}>
                    <p
                      style={{
                        fontFamily: "var(--font-fraunces), serif",
                        fontVariationSettings: '"opsz" 18, "SOFT" 40, "WONK" 1',
                        fontStyle: "italic",
                        fontSize: 13,
                        color: plan.highlight ? C.limeText : C.dimSage,
                        marginBottom: 6,
                      }}
                    >
                      {plan.name}
                    </p>

                    <p
                      style={{
                        fontFamily: "var(--font-fraunces), serif",
                        fontVariationSettings: '"opsz" 72, "SOFT" 0, "WONK" 0',
                        fontSize: 40,
                        lineHeight: 1,
                        color: plan.highlight ? C.lime : C.cream,
                        letterSpacing: "-0.025em",
                        margin: "0 0 6px",
                      }}
                    >
                      {plan.price}
                    </p>

                    <p
                      style={{
                        fontSize: 12.5,
                        color: plan.highlight ? C.sage : C.dimSage,
                        marginBottom: 20,
                      }}
                    >
                      {plan.descriptor}
                    </p>

                    <button
                      onClick={() => fd.onCta(`pricing-${plan.name.toLowerCase()}`)}
                      style={
                        plan.highlight
                          ? {
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              gap: 8,
                              width: "100%",
                              background: C.lime,
                              color: C.forest,
                              border: "none",
                              borderRadius: 999,
                              padding: "13px 24px",
                              fontSize: 14.5,
                              fontWeight: 700,
                              fontFamily: "var(--font-fraunces), serif",
                              fontVariationSettings: '"opsz" 18, "SOFT" 0, "WONK" 0',
                              cursor: "pointer",
                              letterSpacing: "-0.005em",
                              boxShadow: `0 8px 24px -8px rgba(200,241,105,0.4)`,
                            }
                          : {
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              gap: 8,
                              width: "100%",
                              background: "rgba(239,234,216,0.07)",
                              color: C.cream,
                              border: `1px solid rgba(239,234,216,0.14)`,
                              borderRadius: 999,
                              padding: "12px 24px",
                              fontSize: 14.5,
                              fontFamily: "var(--font-fraunces), serif",
                              fontVariationSettings: '"opsz" 18, "SOFT" 0, "WONK" 0',
                              cursor: "pointer",
                              letterSpacing: "-0.005em",
                            }
                      }
                    >
                      {plan.ctaLabel}
                      <span>→</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Included features */}
            <div
              style={{
                marginTop: 16,
                borderRadius: 22,
                background: `linear-gradient(145deg, #1A2F21, #16271F)`,
                border: `1px solid rgba(200,241,105,0.06)`,
                padding: "24px 24px",
              }}
            >
              <p
                style={{
                  fontSize: 9.5,
                  textTransform: "uppercase",
                  letterSpacing: "0.3em",
                  color: C.dimSage,
                  textAlign: "center",
                  marginBottom: 20,
                }}
              >
                Everything included
              </p>

              <ul
                style={{
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "10px 8px",
                }}
              >
                {pricing.included.map((feature, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      fontSize: 12.5,
                      color: C.sage,
                    }}
                  >
                    <span
                      style={{
                        flexShrink: 0,
                        width: 14,
                        height: 14,
                        borderRadius: "50%",
                        background: "rgba(200,241,105,0.12)",
                        border: `1px solid rgba(200,241,105,0.25)`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 8,
                        color: C.lime,
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
              style={{
                marginTop: 16,
                textAlign: "center",
                fontSize: 12,
                color: C.dimSage,
                lineHeight: 1.6,
              }}
            >
              {pricing.scarcityLine}
            </p>
          </section>

          {/* ───────────────────── TESTIMONIALS ───────────────────── */}
          <section style={{ marginTop: 80 }}>
            <p
              style={{
                fontSize: 9.5,
                textTransform: "uppercase",
                letterSpacing: "0.36em",
                color: C.dimSage,
                textAlign: "center",
                marginBottom: 32,
              }}
            >
              From those who started
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {testimonials.map((t, i) => (
                <figure
                  key={i}
                  style={{
                    margin: 0,
                    borderRadius: 22,
                    background: `linear-gradient(145deg, ${C.darkCard}, #1A2E24)`,
                    border: `1px solid rgba(200,241,105,0.06)`,
                    boxShadow: `0 16px 40px -20px rgba(0,0,0,0.45), inset 0 1px 0 rgba(239,234,216,0.03)`,
                    padding: "28px 24px 22px",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Grain texture patch */}
                  <div
                    aria-hidden
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 3,
                      background: i === 0
                        ? `linear-gradient(90deg, transparent, ${C.lime}30, transparent)`
                        : i === 1
                          ? `linear-gradient(90deg, transparent, ${C.sage}20, transparent)`
                          : `linear-gradient(90deg, transparent, ${C.cream}15, transparent)`,
                      pointerEvents: "none",
                    }}
                  />

                  <span
                    aria-hidden
                    style={{
                      display: "block",
                      fontFamily: "var(--font-fraunces), serif",
                      fontVariationSettings: '"opsz" 72, "SOFT" 60, "WONK" 1',
                      fontSize: 52,
                      lineHeight: 0.8,
                      color: "rgba(200,241,105,0.2)",
                      marginBottom: 12,
                    }}
                  >
                    &ldquo;
                  </span>

                  <blockquote
                    style={{
                      margin: 0,
                      fontFamily: "var(--font-fraunces), serif",
                      fontVariationSettings: '"opsz" 36, "SOFT" 15, "WONK" 0',
                      fontSize: 17.5,
                      lineHeight: 1.5,
                      color: C.cream,
                      letterSpacing: "-0.005em",
                    }}
                  >
                    {t.quote}
                  </blockquote>

                  <figcaption
                    style={{
                      marginTop: 16,
                      fontSize: 11,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: C.dimSage,
                    }}
                  >
                    {t.name} · {t.age}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>

          {/* ───────────────────── FAQ ───────────────────── */}
          <section style={{ marginTop: 80 }}>
            <p
              style={{
                fontSize: 9.5,
                textTransform: "uppercase",
                letterSpacing: "0.36em",
                color: C.dimSage,
                textAlign: "center",
                marginBottom: 24,
              }}
            >
              Questions you might have
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {faq.map((item, i) => (
                <details
                  key={i}
                  style={{
                    borderRadius: 18,
                    background: `linear-gradient(145deg, ${C.darkCard}, #16271F)`,
                    border: `1px solid rgba(200,241,105,0.07)`,
                    overflow: "hidden",
                  }}
                >
                  <summary
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      gap: 12,
                      padding: "18px 20px",
                      cursor: "pointer",
                      listStyle: "none",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-fraunces), serif",
                        fontVariationSettings: '"opsz" 36, "SOFT" 15, "WONK" 0',
                        fontSize: 16,
                        lineHeight: 1.32,
                        color: C.cream,
                        letterSpacing: "-0.005em",
                      }}
                    >
                      {item.q}
                    </span>
                    <span
                      style={{
                        flexShrink: 0,
                        width: 26,
                        height: 26,
                        borderRadius: "50%",
                        background: "rgba(200,241,105,0.08)",
                        border: `1px solid rgba(200,241,105,0.18)`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 18,
                        color: C.lime,
                        lineHeight: 1,
                        marginTop: 2,
                      }}
                    >
                      +
                    </span>
                  </summary>
                  <p
                    style={{
                      fontSize: 13.5,
                      lineHeight: 1.68,
                      color: C.sage,
                      padding: "0 20px 18px",
                      margin: 0,
                    }}
                  >
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </section>

          {/* ───────────────────── FINAL CTA ───────────────────── */}
          <section
            style={{
              marginTop: 80,
              borderRadius: 28,
              position: "relative",
              overflow: "hidden",
              background: `linear-gradient(150deg, #1E4030 0%, #16271F 100%)`,
              border: `1px solid rgba(200,241,105,0.18)`,
              boxShadow: `0 0 0 1px rgba(200,241,105,0.04), 0 32px 80px -24px rgba(200,241,105,0.12)`,
              padding: "52px 28px 48px",
              textAlign: "center",
            }}
          >
            {/* Ambient glow */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                top: -60,
                left: "50%",
                transform: "translateX(-50%)",
                width: 200,
                height: 200,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(200,241,105,0.08) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />

            {/* Thin rule */}
            <div
              style={{
                width: 40,
                height: 1,
                background: `linear-gradient(90deg, transparent, ${C.lime}60, transparent)`,
                margin: "0 auto 28px",
                borderRadius: 999,
              }}
            />

            <h2
              style={{
                fontFamily: "var(--font-fraunces), serif",
                fontVariationSettings: '"opsz" 72, "SOFT" 20, "WONK" 0',
                fontSize: 32,
                lineHeight: 1.1,
                color: C.cream,
                margin: "0 auto 32px",
                maxWidth: "18ch",
                letterSpacing: "-0.015em",
              }}
            >
              {content.finalCta.headline}
            </h2>

            <button
              onClick={() => fd.onCta("final")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                background: C.lime,
                color: C.forest,
                border: "none",
                borderRadius: 999,
                padding: "15px 32px",
                fontSize: 15,
                fontWeight: 700,
                fontFamily: "var(--font-fraunces), serif",
                fontVariationSettings: '"opsz" 18, "SOFT" 0, "WONK" 0',
                cursor: "pointer",
                boxShadow: `0 12px 36px -12px rgba(200,241,105,0.5)`,
                letterSpacing: "-0.01em",
              }}
            >
              {content.finalCta.ctaLabel}
              <span style={{ fontSize: 18 }}>→</span>
            </button>
          </section>

          {/* ───────────────────── FAKE-DOOR ───────────────────── */}
          {fd.showWaitlist && (
            <section
              id="waitlist"
              style={{
                marginTop: 24,
                borderRadius: 28,
                background: `linear-gradient(145deg, #1A3025, #16271F)`,
                border: `1px solid rgba(200,241,105,0.14)`,
                boxShadow: `0 24px 64px -24px rgba(0,0,0,0.6)`,
                padding: "40px 24px 36px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Top lime glow line */}
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  top: 0,
                  left: "20%",
                  right: "20%",
                  height: 1,
                  background: `linear-gradient(90deg, transparent, ${C.lime}50, transparent)`,
                  pointerEvents: "none",
                }}
              />

              {fd.state === "done" ? (
                <div style={{ textAlign: "center" }}>
                  <p
                    style={{
                      fontFamily: "var(--font-fraunces), serif",
                      fontVariationSettings: '"opsz" 48, "SOFT" 20, "WONK" 0',
                      fontSize: 26,
                      lineHeight: 1.18,
                      color: C.lime,
                      marginBottom: 14,
                    }}
                  >
                    {content.confirmation.title}
                  </p>
                  <p
                    style={{
                      fontSize: 14.5,
                      lineHeight: 1.68,
                      color: C.sage,
                      margin: "0 auto",
                      maxWidth: "32ch",
                    }}
                  >
                    {content.confirmation.body}
                  </p>
                </div>
              ) : (
                <>
                  <p
                    style={{
                      fontFamily: "var(--font-fraunces), serif",
                      fontVariationSettings: '"opsz" 48, "SOFT" 30, "WONK" 1',
                      fontStyle: "italic",
                      fontSize: 28,
                      lineHeight: 1.14,
                      color: C.cream,
                      textAlign: "center",
                      marginBottom: 12,
                    }}
                  >
                    {fakedoor.title}
                  </p>
                  <p
                    style={{
                      fontSize: 14.5,
                      lineHeight: 1.68,
                      color: C.sage,
                      textAlign: "center",
                      marginBottom: 28,
                      maxWidth: "32ch",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  >
                    {fakedoor.body}
                  </p>

                  <form
                    onSubmit={fd.submit}
                    style={{ display: "flex", flexDirection: "column", gap: 10 }}
                  >
                    <input
                      type="email"
                      required
                      value={fd.email}
                      onChange={(e) => fd.setEmail(e.target.value)}
                      placeholder={fakedoor.emailPlaceholder}
                      style={{
                        width: "100%",
                        borderRadius: 999,
                        border: `1px solid rgba(200,241,105,0.18)`,
                        background: "rgba(239,234,216,0.05)",
                        padding: "14px 20px",
                        fontSize: 15,
                        color: C.cream,
                        outline: "none",
                        boxSizing: "border-box",
                      }}
                    />
                    <button
                      type="submit"
                      disabled={fd.state === "loading"}
                      style={{
                        width: "100%",
                        borderRadius: 999,
                        border: "none",
                        background: C.lime,
                        color: C.forest,
                        padding: "14px 20px",
                        fontSize: 15,
                        fontWeight: 700,
                        fontFamily: "var(--font-fraunces), serif",
                        fontVariationSettings: '"opsz" 18, "SOFT" 0, "WONK" 0',
                        cursor: fd.state === "loading" ? "wait" : "pointer",
                        opacity: fd.state === "loading" ? 0.6 : 1,
                        boxShadow: `0 8px 24px -8px rgba(200,241,105,0.35)`,
                        boxSizing: "border-box",
                      }}
                    >
                      {fd.state === "loading" ? "…" : fakedoor.submitLabel}
                    </button>

                    {fd.state === "error" && (
                      <p
                        style={{
                          textAlign: "center",
                          fontSize: 13,
                          color: "#E07070",
                          margin: 0,
                        }}
                      >
                        Something went wrong. Try again.
                      </p>
                    )}
                  </form>

                  <p
                    style={{
                      textAlign: "center",
                      fontSize: 11.5,
                      color: C.dimSage,
                      marginTop: 14,
                    }}
                  >
                    {fakedoor.privacyLine}
                  </p>
                </>
              )}
            </section>
          )}

          {/* ───────────────────── FOOTER ───────────────────── */}
          <footer style={{ marginTop: 64, textAlign: "center" }}>
            <div
              style={{
                width: 40,
                height: 1,
                background: `linear-gradient(90deg, transparent, ${C.dimSage}50, transparent)`,
                margin: "0 auto 24px",
              }}
            />
            <p
              style={{
                fontFamily: "var(--font-fraunces), serif",
                fontVariationSettings: '"opsz" 18, "SOFT" 40, "WONK" 1',
                fontStyle: "italic",
                fontSize: 14,
                color: C.sage,
                marginBottom: 12,
              }}
            >
              {footer.lines[0]}
            </p>
            <p
              style={{
                fontSize: 10,
                textTransform: "uppercase",
                letterSpacing: "0.24em",
                color: C.dimSage,
              }}
            >
              {footer.lines.slice(1).join("  ·  ")}
            </p>
          </footer>
        </div>

        {/* ── STICKY CTA ── */}
        <div
          style={{
            position: "fixed",
            inset: "auto 0 0 0",
            zIndex: 40,
            padding: "0 20px 20px",
            background: `linear-gradient(to top, ${C.forest} 60%, transparent)`,
            pointerEvents: "none",
          }}
        >
          <button
            onClick={() => fd.onCta("sticky")}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              width: "100%",
              maxWidth: 420,
              margin: "0 auto",
              background: C.lime,
              color: C.forest,
              border: "none",
              borderRadius: 999,
              padding: "15px 28px",
              fontSize: 15,
              fontWeight: 700,
              fontFamily: "var(--font-fraunces), serif",
              fontVariationSettings: '"opsz" 18, "SOFT" 0, "WONK" 0',
              cursor: "pointer",
              boxShadow: `0 12px 40px -12px rgba(200,241,105,0.5), 0 0 0 1px rgba(200,241,105,0.1)`,
              pointerEvents: "auto",
            }}
          >
            {hero.ctaLabel}
            <span style={{ fontSize: 18 }}>→</span>
          </button>
        </div>
      </main>
    </div>
  );
}
