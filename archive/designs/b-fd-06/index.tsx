"use client";

import Image from "next/image";
import { Fraunces, Spectral } from "next/font/google";
import type { DesignProps } from "@/designs/types";
import { useFakeDoor } from "@/designs/shared/useFakeDoor";

// Direction: EDITORIAL MAGAZINE. A tender print-feature reading adapted to
// mobile — multi-column feel, asymmetry, thin filets/rules, drop caps and
// pull-quotes. Fraunces (soft, literary display serif with optical sizing +
// italics) carries the contemplative voice; Spectral (a refined screen serif)
// sets the body in a calm reading column. Lavender→periwinkle mesh paper,
// ink-indigo type, a single periwinkle accent. Quiet dignity over decoration.
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

export default function EditorialMagazineDesign({ content, slug }: DesignProps) {
  const fd = useFakeDoor(slug);
  const { hero, problem, solution, pricing, testimonials, faq, fakedoor, footer } = content;

  return (
    <main
      className={`${fraunces.variable} ${spectral.variable} font-[family-name:var(--font-spectral)] relative min-h-screen overflow-hidden text-[#26235A] antialiased selection:bg-[#5A5690] selection:text-[#F7F4FF]`}
      style={{
        backgroundColor: "#F3ECFF",
        backgroundImage: [
          "radial-gradient(120% 80% at 8% -6%, #EBE6FF 0%, rgba(235,230,255,0) 55%)",
          "radial-gradient(95% 70% at 105% 18%, #D6E4FF 0%, rgba(214,228,255,0) 52%)",
          "radial-gradient(120% 90% at 50% 118%, #F3ECFF 0%, rgba(243,236,255,0) 60%)",
          "linear-gradient(180deg, #F7F4FF 0%, #EFEAFF 100%)",
        ].join(", "),
      }}
    >
      <div className="relative mx-auto max-w-md px-6 pb-40">
        {/* ───────── MASTHEAD ───────── */}
        <header className="flex items-center justify-between border-b border-[#26235A]/15 pb-3 pt-7">
          <span className="font-[family-name:var(--font-fraunces)] text-[15px] italic tracking-tight text-[#26235A]">
            {hero.brandLockup}
          </span>
          <span className="text-[9px] uppercase tracking-[0.42em] text-[#5A5690]">
            A quiet feature
          </span>
        </header>

        {/* ───────── HERO ───────── */}
        <section className="pt-7">
          <div className="flex items-center gap-3">
            <span className="h-px flex-1 bg-[#26235A]/20" />
            <span className="text-[9px] uppercase tracking-[0.4em] text-[#5A5690]">
              Issue No.01 · Legacy
            </span>
            <span className="h-px flex-1 bg-[#26235A]/20" />
          </div>

          <h1 className="mt-7 text-balance font-[family-name:var(--font-fraunces)] text-[40px] font-light leading-[1.04] tracking-[-0.015em] text-[#26235A]">
            {hero.title}
          </h1>

          <p className="mt-6 max-w-[40ch] font-[family-name:var(--font-spectral)] text-[16px] font-light leading-[1.7] text-[#3d3a6e]">
            {hero.subtitle}
          </p>

          <div className="mt-8 overflow-hidden rounded-[4px] border border-[#26235A]/10 shadow-[0_30px_70px_-44px_rgba(38,35,90,0.55)]">
            <div className="relative aspect-[9/16] w-full">
              <Image
                src="/designs/b/hero.jpeg"
                alt=""
                fill
                priority
                sizes="(max-width: 768px) 100vw, 450px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-8 flex flex-col items-start gap-4">
            <button
              onClick={() => fd.onCta("hero")}
              className="group inline-flex items-center gap-3 border-b border-[#26235A] pb-1 font-[family-name:var(--font-fraunces)] text-[18px] italic text-[#26235A] transition-colors hover:text-[#5A5690]"
            >
              {hero.ctaLabel}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
            <p className="flex items-center gap-2 text-[12.5px] font-light italic text-[#5A5690]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#5A5690]" />
              {hero.reassuranceLine}
            </p>
          </div>
        </section>

        {/* ───────── PROBLEM ───────── */}
        <section className="mt-24">
          <div className="flex items-baseline justify-between border-b border-[#26235A]/15 pb-2">
            <span className="text-[9px] uppercase tracking-[0.4em] text-[#5A5690]">
              The matter at hand
            </span>
            <span className="font-[family-name:var(--font-fraunces)] text-[13px] italic text-[#5A5690]">
              i
            </span>
          </div>

          <h2 className="mt-7 text-balance font-[family-name:var(--font-fraunces)] text-[27px] font-light leading-[1.2] tracking-[-0.01em] text-[#26235A]">
            {problem.title}
          </h2>

          <p className="mt-6 font-[family-name:var(--font-spectral)] text-[16px] font-light leading-[1.78] text-[#3d3a6e] [&:first-letter]:float-left [&:first-letter]:mr-3 [&:first-letter]:mt-1.5 [&:first-letter]:font-[family-name:var(--font-fraunces)] [&:first-letter]:text-[62px] [&:first-letter]:font-normal [&:first-letter]:leading-[0.78] [&:first-letter]:text-[#5A5690]">
            {problem.body}
          </p>
        </section>

        {/* ───────── SOLUTION ───────── */}
        <section className="mt-24">
          <div className="flex items-baseline justify-between border-b border-[#26235A]/15 pb-2">
            <span className="text-[9px] uppercase tracking-[0.4em] text-[#5A5690]">
              {solution.intro}
            </span>
            <span className="font-[family-name:var(--font-fraunces)] text-[13px] italic text-[#5A5690]">
              ii
            </span>
          </div>

          <ol className="mt-9 space-y-10">
            {solution.steps.map((s, i) => (
              <li
                key={i}
                className="grid grid-cols-[auto_1fr] gap-x-5 border-l border-[#26235A]/12 pl-5"
              >
                <span className="font-[family-name:var(--font-fraunces)] text-[44px] font-light leading-none text-[#5A5690]/55">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="pt-1">
                  <h3 className="font-[family-name:var(--font-fraunces)] text-[20px] font-normal leading-[1.28] tracking-[-0.005em] text-[#26235A]">
                    {s.title}
                  </h3>
                  <p className="mt-3 font-[family-name:var(--font-spectral)] text-[14.5px] font-light leading-[1.72] text-[#3d3a6e]">
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* ───────── PULL-QUOTE ───────── */}
        <section className="mt-24 border-y border-[#26235A]/15 py-12 text-center">
          <p className="font-[family-name:var(--font-fraunces)] text-[26px] font-light italic leading-[1.32] tracking-[-0.01em] text-[#26235A]">
            &ldquo;The kindest thing you&rsquo;ll ever leave behind.&rdquo;
          </p>
        </section>

        {/* ───────── PRICING ───────── */}
        <section ref={fd.pricingRef} className="mt-24">
          <div className="flex items-baseline justify-between border-b border-[#26235A]/15 pb-2">
            <span className="text-[9px] uppercase tracking-[0.4em] text-[#5A5690]">
              Membership
            </span>
            <span className="font-[family-name:var(--font-fraunces)] text-[13px] italic text-[#5A5690]">
              iii
            </span>
          </div>

          <h2 className="mt-7 text-balance font-[family-name:var(--font-fraunces)] text-[26px] font-light leading-[1.2] tracking-[-0.01em] text-[#26235A]">
            {pricing.title}
          </h2>
          <p className="mt-5 max-w-[42ch] font-[family-name:var(--font-spectral)] text-[15px] font-light leading-[1.72] text-[#3d3a6e]">
            {pricing.subtitle}
          </p>

          <div className="mt-9 space-y-5">
            {pricing.plans.map((plan, i) => (
              <div
                key={i}
                className={
                  plan.highlight
                    ? "relative rounded-[4px] bg-[#26235A] px-6 py-7 text-[#F7F4FF] shadow-[0_28px_60px_-38px_rgba(38,35,90,0.8)]"
                    : "relative rounded-[4px] border border-[#26235A]/15 bg-[#F7F4FF]/45 px-6 py-7 text-[#26235A]"
                }
              >
                {plan.highlight && (
                  <span className="absolute right-5 top-6 text-[9px] uppercase tracking-[0.3em] text-[#bcb6e8]">
                    Editor&rsquo;s choice
                  </span>
                )}
                <p
                  className={`font-[family-name:var(--font-fraunces)] text-[15px] italic ${
                    plan.highlight ? "text-[#bcb6e8]" : "text-[#5A5690]"
                  }`}
                >
                  {plan.name}
                </p>
                <p className="mt-2 font-[family-name:var(--font-fraunces)] text-[38px] font-light leading-none tracking-[-0.01em]">
                  {plan.price}
                </p>
                <p
                  className={`mt-3 font-[family-name:var(--font-spectral)] text-[13px] font-light ${
                    plan.highlight ? "text-[#cdc8ef]" : "text-[#5A5690]"
                  }`}
                >
                  {plan.descriptor}
                </p>
                <button
                  onClick={() => fd.onCta(`pricing-${plan.name.toLowerCase()}`)}
                  className={
                    plan.highlight
                      ? "group mt-6 inline-flex items-center gap-2 border-b border-[#F7F4FF]/70 pb-1 font-[family-name:var(--font-fraunces)] text-[17px] italic text-[#F7F4FF] transition-colors hover:border-[#F7F4FF]"
                      : "group mt-6 inline-flex items-center gap-2 border-b border-[#26235A] pb-1 font-[family-name:var(--font-fraunces)] text-[17px] italic text-[#26235A] transition-colors hover:text-[#5A5690]"
                  }
                >
                  {plan.ctaLabel}
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </button>
              </div>
            ))}
          </div>

          <div className="mt-9 border-t border-[#26235A]/15 pt-7">
            <p className="text-center text-[9px] uppercase tracking-[0.36em] text-[#5A5690]">
              Everything included
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-x-5 gap-y-3">
              {pricing.included.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-baseline gap-2.5 font-[family-name:var(--font-spectral)] text-[13.5px] font-light text-[#3d3a6e]"
                >
                  <span className="font-[family-name:var(--font-fraunces)] text-[12px] italic text-[#5A5690]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-8 max-w-[40ch] font-[family-name:var(--font-spectral)] text-[12.5px] font-light italic leading-[1.65] text-[#5A5690]">
            {pricing.scarcityLine}
          </p>
        </section>

        {/* ───────── TESTIMONIALS ───────── */}
        <section className="mt-24">
          <div className="flex items-baseline justify-between border-b border-[#26235A]/15 pb-2">
            <span className="text-[9px] uppercase tracking-[0.4em] text-[#5A5690]">
              Voices
            </span>
            <span className="font-[family-name:var(--font-fraunces)] text-[13px] italic text-[#5A5690]">
              iv
            </span>
          </div>

          <div className="mt-9 space-y-9">
            {testimonials.map((t, i) => (
              <figure
                key={i}
                className={i > 0 ? "border-t border-[#26235A]/10 pt-9" : ""}
              >
                <blockquote className="font-[family-name:var(--font-fraunces)] text-[20px] font-light leading-[1.45] tracking-[-0.005em] text-[#26235A]">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-4 flex items-center gap-3 text-[10px] uppercase tracking-[0.26em] text-[#5A5690]">
                  <span className="h-px w-6 bg-[#5A5690]/50" />
                  {t.name}, {t.age}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ───────── FAQ ───────── */}
        <section className="mt-24">
          <div className="flex items-baseline justify-between border-b border-[#26235A]/15 pb-2">
            <span className="text-[9px] uppercase tracking-[0.4em] text-[#5A5690]">
              Particulars
            </span>
            <span className="font-[family-name:var(--font-fraunces)] text-[13px] italic text-[#5A5690]">
              v
            </span>
          </div>

          <div className="mt-3">
            {faq.map((item, i) => (
              <details key={i} className="group border-b border-[#26235A]/12 py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                  <span className="font-[family-name:var(--font-fraunces)] text-[17px] font-normal leading-[1.32] tracking-[-0.005em] text-[#26235A]">
                    {item.q}
                  </span>
                  <span className="mt-1 font-[family-name:var(--font-fraunces)] text-[20px] italic leading-none text-[#5A5690] transition-transform duration-300 group-open:rotate-90">
                    →
                  </span>
                </summary>
                <p className="mt-4 max-w-[44ch] font-[family-name:var(--font-spectral)] text-[14px] font-light leading-[1.72] text-[#3d3a6e]">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* ───────── FINAL CTA ───────── */}
        <section className="mt-24 rounded-[4px] bg-[#26235A] px-8 py-16 text-center text-[#F7F4FF]">
          <span className="text-[9px] uppercase tracking-[0.4em] text-[#bcb6e8]">
            Colophon
          </span>
          <h2 className="mx-auto mt-6 max-w-[16ch] text-balance font-[family-name:var(--font-fraunces)] text-[30px] font-light leading-[1.16] tracking-[-0.01em]">
            {content.finalCta.headline}
          </h2>
          <button
            onClick={() => fd.onCta("final")}
            className="group mt-8 inline-flex items-center gap-2 border-b border-[#F7F4FF]/70 pb-1 font-[family-name:var(--font-fraunces)] text-[19px] italic text-[#F7F4FF] transition-colors hover:border-[#F7F4FF]"
          >
            {content.finalCta.ctaLabel}
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </button>
        </section>

        {/* ───────── FAKE-DOOR ───────── */}
        {fd.showWaitlist && (
          <section
            id="waitlist"
            className="mt-12 rounded-[4px] border border-[#26235A]/15 bg-[#F7F4FF]/60 px-7 py-10"
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
                  <input
                    type="email"
                    required
                    value={fd.email}
                    onChange={(e) => fd.setEmail(e.target.value)}
                    placeholder={fakedoor.emailPlaceholder}
                    className="w-full rounded-[4px] border border-[#26235A]/20 bg-[#F7F4FF] px-5 py-3.5 font-[family-name:var(--font-spectral)] text-[15px] text-[#26235A] placeholder:text-[#9590c4] focus:border-[#26235A] focus:outline-none"
                  />
                  <button
                    type="submit"
                    disabled={fd.state === "loading"}
                    className="w-full rounded-[4px] bg-[#26235A] px-6 py-3.5 font-[family-name:var(--font-fraunces)] text-[16px] italic text-[#F7F4FF] transition-opacity disabled:opacity-60"
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
          <p className="font-[family-name:var(--font-fraunces)] text-[16px] font-light italic text-[#26235A]">
            {footer.lines[0]}
          </p>
          <p className="mt-4 text-[10px] uppercase tracking-[0.26em] text-[#5A5690]">
            {footer.lines.slice(1).join("  ·  ")}
          </p>
        </footer>
      </div>
    </main>
  );
}
