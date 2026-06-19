"use client";

import Image from "next/image";
import { Fraunces, Mulish } from "next/font/google";
import type { DesignProps } from "@/designs/types";
import { useFakeDoor } from "@/designs/shared/useFakeDoor";

// Direction: ORGANIC WARM. The most fluid, hand-soft reading of the brand.
// Curved organic blobs and soft gradient washes drift behind the content within
// the lavender / periwinkle / indigo family. Layout flows in gentle off-axis
// cards with deep corner radii; nothing is hard-edged. Fraunces (soft optical
// serif, SOFT axis dialed warm, with italics) carries the tender, dreamlike
// voice; Mulish (rounded humanist sans) keeps the body airy and luminous.
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT", "WONK"],
  style: ["normal", "italic"],
  display: "swap",
});

const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-mulish",
  display: "swap",
});

// Soft, hand-drawn divider blob.
function Petal({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 60 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 12C12 4 18 20 30 12C42 4 48 20 58 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function OrganicWarmDesign({ content, slug }: DesignProps) {
  const fd = useFakeDoor(slug);
  const { hero, problem, solution, pricing, testimonials, faq, fakedoor, footer } = content;

  return (
    <main
      className={`${fraunces.variable} ${mulish.variable} font-[family-name:var(--font-mulish)] relative min-h-screen overflow-hidden bg-[#F4F0FF] text-[#26235A] antialiased selection:bg-[#5A5690] selection:text-[#F7F4FF]`}
    >
      {/* ───────── ATMOSPHERIC MESH + BLOBS ───────── */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(120% 80% at 12% 0%, #F3ECFF 0%, transparent 55%), radial-gradient(120% 70% at 92% 18%, #D6E4FF 0%, transparent 50%), radial-gradient(140% 90% at 50% 100%, #EBE6FF 0%, transparent 60%), linear-gradient(180deg, #F7F4FF 0%, #EFEAFF 45%, #F4F0FF 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed -left-24 top-[22%] -z-10 h-72 w-72 rounded-full bg-[#D6E4FF] opacity-55 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none fixed -right-28 top-[58%] -z-10 h-80 w-80 rounded-full bg-[#E4D8FF] opacity-50 blur-3xl"
      />

      <div className="relative mx-auto max-w-md px-5 pb-36">
        {/* ───────── NAV ───────── */}
        <nav className="flex items-center justify-between px-1 pt-7">
          <span className="font-[family-name:var(--font-fraunces)] text-[18px] italic text-[#26235A]">
            {hero.brandLockup}
          </span>
          <span className="rounded-full bg-white/45 px-3.5 py-1.5 text-[10px] uppercase tracking-[0.22em] text-[#5A5690] ring-1 ring-[#5A5690]/15 backdrop-blur-sm">
            Tenderly kept
          </span>
        </nav>

        {/* ───────── HERO ───────── */}
        <header className="pt-7">
          {/* hero.jpeg already carries the "You Alive?" wordmark — no overlay */}
          <div className="relative overflow-hidden rounded-[42px] shadow-[0_40px_90px_-50px_rgba(38,35,90,0.55)] ring-1 ring-white/50">
            <div className="relative aspect-[3/4] w-full">
              <Image
                src="/designs/b/hero.jpeg"
                alt="You Alive — a soft lavender wordmark"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 450px"
                className="object-cover object-top"
              />
            </div>
          </div>

          <section className="px-2 pt-10 text-center">
            <h1
              className="text-balance font-[family-name:var(--font-fraunces)] text-[37px] leading-[1.06] tracking-[-0.015em] text-[#26235A]"
              style={{ fontVariationSettings: '"opsz" 72, "SOFT" 60, "WONK" 1' }}
            >
              {hero.title}
            </h1>
            <p className="mx-auto mt-6 max-w-[32ch] text-[16px] leading-[1.7] text-[#5A5690]">
              {hero.subtitle}
            </p>

            <button
              onClick={() => fd.onCta("hero")}
              className="group mt-9 inline-flex items-center justify-center gap-2.5 rounded-full bg-[#26235A] px-9 py-4 text-[15px] font-semibold text-[#F7F4FF] shadow-[0_22px_46px_-22px_rgba(38,35,90,0.8)] transition-transform duration-300 hover:-translate-y-[2px]"
            >
              {hero.ctaLabel}
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </button>

            <p className="mx-auto mt-6 inline-flex items-center gap-2 rounded-full bg-white/45 px-4 py-1.5 text-[12.5px] text-[#5A5690] ring-1 ring-[#5A5690]/10 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#7B73C9]" />
              {hero.reassuranceLine}
            </p>
          </section>
        </header>

        {/* ───────── PROBLEM ───────── */}
        <section className="relative mt-28 text-center">
          <Petal className="mx-auto h-5 w-14 text-[#9C95E0]/60" />
          <p className="mb-5 mt-7 text-[10px] uppercase tracking-[0.34em] text-[#8C84C9]">
            The quiet problem
          </p>
          <h2
            className="mx-auto max-w-[20ch] text-balance font-[family-name:var(--font-fraunces)] text-[28px] leading-[1.16] tracking-[-0.01em] text-[#26235A]"
            style={{ fontVariationSettings: '"opsz" 48, "SOFT" 60, "WONK" 0' }}
          >
            {problem.title}
          </h2>
          <p className="mx-auto mt-6 max-w-[34ch] text-[15.5px] leading-[1.72] text-[#5A5690]">
            {problem.body}
          </p>
        </section>

        {/* ───────── SOLUTION ───────── */}
        <section className="mt-28">
          <div className="text-center">
            <p className="mb-3 text-[10px] uppercase tracking-[0.34em] text-[#8C84C9]">
              {solution.intro}
            </p>
            <p className="font-[family-name:var(--font-fraunces)] text-[15px] italic text-[#5A5690]">
              three gentle steps
            </p>
          </div>

          <ol className="mt-11 space-y-6">
            {solution.steps.map((s, i) => (
              <li
                key={i}
                className={`relative rounded-[34px] bg-white/55 px-7 py-8 shadow-[0_24px_60px_-46px_rgba(38,35,90,0.7)] ring-1 ring-white/60 backdrop-blur-sm ${
                  i % 2 === 0 ? "ml-0 mr-4" : "ml-4 mr-0"
                }`}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-[40%_60%_55%_45%/55%_45%_60%_40%] bg-[#E4DCFF] font-[family-name:var(--font-fraunces)] text-[22px] italic text-[#5A4FA8]">
                  {i + 1}
                </span>
                <h3
                  className="mt-6 font-[family-name:var(--font-fraunces)] text-[20px] leading-[1.26] tracking-[-0.005em] text-[#26235A]"
                  style={{ fontVariationSettings: '"opsz" 36, "SOFT" 60, "WONK" 0' }}
                >
                  {s.title}
                </h3>
                <p className="mt-3 text-[14.5px] leading-[1.68] text-[#5A5690]">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* ───────── PRICING ───────── */}
        <section ref={fd.pricingRef} className="mt-28 text-center">
          <Petal className="mx-auto h-5 w-14 text-[#9C95E0]/60" />
          <p className="mb-5 mt-7 text-[10px] uppercase tracking-[0.34em] text-[#8C84C9]">
            Membership
          </p>
          <h2
            className="mx-auto max-w-[20ch] text-balance font-[family-name:var(--font-fraunces)] text-[27px] leading-[1.16] tracking-[-0.01em] text-[#26235A]"
            style={{ fontVariationSettings: '"opsz" 48, "SOFT" 60, "WONK" 0' }}
          >
            {pricing.title}
          </h2>
          <p className="mx-auto mt-5 max-w-[34ch] text-[15px] leading-[1.68] text-[#5A5690]">
            {pricing.subtitle}
          </p>

          <div className="mt-10 space-y-5">
            {pricing.plans.map((plan, i) => (
              <div
                key={i}
                className={
                  plan.highlight
                    ? "relative overflow-hidden rounded-[34px] bg-[#26235A] px-7 py-8 text-[#F7F4FF] shadow-[0_34px_70px_-40px_rgba(38,35,90,0.85)]"
                    : "relative rounded-[34px] bg-white/55 px-7 py-8 text-[#26235A] ring-1 ring-white/60 backdrop-blur-sm"
                }
              >
                {plan.highlight && (
                  <>
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[#5A4FA8] opacity-50 blur-2xl"
                    />
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#9C95E0] px-4 py-1 text-[10px] uppercase tracking-[0.18em] text-[#26235A]">
                      Most chosen
                    </span>
                  </>
                )}
                <p
                  className={`relative font-[family-name:var(--font-fraunces)] text-[15px] italic ${
                    plan.highlight ? "text-[#C9C2F2]" : "text-[#5A5690]"
                  }`}
                >
                  {plan.name}
                </p>
                <p
                  className="relative mt-2 font-[family-name:var(--font-fraunces)] text-[40px] leading-none tracking-[-0.01em]"
                  style={{ fontVariationSettings: '"opsz" 72, "SOFT" 40, "WONK" 0' }}
                >
                  {plan.price}
                </p>
                <p
                  className={`relative mt-3 text-[13px] ${
                    plan.highlight ? "text-[#C9C2F2]" : "text-[#5A5690]"
                  }`}
                >
                  {plan.descriptor}
                </p>
                <button
                  onClick={() => fd.onCta(`pricing-${plan.name.toLowerCase()}`)}
                  className={
                    plan.highlight
                      ? "relative mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#F7F4FF] px-7 py-3.5 text-[15px] font-semibold text-[#26235A] transition hover:bg-white"
                      : "relative mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#26235A] px-7 py-3.5 text-[15px] font-semibold text-[#F7F4FF] transition hover:bg-[#322d70]"
                  }
                >
                  {plan.ctaLabel}
                  <span>→</span>
                </button>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-[34px] bg-white/45 px-7 py-8 text-left ring-1 ring-white/60 backdrop-blur-sm">
            <p className="text-center text-[10px] uppercase tracking-[0.3em] text-[#8C84C9]">
              Everything included
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-y-3.5">
              {pricing.included.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-[14.5px] text-[#3D3970]">
                  <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[#E4DCFF] text-[11px] text-[#5A4FA8]">
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
        <section className="mt-28">
          <Petal className="mx-auto h-5 w-14 text-[#9C95E0]/60" />
          <p className="mb-8 mt-7 text-center text-[10px] uppercase tracking-[0.34em] text-[#8C84C9]">
            From those who started
          </p>

          <div className="space-y-6">
            {testimonials.map((t, i) => (
              <figure
                key={i}
                className={`rounded-[34px] bg-white/55 px-7 py-8 ring-1 ring-white/60 backdrop-blur-sm ${
                  i % 2 === 0 ? "mr-5" : "ml-5"
                }`}
              >
                <span
                  aria-hidden
                  className="block font-[family-name:var(--font-fraunces)] text-[46px] leading-none text-[#9C95E0]/55"
                  style={{ fontVariationSettings: '"opsz" 72, "SOFT" 80' }}
                >
                  &ldquo;
                </span>
                <blockquote
                  className="mt-1 font-[family-name:var(--font-fraunces)] text-[18.5px] leading-[1.52] tracking-[-0.005em] text-[#26235A]"
                  style={{ fontVariationSettings: '"opsz" 36, "SOFT" 50' }}
                >
                  {t.quote}
                </blockquote>
                <figcaption className="mt-5 text-[12px] uppercase tracking-[0.18em] text-[#5A5690]">
                  {t.name} · {t.age}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ───────── FAQ ───────── */}
        <section className="mt-28">
          <Petal className="mx-auto h-5 w-14 text-[#9C95E0]/60" />
          <p className="mb-8 mt-7 text-center text-[10px] uppercase tracking-[0.34em] text-[#8C84C9]">
            Questions you might have
          </p>
          <div className="space-y-4">
            {faq.map((item, i) => (
              <details
                key={i}
                className="group rounded-[30px] bg-white/55 px-7 py-5 ring-1 ring-white/60 backdrop-blur-sm open:bg-white/70"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                  <span
                    className="font-[family-name:var(--font-fraunces)] text-[17px] leading-[1.32] tracking-[-0.005em] text-[#26235A]"
                    style={{ fontVariationSettings: '"opsz" 36, "SOFT" 50' }}
                  >
                    {item.q}
                  </span>
                  <span className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-full bg-[#E4DCFF] text-[18px] leading-none text-[#5A4FA8] transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-[14px] leading-[1.68] text-[#5A5690]">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* ───────── FINAL CTA ───────── */}
        <section className="relative mt-28 overflow-hidden rounded-[40px] bg-[#26235A] px-8 py-14 text-center text-[#F7F4FF]">
          <span
            aria-hidden
            className="pointer-events-none absolute -left-16 -top-12 h-56 w-56 rounded-full bg-[#5A4FA8] opacity-50 blur-3xl"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute -bottom-16 -right-12 h-56 w-56 rounded-full bg-[#4A4488] opacity-50 blur-3xl"
          />
          <h2
            className="relative mx-auto max-w-[16ch] text-balance font-[family-name:var(--font-fraunces)] text-[31px] leading-[1.1] tracking-[-0.01em]"
            style={{ fontVariationSettings: '"opsz" 72, "SOFT" 60, "WONK" 1' }}
          >
            {content.finalCta.headline}
          </h2>
          <button
            onClick={() => fd.onCta("final")}
            className="relative mt-9 inline-flex items-center justify-center gap-2.5 rounded-full bg-[#F7F4FF] px-9 py-4 text-[15px] font-semibold text-[#26235A] transition hover:bg-white"
          >
            {content.finalCta.ctaLabel}
            <span>→</span>
          </button>
        </section>

        {/* ───────── FAKE-DOOR ───────── */}
        {fd.showWaitlist && (
          <section
            id="waitlist"
            className="mt-12 rounded-[40px] bg-white/60 px-7 py-10 ring-1 ring-white/60 backdrop-blur-sm"
          >
            {fd.state === "done" ? (
              <div className="text-center">
                <p
                  className="font-[family-name:var(--font-fraunces)] text-[25px] leading-tight text-[#26235A]"
                  style={{ fontVariationSettings: '"opsz" 48, "SOFT" 60' }}
                >
                  {content.confirmation.title}
                </p>
                <p className="mx-auto mt-4 max-w-[34ch] text-[14.5px] leading-[1.68] text-[#5A5690]">
                  {content.confirmation.body}
                </p>
              </div>
            ) : (
              <>
                <p
                  className="text-center font-[family-name:var(--font-fraunces)] text-[27px] italic leading-[1.15] tracking-[-0.01em] text-[#26235A]"
                  style={{ fontVariationSettings: '"opsz" 48, "SOFT" 70, "WONK" 1' }}
                >
                  {fakedoor.title}
                </p>
                <p className="mx-auto mt-4 max-w-[34ch] text-center text-[14.5px] leading-[1.68] text-[#5A5690]">
                  {fakedoor.body}
                </p>
                <form onSubmit={fd.submit} className="mt-7 flex flex-col gap-3">
                  <input
                    type="email"
                    required
                    value={fd.email}
                    onChange={(e) => fd.setEmail(e.target.value)}
                    placeholder={fakedoor.emailPlaceholder}
                    className="w-full rounded-full border border-[#5A5690]/20 bg-[#F7F4FF] px-6 py-4 text-[15px] text-[#26235A] placeholder:text-[#9590C7] focus:border-[#5A5690] focus:outline-none"
                  />
                  <button
                    type="submit"
                    disabled={fd.state === "loading"}
                    className="w-full rounded-full bg-[#26235A] px-6 py-4 text-[15px] font-semibold text-[#F7F4FF] disabled:opacity-60"
                  >
                    {fd.state === "loading" ? "..." : fakedoor.submitLabel}
                  </button>
                  {fd.state === "error" && (
                    <p className="text-center text-[13px] text-[#7B5BA8]">
                      Something went wrong. Try again.
                    </p>
                  )}
                </form>
                <p className="mt-5 text-center text-[12px] text-[#5A5690]">
                  {fakedoor.privacyLine}
                </p>
              </>
            )}
          </section>
        )}

        {/* ───────── FOOTER ───────── */}
        <footer className="mt-24 text-center">
          <Petal className="mx-auto mb-7 h-5 w-14 text-[#9C95E0]/60" />
          <p
            className="font-[family-name:var(--font-fraunces)] text-[16px] italic text-[#26235A]"
            style={{ fontVariationSettings: '"opsz" 36, "SOFT" 60' }}
          >
            {footer.lines[0]}
          </p>
          <p className="mt-4 text-[11px] uppercase tracking-[0.24em] text-[#9590C7]">
            {footer.lines.slice(1).join("  ·  ")}
          </p>
        </footer>
      </div>

      {/* Sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 px-5 pb-5">
        <button
          onClick={() => fd.onCta("sticky")}
          className="mx-auto flex w-full max-w-md items-center justify-center gap-2 rounded-full bg-[#26235A] px-6 py-4 text-[15px] font-semibold text-[#F7F4FF] shadow-[0_22px_46px_-20px_rgba(38,35,90,0.9)]"
        >
          {hero.ctaLabel}
          <span>→</span>
        </button>
      </div>
    </main>
  );
}
