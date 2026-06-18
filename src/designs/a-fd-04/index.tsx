"use client";

import Image from "next/image";
import { Playfair_Display, Spline_Sans_Mono } from "next/font/google";
import type { DesignProps } from "@/designs/types";
import { useFakeDoor } from "@/designs/shared/useFakeDoor";

// ── DOSSIER / VAULT-RECORD direction ───────────────────────────────────────
// A sealed document, an estate ledger, a quiet institution of trust. Deep ink
// navy paper, brass foil accent, blueprint hairlines and ruled registers.
// High-contrast pairing: a tall Playfair display serif for the ceremonial
// lines against Spline Sans Mono for labels, numerals and body — the
// typography of a record that has been carefully kept.
const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-dossier-display",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const mono = Spline_Sans_Mono({
  subsets: ["latin"],
  variable: "--font-dossier-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

// Brass foil + ink palette
const INK = "#0C1320"; // deep midnight paper
const INK2 = "#111B2C"; // panel
const PAPER = "#ECE6D6"; // aged record paper for inverted blocks
const BRASS = "#C8A35B"; // foil accent
const MIST = "#8C9AAE"; // muted blue-grey text
const FAINT = "#3A4A60"; // hairline

export default function DossierVaultDesign({ content, slug }: DesignProps) {
  const fd = useFakeDoor(slug);
  const { hero, problem, solution, pricing, testimonials, faq, fakedoor, footer } =
    content;

  const ruleStyle = {
    backgroundImage: `repeating-linear-gradient(to bottom, transparent 0, transparent 27px, ${FAINT}22 27px, ${FAINT}22 28px)`,
  };

  return (
    <main
      className={`${display.variable} ${mono.variable} relative min-h-screen overflow-hidden`}
      style={{
        backgroundColor: INK,
        color: PAPER,
        fontFamily: "var(--font-dossier-mono), ui-monospace, monospace",
      }}
    >
      {/* Grain + vignette atmosphere */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.05] mix-blend-screen"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 220 220' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='220' height='220' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-40"
        style={{
          background:
            "radial-gradient(120% 80% at 50% -10%, transparent 40%, rgba(0,0,0,0.55) 100%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-md pb-36">
        {/* ───────── MASTHEAD / FILE HEADER ───────── */}
        <div
          className="flex items-center justify-between px-5 pt-6 pb-4 text-[10px] uppercase tracking-[0.3em]"
          style={{ color: MIST }}
        >
          <span style={{ color: BRASS }}>You Alive</span>
          <span>Est. dossier</span>
        </div>
        <div className="mx-5 h-px" style={{ backgroundColor: FAINT }} />

        {/* ───────── HERO ───────── */}
        <header className="px-5">
          <div className="mt-5 flex items-center justify-between text-[9.5px] uppercase tracking-[0.28em]" style={{ color: MIST }}>
            <span>File no. YA-001</span>
            <span style={{ color: BRASS }}>● Sealed</span>
          </div>

          {/* Duotone photo plate framed like a tipped-in print */}
          <figure className="relative mt-4">
            <div
              className="relative aspect-[4/5] w-full overflow-hidden rounded-[3px]"
              style={{ boxShadow: `0 30px 60px -30px rgba(0,0,0,0.9)` }}
            >
              <Image
                src="/designs/a/hero.jpeg"
                alt=""
                fill
                priority
                sizes="(max-width: 768px) 100vw, 450px"
                className="object-cover"
                style={{ filter: "grayscale(0.4) contrast(1.05) brightness(0.82)" }}
              />
              <div
                className="absolute inset-0 mix-blend-color"
                style={{ backgroundColor: "#0E2230" }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(12,19,32,0.15) 0%, rgba(12,19,32,0.05) 45%, rgba(12,19,32,0.92) 100%)",
                }}
              />
              {/* corner registration ticks */}
              {["top-2 left-2", "top-2 right-2", "bottom-2 left-2", "bottom-2 right-2"].map(
                (pos) => (
                  <span
                    key={pos}
                    aria-hidden
                    className={`absolute ${pos} h-3 w-3`}
                    style={{
                      borderColor: BRASS,
                      borderStyle: "solid",
                      borderWidth: pos.includes("top")
                        ? pos.includes("left")
                          ? "1px 0 0 1px"
                          : "1px 1px 0 0"
                        : pos.includes("left")
                        ? "0 0 1px 1px"
                        : "0 1px 1px 0",
                    }}
                  />
                )
              )}
            </div>
            <figcaption
              className="mt-2 text-[9px] uppercase tracking-[0.26em]"
              style={{ color: MIST }}
            >
              Plate I — kept until the day it is needed
            </figcaption>
          </figure>

          {/* Title in tall serif (photo already carries the brand lockup) */}
          <h1
            className="mt-8 text-balance font-[family-name:var(--font-dossier-display)] text-[40px] leading-[1.02] tracking-[-0.01em]"
            style={{ color: PAPER }}
          >
            {hero.title.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="italic" style={{ color: BRASS }}>
              {hero.title.split(" ").slice(-1)}
            </span>
          </h1>

          <p
            className="mt-5 text-[14px] leading-[1.65]"
            style={{ color: MIST }}
          >
            {hero.subtitle}
          </p>

          <button
            onClick={() => fd.onCta("hero")}
            className="group mt-7 flex w-full items-center justify-between rounded-[3px] px-6 py-4 text-[13px] uppercase tracking-[0.18em] transition-all duration-300 hover:brightness-110"
            style={{ backgroundColor: BRASS, color: INK }}
          >
            {hero.ctaLabel}
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>

          <p
            className="mt-4 flex items-center gap-2 text-[11px] tracking-[0.04em]"
            style={{ color: MIST }}
          >
            <span className="inline-block h-1.5 w-1.5 rotate-45" style={{ backgroundColor: BRASS }} />
            {hero.reassuranceLine}
          </p>
        </header>

        {/* ───────── PROBLEM ───────── */}
        <section className="mt-24 px-5">
          <SectionTag index="01" label="The matter at hand" />
          <h2
            className="mt-4 text-balance font-[family-name:var(--font-dossier-display)] text-[27px] leading-[1.12] tracking-[-0.01em]"
            style={{ color: PAPER }}
          >
            {problem.title}
          </h2>
          <div className="mt-6 pl-4" style={{ borderLeft: `1px solid ${BRASS}` }}>
            <p className="text-[14px] leading-[1.7]" style={{ color: MIST }}>
              {problem.body}
            </p>
          </div>
        </section>

        {/* ───────── SOLUTION (ruled register) ───────── */}
        <section className="mt-24 px-5">
          <SectionTag index="02" label={solution.intro} />
          <ol className="mt-8 space-y-0">
            {solution.steps.map((s, i) => (
              <li
                key={i}
                className="grid grid-cols-[44px_1fr] gap-4 py-7"
                style={{
                  borderTop: `1px solid ${FAINT}`,
                  ...(i === solution.steps.length - 1
                    ? { borderBottom: `1px solid ${FAINT}` }
                    : {}),
                }}
              >
                <span
                  className="font-[family-name:var(--font-dossier-display)] text-[30px] leading-none italic"
                  style={{ color: BRASS }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3
                    className="font-[family-name:var(--font-dossier-display)] text-[18px] leading-[1.25]"
                    style={{ color: PAPER }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="mt-2.5 text-[13px] leading-[1.65]"
                    style={{ color: MIST }}
                  >
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* ───────── PRICING (the ledger card) ───────── */}
        <section ref={fd.pricingRef} className="mt-24 px-5">
          <SectionTag index="03" label="Terms of keeping" />
          <h2
            className="mt-4 text-balance font-[family-name:var(--font-dossier-display)] text-[26px] leading-[1.12]"
            style={{ color: PAPER }}
          >
            {pricing.title}
          </h2>
          <p className="mt-4 text-[13px] leading-[1.65]" style={{ color: MIST }}>
            {pricing.subtitle}
          </p>

          {/* Plans */}
          <div className="mt-7 space-y-3">
            {pricing.plans.map((plan, i) => {
              const hi = !!plan.highlight;
              return (
                <div
                  key={i}
                  className="rounded-[4px] p-5"
                  style={
                    hi
                      ? { backgroundColor: PAPER, color: INK }
                      : { border: `1px solid ${FAINT}`, color: PAPER }
                  }
                >
                  <div className="flex items-baseline justify-between">
                    <span className="text-[10px] uppercase tracking-[0.26em]" style={{ color: hi ? INK : MIST }}>
                      {plan.name}
                    </span>
                    {hi && (
                      <span
                        className="rounded-[2px] px-2 py-0.5 text-[9px] uppercase tracking-[0.2em]"
                        style={{ backgroundColor: INK, color: BRASS }}
                      >
                        Recommended
                      </span>
                    )}
                  </div>
                  <div
                    className="mt-2 font-[family-name:var(--font-dossier-display)] text-[30px] leading-none"
                    style={{ color: hi ? INK : PAPER }}
                  >
                    {plan.price}
                  </div>
                  <p className="mt-1.5 text-[11px] tracking-[0.03em]" style={{ color: hi ? "#5b5340" : MIST }}>
                    {plan.descriptor}
                  </p>
                  <button
                    onClick={() => fd.onCta(`pricing-${plan.name.toLowerCase()}`)}
                    className="mt-4 w-full rounded-[3px] py-3 text-[12px] uppercase tracking-[0.18em] transition hover:brightness-110"
                    style={
                      hi
                        ? { backgroundColor: INK, color: BRASS }
                        : { backgroundColor: BRASS, color: INK }
                    }
                  >
                    {plan.ctaLabel}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Included — ruled inventory */}
          <div
            className="mt-6 rounded-[4px] p-5"
            style={{ backgroundColor: INK2, ...ruleStyle }}
          >
            <p className="mb-3 text-[9.5px] uppercase tracking-[0.28em]" style={{ color: BRASS }}>
              Filed within
            </p>
            <ul className="grid grid-cols-1">
              {pricing.included.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 py-[3.5px] text-[12.5px]"
                  style={{ color: PAPER }}
                >
                  <span className="text-[10px]" style={{ color: BRASS }}>
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-5 text-center text-[11px] leading-relaxed" style={{ color: MIST }}>
            {pricing.scarcityLine}
          </p>
        </section>

        {/* ───────── TESTIMONIALS ───────── */}
        <section className="mt-24 px-5">
          <SectionTag index="04" label="On the record" />
          <div className="mt-8 space-y-8">
            {testimonials.map((t, i) => (
              <figure
                key={i}
                className="rounded-[4px] p-5"
                style={{ border: `1px solid ${FAINT}` }}
              >
                <blockquote
                  className="font-[family-name:var(--font-dossier-display)] text-[16.5px] italic leading-[1.45]"
                  style={{ color: PAPER }}
                >
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.22em]" style={{ color: MIST }}>
                  <span style={{ color: BRASS }}>—</span>
                  {t.name}, {t.age}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ───────── FAQ ───────── */}
        <section className="mt-24 px-5">
          <SectionTag index="05" label="Matters of clarification" />
          <div className="mt-6" style={{ borderTop: `1px solid ${FAINT}` }}>
            {faq.map((item, i) => (
              <details
                key={i}
                className="group py-5"
                style={{ borderBottom: `1px solid ${FAINT}` }}
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                  <span
                    className="font-[family-name:var(--font-dossier-display)] text-[16px] leading-[1.3]"
                    style={{ color: PAPER }}
                  >
                    {item.q}
                  </span>
                  <span
                    className="mt-0.5 select-none text-[18px] leading-none transition-transform duration-300 group-open:rotate-45"
                    style={{ color: BRASS }}
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-[13px] leading-[1.65]" style={{ color: MIST }}>
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* ───────── FINAL CTA ───────── */}
        <section className="mt-24 px-5">
          <div
            className="relative overflow-hidden rounded-[4px] px-6 py-10 text-center"
            style={{ backgroundColor: PAPER, color: INK }}
          >
            <span
              aria-hidden
              className="absolute inset-x-6 top-3 h-px"
              style={{ backgroundColor: BRASS }}
            />
            <span
              aria-hidden
              className="absolute inset-x-6 bottom-3 h-px"
              style={{ backgroundColor: BRASS }}
            />
            <h2 className="font-[family-name:var(--font-dossier-display)] text-[28px] leading-[1.1]">
              {content.finalCta.headline}
            </h2>
            <button
              onClick={() => fd.onCta("final")}
              className="mt-6 inline-flex items-center gap-3 rounded-[3px] px-8 py-4 text-[13px] uppercase tracking-[0.18em] transition hover:brightness-110"
              style={{ backgroundColor: INK, color: BRASS }}
            >
              {content.finalCta.ctaLabel}
              <span>→</span>
            </button>
          </div>
        </section>

        {/* ───────── FAKE-DOOR ───────── */}
        {fd.showWaitlist && (
          <section id="waitlist" className="mt-12 px-5">
            <div
              className="rounded-[4px] p-6"
              style={{ backgroundColor: INK2, border: `1px solid ${BRASS}` }}
            >
              {fd.state === "done" ? (
                <div className="text-center">
                  <p
                    className="font-[family-name:var(--font-dossier-display)] text-[24px] italic"
                    style={{ color: BRASS }}
                  >
                    {content.confirmation.title}
                  </p>
                  <p className="mt-3 text-[13.5px] leading-[1.65]" style={{ color: MIST }}>
                    {content.confirmation.body}
                  </p>
                </div>
              ) : (
                <>
                  <p className="text-[9.5px] uppercase tracking-[0.28em]" style={{ color: MIST }}>
                    Provisional entry
                  </p>
                  <p
                    className="mt-2 font-[family-name:var(--font-dossier-display)] text-[26px] italic"
                    style={{ color: PAPER }}
                  >
                    {fakedoor.title}
                  </p>
                  <p className="mt-3 text-[13.5px] leading-[1.65]" style={{ color: MIST }}>
                    {fakedoor.body}
                  </p>
                  <form onSubmit={fd.submit} className="mt-6 flex flex-col gap-3">
                    <input
                      type="email"
                      required
                      value={fd.email}
                      onChange={(e) => fd.setEmail(e.target.value)}
                      placeholder={fakedoor.emailPlaceholder}
                      className="w-full rounded-[3px] px-4 py-3.5 text-[14px] focus:outline-none"
                      style={{
                        backgroundColor: INK,
                        color: PAPER,
                        border: `1px solid ${FAINT}`,
                      }}
                    />
                    <button
                      type="submit"
                      disabled={fd.state === "loading"}
                      className="w-full rounded-[3px] py-3.5 text-[12px] uppercase tracking-[0.18em] disabled:opacity-60"
                      style={{ backgroundColor: BRASS, color: INK }}
                    >
                      {fd.state === "loading" ? "Filing…" : fakedoor.submitLabel}
                    </button>
                    {fd.state === "error" && (
                      <p className="text-[12px]" style={{ color: "#E0997A" }}>
                        Something went wrong. Try again.
                      </p>
                    )}
                  </form>
                  <p className="mt-4 text-center text-[11px]" style={{ color: MIST }}>
                    {fakedoor.privacyLine}
                  </p>
                </>
              )}
            </div>
          </section>
        )}

        {/* ───────── FOOTER ───────── */}
        <footer className="mt-20 px-5">
          <div className="h-px" style={{ backgroundColor: FAINT }} />
          <p
            className="mt-6 font-[family-name:var(--font-dossier-display)] text-[15px] italic"
            style={{ color: PAPER }}
          >
            {footer.lines[0]}
          </p>
          <p className="mt-4 text-[10px] uppercase tracking-[0.24em]" style={{ color: MIST }}>
            {footer.lines.slice(1).join("  ·  ")}
          </p>
        </footer>
      </div>

      {/* Sticky CTA */}
      <div
        className="fixed inset-x-0 bottom-0 z-40 px-5 py-3"
        style={{
          backgroundColor: "rgba(12,19,32,0.82)",
          backdropFilter: "blur(10px)",
          borderTop: `1px solid ${FAINT}`,
        }}
      >
        <button
          onClick={() => fd.onCta("sticky")}
          className="mx-auto flex w-full max-w-md items-center justify-center gap-2 rounded-[3px] py-3.5 text-[12px] uppercase tracking-[0.18em]"
          style={{ backgroundColor: BRASS, color: INK }}
        >
          {hero.ctaLabel}
          <span>→</span>
        </button>
      </div>
    </main>
  );
}

function SectionTag({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <span
        className="font-[family-name:var(--font-dossier-mono)] text-[11px] tracking-[0.1em]"
        style={{ color: BRASS }}
      >
        {index}
      </span>
      <span className="h-px flex-1" style={{ backgroundColor: "#3A4A60" }} />
      <span
        className="text-[9.5px] uppercase tracking-[0.28em]"
        style={{ color: "#8C9AAE" }}
      >
        {label}
      </span>
    </div>
  );
}
