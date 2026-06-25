"use client";

import Image from "next/image";
import { Fraunces, Manrope } from "next/font/google";
import type { DesignProps } from "@/designs/types";
import { useFakeDoor } from "@/designs/shared/useFakeDoor";

// Direction: TYPOGRAPHY-DRIVEN. An oversized soft serif (Fraunces, with optical
// sizing + the SOFT axis turned up for tenderness) dominates every section at
// dramatic scale, while the body shrinks to a quiet whisper in Manrope. The
// hero photo is demoted to a small framed fragment — type carries the emotion.
// Palette: ink/indigo on a soft lavender→periwinkle mesh, soothing and luminous.
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT", "WONK"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

// Shared eyebrow label: tiny, wide-tracked, soft indigo.
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] font-medium uppercase tracking-[0.42em] text-[#8C88BE]">
      {children}
    </p>
  );
}

export default function TypographyDrivenDesign({ content, slug }: DesignProps) {
  const fd = useFakeDoor(slug);
  const { hero, problem, solution, pricing, testimonials, faq, fakedoor, footer } =
    content;

  return (
    <main
      className={`${fraunces.variable} ${manrope.variable} font-[family-name:var(--font-manrope)] relative min-h-screen overflow-hidden bg-[#F3ECFF] text-[#26235A] antialiased selection:bg-[#26235A] selection:text-[#F7F4FF]`}
    >
      {/* ───────── ATMOSPHERIC MESH BACKGROUND ───────── */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(120% 80% at 12% 8%, #EBE6FF 0%, transparent 55%)," +
            "radial-gradient(110% 70% at 92% 20%, #D6E4FF 0%, transparent 50%)," +
            "radial-gradient(120% 90% at 50% 105%, #F3ECFF 0%, transparent 60%)," +
            "linear-gradient(180deg, #F7F4FF 0%, #EBE6FF 45%, #F3ECFF 100%)",
        }}
      />
      {/* faint grain for atmosphere */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 opacity-[0.04] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative mx-auto max-w-md px-6 pb-40">
        {/* ───────── NAV ───────── */}
        <header className="flex items-center justify-between pt-7">
          <span className="font-[family-name:var(--font-fraunces)] text-[18px] italic tracking-[-0.01em] text-[#26235A]">
            {hero.brandLockup}
          </span>
          <span className="rounded-full border border-[#26235A]/12 px-3 py-1 text-[9px] uppercase tracking-[0.28em] text-[#5A5690]">
            Legacy, gently kept
          </span>
        </header>

        {/* ───────── HERO ───────── */}
        <section className="pt-16">
          <Eyebrow>A quiet act of love</Eyebrow>
          <h1
            className="mt-6 text-balance font-[family-name:var(--font-fraunces)] text-[64px] font-light leading-[0.94] tracking-[-0.03em] text-[#26235A]"
            style={{ fontVariationSettings: '"opsz" 144, "SOFT" 60, "WONK" 0' }}
          >
            {hero.title}
          </h1>

          {/* photo demoted to a small framed fragment, type leads */}
          <div className="mt-10 flex items-end gap-5">
            <div className="relative h-32 w-28 flex-none overflow-hidden rounded-[20px] shadow-[0_22px_50px_-30px_rgba(38,35,90,0.55)] ring-1 ring-white/50">
              <Image
                src="/designs/b/hero.jpeg"
                alt=""
                fill
                priority
                sizes="120px"
                className="object-cover"
              />
            </div>
            <p className="pb-1 text-[14.5px] leading-[1.6] text-[#5A5690]">
              {hero.subtitle}
            </p>
          </div>

          <button
            onClick={() => fd.onCta("hero")}
            className="group mt-10 inline-flex items-center justify-center gap-2.5 rounded-full bg-[#26235A] px-9 py-4 text-[15px] font-medium text-[#F7F4FF] transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-[0_24px_46px_-22px_rgba(38,35,90,0.8)]"
          >
            {hero.ctaLabel}
            <span className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </button>

          <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/45 px-4 py-1.5 text-[12.5px] text-[#5A5690] ring-1 ring-[#26235A]/[0.05]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#8C88BE]" />
            {hero.reassuranceLine}
          </p>
        </section>

        {/* ───────── PROBLEM ───────── */}
        <section className="mt-36">
          <Eyebrow>The quiet problem</Eyebrow>
          <h2
            className="mt-6 text-balance font-[family-name:var(--font-fraunces)] text-[40px] font-light leading-[1.06] tracking-[-0.02em] text-[#26235A]"
            style={{ fontVariationSettings: '"opsz" 96, "SOFT" 50, "WONK" 0' }}
          >
            {problem.title}
          </h2>
          <p className="mt-7 max-w-[36ch] text-[15px] leading-[1.72] text-[#5A5690]">
            {problem.body}
          </p>
        </section>

        {/* ───────── SOLUTION ───────── */}
        <section className="mt-36">
          <Eyebrow>{solution.intro}</Eyebrow>
          <p className="mt-4 font-[family-name:var(--font-fraunces)] text-[19px] italic text-[#5A5690]">
            three quiet steps
          </p>

          <ol className="mt-12 space-y-16">
            {solution.steps.map((s, i) => (
              <li key={i} className="relative">
                <span
                  aria-hidden
                  className="block font-[family-name:var(--font-fraunces)] text-[88px] font-light leading-[0.7] text-[#26235A]/[0.13]"
                  style={{ fontVariationSettings: '"opsz" 144, "SOFT" 80, "WONK" 1' }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  className="mt-4 font-[family-name:var(--font-fraunces)] text-[25px] font-light leading-[1.18] tracking-[-0.01em] text-[#26235A]"
                  style={{ fontVariationSettings: '"opsz" 60, "SOFT" 50, "WONK" 0' }}
                >
                  {s.title}
                </h3>
                <p className="mt-4 max-w-[40ch] text-[14.5px] leading-[1.7] text-[#5A5690]">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* ───────── PRICING ───────── */}
        <section ref={fd.pricingRef} className="mt-36">
          <Eyebrow>Membership</Eyebrow>
          <h2
            className="mt-6 text-balance font-[family-name:var(--font-fraunces)] text-[38px] font-light leading-[1.06] tracking-[-0.02em] text-[#26235A]"
            style={{ fontVariationSettings: '"opsz" 96, "SOFT" 50, "WONK" 0' }}
          >
            {pricing.title}
          </h2>
          <p className="mt-6 max-w-[38ch] text-[15px] leading-[1.68] text-[#5A5690]">
            {pricing.subtitle}
          </p>

          <div className="mt-10 space-y-5">
            {pricing.plans.map((plan, i) => (
              <div
                key={i}
                className={
                  plan.highlight
                    ? "relative overflow-hidden rounded-[28px] bg-[#26235A] px-7 py-8 text-[#F7F4FF] shadow-[0_30px_60px_-34px_rgba(38,35,90,0.85)]"
                    : "relative rounded-[28px] bg-white/55 px-7 py-8 text-[#26235A] ring-1 ring-[#26235A]/[0.06]"
                }
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-7 rounded-full bg-[#D6E4FF] px-3.5 py-1 text-[9px] uppercase tracking-[0.2em] text-[#26235A]">
                    Most chosen
                  </span>
                )}
                <p
                  className={`font-[family-name:var(--font-fraunces)] text-[16px] italic ${
                    plan.highlight ? "text-[#B9B5E8]" : "text-[#5A5690]"
                  }`}
                >
                  {plan.name}
                </p>
                <p
                  className="mt-2 font-[family-name:var(--font-fraunces)] text-[46px] font-light leading-none tracking-[-0.02em]"
                  style={{ fontVariationSettings: '"opsz" 100, "SOFT" 50, "WONK" 0' }}
                >
                  {plan.price}
                </p>
                <p
                  className={`mt-3 text-[13px] ${
                    plan.highlight ? "text-[#B9B5E8]" : "text-[#5A5690]"
                  }`}
                >
                  {plan.descriptor}
                </p>
                <button
                  onClick={() => fd.onCta(`pricing-${plan.name.toLowerCase()}`)}
                  className={
                    plan.highlight
                      ? "mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#F7F4FF] px-7 py-3.5 text-[15px] font-medium text-[#26235A] transition hover:bg-white"
                      : "mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#26235A] px-7 py-3.5 text-[15px] font-medium text-[#F7F4FF] transition hover:bg-[#322E6E]"
                  }
                >
                  {plan.ctaLabel}
                  <span>→</span>
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-[28px] bg-white/45 px-7 py-8 ring-1 ring-[#26235A]/[0.05]">
            <Eyebrow>Everything included</Eyebrow>
            <ul className="mt-6 grid grid-cols-1 gap-y-3.5">
              {pricing.included.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-[14.5px] text-[#3C3878]"
                >
                  <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[#D6E4FF] text-[11px] text-[#26235A]">
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-7 max-w-[38ch] text-[12.5px] leading-[1.6] text-[#5A5690]">
            {pricing.scarcityLine}
          </p>
        </section>

        {/* ───────── TESTIMONIALS ───────── */}
        <section className="mt-36">
          <Eyebrow>From those who started</Eyebrow>
          <div className="mt-10 space-y-12">
            {testimonials.map((t, i) => (
              <figure key={i}>
                <blockquote
                  className="font-[family-name:var(--font-fraunces)] text-[27px] font-light leading-[1.28] tracking-[-0.01em] text-[#26235A]"
                  style={{ fontVariationSettings: '"opsz" 60, "SOFT" 50, "WONK" 0' }}
                >
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 text-[11px] uppercase tracking-[0.24em] text-[#8C88BE]">
                  {t.name} · {t.age}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ───────── FAQ ───────── */}
        <section className="mt-36">
          <Eyebrow>Questions you might have</Eyebrow>
          <div className="mt-8 divide-y divide-[#26235A]/10 border-y border-[#26235A]/10">
            {faq.map((item, i) => (
              <details key={i} className="group py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                  <span
                    className="font-[family-name:var(--font-fraunces)] text-[19px] font-light leading-[1.3] tracking-[-0.005em] text-[#26235A]"
                    style={{ fontVariationSettings: '"opsz" 48, "SOFT" 50, "WONK" 0' }}
                  >
                    {item.q}
                  </span>
                  <span className="mt-1 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[#D6E4FF] text-[16px] leading-none text-[#26235A] transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-[42ch] text-[14px] leading-[1.68] text-[#5A5690]">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* ───────── FINAL CTA ───────── */}
        <section className="mt-36 text-center">
          <h2
            className="mx-auto max-w-[14ch] text-balance font-[family-name:var(--font-fraunces)] text-[52px] font-light leading-[0.98] tracking-[-0.03em] text-[#26235A]"
            style={{ fontVariationSettings: '"opsz" 144, "SOFT" 70, "WONK" 1' }}
          >
            {content.finalCta.headline}
          </h2>
          <button
            onClick={() => fd.onCta("final")}
            className="mt-10 inline-flex items-center justify-center gap-2.5 rounded-full bg-[#26235A] px-9 py-4 text-[15px] font-medium text-[#F7F4FF] transition hover:-translate-y-[2px] hover:shadow-[0_24px_46px_-22px_rgba(38,35,90,0.8)]"
          >
            {content.finalCta.ctaLabel}
            <span>→</span>
          </button>
        </section>

        {/* ───────── FAKE-DOOR ───────── */}
        {fd.showWaitlist && (
          <section
            id="waitlist"
            className="mt-14 rounded-[32px] bg-white/60 px-7 py-10 ring-1 ring-[#26235A]/[0.06] backdrop-blur-sm"
          >
            {fd.state === "done" ? (
              <div className="text-center">
                <p
                  className="font-[family-name:var(--font-fraunces)] text-[30px] font-light leading-tight text-[#26235A]"
                  style={{ fontVariationSettings: '"opsz" 72, "SOFT" 60, "WONK" 0' }}
                >
                  {content.confirmation.title}
                </p>
                <p className="mx-auto mt-4 max-w-[34ch] text-[14.5px] leading-[1.66] text-[#5A5690]">
                  {content.confirmation.body}
                </p>
              </div>
            ) : (
              <>
                <p
                  className="text-center font-[family-name:var(--font-fraunces)] text-[34px] font-light italic leading-[1.05] tracking-[-0.02em] text-[#26235A]"
                  style={{ fontVariationSettings: '"opsz" 72, "SOFT" 60, "WONK" 1' }}
                >
                  {fakedoor.title}
                </p>
                <p className="mx-auto mt-4 max-w-[34ch] text-center text-[14.5px] leading-[1.66] text-[#5A5690]">
                  {fakedoor.body}
                </p>
                <form onSubmit={fd.submit} className="mt-7 flex flex-col gap-3">
                  <input
                    type="email"
                    required
                    value={fd.email}
                    onChange={(e) => fd.setEmail(e.target.value)}
                    placeholder={fakedoor.emailPlaceholder}
                    className="w-full rounded-full border border-[#26235A]/15 bg-[#F7F4FF] px-6 py-4 text-[15px] text-[#26235A] placeholder:text-[#9591C2] focus:border-[#26235A] focus:outline-none"
                  />
                  <button
                    type="submit"
                    disabled={fd.state === "loading"}
                    className="w-full rounded-full bg-[#26235A] px-6 py-4 text-[15px] font-medium text-[#F7F4FF] disabled:opacity-60"
                  >
                    {fd.state === "loading" ? "..." : fakedoor.submitLabel}
                  </button>
                  {fd.state === "error" && (
                    <p className="text-center text-[13px] text-[#26235A]">
                      Something went wrong. Try again.
                    </p>
                  )}
                </form>
                <p className="mt-5 text-center text-[12px] text-[#8C88BE]">
                  {fakedoor.privacyLine}
                </p>
              </>
            )}
          </section>
        )}

        {/* ───────── FOOTER ───────── */}
        <footer className="mt-24 text-center">
          <p
            className="font-[family-name:var(--font-fraunces)] text-[17px] italic text-[#26235A]"
            style={{ fontVariationSettings: '"opsz" 36, "SOFT" 50, "WONK" 0' }}
          >
            {footer.lines[0]}
          </p>
          <p className="mt-4 text-[11px] uppercase tracking-[0.24em] text-[#9591C2]">
            {footer.lines.slice(1).join("  ·  ")}
          </p>
        </footer>
      </div>

      {/* Sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 px-6 pb-5">
        <button
          onClick={() => fd.onCta("sticky")}
          className="mx-auto flex w-full max-w-md items-center justify-center gap-2 rounded-full bg-[#26235A] px-6 py-4 text-[15px] font-medium text-[#F7F4FF] shadow-[0_20px_44px_-20px_rgba(38,35,90,0.9)]"
        >
          {hero.ctaLabel}
          <span>→</span>
        </button>
      </div>
    </main>
  );
}
