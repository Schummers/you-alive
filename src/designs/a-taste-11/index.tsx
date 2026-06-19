"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Fraunces, Hanken_Grotesk } from "next/font/google";
import type { DesignProps } from "@/designs/types";
import { useFakeDoor } from "@/designs/shared/useFakeDoor";

// AXIS: intense color + motion. Variant A brand family (editorial / nature):
// contemplative, tender, serious. Terracotta pushed to the top of its family as
// the single locked accent, washing over cream + deep forest. Motion is high and
// CSS-only (no Motion/GSAP available): a ken-burns + terracotta-wash hero
// entrance, scroll-reveals via IntersectionObserver, and CTA hover physics.
// Every motion collapses to static under prefers-reduced-motion.
//
// Fraunces (variable display) carries the heritage / manuscript voice a legacy
// product earns; Hanken Grotesk keeps the body clean and humane.
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT", "WONK"],
  style: ["normal", "italic"],
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

// Small scroll-reveal primitive: fades + lifts a block when it enters view,
// once. Static (fully visible) immediately under reduced motion or before mount.
function Reveal({
  children,
  className = "",
  delay = 0,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "figure";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const el = ref.current;
    if (reduce || !el) {
      const id = requestAnimationFrame(() => setShown(true));
      return () => cancelAnimationFrame(id);
    }
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShown(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const Tag = as as "div";
  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement>}
      style={{ transitionDelay: `${delay}ms` }}
      className={`${className} transition-[opacity,transform,filter] duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${
        shown
          ? "translate-y-0 opacity-100 blur-0"
          : "translate-y-8 opacity-0 blur-[6px] motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:blur-0"
      }`}
    >
      {children}
    </Tag>
  );
}

