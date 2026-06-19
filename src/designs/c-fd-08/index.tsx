"use client";

import Image from "next/image";
import { Fraunces, Figtree } from "next/font/google";
import type { DesignProps } from "@/designs/types";
import { useFakeDoor } from "@/designs/shared/useFakeDoor";

// Direction: ORGANIC WARM. The earthiest, most hand-made reading of the brand.
// Curved blob shapes and soft gradient washes within the forest/sage family,
// flowing asymmetric layout, full-radius everything. Fraunces — a soft, wonky
// display serif (opsz + SOFT + WONK axes, no fixed weight) gives the headlines a
// warm, almost calligraphic, made-by-hand voice; Figtree, a rounded humanist
// sans, keeps the body grounded and legible. Lime is the single bright bloom.
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT", "WONK"],
  style: ["normal", "italic"],
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

// Palette (locked family, ~one notch of intensity):
//   forest   #16271F   primary dark / ground
//   forest+  #0F1C16   deepest shade
//   pine      #20382C   raised organic surfaces on dark
//   lime     #C8F169   electric accent (the bloom)
//   cream    #EFEAD8   light surface / text-on-dark
//   sage     #9DB39A   secondary / muted
//   moss     #6E8A72   mid sage for hairlines & captions

const serif = "font-[family-name:var(--font-fraunces)]";

