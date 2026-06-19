"use client";

import Image from "next/image";
import { Fraunces, Mona_Sans } from "next/font/google";
import type { DesignProps } from "@/designs/types";
import { useFakeDoor } from "@/designs/shared/useFakeDoor";

// Direction: MAXIMUM AIR + FULL RADIUS. A luminous, weightless reading of the
// brand — the lavender→periwinkle mesh of the ad turned into a breathing page.
// Soft optical serif (Fraunces, with the "soft" + "opsz" axes and tender
// italics) carries the contemplative voice; a rounded humanist grotesque
// (Mona Sans) handles body. Everything floats: rounded-full pills, big pillowy
// cards on translucent white, vast negative space, near-zero decoration. Ink
// indigo on a soft lavender mesh. Restraint over ornament.
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT", "WONK"],
  style: ["normal", "italic"],
  display: "swap",
});

const mona = Mona_Sans({
  subsets: ["latin"],
  variable: "--font-mona",
  display: "swap",
});

// Palette (locked indigo / lavender / periwinkle family)
const INK = "#26235A"; // primary dark text
const SOFT = "#5A5690"; // secondary

export default function AiryRoundedLavender({ content, slug }: DesignProps) {
  const fd = useFakeDoor(slug);
  const { hero, problem, solution, pricing, testimonials, faq, fakedoor, footer } = content;

  return (
    <main
      className={`${fraunces.variable} ${mona.variable} font-[family-name:var(--font-mona)] relative min-h-screen overflow-hidden text-[${INK}] antialiased selection:bg-[#C9D2FF] selection:text-[#26235A]`}
      style={{
        background:
          "radial-gradient(120% 80% at 12% 4%, #F3ECFF 0%, rgba(243,236,255,0) 55%)," +
          "radial-gradient(110% 70% at 92% 18%, #D6E4FF 0%, rgba(214,228,255,0) 55%)," +
          "radial-gradient(130% 90% at 50% 108%, #EBE6FF 0%, rgba(235,230,255,0) 60%)," +
          "linear-gradient(180deg, #F7F4FF 0%, #F3ECFF 50%, #F7F4FF 100%)",
      }}
    >
      {/* floating soft orbs for dreamlike depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-40 h-72 w-72 rounded-full opacity-50 blur-3xl"
        style={{ background: "radial-gradient(circle, #D6E4FF 0%, rgba(214,228,255,0) 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-28 top-[58%] h-80 w-80 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, #EBE6FF 0%, rgba(235,230,255,0) 70%)" }}
      />

      <div className="relative mx-auto max-w-md px-6 pb-40">
        {/* ───────── NAV ───────── */}
        <header className="flex items-center justify-between pt-7">
          <span
            className="font-[family-name:var(--font-fraunces)] text-[18px] italic"
            style={{ color: INK, fontVariationSettings: '"opsz" 24, "SOFT" 60' }}
          >
            {hero.brandLockup}
          </span>
          <span
            className="rounded-full border px-3.5 py-1.5 text-[10px] uppercase tracking-[0.24em]"
            style={{ borderColor: "rgba(90,86,144,0.25)", color: SOFT }}
          >
            Tenderly kept
          </span>
        </header>

        {/* ───────── HERO ───────── */}
        {/* hero.jpeg already carries the "You Alive?" wordmark + tagline; we let
            it breathe in a full-radius frame and render hero.title as the page
            H1 below it, never overlaid. */}
        <section className="pt-7">
          <div className="overflow-hidden rounded-[40px] shadow-[0_40px_90px_-50px_rgba(38,35,90,0.45)] ring-1 ring-white/60">
            <div className="relative aspect-[9/16] w-full">
              <Image
                src="/designs/b/hero.jpeg"
                alt="You Alive — notify your loved ones if something happens"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 450px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="px-1 pt-12 text-center">
            <h1
              className="text-balance font-[family-name:var(--font-fraunces)] text-[36px] leading-[1.06] tracking-[-0.01em]"
              style={{ color: INK, fontVariationSettings: '"opsz" 144, "SOFT" 50' }}
            >
              {hero.title}
            </h1>
            <p
              className="mx-auto mt-6 max-w-[32ch] text-[16px] leading-[1.7]"
              style={{ color: SOFT }}
            >
              {hero.subtitle}
            </p>

            <button
              onClick={() => fd.onCta("hero")}
              className="group mt-9 inline-flex items-center justify-center gap-2.5 rounded-full px-9 py-4 text-[15px] font-medium text-[#F7F4FF] transition-transform duration-300 hover:-translate-y-[2px]"
              style={{
                background: INK,
                boxShadow: "0 24px 50px -22px rgba(38,35,90,0.6)",
              }}
            >
              {hero.ctaLabel}
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </button>

            <p
              className="mx-auto mt-7 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12.5px]"
              style={{ background: "rgba(255,255,255,0.6)", color: SOFT }}
            >
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#8A86D8" }} />
              {hero.reassuranceLine}
            </p>
          </div>
        </section>

        {/* ───────── PROBLEM ───────── */}
        <section className="mt-36 text-center">
          <p className="mb-6 text-[10px] uppercase tracking-[0.36em]" style={{ color: "#9C98D4" }}>
            The quiet problem
          </p>
          <h2
            className="mx-auto max-w-[20ch] text-balance font-[family-name:var(--font-fraunces)] text-[28px] leading-[1.2] tracking-[-0.01em]"
            style={{ color: INK, fontVariationSettings: '"opsz" 72, "SOFT" 50' }}
          >
            {problem.title}
          </h2>
          <p
            className="mx-auto mt-7 max-w-[34ch] text-[15.5px] leading-[1.75]"
            style={{ color: SOFT }}
          >
            {problem.body}
          </p>
        </section>

        {/* ───────── SOLUTION ───────── */}
        <section className="mt-36">
          <div className="text-center">
            <p
              className="mb-4 text-[10px] uppercase tracking-[0.36em]"
              style={{ color: "#9C98D4" }}
            >
              {solution.intro}
            </p>
            <p
              className="font-[family-name:var(--font-fraunces)] text-[16px] italic"
              style={{ color: SOFT, fontVariationSettings: '"opsz" 24, "SOFT" 70' }}
            >
              three quiet steps
            </p>
          </div>

          <ol className="mt-12 space-y-7">
            {solution.steps.map((s, i) => (
              <li
                key={i}
                className="rounded-[36px] px-7 py-9 ring-1 ring-white/70"
                style={{
                  background: "rgba(255,255,255,0.55)",
                  boxShadow: "0 24px 60px -48px rgba(38,35,90,0.5)",
                  backdropFilter: "blur(6px)",
                }}
              >
                <span
                  className="flex h-14 w-14 items-center justify-center rounded-full font-[family-name:var(--font-fraunces)] text-[24px] italic"
                  style={{
                    background: "rgba(214,228,255,0.6)",
                    color: INK,
                    fontVariationSettings: '"opsz" 24, "SOFT" 70',
                  }}
                >
                  {i + 1}
                </span>
                <h3
                  className="mt-6 font-[family-name:var(--font-fraunces)] text-[21px] leading-[1.28] tracking-[-0.005em]"
                  style={{ color: INK, fontVariationSettings: '"opsz" 40, "SOFT" 50' }}
                >
                  {s.title}
                </h3>
                <p className="mt-3 text-[14.5px] leading-[1.7]" style={{ color: SOFT }}>
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* ───────── PRICING ───────── */}
        <section ref={fd.pricingRef} className="mt-36 text-center">
          <p className="mb-5 text-[10px] uppercase tracking-[0.36em]" style={{ color: "#9C98D4" }}>
            Membership
          </p>
          <h2
            className="mx-auto max-w-[20ch] text-balance font-[family-name:var(--font-fraunces)] text-[27px] leading-[1.2] tracking-[-0.01em]"
            style={{ color: INK, fontVariationSettings: '"opsz" 72, "SOFT" 50' }}
          >
            {pricing.title}
          </h2>
          <p
            className="mx-auto mt-5 max-w-[34ch] text-[15px] leading-[1.7]"
            style={{ color: SOFT }}
          >
            {pricing.subtitle}
          </p>

          <div className="mt-10 space-y-5">
            {pricing.plans.map((plan, i) =>
              plan.highlight ? (
                <div
                  key={i}
                  className="relative rounded-[36px] px-7 py-9 text-[#F7F4FF]"
                  style={{
                    background: "linear-gradient(160deg, #2E2A6B 0%, #26235A 100%)",
                    boxShadow: "0 34px 70px -40px rgba(38,35,90,0.8)",
                  }}
                >
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-[10px] uppercase tracking-[0.2em]"
                    style={{ background: "#C9D2FF", color: INK }}
                  >
                    Most chosen
                  </span>
                  <p
                    className="font-[family-name:var(--font-fraunces)] text-[16px] italic"
                    style={{ color: "#B9C2F2", fontVariationSettings: '"opsz" 24, "SOFT" 70' }}
                  >
                    {plan.name}
                  </p>
                  <p
                    className="mt-2 font-[family-name:var(--font-fraunces)] text-[42px] leading-none tracking-[-0.01em]"
                    style={{ fontVariationSettings: '"opsz" 144, "SOFT" 40' }}
                  >
                    {plan.price}
                  </p>
                  <p className="mt-3 text-[13px]" style={{ color: "#B9C2F2" }}>
                    {plan.descriptor}
                  </p>
                  <button
                    onClick={() => fd.onCta(`pricing-${plan.name.toLowerCase()}`)}
                    className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-4 text-[15px] font-medium transition hover:opacity-90"
                    style={{ background: "#F7F4FF", color: INK }}
                  >
                    {plan.ctaLabel}
                    <span>→</span>
                  </button>
                </div>
              ) : (
                <div
                  key={i}
                  className="relative rounded-[36px] px-7 py-9 ring-1 ring-white/70"
                  style={{ background: "rgba(255,255,255,0.55)", color: INK }}
                >
                  <p
                    className="font-[family-name:var(--font-fraunces)] text-[16px] italic"
                    style={{ color: SOFT, fontVariationSettings: '"opsz" 24, "SOFT" 70' }}
                  >
                    {plan.name}
                  </p>
                  <p
                    className="mt-2 font-[family-name:var(--font-fraunces)] text-[42px] leading-none tracking-[-0.01em]"
                    style={{ color: INK, fontVariationSettings: '"opsz" 144, "SOFT" 40' }}
                  >
                    {plan.price}
                  </p>
                  <p className="mt-3 text-[13px]" style={{ color: SOFT }}>
                    {plan.descriptor}
                  </p>
                  <button
                    onClick={() => fd.onCta(`pricing-${plan.name.toLowerCase()}`)}
                    className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-4 text-[15px] font-medium text-[#F7F4FF] transition hover:-translate-y-[1px]"
                    style={{ background: INK }}
                  >
                    {plan.ctaLabel}
                    <span>→</span>
                  </button>
                </div>
              )
            )}
          </div>

          <div
            className="mt-10 rounded-[36px] px-7 py-9 text-left ring-1 ring-white/70"
            style={{ background: "rgba(255,255,255,0.45)" }}
          >
            <p
              className="text-center text-[10px] uppercase tracking-[0.32em]"
              style={{ color: "#9C98D4" }}
            >
              Everything included
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-y-3.5">
              {pricing.included.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-[14.5px]"
                  style={{ color: INK }}
                >
                  <span
                    className="flex h-5 w-5 flex-none items-center justify-center rounded-full text-[11px]"
                    style={{ background: "rgba(201,210,255,0.7)", color: INK }}
                  >
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <p
            className="mx-auto mt-7 max-w-[34ch] text-[12.5px] leading-[1.65]"
            style={{ color: SOFT }}
          >
            {pricing.scarcityLine}
          </p>
        </section>

        {/* ───────── TESTIMONIALS ───────── */}
        <section className="mt-36">
          <p
            className="mb-8 text-center text-[10px] uppercase tracking-[0.36em]"
            style={{ color: "#9C98D4" }}
          >
            From those who started
          </p>

          <div className="space-y-6">
            {testimonials.map((t, i) => (
              <figure
                key={i}
                className="rounded-[36px] px-7 py-9 ring-1 ring-white/70"
                style={{ background: "rgba(255,255,255,0.55)" }}
              >
                <span
                  aria-hidden
                  className="block font-[family-name:var(--font-fraunces)] text-[46px] leading-none"
                  style={{ color: "rgba(138,134,216,0.5)", fontVariationSettings: '"opsz" 144' }}
                >
                  &ldquo;
                </span>
                <blockquote
                  className="mt-1 font-[family-name:var(--font-fraunces)] text-[19px] leading-[1.5] tracking-[-0.005em]"
                  style={{ color: INK, fontVariationSettings: '"opsz" 40, "SOFT" 50' }}
                >
                  {t.quote}
                </blockquote>
                <figcaption
                  className="mt-5 text-[12px] uppercase tracking-[0.2em]"
                  style={{ color: SOFT }}
                >
                  {t.name} · {t.age}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ───────── FAQ ───────── */}
        <section className="mt-36">
          <p
            className="mb-8 text-center text-[10px] uppercase tracking-[0.36em]"
            style={{ color: "#9C98D4" }}
          >
            Questions you might have
          </p>
          <div className="space-y-4">
            {faq.map((item, i) => (
              <details
                key={i}
                className="group rounded-[30px] px-7 py-5 ring-1 ring-white/70 open:bg-white/70"
                style={{ background: "rgba(255,255,255,0.5)" }}
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                  <span
                    className="font-[family-name:var(--font-fraunces)] text-[17px] leading-[1.32] tracking-[-0.005em]"
                    style={{ color: INK, fontVariationSettings: '"opsz" 36, "SOFT" 50' }}
                  >
                    {item.q}
                  </span>
                  <span
                    className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-full text-[18px] leading-none transition-transform duration-300 group-open:rotate-45"
                    style={{ background: "rgba(214,228,255,0.6)", color: INK }}
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 text-[14px] leading-[1.7]" style={{ color: SOFT }}>
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* ───────── FINAL CTA ───────── */}
        <section
          className="mt-36 rounded-[40px] px-8 py-16 text-center text-[#F7F4FF]"
          style={{
            background: "linear-gradient(160deg, #2E2A6B 0%, #26235A 100%)",
            boxShadow: "0 40px 80px -44px rgba(38,35,90,0.8)",
          }}
        >
          <h2
            className="mx-auto max-w-[16ch] text-balance font-[family-name:var(--font-fraunces)] text-[31px] leading-[1.12] tracking-[-0.01em]"
            style={{ fontVariationSettings: '"opsz" 144, "SOFT" 50' }}
          >
            {content.finalCta.headline}
          </h2>
          <button
            onClick={() => fd.onCta("final")}
            className="mt-9 inline-flex items-center justify-center gap-2.5 rounded-full px-9 py-4 text-[15px] font-medium transition hover:-translate-y-[1px]"
            style={{ background: "#F7F4FF", color: INK }}
          >
            {content.finalCta.ctaLabel}
            <span>→</span>
          </button>
        </section>

        {/* ───────── FAKE-DOOR ───────── */}
        {fd.showWaitlist && (
          <section
            id="waitlist"
            className="mt-12 rounded-[40px] px-7 py-11 ring-1 ring-white/70"
            style={{ background: "rgba(255,255,255,0.6)" }}
          >
            {fd.state === "done" ? (
              <div className="text-center">
                <p
                  className="font-[family-name:var(--font-fraunces)] text-[25px] leading-tight"
                  style={{ color: INK, fontVariationSettings: '"opsz" 72, "SOFT" 50' }}
                >
                  {content.confirmation.title}
                </p>
                <p
                  className="mx-auto mt-4 max-w-[34ch] text-[14.5px] leading-[1.7]"
                  style={{ color: SOFT }}
                >
                  {content.confirmation.body}
                </p>
              </div>
            ) : (
              <>
                <p
                  className="text-center font-[family-name:var(--font-fraunces)] text-[27px] italic leading-[1.15] tracking-[-0.01em]"
                  style={{ color: INK, fontVariationSettings: '"opsz" 72, "SOFT" 60' }}
                >
                  {fakedoor.title}
                </p>
                <p
                  className="mx-auto mt-4 max-w-[34ch] text-center text-[14.5px] leading-[1.7]"
                  style={{ color: SOFT }}
                >
                  {fakedoor.body}
                </p>
                <form onSubmit={fd.submit} className="mt-7 flex flex-col gap-3">
                  <input
                    type="email"
                    required
                    value={fd.email}
                    onChange={(e) => fd.setEmail(e.target.value)}
                    placeholder={fakedoor.emailPlaceholder}
                    className="w-full rounded-full border bg-white/70 px-6 py-4 text-[15px] focus:outline-none"
                    style={{ borderColor: "rgba(90,86,144,0.25)", color: INK }}
                  />
                  <button
                    type="submit"
                    disabled={fd.state === "loading"}
                    className="w-full rounded-full px-6 py-4 text-[15px] font-medium text-[#F7F4FF] disabled:opacity-60"
                    style={{ background: INK }}
                  >
                    {fd.state === "loading" ? "..." : fakedoor.submitLabel}
                  </button>
                  {fd.state === "error" && (
                    <p className="text-center text-[13px]" style={{ color: "#8A86D8" }}>
                      Something went wrong. Try again.
                    </p>
                  )}
                </form>
                <p className="mt-5 text-center text-[12px]" style={{ color: SOFT }}>
                  {fakedoor.privacyLine}
                </p>
              </>
            )}
          </section>
        )}

        {/* ───────── FOOTER ───────── */}
        <footer className="mt-24 text-center">
          <p
            className="font-[family-name:var(--font-fraunces)] text-[16px] italic"
            style={{ color: INK, fontVariationSettings: '"opsz" 36, "SOFT" 60' }}
          >
            {footer.lines[0]}
          </p>
          <p
            className="mt-4 text-[11px] uppercase tracking-[0.26em]"
            style={{ color: "#9C98D4" }}
          >
            {footer.lines.slice(1).join("  ·  ")}
          </p>
        </footer>
      </div>

      {/* Sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 px-6 pb-5">
        <button
          onClick={() => fd.onCta("sticky")}
          className="mx-auto flex w-full max-w-md items-center justify-center gap-2 rounded-full px-6 py-4 text-[15px] font-medium text-[#F7F4FF]"
          style={{ background: INK, boxShadow: "0 22px 48px -20px rgba(38,35,90,0.85)" }}
        >
          {hero.ctaLabel}
          <span>→</span>
        </button>
      </div>
    </main>
  );
}
