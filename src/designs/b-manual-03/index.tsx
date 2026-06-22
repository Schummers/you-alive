"use client";

import { Fraunces, Spectral } from "next/font/google";
import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { ArrowRight } from "lucide-react";
import type { DesignProps } from "@/designs/types";
import { useFakeDoor } from "@/designs/shared/useFakeDoor";
import { CountUp } from "@/designs/shared/CountUp";

// ─────────────────────────────────────────────────────────────────────────────
// MANUAL · B · "Scripture" — the literary / printed-scripture treatment.
//
// Family signature (shared across b-manual): ONE single lavender background
// across the WHOLE page. No alternating colored bands, no bleed sections.
// Rhythm comes from vertical spacing + thin chapter rules. Cards appear ONLY
// in pricing plans, "everything included", the final-CTA panel, and the
// fakedoor form. Everything else sits straight on the paper.
//
// THIS version channels b-fd-06: chapter rules carrying a tiny uppercase serif
// label on the left + an italic Fraunces roman numeral on the right; big
// Fraunces drop-caps opening the problem + each method step; SQUARE corners
// everywhere (≈4px) for the printed-page look; method steps as chapter numerals
// on a left vertical border; a square ink final-CTA panel; pull-quotes and FAQ
// separated by thin rules, no card chrome. Spectral body, light weights, airy.
// ─────────────────────────────────────────────────────────────────────────────
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
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

// Palette B (locked indigo / lavender family)
const INK = "#26235A"; // primary ink
const SOFT = "#5A5690"; // secondary ink / accent
const LAV_PANEL = "#EBE6FF"; // ghost wordmark tint
const PAPER_LIGHT = "#F7F4FF"; // card paper tint
const LAV_INCLUDED = "#EFEAFF"; // included card tint