export default function OrganicWarmDesign({ content, slug }: DesignProps) {
  const fd = useFakeDoor(slug);
  const { hero, problem, solution, pricing, testimonials, faq, fakedoor, footer } = content;

  return (
    <main
      className={`${fraunces.variable} ${figtree.variable} font-[family-name:var(--font-figtree)] relative min-h-screen overflow-hidden bg-[#16271F] text-[#EFEAD8] antialiased selection:bg-[#C8F169] selection:text-[#16271F]`}
    >
      {/* ── ambient organic gradient washes (atmosphere) ── */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(120% 80% at 85% -5%, rgba(157,179,154,0.28), transparent 55%), radial-gradient(95% 60% at -10% 25%, rgba(200,241,105,0.12), transparent 55%), radial-gradient(120% 80% at 50% 108%, rgba(32,56,44,0.9), transparent 60%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-md px-5 pb-40">
        {/* ───────── HERO ───────── */}
        <header className="pt-6">
          <nav className="flex items-center justify-between px-1">
            <span className={`${serif} text-[18px] italic text-[#C8F169]`}>
              {hero.brandLockup}
            </span>
            <span className="flex items-center gap-2 rounded-full border border-[#9DB39A]/25 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[#9DB39A]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C8F169]" />
              tended with care
            </span>
          </nav>

          {/* blobby hero photo frame */}
          <div className="relative mt-7">
            <div
              aria-hidden
              className="absolute -inset-3 -z-10 bg-[#20382C]/70 blur-2xl"
              style={{ borderRadius: "62% 38% 55% 45% / 48% 52% 48% 52%" }}
            />
            <div
              className="relative overflow-hidden shadow-[0_40px_90px_-50px_rgba(0,0,0,0.85)] ring-1 ring-[#9DB39A]/15"
              style={{ borderRadius: "58% 42% 48% 52% / 52% 46% 54% 48%" }}
            >
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/designs/c/hero.jpeg"
                  alt=""
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <section className="px-1 pt-11">
            <h1
              className={`${serif} text-balance text-[40px] leading-[1.04] tracking-[-0.02em] text-[#EFEAD8]`}
              style={{ fontVariationSettings: '"opsz" 80, "SOFT" 60, "WONK" 1, "wght" 560' }}
            >
              {hero.title}
            </h1>
            <p className="mt-6 max-w-[34ch] text-[16px] leading-[1.65] text-[#C8CFBE]">
              {hero.subtitle}
            </p>

            <button
              onClick={() => fd.onCta("hero")}
              className="group mt-9 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-[#C8F169] px-9 py-4 text-[16px] font-semibold text-[#16271F] transition-transform duration-300 hover:-translate-y-[2px] hover:shadow-[0_22px_44px_-20px_rgba(200,241,105,0.55)]"
            >
              {hero.ctaLabel}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>

            <p className="mt-6 flex items-center justify-center gap-2 text-[13px] text-[#9DB39A]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C8F169]" />
              {hero.reassuranceLine}
            </p>
          </section>
        </header>

        {/* ───────── PROBLEM ───────── */}
        <section className="mt-28">
          <p className="mb-5 text-[10px] uppercase tracking-[0.32em] text-[#6E8A72]">
            the quiet problem
          </p>
          <h2
            className={`${serif} max-w-[22ch] text-balance text-[28px] leading-[1.16] tracking-[-0.01em] text-[#EFEAD8]`}
            style={{ fontVariationSettings: '"opsz" 48, "SOFT" 50, "WONK" 0, "wght" 480' }}
          >
            {problem.title}
          </h2>
          <p className="mt-6 max-w-[36ch] text-[15.5px] leading-[1.72] text-[#C8CFBE]">
            {problem.body}
          </p>
        </section>

        {/* ───────── SOLUTION ───────── */}
        <section className="mt-28">
          <div className="flex items-baseline justify-between gap-4">
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#6E8A72]">
              {solution.intro}
            </p>
            <p className={`${serif} text-[14px] italic text-[#9DB39A]`}>
              three gentle steps
            </p>
          </div>

          <ol className="mt-10 space-y-6">
            {solution.steps.map((s, i) => (
              <li
                key={i}
                className="relative bg-[#20382C]/75 px-7 py-8 ring-1 ring-[#9DB39A]/12"
                style={{
                  borderRadius:
                    i % 2 === 0
                      ? "46% 54% 40% 60% / 38% 42% 58% 62%"
                      : "54% 46% 60% 40% / 60% 58% 42% 40%",
                }}
              >
                <span
                  className={`${serif} flex h-12 w-12 items-center justify-center rounded-full bg-[#C8F169] text-[22px] italic text-[#16271F]`}
                  style={{ fontVariationSettings: '"wght" 600' }}
                >
                  {i + 1}
                </span>
                <h3
                  className={`${serif} mt-6 text-[20px] leading-[1.28] tracking-[-0.005em] text-[#EFEAD8]`}
                  style={{ fontVariationSettings: '"opsz" 36, "SOFT" 50, "WONK" 0, "wght" 500' }}
                >
                  {s.title}
                </h3>
                <p className="mt-3 text-[14.5px] leading-[1.68] text-[#B6BFAC]">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* ───────── PRICING ───────── */}
        <section ref={fd.pricingRef} className="mt-28">
          <p className="mb-5 text-[10px] uppercase tracking-[0.32em] text-[#6E8A72]">
            membership
          </p>
          <h2
            className={`${serif} max-w-[20ch] text-balance text-[27px] leading-[1.16] tracking-[-0.01em] text-[#EFEAD8]`}
            style={{ fontVariationSettings: '"opsz" 48, "SOFT" 50, "WONK" 0, "wght" 480' }}
          >
            {pricing.title}
          </h2>
          <p className="mt-5 max-w-[36ch] text-[15px] leading-[1.68] text-[#C8CFBE]">
            {pricing.subtitle}
          </p>

          <div className="mt-9 space-y-5">
            {pricing.plans.map((plan, i) => (
              <div
                key={i}
                className={
                  plan.highlight
                    ? "relative bg-[#C8F169] px-7 py-8 text-[#16271F] shadow-[0_30px_70px_-40px_rgba(200,241,105,0.5)]"
                    : "relative bg-[#20382C]/75 px-7 py-8 text-[#EFEAD8] ring-1 ring-[#9DB39A]/15"
                }
                style={{
                  borderRadius: plan.highlight
                    ? "48% 52% 52% 48% / 40% 44% 56% 60%"
                    : "52% 48% 46% 54% / 56% 48% 52% 44%",
                }}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-7 rounded-full bg-[#16271F] px-4 py-1 text-[10px] uppercase tracking-[0.18em] text-[#C8F169]">
                    most chosen
                  </span>
                )}
                <p
                  className={`${serif} text-[15px] italic ${
                    plan.highlight ? "text-[#3a5a2e]" : "text-[#9DB39A]"
                  }`}
                >
                  {plan.name}
                </p>
                <p
                  className={`${serif} mt-2 text-[42px] leading-none tracking-[-0.01em]`}
                  style={{ fontVariationSettings: '"opsz" 72, "SOFT" 40, "WONK" 0, "wght" 560' }}
                >
                  {plan.price}
                </p>
                <p
                  className={`mt-3 text-[13px] ${
                    plan.highlight ? "text-[#3a5a2e]" : "text-[#9DB39A]"
                  }`}
                >
                  {plan.descriptor}
                </p>
                <button
                  onClick={() => fd.onCta(`pricing-${plan.name.toLowerCase()}`)}
                  className={
                    plan.highlight
                      ? "mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#16271F] px-7 py-3.5 text-[15px] font-semibold text-[#EFEAD8] transition hover:bg-[#0F1C16]"
                      : "mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#C8F169] px-7 py-3.5 text-[15px] font-semibold text-[#16271F] transition hover:brightness-105"
                  }
                >
                  {plan.ctaLabel}
                  <span>→</span>
                </button>
              </div>
            ))}
          </div>

          <div
            className="mt-8 bg-[#20382C]/60 px-7 py-8 ring-1 ring-[#9DB39A]/12"
            style={{ borderRadius: "44% 56% 56% 44% / 36% 40% 60% 64%" }}
          >
            <p className="text-[10px] uppercase tracking-[0.28em] text-[#6E8A72]">
              everything included
            </p>
            <ul className="mt-6 space-y-3.5">
              {pricing.included.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-[14.5px] text-[#D5DAC8]">
                  <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-[#C8F169]/15 text-[11px] text-[#C8F169]">
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-7 max-w-[36ch] text-[12.5px] leading-[1.6] text-[#9DB39A]">
            {pricing.scarcityLine}
          </p>
        </section>

        {/* ───────── TESTIMONIALS ───────── */}
        <section className="mt-28">
          <p className="mb-8 text-[10px] uppercase tracking-[0.32em] text-[#6E8A72]">
            from those who started
          </p>
          <div className="space-y-6">
            {testimonials.map((t, i) => (
              <figure
                key={i}
                className="relative bg-[#20382C]/70 px-7 py-8 ring-1 ring-[#9DB39A]/12"
                style={{
                  borderRadius:
                    i % 2 === 0
                      ? "50% 50% 42% 58% / 44% 40% 60% 56%"
                      : "50% 50% 58% 42% / 56% 60% 40% 44%",
                }}
              >
                <span
                  aria-hidden
                  className={`${serif} block text-[46px] leading-none text-[#C8F169]/50`}
                  style={{ fontVariationSettings: '"opsz" 72, "SOFT" 80, "WONK" 1, "wght" 500' }}
                >
                  &ldquo;
                </span>
                <blockquote
                  className={`${serif} -mt-2 text-[18.5px] leading-[1.5] tracking-[-0.005em] text-[#EFEAD8]`}
                  style={{ fontVariationSettings: '"opsz" 36, "SOFT" 50, "WONK" 0, "wght" 460' }}
                >
                  {t.quote}
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-2 text-[12px] uppercase tracking-[0.16em] text-[#9DB39A]">
                  <span className="h-px w-5 bg-[#6E8A72]" />
                  {t.name} · {t.age}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ───────── FAQ ───────── */}
        <section className="mt-28">
          <p className="mb-8 text-[10px] uppercase tracking-[0.32em] text-[#6E8A72]">
            questions you might have
          </p>
          <div className="space-y-4">
            {faq.map((item, i) => (
              <details
                key={i}
                className="group rounded-[28px] bg-[#20382C]/60 px-7 py-5 ring-1 ring-[#9DB39A]/12 open:bg-[#20382C]/85"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                  <span
                    className={`${serif} text-[17px] leading-[1.3] tracking-[-0.005em] text-[#EFEAD8]`}
                    style={{ fontVariationSettings: '"opsz" 36, "SOFT" 50, "WONK" 0, "wght" 500' }}
                  >
                    {item.q}
                  </span>
                  <span className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-full bg-[#C8F169]/15 text-[18px] leading-none text-[#C8F169] transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-[14px] leading-[1.68] text-[#B6BFAC]">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* ───────── FINAL CTA ───────── */}
        <section
          className="relative mt-28 overflow-hidden bg-[#C8F169] px-8 py-16 text-center text-[#16271F]"
          style={{ borderRadius: "46% 54% 48% 52% / 40% 42% 58% 60%" }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#16271F]/8"
          />
          <h2
            className={`${serif} relative mx-auto max-w-[16ch] text-balance text-[32px] leading-[1.08] tracking-[-0.01em]`}
            style={{ fontVariationSettings: '"opsz" 72, "SOFT" 60, "WONK" 1, "wght" 540' }}
          >
            {content.finalCta.headline}
          </h2>
          <button
            onClick={() => fd.onCta("final")}
            className="relative mt-9 inline-flex items-center justify-center gap-2.5 rounded-full bg-[#16271F] px-9 py-4 text-[16px] font-semibold text-[#EFEAD8] transition hover:bg-[#0F1C16]"
          >
            {content.finalCta.ctaLabel}
            <span>→</span>
          </button>
        </section>

        {/* ───────── FAKE-DOOR ───────── */}
        {fd.showWaitlist && (
          <section
            id="waitlist"
            className="mt-12 bg-[#20382C]/85 px-7 py-11 ring-1 ring-[#9DB39A]/15"
            style={{ borderRadius: "48% 52% 52% 48% / 42% 44% 56% 58%" }}
          >
            {fd.state === "done" ? (
              <div className="text-center">
                <p
                  className={`${serif} text-[25px] leading-tight text-[#C8F169]`}
                  style={{ fontVariationSettings: '"opsz" 48, "SOFT" 60, "WONK" 1, "wght" 540' }}
                >
                  {content.confirmation.title}
                </p>
                <p className="mx-auto mt-4 max-w-[34ch] text-[14.5px] leading-[1.68] text-[#C8CFBE]">
                  {content.confirmation.body}
                </p>
              </div>
            ) : (
              <>
                <p
                  className={`${serif} text-center text-[27px] italic leading-[1.12] tracking-[-0.01em] text-[#EFEAD8]`}
                  style={{ fontVariationSettings: '"opsz" 48, "SOFT" 70, "WONK" 1, "wght" 500' }}
                >
                  {fakedoor.title}
                </p>
                <p className="mx-auto mt-4 max-w-[34ch] text-center text-[14.5px] leading-[1.68] text-[#C8CFBE]">
                  {fakedoor.body}
                </p>
                <form onSubmit={fd.submit} className="mt-7 flex flex-col gap-3">
                  <input
                    type="email"
                    required
                    value={fd.email}
                    onChange={(e) => fd.setEmail(e.target.value)}
                    placeholder={fakedoor.emailPlaceholder}
                    className="w-full rounded-full border border-[#9DB39A]/25 bg-[#16271F] px-6 py-4 text-[15px] text-[#EFEAD8] placeholder:text-[#6E8A72] focus:border-[#C8F169] focus:outline-none"
                  />
                  <button
                    type="submit"
                    disabled={fd.state === "loading"}
                    className="w-full rounded-full bg-[#C8F169] px-6 py-4 text-[15px] font-semibold text-[#16271F] transition hover:brightness-105 disabled:opacity-60"
                  >
                    {fd.state === "loading" ? "..." : fakedoor.submitLabel}
                  </button>
                  {fd.state === "error" && (
                    <p className="text-center text-[13px] text-[#C8F169]">
                      Something went wrong. Try again.
                    </p>
                  )}
                </form>
                <p className="mt-5 text-center text-[12px] text-[#9DB39A]">
                  {fakedoor.privacyLine}
                </p>
              </>
            )}
          </section>
        )}

        {/* ───────── FOOTER ───────── */}
        <footer className="mt-24 text-center">
          <p
            className={`${serif} text-[16px] italic text-[#9DB39A]`}
            style={{ fontVariationSettings: '"opsz" 36, "SOFT" 60, "WONK" 0, "wght" 440' }}
          >
            {footer.lines[0]}
          </p>
          <p className="mt-4 text-[11px] uppercase tracking-[0.22em] text-[#6E8A72]">
            {footer.lines.slice(1).join("  ·  ")}
          </p>
        </footer>
      </div>

      {/* Sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 px-5 pb-5">
        <button
          onClick={() => fd.onCta("sticky")}
          className="mx-auto flex w-full max-w-md items-center justify-center gap-2 rounded-full bg-[#C8F169] px-6 py-4 text-[15px] font-semibold text-[#16271F] shadow-[0_20px_44px_-18px_rgba(0,0,0,0.8)]"
        >
          {hero.ctaLabel}
          <span>→</span>
        </button>
      </div>
    </main>
  );
}
