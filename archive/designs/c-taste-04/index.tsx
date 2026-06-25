"use client";

import { Fraunces, Spline_Sans } from "next/font/google";
import type { DesignProps } from "@/designs/types";
import { useFakeDoor } from "@/designs/shared/useFakeDoor";

// ── Variant C · axis: TEXTURE / DEPTH ───────────────────────────────────────
// No photography. The page is carried entirely by CSS material: a forest base
// layered with in-family radial gradients, a fine SVG-noise grain, tinted
// (never pure-black) shadows, and a faint contour-line motif. Warm, grounded,
// characterful but dignified. Single accent = electric lime, locked page-wide.
// Radius lock: cards/buttons 18px (rounded-[18px]); pills full. Shadows are
// tinted to the forest hue. Eyebrows used sparingly (3 across the page).
//
// Fraunces (variable: opsz/wght/SOFT/WONK) gives the offbeat-but-dignified
// display voice; Spline Sans (humanist grotesque) keeps body warm + legible.
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
});

const spline = Spline_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
  display: "swap",
});

const FOREST = "#16271F";
const LIME = "#C8F169";
const CREAM = "#EFEAD8";

// Fine grain as a CSS background (data-URI SVG noise). No <img>, no asset file.
const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

export default function TextureDepthDesign({ content, slug }: DesignProps) {
  const fd = useFakeDoor(slug);
  const { hero, problem, solution, pricing, testimonials, faq, finalCta, fakedoor, footer } =
    content;

  return (
    <main
      className={`${fraunces.variable} ${spline.variable} font-[family-name:var(--font-body)] relative min-h-[100dvh] overflow-hidden bg-[#16271F] text-[#EFEAD8] antialiased selection:bg-[#C8F169] selection:text-[#16271F]`}
    >
      {/* layered in-family gradient field (depth) */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(120% 60% at 78% -8%, rgba(200,241,105,0.16), transparent 55%), radial-gradient(95% 50% at 8% 22%, rgba(239,234,216,0.07), transparent 60%), radial-gradient(140% 80% at 50% 120%, rgba(200,241,105,0.07), transparent 60%)",
        }}
      />
      {/* fine film grain over everything */}
      <div
        aria-hidden
        className="ya-grain pointer-events-none fixed inset-0 z-[1] opacity-[0.05] mix-blend-soft-light"
        style={{ backgroundImage: GRAIN, backgroundSize: "160px 160px" }}
      />

      <div className="relative z-10 mx-auto max-w-md px-5 pb-32">
        {/* ── NAV ── */}
        <header className="flex items-center justify-between pt-7">
          <span className="font-[family-name:var(--font-display)] text-[18px] italic tracking-[-0.01em]">
            {hero.brandLockup}
          </span>
          <span className="rounded-full border border-[#EFEAD8]/15 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-[#EFEAD8]/55">
            Legacy, kept warm
          </span>
        </header>

        {/* ── HERO (text-led, textured) ── */}
        <section className="relative pt-10">
          {/* contour-motif card holding the wordmark moment */}
          <div
            className="relative overflow-hidden rounded-[18px] border border-[#EFEAD8]/10 px-6 pb-10 pt-9 shadow-[0_40px_90px_-50px_rgba(8,16,12,0.9),inset_0_1px_0_rgba(239,234,216,0.08)]"
            style={{
              background:
                "linear-gradient(165deg, rgba(31,52,41,0.9), rgba(18,30,24,0.92)), repeating-radial-gradient(circle at 30% 0%, rgba(200,241,105,0.06) 0px, rgba(200,241,105,0.06) 1px, transparent 1px, transparent 16px)",
            }}
          >
            <p className="text-[10px] uppercase tracking-[0.34em] text-[#C8F169]/80">
              {hero.brandLockup}
            </p>
            <h1 className="mt-5 text-balance font-[family-name:var(--font-display)] text-[38px] font-medium leading-[1.05] tracking-[-0.018em] text-[#EFEAD8]">
              {hero.title}
            </h1>
            <p className="mt-5 max-w-[34ch] text-[15.5px] leading-[1.62] text-[#EFEAD8]/70">
              {hero.subtitle}
            </p>

            <button
              onClick={() => fd.onCta("hero")}
              className="group mt-8 inline-flex w-full items-center justify-between gap-2 rounded-[18px] bg-[#C8F169] px-6 py-4 text-[15px] font-semibold text-[#16271F] shadow-[0_24px_46px_-22px_rgba(200,241,105,0.55)] transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-[2px] active:scale-[0.98]"
            >
              {hero.ctaLabel}
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#16271F]/10 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>

            <p className="mt-6 inline-flex items-center gap-2.5 text-[12.5px] text-[#EFEAD8]/60">
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: LIME }} />
              {hero.reassuranceLine}
            </p>
          </div>
        </section>

        {/* ── PROBLEM ── */}
        <section className="mt-24">
          <p className="mb-5 text-[10px] uppercase tracking-[0.34em] text-[#C8F169]/70">
            The quiet problem
          </p>
          <h2 className="text-balance font-[family-name:var(--font-display)] text-[27px] leading-[1.18] tracking-[-0.012em] text-[#EFEAD8]">
            {problem.title}
          </h2>
          <p className="mt-6 max-w-[40ch] text-[15px] leading-[1.7] text-[#EFEAD8]/65">
            {problem.body}
          </p>
        </section>

        {/* ── SOLUTION ── */}
        <section className="mt-24">
          <h2 className="font-[family-name:var(--font-display)] text-[24px] italic leading-[1.2] tracking-[-0.01em] text-[#EFEAD8]">
            {solution.intro}
          </h2>
          <ol className="mt-9 space-y-5">
            {solution.steps.map((s, i) => (
              <li
                key={i}
                className="relative overflow-hidden rounded-[18px] border border-[#EFEAD8]/10 px-6 py-7 shadow-[0_28px_60px_-46px_rgba(8,16,12,0.95),inset_0_1px_0_rgba(239,234,216,0.06)]"
                style={{
                  background:
                    "linear-gradient(160deg, rgba(31,52,41,0.7), rgba(18,30,24,0.8))",
                }}
              >
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-full font-[family-name:var(--font-display)] text-[20px] italic"
                  style={{ backgroundColor: LIME, color: FOREST }}
                >
                  {i + 1}
                </span>
                <h3 className="mt-5 font-[family-name:var(--font-display)] text-[19px] leading-[1.28] tracking-[-0.005em] text-[#EFEAD8]">
                  {s.title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.62] text-[#EFEAD8]/62">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* ── PRICING ── */}
        <section ref={fd.pricingRef} className="mt-24">
          <p className="mb-5 text-[10px] uppercase tracking-[0.34em] text-[#C8F169]/70">
            Membership
          </p>
          <h2 className="text-balance font-[family-name:var(--font-display)] text-[26px] leading-[1.16] tracking-[-0.012em] text-[#EFEAD8]">
            {pricing.title}
          </h2>
          <p className="mt-5 max-w-[40ch] text-[15px] leading-[1.65] text-[#EFEAD8]/65">
            {pricing.subtitle}
          </p>

          <div className="mt-9 space-y-5">
            {pricing.plans.map((plan, i) => {
              const hot = !!plan.highlight;
              return (
                <div
                  key={i}
                  className="relative overflow-hidden rounded-[18px] border px-6 py-7 shadow-[0_30px_64px_-44px_rgba(8,16,12,0.95)]"
                  style={
                    hot
                      ? {
                          borderColor: "rgba(200,241,105,0.4)",
                          background:
                            "linear-gradient(160deg, rgba(40,64,30,0.85), rgba(22,39,31,0.92)), repeating-linear-gradient(125deg, rgba(200,241,105,0.05) 0px, rgba(200,241,105,0.05) 1px, transparent 1px, transparent 11px)",
                        }
                      : {
                          borderColor: "rgba(239,234,216,0.1)",
                          background:
                            "linear-gradient(160deg, rgba(31,52,41,0.6), rgba(18,30,24,0.75))",
                        }
                  }
                >
                  {hot && (
                    <span
                      className="absolute right-5 top-6 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em]"
                      style={{ backgroundColor: LIME, color: FOREST }}
                    >
                      Most chosen
                    </span>
                  )}
                  <p
                    className="font-[family-name:var(--font-display)] text-[15px] italic"
                    style={{ color: hot ? CREAM : "rgba(239,234,216,0.7)" }}
                  >
                    {plan.name}
                  </p>
                  <p className="mt-2 font-[family-name:var(--font-display)] text-[38px] font-medium leading-none tracking-[-0.015em] text-[#EFEAD8]">
                    {plan.price}
                  </p>
                  <p className="mt-3 text-[13px] text-[#EFEAD8]/60">{plan.descriptor}</p>
                  <button
                    onClick={() => fd.onCta(`pricing-${plan.name.toLowerCase()}`)}
                    className="group mt-6 inline-flex w-full items-center justify-between gap-2 rounded-[18px] px-6 py-3.5 text-[15px] font-semibold transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-[2px] active:scale-[0.98]"
                    style={
                      hot
                        ? { backgroundColor: LIME, color: FOREST }
                        : {
                            backgroundColor: "rgba(239,234,216,0.06)",
                            color: CREAM,
                            border: "1px solid rgba(239,234,216,0.18)",
                          }
                    }
                  >
                    {plan.ctaLabel}
                    <span
                      className="flex h-8 w-8 items-center justify-center rounded-full transition-transform duration-300 group-hover:translate-x-1"
                      style={{
                        backgroundColor: hot
                          ? "rgba(22,39,31,0.1)"
                          : "rgba(239,234,216,0.08)",
                      }}
                    >
                      →
                    </span>
                  </button>
                </div>
              );
            })}
          </div>

          <div
            className="mt-7 overflow-hidden rounded-[18px] border border-[#EFEAD8]/10 px-6 py-7 shadow-[inset_0_1px_0_rgba(239,234,216,0.06)]"
            style={{
              background: "linear-gradient(160deg, rgba(31,52,41,0.5), rgba(18,30,24,0.7))",
            }}
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#EFEAD8]/45">
              Everything included
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-y-3.5">
              {pricing.included.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-[14.5px] text-[#EFEAD8]/82">
                  <span
                    className="flex h-5 w-5 flex-none items-center justify-center rounded-full text-[11px]"
                    style={{ backgroundColor: LIME, color: FOREST }}
                  >
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-6 max-w-[40ch] text-[12.5px] leading-[1.6] text-[#EFEAD8]/55">
            {pricing.scarcityLine}
          </p>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="mt-24 space-y-5">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="relative overflow-hidden rounded-[18px] border border-[#EFEAD8]/10 px-6 py-7 shadow-[0_28px_60px_-46px_rgba(8,16,12,0.95)]"
              style={{
                background: "linear-gradient(160deg, rgba(31,52,41,0.62), rgba(18,30,24,0.78))",
              }}
            >
              <span
                aria-hidden
                className="block font-[family-name:var(--font-display)] text-[40px] leading-none"
                style={{ color: LIME }}
              >
                &ldquo;
              </span>
              <blockquote className="mt-1 font-[family-name:var(--font-display)] text-[18px] leading-[1.5] tracking-[-0.005em] text-[#EFEAD8]">
                {t.quote}
              </blockquote>
              <figcaption className="mt-5 text-[12px] uppercase tracking-[0.18em] text-[#EFEAD8]/55">
                {t.name} · {t.age}
              </figcaption>
            </figure>
          ))}
        </section>

        {/* ── FAQ ── */}
        <section className="mt-24">
          <p className="mb-7 text-[10px] uppercase tracking-[0.34em] text-[#C8F169]/70">
            Questions you might have
          </p>
          <div className="space-y-3.5">
            {faq.map((item, i) => (
              <details
                key={i}
                className="group overflow-hidden rounded-[18px] border border-[#EFEAD8]/10 px-6 py-4 open:shadow-[inset_0_1px_0_rgba(239,234,216,0.06)]"
                style={{
                  background: "linear-gradient(160deg, rgba(31,52,41,0.5), rgba(18,30,24,0.66))",
                }}
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                  <span className="font-[family-name:var(--font-display)] text-[16.5px] leading-[1.32] tracking-[-0.005em] text-[#EFEAD8]">
                    {item.q}
                  </span>
                  <span
                    className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-full text-[18px] leading-none transition-transform duration-300 group-open:rotate-45"
                    style={{ backgroundColor: LIME, color: FOREST }}
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 text-[14px] leading-[1.62] text-[#EFEAD8]/65">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section
          className="relative mt-24 overflow-hidden rounded-[18px] border border-[#C8F169]/25 px-7 py-12 text-center shadow-[0_40px_90px_-50px_rgba(8,16,12,0.95),inset_0_1px_0_rgba(239,234,216,0.08)]"
          style={{
            background:
              "linear-gradient(160deg, rgba(40,64,30,0.7), rgba(18,30,24,0.92)), repeating-radial-gradient(circle at 70% 0%, rgba(200,241,105,0.07) 0px, rgba(200,241,105,0.07) 1px, transparent 1px, transparent 18px)",
          }}
        >
          <h2 className="mx-auto max-w-[16ch] text-balance font-[family-name:var(--font-display)] text-[30px] font-medium leading-[1.1] tracking-[-0.015em] text-[#EFEAD8]">
            {finalCta.headline}
          </h2>
          <button
            onClick={() => fd.onCta("final")}
            className="group mt-8 inline-flex items-center justify-center gap-2.5 rounded-[18px] px-8 py-4 text-[15px] font-semibold text-[#16271F] transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-[2px] active:scale-[0.98]"
            style={{ backgroundColor: LIME }}
          >
            {finalCta.ctaLabel}
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
        </section>

        {/* ── FAKE-DOOR ── */}
        {fd.showWaitlist && (
          <section
            id="waitlist"
            className="mt-10 overflow-hidden rounded-[18px] border border-[#EFEAD8]/12 px-6 py-9 shadow-[inset_0_1px_0_rgba(239,234,216,0.07)]"
            style={{
              background: "linear-gradient(160deg, rgba(31,52,41,0.7), rgba(18,30,24,0.85))",
            }}
          >
            {fd.state === "done" ? (
              <div className="text-center">
                <p className="font-[family-name:var(--font-display)] text-[24px] leading-tight text-[#EFEAD8]">
                  {content.confirmation.title}
                </p>
                <p className="mx-auto mt-4 max-w-[36ch] text-[14.5px] leading-[1.65] text-[#EFEAD8]/65">
                  {content.confirmation.body}
                </p>
              </div>
            ) : (
              <>
                <p className="text-center font-[family-name:var(--font-display)] text-[26px] italic leading-[1.15] tracking-[-0.01em] text-[#EFEAD8]">
                  {fakedoor.title}
                </p>
                <p className="mx-auto mt-4 max-w-[36ch] text-center text-[14.5px] leading-[1.65] text-[#EFEAD8]/65">
                  {fakedoor.body}
                </p>
                <form onSubmit={fd.submit} className="mt-7 flex flex-col gap-3">
                  <label htmlFor="ya-email" className="sr-only">
                    {fakedoor.emailPlaceholder}
                  </label>
                  <input
                    id="ya-email"
                    type="email"
                    required
                    value={fd.email}
                    onChange={(e) => fd.setEmail(e.target.value)}
                    placeholder={fakedoor.emailPlaceholder}
                    className="w-full rounded-[18px] border border-[#EFEAD8]/18 bg-[#16271F]/60 px-6 py-4 text-[15px] text-[#EFEAD8] placeholder:text-[#EFEAD8]/40 focus:border-[#C8F169] focus:outline-none"
                  />
                  <button
                    type="submit"
                    disabled={fd.state === "loading"}
                    className="w-full rounded-[18px] bg-[#C8F169] px-6 py-4 text-[15px] font-semibold text-[#16271F] transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-[2px] active:scale-[0.98] disabled:opacity-60"
                  >
                    {fd.state === "loading" ? "Reserving…" : fakedoor.submitLabel}
                  </button>
                  {fd.state === "error" && (
                    <p className="text-center text-[13px] text-[#C8F169]">
                      Something went wrong. Please try again.
                    </p>
                  )}
                </form>
                <p className="mt-5 text-center text-[12px] text-[#EFEAD8]/50">
                  {fakedoor.privacyLine}
                </p>
              </>
            )}
          </section>
        )}

        {/* ── FOOTER ── */}
        <footer className="mt-20 border-t border-[#EFEAD8]/10 pt-8 text-center">
          <p className="font-[family-name:var(--font-display)] text-[16px] italic text-[#EFEAD8]">
            {footer.lines[0]}
          </p>
          <p className="mt-4 text-[11px] uppercase tracking-[0.24em] text-[#EFEAD8]/45">
            {footer.lines.slice(1).join("  ·  ")}
          </p>
        </footer>
      </div>

      {/* sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 px-5 pb-5">
        <button
          onClick={() => fd.onCta("sticky")}
          className="mx-auto flex w-full max-w-md items-center justify-center gap-2 rounded-[18px] bg-[#C8F169] px-6 py-4 text-[15px] font-semibold text-[#16271F] shadow-[0_22px_46px_-20px_rgba(8,16,12,0.9)] transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]"
        >
          {hero.ctaLabel}
          <span>→</span>
        </button>
      </div>

      <style>{`
        .ya-grain {
          animation: ya-grain 8s steps(6) infinite;
        }
        @keyframes ya-grain {
          0%, 100% { transform: translate(0, 0); }
          20% { transform: translate(-6%, 4%); }
          40% { transform: translate(4%, -6%); }
          60% { transform: translate(-3%, -3%); }
          80% { transform: translate(5%, 3%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .ya-grain { animation: none !important; }
        }
      `}</style>
    </main>
  );
}
