"use client";

import { Newsreader, Mona_Sans } from "next/font/google";
import type { DesignProps } from "@/designs/types";
import { useFakeDoor } from "@/designs/shared/useFakeDoor";

// AXIS: Texture / depth. A luminous wellness reading of the brand carried
// entirely by CSS material: a lavender→periwinkle mesh wash, soft tinted
// (never black) shadows, a faint film-grain noise layer, and concentric
// "double-bezel" cards on translucent white. No photography, no imported
// asset — palette + mood + type + treatment do all the brand work.
//
// Type: Newsreader (variable optical-size serif, tender + softly luminous —
// not Fraunces/Instrument) for display & the contemplative voice; Mona Sans
// (rounded humanist grotesque) for body. Tone: airy, dignified, calming.
const display = Newsreader({
  subsets: ["latin"],
  variable: "--font-display",
  style: ["normal", "italic"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const body = Mona_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

// Palette — locked indigo / lavender / periwinkle family. ONE accent intent
// (indigo) page-wide; gradients stay inside the family.
const INK = "#26235A"; // primary dark text / accent
const SOFT = "#5A5690"; // secondary text
const MUTED = "#9C98D4"; // tertiary / eyebrow

// Film-grain: tiny SVG fractal-noise tiled as a CSS background. CSS-only
// texture, pointer-events-none, fixed overlay — no <img>, no asset.
const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")";

// Soft tinted shadows (indigo-hued, never pure black).
const SHADOW_SOFT = "0 30px 70px -50px rgba(38,35,90,0.42)";
const SHADOW_LIFT = "0 24px 56px -38px rgba(38,35,90,0.55)";
const SHADOW_DEEP = "0 38px 80px -42px rgba(38,35,90,0.7)";

export default function TexturedLuminousLavender({ content, slug }: DesignProps) {
  const fd = useFakeDoor(slug);
  const { hero, problem, solution, pricing, testimonials, faq, fakedoor, footer } = content;

  return (
    <main
      className={`${display.variable} ${body.variable} font-[family-name:var(--font-body)] relative min-h-screen overflow-hidden antialiased selection:bg-[#C9D2FF] selection:text-[#26235A]`}
      style={{
        color: INK,
        background:
          "radial-gradient(125% 78% at 10% 2%, #F3ECFF 0%, rgba(243,236,255,0) 52%)," +
          "radial-gradient(115% 68% at 94% 14%, #D6E4FF 0%, rgba(214,228,255,0) 52%)," +
          "radial-gradient(135% 95% at 50% 106%, #EBE6FF 0%, rgba(235,230,255,0) 58%)," +
          "linear-gradient(180deg, #F7F4FF 0%, #F3ECFF 48%, #F7F4FF 100%)",
      }}
    >
      {/* film-grain texture layer — fixed, non-interactive, CSS-only */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[1] opacity-[0.06] mix-blend-multiply"
        style={{ backgroundImage: GRAIN, backgroundSize: "160px 160px" }}
      />
      {/* soft luminous orbs for dreamlike depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-28 top-32 h-72 w-72 rounded-full opacity-50 blur-3xl"
        style={{ background: "radial-gradient(circle, #D6E4FF 0%, rgba(214,228,255,0) 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-[62%] h-80 w-80 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, #F3ECFF 0%, rgba(243,236,255,0) 70%)" }}
      />

      <div className="relative z-[2] mx-auto max-w-md px-6 pb-40">
        {/* ───────── NAV ───────── */}
        <header className="flex items-center justify-between pt-7">
          <span
            className="font-[family-name:var(--font-display)] text-[19px] italic"
            style={{ color: INK }}
          >
            {hero.brandLockup}
          </span>
          <span
            className="rounded-full border px-3.5 py-1.5 text-[10px] uppercase tracking-[0.22em]"
            style={{ borderColor: "rgba(90,86,144,0.22)", color: SOFT }}
          >
            Tenderly kept
          </span>
        </header>

        {/* ───────── HERO (text-led, no photo) ───────── */}
        <section className="pt-16 text-center">
          <p className="mb-6 text-[10px] uppercase tracking-[0.36em]" style={{ color: MUTED }}>
            A quiet kind of care
          </p>
          <h1
            className="motion-rise text-balance font-[family-name:var(--font-display)] text-[40px] font-light leading-[1.08] tracking-[-0.01em]"
            style={{ color: INK }}
          >
            {hero.title}
          </h1>
          <p
            className="motion-rise mx-auto mt-6 max-w-[33ch] text-[16px] leading-[1.72]"
            style={{ color: SOFT, animationDelay: "90ms" }}
          >
            {hero.subtitle}
          </p>

          {/* double-bezel CTA: outer tinted shell + inner indigo core */}
          <div
            className="motion-rise mx-auto mt-9 inline-flex rounded-full p-1.5"
            style={{
              background: "rgba(255,255,255,0.55)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.7), " + SHADOW_SOFT,
              animationDelay: "160ms",
            }}
          >
            <button
              onClick={() => fd.onCta("hero")}
              className="group inline-flex items-center justify-center gap-2.5 rounded-full px-8 py-3.5 text-[15px] font-medium text-[#F7F4FF] transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]"
              style={{
                background: "linear-gradient(160deg, #2E2A6B 0%, #26235A 100%)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.18), " + SHADOW_LIFT,
              }}
            >
              {hero.ctaLabel}
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                →
              </span>
            </button>
          </div>

          <p
            className="mx-auto mt-7 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[12.5px]"
            style={{ background: "rgba(255,255,255,0.6)", color: SOFT }}
          >
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#8A86D8" }} />
            {hero.reassuranceLine}
          </p>
        </section>

        {/* ───────── PROBLEM ───────── */}
        <section className="mt-36 text-center">
          <h2
            className="mx-auto max-w-[20ch] text-balance font-[family-name:var(--font-display)] text-[28px] font-light leading-[1.22] tracking-[-0.01em]"
            style={{ color: INK }}
          >
            {problem.title}
          </h2>
          <p
            className="mx-auto mt-7 max-w-[34ch] text-[15.5px] leading-[1.76]"
            style={{ color: SOFT }}
          >
            {problem.body}
          </p>
        </section>

        {/* ───────── SOLUTION ───────── */}
        <section className="mt-36">
          <div className="text-center">
            <p className="mb-4 text-[10px] uppercase tracking-[0.36em]" style={{ color: MUTED }}>
              {solution.intro}
            </p>
            <p
              className="font-[family-name:var(--font-display)] text-[16px] italic"
              style={{ color: SOFT }}
            >
              three quiet steps
            </p>
          </div>

          <ol className="mt-12 space-y-7">
            {solution.steps.map((s, i) => (
              <li
                key={i}
                className="rounded-[34px] p-1.5"
                style={{
                  background: "rgba(255,255,255,0.4)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.7), " + SHADOW_SOFT,
                }}
              >
                <div
                  className="rounded-[calc(34px-0.375rem)] px-6 py-8"
                  style={{
                    background:
                      "linear-gradient(165deg, rgba(247,244,255,0.92) 0%, rgba(235,230,255,0.7) 100%)",
                    boxShadow: "inset 0 1px 1px rgba(255,255,255,0.6)",
                  }}
                >
                  <span
                    className="flex h-13 w-13 items-center justify-center rounded-full font-[family-name:var(--font-display)] text-[23px] italic"
                    style={{
                      width: "3.25rem",
                      height: "3.25rem",
                      background:
                        "radial-gradient(circle at 32% 28%, #E3E9FF 0%, #C9D2FF 100%)",
                      color: INK,
                      boxShadow: "inset 0 1px 1px rgba(255,255,255,0.8)",
                    }}
                  >
                    {i + 1}
                  </span>
                  <h3
                    className="mt-6 font-[family-name:var(--font-display)] text-[21px] font-normal leading-[1.3] tracking-[-0.005em]"
                    style={{ color: INK }}
                  >
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-[1.72]" style={{ color: SOFT }}>
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* ───────── PRICING ───────── */}
        <section ref={fd.pricingRef} className="mt-36 text-center">
          <h2
            className="mx-auto max-w-[20ch] text-balance font-[family-name:var(--font-display)] text-[27px] font-light leading-[1.22] tracking-[-0.01em]"
            style={{ color: INK }}
          >
            {pricing.title}
          </h2>
          <p className="mx-auto mt-5 max-w-[34ch] text-[15px] leading-[1.72]" style={{ color: SOFT }}>
            {pricing.subtitle}
          </p>

          <div className="mt-10 space-y-5">
            {pricing.plans.map((plan, i) =>
              plan.highlight ? (
                <div
                  key={i}
                  className="relative rounded-[34px] p-1.5"
                  style={{
                    background: "rgba(214,228,255,0.45)",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.6), " + SHADOW_DEEP,
                  }}
                >
                  <div
                    className="relative rounded-[calc(34px-0.375rem)] px-7 py-9 text-[#F7F4FF]"
                    style={{
                      background:
                        "radial-gradient(120% 90% at 80% 0%, #3A3680 0%, rgba(58,54,128,0) 55%)," +
                        "linear-gradient(160deg, #2E2A6B 0%, #26235A 100%)",
                      boxShadow: "inset 0 1px 1px rgba(255,255,255,0.16)",
                    }}
                  >
                    <span
                      className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-[10px] uppercase tracking-[0.2em]"
                      style={{ background: "#C9D2FF", color: INK }}
                    >
                      Most chosen
                    </span>
                    <p
                      className="font-[family-name:var(--font-display)] text-[16px] italic"
                      style={{ color: "#B9C2F2" }}
                    >
                      {plan.name}
                    </p>
                    <p
                      className="mt-2 font-[family-name:var(--font-display)] text-[42px] font-light leading-none tracking-[-0.01em]"
                    >
                      {plan.price}
                    </p>
                    <p className="mt-3 text-[13px]" style={{ color: "#B9C2F2" }}>
                      {plan.descriptor}
                    </p>
                    <button
                      onClick={() => fd.onCta(`pricing-${plan.name.toLowerCase()}`)}
                      className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-4 text-[15px] font-medium transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]"
                      style={{
                        background: "#F7F4FF",
                        color: INK,
                        boxShadow: "inset 0 1px 1px rgba(255,255,255,0.9)",
                      }}
                    >
                      {plan.ctaLabel}
                      <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                        →
                      </span>
                    </button>
                  </div>
                </div>
              ) : (
                <div
                  key={i}
                  className="rounded-[34px] p-1.5"
                  style={{
                    background: "rgba(255,255,255,0.4)",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.7), " + SHADOW_SOFT,
                  }}
                >
                  <div
                    className="rounded-[calc(34px-0.375rem)] px-7 py-9"
                    style={{
                      background:
                        "linear-gradient(165deg, rgba(247,244,255,0.92) 0%, rgba(235,230,255,0.7) 100%)",
                      color: INK,
                      boxShadow: "inset 0 1px 1px rgba(255,255,255,0.6)",
                    }}
                  >
                    <p
                      className="font-[family-name:var(--font-display)] text-[16px] italic"
                      style={{ color: SOFT }}
                    >
                      {plan.name}
                    </p>
                    <p
                      className="mt-2 font-[family-name:var(--font-display)] text-[42px] font-light leading-none tracking-[-0.01em]"
                      style={{ color: INK }}
                    >
                      {plan.price}
                    </p>
                    <p className="mt-3 text-[13px]" style={{ color: SOFT }}>
                      {plan.descriptor}
                    </p>
                    <button
                      onClick={() => fd.onCta(`pricing-${plan.name.toLowerCase()}`)}
                      className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-4 text-[15px] font-medium text-[#F7F4FF] transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]"
                      style={{
                        background: "linear-gradient(160deg, #2E2A6B 0%, #26235A 100%)",
                        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.18)",
                      }}
                    >
                      {plan.ctaLabel}
                      <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                        →
                      </span>
                    </button>
                  </div>
                </div>
              )
            )}
          </div>

          {/* included list */}
          <div
            className="mt-10 rounded-[34px] p-1.5"
            style={{
              background: "rgba(255,255,255,0.35)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.7), " + SHADOW_SOFT,
            }}
          >
            <div
              className="rounded-[calc(34px-0.375rem)] px-7 py-9 text-left"
              style={{
                background:
                  "linear-gradient(165deg, rgba(247,244,255,0.9) 0%, rgba(235,230,255,0.6) 100%)",
              }}
            >
              <p
                className="text-center text-[10px] uppercase tracking-[0.32em]"
                style={{ color: MUTED }}
              >
                Everything included
              </p>
              <ul className="mt-6 grid grid-cols-1 gap-y-3.5">
                {pricing.included.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-[14.5px]" style={{ color: INK }}>
                    <span
                      className="flex h-5 w-5 flex-none items-center justify-center rounded-full text-[11px]"
                      style={{
                        background: "radial-gradient(circle at 30% 25%, #E3E9FF 0%, #C9D2FF 100%)",
                        color: INK,
                        boxShadow: "inset 0 1px 1px rgba(255,255,255,0.8)",
                      }}
                    >
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mx-auto mt-7 max-w-[34ch] text-[12.5px] leading-[1.66]" style={{ color: SOFT }}>
            {pricing.scarcityLine}
          </p>
        </section>

        {/* ───────── TESTIMONIALS ───────── */}
        <section className="mt-36">
          <p
            className="mb-8 text-center text-[10px] uppercase tracking-[0.36em]"
            style={{ color: MUTED }}
          >
            From those who started
          </p>

          <div className="space-y-6">
            {testimonials.map((t, i) => (
              <figure
                key={i}
                className="rounded-[34px] p-1.5"
                style={{
                  background: "rgba(255,255,255,0.4)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.7), " + SHADOW_SOFT,
                }}
              >
                <div
                  className="rounded-[calc(34px-0.375rem)] px-7 py-8"
                  style={{
                    background:
                      "linear-gradient(165deg, rgba(247,244,255,0.92) 0%, rgba(235,230,255,0.65) 100%)",
                    boxShadow: "inset 0 1px 1px rgba(255,255,255,0.6)",
                  }}
                >
                  <span
                    aria-hidden
                    className="block font-[family-name:var(--font-display)] text-[46px] leading-none"
                    style={{ color: "rgba(138,134,216,0.5)" }}
                  >
                    &ldquo;
                  </span>
                  <blockquote
                    className="mt-1 font-[family-name:var(--font-display)] text-[19px] font-normal leading-[1.5] tracking-[-0.005em]"
                    style={{ color: INK }}
                  >
                    {t.quote}
                  </blockquote>
                  <figcaption
                    className="mt-5 text-[12px] uppercase tracking-[0.2em]"
                    style={{ color: SOFT }}
                  >
                    {t.name} · {t.age}
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>
        </section>

        {/* ───────── FAQ ───────── */}
        <section className="mt-36">
          <p
            className="mb-8 text-center text-[10px] uppercase tracking-[0.36em]"
            style={{ color: MUTED }}
          >
            Questions you might have
          </p>
          <div className="space-y-4">
            {faq.map((item, i) => (
              <details
                key={i}
                className="group rounded-[28px] px-7 py-5"
                style={{
                  background: "rgba(255,255,255,0.45)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.6), " + SHADOW_SOFT,
                }}
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                  <span
                    className="font-[family-name:var(--font-display)] text-[17px] font-normal leading-[1.34] tracking-[-0.005em]"
                    style={{ color: INK }}
                  >
                    {item.q}
                  </span>
                  <span
                    className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-full text-[18px] leading-none transition-transform duration-300 group-open:rotate-45"
                    style={{
                      background: "radial-gradient(circle at 32% 28%, #E3E9FF 0%, #C9D2FF 100%)",
                      color: INK,
                    }}
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 text-[14px] leading-[1.72]" style={{ color: SOFT }}>
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* ───────── FINAL CTA ───────── */}
        <section
          className="relative mt-36 overflow-hidden rounded-[40px] px-8 py-16 text-center text-[#F7F4FF]"
          style={{
            background:
              "radial-gradient(120% 90% at 80% 0%, #3A3680 0%, rgba(58,54,128,0) 55%)," +
              "linear-gradient(160deg, #2E2A6B 0%, #26235A 100%)",
            boxShadow: "inset 0 1px 1px rgba(255,255,255,0.14), " + SHADOW_DEEP,
          }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.5] mix-blend-soft-light"
            style={{ backgroundImage: GRAIN, backgroundSize: "160px 160px" }}
          />
          <h2
            className="relative mx-auto max-w-[16ch] text-balance font-[family-name:var(--font-display)] text-[31px] font-light leading-[1.14] tracking-[-0.01em]"
          >
            {content.finalCta.headline}
          </h2>
          <button
            onClick={() => fd.onCta("final")}
            className="group relative mt-9 inline-flex items-center justify-center gap-2.5 rounded-full px-9 py-4 text-[15px] font-medium transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]"
            style={{ background: "#F7F4FF", color: INK, boxShadow: "inset 0 1px 1px rgba(255,255,255,0.9)" }}
          >
            {content.finalCta.ctaLabel}
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
          </button>
        </section>

        {/* ───────── FAKE-DOOR ───────── */}
        {fd.showWaitlist && (
          <section
            id="waitlist"
            className="mt-12 rounded-[40px] p-1.5"
            style={{
              background: "rgba(255,255,255,0.5)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.7), " + SHADOW_SOFT,
            }}
          >
            <div
              className="rounded-[calc(40px-0.375rem)] px-7 py-11"
              style={{
                background:
                  "linear-gradient(165deg, rgba(247,244,255,0.95) 0%, rgba(235,230,255,0.7) 100%)",
              }}
            >
              {fd.state === "done" ? (
                <div className="text-center">
                  <p
                    className="font-[family-name:var(--font-display)] text-[25px] font-light leading-tight"
                    style={{ color: INK }}
                  >
                    {content.confirmation.title}
                  </p>
                  <p
                    className="mx-auto mt-4 max-w-[34ch] text-[14.5px] leading-[1.72]"
                    style={{ color: SOFT }}
                  >
                    {content.confirmation.body}
                  </p>
                </div>
              ) : (
                <>
                  <p
                    className="text-center font-[family-name:var(--font-display)] text-[27px] italic leading-[1.16] tracking-[-0.01em]"
                    style={{ color: INK }}
                  >
                    {fakedoor.title}
                  </p>
                  <p
                    className="mx-auto mt-4 max-w-[34ch] text-center text-[14.5px] leading-[1.72]"
                    style={{ color: SOFT }}
                  >
                    {fakedoor.body}
                  </p>
                  <form onSubmit={fd.submit} className="mt-7 flex flex-col gap-3">
                    <label htmlFor="waitlist-email" className="sr-only">
                      {fakedoor.emailPlaceholder}
                    </label>
                    <input
                      id="waitlist-email"
                      type="email"
                      required
                      value={fd.email}
                      onChange={(e) => fd.setEmail(e.target.value)}
                      placeholder={fakedoor.emailPlaceholder}
                      className="w-full rounded-full border bg-white/70 px-6 py-4 text-[15px] outline-none focus:ring-2 focus:ring-[#C9D2FF]"
                      style={{ borderColor: "rgba(90,86,144,0.25)", color: INK }}
                    />
                    <button
                      type="submit"
                      disabled={fd.state === "loading"}
                      className="w-full rounded-full px-6 py-4 text-[15px] font-medium text-[#F7F4FF] transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] disabled:opacity-60"
                      style={{
                        background: "linear-gradient(160deg, #2E2A6B 0%, #26235A 100%)",
                        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.18)",
                      }}
                    >
                      {fd.state === "loading" ? "…" : fakedoor.submitLabel}
                    </button>
                    {fd.state === "error" && (
                      <p className="text-center text-[13px]" style={{ color: "#7A77C4" }}>
                        Something went wrong. Please try again.
                      </p>
                    )}
                  </form>
                  <p className="mt-5 text-center text-[12px]" style={{ color: SOFT }}>
                    {fakedoor.privacyLine}
                  </p>
                </>
              )}
            </div>
          </section>
        )}

        {/* ───────── FOOTER ───────── */}
        <footer className="mt-24 text-center">
          <p
            className="font-[family-name:var(--font-display)] text-[16px] italic"
            style={{ color: INK }}
          >
            {footer.lines[0]}
          </p>
          <p className="mt-4 text-[11px] uppercase tracking-[0.26em]" style={{ color: MUTED }}>
            {footer.lines.slice(1).join("  ·  ")}
          </p>
        </footer>
      </div>

      {/* sticky CTA — double-bezel pill */}
      <div className="fixed inset-x-0 bottom-0 z-40 px-6 pb-5">
        <div
          className="mx-auto w-full max-w-md rounded-full p-1.5"
          style={{
            background: "rgba(255,255,255,0.6)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.7), " + SHADOW_DEEP,
            backdropFilter: "blur(10px)",
          }}
        >
          <button
            onClick={() => fd.onCta("sticky")}
            className="group flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-medium text-[#F7F4FF] transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]"
            style={{
              background: "linear-gradient(160deg, #2E2A6B 0%, #26235A 100%)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.18)",
            }}
          >
            {hero.ctaLabel}
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
          </button>
        </div>
      </div>

      {/* CSS-only entry motion (respects reduced motion) */}
      <style>{`
        @keyframes ya-rise {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .motion-rise {
          animation: ya-rise 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        @media (prefers-reduced-motion: reduce) {
          .motion-rise { animation: none; }
        }
      `}</style>
    </main>
  );
}
