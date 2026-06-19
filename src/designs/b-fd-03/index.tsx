"use client";

import Image from "next/image";
import { Fraunces, Outfit } from "next/font/google";
import type { DesignProps } from "@/designs/types";
import { useFakeDoor } from "@/designs/shared/useFakeDoor";

// Direction: INTENSE COLOR + MOTION, kept tender. A luminous lavender→periwinkle
// world that breathes. A soft optical serif (Fraunces, with the "SOFT" + opsz
// axes dialed up for warmth) carries the contemplative voice; a clean geometric
// humanist sans (Outfit) handles the body. The accent is pushed to the brightest
// honest edge of the indigo family (#6F5BFF periwinkle) and used sparingly as
// light, not noise. Motion is CSS-only: a slowly drifting mesh aurora, staggered
// scroll-reveals, and gentle float/shimmer micro-interactions. Under
// prefers-reduced-motion every reveal resolves to its visible resting state.
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT", "WONK"],
  style: ["normal", "italic"],
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export default function LuminousMotionDesign({ content, slug }: DesignProps) {
  const fd = useFakeDoor(slug);
  const { hero, problem, solution, pricing, testimonials, faq, fakedoor, footer } = content;

  return (
    <main
      className={`${fraunces.variable} ${outfit.variable} font-[family-name:var(--font-outfit)] relative min-h-screen overflow-hidden bg-[#F2EEFF] text-[#26235A] antialiased selection:bg-[#6F5BFF] selection:text-[#F7F4FF]`}
    >
      {/* ───────── ATMOSPHERE: drifting mesh aurora ───────── */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F7F4FF] via-[#EBE6FF] to-[#D6E4FF]" />
        <div className="ya-aurora absolute -left-[20%] top-[-10%] h-[55vh] w-[80vw] rounded-full bg-[radial-gradient(circle_at_center,#C9B8FF_0%,transparent_70%)] opacity-80 blur-3xl" />
        <div className="ya-aurora-2 absolute right-[-25%] top-[18%] h-[60vh] w-[85vw] rounded-full bg-[radial-gradient(circle_at_center,#A9C6FF_0%,transparent_70%)] opacity-70 blur-3xl" />
        <div className="ya-aurora-3 absolute bottom-[-15%] left-[-10%] h-[55vh] w-[90vw] rounded-full bg-[radial-gradient(circle_at_center,#D9CCFF_0%,transparent_72%)] opacity-70 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-md px-6 pb-40">
        {/* ───────── NAV ───────── */}
        <header className="flex items-center justify-between pt-7">
          <span className="font-[family-name:var(--font-fraunces)] text-[18px] italic tracking-[-0.01em] text-[#26235A]">
            {hero.brandLockup}
          </span>
          <span className="rounded-full border border-[#5A5690]/25 bg-white/40 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-[#5A5690] backdrop-blur-sm">
            Legacy, kept softly
          </span>
        </header>

        {/* ───────── HERO ───────── */}
        <section className="ya-reveal pt-7">
          <div className="ya-float overflow-hidden rounded-[34px] shadow-[0_40px_90px_-45px_rgba(38,35,90,0.55)] ring-1 ring-white/50">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/designs/b/hero.jpeg"
                alt=""
                fill
                priority
                sizes="(max-width: 768px) 100vw, 450px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#26235A]/10 via-transparent to-transparent" />
            </div>
          </div>

          <h1
            className="ya-reveal ya-d1 mt-10 text-balance text-center font-[family-name:var(--font-fraunces)] text-[35px] leading-[1.06] tracking-[-0.015em] text-[#26235A]"
            style={{ fontVariationSettings: '"opsz" 144, "SOFT" 60, "wght" 460' }}
          >
            {hero.title}
          </h1>
          <p className="ya-reveal ya-d2 mx-auto mt-6 max-w-[33ch] text-center text-[16px] leading-[1.65] text-[#5A5690]">
            {hero.subtitle}
          </p>

          <div className="ya-reveal ya-d3 mt-9 flex flex-col items-center">
            <button
              onClick={() => fd.onCta("hero")}
              className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full bg-[#6F5BFF] px-9 py-4 text-[15px] font-medium text-[#F7F4FF] shadow-[0_22px_44px_-18px_rgba(111,91,255,0.85)] transition-transform duration-300 hover:-translate-y-[2px]"
            >
              <span className="ya-shine absolute inset-0" aria-hidden />
              <span className="relative">{hero.ctaLabel}</span>
              <span className="relative transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>

            <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/45 px-4 py-1.5 text-[12.5px] text-[#5A5690] ring-1 ring-white/60 backdrop-blur-sm">
              <span className="ya-pulse h-1.5 w-1.5 rounded-full bg-[#6F5BFF]" />
              {hero.reassuranceLine}
            </p>
          </div>
        </section>

        {/* ───────── PROBLEM ───────── */}
        <section className="ya-reveal mt-32 text-center">
          <p className="mb-6 text-[10px] uppercase tracking-[0.34em] text-[#8A7FD6]">
            The quiet problem
          </p>
          <h2
            className="mx-auto max-w-[20ch] text-balance font-[family-name:var(--font-fraunces)] text-[27px] leading-[1.18] tracking-[-0.01em] text-[#26235A]"
            style={{ fontVariationSettings: '"opsz" 72, "SOFT" 50, "wght" 440' }}
          >
            {problem.title}
          </h2>
          <p className="mx-auto mt-7 max-w-[34ch] text-[15.5px] leading-[1.7] text-[#5A5690]">
            {problem.body}
          </p>
        </section>

        {/* ───────── SOLUTION ───────── */}
        <section className="mt-32">
          <div className="ya-reveal text-center">
            <p className="mb-3 text-[10px] uppercase tracking-[0.34em] text-[#8A7FD6]">
              {solution.intro}
            </p>
            <p className="font-[family-name:var(--font-fraunces)] text-[16px] italic text-[#6F5BFF]">
              three gentle steps
            </p>
          </div>

          <ol className="mt-12 space-y-7">
            {solution.steps.map((s, i) => (
              <li
                key={i}
                className="ya-reveal group relative overflow-hidden rounded-[30px] bg-white/55 px-7 py-8 shadow-[0_24px_60px_-46px_rgba(38,35,90,0.65)] ring-1 ring-white/60 backdrop-blur-sm transition-transform duration-500 hover:-translate-y-1"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <span className="absolute right-6 top-6 font-[family-name:var(--font-fraunces)] text-[64px] leading-none text-[#6F5BFF]/10">
                  {i + 1}
                </span>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#6F5BFF] to-[#9C8BFF] font-[family-name:var(--font-fraunces)] text-[20px] italic text-[#F7F4FF] shadow-[0_10px_24px_-12px_rgba(111,91,255,0.9)]">
                  {i + 1}
                </span>
                <h3
                  className="relative mt-6 font-[family-name:var(--font-fraunces)] text-[20px] leading-[1.25] tracking-[-0.005em] text-[#26235A]"
                  style={{ fontVariationSettings: '"opsz" 48, "SOFT" 50, "wght" 460' }}
                >
                  {s.title}
                </h3>
                <p className="mt-3 text-[14.5px] leading-[1.65] text-[#5A5690]">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* ───────── PRICING ───────── */}
        <section ref={fd.pricingRef} className="ya-reveal mt-32 text-center">
          <p className="mb-5 text-[10px] uppercase tracking-[0.34em] text-[#8A7FD6]">
            Membership
          </p>
          <h2
            className="mx-auto max-w-[20ch] text-balance font-[family-name:var(--font-fraunces)] text-[26px] leading-[1.18] tracking-[-0.01em] text-[#26235A]"
            style={{ fontVariationSettings: '"opsz" 72, "SOFT" 50, "wght" 440' }}
          >
            {pricing.title}
          </h2>
          <p className="mx-auto mt-5 max-w-[34ch] text-[15px] leading-[1.65] text-[#5A5690]">
            {pricing.subtitle}
          </p>

          <div className="mt-10 space-y-5">
            {pricing.plans.map((plan, i) => (
              <div
                key={i}
                className={
                  plan.highlight
                    ? "ya-reveal relative overflow-hidden rounded-[30px] bg-gradient-to-br from-[#5A47E6] via-[#6F5BFF] to-[#8C7BFF] px-7 py-9 text-left text-[#F7F4FF] shadow-[0_34px_70px_-32px_rgba(111,91,255,0.9)]"
                    : "ya-reveal relative rounded-[30px] bg-white/55 px-7 py-9 text-left text-[#26235A] ring-1 ring-white/60 backdrop-blur-sm"
                }
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                {plan.highlight && (
                  <>
                    <span className="ya-shine absolute inset-0" aria-hidden />
                    <span className="relative -mt-1 mb-3 inline-block rounded-full bg-white/20 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-[#F7F4FF]">
                      Most chosen
                    </span>
                  </>
                )}
                <p
                  className={`relative font-[family-name:var(--font-fraunces)] text-[15px] italic ${
                    plan.highlight ? "text-[#E5DEFF]" : "text-[#5A5690]"
                  }`}
                >
                  {plan.name}
                </p>
                <p
                  className="relative mt-1 font-[family-name:var(--font-fraunces)] text-[40px] leading-none tracking-[-0.01em]"
                  style={{ fontVariationSettings: '"opsz" 144, "SOFT" 40, "wght" 500' }}
                >
                  {plan.price}
                </p>
                <p
                  className={`relative mt-3 text-[13px] ${
                    plan.highlight ? "text-[#E5DEFF]" : "text-[#8A7FD6]"
                  }`}
                >
                  {plan.descriptor}
                </p>
                <button
                  onClick={() => fd.onCta(`pricing-${plan.name.toLowerCase()}`)}
                  className={
                    plan.highlight
                      ? "relative mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#F7F4FF] px-7 py-3.5 text-[15px] font-medium text-[#5A47E6] transition-transform duration-300 hover:-translate-y-[2px]"
                      : "relative mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#6F5BFF] px-7 py-3.5 text-[15px] font-medium text-[#F7F4FF] transition-transform duration-300 hover:-translate-y-[2px]"
                  }
                >
                  {plan.ctaLabel}
                  <span>→</span>
                </button>
              </div>
            ))}
          </div>

          <div className="ya-reveal mt-10 rounded-[30px] bg-white/45 px-7 py-8 text-left ring-1 ring-white/60 backdrop-blur-sm">
            <p className="text-center text-[10px] uppercase tracking-[0.3em] text-[#8A7FD6]">
              Everything included
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-y-3.5">
              {pricing.included.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-[14.5px] text-[#3F3A78]">
                  <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gradient-to-br from-[#6F5BFF] to-[#9C8BFF] text-[11px] text-[#F7F4FF]">
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <p className="mx-auto mt-7 max-w-[34ch] text-[12.5px] leading-[1.6] text-[#5A5690]">
            {pricing.scarcityLine}
          </p>
        </section>

        {/* ───────── TESTIMONIALS ───────── */}
        <section className="mt-32">
          <p className="ya-reveal mb-8 text-center text-[10px] uppercase tracking-[0.34em] text-[#8A7FD6]">
            From those who started
          </p>
          <div className="space-y-6">
            {testimonials.map((t, i) => (
              <figure
                key={i}
                className="ya-reveal rounded-[30px] bg-white/55 px-7 py-8 ring-1 ring-white/60 backdrop-blur-sm"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <span
                  aria-hidden
                  className="block font-[family-name:var(--font-fraunces)] text-[48px] leading-none text-[#6F5BFF]/40"
                >
                  &ldquo;
                </span>
                <blockquote
                  className="-mt-3 font-[family-name:var(--font-fraunces)] text-[18.5px] leading-[1.5] tracking-[-0.005em] text-[#26235A]"
                  style={{ fontVariationSettings: '"opsz" 48, "SOFT" 50, "wght" 440' }}
                >
                  {t.quote}
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] text-[#5A5690]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#6F5BFF]" />
                  {t.name} · {t.age}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ───────── FAQ ───────── */}
        <section className="mt-32">
          <p className="ya-reveal mb-8 text-center text-[10px] uppercase tracking-[0.34em] text-[#8A7FD6]">
            Questions you might have
          </p>
          <div className="space-y-4">
            {faq.map((item, i) => (
              <details
                key={i}
                className="ya-reveal group rounded-[26px] bg-white/55 px-7 py-5 ring-1 ring-white/60 backdrop-blur-sm open:bg-white/70"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                  <span
                    className="font-[family-name:var(--font-fraunces)] text-[17px] leading-[1.3] tracking-[-0.005em] text-[#26235A]"
                    style={{ fontVariationSettings: '"opsz" 36, "SOFT" 50, "wght" 460' }}
                  >
                    {item.q}
                  </span>
                  <span className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-full bg-gradient-to-br from-[#6F5BFF] to-[#9C8BFF] text-[18px] leading-none text-[#F7F4FF] transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-[14px] leading-[1.65] text-[#5A5690]">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* ───────── FINAL CTA ───────── */}
        <section className="ya-reveal relative mt-32 overflow-hidden rounded-[36px] bg-gradient-to-br from-[#5A47E6] via-[#6F5BFF] to-[#8C7BFF] px-8 py-14 text-center text-[#F7F4FF] shadow-[0_40px_80px_-36px_rgba(111,91,255,0.9)]">
          <span className="ya-shine absolute inset-0" aria-hidden />
          <h2
            className="relative mx-auto max-w-[16ch] text-balance font-[family-name:var(--font-fraunces)] text-[31px] leading-[1.1] tracking-[-0.01em]"
            style={{ fontVariationSettings: '"opsz" 144, "SOFT" 50, "wght" 480' }}
          >
            {content.finalCta.headline}
          </h2>
          <button
            onClick={() => fd.onCta("final")}
            className="relative mt-9 inline-flex items-center justify-center gap-2.5 rounded-full bg-[#F7F4FF] px-9 py-4 text-[15px] font-medium text-[#5A47E6] transition-transform duration-300 hover:-translate-y-[2px]"
          >
            {content.finalCta.ctaLabel}
            <span>→</span>
          </button>
        </section>

        {/* ───────── FAKE-DOOR ───────── */}
        {fd.showWaitlist && (
          <section
            id="waitlist"
            className="mt-12 rounded-[36px] bg-white/65 px-7 py-10 ring-1 ring-white/70 backdrop-blur-md"
          >
            {fd.state === "done" ? (
              <div className="text-center">
                <p
                  className="font-[family-name:var(--font-fraunces)] text-[25px] leading-tight text-[#26235A]"
                  style={{ fontVariationSettings: '"opsz" 72, "SOFT" 50, "wght" 460' }}
                >
                  {content.confirmation.title}
                </p>
                <p className="mx-auto mt-4 max-w-[34ch] text-[14.5px] leading-[1.65] text-[#5A5690]">
                  {content.confirmation.body}
                </p>
              </div>
            ) : (
              <>
                <p
                  className="text-center font-[family-name:var(--font-fraunces)] text-[27px] italic leading-[1.15] tracking-[-0.01em] text-[#26235A]"
                  style={{ fontVariationSettings: '"opsz" 72, "SOFT" 50, "wght" 460' }}
                >
                  {fakedoor.title}
                </p>
                <p className="mx-auto mt-4 max-w-[34ch] text-center text-[14.5px] leading-[1.65] text-[#5A5690]">
                  {fakedoor.body}
                </p>
                <form onSubmit={fd.submit} className="mt-7 flex flex-col gap-3">
                  <input
                    type="email"
                    required
                    value={fd.email}
                    onChange={(e) => fd.setEmail(e.target.value)}
                    placeholder={fakedoor.emailPlaceholder}
                    className="w-full rounded-full border border-[#5A5690]/25 bg-[#F7F4FF] px-6 py-4 text-[15px] text-[#26235A] placeholder:text-[#8A7FD6] focus:border-[#6F5BFF] focus:outline-none focus:ring-2 focus:ring-[#6F5BFF]/30"
                  />
                  <button
                    type="submit"
                    disabled={fd.state === "loading"}
                    className="w-full rounded-full bg-[#6F5BFF] px-6 py-4 text-[15px] font-medium text-[#F7F4FF] shadow-[0_18px_40px_-18px_rgba(111,91,255,0.85)] transition-transform duration-300 hover:-translate-y-[1px] disabled:translate-y-0 disabled:opacity-60"
                  >
                    {fd.state === "loading" ? "…" : fakedoor.submitLabel}
                  </button>
                  {fd.state === "error" && (
                    <p className="text-center text-[13px] text-[#6F5BFF]">
                      Something went wrong. Try again.
                    </p>
                  )}
                </form>
                <p className="mt-5 text-center text-[12px] text-[#8A7FD6]">
                  {fakedoor.privacyLine}
                </p>
              </>
            )}
          </section>
        )}

        {/* ───────── FOOTER ───────── */}
        <footer className="mt-24 text-center">
          <p
            className="font-[family-name:var(--font-fraunces)] text-[16px] italic text-[#26235A]"
            style={{ fontVariationSettings: '"opsz" 48, "SOFT" 50' }}
          >
            {footer.lines[0]}
          </p>
          <p className="mt-4 text-[11px] uppercase tracking-[0.24em] text-[#8A7FD6]">
            {footer.lines.slice(1).join("  ·  ")}
          </p>
        </footer>
      </div>

      {/* ───────── STICKY CTA ───────── */}
      <div className="fixed inset-x-0 bottom-0 z-40 px-6 pb-5">
        <button
          onClick={() => fd.onCta("sticky")}
          className="mx-auto flex w-full max-w-md items-center justify-center gap-2 rounded-full bg-[#6F5BFF] px-6 py-4 text-[15px] font-medium text-[#F7F4FF] shadow-[0_22px_50px_-18px_rgba(111,91,255,0.95)] ring-1 ring-white/30 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-[1px]"
        >
          {hero.ctaLabel}
          <span>→</span>
        </button>
      </div>

      {/* ───────── MOTION (CSS-only, reduced-motion safe) ───────── */}
      <style>{`
        @keyframes yaDrift {
          0%   { transform: translate3d(0, 0, 0) scale(1); }
          50%  { transform: translate3d(6%, 4%, 0) scale(1.12); }
          100% { transform: translate3d(0, 0, 0) scale(1); }
        }
        @keyframes yaDrift2 {
          0%   { transform: translate3d(0, 0, 0) scale(1.05); }
          50%  { transform: translate3d(-7%, 5%, 0) scale(1); }
          100% { transform: translate3d(0, 0, 0) scale(1.05); }
        }
        @keyframes yaDrift3 {
          0%   { transform: translate3d(0, 0, 0) scale(1); }
          50%  { transform: translate3d(5%, -4%, 0) scale(1.1); }
          100% { transform: translate3d(0, 0, 0) scale(1); }
        }
        .ya-aurora   { animation: yaDrift  22s ease-in-out infinite; }
        .ya-aurora-2 { animation: yaDrift2 27s ease-in-out infinite; }
        .ya-aurora-3 { animation: yaDrift3 31s ease-in-out infinite; }

        @keyframes yaFloat {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-8px); }
        }
        .ya-float { animation: yaFloat 7s ease-in-out infinite; }

        @keyframes yaPulse {
          0%, 100% { transform: scale(1);   opacity: 1; }
          50%      { transform: scale(1.7); opacity: 0.55; }
        }
        .ya-pulse { animation: yaPulse 2.4s ease-in-out infinite; }

        @keyframes yaShine {
          0%   { transform: translateX(-120%) skewX(-18deg); }
          60%, 100% { transform: translateX(220%) skewX(-18deg); }
        }
        .ya-shine {
          background: linear-gradient(100deg, transparent 20%, rgba(255,255,255,0.45) 50%, transparent 80%);
          animation: yaShine 5.5s ease-in-out infinite;
        }

        /* Scroll-reveal: start lifted+faded, resolve when in view. */
        .ya-reveal {
          opacity: 0;
          transform: translateY(26px);
          animation: yaRevealIn 0.9s cubic-bezier(0.22, 0.61, 0.36, 1) both;
          animation-timeline: view();
          animation-range: entry 0% cover 32%;
        }
        @keyframes yaRevealIn {
          to { opacity: 1; transform: translateY(0); }
        }
        .ya-d1 { animation-delay: 0.06s; }
        .ya-d2 { animation-delay: 0.12s; }
        .ya-d3 { animation-delay: 0.18s; }

        /* Browsers without scroll-driven animations: reveal immediately on load. */
        @supports not (animation-timeline: view()) {
          .ya-reveal { animation-timeline: auto; animation-range: normal; }
        }

        @media (prefers-reduced-motion: reduce) {
          .ya-aurora, .ya-aurora-2, .ya-aurora-3,
          .ya-float, .ya-pulse, .ya-shine {
            animation: none !important;
          }
          .ya-reveal {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </main>
  );
}
