"use client";

import Image from "next/image";
import { Spectral, Archivo } from "next/font/google";
import type { DesignProps } from "@/designs/types";
import { useFakeDoor } from "@/designs/shared/useFakeDoor";

// ── Direction: "The Sealed Archive" ─────────────────────────────────────────
// A calm, sacred dark-mode page. Deep midnight ink, warm parchment type, a
// single luminous amber accent like candlelight. The metaphor is a sealed
// letter that glows — something carefully kept, opened only when it must be.
// Display + lyrical body: Spectral (literary transitional serif). Structure,
// labels, numbers: Archivo (precise grotesque). Hairline rules, ledger steps.
const spectral = Spectral({
  subsets: ["latin"],
  variable: "--font-spectral",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["400", "500", "600"],
  display: "swap",
});

export default function SealedArchiveDesign({ content, slug }: DesignProps) {
  const fd = useFakeDoor(slug);
  const { hero, problem, solution, pricing, testimonials, faq, fakedoor, footer } =
    content;

  const ink = "#0C1115";
  const amber = "#D9A05B";

  return (
    <main
      className={`${spectral.variable} ${archivo.variable} relative min-h-screen overflow-hidden text-[#E9E1D2]`}
      style={{
        backgroundColor: ink,
        fontFamily: "var(--font-archivo), ui-sans-serif, system-ui",
      }}
    >
      {/* Atmospheric glow — a single candle of light, top-right */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(120% 70% at 85% -5%, rgba(217,160,91,0.18), transparent 55%), radial-gradient(90% 60% at 0% 100%, rgba(217,160,91,0.06), transparent 60%)",
        }}
      />
      {/* Grain */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.05] mix-blend-screen"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative z-10 mx-auto max-w-md px-6 pb-36">
        {/* ───────── HERO ───────── */}
        <header className="-mx-6">
          <div className="relative h-[72vh] min-h-[540px] w-full overflow-hidden">
            <Image
              src="/designs/a/hero.jpeg"
              alt=""
              fill
              priority
              sizes="(max-width: 768px) 100vw, 450px"
              className="object-cover object-[60%_center] grayscale-[0.25]"
            />
            {/* fade photo into the ink */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(12,17,21,0.55) 0%, rgba(12,17,21,0.15) 30%, rgba(12,17,21,0.7) 80%, #0C1115 100%)",
              }}
            />
            {/* masthead */}
            <div className="absolute inset-x-0 top-0 flex items-center justify-between px-6 pt-7">
              <span className="font-[family-name:var(--font-spectral)] text-[15px] italic tracking-tight text-[#E9E1D2]">
                You&nbsp;Alive
              </span>
              <span className="text-[9px] uppercase tracking-[0.34em] text-[#E9E1D2]/70">
                The Archive
              </span>
            </div>
          </div>

          {/* Subtitle + CTA, sitting on the ink just below the photo */}
          <section className="-mt-6 px-6">
            <div
              aria-hidden
              className="mb-7 h-px w-full"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(217,160,91,0.55), transparent)",
              }}
            />
            <p className="font-[family-name:var(--font-spectral)] text-[21px] font-light leading-[1.45] text-[#E9E1D2]/90">
              {hero.subtitle}
            </p>

            <button
              onClick={() => fd.onCta("hero")}
              className="group mt-8 inline-flex w-full items-center justify-between gap-3 rounded-sm border border-[#D9A05B]/45 bg-[#D9A05B] px-7 py-4 text-[14px] font-medium uppercase tracking-[0.14em] text-[#0C1115] transition-all duration-300 hover:bg-[#e6b274]"
            >
              {hero.ctaLabel}
              <span className="transition-transform group-hover:translate-x-1">
                &rarr;
              </span>
            </button>

            <p className="mt-5 flex items-center gap-3 text-[12px] tracking-wide text-[#E9E1D2]/55">
              <span className="inline-block h-1 w-1 rounded-full bg-[#D9A05B]" />
              {hero.reassuranceLine}
            </p>
          </section>
        </header>

        {/* ───────── PROBLEM ───────── */}
        <section className="mt-28">
          <p className="mb-6 text-[10px] uppercase tracking-[0.34em] text-[#D9A05B]">
            I &middot; The silence after
          </p>
          <h2 className="text-balance font-[family-name:var(--font-spectral)] text-[31px] font-light leading-[1.1] tracking-[-0.01em] text-[#E9E1D2]">
            {problem.title}
          </h2>
          <p className="mt-6 text-[15px] leading-[1.65] text-[#E9E1D2]/65">
            {problem.body}
          </p>
        </section>

        {/* ───────── SOLUTION ───────── */}
        <section className="mt-28">
          <p className="mb-6 text-[10px] uppercase tracking-[0.34em] text-[#D9A05B]">
            II &middot; {solution.intro}
          </p>

          <ol className="space-y-px overflow-hidden rounded-sm border border-[#E9E1D2]/10">
            {solution.steps.map((s, i) => (
              <li
                key={i}
                className="bg-[#11181D] px-6 py-7"
                style={{
                  boxShadow: "inset 0 1px 0 rgba(233,225,210,0.05)",
                }}
              >
                <div className="flex items-baseline gap-4">
                  <span
                    className="font-[family-name:var(--font-spectral)] text-[40px] font-light italic leading-none text-[#D9A05B]"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-[family-name:var(--font-spectral)] text-[19px] font-normal leading-[1.25] text-[#E9E1D2]">
                    {s.title}
                  </h3>
                </div>
                <p className="mt-4 text-[14px] leading-[1.6] text-[#E9E1D2]/60">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* ───────── PRICING (sealed envelope card) ───────── */}
        <section ref={fd.pricingRef} className="mt-28">
          <p className="mb-6 text-[10px] uppercase tracking-[0.34em] text-[#D9A05B]">
            III &middot; Membership
          </p>
          <h2 className="text-balance font-[family-name:var(--font-spectral)] text-[28px] font-light leading-[1.12] tracking-[-0.01em] text-[#E9E1D2]">
            {pricing.title}
          </h2>
          <p className="mt-4 text-[14.5px] leading-[1.6] text-[#E9E1D2]/60">
            {pricing.subtitle}
          </p>

          <div className="mt-9 grid gap-4">
            {pricing.plans.map((plan, i) => {
              const hot = plan.highlight;
              return (
                <div
                  key={i}
                  className={`relative overflow-hidden rounded-sm p-6 ${
                    hot
                      ? "border border-[#D9A05B]/60 bg-[#16110A]"
                      : "border border-[#E9E1D2]/12 bg-[#11181D]"
                  }`}
                >
                  {hot && (
                    <div
                      aria-hidden
                      className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#D9A05B]/25 blur-2xl"
                    />
                  )}
                  <div className="relative flex items-baseline justify-between">
                    <span className="text-[11px] uppercase tracking-[0.2em] text-[#E9E1D2]/70">
                      {plan.name}
                    </span>
                    {hot && (
                      <span className="rounded-full border border-[#D9A05B]/50 px-2.5 py-0.5 text-[9px] uppercase tracking-[0.18em] text-[#D9A05B]">
                        Sealed best
                      </span>
                    )}
                  </div>
                  <div className="relative mt-3 font-[family-name:var(--font-spectral)] text-[34px] font-light leading-none text-[#E9E1D2]">
                    {plan.price}
                  </div>
                  <p className="relative mt-2 font-[family-name:var(--font-spectral)] text-[13px] italic text-[#D9A05B]/90">
                    {plan.descriptor}
                  </p>
                  <button
                    onClick={() => fd.onCta(hot ? "pricing" : "pricing-alt")}
                    className={`relative mt-5 inline-flex w-full items-center justify-center gap-2 rounded-sm px-6 py-3.5 text-[13px] font-medium uppercase tracking-[0.14em] transition-colors ${
                      hot
                        ? "bg-[#D9A05B] text-[#0C1115] hover:bg-[#e6b274]"
                        : "border border-[#E9E1D2]/25 text-[#E9E1D2] hover:border-[#E9E1D2]/50"
                    }`}
                  >
                    {plan.ctaLabel}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Included — ledger list */}
          <ul className="mt-8 grid grid-cols-2 gap-x-5 gap-y-3">
            {pricing.included.map((feat, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-[13px] leading-[1.35] text-[#E9E1D2]/75"
              >
                <span className="mt-[3px] text-[#D9A05B]">&#43;</span>
                {feat}
              </li>
            ))}
          </ul>

          <p className="mt-7 border-t border-[#E9E1D2]/10 pt-5 text-center text-[12px] text-[#E9E1D2]/50">
            {pricing.scarcityLine}
          </p>
        </section>

        {/* ───────── TESTIMONIALS ───────── */}
        <section className="mt-28">
          <p className="mb-7 text-[10px] uppercase tracking-[0.34em] text-[#D9A05B]">
            IV &middot; Those who began
          </p>
          <div className="space-y-9">
            {testimonials.map((t, i) => (
              <figure
                key={i}
                className="border-l border-[#D9A05B]/40 pl-5"
              >
                <blockquote className="font-[family-name:var(--font-spectral)] text-[18px] font-light italic leading-[1.45] text-[#E9E1D2]/90">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-3 text-[11px] uppercase tracking-[0.2em] text-[#E9E1D2]/50">
                  {t.name} &middot; {t.age}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ───────── FAQ ───────── */}
        <section className="mt-28">
          <p className="mb-4 text-[10px] uppercase tracking-[0.34em] text-[#D9A05B]">
            V &middot; Before you decide
          </p>
          <div className="divide-y divide-[#E9E1D2]/10 border-y border-[#E9E1D2]/10">
            {faq.map((item, i) => (
              <details key={i} className="group py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                  <span className="font-[family-name:var(--font-spectral)] text-[16.5px] font-normal leading-[1.3] text-[#E9E1D2]">
                    {item.q}
                  </span>
                  <span className="mt-0.5 select-none text-[20px] leading-none text-[#D9A05B] transition-transform duration-300 group-open:rotate-45">
                    &#43;
                  </span>
                </summary>
                <p className="mt-3 max-w-[40ch] text-[13.5px] leading-[1.6] text-[#E9E1D2]/60">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* ───────── FINAL CTA ───────── */}
        <section className="mt-28 text-center">
          <div
            aria-hidden
            className="mx-auto mb-8 h-px w-24"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(217,160,91,0.7), transparent)",
            }}
          />
          <h2 className="text-balance font-[family-name:var(--font-spectral)] text-[32px] font-light leading-[1.1] tracking-[-0.01em] text-[#E9E1D2]">
            {content.finalCta.headline}
          </h2>
          <button
            onClick={() => fd.onCta("final")}
            className="group mt-7 inline-flex items-center gap-3 rounded-sm bg-[#D9A05B] px-9 py-4 text-[14px] font-medium uppercase tracking-[0.14em] text-[#0C1115] transition-colors hover:bg-[#e6b274]"
          >
            {content.finalCta.ctaLabel}
            <span className="transition-transform group-hover:translate-x-1">
              &rarr;
            </span>
          </button>
        </section>

        {/* ───────── FAKE-DOOR ───────── */}
        {fd.showWaitlist && (
          <section
            id="waitlist"
            className="mt-24 overflow-hidden rounded-sm border border-[#D9A05B]/30 bg-[#11181D] px-7 py-9"
          >
            {fd.state === "done" ? (
              <div className="text-center">
                <p className="font-[family-name:var(--font-spectral)] text-[24px] font-light italic leading-tight text-[#E9E1D2]">
                  {content.confirmation.title}
                </p>
                <p className="mt-3 text-[14px] leading-[1.6] text-[#E9E1D2]/65">
                  {content.confirmation.body}
                </p>
              </div>
            ) : (
              <>
                <p className="font-[family-name:var(--font-spectral)] text-[26px] font-light italic leading-[1.1] text-[#E9E1D2]">
                  {fakedoor.title}
                </p>
                <p className="mt-3 text-[14px] leading-[1.6] text-[#E9E1D2]/65">
                  {fakedoor.body}
                </p>
                <form onSubmit={fd.submit} className="mt-6 flex flex-col gap-3">
                  <input
                    type="email"
                    required
                    value={fd.email}
                    onChange={(e) => fd.setEmail(e.target.value)}
                    placeholder={fakedoor.emailPlaceholder}
                    className="w-full rounded-sm border border-[#E9E1D2]/20 bg-[#0C1115] px-5 py-3.5 text-[15px] text-[#E9E1D2] placeholder:text-[#E9E1D2]/40 focus:border-[#D9A05B] focus:outline-none"
                  />
                  <button
                    type="submit"
                    disabled={fd.state === "loading"}
                    className="w-full rounded-sm bg-[#D9A05B] px-6 py-3.5 text-[13px] font-medium uppercase tracking-[0.14em] text-[#0C1115] transition-colors hover:bg-[#e6b274] disabled:opacity-60"
                  >
                    {fd.state === "loading" ? "..." : fakedoor.submitLabel}
                  </button>
                  {fd.state === "error" && (
                    <p className="text-[13px] text-[#D9A05B]">
                      Something went wrong. Try again.
                    </p>
                  )}
                </form>
                <p className="mt-4 text-center text-[12px] text-[#E9E1D2]/45">
                  {fakedoor.privacyLine}
                </p>
              </>
            )}
          </section>
        )}

        {/* ───────── FOOTER ───────── */}
        <footer className="mt-24 border-t border-[#E9E1D2]/10 pt-8 text-center">
          <p className="font-[family-name:var(--font-spectral)] text-[15px] font-light italic text-[#E9E1D2]/85">
            {footer.lines[0]}
          </p>
          <p className="mt-3 text-[10px] uppercase tracking-[0.26em] text-[#E9E1D2]/45">
            {footer.lines.slice(1).join("  ·  ")}
          </p>
        </footer>
      </div>

      {/* Sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#D9A05B]/15 bg-[#0C1115]/85 px-6 py-3 backdrop-blur-md">
        <button
          onClick={() => fd.onCta("sticky")}
          className="mx-auto flex w-full max-w-md items-center justify-center gap-2 rounded-sm bg-[#D9A05B] px-6 py-3.5 text-[13px] font-medium uppercase tracking-[0.14em] text-[#0C1115]"
        >
          {hero.ctaLabel}
          <span>&rarr;</span>
        </button>
      </div>
    </main>
  );
}