export default function TasteEditorialMotion({ content, slug }: DesignProps) {
  const fd = useFakeDoor(slug);
  const { hero, problem, solution, pricing, testimonials, faq, fakedoor, footer } =
    content;

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <main
      className={`${fraunces.variable} ${hanken.variable} font-[family-name:var(--font-hanken)] relative min-h-[100dvh] bg-[#F4EFE6] text-[#1F2A22] antialiased selection:bg-[#B5754E] selection:text-[#F4EFE6]`}
    >
      <style>{`
        @keyframes kenburns {
          0%   { transform: scale(1.08) translateY(0); }
          100% { transform: scale(1.16) translateY(-2%); }
        }
        @keyframes washIn {
          0%   { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes riseIn {
          0%   { opacity: 0; transform: translateY(26px); filter: blur(8px); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .kb, .wash, .rise { animation: none !important; }
          .rise { opacity: 1 !important; transform: none !important; filter: none !important; }
          .wash { opacity: 1 !important; }
        }
      `}</style>

      <div className="relative mx-auto max-w-md px-6 pb-32">
        {/* ───────── HERO ───────── */}
        <header className="pt-6">
          <div className="flex items-center justify-between px-1">
            <span className="font-[family-name:var(--font-fraunces)] text-[18px] italic text-[#1F2A22]">
              {hero.brandLockup}
            </span>
            <span className="h-2 w-2 rounded-full bg-[#B5754E]" aria-hidden />
          </div>

          {/* Ken-burns photo with terracotta wash + forest scrim for legibility */}
          <div className="relative mt-6 overflow-hidden rounded-[32px] shadow-[0_40px_90px_-50px_rgba(31,42,34,0.7)]">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/designs/a/hero-clean.jpeg"
                alt="Feet resting in a hammock under pine trees, a coastal town and a clouded sky in the distance."
                fill
                priority
                sizes="(max-width: 768px) 100vw, 448px"
                className={`kb object-cover ${
                  mounted ? "" : "scale-[1.08]"
                }`}
                style={
                  mounted
                    ? {
                        animation:
                          "kenburns 22s ease-out forwards",
                      }
                    : undefined
                }
              />
            </div>
            {/* terracotta duotone wash, locked accent */}
            <div
              className="wash pointer-events-none absolute inset-0 mix-blend-multiply"
              style={{
                background:
                  "linear-gradient(180deg, rgba(181,117,78,0.18) 0%, rgba(181,117,78,0.05) 38%, rgba(31,42,34,0.78) 100%)",
                animation: mounted ? "washIn 1400ms ease-out forwards" : undefined,
                opacity: mounted ? undefined : 0,
              }}
              aria-hidden
            />
            {/* hero copy laid over the photo's dark base */}
            <div className="absolute inset-x-0 bottom-0 p-6">
              <h1
                className="rise text-balance font-[family-name:var(--font-fraunces)] text-[34px] leading-[1.06] tracking-[-0.01em] text-[#F4EFE6]"
                style={{
                  fontVariationSettings: '"opsz" 80, "SOFT" 40',
                  animation: mounted
                    ? "riseIn 900ms cubic-bezier(0.16,1,0.3,1) 200ms both"
                    : undefined,
                  opacity: mounted ? undefined : 0,
                }}
              >
                {hero.title}
              </h1>
            </div>
          </div>

          <section className="px-1 pt-8">
            <p className="max-w-[34ch] text-[16px] leading-[1.65] text-[#43524a]">
              {hero.subtitle}
            </p>

            <button
              onClick={() => fd.onCta("hero")}
              className="group mt-8 flex w-full items-center justify-between gap-3 rounded-full bg-[#B5754E] py-3 pl-7 pr-3 text-left text-[16px] font-medium text-[#F4EFE6] shadow-[0_22px_50px_-24px_rgba(181,117,78,0.9)] transition-[transform,box-shadow,background-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[2px] hover:bg-[#a9683f] hover:shadow-[0_30px_60px_-22px_rgba(181,117,78,0.95)] active:scale-[0.98] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              {hero.ctaLabel}
              <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[#F4EFE6]/20 text-[#F4EFE6] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 group-hover:-translate-y-[1px] motion-reduce:transition-none motion-reduce:group-hover:translate-x-0">
                →
              </span>
            </button>

            <p className="mt-5 flex items-center gap-2.5 text-[13px] text-[#6a7a6f]">
              <span className="h-1.5 w-1.5 flex-none rounded-full bg-[#B5754E]" />
              {hero.reassuranceLine}
            </p>
          </section>
        </header>

        {/* ───────── PROBLEM ───────── */}
        <Reveal as="section" className="mt-28">
          <h2
            className="text-balance font-[family-name:var(--font-fraunces)] text-[28px] leading-[1.16] tracking-[-0.01em] text-[#1F2A22]"
            style={{ fontVariationSettings: '"opsz" 60, "SOFT" 30' }}
          >
            {problem.title}
          </h2>
          <p className="mt-6 max-w-[36ch] text-[15.5px] leading-[1.7] text-[#43524a]">
            {problem.body}
          </p>
        </Reveal>

        {/* ───────── SOLUTION ───────── */}
        <section className="mt-28">
          <Reveal>
            <p className="font-[family-name:var(--font-fraunces)] text-[15px] italic text-[#B5754E]">
              {solution.intro}
            </p>
          </Reveal>

          <ol className="mt-9 space-y-6">
            {solution.steps.map((s, i) => (
              <Reveal as="li" key={i} delay={i * 90}>
                <div className="relative overflow-hidden rounded-[28px] bg-[#1F2A22] px-7 py-8 text-[#F4EFE6]">
                  {/* terracotta hairline accent running down the card edge */}
                  <span
                    className="absolute inset-y-0 left-0 w-[3px] bg-[#B5754E]"
                    aria-hidden
                  />
                  <span
                    className="font-[family-name:var(--font-fraunces)] text-[40px] italic leading-none text-[#B5754E]"
                    style={{ fontVariationSettings: '"opsz" 72, "WONK" 1' }}
                  >
                    {i + 1}
                  </span>
                  <h3
                    className="mt-5 font-[family-name:var(--font-fraunces)] text-[20px] leading-[1.28] tracking-[-0.005em] text-[#F4EFE6]"
                    style={{ fontVariationSettings: '"opsz" 36, "SOFT" 40' }}
                  >
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-[1.65] text-[#cdd6cf]">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </section>

        {/* ───────── PRICING ───────── */}
        <section ref={fd.pricingRef} className="mt-28">
          <Reveal>
            <h2
              className="text-balance font-[family-name:var(--font-fraunces)] text-[27px] leading-[1.16] tracking-[-0.01em] text-[#1F2A22]"
              style={{ fontVariationSettings: '"opsz" 60, "SOFT" 30' }}
            >
              {pricing.title}
            </h2>
            <p className="mt-5 max-w-[36ch] text-[15px] leading-[1.65] text-[#43524a]">
              {pricing.subtitle}
            </p>
          </Reveal>

          <div className="mt-9 space-y-5">
            {pricing.plans.map((plan, i) => (
              <Reveal key={i} delay={i * 90}>
                <div
                  className={
                    plan.highlight
                      ? "relative rounded-[28px] bg-[#B5754E] px-7 py-8 text-[#F4EFE6] shadow-[0_30px_64px_-32px_rgba(181,117,78,0.85)]"
                      : "relative rounded-[28px] border border-[#1F2A22]/12 bg-white/45 px-7 py-8 text-[#1F2A22]"
                  }
                >
                  {plan.highlight && (
                    <span className="absolute -top-3 left-7 rounded-full bg-[#1F2A22] px-4 py-1 text-[10px] uppercase tracking-[0.2em] text-[#F4EFE6]">
                      Most chosen
                    </span>
                  )}
                  <p
                    className={`font-[family-name:var(--font-fraunces)] text-[15px] italic ${
                      plan.highlight ? "text-[#F4EFE6]/85" : "text-[#6a7a6f]"
                    }`}
                  >
                    {plan.name}
                  </p>
                  <p
                    className="mt-2 font-[family-name:var(--font-fraunces)] text-[36px] leading-none tracking-[-0.01em]"
                    style={{ fontVariationSettings: '"opsz" 72, "SOFT" 20' }}
                  >
                    {plan.price}
                  </p>
                  <p
                    className={`mt-3 text-[13px] ${
                      plan.highlight ? "text-[#F4EFE6]/85" : "text-[#6a7a6f]"
                    }`}
                  >
                    {plan.descriptor}
                  </p>
                  <button
                    onClick={() => fd.onCta(`pricing-${plan.name.toLowerCase()}`)}
                    className={
                      plan.highlight
                        ? "group mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-[#F4EFE6] px-7 py-3.5 text-[15px] font-medium text-[#1F2A22] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[2px] active:scale-[0.98] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                        : "group mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-[#1F2A22] px-7 py-3.5 text-[15px] font-medium text-[#F4EFE6] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[2px] active:scale-[0.98] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                    }
                  >
                    {plan.ctaLabel}
                    <span className="transition-transform duration-300 group-hover:translate-x-0.5 motion-reduce:transition-none">
                      →
                    </span>
                  </button>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-9 rounded-[28px] border border-[#1F2A22]/10 bg-white/40 px-7 py-8">
            <ul className="grid grid-cols-1 gap-y-3.5">
              {pricing.included.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-[14.5px] text-[#324036]"
                >
                  <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[#B5754E]/15 text-[11px] text-[#B5754E]">
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </Reveal>

          <p className="mt-6 max-w-[36ch] text-[12.5px] leading-[1.6] text-[#6a7a6f]">
            {pricing.scarcityLine}
          </p>
        </section>

        {/* ───────── TESTIMONIALS ───────── */}
        <section className="mt-28 space-y-6">
          {testimonials.map((t, i) => (
            <Reveal as="figure" key={i} delay={i * 90}>
              <figure className="rounded-[28px] border border-[#1F2A22]/10 bg-white/45 px-7 py-8">
                <span
                  aria-hidden
                  className="block font-[family-name:var(--font-fraunces)] text-[46px] leading-none text-[#B5754E]/55"
                  style={{ fontVariationSettings: '"opsz" 72' }}
                >
                  &ldquo;
                </span>
                <blockquote
                  className="mt-1 font-[family-name:var(--font-fraunces)] text-[18px] leading-[1.5] tracking-[-0.005em] text-[#1F2A22]"
                  style={{ fontVariationSettings: '"opsz" 32, "SOFT" 30' }}
                >
                  {t.quote}
                </blockquote>
                <figcaption className="mt-5 text-[12px] uppercase tracking-[0.18em] text-[#6a7a6f]">
                  {t.name}, {t.age}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </section>

        {/* ───────── FAQ ───────── */}
        <section className="mt-28 space-y-4">
          {faq.map((item, i) => (
            <Reveal key={i} delay={i * 60}>
              <details className="group rounded-[24px] border border-[#1F2A22]/10 bg-white/45 px-7 py-5 open:bg-white/65">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                  <span
                    className="font-[family-name:var(--font-fraunces)] text-[17px] leading-[1.3] tracking-[-0.005em] text-[#1F2A22]"
                    style={{ fontVariationSettings: '"opsz" 32, "SOFT" 30' }}
                  >
                    {item.q}
                  </span>
                  <span className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-full bg-[#B5754E]/12 text-[18px] leading-none text-[#B5754E] transition-transform duration-300 group-open:rotate-45 motion-reduce:transition-none">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-[14px] leading-[1.65] text-[#43524a]">
                  {item.a}
                </p>
              </details>
            </Reveal>
          ))}
        </section>

        {/* ───────── FINAL CTA ───────── */}
        <Reveal
          as="section"
          className="mt-28 overflow-hidden rounded-[32px] bg-[#1F2A22] px-8 py-14 text-center text-[#F4EFE6]"
        >
          <h2
            className="mx-auto max-w-[16ch] text-balance font-[family-name:var(--font-fraunces)] text-[30px] leading-[1.12] tracking-[-0.01em]"
            style={{ fontVariationSettings: '"opsz" 72, "SOFT" 40' }}
          >
            {content.finalCta.headline}
          </h2>
          <button
            onClick={() => fd.onCta("final")}
            className="group mt-9 inline-flex items-center justify-center gap-2.5 rounded-full bg-[#B5754E] px-9 py-4 text-[15px] font-medium text-[#F4EFE6] shadow-[0_22px_50px_-24px_rgba(181,117,78,0.9)] transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[2px] hover:bg-[#a9683f] active:scale-[0.98] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
          >
            {content.finalCta.ctaLabel}
            <span className="transition-transform duration-300 group-hover:translate-x-0.5 motion-reduce:transition-none">
              →
            </span>
          </button>
        </Reveal>

        {/* ───────── FAKE-DOOR ───────── */}
        {fd.showWaitlist && (
          <section
            id="waitlist"
            className="mt-12 rounded-[32px] border border-[#1F2A22]/12 bg-white/55 px-7 py-10"
          >
            {fd.state === "done" ? (
              <div className="text-center">
                <p
                  className="font-[family-name:var(--font-fraunces)] text-[24px] leading-tight text-[#1F2A22]"
                  style={{ fontVariationSettings: '"opsz" 48, "SOFT" 40' }}
                >
                  {content.confirmation.title}
                </p>
                <p className="mx-auto mt-4 max-w-[34ch] text-[14.5px] leading-[1.65] text-[#43524a]">
                  {content.confirmation.body}
                </p>
              </div>
            ) : (
              <>
                <p
                  className="text-center font-[family-name:var(--font-fraunces)] text-[26px] italic leading-[1.15] tracking-[-0.01em] text-[#1F2A22]"
                  style={{ fontVariationSettings: '"opsz" 48, "SOFT" 40' }}
                >
                  {fakedoor.title}
                </p>
                <p className="mx-auto mt-4 max-w-[34ch] text-center text-[14.5px] leading-[1.65] text-[#43524a]">
                  {fakedoor.body}
                </p>
                <form onSubmit={fd.submit} className="mt-7 flex flex-col gap-3">
                  <input
                    type="email"
                    required
                    value={fd.email}
                    onChange={(e) => fd.setEmail(e.target.value)}
                    placeholder={fakedoor.emailPlaceholder}
                    className="w-full rounded-full border border-[#1F2A22]/20 bg-[#F4EFE6] px-6 py-4 text-[15px] text-[#1F2A22] placeholder:text-[#8a7a64] focus:border-[#B5754E] focus:outline-none focus:ring-2 focus:ring-[#B5754E]/30"
                  />
                  <button
                    type="submit"
                    disabled={fd.state === "loading"}
                    className="w-full rounded-full bg-[#B5754E] px-6 py-4 text-[15px] font-medium text-[#F4EFE6] transition-transform duration-300 hover:-translate-y-[2px] active:scale-[0.98] disabled:opacity-60 disabled:hover:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                  >
                    {fd.state === "loading" ? "..." : fakedoor.submitLabel}
                  </button>
                  {fd.state === "error" && (
                    <p className="text-center text-[13px] text-[#B5754E]">
                      Something went wrong. Try again.
                    </p>
                  )}
                </form>
                <p className="mt-5 text-center text-[12px] text-[#6a7a6f]">
                  {fakedoor.privacyLine}
                </p>
              </>
            )}
          </section>
        )}

        {/* ───────── FOOTER ───────── */}
        <footer className="mt-24 text-center">
          <p
            className="font-[family-name:var(--font-fraunces)] text-[16px] italic text-[#1F2A22]"
            style={{ fontVariationSettings: '"opsz" 36, "SOFT" 40' }}
          >
            {footer.lines[0]}
          </p>
          <p className="mt-4 text-[11px] uppercase tracking-[0.24em] text-[#8a7a64]">
            {footer.lines.slice(1).join("   ·   ")}
          </p>
        </footer>
      </div>

      {/* Sticky CTA */}
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 px-6 pb-5">
        <button
          onClick={() => fd.onCta("sticky")}
          className="group pointer-events-auto mx-auto flex w-full max-w-md items-center justify-between gap-2 rounded-full bg-[#1F2A22] py-3 pl-7 pr-3 text-left text-[15px] font-medium text-[#F4EFE6] shadow-[0_22px_50px_-22px_rgba(31,42,34,0.9)] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-[2px] active:scale-[0.98] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
        >
          {hero.ctaLabel}
          <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-[#B5754E] text-[#F4EFE6] transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0">
            →
          </span>
        </button>
      </div>
    </main>
  );
}
