"use client";

import { DM_Serif_Display, IBM_Plex_Mono } from "next/font/google";
import type { DesignProps } from "@/designs/types";
import { useFakeDoor } from "@/designs/shared/useFakeDoor";

// Direction: SWISS / INTERNATIONAL STYLE
// DM Serif Display (humanist serif warmth) + IBM Plex Mono (cool precision grid).
// No shadows, no gradients, no decoration. Strict typographic grid.
// Palette: ink #26235A on luminous lavender whites, with soft #5A5690 accents.
// The tension between cold Mono structure and warm serif copy IS the design.

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-dm-serif",
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const ibmMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm-mono",
  weight: ["400", "500"],
  display: "swap",
});

// ── Design tokens ────────────────────────────────────────────────────────────
// ink:       #26235A  (deep indigo — primary text, borders, fills)
// soft:      #5A5690  (muted purple — secondary text, labels)
// lavender:  #EBE6FF  (section backgrounds)
// periwinkle:#D6E4FF  (highlight tint)
// pale:      #F3ECFF  (card fills)
// ghost:     #F7F4FF  (page ground)

export default function SwissDesign({ content, slug }: DesignProps) {
  const fd = useFakeDoor(slug);

  const { hero, problem, solution, pricing, testimonials, faq, fakedoor, footer } =
    content;

  return (
    <div
      className={`${dmSerif.variable} ${ibmMono.variable}`}
      style={{ background: "#F7F4FF", color: "#26235A" }}
    >
      {/* ── PAGE RULE: top rule that anchors the whole grid ── */}
      <div style={{ borderTop: "3px solid #26235A", width: "100%" }} />

      <main
        className="mx-auto max-w-md antialiased"
        style={{ fontFamily: "var(--font-ibm-mono)", paddingBottom: "7rem" }}
      >
        {/* ─────────────────────────────────────────────────────
            HERO
        ───────────────────────────────────────────────────── */}
        <header
          style={{
            paddingLeft: "1.25rem",
            paddingRight: "1.25rem",
            paddingTop: "2rem",
            borderBottom: "1px solid #26235A",
            paddingBottom: "2.5rem",
          }}
        >
          {/* Brand row */}
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              marginBottom: "3rem",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-ibm-mono)",
                fontSize: "0.65rem",
                fontWeight: 500,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#5A5690",
              }}
            >
              {hero.brandLockup}
            </span>
            <span
              style={{
                fontFamily: "var(--font-ibm-mono)",
                fontSize: "0.6rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#5A5690",
              }}
            >
              01 / 2025
            </span>
          </div>

          {/* Giant rule-set typographic hero ── */}
          <div
            style={{
              borderTop: "1px solid #26235A",
              paddingTop: "1.75rem",
            }}
          >
            <h1
              style={{
                fontFamily: "var(--font-dm-serif)",
                fontSize: "clamp(2.6rem, 11vw, 3.4rem)",
                lineHeight: 1.04,
                letterSpacing: "-0.02em",
                color: "#26235A",
                margin: 0,
              }}
            >
              {hero.title}
            </h1>
          </div>

          {/* Hairline under H1 */}
          <div
            style={{
              borderTop: "1px solid rgba(38,35,90,0.2)",
              marginTop: "1.75rem",
              paddingTop: "1.5rem",
            }}
          >
            <p
              style={{
                fontSize: "0.875rem",
                lineHeight: 1.7,
                color: "#5A5690",
                maxWidth: "36ch",
              }}
            >
              {hero.subtitle}
            </p>
          </div>

          {/* CTA row */}
          <div
            style={{
              marginTop: "2rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.875rem",
            }}
          >
            <button
              onClick={() => fd.onCta("hero")}
              style={{
                background: "#26235A",
                color: "#F7F4FF",
                border: "none",
                padding: "1rem 1.5rem",
                fontFamily: "var(--font-ibm-mono)",
                fontSize: "0.75rem",
                fontWeight: 500,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                cursor: "pointer",
                width: "100%",
                textAlign: "left",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span>{hero.ctaLabel}</span>
              <span style={{ fontSize: "1rem" }}>→</span>
            </button>

            <p
              style={{
                fontFamily: "var(--font-ibm-mono)",
                fontSize: "0.6rem",
                letterSpacing: "0.14em",
                color: "#5A5690",
                textTransform: "uppercase",
              }}
            >
              ↳ {hero.reassuranceLine}
            </p>
          </div>
        </header>

        {/* ─────────────────────────────────────────────────────
            PROBLEM
        ───────────────────────────────────────────────────── */}
        <section
          style={{
            background: "#EBE6FF",
            padding: "3rem 1.25rem",
            borderBottom: "1px solid #26235A",
          }}
        >
          {/* Section label */}
          <div
            style={{
              fontFamily: "var(--font-ibm-mono)",
              fontSize: "0.6rem",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "#5A5690",
              marginBottom: "1.5rem",
            }}
          >
            § Problem
          </div>

          <h2
            style={{
              fontFamily: "var(--font-dm-serif)",
              fontSize: "1.75rem",
              lineHeight: 1.15,
              letterSpacing: "-0.01em",
              color: "#26235A",
              margin: "0 0 1.25rem",
            }}
          >
            {problem.title}
          </h2>

          <p
            style={{
              fontSize: "0.875rem",
              lineHeight: 1.75,
              color: "#5A5690",
            }}
          >
            {problem.body}
          </p>
        </section>

        {/* ─────────────────────────────────────────────────────
            SOLUTION
        ───────────────────────────────────────────────────── */}
        <section
          style={{
            padding: "3rem 1.25rem",
            borderBottom: "1px solid #26235A",
          }}
        >
          {/* Label row */}
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              marginBottom: "2.5rem",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-ibm-mono)",
                fontSize: "0.6rem",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#5A5690",
              }}
            >
              § {solution.intro}
            </span>
            <span
              style={{
                fontFamily: "var(--font-ibm-mono)",
                fontSize: "0.6rem",
                letterSpacing: "0.14em",
                color: "rgba(90,86,144,0.5)",
              }}
            >
              3 steps
            </span>
          </div>

          <ol
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "flex",
              flexDirection: "column",
              gap: 0,
            }}
          >
            {solution.steps.map((step, i) => (
              <li
                key={i}
                style={{
                  borderTop: "1px solid #26235A",
                  paddingTop: "1.5rem",
                  paddingBottom: "1.75rem",
                  display: "grid",
                  gridTemplateColumns: "2rem 1fr",
                  gap: "1rem",
                  alignItems: "start",
                }}
              >
                {/* Step number */}
                <span
                  style={{
                    fontFamily: "var(--font-dm-serif)",
                    fontStyle: "italic",
                    fontSize: "1.5rem",
                    lineHeight: 1,
                    color: "#5A5690",
                  }}
                >
                  {i + 1}
                </span>
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-dm-serif)",
                      fontSize: "1.2rem",
                      lineHeight: 1.25,
                      letterSpacing: "-0.005em",
                      color: "#26235A",
                      margin: "0 0 0.75rem",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.8rem",
                      lineHeight: 1.7,
                      color: "#5A5690",
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

        {/* ─────────────────────────────────────────────────────
            TESTIMONIALS
        ───────────────────────────────────────────────────── */}
        <section
          style={{
            background: "#F3ECFF",
            padding: "3rem 1.25rem",
            borderBottom: "1px solid #26235A",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-ibm-mono)",
              fontSize: "0.6rem",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "#5A5690",
              marginBottom: "2rem",
            }}
          >
            § Voices
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {testimonials.map((t, i) => (
              <figure
                key={i}
                style={{
                  margin: 0,
                  padding: "1.5rem 0",
                  borderTop: "1px solid rgba(38,35,90,0.2)",
                }}
              >
                {/* Opening mark */}
                <div
                  style={{
                    fontFamily: "var(--font-dm-serif)",
                    fontStyle: "italic",
                    fontSize: "3rem",
                    lineHeight: 0.8,
                    color: "#D6E4FF",
                    marginBottom: "0.75rem",
                    userSelect: "none",
                  }}
                >
                  &ldquo;
                </div>
                <blockquote
                  style={{
                    fontFamily: "var(--font-dm-serif)",
                    fontSize: "1.1rem",
                    lineHeight: 1.5,
                    color: "#26235A",
                    margin: 0,
                  }}
                >
                  {t.quote}
                </blockquote>
                <figcaption
                  style={{
                    marginTop: "1rem",
                    fontFamily: "var(--font-ibm-mono)",
                    fontSize: "0.6rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#5A5690",
                  }}
                >
                  — {t.name}, {t.age}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────
            PRICING
        ───────────────────────────────────────────────────── */}
        <section
          ref={fd.pricingRef}
          style={{
            padding: "3rem 1.25rem",
            borderBottom: "1px solid #26235A",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-ibm-mono)",
              fontSize: "0.6rem",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "#5A5690",
              marginBottom: "1.5rem",
            }}
          >
            § Pricing
          </div>

          <h2
            style={{
              fontFamily: "var(--font-dm-serif)",
              fontSize: "1.6rem",
              lineHeight: 1.15,
              letterSpacing: "-0.01em",
              color: "#26235A",
              margin: "0 0 0.75rem",
            }}
          >
            {pricing.title}
          </h2>
          <p
            style={{
              fontSize: "0.825rem",
              lineHeight: 1.7,
              color: "#5A5690",
              marginBottom: "2.5rem",
            }}
          >
            {pricing.subtitle}
          </p>

          {/* Plans — strict table layout */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {pricing.plans.map((plan, i) => (
              <div
                key={i}
                style={{
                  borderTop: "1px solid #26235A",
                  ...(i === pricing.plans.length - 1
                    ? { borderBottom: "1px solid #26235A" }
                    : {}),
                  background: plan.highlight ? "#26235A" : "transparent",
                  padding: "1.5rem 0",
                }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr auto",
                    alignItems: "start",
                    gap: "1rem",
                  }}
                >
                  <div>
                    {/* Plan name */}
                    <div
                      style={{
                        fontFamily: "var(--font-ibm-mono)",
                        fontSize: "0.6rem",
                        letterSpacing: "0.22em",
                        textTransform: "uppercase",
                        color: plan.highlight ? "#EBE6FF" : "#5A5690",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {plan.highlight ? "★ " : ""}{plan.name}
                    </div>
                    {/* Price */}
                    <div
                      style={{
                        fontFamily: "var(--font-dm-serif)",
                        fontSize: "2rem",
                        lineHeight: 1,
                        letterSpacing: "-0.02em",
                        color: plan.highlight ? "#F7F4FF" : "#26235A",
                      }}
                    >
                      {plan.price}
                    </div>
                    {/* Descriptor */}
                    <div
                      style={{
                        marginTop: "0.4rem",
                        fontFamily: "var(--font-ibm-mono)",
                        fontSize: "0.6rem",
                        letterSpacing: "0.12em",
                        color: plan.highlight ? "#D6E4FF" : "#5A5690",
                      }}
                    >
                      {plan.descriptor}
                    </div>
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() =>
                      fd.onCta(`pricing-${plan.name.toLowerCase()}`)
                    }
                    style={{
                      background: plan.highlight ? "#EBE6FF" : "#26235A",
                      color: plan.highlight ? "#26235A" : "#F7F4FF",
                      border: "none",
                      padding: "0.65rem 1.1rem",
                      fontFamily: "var(--font-ibm-mono)",
                      fontSize: "0.6rem",
                      fontWeight: 500,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      cursor: "pointer",
                      whiteSpace: "nowrap",
                      alignSelf: "center",
                    }}
                  >
                    {plan.ctaLabel} →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Included features — mono list */}
          <div style={{ marginTop: "2rem" }}>
            <div
              style={{
                fontFamily: "var(--font-ibm-mono)",
                fontSize: "0.6rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#5A5690",
                marginBottom: "1rem",
                borderBottom: "1px solid rgba(38,35,90,0.15)",
                paddingBottom: "0.5rem",
              }}
            >
              Included in all plans
            </div>
            <ul
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0.5rem 1rem",
              }}
            >
              {pricing.included.map((feature, i) => (
                <li
                  key={i}
                  style={{
                    fontFamily: "var(--font-ibm-mono)",
                    fontSize: "0.65rem",
                    color: "#26235A",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    lineHeight: 1.4,
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      width: "0.3rem",
                      height: "0.3rem",
                      background: "#5A5690",
                      flexShrink: 0,
                    }}
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Scarcity */}
          <p
            style={{
              marginTop: "1.5rem",
              fontFamily: "var(--font-ibm-mono)",
              fontSize: "0.6rem",
              letterSpacing: "0.1em",
              color: "#5A5690",
              borderTop: "1px solid rgba(38,35,90,0.15)",
              paddingTop: "1rem",
            }}
          >
            ↳ {pricing.scarcityLine}
          </p>
        </section>

        {/* ─────────────────────────────────────────────────────
            FAQ
        ───────────────────────────────────────────────────── */}
        <section
          style={{
            background: "#EBE6FF",
            padding: "3rem 1.25rem",
            borderBottom: "1px solid #26235A",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-ibm-mono)",
              fontSize: "0.6rem",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "#5A5690",
              marginBottom: "1.75rem",
            }}
          >
            § Questions
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {faq.map((item, i) => (
              <details
                key={i}
                style={{
                  borderTop: "1px solid rgba(38,35,90,0.3)",
                  padding: "1.25rem 0",
                }}
              >
                <summary
                  style={{
                    listStyle: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: "1rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-dm-serif)",
                      fontSize: "1.05rem",
                      lineHeight: 1.3,
                      color: "#26235A",
                      flex: 1,
                    }}
                  >
                    {item.q}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-ibm-mono)",
                      fontSize: "0.9rem",
                      color: "#5A5690",
                      flexShrink: 0,
                      userSelect: "none",
                    }}
                  >
                    +
                  </span>
                </summary>
                <p
                  style={{
                    marginTop: "1rem",
                    fontSize: "0.825rem",
                    lineHeight: 1.75,
                    color: "#5A5690",
                    paddingRight: "1.5rem",
                  }}
                >
                  {item.a}
                </p>
              </details>
            ))}
            {/* close last border */}
            <div style={{ borderTop: "1px solid rgba(38,35,90,0.3)" }} />
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────
            FINAL CTA
        ───────────────────────────────────────────────────── */}
        <section
          style={{
            background: "#26235A",
            padding: "3.5rem 1.25rem",
            borderBottom: "1px solid #26235A",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-dm-serif)",
              fontStyle: "italic",
              fontSize: "2rem",
              lineHeight: 1.12,
              letterSpacing: "-0.01em",
              color: "#F7F4FF",
              margin: "0 0 2rem",
              maxWidth: "18ch",
            }}
          >
            {content.finalCta.headline}
          </h2>

          <button
            onClick={() => fd.onCta("final")}
            style={{
              background: "#EBE6FF",
              color: "#26235A",
              border: "none",
              padding: "1rem 1.5rem",
              fontFamily: "var(--font-ibm-mono)",
              fontSize: "0.75rem",
              fontWeight: 500,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              cursor: "pointer",
              width: "100%",
              textAlign: "left",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span>{content.finalCta.ctaLabel}</span>
            <span style={{ fontSize: "1rem" }}>→</span>
          </button>
        </section>

        {/* ─────────────────────────────────────────────────────
            FAKE-DOOR WAITLIST
        ───────────────────────────────────────────────────── */}
        {fd.showWaitlist && (
          <section
            id="waitlist"
            style={{
              padding: "3rem 1.25rem",
              borderBottom: "1px solid #26235A",
              background: "#F3ECFF",
            }}
          >
            {fd.state === "done" ? (
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-ibm-mono)",
                    fontSize: "0.6rem",
                    letterSpacing: "0.28em",
                    textTransform: "uppercase",
                    color: "#5A5690",
                    marginBottom: "1.5rem",
                  }}
                >
                  § Confirmed
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-dm-serif)",
                    fontSize: "1.75rem",
                    lineHeight: 1.15,
                    color: "#26235A",
                    margin: "0 0 1rem",
                  }}
                >
                  {content.confirmation.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.875rem",
                    lineHeight: 1.75,
                    color: "#5A5690",
                  }}
                >
                  {content.confirmation.body}
                </p>
              </div>
            ) : (
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-ibm-mono)",
                    fontSize: "0.6rem",
                    letterSpacing: "0.28em",
                    textTransform: "uppercase",
                    color: "#5A5690",
                    marginBottom: "1.5rem",
                  }}
                >
                  § Reserve
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-dm-serif)",
                    fontStyle: "italic",
                    fontSize: "1.75rem",
                    lineHeight: 1.15,
                    color: "#26235A",
                    margin: "0 0 0.75rem",
                  }}
                >
                  {fakedoor.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.825rem",
                    lineHeight: 1.7,
                    color: "#5A5690",
                    marginBottom: "2rem",
                  }}
                >
                  {fakedoor.body}
                </p>

                <form
                  onSubmit={fd.submit}
                  style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
                >
                  <input
                    type="email"
                    required
                    value={fd.email}
                    onChange={(e) => fd.setEmail(e.target.value)}
                    placeholder={fakedoor.emailPlaceholder}
                    style={{
                      width: "100%",
                      padding: "0.9rem 1rem",
                      fontFamily: "var(--font-ibm-mono)",
                      fontSize: "0.8rem",
                      color: "#26235A",
                      background: "#F7F4FF",
                      border: "1px solid #26235A",
                      outline: "none",
                      boxSizing: "border-box",
                    }}
                  />
                  <button
                    type="submit"
                    disabled={fd.state === "loading"}
                    style={{
                      background: "#26235A",
                      color: "#F7F4FF",
                      border: "none",
                      padding: "0.9rem 1rem",
                      fontFamily: "var(--font-ibm-mono)",
                      fontSize: "0.7rem",
                      fontWeight: 500,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      cursor: fd.state === "loading" ? "not-allowed" : "pointer",
                      opacity: fd.state === "loading" ? 0.6 : 1,
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span>
                      {fd.state === "loading" ? "Sending..." : fakedoor.submitLabel}
                    </span>
                    {fd.state !== "loading" && <span>→</span>}
                  </button>

                  {fd.state === "error" && (
                    <p
                      style={{
                        fontFamily: "var(--font-ibm-mono)",
                        fontSize: "0.65rem",
                        letterSpacing: "0.1em",
                        color: "#26235A",
                        borderLeft: "2px solid #26235A",
                        paddingLeft: "0.75rem",
                      }}
                    >
                      Something went wrong — please try again.
                    </p>
                  )}
                </form>

                <p
                  style={{
                    marginTop: "1.25rem",
                    fontFamily: "var(--font-ibm-mono)",
                    fontSize: "0.6rem",
                    letterSpacing: "0.12em",
                    color: "#5A5690",
                  }}
                >
                  ↳ {fakedoor.privacyLine}
                </p>
              </div>
            )}
          </section>
        )}

        {/* ─────────────────────────────────────────────────────
            FOOTER
        ───────────────────────────────────────────────────── */}
        <footer
          style={{
            padding: "2.5rem 1.25rem",
            borderBottom: "3px solid #26235A",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-dm-serif)",
              fontStyle: "italic",
              fontSize: "0.9rem",
              color: "#26235A",
              marginBottom: "1rem",
            }}
          >
            {footer.lines[0]}
          </p>
          <div
            style={{
              display: "flex",
              gap: "2rem",
              fontFamily: "var(--font-ibm-mono)",
              fontSize: "0.6rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#5A5690",
            }}
          >
            {footer.lines.slice(1).map((line, i) => (
              <span key={i}>{line}</span>
            ))}
          </div>
        </footer>
      </main>

      {/* ─────────────────────────────────────────────────────
          STICKY CTA BAR
      ───────────────────────────────────────────────────── */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          display: "flex",
          justifyContent: "center",
          background: "#F7F4FF",
          borderTop: "1px solid #26235A",
          padding: "0.875rem 1.25rem",
        }}
      >
        <button
          onClick={() => fd.onCta("sticky")}
          style={{
            background: "#26235A",
            color: "#F7F4FF",
            border: "none",
            padding: "0.85rem 1.25rem",
            fontFamily: "var(--font-ibm-mono)",
            fontSize: "0.7rem",
            fontWeight: 500,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            cursor: "pointer",
            width: "100%",
            maxWidth: "28rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span>{hero.ctaLabel}</span>
          <span style={{ fontSize: "0.9rem" }}>→</span>
        </button>
      </div>
    </div>
  );
}
