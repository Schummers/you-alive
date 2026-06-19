"use client";

import Image from "next/image";
import { Fraunces, Spectral } from "next/font/google";
import type { DesignProps } from "@/designs/types";
import { useFakeDoor } from "@/designs/shared/useFakeDoor";

// Direction: EDITORIAL MAGAZINE — a nature/almanac print-feature adapted to
// mobile. Multi-column feel, asymmetry, thin lime filets, a drop cap, pull-
// quotes, numbered field-notes. Fraunces (display serif, opsz/SOFT/WONK axes,
// NO wght) carries the headline voice with characterful soft, slightly wonky
// terminals; Spectral (literary body serif) sets the running text. Deep forest
// is the paper, cream the ink on dark, lime the editor's red-pen rules, sage
// the marginalia. Dignified, grounded, never gimmicky.
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT", "WONK"],
  style: ["normal", "italic"],
  display: "swap",
});

const spectral = Spectral({
  subsets: ["latin"],
  variable: "--font-spectral",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const FOREST = "#16271F";
const FOREST_DEEP = "#101D17";
const LIME = "#C8F169";
const CREAM = "#EFEAD8";
const SAGE = "#9DB39A";

export default function EditorialAlmanacDesign({ content, slug }: DesignProps) {
  const fd = useFakeDoor(slug);
  const { hero, problem, solution, pricing, testimonials, faq, fakedoor, footer } = content;

  // Small reusable filet (thin editorial rule with a lime tick).
  const Filet = ({ label }: { label: string }) => (
    <div className="flex items-center gap-3">
      <span
        className="font-[family-name:var(--font-spectral)] text-[10px] uppercase italic"
        style={{ letterSpacing: "0.28em", color: SAGE }}
      >
        {label}
      </span>
      <span className="h-px flex-1" style={{ backgroundColor: `${SAGE}55` }} />
      <span className="h-1 w-1 rotate-45" style={{ backgroundColor: LIME }} />
    </div>
  );

  return (
    <main
      className={`${fraunces.variable} ${spectral.variable} font-[family-name:var(--font-spectral)] relative min-h-screen antialiased`}
      style={{ backgroundColor: FOREST, color: CREAM }}
    >
      {/* faint paper grain via layered radial tints */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(120% 60% at 80% -10%, rgba(200,241,105,0.06), transparent 55%), radial-gradient(90% 50% at -10% 105%, rgba(157,179,154,0.08), transparent 60%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-md px-5 pb-40">
        {/* ───────── MASTHEAD ───────── */}
        <header className="pt-6">
          <div className="flex items-baseline justify-between border-b pb-3" style={{ borderColor: `${CREAM}22` }}>
            <span
              className="font-[family-name:var(--font-fraunces)] text-[15px] italic"
              style={{ fontVariationSettings: '"opsz" 24, "SOFT" 60, "WONK" 1', color: CREAM }}
            >
              {hero.brandLockup}
            </span>
            <span
              className="font-[family-name:var(--font-spectral)] text-[9px] uppercase"
              style={{ letterSpacing: "0.34em", color: SAGE }}
            >
              The Living Almanac · No. 01
            </span>
          </div>

          {/* HERO PHOTO — wordmark already baked in; do NOT overlay an H1 here. */}
          <figure className="mt-4">
            <div
              className="relative w-full overflow-hidden"
              style={{ aspectRatio: "9 / 16", border: `1px solid ${CREAM}1f` }}
            >
              <Image
                src="/designs/c/hero.jpeg"
                alt="You Alive — notify your loved ones when you don't reply"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 450px"
                className="object-cover"
              />
            </div>
            <figcaption
              className="mt-2 flex items-center gap-2 font-[family-name:var(--font-spectral)] text-[10px] italic"
              style={{ color: SAGE }}
            >
              <span className="h-px w-5" style={{ backgroundColor: LIME }} />
              A cover feature on what we leave behind
            </figcaption>
          </figure>

          {/* H1 rendered here, in type — never over the photo. */}
          <section className="mt-9">
            <p
              className="mb-3 font-[family-name:var(--font-spectral)] text-[10px] uppercase"
              style={{ letterSpacing: "0.3em", color: LIME }}
            >
              Lead Feature
            </p>
            <h1
              className="font-[family-name:var(--font-fraunces)] text-[40px] leading-[1.02]"
              style={{
                fontVariationSettings: '"opsz" 144, "SOFT" 40, "WONK" 1',
                letterSpacing: "-0.02em",
                color: CREAM,
              }}
            >
              {hero.title}
            </h1>
            <p
              className="mt-5 font-[family-name:var(--font-spectral)] text-[15.5px] leading-[1.62]"
              style={{ color: `${CREAM}cc` }}
            >
              {hero.subtitle}
            </p>

            <button
              onClick={() => fd.onCta("hero")}
              className="group mt-7 inline-flex items-center gap-3 px-7 py-3.5 text-[14px] font-medium transition-transform duration-300 hover:-translate-y-[2px]"
              style={{ backgroundColor: LIME, color: FOREST_DEEP }}
            >
              <span className="font-[family-name:var(--font-spectral)] font-semibold uppercase" style={{ letterSpacing: "0.08em" }}>
                {hero.ctaLabel}
              </span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>

            <p
              className="mt-5 flex items-center gap-2.5 font-[family-name:var(--font-spectral)] text-[12.5px] italic"
              style={{ color: SAGE }}
            >
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: LIME }} />
              {hero.reassuranceLine}
            </p>
          </section>
        </header>

        {/* ───────── PROBLEM (drop cap, single column feature) ───────── */}
        <section className="mt-20">
          <Filet label="The quiet problem" />
          <h2
            className="mt-6 font-[family-name:var(--font-fraunces)] text-[26px] leading-[1.16]"
            style={{ fontVariationSettings: '"opsz" 72, "SOFT" 50, "WONK" 1', letterSpacing: "-0.01em", color: CREAM }}
          >
            {problem.title}
          </h2>
          <p
            className="mt-5 font-[family-name:var(--font-spectral)] text-[15px] leading-[1.72]"
            style={{ color: `${CREAM}cc` }}
          >
            <span
              className="float-left mr-3 mt-1 font-[family-name:var(--font-fraunces)] text-[58px] leading-[0.78]"
              style={{ fontVariationSettings: '"opsz" 144, "SOFT" 0, "WONK" 1', color: LIME }}
            >
              {problem.body.charAt(0)}
            </span>
            {problem.body.slice(1)}
          </p>
        </section>

        {/* ───────── SOLUTION (numbered field-notes, asymmetric) ───────── */}
        <section className="mt-20">
          <Filet label={solution.intro} />

          <ol className="mt-9 space-y-10">
            {solution.steps.map((s, i) => (
              <li key={i} className="grid grid-cols-[auto_1fr] gap-x-4">
                <div className="flex flex-col items-center">
                  <span
                    className="font-[family-name:var(--font-fraunces)] text-[34px] leading-none italic"
                    style={{ fontVariationSettings: '"opsz" 144, "SOFT" 0, "WONK" 1', color: LIME }}
                  >
                    {i + 1}
                  </span>
                  {i < solution.steps.length - 1 && (
                    <span className="mt-3 w-px flex-1" style={{ backgroundColor: `${SAGE}44` }} />
                  )}
                </div>
                <div className="pb-1">
                  <h3
                    className="font-[family-name:var(--font-fraunces)] text-[19px] leading-[1.22]"
                    style={{ fontVariationSettings: '"opsz" 48, "SOFT" 50, "WONK" 0', letterSpacing: "-0.005em", color: CREAM }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="mt-2.5 font-[family-name:var(--font-spectral)] text-[14px] leading-[1.68]"
                    style={{ color: `${CREAM}b8` }}
                  >
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* ───────── PULL-QUOTE (editorial breather) ───────── */}
        <section className="mt-20">
          <div
            className="border-y py-9"
            style={{ borderColor: `${LIME}44` }}
          >
            <p
              className="font-[family-name:var(--font-fraunces)] text-[23px] italic leading-[1.3]"
              style={{ fontVariationSettings: '"opsz" 72, "SOFT" 60, "WONK" 1', color: LIME }}
            >
              “The kindest thing you&rsquo;ll ever leave behind is not a thing at all, but an answer.”
            </p>
          </div>
        </section>

        {/* ───────── PRICING (rate card) ───────── */}
        <section ref={fd.pricingRef} className="mt-20">
          <Filet label="Membership" />
          <h2
            className="mt-6 font-[family-name:var(--font-fraunces)] text-[26px] leading-[1.16]"
            style={{ fontVariationSettings: '"opsz" 72, "SOFT" 50, "WONK" 1', letterSpacing: "-0.01em", color: CREAM }}
          >
            {pricing.title}
          </h2>
          <p
            className="mt-4 font-[family-name:var(--font-spectral)] text-[14.5px] leading-[1.68]"
            style={{ color: `${CREAM}c0` }}
          >
            {pricing.subtitle}
          </p>

          <div className="mt-9 space-y-4">
            {pricing.plans.map((plan, i) => {
              const highlight = !!plan.highlight;
              return (
                <div
                  key={i}
                  className="relative px-6 py-6"
                  style={{
                    backgroundColor: highlight ? LIME : "transparent",
                    color: highlight ? FOREST_DEEP : CREAM,
                    border: highlight ? `1px solid ${LIME}` : `1px solid ${CREAM}26`,
                  }}
                >
                  {highlight && (
                    <span
                      className="absolute right-5 top-5 font-[family-name:var(--font-spectral)] text-[9px] uppercase"
                      style={{ letterSpacing: "0.28em", color: FOREST }}
                    >
                      Editor&rsquo;s pick
                    </span>
                  )}
                  <p
                    className="font-[family-name:var(--font-spectral)] text-[11px] uppercase"
                    style={{ letterSpacing: "0.26em", color: highlight ? FOREST : SAGE }}
                  >
                    {plan.name}
                  </p>
                  <p
                    className="mt-2 font-[family-name:var(--font-fraunces)] text-[36px] leading-none"
                    style={{ fontVariationSettings: '"opsz" 144, "SOFT" 30, "WONK" 1', letterSpacing: "-0.015em" }}
                  >
                    {plan.price}
                  </p>
                  <p
                    className="mt-2.5 font-[family-name:var(--font-spectral)] text-[13px] italic"
                    style={{ color: highlight ? `${FOREST_DEEP}cc` : SAGE }}
                  >
                    {plan.descriptor}
                  </p>
                  <button
                    onClick={() => fd.onCta(`pricing-${plan.name.toLowerCase()}`)}
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 px-6 py-3 text-[13px] font-semibold uppercase transition-opacity hover:opacity-85"
                    style={{
                      letterSpacing: "0.08em",
                      backgroundColor: highlight ? FOREST_DEEP : LIME,
                      color: highlight ? CREAM : FOREST_DEEP,
                    }}
                  >
                    {plan.ctaLabel}
                    <span>→</span>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Included — set as a two-column ingredients list */}
          <div className="mt-8 border-t pt-6" style={{ borderColor: `${CREAM}22` }}>
            <p
              className="mb-4 font-[family-name:var(--font-spectral)] text-[10px] uppercase"
              style={{ letterSpacing: "0.3em", color: LIME }}
            >
              In every membership
            </p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {pricing.included.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 font-[family-name:var(--font-spectral)] text-[13px] leading-[1.4]"
                  style={{ color: `${CREAM}d0` }}
                >
                  <span className="mt-[7px] h-1 w-1 flex-none rotate-45" style={{ backgroundColor: LIME }} />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <p
            className="mt-6 font-[family-name:var(--font-spectral)] text-[12px] italic leading-[1.6]"
            style={{ color: SAGE }}
          >
            {pricing.scarcityLine}
          </p>
        </section>

        {/* ───────── TESTIMONIALS (letters to the editor) ───────── */}
        <section className="mt-20">
          <Filet label="From the readers" />
          <div className="mt-9 space-y-9">
            {testimonials.map((t, i) => (
              <figure key={i} className="border-l-2 pl-5" style={{ borderColor: `${LIME}99` }}>
                <blockquote
                  className="font-[family-name:var(--font-fraunces)] text-[17px] italic leading-[1.42]"
                  style={{ fontVariationSettings: '"opsz" 48, "SOFT" 60, "WONK" 1', color: CREAM }}
                >
                  {t.quote}
                </blockquote>
                <figcaption
                  className="mt-3 font-[family-name:var(--font-spectral)] text-[11px] uppercase"
                  style={{ letterSpacing: "0.2em", color: SAGE }}
                >
                  {t.name}, {t.age}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ───────── FAQ (the back matter) ───────── */}
        <section className="mt-20">
          <Filet label="Questions & answers" />
          <div className="mt-7" style={{ borderTop: `1px solid ${CREAM}22` }}>
            {faq.map((item, i) => (
              <details key={i} className="group border-b" style={{ borderColor: `${CREAM}22` }}>
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5">
                  <span
                    className="font-[family-name:var(--font-fraunces)] text-[16px] leading-[1.3]"
                    style={{ fontVariationSettings: '"opsz" 36, "SOFT" 50, "WONK" 0', color: CREAM }}
                  >
                    {item.q}
                  </span>
                  <span
                    className="mt-0.5 font-[family-name:var(--font-spectral)] text-[20px] leading-none transition-transform duration-300 group-open:rotate-45"
                    style={{ color: LIME }}
                  >
                    +
                  </span>
                </summary>
                <p
                  className="pb-5 font-[family-name:var(--font-spectral)] text-[13.5px] leading-[1.68]"
                  style={{ color: `${CREAM}bb` }}
                >
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* ───────── FINAL CTA (colophon plate) ───────── */}
        <section
          className="mt-20 px-7 py-12 text-center"
          style={{ backgroundColor: FOREST_DEEP, border: `1px solid ${LIME}33` }}
        >
          <span className="mx-auto block h-2 w-2 rotate-45" style={{ backgroundColor: LIME }} />
          <h2
            className="mx-auto mt-6 max-w-[16ch] font-[family-name:var(--font-fraunces)] text-[28px] leading-[1.12]"
            style={{ fontVariationSettings: '"opsz" 144, "SOFT" 50, "WONK" 1', letterSpacing: "-0.01em", color: CREAM }}
          >
            {content.finalCta.headline}
          </h2>
          <button
            onClick={() => fd.onCta("final")}
            className="mt-8 inline-flex items-center gap-3 px-8 py-3.5 text-[13px] font-semibold uppercase transition-transform duration-300 hover:-translate-y-[2px]"
            style={{ letterSpacing: "0.08em", backgroundColor: LIME, color: FOREST_DEEP }}
          >
            {content.finalCta.ctaLabel}
            <span>→</span>
          </button>
        </section>

        {/* ───────── FAKE-DOOR ───────── */}
        {fd.showWaitlist && (
          <section
            id="waitlist"
            className="mt-10 px-6 py-9"
            style={{ border: `1px solid ${LIME}44`, backgroundColor: `${LIME}0a` }}
          >
            {fd.state === "done" ? (
              <div className="text-center">
                <p
                  className="font-[family-name:var(--font-fraunces)] text-[23px] leading-tight"
                  style={{ fontVariationSettings: '"opsz" 72, "SOFT" 50, "WONK" 1', color: CREAM }}
                >
                  {content.confirmation.title}
                </p>
                <p
                  className="mx-auto mt-4 max-w-[34ch] font-[family-name:var(--font-spectral)] text-[14px] leading-[1.66]"
                  style={{ color: `${CREAM}c8` }}
                >
                  {content.confirmation.body}
                </p>
              </div>
            ) : (
              <>
                <p
                  className="text-center font-[family-name:var(--font-fraunces)] text-[24px] italic leading-[1.15]"
                  style={{ fontVariationSettings: '"opsz" 72, "SOFT" 60, "WONK" 1', color: LIME }}
                >
                  {fakedoor.title}
                </p>
                <p
                  className="mx-auto mt-3 max-w-[34ch] text-center font-[family-name:var(--font-spectral)] text-[14px] leading-[1.66]"
                  style={{ color: `${CREAM}c8` }}
                >
                  {fakedoor.body}
                </p>
                <form onSubmit={fd.submit} className="mt-6 flex flex-col gap-3">
                  <input
                    type="email"
                    required
                    value={fd.email}
                    onChange={(e) => fd.setEmail(e.target.value)}
                    placeholder={fakedoor.emailPlaceholder}
                    className="w-full bg-transparent px-5 py-3.5 font-[family-name:var(--font-spectral)] text-[15px] focus:outline-none"
                    style={{ border: `1px solid ${CREAM}33`, color: CREAM }}
                  />
                  <button
                    type="submit"
                    disabled={fd.state === "loading"}
                    className="w-full px-6 py-3.5 text-[13px] font-semibold uppercase disabled:opacity-60"
                    style={{ letterSpacing: "0.08em", backgroundColor: LIME, color: FOREST_DEEP }}
                  >
                    {fd.state === "loading" ? "…" : fakedoor.submitLabel}
                  </button>
                  {fd.state === "error" && (
                    <p
                      className="text-center font-[family-name:var(--font-spectral)] text-[13px]"
                      style={{ color: LIME }}
                    >
                      Something went wrong. Try again.
                    </p>
                  )}
                </form>
                <p
                  className="mt-4 text-center font-[family-name:var(--font-spectral)] text-[11.5px] italic"
                  style={{ color: SAGE }}
                >
                  {fakedoor.privacyLine}
                </p>
              </>
            )}
          </section>
        )}

        {/* ───────── FOOTER (colophon) ───────── */}
        <footer className="mt-20 border-t pt-7" style={{ borderColor: `${CREAM}22` }}>
          <p
            className="font-[family-name:var(--font-fraunces)] text-[15px] italic"
            style={{ fontVariationSettings: '"opsz" 36, "SOFT" 60, "WONK" 1', color: CREAM }}
          >
            {footer.lines[0]}
          </p>
          <p
            className="mt-3 font-[family-name:var(--font-spectral)] text-[10px] uppercase"
            style={{ letterSpacing: "0.24em", color: SAGE }}
          >
            {footer.lines.slice(1).join("   ·   ")}
          </p>
        </footer>
      </div>

      {/* Sticky CTA — a slim editorial banner */}
      <div className="fixed inset-x-0 bottom-0 z-40 px-5 pb-4">
        <button
          onClick={() => fd.onCta("sticky")}
          className="mx-auto flex w-full max-w-md items-center justify-center gap-2 px-6 py-3.5 text-[13px] font-semibold uppercase shadow-[0_18px_40px_-18px_rgba(0,0,0,0.7)]"
          style={{ letterSpacing: "0.08em", backgroundColor: LIME, color: FOREST_DEEP }}
        >
          {hero.ctaLabel}
          <span>→</span>
        </button>
      </div>
    </main>
  );
}
