"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Spectral, Mona_Sans } from "next/font/google";
import type { DesignProps } from "@/designs/types";
import { useFakeDoor } from "@/designs/shared/useFakeDoor";

// Direction: VERY AIRY + VERY ROUNDED, light and calm — but composed with an
// asymmetric, left-aligned editorial rhythm (rather than the fully-centered
// reference). Spectral, a gentle literary serif, carries the contemplative
// voice; Mona Sans, a rounded humanist grotesk, carries body and UI. One
// terracotta accent, locked. Full-radius pills + soft rounded surfaces,
// generous whitespace, near-zero ornament. Motion is CSS-only, Intersection
// Observer reveals, fully disabled under prefers-reduced-motion.
const serif = Spectral({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const sans = Mona_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export default function AiryRoundedEditorial({ content, slug }: DesignProps) {
  const fd = useFakeDoor(slug);
  const { hero, problem, solution, pricing, testimonials, faq, fakedoor, footer } =
    content;

  // Quiet scroll reveals. CSS does the animating; JS only toggles a class once
  // per element, and only when motion is allowed.
  const rootRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const els = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (reduce) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.18 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <main
      ref={rootRef}
      className={`${serif.variable} ${sans.variable} font-[family-name:var(--font-sans)] relative min-h-screen bg-[#F7F3EA] text-[#1F2A22] antialiased selection:bg-[#B5754E] selection:text-[#F7F3EA]`}
    >
      <style>{`
        [data-reveal]{opacity:0;transform:translateY(14px);transition:opacity .7s cubic-bezier(.16,1,.3,1),transform .7s cubic-bezier(.16,1,.3,1)}
        [data-reveal].is-in{opacity:1;transform:none}
        @media (prefers-reduced-motion: reduce){[data-reveal]{opacity:1;transform:none;transition:none}}
      `}</style>

      <div className="relative mx-auto max-w-md px-6 pb-40">
        {/* ───────── BRAND STRIP ───────── */}
        <header className="flex items-center justify-between pt-7">
          <span className="font-[family-name:var(--font-serif)] text-[18px] italic text-[#1F2A22]">
            {hero.brandLockup}
          </span>
          <span className="h-2 w-2 rounded-full bg-[#B5754E]" aria-hidden />
        </header>

        {/* ───────── HERO (asymmetric: photo, then left-set title) ───────── */}
        <section className="pt-8" data-reveal>
          <div className="overflow-hidden rounded-[40px] shadow-[0_36px_80px_-50px_rgba(31,42,34,0.5)]">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/designs/a/hero.jpeg"
                alt=""
                fill
                priority
                sizes="(max-width: 768px) 100vw, 448px"
                className="object-cover"
              />
            </div>
          </div>

          <h1
            className="mt-11 max-w-[15ch] text-balance font-[family-name:var(--font-serif)] text-[36px] font-light leading-[1.06] tracking-[-0.015em] text-[#1F2A22]"
          >
            {hero.title}
          </h1>
          <p className="mt-6 max-w-[36ch] text-[16px] leading-[1.65] text-[#4a5a4f]">
            {hero.subtitle}
          </p>

          <button
            onClick={() => fd.onCta("hero")}
            className="group mt-9 inline-flex items-center justify-center gap-2.5 rounded-full bg-[#1F2A22] px-9 py-4 text-[15px] font-medium text-[#F7F3EA] transition-transform duration-300 hover:-translate-y-[2px] active:scale-[0.98]"
          >
            {hero.ctaLabel}
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </button>

          <p className="mt-7 inline-flex items-center gap-2.5 rounded-full bg-white/55 px-4 py-2 text-[12.5px] text-[#6a7a6f] ring-1 ring-[#1F2A22]/[0.05]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#B5754E]" />
            {hero.reassuranceLine}
          </p>
        </section>

        {/* ───────── PROBLEM (eyebrow #1 of the page) ───────── */}
        <section className="mt-32" data-reveal>
          <p className="mb-6 text-[10px] uppercase tracking-[0.32em] text-[#a08a6d]">
            The quiet problem
          </p>
          <h2 className="max-w-[22ch] text-balance font-[family-name:var(--font-serif)] text-[27px] font-light leading-[1.2] tracking-[-0.01em] text-[#1F2A22]">
            {problem.title}
          </h2>
          <p className="mt-7 max-w-[40ch] text-[15.5px] leading-[1.72] text-[#4a5a4f]">
            {problem.body}
          </p>
        </section>

        {/* ───────── SOLUTION (timeline spine, no eyebrow) ───────── */}
        <section className="mt-32" data-reveal>
          <h2 className="font-[family-name:var(--font-serif)] text-[27px] font-light leading-[1.18] tracking-[-0.01em] text-[#1F2A22]">
            {solution.intro}
          </h2>

          <ol className="relative mt-12 space-y-12 before:absolute before:left-[19px] before:top-3 before:bottom-3 before:w-px before:bg-[#1F2A22]/10">
            {solution.steps.map((s, i) => (
              <li key={i} className="relative pl-16">
                <span className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-[#F7F3EA] font-[family-name:var(--font-serif)] text-[18px] italic text-[#B5754E] ring-1 ring-[#B5754E]/25">
                  {i + 1}
                </span>
                <h3 className="font-[family-name:var(--font-serif)] text-[20px] font-normal leading-[1.28] tracking-[-0.005em] text-[#1F2A22]">
                  {s.title}
                </h3>
                <p className="mt-3 max-w-[40ch] text-[14.5px] leading-[1.68] text-[#4a5a4f]">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* ───────── PRICING (no eyebrow) ───────── */}
        <section ref={fd.pricingRef} className="mt-32" data-reveal>
          <h2 className="max-w-[20ch] text-balance font-[family-name:var(--font-serif)] text-[27px] font-light leading-[1.18] tracking-[-0.01em] text-[#1F2A22]">
            {pricing.title}
          </h2>
          <p className="mt-5 max-w-[40ch] text-[15px] leading-[1.68] text-[#4a5a4f]">
            {pricing.subtitle}
          </p>

          <div className="mt-10 space-y-5">
            {pricing.plans.map((plan, i) => (
              <div
                key={i}
                className={
                  plan.highlight
                    ? "relative rounded-[32px] bg-[#1F2A22] px-7 py-8 text-[#F7F3EA] shadow-[0_30px_64px_-40px_rgba(31,42,34,0.75)]"
                    : "relative rounded-[32px] bg-white/55 px-7 py-8 text-[#1F2A22] ring-1 ring-[#1F2A22]/[0.06]"
                }
              >
                <div className="flex items-baseline justify-between gap-4">
                  <p
                    className={`font-[family-name:var(--font-serif)] text-[15px] italic ${
                      plan.highlight ? "text-[#cdbb98]" : "text-[#6a7a6f]"
                    }`}
                  >
                    {plan.name}
                  </p>
                  {plan.highlight && (
                    <span className="rounded-full bg-[#B5754E] px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-[#F7F3EA]">
                      Most chosen
                    </span>
                  )}
                </div>
                <p className="mt-3 font-[family-name:var(--font-serif)] text-[40px] font-light leading-none tracking-[-0.01em]">
                  {plan.price}
                </p>
                <p
                  className={`mt-3 text-[13px] ${
                    plan.highlight ? "text-[#cdbb98]" : "text-[#6a7a6f]"
                  }`}
                >
                  {plan.descriptor}
                </p>
                <button
                  onClick={() => fd.onCta(`pricing-${plan.name.toLowerCase()}`)}
                  className={
                    plan.highlight
                      ? "mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#F7F3EA] px-7 py-3.5 text-[15px] font-medium text-[#1F2A22] transition hover:bg-white active:scale-[0.98]"
                      : "mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1F2A22] px-7 py-3.5 text-[15px] font-medium text-[#F7F3EA] transition hover:bg-[#26342b] active:scale-[0.98]"
                  }
                >
                  {plan.ctaLabel}
                  <span>→</span>
                </button>
              </div>
            ))}
          </div>

          <div className="mt-9 rounded-[32px] bg-white/45 px-7 py-8 ring-1 ring-[#1F2A22]/[0.05]">
            <p className="font-[family-name:var(--font-serif)] text-[16px] italic text-[#6a7a6f]">
              Everything included
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-x-5 gap-y-4">
              {pricing.included.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-[13.5px] leading-[1.4] text-[#3a4a3f]"
                >
                  <span className="mt-0.5 flex h-4 w-4 flex-none items-center justify-center rounded-full bg-[#B5754E]/15 text-[10px] text-[#B5754E]">
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-7 max-w-[40ch] text-[12.5px] leading-[1.6] text-[#6a7a6f]">
            {pricing.scarcityLine}
          </p>
        </section>

        {/* ───────── TESTIMONIALS (no eyebrow) ───────── */}
        <section className="mt-32 space-y-6" data-reveal>
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="rounded-[32px] bg-white/55 px-7 py-8 ring-1 ring-[#1F2A22]/[0.05]"
            >
              <blockquote className="font-[family-name:var(--font-serif)] text-[18.5px] font-light italic leading-[1.5] tracking-[-0.005em] text-[#1F2A22]">
                {t.quote}
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-2.5 text-[12px] uppercase tracking-[0.16em] text-[#6a7a6f]">
                <span className="h-px w-6 bg-[#B5754E]/50" aria-hidden />
                {t.name} · {t.age}
              </figcaption>
            </figure>
          ))}
        </section>

        {/* ───────── FAQ (eyebrow #2 of the page) ───────── */}
        <section className="mt-32" data-reveal>
          <p className="mb-7 text-[10px] uppercase tracking-[0.32em] text-[#a08a6d]">
            Questions you might have
          </p>
          <div className="divide-y divide-[#1F2A22]/[0.08] border-y border-[#1F2A22]/[0.08]">
            {faq.map((item, i) => (
              <details key={i} className="group py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                  <span className="font-[family-name:var(--font-serif)] text-[17px] font-normal leading-[1.3] tracking-[-0.005em] text-[#1F2A22]">
                    {item.q}
                  </span>
                  <span className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-full bg-[#B5754E]/12 text-[18px] leading-none text-[#B5754E] transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-[40ch] text-[14px] leading-[1.68] text-[#4a5a4f]">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* ───────── FINAL CTA ───────── */}
        <section
          className="mt-32 rounded-[40px] bg-[#1F2A22] px-8 py-16 text-center text-[#F7F3EA]"
          data-reveal
        >
          <h2 className="mx-auto max-w-[16ch] text-balance font-[family-name:var(--font-serif)] text-[30px] font-light leading-[1.12] tracking-[-0.01em]">
            {content.finalCta.headline}
          </h2>
          <button
            onClick={() => fd.onCta("final")}
            className="mt-9 inline-flex items-center justify-center gap-2.5 rounded-full bg-[#F7F3EA] px-9 py-4 text-[15px] font-medium text-[#1F2A22] transition hover:bg-white active:scale-[0.98]"
          >
            {content.finalCta.ctaLabel}
            <span>→</span>
          </button>
        </section>

        {/* ───────── FAKE-DOOR ───────── */}
        {fd.showWaitlist && (
          <section
            id="waitlist"
            className="mt-12 rounded-[40px] bg-white/60 px-7 py-11 ring-1 ring-[#1F2A22]/[0.06]"
          >
            {fd.state === "done" ? (
              <div>
                <p className="font-[family-name:var(--font-serif)] text-[25px] font-light leading-tight text-[#1F2A22]">
                  {content.confirmation.title}
                </p>
                <p className="mt-4 max-w-[38ch] text-[14.5px] leading-[1.68] text-[#4a5a4f]">
                  {content.confirmation.body}
                </p>
              </div>
            ) : (
              <>
                <p className="font-[family-name:var(--font-serif)] text-[26px] font-light italic leading-[1.15] tracking-[-0.01em] text-[#1F2A22]">
                  {fakedoor.title}
                </p>
                <p className="mt-4 max-w-[38ch] text-[14.5px] leading-[1.68] text-[#4a5a4f]">
                  {fakedoor.body}
                </p>
                <form onSubmit={fd.submit} className="mt-7 flex flex-col gap-3">
                  <input
                    type="email"
                    required
                    value={fd.email}
                    onChange={(e) => fd.setEmail(e.target.value)}
                    placeholder={fakedoor.emailPlaceholder}
                    className="w-full rounded-full border border-[#1F2A22]/15 bg-[#F7F3EA] px-6 py-4 text-[15px] text-[#1F2A22] placeholder:text-[#8a9489] focus:border-[#1F2A22] focus:outline-none"
                  />
                  <button
                    type="submit"
                    disabled={fd.state === "loading"}
                    className="w-full rounded-full bg-[#1F2A22] px-6 py-4 text-[15px] font-medium text-[#F7F3EA] transition active:scale-[0.98] disabled:opacity-60"
                  >
                    {fd.state === "loading" ? "..." : fakedoor.submitLabel}
                  </button>
                  {fd.state === "error" && (
                    <p className="text-[13px] text-[#B5754E]">
                      Something went wrong. Try again.
                    </p>
                  )}
                </form>
                <p className="mt-5 text-[12px] text-[#6a7a6f]">
                  {fakedoor.privacyLine}
                </p>
              </>
            )}
          </section>
        )}

        {/* ───────── FOOTER ───────── */}
        <footer className="mt-24">
          <p className="font-[family-name:var(--font-serif)] text-[16px] italic text-[#1F2A22]">
            {footer.lines[0]}
          </p>
          <p className="mt-4 text-[11px] uppercase tracking-[0.22em] text-[#9c8a6d]">
            {footer.lines.slice(1).join("  ·  ")}
          </p>
        </footer>
      </div>

      {/* Sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 px-6 pb-5">
        <button
          onClick={() => fd.onCta("sticky")}
          className="mx-auto flex w-full max-w-md items-center justify-center gap-2 rounded-full bg-[#1F2A22] px-6 py-4 text-[15px] font-medium text-[#F7F3EA] shadow-[0_20px_44px_-20px_rgba(31,42,34,0.85)] active:scale-[0.98]"
        >
          {hero.ctaLabel}
          <span>→</span>
        </button>
      </div>
    </main>
  );
}
