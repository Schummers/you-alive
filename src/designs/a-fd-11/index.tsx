"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Bricolage_Grotesque, Newsreader } from "next/font/google";
import type { DesignProps } from "@/designs/types";
import { useFakeDoor } from "@/designs/shared/useFakeDoor";

// Iteration #11 — INTENSE COLOR + HIGH MOTION.
// The brand family pushed to its richest, most confident notch: a deep forest
// canvas, a saturated terracotta that carries the whole page, cream as light.
// Orchestrated page-load with staggered reveals, scroll-triggered section
// entrances (IntersectionObserver), and restrained hover micro-interactions.
// Display: Bricolage Grotesque (characterful grotesque, opsz axis).
// Pulls: Newsreader italic for the tender, lyrical voice. Dignified, not flashy.
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  axes: ["opsz"],
  display: "swap",
});
const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  style: ["italic"],
  display: "swap",
});

// Small scroll-reveal wrapper — adds a class once the element enters view.
function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
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
      { threshold: 0.18 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        shown ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function IntenseMotionDesign({ content, slug }: DesignProps) {
  const fd = useFakeDoor(slug);
  const { hero, problem, solution, pricing, testimonials, faq, fakedoor, footer } = content;

  return (
    <main
      className={`${bricolage.variable} ${newsreader.variable} relative min-h-screen overflow-hidden bg-[#1A241C] text-[#F4EFE6] selection:bg-[#B5754E] selection:text-[#1A241C]`}
      style={{ fontFamily: "var(--font-geist-sans), ui-sans-serif" }}
    >
      <style>{`
        @keyframes yaUp {
          from { opacity: 0; transform: translateY(26px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes yaGlow {
          0%, 100% { opacity: 0.55; transform: scale(1); }
          50% { opacity: 0.85; transform: scale(1.08); }
        }
        @keyframes yaSheen {
          0% { transform: translateX(-130%) skewX(-18deg); }
          100% { transform: translateX(130%) skewX(-18deg); }
        }
        .ya-load { opacity: 0; animation: yaUp 0.85s cubic-bezier(0.16,1,0.3,1) forwards; }
        @media (prefers-reduced-motion: reduce) {
          .ya-load { animation: none; opacity: 1; }
        }
      `}</style>

      {/* Grain overlay */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.07] mix-blend-soft-light"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative mx-auto max-w-md px-5 pb-32">
        {/* ───────── HERO ───────── */}
        <header className="-mx-5">
          <div className="relative h-[80vh] min-h-[580px] w-full overflow-hidden">
            <Image
              src="/designs/a/hero.jpeg"
              alt=""
              fill
              priority
              sizes="(max-width: 768px) 100vw, 450px"
              className="object-cover"
            />
            {/* Saturated terracotta + forest wash for intense color */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#B5754E]/10 via-[#1A241C]/30 to-[#1A241C]" />
            <div className="absolute inset-0 bg-[#B5754E] opacity-[0.12] mix-blend-overlay" />

            {/* Masthead */}
            <div className="absolute inset-x-0 top-0 px-5 pt-7">
              <div className="ya-load flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-[#F4EFE6]/85" style={{ animationDelay: "60ms" }}>
                <span className="font-[family-name:var(--font-newsreader)] text-[14px] italic tracking-normal text-[#F4EFE6]">
                  You Alive
                </span>
                <span className="text-[#E8B68C]">vol. XI</span>
              </div>
            </div>

            {/* Subtitle anchored bottom (no duplicate H1 — baked in photo) */}
            <div className="absolute inset-x-0 bottom-0 px-5 pb-9">
              <div
                aria-hidden
                className="ya-load mb-4 h-[3px] w-16 rounded-full bg-[#B5754E]"
                style={{ animationDelay: "180ms" }}
              />
              <p
                className="ya-load max-w-[30ch] text-[18px] leading-[1.45] text-[#F4EFE6]/95"
                style={{ animationDelay: "260ms" }}
              >
                {hero.subtitle}
              </p>
            </div>
          </div>

          {/* CTA on the deep canvas */}
          <section className="px-5 pt-8">
            <button
              onClick={() => fd.onCta("hero")}
              className="ya-load group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-[#B5754E] px-7 py-[18px] text-[16px] font-semibold text-[#1A241C] shadow-[0_20px_50px_-20px_rgba(181,117,78,0.9)] transition-transform duration-300 hover:-translate-y-[2px] active:translate-y-0"
              style={{ animationDelay: "360ms" }}
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-[#F4EFE6]/40 opacity-0 group-hover:opacity-100"
                style={{ animation: "yaSheen 0.9s ease forwards" }}
              />
              <span className="relative">{hero.ctaLabel}</span>
              <span className="relative text-lg transition-transform group-hover:translate-x-1">→</span>
            </button>

            <p
              className="ya-load mt-5 flex items-center gap-2 text-[12.5px] tracking-wide text-[#E8B68C]"
              style={{ animationDelay: "440ms" }}
            >
              <span className="inline-block h-[1px] w-6 bg-[#B5754E]" />
              {hero.reassuranceLine}
            </p>
          </section>
        </header>

        {/* ───────── PROBLEM ───────── */}
        <Reveal className="mt-24">
          <p className="mb-5 text-[10px] uppercase tracking-[0.34em] text-[#B5754E]">
            The problem
          </p>
          <h2
            className="text-balance font-[family-name:var(--font-bricolage)] text-[31px] font-semibold leading-[1.04] tracking-[-0.02em] text-[#F4EFE6]"
            style={{ fontVariationSettings: '"opsz" 36' }}
          >
            {problem.title}
          </h2>
          <p className="mt-6 text-[15.5px] leading-[1.6] text-[#F4EFE6]/75">
            {problem.body}
          </p>
        </Reveal>

        {/* ───────── SOLUTION ───────── */}
        <section className="mt-24">
          <Reveal>
            <div className="flex items-baseline justify-between">
              <p className="text-[10px] uppercase tracking-[0.34em] text-[#B5754E]">
                How it works
              </p>
              <p className="font-[family-name:var(--font-newsreader)] text-[13px] italic text-[#E8B68C]">
                three quiet steps
              </p>
            </div>
            <h2
              className="mt-3 font-[family-name:var(--font-bricolage)] text-[30px] font-semibold leading-[1.05] tracking-[-0.02em] text-[#F4EFE6]"
              style={{ fontVariationSettings: '"opsz" 36' }}
            >
              {solution.intro}
            </h2>
          </Reveal>

          <ol className="mt-10 space-y-4">
            {solution.steps.map((s, i) => (
              <Reveal key={i} delay={i * 120}>
                <li className="group grid grid-cols-[auto_1fr] gap-5 rounded-2xl border border-[#F4EFE6]/10 bg-[#22302610] p-5 transition-colors duration-300 hover:border-[#B5754E]/60 hover:bg-[#B5754E]/[0.08]">
                  <div className="pt-1">
                    <span
                      className="block font-[family-name:var(--font-bricolage)] text-[44px] font-bold leading-none text-[#B5754E] transition-transform duration-300 group-hover:-translate-y-0.5"
                      style={{ fontVariationSettings: '"opsz" 48' }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <h3
                      className="font-[family-name:var(--font-bricolage)] text-[19px] font-semibold leading-[1.22] tracking-[-0.01em] text-[#F4EFE6]"
                      style={{ fontVariationSettings: '"opsz" 18' }}
                    >
                      {s.title}
                    </h3>
                    <p className="mt-2.5 text-[14.5px] leading-[1.58] text-[#F4EFE6]/70">
                      {s.body}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </section>

        {/* ───────── PRICING ───────── */}
        <section ref={fd.pricingRef} className="mt-24">
          <Reveal>
            <p className="mb-5 text-[10px] uppercase tracking-[0.34em] text-[#B5754E]">
              Membership
            </p>
            <h2
              className="text-balance font-[family-name:var(--font-bricolage)] text-[29px] font-semibold leading-[1.08] tracking-[-0.02em] text-[#F4EFE6]"
              style={{ fontVariationSettings: '"opsz" 36' }}
            >
              {pricing.title}
            </h2>
            <p className="mt-4 text-[15px] leading-[1.55] text-[#F4EFE6]/75">
              {pricing.subtitle}
            </p>
          </Reveal>

          <div className="mt-8 space-y-4">
            {pricing.plans.map((plan, i) => (
              <Reveal key={i} delay={i * 110}>
                <div
                  className={`group relative overflow-hidden rounded-[24px] p-6 transition-transform duration-300 hover:-translate-y-[2px] ${
                    plan.highlight
                      ? "bg-[#B5754E] text-[#1A241C] shadow-[0_24px_60px_-26px_rgba(181,117,78,0.95)]"
                      : "border border-[#F4EFE6]/15 bg-[#22302630] text-[#F4EFE6]"
                  }`}
                >
                  {plan.highlight && (
                    <div
                      aria-hidden
                      className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#F4EFE6]/25 blur-2xl"
                      style={{ animation: "yaGlow 5s ease-in-out infinite" }}
                    />
                  )}
                  <div className="relative flex items-baseline justify-between">
                    <span className="font-[family-name:var(--font-bricolage)] text-[18px] font-semibold" style={{ fontVariationSettings: '"opsz" 18' }}>
                      {plan.name}
                    </span>
                    {plan.highlight && (
                      <span className="rounded-full bg-[#1A241C] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#E8B68C]">
                        Popular
                      </span>
                    )}
                  </div>
                  <p
                    className="relative mt-3 font-[family-name:var(--font-bricolage)] text-[40px] font-bold leading-none tracking-[-0.02em]"
                    style={{ fontVariationSettings: '"opsz" 48' }}
                  >
                    {plan.price}
                  </p>
                  <p
                    className={`relative mt-2 text-[13px] ${
                      plan.highlight ? "text-[#1A241C]/75" : "text-[#E8B68C]"
                    }`}
                  >
                    {plan.descriptor}
                  </p>
                  <button
                    onClick={() => fd.onCta(`pricing-${plan.name.toLowerCase()}`)}
                    className={`relative mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-semibold transition-transform duration-300 hover:translate-x-0 active:scale-[0.99] ${
                      plan.highlight
                        ? "bg-[#1A241C] text-[#F4EFE6] hover:bg-[#22302C]"
                        : "bg-[#B5754E] text-[#1A241C] hover:brightness-105"
                    }`}
                  >
                    {plan.ctaLabel}
                    <span className="text-base transition-transform group-hover:translate-x-0.5">→</span>
                  </button>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-8">
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3 rounded-[24px] border border-[#F4EFE6]/12 bg-[#22302620] p-6">
              {pricing.included.map((feat, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-[13.5px] leading-[1.35] text-[#F4EFE6]/85"
                >
                  <span className="mt-[3px] text-[#B5754E]">✦</span>
                  {feat}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-center text-[12px] text-[#E8B68C]">
              {pricing.scarcityLine}
            </p>
          </Reveal>
        </section>

        {/* ───────── TESTIMONIALS ───────── */}
        <section className="mt-24">
          <Reveal>
            <p className="mb-5 text-[10px] uppercase tracking-[0.34em] text-[#B5754E]">
              From those who started
            </p>
          </Reveal>
          <div className="space-y-9">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 110}>
                <figure className="relative rounded-2xl border border-[#F4EFE6]/10 bg-[#22302620] p-6">
                  <span
                    aria-hidden
                    className="absolute -top-4 left-4 font-[family-name:var(--font-newsreader)] text-[60px] italic leading-none text-[#B5754E]/60"
                  >
                    &ldquo;
                  </span>
                  <blockquote
                    className="relative font-[family-name:var(--font-newsreader)] text-[19px] italic leading-[1.45] text-[#F4EFE6]"
                  >
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-4 text-[12px] uppercase tracking-[0.18em] text-[#E8B68C]">
                    {t.name} · {t.age}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ───────── FAQ ───────── */}
        <section className="mt-24">
          <Reveal>
            <p className="mb-5 text-[10px] uppercase tracking-[0.34em] text-[#B5754E]">
              Questions you might have
            </p>
          </Reveal>
          <Reveal>
            <div className="divide-y divide-[#F4EFE6]/12">
              {faq.map((item, i) => (
                <details key={i} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                    <span
                      className="font-[family-name:var(--font-bricolage)] text-[16.5px] font-medium leading-[1.3] text-[#F4EFE6]"
                      style={{ fontVariationSettings: '"opsz" 18' }}
                    >
                      {item.q}
                    </span>
                    <span className="mt-0.5 select-none font-[family-name:var(--font-bricolage)] text-[24px] leading-none text-[#B5754E] transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 max-w-[40ch] text-[14px] leading-[1.6] text-[#F4EFE6]/70">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </Reveal>
        </section>

        {/* ───────── FINAL CTA ───────── */}
        <Reveal className="mt-24">
          <div className="relative overflow-hidden rounded-[28px] bg-[#B5754E] px-7 py-12 text-center text-[#1A241C]">
            <div
              aria-hidden
              className="absolute -left-12 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-[#F4EFE6]/25 blur-3xl"
              style={{ animation: "yaGlow 6s ease-in-out infinite" }}
            />
            <h2
              className="relative text-balance font-[family-name:var(--font-bricolage)] text-[32px] font-bold leading-[1.05] tracking-[-0.02em]"
              style={{ fontVariationSettings: '"opsz" 36' }}
            >
              {content.finalCta.headline}
            </h2>
            <button
              onClick={() => fd.onCta("final")}
              className="group relative mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#1A241C] px-7 py-[18px] text-[16px] font-semibold text-[#F4EFE6] transition-transform duration-300 hover:-translate-y-[2px]"
            >
              {content.finalCta.ctaLabel}
              <span className="text-lg transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>
        </Reveal>

        {/* ───────── FAKE-DOOR ───────── */}
        {fd.showWaitlist && (
          <section
            id="waitlist"
            className="mt-24 rounded-[28px] border border-[#B5754E]/40 bg-[#223026] px-6 py-9"
          >
            {fd.state === "done" ? (
              <div className="text-center">
                <p className="font-[family-name:var(--font-bricolage)] text-[24px] font-semibold leading-tight text-[#F4EFE6]" style={{ fontVariationSettings: '"opsz" 24' }}>
                  {content.confirmation.title}
                </p>
                <p className="mt-3 text-[14.5px] leading-[1.6] text-[#F4EFE6]/75">
                  {content.confirmation.body}
                </p>
              </div>
            ) : (
              <>
                <p className="font-[family-name:var(--font-newsreader)] text-[27px] italic leading-[1.1] text-[#F4EFE6]">
                  {fakedoor.title}
                </p>
                <p className="mt-3 text-[14.5px] leading-[1.6] text-[#F4EFE6]/75">
                  {fakedoor.body}
                </p>
                <form onSubmit={fd.submit} className="mt-6 flex flex-col gap-3">
                  <input
                    type="email"
                    required
                    value={fd.email}
                    onChange={(e) => fd.setEmail(e.target.value)}
                    placeholder={fakedoor.emailPlaceholder}
                    className="w-full rounded-full border border-[#F4EFE6]/20 bg-[#1A241C] px-5 py-3.5 text-[15px] text-[#F4EFE6] placeholder:text-[#F4EFE6]/40 focus:border-[#B5754E] focus:outline-none"
                  />
                  <button
                    type="submit"
                    disabled={fd.state === "loading"}
                    className="w-full rounded-full bg-[#B5754E] px-6 py-3.5 text-[15px] font-semibold text-[#1A241C] transition hover:brightness-105 disabled:opacity-60"
                  >
                    {fd.state === "loading" ? "..." : fakedoor.submitLabel}
                  </button>
                  {fd.state === "error" && (
                    <p className="text-[13px] text-[#E8B68C]">
                      Something went wrong. Try again.
                    </p>
                  )}
                </form>
                <p className="mt-4 text-center text-[12px] text-[#E8B68C]">
                  {fakedoor.privacyLine}
                </p>
              </>
            )}
          </section>
        )}

        {/* ───────── FOOTER ───────── */}
        <footer className="mt-20 border-t border-[#F4EFE6]/12 pt-8 text-center">
          <p className="font-[family-name:var(--font-newsreader)] text-[15px] italic text-[#F4EFE6]">
            {footer.lines[0]}
          </p>
          <p className="mt-3 text-[11px] uppercase tracking-[0.26em] text-[#B5754E]">
            {footer.lines.slice(1).join(" · ")}
          </p>
        </footer>
      </div>

      {/* Sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#F4EFE6]/10 bg-[#1A241C]/85 px-5 py-3 backdrop-blur-md">
        <button
          onClick={() => fd.onCta("sticky")}
          className="group mx-auto flex w-full max-w-md items-center justify-center gap-2 rounded-full bg-[#B5754E] px-6 py-3.5 text-[15px] font-semibold text-[#1A241C] transition-transform duration-300 hover:-translate-y-[1px]"
        >
          {hero.ctaLabel}
          <span className="text-base transition-transform group-hover:translate-x-0.5">→</span>
        </button>
      </div>
    </main>
  );
}