// Scroll-reveal primitive: blur-rise, reduced-motion safe (ported structure).
function Reveal({
  children,
  className = "",
  delay = 0,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "section" | "figure";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShown(true);
          obs.disconnect();
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  const Tag = as as "div";
  return (
    <Tag
      ref={ref}
      data-reveal={shown ? "in" : "out"}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${className}`}
    >
      {children}
    </Tag>
  );
}

// Chapter rule: thin full-width line, uppercase serif label left, italic
// Fraunces roman numeral right. The recurring scripture device.
function ChapterRule({ label, numeral }: { label: string; numeral: string }) {
  return (
    <div className="flex items-baseline justify-between border-b border-[#26235A]/15 pb-2">
      <span className="font-[family-name:var(--font-fraunces)] text-[10px] uppercase tracking-[0.4em] text-[#5A5690]">
        {label}
      </span>
      <span className="font-[family-name:var(--font-fraunces)] text-[13px] italic text-[#5A5690]">
        {numeral}
      </span>
    </div>
  );
}

// THE constant CTA: classic solid ink fill, light label, lucide arrow.
// Square corners (4px). Same everywhere.
function Cta({
  label,
  onClick,
  full,
}: {
  label: string;
  onClick: () => void;
  full?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`ya-cta group inline-flex items-center justify-center gap-2.5 rounded-[4px] bg-[#26235A] px-7 py-4 text-[14px] font-medium tracking-wide text-[#F7F4FF] ${
        full ? "w-full" : ""
      }`}
    >
      {label}
      <ArrowRight className="ya-arrow" style={{ width: 17, height: 17 }} strokeWidth={2} />
    </button>
  );
}

export default function ScriptureDesign({ content, slug }: DesignProps) {
  const fd = useFakeDoor(slug);
  const { hero, problem, solution, pricing, testimonials, faq, fakedoor, footer } =
    content;

  // Reassurance line: split out the number for the CountUp.
  const reMatch = hero.reassuranceLine.match(/^(.*?)([\d.,]+)(.*)$/);

  // Drop-cap class — a large Fraunces float-left initial, like a chapter open.
  const dropCap =
    "[&:first-letter]:float-left [&:first-letter]:mr-3 [&:first-letter]:mt-1.5 " +
    "[&:first-letter]:font-[family-name:var(--font-fraunces)] [&:first-letter]:text-[58px] " +
    "[&:first-letter]:font-normal [&:first-letter]:leading-[0.78] [&:first-letter]:text-[#5A5690]";

  // Tiny serif wordmark — "You Alive ?" with a breath before the mark.
  const wordmark = (
    <span className="font-[family-name:var(--font-fraunces)] text-[15px] italic tracking-tight text-[#26235A]">
      {hero.brandLockup}
    </span>
  );

  // Chapter rule: thin full-width line, uppercase serif label left, italic
  // Fraunces roman numeral right. The recurring scripture device.
  const ChapterRule = ({ label, numeral }: { label: string; numeral: string }) => (
    <div className="flex items-baseline justify-between border-b border-[#26235A]/15 pb-2">
      <span className="font-[family-name:var(--font-fraunces)] text-[10px] uppercase tracking-[0.4em] text-[#5A5690]">
        {label}
      </span>
      <span className="font-[family-name:var(--font-fraunces)] text-[13px] italic text-[#5A5690]">
        {numeral}
      </span>
    </div>
  );

  // THE constant CTA: classic solid ink fill, light label, lucide arrow.
  // Square corners (4px). Same everywhere.
  const Cta = ({
    label,
    onClick,
    full,
  }: {
    label: string;
    onClick: () => void;
    full?: boolean;
  }) => (
    <button
      onClick={onClick}
      className={`ya-cta group inline-flex items-center justify-center gap-2.5 rounded-[4px] bg-[#26235A] px-7 py-4 text-[14px] font-medium tracking-wide text-[#F7F4FF] ${
        full ? "w-full" : ""
      }`}
    >
      {label}
      <ArrowRight className="ya-arrow" style={{ width: 17, height: 17 }} strokeWidth={2} />
    </button>
  );

  return (
    <main
      className={`${fraunces.variable} ${spectral.variable} font-[family-name:var(--font-spectral)] relative min-h-[100dvh] overflow-x-clip antialiased selection:bg-[#5A5690] selection:text-[#F7F4FF]`}
      style={{
        color: INK,
        // ONE continuous medium-strength lavender field (channels b-fd-06):
        // base + radial halos + a soft vertical linear. Reworked so the ghost
        // wordmark reads in the upper area (a brighter zone behind the hero).
        backgroundColor: "#F3ECFF",
        backgroundImage: [
          "radial-gradient(120% 70% at 50% 4%, #F7F4FF 0%, rgba(247,244,255,0) 46%)",
          "radial-gradient(120% 80% at 8% -6%, #EBE6FF 0%, rgba(235,230,255,0) 55%)",
          "radial-gradient(95% 70% at 105% 16%, #E4DCFF 0%, rgba(228,220,255,0) 52%)",
          "radial-gradient(120% 90% at 50% 118%, #EFEAFF 0%, rgba(239,234,255,0) 60%)",
          "linear-gradient(180deg, #F7F4FF 0%, #EFEAFF 60%, #F3ECFF 100%)",
        ].join(", "),
      }}
    >
      <style>{`
        .reveal { opacity: 0; transform: translateY(24px); filter: blur(6px);
          transition: opacity .85s cubic-bezier(.16,1,.3,1), transform .85s cubic-bezier(.16,1,.3,1), filter .85s cubic-bezier(.16,1,.3,1);
          will-change: transform, opacity; }
        .reveal[data-reveal="in"] { opacity: 1; transform: translateY(0); filter: blur(0); }
        @keyframes ya-rise { from { opacity: 0; transform: translateY(20px); filter: blur(7px); } to { opacity: 1; transform: translateY(0); filter: blur(0); } }
        .ya-stage > * { opacity: 0; animation: ya-rise 1s cubic-bezier(.16,1,.3,1) forwards; }
        .ya-cta { transition: transform .4s cubic-bezier(.16,1,.3,1), background-color .4s ease; }
        .ya-cta:hover { transform: translateY(-2px); background-color: #322e6e; }
        .ya-cta:active { transform: translateY(0) scale(.99); }
        .ya-arrow { transition: transform .4s cubic-bezier(.16,1,.3,1); }
        .ya-cta:hover .ya-arrow { transform: translateX(4px); }
        @media (prefers-reduced-motion: reduce) {
          .reveal { opacity: 1 !important; transform: none !important; filter: none !important; transition: none !important; }
          .ya-stage > * { animation: none !important; opacity: 1 !important; transform: none !important; }
          .ya-cta, .ya-cta:hover { transform: none !important; }
        }
      `}</style>

      <div className="relative z-10 mx-auto max-w-xl px-6 pb-32">
        {/* ───────── NAV / MASTHEAD ───────── */}
        <header className="flex items-center justify-between border-b border-[#26235A]/15 pb-3 pt-7">
          {wordmark}
          <span className="font-[family-name:var(--font-fraunces)] text-[9px] uppercase tracking-[0.42em] text-[#5A5690]">
            A quiet feature
          </span>
        </header>

        {/* ───────── HERO ───────── */}
        <section className="ya-stage relative pt-14 md:pt-20">
          {/* GIANT ghost "You Alive?" wordmark behind the H1 */}
          <p
            aria-hidden
            className="pointer-events-none absolute -top-2 left-1/2 -z-0 w-[140%] -translate-x-1/2 select-none text-center font-[family-name:var(--font-fraunces)] leading-[0.82] tracking-[-0.03em]"
            style={{
              color: LAV_PANEL,
              fontSize: "clamp(92px, 27vw, 168px)",
              fontVariationSettings: '"opsz" 144, "SOFT" 100, "WONK" 0',
              animationDelay: "0s",
            }}
          >
            You<br />Alive?
          </p>

          <div className="relative">
            <h1
              className="font-[family-name:var(--font-fraunces)] text-balance text-[42px] font-light leading-[1.04] tracking-[-0.015em] text-[#26235A] md:text-[48px]"
              style={{
                fontVariationSettings: '"opsz" 72, "SOFT" 40, "WONK" 0',
                animationDelay: "0.12s",
              }}
            >
              {hero.title}
            </h1>

            <p
              className="mt-6 max-w-[42ch] font-[family-name:var(--font-spectral)] text-[16px] font-light leading-[1.72] text-[#3d3a6e]"
              style={{ animationDelay: "0.28s" }}
            >
              {hero.subtitle}
            </p>

            <div className="mt-9" style={{ animationDelay: "0.42s" }}>
              <Cta label={hero.ctaLabel} onClick={() => fd.onCta("hero")} />
            </div>

            <p
              className="mt-7 flex items-center gap-2.5 font-[family-name:var(--font-spectral)] text-[12.5px] font-light italic text-[#5A5690]"
              style={{ animationDelay: "0.56s" }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#5A5690]" />
              <span>
                {reMatch ? (
                  <>
                    {reMatch[1]}
                    <CountUp end={parseInt(reMatch[2].replace(/[.,]/g, ""), 10)} />
                    {reMatch[3]}
                  </>
                ) : (
                  hero.reassuranceLine
                )}
              </span>
            </p>
          </div>
        </section>

        {/* ───────── PROBLEM (no card, drop-cap chapter open) ───────── */}
        <section className="mt-24">
          <Reveal>
            <ChapterRule label="The matter at hand" numeral="i" />
            <h2 className="mt-7 text-balance font-[family-name:var(--font-fraunces)] text-[28px] font-light leading-[1.18] tracking-[-0.01em] text-[#26235A]">
              {problem.title}
            </h2>
            <p
              className={`mt-6 font-[family-name:var(--font-spectral)] text-[16px] font-light leading-[1.8] text-[#3d3a6e] ${dropCap}`}
            >
              {problem.body}
            </p>
          </Reveal>
        </section>

        {/* ───────── METHOD (chapter numerals on a left border, no cards) ───────── */}
        <section className="mt-24">
          <Reveal>
            <ChapterRule label={solution.intro} numeral="ii" />
          </Reveal>

          <ol className="mt-10 space-y-11">
            {solution.steps.map((s, i) => (
              <Reveal as="li" key={i} delay={i * 90}>
                <div className="grid grid-cols-[auto_1fr] gap-x-5 border-l border-[#26235A]/12 pl-5">
                  <span className="font-[family-name:var(--font-fraunces)] text-[46px] font-light leading-none text-[#5A5690]/55">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="pt-1">
                    <h3
                      className={`font-[family-name:var(--font-fraunces)] text-[20px] font-normal leading-[1.28] tracking-[-0.005em] text-[#26235A] ${
                        i === 0 ? dropCap : ""
                      }`}
                    >
                      {s.title}
                    </h3>
                    <p className="mt-3 font-[family-name:var(--font-spectral)] text-[14.5px] font-light leading-[1.74] text-[#3d3a6e]">
                      {s.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </section>

        {/* ───────── PRICING (square cards + included card, allowed cards) ───────── */}
        <section ref={fd.pricingRef} className="mt-24">
          <Reveal>
            <ChapterRule label="Membership" numeral="iii" />
            <h2 className="mt-7 text-balance font-[family-name:var(--font-fraunces)] text-[27px] font-light leading-[1.18] tracking-[-0.01em] text-[#26235A]">
              {pricing.title}
            </h2>
            <p className="mt-5 max-w-[42ch] font-[family-name:var(--font-spectral)] text-[15px] font-light leading-[1.74] text-[#3d3a6e]">
              {pricing.subtitle}
            </p>
          </Reveal>

          <div className="mt-9 space-y-5">
            {pricing.plans.map((plan, i) => {
              const hi = !!plan.highlight;
              return (
                <Reveal key={i} delay={i * 90}>
                  <div
                    className="relative overflow-hidden rounded-[4px] px-6 py-7"
                    style={
                      hi
                        ? {
                            color: PAPER_LIGHT,
                            backgroundColor: INK,
                            backgroundImage:
                              "linear-gradient(150deg, #322e6e 0%, #26235A 55%, #211e4f 100%)",
                            boxShadow: "0 28px 60px -38px rgba(38,35,90,0.8)",
                          }
                        : {
                            color: INK,
                            border: "1px solid rgba(38,35,90,0.15)",
                            backgroundImage:
                              "linear-gradient(155deg, rgba(247,244,255,0.7) 0%, rgba(235,230,255,0.35) 100%)",
                          }
                    }
                  >
                    {hi && (
                      <span className="absolute right-5 top-6 font-[family-name:var(--font-fraunces)] text-[9px] uppercase tracking-[0.3em] text-[#bcb6e8]">
                        Editor&rsquo;s choice
                      </span>
                    )}
                    <p
                      className="font-[family-name:var(--font-fraunces)] text-[15px] italic"
                      style={{ color: hi ? "#bcb6e8" : SOFT }}
                    >
                      {plan.name}
                    </p>
                    <p className="mt-2 font-[family-name:var(--font-fraunces)] text-[38px] font-light leading-none tracking-[-0.01em]">
                      {plan.price}
                    </p>
                    <p
                      className="mt-3 font-[family-name:var(--font-spectral)] text-[13px] font-light"
                      style={{ color: hi ? "#cdc8ef" : SOFT }}
                    >
                      {plan.descriptor}
                    </p>
                    <div className="mt-6">
                      <Cta
                        label={plan.ctaLabel}
                        onClick={() => fd.onCta(`pricing-${plan.name.toLowerCase()}`)}
                        full
                      />
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Everything included — square card, two columns, scarcity inside. */}
          <Reveal className="mt-6">
            <div
              className="rounded-[4px] border border-[#26235A]/12 px-7 py-8"
              style={{ backgroundColor: LAV_INCLUDED }}
            >
              <p className="text-center font-[family-name:var(--font-fraunces)] text-[9px] uppercase tracking-[0.36em] text-[#5A5690]">
                Everything included
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-x-5 gap-y-3.5">
                {pricing.included.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-baseline gap-2.5 font-[family-name:var(--font-spectral)] text-[13.5px] font-light leading-[1.4] text-[#3d3a6e]"
                  >
                    <span className="font-[family-name:var(--font-fraunces)] text-[12px] italic text-[#5A5690]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="mt-7 border-t border-[#26235A]/12 pt-6 font-[family-name:var(--font-spectral)] text-[12.5px] font-light italic leading-[1.65] text-[#5A5690]">
                {pricing.scarcityLine}
              </p>
            </div>
          </Reveal>
        </section>

        {/* ───────── STORIES (pull-quotes, thin rules, no cards) ───────── */}
        <section className="mt-24">
          <Reveal>
            <ChapterRule label="Voices" numeral="iv" />
          </Reveal>
          <div className="mt-9">
            {testimonials.map((t, i) => (
              <Reveal as="figure" key={i} delay={i * 80}>
                <figure className={i > 0 ? "border-t border-[#26235A]/10 pt-9 mt-9" : ""}>
                  <blockquote className="font-[family-name:var(--font-fraunces)] text-[20px] font-light italic leading-[1.45] tracking-[-0.005em] text-[#26235A]">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-4 flex items-center gap-3 font-[family-name:var(--font-fraunces)] text-[10px] uppercase tracking-[0.26em] text-[#5A5690]">
                    <span className="h-px w-6 bg-[#5A5690]/50" />
                    {t.name}, {t.age}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ───────── FAQ (details, thin rules between, square, no card) ───────── */}
        <section className="mt-24">
          <Reveal>
            <ChapterRule label="Particulars" numeral="v" />
          </Reveal>
          <div className="mt-3">
            {faq.map((item, i) => (
              <Reveal key={i} delay={i * 70}>
                <details className="group border-b border-[#26235A]/12 py-5">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                    <span className="font-[family-name:var(--font-fraunces)] text-[17px] font-normal leading-[1.32] tracking-[-0.005em] text-[#26235A]">
                      {item.q}
                    </span>
                    <span className="mt-1 font-[family-name:var(--font-fraunces)] text-[20px] italic leading-none text-[#5A5690] transition-transform duration-300 group-open:rotate-90">
                      &rarr;
                    </span>
                  </summary>
                  <p className="mt-4 max-w-[46ch] font-[family-name:var(--font-spectral)] text-[14px] font-light leading-[1.74] text-[#3d3a6e]">
                    {item.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ───────── FINAL CTA (square ink panel, allowed card) ───────── */}
        <section className="mt-24">
          <Reveal>
            <div
              className="rounded-[4px] px-8 py-16 text-center"
              style={{
                color: PAPER_LIGHT,
                backgroundColor: INK,
                backgroundImage:
                  "linear-gradient(160deg, #322e6e 0%, #26235A 55%, #1f1c49 100%)",
                boxShadow: "0 30px 70px -44px rgba(38,35,90,0.7)",
              }}
            >
              <span className="font-[family-name:var(--font-fraunces)] text-[9px] uppercase tracking-[0.4em] text-[#bcb6e8]">
                Colophon
              </span>
              <h2 className="mx-auto mt-6 max-w-[16ch] text-balance font-[family-name:var(--font-fraunces)] text-[30px] font-light leading-[1.16] tracking-[-0.01em]">
                {content.finalCta.headline}
              </h2>
              <div className="mt-8 flex justify-center">
                <Cta label={content.finalCta.ctaLabel} onClick={() => fd.onCta("final")} />
              </div>
            </div>
          </Reveal>
        </section>

        {/* ───────── FAKE-DOOR (square form card, allowed card) ───────── */}
        {fd.showWaitlist && (
          <section
            id="waitlist"
            className="mt-12 rounded-[4px] border border-[#26235A]/15 px-7 py-10"
            style={{ backgroundColor: PAPER_LIGHT }}
          >
            {fd.state === "done" ? (
              <div className="text-center">
                <p className="font-[family-name:var(--font-fraunces)] text-[24px] font-light leading-tight text-[#26235A]">
                  {content.confirmation.title}
                </p>
                <p className="mx-auto mt-4 max-w-[36ch] font-[family-name:var(--font-spectral)] text-[14.5px] font-light leading-[1.7] text-[#3d3a6e]">
                  {content.confirmation.body}
                </p>
              </div>
            ) : (
              <>
                <p className="text-center font-[family-name:var(--font-fraunces)] text-[26px] font-light italic leading-[1.15] tracking-[-0.01em] text-[#26235A]">
                  {fakedoor.title}
                </p>
                <p className="mx-auto mt-4 max-w-[36ch] text-center font-[family-name:var(--font-spectral)] text-[14.5px] font-light leading-[1.7] text-[#3d3a6e]">
                  {fakedoor.body}
                </p>
                <form onSubmit={fd.submit} className="mt-7 flex flex-col gap-3">
                  <label htmlFor="ya-email" className="sr-only">
                    {fakedoor.emailPlaceholder}
                  </label>
                  <input
                    id="ya-email"
                    type="email"
                    required
                    value={fd.email}
                    onChange={(e) => fd.setEmail(e.target.value)}
                    placeholder={fakedoor.emailPlaceholder}
                    className="w-full rounded-[4px] border border-[#26235A]/20 bg-white/70 px-5 py-3.5 font-[family-name:var(--font-spectral)] text-[15px] text-[#26235A] placeholder:text-[#9590c4] focus:border-[#26235A] focus:outline-none"
                  />
                  <button
                    type="submit"
                    disabled={fd.state === "loading"}
                    className="ya-cta w-full rounded-[4px] bg-[#26235A] px-6 py-4 text-[14px] font-medium tracking-wide text-[#F7F4FF] disabled:opacity-60"
                  >
                    {fd.state === "loading" ? "Reserving…" : fakedoor.submitLabel}
                  </button>
                  {fd.state === "error" && (
                    <p className="text-center font-[family-name:var(--font-spectral)] text-[13px] text-[#993556]">
                      Something went wrong. Please try again.
                    </p>
                  )}
                </form>
                <p className="mt-5 text-center font-[family-name:var(--font-spectral)] text-[12px] font-light italic text-[#5A5690]">
                  {fakedoor.privacyLine}
                </p>
              </>
            )}
          </section>
        )}

        {/* ───────── FOOTER ───────── */}
        <footer className="mt-20 border-t border-[#26235A]/15 pt-7 text-center">
          <p className="mb-3">{wordmark}</p>
          <p className="font-[family-name:var(--font-fraunces)] text-[16px] font-light italic text-[#26235A]">
            {footer.lines[0]}
          </p>
          <p className="mt-4 font-[family-name:var(--font-fraunces)] text-[10px] uppercase tracking-[0.26em] text-[#5A5690]">
            {footer.lines.slice(1).join("  ·  ")}
          </p>
        </footer>
      </div>
    </main>
  );
}
