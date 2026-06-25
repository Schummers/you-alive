"use client";

import { Bricolage_Grotesque } from "next/font/google";
import type { DesignProps } from "@/designs/types";
import { useFakeDoor } from "@/designs/shared/useFakeDoor";

// Retro / quirky direction — channels ad image3 (deep forest backdrop, bold
// lime display, slightly offbeat). Chunky Bricolage Grotesque display, dark
// green canvas, electric lime accent, cream text, dotted rules, playful tone.
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const GREEN = "#16271F";
const LIME = "#C8F169";
const CREAM = "#EFEAD8";
const MUTED = "#9DB39A";

export default function RetroForestDesign({ content, slug }: DesignProps) {
  const fd = useFakeDoor(slug);
  const { hero, problem, solution, pricing, testimonials, faq, fakedoor, footer } = content;

  const dotted = { borderTop: `1px dashed ${MUTED}55` };

  return (
    <main
      className={`${bricolage.variable} relative min-h-screen overflow-hidden`}
      style={{
        background: GREEN,
        color: CREAM,
        fontFamily: "var(--font-geist-sans), ui-sans-serif",
      }}
    >
      <div className="relative mx-auto max-w-md px-6 pb-32">
        {/* ───────── HERO ───────── */}
        <header className="pt-9">
          <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.26em]" style={{ color: MUTED }}>
            <span className="font-[family-name:var(--font-bricolage)] text-[15px] font-extrabold tracking-tight" style={{ color: LIME }}>
              You Alive
            </span>
            <span>★ no. 03</span>
          </div>

          <div className="pt-14">
            <h1
              className="font-[family-name:var(--font-bricolage)] text-[58px] font-extrabold uppercase italic leading-[0.9] tracking-[-0.03em]"
              style={{ color: LIME }}
            >
              {hero.title}
            </h1>
            <p className="mt-6 max-w-[32ch] text-[16px] leading-[1.55]" style={{ color: CREAM }}>
              {hero.subtitle}
            </p>

            <button
              onClick={() => fd.onCta("hero")}
              className="group mt-8 inline-flex items-center gap-3 rounded-full px-8 py-4 text-[15px] font-bold uppercase tracking-wide transition-transform duration-200 hover:-translate-y-[2px]"
              style={{ background: LIME, color: GREEN }}
            >
              {hero.ctaLabel}
              <span className="transition-transform group-hover:translate-x-1">↗</span>
            </button>
            <p className="mt-4 flex items-center gap-2 text-[12.5px]" style={{ color: MUTED }}>
              <span style={{ color: LIME }}>●</span>
              {hero.reassuranceLine}
            </p>
          </div>
        </header>

        {/* ───────── PROBLEM ───────── */}
        <section className="mt-20 pt-8" style={dotted}>
          <p className="mb-4 text-[10px] uppercase tracking-[0.34em]" style={{ color: LIME }}>
            (the problem)
          </p>
          <h2 className="font-[family-name:var(--font-bricolage)] text-[31px] font-bold leading-[1.05] tracking-[-0.02em]" style={{ color: CREAM }}>
            {problem.title}
          </h2>
          <p className="mt-5 text-[15.5px] leading-[1.6]" style={{ color: MUTED }}>
            {problem.body}
          </p>
        </section>

        {/* ───────── SOLUTION ───────── */}
        <section className="mt-20 pt-8" style={dotted}>
          <div className="flex items-baseline justify-between">
            <p className="text-[10px] uppercase tracking-[0.34em]" style={{ color: LIME }}>(how it works)</p>
            <p className="font-[family-name:var(--font-bricolage)] text-[13px] font-bold italic" style={{ color: MUTED }}>3 steps, no fuss</p>
          </div>
          <h2 className="mt-3 font-[family-name:var(--font-bricolage)] text-[31px] font-bold uppercase tracking-[-0.02em]" style={{ color: CREAM }}>
            {solution.intro}
          </h2>

          <ol className="mt-9 space-y-9">
            {solution.steps.map((s, i) => (
              <li key={i}>
                <div className="flex items-center gap-3">
                  <span
                    className="font-[family-name:var(--font-bricolage)] text-[40px] font-extrabold leading-none"
                    style={{ color: LIME, WebkitTextStroke: `0px` }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="h-[2px] flex-1 rounded-full" style={{ background: `${LIME}40` }} />
                </div>
                <h3 className="mt-3 font-[family-name:var(--font-bricolage)] text-[20px] font-bold leading-[1.2]" style={{ color: CREAM }}>
                  {s.title}
                </h3>
                <p className="mt-2 text-[14.5px] leading-[1.55]" style={{ color: MUTED }}>
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* ───────── PRICING ───────── */}
        <section ref={fd.pricingRef} className="mt-20">
          <div className="rounded-[28px] p-8" style={{ background: LIME, color: GREEN }}>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em]" style={{ color: `${GREEN}99` }}>
              membership
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-bricolage)] text-[28px] font-extrabold leading-[1.05] tracking-[-0.02em]">
              {pricing.title}
            </h2>
            <div className="mt-7 flex items-baseline gap-2">
              <span className="font-[family-name:var(--font-bricolage)] text-[64px] font-extrabold leading-none">
                {pricing.monthly.split(" ")[0]}
              </span>
              <span className="text-[14px] font-semibold" style={{ color: `${GREEN}CC` }}>
                {pricing.monthly.split(" ").slice(1).join(" ")}
              </span>
            </div>
            <p className="mt-1 font-[family-name:var(--font-bricolage)] text-[13px] font-bold italic" style={{ color: `${GREEN}AA` }}>
              or {pricing.annual.toLowerCase()}
            </p>
            <button
              onClick={() => fd.onCta("pricing")}
              className="mt-7 w-full rounded-full px-7 py-4 text-[15px] font-bold uppercase tracking-wide"
              style={{ background: GREEN, color: LIME }}
            >
              {pricing.ctaLabel}
            </button>
            <p className="mt-5 text-center text-[12px] font-medium" style={{ color: `${GREEN}99` }}>
              {pricing.scarcityLine}
            </p>
          </div>
        </section>

        {/* ───────── TESTIMONIALS ───────── */}
        <section className="mt-20 pt-8" style={dotted}>
          <p className="mb-6 text-[10px] uppercase tracking-[0.34em]" style={{ color: LIME }}>(real people)</p>
          <div className="space-y-8">
            {testimonials.map((t, i) => (
              <figure key={i}>
                <blockquote className="font-[family-name:var(--font-bricolage)] text-[20px] font-medium leading-[1.35]" style={{ color: CREAM }}>
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-3 text-[12.5px] font-bold uppercase tracking-[0.16em]" style={{ color: LIME }}>
                  {t.name} <span style={{ color: MUTED }}>/ {t.age}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ───────── FAQ ───────── */}
        <section className="mt-20 pt-8" style={dotted}>
          <p className="mb-5 text-[10px] uppercase tracking-[0.34em]" style={{ color: LIME }}>(questions)</p>
          <div>
            {faq.map((item, i) => (
              <details key={i} className="group border-b py-5" style={{ borderColor: `${MUTED}33` }}>
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                  <span className="font-[family-name:var(--font-bricolage)] text-[17px] font-bold leading-[1.25]" style={{ color: CREAM }}>
                    {item.q}
                  </span>
                  <span className="mt-0.5 select-none font-[family-name:var(--font-bricolage)] text-[22px] font-bold leading-none transition-transform duration-300 group-open:rotate-45" style={{ color: LIME }}>
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-[36ch] text-[14px] leading-[1.55]" style={{ color: MUTED }}>
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* ───────── FAKE-DOOR ───────── */}
        {fd.showWaitlist && (
          <section id="waitlist" className="mt-20 rounded-[28px] border p-8" style={{ borderColor: `${LIME}55` }}>
            {fd.state === "done" ? (
              <div className="text-center">
                <h3 className="font-[family-name:var(--font-bricolage)] text-[26px] font-extrabold uppercase" style={{ color: LIME }}>
                  {content.confirmation.title}
                </h3>
                <p className="mt-3 text-[14.5px] leading-[1.55]" style={{ color: MUTED }}>
                  {content.confirmation.body}
                </p>
              </div>
            ) : (
              <>
                <h3 className="font-[family-name:var(--font-bricolage)] text-[34px] font-extrabold uppercase italic leading-[0.95]" style={{ color: LIME }}>
                  {fakedoor.title}
                </h3>
                <p className="mt-3 text-[14.5px] leading-[1.55]" style={{ color: CREAM }}>
                  {fakedoor.body}
                </p>
                <form onSubmit={fd.submit} className="mt-6 flex flex-col gap-3">
                  <input
                    type="email"
                    required
                    value={fd.email}
                    onChange={(e) => fd.setEmail(e.target.value)}
                    placeholder={fakedoor.emailPlaceholder}
                    className="w-full rounded-full px-5 py-3.5 text-[15px] outline-none"
                    style={{ background: CREAM, color: GREEN }}
                  />
                  <button
                    type="submit"
                    disabled={fd.state === "loading"}
                    className="w-full rounded-full px-6 py-3.5 text-[15px] font-bold uppercase tracking-wide disabled:opacity-60"
                    style={{ background: LIME, color: GREEN }}
                  >
                    {fd.state === "loading" ? "..." : fakedoor.submitLabel}
                  </button>
                  {fd.state === "error" && <p className="text-[13px] text-rose-300">Something went wrong. Try again.</p>}
                </form>
                <p className="mt-4 text-center text-[12px]" style={{ color: MUTED }}>{fakedoor.privacyLine}</p>
              </>
            )}
          </section>
        )}

        {/* ───────── FOOTER ───────── */}
        <footer className="mt-16 pt-8 text-center" style={dotted}>
          <p className="font-[family-name:var(--font-bricolage)] text-[16px] font-bold italic" style={{ color: LIME }}>
            {footer.lines[0]}
          </p>
          <p className="mt-3 text-[11px] uppercase tracking-[0.22em]" style={{ color: MUTED }}>
            {footer.lines.slice(1).join(" · ")}
          </p>
        </footer>
      </div>

      {/* Sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 px-6 py-3" style={{ background: `${GREEN}E6`, backdropFilter: "blur(10px)", borderTop: `1px solid ${LIME}33` }}>
        <button
          onClick={() => fd.onCta("sticky")}
          className="mx-auto block w-full max-w-md rounded-full px-6 py-3.5 text-[15px] font-bold uppercase tracking-wide"
          style={{ background: LIME, color: GREEN }}
        >
          {hero.ctaLabel}
        </button>
      </div>
    </main>
  );
}
