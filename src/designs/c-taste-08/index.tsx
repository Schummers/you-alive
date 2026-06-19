"use client";

import { useEffect, useState } from "react";
import { Quicksand, Nunito_Sans } from "next/font/google";
import type { DesignProps } from "@/designs/types";
import { useFakeDoor } from "@/designs/shared/useFakeDoor";

// Direction: ORGANIC WARMTH. Cream canvas warmed by soft radial washes that stay
// strictly within the forest/lime/cream family — no stray hues. Quicksand (a
// rounded geometric sans, supports a variable weight axis) carries the wordmark
// and headings with a soft, friendly authority; Nunito Sans keeps the body
// humanist and gentle. Everything is built from rounded blobs and radial
// gradient washes — no images, no icons, no hand-drawn marks. Lime is the single
// locked accent, used sparingly so the grief-aware tone stays dignified.
const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const nunito = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

const FOREST = "#16271F";
const LIME = "#C8F169";

export default function OrganicWarmthDesign({ content, slug }: DesignProps) {
  const fd = useFakeDoor(slug);
  const { hero, problem, solution, pricing, testimonials, faq, fakedoor, footer } = content;

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const reveal = (delay: string) =>
    `transition-[opacity,transform] duration-[900ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] ${delay} ${
      mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
    } motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none`;

  return (
    <main
      className={`${quicksand.variable} ${nunito.variable} font-[family-name:var(--font-nunito)] relative min-h-screen overflow-hidden bg-[#EFEAD8] text-[#16271F] antialiased selection:bg-[#C8F169] selection:text-[#16271F]`}
    >
      {/* ───────── ambient organic washes (within palette family only) ───────── */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(120% 70% at 18% -8%, rgba(200,241,105,0.26) 0%, rgba(200,241,105,0) 55%)," +
            "radial-gradient(110% 60% at 96% 22%, rgba(22,39,31,0.10) 0%, rgba(22,39,31,0) 50%)," +
            "radial-gradient(130% 80% at 50% 118%, rgba(22,39,31,0.16) 0%, rgba(22,39,31,0) 60%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-md px-6 pb-40">
        {/* ───────── NAV / WORDMARK ───────── */}
        <header className={`flex items-center justify-between pt-8 ${reveal("delay-0")}`}>
          <span className="font-[family-name:var(--font-quicksand)] text-[19px] font-bold tracking-[-0.01em] text-[#16271F]">
            {hero.brandLockup}
          </span>
          <span className="rounded-full bg-[#16271F]/[0.06] px-3.5 py-1.5 text-[10px] uppercase tracking-[0.22em] text-[#5d6f63]">
            Gently kept
          </span>
        </header>

        {/* ───────── HERO (text-led, organic blobs) ───────── */}
        <section className="relative pt-12">
          {/* soft blob backdrop behind the headline */}
          <div
            aria-hidden
            className="absolute -top-2 left-1/2 -z-10 h-[280px] w-[330px] -translate-x-1/2 blur-2xl"
            style={{
              background:
                "radial-gradient(closest-side, rgba(200,241,105,0.45), rgba(200,241,105,0))",
              borderRadius: "62% 38% 55% 45% / 55% 50% 50% 45%",
            }}
          />
          <div className={reveal("delay-100")}>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/55 px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] text-[#5d6f63] ring-1 ring-[#16271F]/[0.06]">
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: LIME }}
              />
              A warm goodbye, prepared
            </span>
            <h1 className="mt-6 text-balance font-[family-name:var(--font-quicksand)] text-[40px] font-bold leading-[1.05] tracking-[-0.02em] text-[#16271F]">
              {hero.title}
            </h1>
            <p className="mt-5 max-w-[34ch] text-[16px] leading-[1.65] text-[#46564c]">
              {hero.subtitle}
            </p>

            <button
              onClick={() => fd.onCta("hero")}
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#16271F] py-2 pl-7 pr-2 text-[15px] font-semibold text-[#EFEAD8] transition-transform duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] hover:-translate-y-[2px] active:scale-[0.98]"
            >
              {hero.ctaLabel}
              <span
                className="flex h-9 w-9 items-center justify-center rounded-full text-[16px] text-[#16271F] transition-transform duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:translate-x-0.5"
                style={{ backgroundColor: LIME }}
              >
                →
              </span>
            </button>

            <p className="mt-7 inline-flex items-center gap-2.5 rounded-full bg-[#16271F]/[0.05] px-4 py-1.5 text-[12.5px] text-[#5d6f63]">
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: LIME }}
              />
              {hero.reassuranceLine}
            </p>
          </div>
        </section>

        {/* ───────── PROBLEM ───────── */}
        <section className={`relative mt-28 ${reveal("delay-0")}`}>
          <div
            className="relative overflow-hidden px-8 py-10 text-center"
            style={{
              background:
                "linear-gradient(165deg, rgba(255,255,255,0.6), rgba(255,255,255,0.32))",
              borderRadius: "46% 54% 48% 52% / 8% 9% 91% 92%",
            }}
          >
            <p className="mb-5 text-[10px] uppercase tracking-[0.32em] text-[#8a9a85]">
              The quiet problem
            </p>
            <h2 className="mx-auto max-w-[21ch] text-balance font-[family-name:var(--font-quicksand)] text-[27px] font-semibold leading-[1.18] tracking-[-0.01em] text-[#16271F]">
              {problem.title}
            </h2>
            <p className="mx-auto mt-6 max-w-[36ch] text-[15.5px] leading-[1.7] text-[#46564c]">
              {problem.body}
            </p>
          </div>
        </section>

        {/* ───────── SOLUTION ───────── */}
        <section className="mt-28">
          <div className={`text-center ${reveal("delay-0")}`}>
            <p className="mb-3 text-[10px] uppercase tracking-[0.32em] text-[#8a9a85]">
              {solution.intro}
            </p>
            <p className="font-[family-name:var(--font-quicksand)] text-[15px] font-medium text-[#5d6f63]">
              three gentle steps
            </p>
          </div>

          <ol className="mt-10 space-y-7">
            {solution.steps.map((s, i) => (
              <li
                key={i}
                className={`group relative bg-white/55 px-7 py-8 ring-1 ring-[#16271F]/[0.05] ${reveal(
                  i === 0 ? "delay-100" : i === 1 ? "delay-200" : "delay-300"
                )}`}
                style={{
                  borderRadius:
                    i % 2 === 0
                      ? "42px 42px 42px 14px"
                      : "42px 42px 14px 42px",
                }}
              >
                <span
                  className="flex h-12 w-12 items-center justify-center font-[family-name:var(--font-quicksand)] text-[20px] font-bold"
                  style={{
                    backgroundColor: LIME,
                    color: FOREST,
                    borderRadius: "58% 42% 50% 50% / 50% 55% 45% 50%",
                  }}
                >
                  {i + 1}
                </span>
                <h3 className="mt-6 font-[family-name:var(--font-quicksand)] text-[20px] font-semibold leading-[1.25] tracking-[-0.005em] text-[#16271F]">
                  {s.title}
                </h3>
                <p className="mt-3 text-[14.5px] leading-[1.68] text-[#46564c]">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* ───────── PRICING ───────── */}
        <section ref={fd.pricingRef} className="mt-28">
          <div className={`text-center ${reveal("delay-0")}`}>
            <p className="mb-4 text-[10px] uppercase tracking-[0.32em] text-[#8a9a85]">
              Membership
            </p>
            <h2 className="mx-auto max-w-[21ch] text-balance font-[family-name:var(--font-quicksand)] text-[26px] font-semibold leading-[1.18] tracking-[-0.01em] text-[#16271F]">
              {pricing.title}
            </h2>
            <p className="mx-auto mt-4 max-w-[36ch] text-[15px] leading-[1.65] text-[#46564c]">
              {pricing.subtitle}
            </p>
          </div>

          <div className="mt-10 space-y-5">
            {pricing.plans.map((plan, i) => (
              <div
                key={i}
                className={`relative px-7 py-8 ${reveal(
                  i === 0 ? "delay-100" : "delay-200"
                )} ${
                  plan.highlight
                    ? "bg-[#16271F] text-[#EFEAD8] shadow-[0_30px_70px_-44px_rgba(22,39,31,0.85)]"
                    : "bg-white/55 text-[#16271F] ring-1 ring-[#16271F]/[0.06]"
                }`}
                style={{ borderRadius: "40px 40px 40px 40px / 30px 30px 30px 30px" }}
              >
                {plan.highlight && (
                  <span
                    className="absolute -top-3 left-7 px-4 py-1 text-[10px] font-bold uppercase tracking-[0.14em]"
                    style={{
                      backgroundColor: LIME,
                      color: FOREST,
                      borderRadius: "999px",
                    }}
                  >
                    Most chosen
                  </span>
                )}
                <p
                  className="font-[family-name:var(--font-quicksand)] text-[15px] font-semibold"
                  style={{ color: plan.highlight ? "#a9c08c" : "#5d6f63" }}
                >
                  {plan.name}
                </p>
                <p className="mt-2 font-[family-name:var(--font-quicksand)] text-[38px] font-bold leading-none tracking-[-0.01em]">
                  {plan.price}
                </p>
                <p
                  className="mt-3 text-[13px]"
                  style={{ color: plan.highlight ? "#a9c08c" : "#5d6f63" }}
                >
                  {plan.descriptor}
                </p>
                <button
                  onClick={() => fd.onCta(`pricing-${plan.name.toLowerCase()}`)}
                  className={`group mt-7 flex w-full items-center justify-center gap-2.5 rounded-full px-6 py-3.5 text-[15px] font-semibold transition-transform duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] hover:-translate-y-[1px] active:scale-[0.98] ${
                    plan.highlight
                      ? "text-[#16271F]"
                      : "bg-[#16271F] text-[#EFEAD8]"
                  }`}
                  style={plan.highlight ? { backgroundColor: LIME } : undefined}
                >
                  {plan.ctaLabel}
                  <span className="transition-transform duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:translate-x-0.5">
                    →
                  </span>
                </button>
              </div>
            ))}
          </div>

          <div
            className={`mt-9 bg-white/45 px-7 py-8 ring-1 ring-[#16271F]/[0.05] ${reveal(
              "delay-200"
            )}`}
            style={{ borderRadius: "38px" }}
          >
            <p className="text-center text-[10px] uppercase tracking-[0.3em] text-[#8a9a85]">
              Everything included
            </p>
            <ul className="mt-6 space-y-3.5">
              {pricing.included.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-[14.5px] text-[#37463d]"
                >
                  <span
                    className="flex h-5 w-5 flex-none items-center justify-center text-[11px] font-bold"
                    style={{
                      backgroundColor: LIME,
                      color: FOREST,
                      borderRadius: "55% 45% 50% 50% / 50% 55% 45% 50%",
                    }}
                  >
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <p className="mx-auto mt-7 max-w-[36ch] text-center text-[12.5px] leading-[1.6] text-[#5d6f63]">
            {pricing.scarcityLine}
          </p>
        </section>

        {/* ───────── TESTIMONIALS ───────── */}
        <section className="mt-28">
          <p
            className={`mb-8 text-center text-[10px] uppercase tracking-[0.32em] text-[#8a9a85] ${reveal(
              "delay-0"
            )}`}
          >
            From those who started
          </p>
          <div className="space-y-6">
            {testimonials.map((t, i) => (
              <figure
                key={i}
                className={`bg-white/55 px-7 py-8 ring-1 ring-[#16271F]/[0.05] ${reveal(
                  i === 0 ? "delay-100" : i === 1 ? "delay-200" : "delay-300"
                )}`}
                style={{
                  borderRadius:
                    i % 2 === 0
                      ? "40px 40px 14px 40px"
                      : "40px 40px 40px 14px",
                }}
              >
                <span
                  aria-hidden
                  className="block font-[family-name:var(--font-quicksand)] text-[40px] font-bold leading-none"
                  style={{ color: LIME }}
                >
                  &ldquo;
                </span>
                <blockquote className="mt-1 font-[family-name:var(--font-quicksand)] text-[18px] font-medium leading-[1.5] tracking-[-0.005em] text-[#16271F]">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-5 text-[12px] uppercase tracking-[0.16em] text-[#5d6f63]">
                  {t.name} · {t.age}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ───────── FAQ ───────── */}
        <section className="mt-28">
          <p
            className={`mb-8 text-center text-[10px] uppercase tracking-[0.32em] text-[#8a9a85] ${reveal(
              "delay-0"
            )}`}
          >
            Questions you might have
          </p>
          <div className="space-y-4">
            {faq.map((item, i) => (
              <details
                key={i}
                className={`group bg-white/55 px-7 py-5 ring-1 ring-[#16271F]/[0.05] open:bg-white/70 ${reveal(
                  "delay-100"
                )}`}
                style={{ borderRadius: "30px" }}
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                  <span className="font-[family-name:var(--font-quicksand)] text-[16.5px] font-semibold leading-[1.3] tracking-[-0.005em] text-[#16271F]">
                    {item.q}
                  </span>
                  <span
                    className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center text-[18px] font-bold leading-none transition-transform duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-open:rotate-45"
                    style={{
                      backgroundColor: LIME,
                      color: FOREST,
                      borderRadius: "55% 45% 50% 50% / 50% 55% 45% 50%",
                    }}
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 text-[14px] leading-[1.65] text-[#46564c]">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* ───────── FINAL CTA ───────── */}
        <section
          className={`relative mt-28 overflow-hidden bg-[#16271F] px-8 py-16 text-center text-[#EFEAD8] ${reveal(
            "delay-0"
          )}`}
          style={{ borderRadius: "52% 48% 46% 54% / 12% 12% 88% 88%" }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(80% 60% at 50% 0%, rgba(200,241,105,0.22), rgba(200,241,105,0) 60%)",
            }}
          />
          <h2 className="relative mx-auto max-w-[16ch] text-balance font-[family-name:var(--font-quicksand)] text-[31px] font-bold leading-[1.1] tracking-[-0.01em]">
            {content.finalCta.headline}
          </h2>
          <button
            onClick={() => fd.onCta("final")}
            className="group relative mt-9 inline-flex items-center gap-3 rounded-full py-2 pl-7 pr-2 text-[15px] font-semibold text-[#16271F] transition-transform duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] hover:-translate-y-[2px] active:scale-[0.98]"
            style={{ backgroundColor: LIME }}
          >
            {content.finalCta.ctaLabel}
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#16271F] text-[16px] text-[#EFEAD8] transition-transform duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:translate-x-0.5">
              →
            </span>
          </button>
        </section>

        {/* ───────── FAKE-DOOR ───────── */}
        {fd.showWaitlist && (
          <section
            id="waitlist"
            className="mt-12 bg-white/60 px-7 py-10 ring-1 ring-[#16271F]/[0.06]"
            style={{ borderRadius: "44px" }}
          >
            {fd.state === "done" ? (
              <div className="text-center">
                <p className="font-[family-name:var(--font-quicksand)] text-[24px] font-bold leading-tight text-[#16271F]">
                  {content.confirmation.title}
                </p>
                <p className="mx-auto mt-4 max-w-[34ch] text-[14.5px] leading-[1.65] text-[#46564c]">
                  {content.confirmation.body}
                </p>
              </div>
            ) : (
              <>
                <p className="text-center font-[family-name:var(--font-quicksand)] text-[26px] font-bold leading-[1.15] tracking-[-0.01em] text-[#16271F]">
                  {fakedoor.title}
                </p>
                <p className="mx-auto mt-4 max-w-[34ch] text-center text-[14.5px] leading-[1.65] text-[#46564c]">
                  {fakedoor.body}
                </p>
                <form onSubmit={fd.submit} className="mt-7 flex flex-col gap-3">
                  <input
                    type="email"
                    required
                    value={fd.email}
                    onChange={(e) => fd.setEmail(e.target.value)}
                    placeholder={fakedoor.emailPlaceholder}
                    className="w-full rounded-full border border-[#16271F]/15 bg-[#EFEAD8] px-6 py-4 text-[15px] text-[#16271F] placeholder:text-[#8a9a85] focus:border-[#16271F] focus:outline-none"
                  />
                  <button
                    type="submit"
                    disabled={fd.state === "loading"}
                    className="w-full rounded-full bg-[#16271F] px-6 py-4 text-[15px] font-semibold text-[#EFEAD8] transition-transform duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] hover:-translate-y-[1px] active:scale-[0.98] disabled:opacity-60"
                  >
                    {fd.state === "loading" ? "..." : fakedoor.submitLabel}
                  </button>
                  {fd.state === "error" && (
                    <p className="text-center text-[13px] text-[#16271F]">
                      Something went wrong. Try again.
                    </p>
                  )}
                </form>
                <p className="mt-5 text-center text-[12px] text-[#5d6f63]">
                  {fakedoor.privacyLine}
                </p>
              </>
            )}
          </section>
        )}

        {/* ───────── FOOTER ───────── */}
        <footer className="mt-24 text-center">
          <p className="font-[family-name:var(--font-quicksand)] text-[16px] font-semibold text-[#16271F]">
            {footer.lines[0]}
          </p>
          <p className="mt-4 text-[11px] uppercase tracking-[0.22em] text-[#8a9a85]">
            {footer.lines.slice(1).join("  ·  ")}
          </p>
        </footer>
      </div>

      {/* Sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 px-6 pb-5">
        <button
          onClick={() => fd.onCta("sticky")}
          className="group mx-auto flex w-full max-w-md items-center justify-center gap-2.5 rounded-full bg-[#16271F] px-6 py-4 text-[15px] font-semibold text-[#EFEAD8] shadow-[0_22px_46px_-20px_rgba(22,39,31,0.85)] transition-transform duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] active:scale-[0.98]"
        >
          {hero.ctaLabel}
          <span
            className="flex h-7 w-7 items-center justify-center rounded-full text-[14px] text-[#16271F] transition-transform duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:translate-x-0.5"
            style={{ backgroundColor: LIME }}
          >
            →
          </span>
        </button>
      </div>
    </main>
  );
}
