"use client";

import { Archivo, JetBrains_Mono } from "next/font/google";
import type { DesignProps } from "@/designs/types";
import { useFakeDoor } from "@/designs/shared/useFakeDoor";

// Direction: DIGNIFIED BRUTALIST BENTO (variant C).
// Swiss-industrial structure recolored to the brand: deep forest substrate,
// cream ink, ONE lime accent (standing in for the archetype's hazard red).
// Rigid modular CSS-grid, razor 1px gaps drawn by the darker substrate showing
// through, all corners 0px, mono micro-type for telemetry and a heavy grotesk
// for macro headlines. Text-led, no photo. High density: bento cells = exactly
// the content count, no empty tiles. Motion is CSS-only (load-in rise + active
// press), collapsed under prefers-reduced-motion.
const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  axes: ["wdth"],
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const FOREST = "#16271F";
const LIME = "#C8F169";

export default function BrutalistBentoDesign({ content, slug }: DesignProps) {
  const fd = useFakeDoor(slug);
  const { hero, problem, solution, pricing, testimonials, faq, fakedoor, footer } = content;

  return (
    <main
      className={`${archivo.variable} ${mono.variable} font-[family-name:var(--font-mono)] min-h-screen bg-[#0E1B14] text-[#EFEAD8] antialiased selection:bg-[#C8F169] selection:text-[#16271F]`}
    >
      <style>{`
        @keyframes ya-rise { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .ya-rise { animation: ya-rise 0.6s cubic-bezier(0.16,1,0.3,1) both; }
        .ya-hover { transition: transform 0.2s cubic-bezier(0.16,1,0.3,1), background-color 0.2s; }
        .ya-hover:active { transform: translateY(1px); }
        @media (prefers-reduced-motion: reduce) {
          .ya-rise { animation: none !important; }
          .ya-hover { transition: none !important; }
        }
      `}</style>

      <div className="mx-auto max-w-md bg-[#0E1B14] pb-20">
        {/* ───────── MASTHEAD ───────── */}
        <header className="grid grid-cols-2 gap-px bg-[#0E1B14]">
          <div className="bg-[#16271F] px-4 py-3">
            <span className="font-[family-name:var(--font-archivo)] text-[15px] font-extrabold uppercase tracking-[-0.02em] text-[#EFEAD8]">
              {hero.brandLockup}
            </span>
          </div>
          <div className="flex items-center justify-end bg-[#16271F] px-4 py-3">
            <span className="text-[10px] uppercase tracking-[0.18em] text-[#C8F169]">
              REV / LEGACY-C
            </span>
          </div>
        </header>

        {/* ───────── HERO ───────── */}
        <section className="ya-rise bg-[#16271F] px-4 pb-7 pt-8">
          <p className="text-[10px] uppercase tracking-[0.22em] text-[#8AA28F]">
            {">>"} PREPARED TODAY / DELIVERED WHEN IT MATTERS
          </p>
          <h1 className="mt-5 font-[family-name:var(--font-archivo)] text-[40px] font-extrabold uppercase leading-[0.92] tracking-[-0.03em] text-[#EFEAD8]">
            {hero.title}
          </h1>
          <p className="mt-5 max-w-[34ch] text-[13.5px] leading-[1.55] text-[#C7D3C9]">
            {hero.subtitle}
          </p>
          <button
            onClick={() => fd.onCta("hero")}
            className="ya-hover mt-7 flex w-full items-center justify-between bg-[#C8F169] px-5 py-4 text-[14px] font-semibold uppercase tracking-[0.04em] text-[#16271F] hover:bg-[#d4f586]"
          >
            <span>{hero.ctaLabel}</span>
            <span aria-hidden>{">>>"}</span>
          </button>
          <p className="mt-4 border-t border-[#EFEAD8]/12 pt-3 text-[11px] uppercase tracking-[0.1em] text-[#8AA28F]">
            <span style={{ color: LIME }}>{"+ "}</span>
            {hero.reassuranceLine}
          </p>
        </section>

        <div className="h-px bg-[#0E1B14]" />

        {/* ───────── PROBLEM ───────── */}
        <section className="bg-[#16271F] px-4 py-8">
          <p className="text-[10px] uppercase tracking-[0.22em] text-[#8AA28F]">
            [ THE QUIET PROBLEM ]
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-archivo)] text-[24px] font-bold uppercase leading-[1.02] tracking-[-0.02em] text-[#EFEAD8]">
            {problem.title}
          </h2>
          <p className="mt-4 text-[13.5px] leading-[1.6] text-[#C7D3C9]">
            {problem.body}
          </p>
        </section>

        <div className="h-px bg-[#0E1B14]" />

        {/* ───────── SOLUTION (bento: intro banner + 3 step cells) ───────── */}
        <section>
          <div className="bg-[#C8F169] px-4 py-4">
            <h2 className="font-[family-name:var(--font-archivo)] text-[18px] font-extrabold uppercase tracking-[-0.01em] text-[#16271F]">
              {solution.intro}
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-px bg-[#0E1B14]">
            {solution.steps.map((s, i) => (
              <article key={i} className="bg-[#16271F] px-4 py-6">
                <div className="flex items-start gap-3">
                  <output className="font-[family-name:var(--font-archivo)] text-[28px] font-extrabold leading-none text-[#C8F169]">
                    {String(i + 1).padStart(2, "0")}
                  </output>
                  <h3 className="mt-1 font-[family-name:var(--font-archivo)] text-[16px] font-bold uppercase leading-[1.08] tracking-[-0.01em] text-[#EFEAD8]">
                    {s.title}
                  </h3>
                </div>
                <p className="mt-3 text-[13px] leading-[1.6] text-[#C7D3C9]">
                  {s.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <div className="h-px bg-[#0E1B14]" />

        {/* ───────── PRICING ───────── */}
        <section ref={fd.pricingRef} className="bg-[#16271F] px-4 py-8">
          <p className="text-[10px] uppercase tracking-[0.22em] text-[#8AA28F]">
            [ MEMBERSHIP ]
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-archivo)] text-[24px] font-bold uppercase leading-[1.02] tracking-[-0.02em] text-[#EFEAD8]">
            {pricing.title}
          </h2>
          <p className="mt-4 text-[13px] leading-[1.6] text-[#C7D3C9]">
            {pricing.subtitle}
          </p>

          {/* plans: 2 cells */}
          <div className="mt-6 grid grid-cols-1 gap-px bg-[#0E1B14]">
            {pricing.plans.map((plan, i) => (
              <div
                key={i}
                className={
                  plan.highlight
                    ? "bg-[#C8F169] px-4 py-5 text-[#16271F]"
                    : "border border-[#EFEAD8]/15 bg-[#16271F] px-4 py-5 text-[#EFEAD8]"
                }
              >
                <div className="flex items-baseline justify-between">
                  <span className="text-[11px] uppercase tracking-[0.14em]">
                    {plan.name}
                  </span>
                  {plan.highlight && (
                    <span className="bg-[#16271F] px-2 py-0.5 text-[9px] uppercase tracking-[0.12em] text-[#C8F169]">
                      MOST CHOSEN
                    </span>
                  )}
                </div>
                <p className="mt-2 font-[family-name:var(--font-archivo)] text-[30px] font-extrabold leading-none tracking-[-0.02em]">
                  {plan.price}
                </p>
                <p
                  className="mt-2 text-[11px] uppercase tracking-[0.08em]"
                  style={{ color: plan.highlight ? FOREST : "#8AA28F" }}
                >
                  {plan.descriptor}
                </p>
                <button
                  onClick={() => fd.onCta(`pricing-${plan.name.toLowerCase()}`)}
                  className={
                    plan.highlight
                      ? "ya-hover mt-4 flex w-full items-center justify-between bg-[#16271F] px-4 py-3 text-[13px] font-semibold uppercase tracking-[0.04em] text-[#C8F169] hover:bg-[#1f3429]"
                      : "ya-hover mt-4 flex w-full items-center justify-between bg-[#C8F169] px-4 py-3 text-[13px] font-semibold uppercase tracking-[0.04em] text-[#16271F] hover:bg-[#d4f586]"
                  }
                >
                  <span>{plan.ctaLabel}</span>
                  <span aria-hidden>{">>"}</span>
                </button>
              </div>
            ))}
          </div>

          {/* included: bento grid, cells = feature count */}
          <p className="mt-6 text-[10px] uppercase tracking-[0.22em] text-[#8AA28F]">
            [ EVERYTHING INCLUDED ]
          </p>
          <ul className="mt-3 grid grid-cols-2 gap-px bg-[#0E1B14]">
            {pricing.included.map((feature, i) => (
              <li
                key={i}
                className="flex items-center gap-2 bg-[#16271F] px-3 py-3 text-[11.5px] uppercase tracking-[0.02em] text-[#C7D3C9]"
              >
                <span className="text-[#C8F169]" aria-hidden>
                  /
                </span>
                {feature}
              </li>
            ))}
          </ul>

          <p className="mt-5 border-t border-[#EFEAD8]/12 pt-3 text-[11px] leading-[1.5] text-[#8AA28F]">
            {pricing.scarcityLine}
          </p>
        </section>

        <div className="h-px bg-[#0E1B14]" />

        {/* ───────── TESTIMONIALS (3 cells) ───────── */}
        <section className="bg-[#16271F] px-4 pt-8">
          <p className="text-[10px] uppercase tracking-[0.22em] text-[#8AA28F]">
            [ FROM THOSE WHO STARTED ]
          </p>
        </section>
        <div className="grid grid-cols-1 gap-px bg-[#0E1B14]">
          {testimonials.map((t, i) => (
            <figure key={i} className="bg-[#16271F] px-4 py-6">
              <blockquote className="font-[family-name:var(--font-archivo)] text-[16px] font-medium leading-[1.32] tracking-[-0.005em] text-[#EFEAD8]">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-[11px] uppercase tracking-[0.12em] text-[#8AA28F]">
                <span style={{ color: LIME }}>{t.name}</span> / {t.age}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="h-px bg-[#0E1B14]" />

        {/* ───────── FAQ ───────── */}
        <section className="bg-[#16271F] px-4 pb-8 pt-8">
          <p className="text-[10px] uppercase tracking-[0.22em] text-[#8AA28F]">
            [ QUESTIONS ]
          </p>
          <div className="mt-4">
            {faq.map((item, i) => (
              <details
                key={i}
                className="group border-t border-[#EFEAD8]/12 py-4 last:border-b last:border-[#EFEAD8]/12"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-3">
                  <span className="font-[family-name:var(--font-archivo)] text-[14px] font-bold uppercase leading-[1.15] tracking-[-0.005em] text-[#EFEAD8]">
                    {item.q}
                  </span>
                  <span
                    className="mt-0.5 flex-none font-[family-name:var(--font-archivo)] text-[16px] font-extrabold leading-none text-[#C8F169] transition-transform duration-200 group-open:rotate-45"
                    aria-hidden
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-[12.5px] leading-[1.6] text-[#C7D3C9]">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        <div className="h-px bg-[#0E1B14]" />

        {/* ───────── FINAL CTA ───────── */}
        <section className="bg-[#C8F169] px-4 py-10">
          <h2 className="font-[family-name:var(--font-archivo)] text-[30px] font-extrabold uppercase leading-[0.96] tracking-[-0.03em] text-[#16271F]">
            {content.finalCta.headline}
          </h2>
          <button
            onClick={() => fd.onCta("final")}
            className="ya-hover mt-6 flex w-full items-center justify-between bg-[#16271F] px-5 py-4 text-[14px] font-semibold uppercase tracking-[0.04em] text-[#C8F169] hover:bg-[#1f3429]"
          >
            <span>{content.finalCta.ctaLabel}</span>
            <span aria-hidden>{">>>"}</span>
          </button>
        </section>

        {/* ───────── FAKE-DOOR ───────── */}
        {fd.showWaitlist && (
          <section id="waitlist" className="border-t border-[#0E1B14] bg-[#16271F] px-4 py-10">
            {fd.state === "done" ? (
              <div>
                <h2 className="font-[family-name:var(--font-archivo)] text-[24px] font-extrabold uppercase leading-[1.0] tracking-[-0.02em] text-[#C8F169]">
                  {content.confirmation.title}
                </h2>
                <p className="mt-4 text-[13.5px] leading-[1.6] text-[#C7D3C9]">
                  {content.confirmation.body}
                </p>
              </div>
            ) : (
              <>
                <p className="text-[10px] uppercase tracking-[0.22em] text-[#8AA28F]">
                  [ EARLY ACCESS ]
                </p>
                <h2 className="mt-3 font-[family-name:var(--font-archivo)] text-[26px] font-extrabold uppercase leading-[1.0] tracking-[-0.02em] text-[#EFEAD8]">
                  {fakedoor.title}
                </h2>
                <p className="mt-3 text-[13px] leading-[1.6] text-[#C7D3C9]">
                  {fakedoor.body}
                </p>
                <form onSubmit={fd.submit} className="mt-5 grid grid-cols-1 gap-px bg-[#0E1B14]">
                  <input
                    type="email"
                    required
                    value={fd.email}
                    onChange={(e) => fd.setEmail(e.target.value)}
                    placeholder={fakedoor.emailPlaceholder}
                    className="w-full border border-[#EFEAD8]/20 bg-[#0E1B14] px-4 py-4 text-[14px] text-[#EFEAD8] placeholder:text-[#8AA28F] focus:border-[#C8F169] focus:outline-none"
                  />
                  <button
                    type="submit"
                    disabled={fd.state === "loading"}
                    className="ya-hover flex w-full items-center justify-between bg-[#C8F169] px-5 py-4 text-[14px] font-semibold uppercase tracking-[0.04em] text-[#16271F] hover:bg-[#d4f586] disabled:opacity-60"
                  >
                    <span>{fd.state === "loading" ? "SENDING..." : fakedoor.submitLabel}</span>
                    <span aria-hidden>{">>>"}</span>
                  </button>
                </form>
                {fd.state === "error" && (
                  <p className="mt-3 text-[12px] uppercase tracking-[0.06em] text-[#C8F169]">
                    [ ERROR ] Something went wrong. Try again.
                  </p>
                )}
                <p className="mt-4 text-[11px] uppercase tracking-[0.08em] text-[#8AA28F]">
                  {fakedoor.privacyLine}
                </p>
              </>
            )}
          </section>
        )}

        {/* ───────── FOOTER ───────── */}
        <footer className="border-t border-[#0E1B14] bg-[#16271F] px-4 py-8">
          <p className="font-[family-name:var(--font-archivo)] text-[13px] font-bold uppercase leading-[1.2] tracking-[-0.01em] text-[#EFEAD8]">
            {footer.lines[0]}
          </p>
          <div className="mt-4 flex gap-4 text-[10px] uppercase tracking-[0.14em] text-[#8AA28F]">
            {footer.lines.slice(1).map((line, i) => (
              <span key={i}>{line}</span>
            ))}
          </div>
          <p className="mt-4 text-[10px] uppercase tracking-[0.1em]">
            <span style={{ color: LIME }}>{"+ "}</span>
            <span className="text-[#8AA28F]">END OF TRANSMISSION</span>
          </p>
        </footer>
      </div>

      {/* ───────── STICKY CTA ───────── */}
      <div className="fixed inset-x-0 bottom-0 z-40 mx-auto max-w-md border-t border-[#0E1B14] bg-[#16271F] px-4 py-3">
        <button
          onClick={() => fd.onCta("sticky")}
          className="ya-hover flex w-full items-center justify-between bg-[#C8F169] px-5 py-3.5 text-[13px] font-semibold uppercase tracking-[0.04em] text-[#16271F] hover:bg-[#d4f586]"
        >
          <span>{hero.ctaLabel}</span>
          <span aria-hidden>{">>>"}</span>
        </button>
      </div>
    </main>
  );
}
