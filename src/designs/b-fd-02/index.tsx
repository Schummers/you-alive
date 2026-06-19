"use client";

import Image from "next/image";
import { Fraunces, IBM_Plex_Sans, Spline_Sans_Mono } from "next/font/google";
import type { DesignProps } from "@/designs/types";
import { useFakeDoor } from "@/designs/shared/useFakeDoor";

// Direction: DENSE BENTO. Sharp 0px corners, a modular grid of tightly packed
// cards, maximum information density. The tender, dreamlike mood is carried by
// the lavender→periwinkle mesh and the typography, never by roundness.
//   Fraunces — a characterful optical serif for the contemplative voice (display
//     + soft italics), deliberately distinct from a-fd-09's Newsreader.
//   IBM Plex Sans — a precise humanist grotesque for body, at home in a grid.
//   Spline Sans Mono — ledger-like meta labels: prices, indices, section tags,
//     giving the bento its quiet "vault" precision.
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT", "WONK"],
  style: ["normal", "italic"],
  display: "swap",
});

const plex = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-plex",
  weight: ["400", "500", "600"],
  display: "swap",
});

const mono = Spline_Sans_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export default function DenseBentoDesign({ content, slug }: DesignProps) {
  const fd = useFakeDoor(slug);
  const { hero, problem, solution, pricing, testimonials, faq, fakedoor, footer } =
    content;

  const tag =
    "font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.28em] text-[#5A5690]";
  const cell =
    "border border-[#26235A]/12 bg-white/55 backdrop-blur-[2px]";

  return (
    <main
      className={`${fraunces.variable} ${plex.variable} ${mono.variable} font-[family-name:var(--font-plex)] relative min-h-screen text-[#26235A] antialiased selection:bg-[#26235A] selection:text-[#F7F4FF]`}
    >
      {/* lavender → periwinkle mesh */}
      <div
        aria-hidden
        className="fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(120% 90% at 12% 4%, #F7F4FF 0%, #F3ECFF 32%, #EBE6FF 58%, #D6E4FF 100%), radial-gradient(80% 60% at 92% 22%, #D6E4FF 0%, rgba(214,228,255,0) 60%), radial-gradient(70% 70% at 78% 96%, #F3ECFF 0%, rgba(243,236,255,0) 55%)",
        }}
      />

      <div className="relative mx-auto max-w-md px-4 pb-32 pt-4">
        {/* ───────── NAV ───────── */}
        <nav className="flex items-center justify-between border border-[#26235A]/15 bg-white/40 px-4 py-2.5 backdrop-blur-[2px]">
          <span className="font-[family-name:var(--font-fraunces)] text-[16px] italic tracking-[-0.01em] text-[#26235A]">
            {hero.brandLockup}
          </span>
          <span className={tag}>est. legacy</span>
        </nav>

        {/* ───────── HERO BENTO ───────── */}
        <section className="mt-3 grid grid-cols-2 gap-[1px] bg-[#26235A]/12">
          {/* hero photo — wordmark already baked in, no overlay */}
          <div className="relative col-span-2 aspect-[16/13] w-full bg-white">
            <Image
              src="/designs/b/hero.jpeg"
              alt=""
              fill
              priority
              sizes="(max-width: 768px) 100vw, 450px"
              className="object-cover"
            />
          </div>

          <div className="col-span-2 bg-[#26235A] px-5 py-7 text-[#F7F4FF]">
            <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.28em] text-[#bcb6ff]">
              01 / for those still here
            </span>
            <h1 className="mt-3 font-[family-name:var(--font-fraunces)] text-[30px] leading-[1.06] tracking-[-0.02em]">
              {hero.title}
            </h1>
          </div>

          <p className="col-span-2 bg-white/70 px-5 py-5 text-[14px] leading-[1.55] text-[#3a3670]">
            {hero.subtitle}
          </p>

          <button
            onClick={() => fd.onCta("hero")}
            className="col-span-1 bg-[#5A5690] px-4 py-5 text-left text-[14px] font-semibold text-[#F7F4FF] transition-colors hover:bg-[#4a4680]"
          >
            {hero.ctaLabel}
            <span className="float-right">↗</span>
          </button>
          <div className="col-span-1 flex items-center bg-white/55 px-4 py-5">
            <p className="text-[11.5px] leading-[1.4] text-[#5A5690]">
              {hero.reassuranceLine}
            </p>
          </div>
        </section>

        {/* ───────── PROBLEM ───────── */}
        <section className={`mt-3 ${cell} px-5 py-7`}>
          <span className={tag}>02 / the quiet problem</span>
          <h2 className="mt-3 font-[family-name:var(--font-fraunces)] text-[22px] italic leading-[1.2] tracking-[-0.01em] text-[#26235A]">
            {problem.title}
          </h2>
          <p className="mt-4 text-[13.5px] leading-[1.6] text-[#3a3670]">
            {problem.body}
          </p>
        </section>

        {/* ───────── SOLUTION ───────── */}
        <section className="mt-3">
          <div className={`${cell} px-5 py-4`}>
            <span className={tag}>03 / {solution.intro}</span>
          </div>
          <div className="mt-[1px] grid grid-cols-1 gap-[1px] bg-[#26235A]/12">
            {solution.steps.map((s, i) => (
              <div key={i} className="grid grid-cols-[auto_1fr] gap-4 bg-white/60 px-5 py-6">
                <span className="font-[family-name:var(--font-fraunces)] text-[34px] italic leading-none text-[#5A5690]/55">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-[family-name:var(--font-fraunces)] text-[16px] leading-[1.25] tracking-[-0.005em] text-[#26235A]">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-[1.55] text-[#3a3670]">
                    {s.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ───────── PRICING ───────── */}
        <section ref={fd.pricingRef} className="mt-3">
          <div className={`${cell} px-5 py-7`}>
            <span className={tag}>04 / membership</span>
            <h2 className="mt-3 font-[family-name:var(--font-fraunces)] text-[21px] leading-[1.16] tracking-[-0.01em] text-[#26235A]">
              {pricing.title}
            </h2>
            <p className="mt-3 text-[13px] leading-[1.55] text-[#5A5690]">
              {pricing.subtitle}
            </p>
          </div>

          {/* plans */}
          <div className="mt-3 grid grid-cols-2 gap-[1px] bg-[#26235A]/12">
            {pricing.plans.map((plan, i) => (
              <div
                key={i}
                className={
                  plan.highlight
                    ? "relative flex flex-col bg-[#26235A] px-5 py-6 text-[#F7F4FF]"
                    : "relative flex flex-col bg-white/65 px-5 py-6 text-[#26235A]"
                }
              >
                {plan.highlight && (
                  <span className="absolute right-0 top-0 bg-[#5A5690] px-2 py-1 font-[family-name:var(--font-mono)] text-[8.5px] uppercase tracking-[0.18em] text-[#F7F4FF]">
                    most chosen
                  </span>
                )}
                <span
                  className={`font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.22em] ${
                    plan.highlight ? "text-[#bcb6ff]" : "text-[#5A5690]"
                  }`}
                >
                  {plan.name}
                </span>
                <span className="mt-3 font-[family-name:var(--font-fraunces)] text-[26px] leading-none tracking-[-0.01em]">
                  {plan.price}
                </span>
                <span
                  className={`mt-2 text-[11.5px] leading-[1.35] ${
                    plan.highlight ? "text-[#bcb6ff]" : "text-[#5A5690]"
                  }`}
                >
                  {plan.descriptor}
                </span>
                <button
                  onClick={() => fd.onCta(`pricing-${plan.name.toLowerCase()}`)}
                  className={
                    plan.highlight
                      ? "mt-5 bg-[#F7F4FF] px-3 py-2.5 text-[12.5px] font-semibold text-[#26235A] transition-colors hover:bg-white"
                      : "mt-5 bg-[#26235A] px-3 py-2.5 text-[12.5px] font-semibold text-[#F7F4FF] transition-colors hover:bg-[#36316f]"
                  }
                >
                  {plan.ctaLabel}
                </button>
              </div>
            ))}
          </div>

          {/* included — tight 2-col grid of cells */}
          <div className="mt-3">
            <div className={`${cell} px-5 py-3`}>
              <span className={tag}>everything included</span>
            </div>
            <div className="mt-[1px] grid grid-cols-2 gap-[1px] bg-[#26235A]/12">
              {pricing.included.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2 bg-white/55 px-4 py-3.5 text-[12px] leading-[1.3] text-[#3a3670]"
                >
                  <span className="font-[family-name:var(--font-mono)] text-[10px] text-[#5A5690]">
                    +
                  </span>
                  {feature}
                </div>
              ))}
            </div>
          </div>

          <p className="mt-3 border border-[#26235A]/12 bg-white/40 px-5 py-3.5 text-[11.5px] leading-[1.5] text-[#5A5690]">
            {pricing.scarcityLine}
          </p>
        </section>

        {/* ───────── TESTIMONIALS ───────── */}
        <section className="mt-3">
          <div className={`${cell} px-5 py-3`}>
            <span className={tag}>05 / from those who started</span>
          </div>
          <div className="mt-[1px] grid grid-cols-1 gap-[1px] bg-[#26235A]/12">
            {testimonials.map((t, i) => (
              <figure key={i} className="bg-white/60 px-5 py-6">
                <blockquote className="font-[family-name:var(--font-fraunces)] text-[16px] italic leading-[1.4] tracking-[-0.005em] text-[#26235A]">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-[#5A5690]">
                  {t.name} · {t.age}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ───────── FAQ ───────── */}
        <section className="mt-3">
          <div className={`${cell} px-5 py-3`}>
            <span className={tag}>06 / questions you might have</span>
          </div>
          <div className="mt-[1px] grid grid-cols-1 gap-[1px] bg-[#26235A]/12">
            {faq.map((item, i) => (
              <details key={i} className="group bg-white/60 px-5 py-4 open:bg-white/80">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-3">
                  <span className="font-[family-name:var(--font-fraunces)] text-[15px] leading-[1.3] tracking-[-0.005em] text-[#26235A]">
                    {item.q}
                  </span>
                  <span className="mt-0.5 font-[family-name:var(--font-mono)] text-[15px] leading-none text-[#5A5690] transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-[13px] leading-[1.6] text-[#3a3670]">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* ───────── FINAL CTA ───────── */}
        <section className="mt-3 bg-[#26235A] px-6 py-12 text-center text-[#F7F4FF]">
          <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.28em] text-[#bcb6ff]">
            07 / one quiet step
          </span>
          <h2 className="mx-auto mt-4 max-w-[15ch] font-[family-name:var(--font-fraunces)] text-[26px] leading-[1.12] tracking-[-0.01em]">
            {content.finalCta.headline}
          </h2>
          <button
            onClick={() => fd.onCta("final")}
            className="mt-7 w-full bg-[#F7F4FF] px-6 py-3.5 text-[14px] font-semibold text-[#26235A] transition-colors hover:bg-white"
          >
            {content.finalCta.ctaLabel}
          </button>
        </section>

        {/* ───────── FAKE-DOOR ───────── */}
        {fd.showWaitlist && (
          <section
            id="waitlist"
            className="mt-3 border border-[#26235A]/15 bg-white/70 px-5 py-9 backdrop-blur-[2px]"
          >
            {fd.state === "done" ? (
              <div className="text-center">
                <p className="font-[family-name:var(--font-fraunces)] text-[22px] leading-tight text-[#26235A]">
                  {content.confirmation.title}
                </p>
                <p className="mx-auto mt-4 max-w-[34ch] text-[13.5px] leading-[1.6] text-[#3a3670]">
                  {content.confirmation.body}
                </p>
              </div>
            ) : (
              <>
                <span className={`${tag} block text-center`}>reserve your spot</span>
                <p className="mt-3 text-center font-[family-name:var(--font-fraunces)] text-[24px] italic leading-[1.15] tracking-[-0.01em] text-[#26235A]">
                  {fakedoor.title}
                </p>
                <p className="mx-auto mt-3 max-w-[34ch] text-center text-[13.5px] leading-[1.6] text-[#3a3670]">
                  {fakedoor.body}
                </p>
                <form onSubmit={fd.submit} className="mt-6 flex flex-col gap-[1px] bg-[#26235A]/12">
                  <input
                    type="email"
                    required
                    value={fd.email}
                    onChange={(e) => fd.setEmail(e.target.value)}
                    placeholder={fakedoor.emailPlaceholder}
                    className="w-full bg-[#F7F4FF] px-5 py-4 text-[14px] text-[#26235A] placeholder:text-[#9a96c4] focus:outline-none"
                  />
                  <button
                    type="submit"
                    disabled={fd.state === "loading"}
                    className="w-full bg-[#26235A] px-5 py-4 text-[14px] font-semibold text-[#F7F4FF] disabled:opacity-60"
                  >
                    {fd.state === "loading" ? "…" : fakedoor.submitLabel}
                  </button>
                </form>
                {fd.state === "error" && (
                  <p className="mt-3 text-center text-[12.5px] text-[#5A5690]">
                    Something went wrong. Try again.
                  </p>
                )}
                <p className="mt-4 text-center text-[11.5px] text-[#5A5690]">
                  {fakedoor.privacyLine}
                </p>
              </>
            )}
          </section>
        )}

        {/* ───────── FOOTER ───────── */}
        <footer className="mt-3 border border-[#26235A]/12 bg-white/40 px-5 py-7 text-center">
          <p className="font-[family-name:var(--font-fraunces)] text-[15px] italic text-[#26235A]">
            {footer.lines[0]}
          </p>
          <p className="mt-3 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-[#5A5690]">
            {footer.lines.slice(1).join("  ·  ")}
          </p>
        </footer>
      </div>

      {/* sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 mx-auto max-w-md px-4 pb-4">
        <button
          onClick={() => fd.onCta("sticky")}
          className="flex w-full items-center justify-between gap-2 border border-[#F7F4FF]/15 bg-[#26235A] px-5 py-4 text-[14px] font-semibold text-[#F7F4FF] shadow-[0_18px_40px_-18px_rgba(38,35,90,0.85)]"
        >
          {hero.ctaLabel}
          <span>↗</span>
        </button>
      </div>
    </main>
  );
}
