"use client";

import Image from "next/image";
import { Fraunces, Darker_Grotesque } from "next/font/google";
import type { DesignProps } from "@/designs/types";
import { useFakeDoor } from "@/designs/shared/useFakeDoor";

// Direction: TEXTURE / DEPTH — printed matter. A warm risograph reading of the
// brand: layered grain, paper-grade gradient washes, botanical line motifs and
// ink-press shadows. Fraunces (soft, wonky optical serif) carries the
// contemplative voice; Darker Grotesque (tall, condensed) sets labels and
// numerals like a letterpress catalogue. Deep forest ground, lime as a single
// struck accent, cream as the page stock. Fraunces gets opsz/SOFT/WONK only —
// weight is driven via fontVariationSettings so no `weight` prop is passed.
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT", "WONK"],
  style: ["normal", "italic"],
  display: "swap",
});

const darker = Darker_Grotesque({
  subsets: ["latin"],
  variable: "--font-darker",
  display: "swap",
});

// Reusable risograph paper grain (SVG fractal noise) as a CSS background value.
const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E\")";

// A small botanical sprig, drawn once, reused as a quiet motif.
function Sprig({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 48 80"
      fill="none"
      aria-hidden
      className={className}
      style={style}
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    >
      <path d="M24 78V14" />
      <path d="M24 30c-8-2-14-8-15-16 8 1 14 6 15 16Z" fill="currentColor" fillOpacity="0.18" />
      <path d="M24 44c8-2 14-8 15-16-8 1-14 6-15 16Z" fill="currentColor" fillOpacity="0.18" />
      <path d="M24 58c-7-2-12-7-13-14 7 1 12 5 13 14Z" fill="currentColor" fillOpacity="0.18" />
      <circle cx="24" cy="9" r="4" fill="currentColor" fillOpacity="0.25" />
    </svg>
  );
}

export default function PrintedMatterDesign({ content, slug }: DesignProps) {
  const fd = useFakeDoor(slug);
  const { hero, problem, solution, pricing, testimonials, faq, fakedoor, footer } = content;

  const FOREST = "#16271F";
  const LIME = "#C8F169";
  const CREAM = "#EFEAD8";
  const SAGE = "#9DB39A";

  return (
    <main
      className={`${fraunces.variable} ${darker.variable} font-[family-name:var(--font-fraunces)] relative min-h-screen text-[#EFEAD8] antialiased selection:bg-[#C8F169] selection:text-[#16271F]`}
      style={{ backgroundColor: FOREST }}
    >
      {/* Page-wide gradient wash + grain, behind everything */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(120% 60% at 50% -10%, rgba(200,241,105,0.10), transparent 60%), radial-gradient(90% 50% at 100% 30%, rgba(157,179,154,0.10), transparent 55%), linear-gradient(180deg, #1a2e23 0%, #16271F 40%, #122017 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 mix-blend-soft-light opacity-[0.5]"
        style={{ backgroundImage: GRAIN, backgroundSize: "160px 160px" }}
      />

      <div className="relative z-10 mx-auto max-w-md px-5 pb-40">
        {/* ───────── NAV ───────── */}
        <header className="flex items-center justify-between pt-6">
          <span
            className="text-[16px] italic"
            style={{ fontVariationSettings: '"opsz" 24, "SOFT" 60, "WONK" 1, "wght" 540' }}
          >
            {hero.brandLockup}
          </span>
          <span
            className="font-[family-name:var(--font-darker)] rounded-full border px-3 py-1 text-[13px] font-semibold uppercase tracking-[0.28em]"
            style={{ borderColor: "rgba(239,234,216,0.22)", color: SAGE }}
          >
            Est. for the day after
          </span>
        </header>

        {/* ───────── HERO ───────── */}
        <section className="pt-7">
          {/* Hero photo: wordmark already baked in — framed like a tipped-in plate */}
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-2 -z-10 rounded-[28px]"
              style={{ background: LIME, transform: "rotate(-1.4deg)", opacity: 0.85 }}
            />
            <div
              className="overflow-hidden rounded-[24px] ring-1"
              style={{
                boxShadow: "0 40px 80px -42px rgba(0,0,0,0.85), inset 0 0 0 1px rgba(239,234,216,0.08)",
                ["--tw-ring-color" as string]: "rgba(18,32,23,0.6)",
              }}
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
                {/* grain over the plate, to fuse photo + paper */}
                <div
                  aria-hidden
                  className="absolute inset-0 mix-blend-overlay opacity-40"
                  style={{ backgroundImage: GRAIN, backgroundSize: "140px 140px" }}
                />
              </div>
            </div>
          </div>

          <h1
            className="mt-9 text-balance text-[40px] leading-[1.02] tracking-[-0.015em]"
            style={{ fontVariationSettings: '"opsz" 144, "SOFT" 40, "WONK" 1, "wght" 560' }}
          >
            {hero.title}
          </h1>

          <p
            className="font-[family-name:var(--font-darker)] mt-5 max-w-[34ch] text-[19px] font-medium leading-[1.4]"
            style={{ color: "rgba(239,234,216,0.82)" }}
          >
            {hero.subtitle}
          </p>

          <button
            onClick={() => fd.onCta("hero")}
            className="font-[family-name:var(--font-darker)] group mt-8 inline-flex w-full items-center justify-between gap-3 rounded-2xl px-7 py-4 text-[21px] font-bold uppercase tracking-[0.04em] transition-transform duration-300 hover:-translate-y-[2px]"
            style={{
              background: LIME,
              color: FOREST,
              boxShadow: "0 20px 40px -18px rgba(200,241,105,0.5)",
            }}
          >
            {hero.ctaLabel}
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </button>

          <p
            className="font-[family-name:var(--font-darker)] mt-5 flex items-center gap-2.5 text-[16px] font-medium tracking-[0.01em]"
            style={{ color: SAGE }}
          >
            <span className="inline-block h-2 w-2 rounded-full" style={{ background: LIME }} />
            {hero.reassuranceLine}
          </p>
        </section>

        {/* ───────── PROBLEM ───────── */}
        <section className="relative mt-28">
          <Sprig
            className="absolute -top-12 right-0 h-20 w-12"
            style={{ color: SAGE }}
          />
          <p
            className="font-[family-name:var(--font-darker)] mb-5 text-[15px] font-bold uppercase tracking-[0.34em]"
            style={{ color: LIME }}
          >
            The quiet problem
          </p>
          <h2
            className="max-w-[20ch] text-balance text-[28px] leading-[1.16] tracking-[-0.01em]"
            style={{ fontVariationSettings: '"opsz" 72, "SOFT" 50, "WONK" 1, "wght" 520' }}
          >
            {problem.title}
          </h2>
          <p
            className="font-[family-name:var(--font-darker)] mt-6 max-w-[36ch] text-[19px] font-medium leading-[1.45]"
            style={{ color: "rgba(239,234,216,0.78)" }}
          >
            {problem.body}
          </p>
        </section>

        {/* ───────── SOLUTION ───────── */}
        <section className="mt-28">
          <p
            className="font-[family-name:var(--font-darker)] mb-8 text-[15px] font-bold uppercase tracking-[0.34em]"
            style={{ color: LIME }}
          >
            {solution.intro}
          </p>
          <ol className="space-y-6">
            {solution.steps.map((s, i) => (
              <li
                key={i}
                className="relative overflow-hidden rounded-[22px] px-6 py-7"
                style={{
                  background:
                    "linear-gradient(165deg, rgba(239,234,216,0.07), rgba(239,234,216,0.02))",
                  boxShadow:
                    "inset 0 0 0 1px rgba(239,234,216,0.10), 0 22px 50px -40px rgba(0,0,0,0.9)",
                }}
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 mix-blend-soft-light opacity-30"
                  style={{ backgroundImage: GRAIN, backgroundSize: "150px 150px" }}
                />
                <span
                  className="relative inline-flex h-12 w-12 items-center justify-center rounded-full text-[24px] italic"
                  style={{
                    background: "rgba(200,241,105,0.14)",
                    color: LIME,
                    fontVariationSettings: '"opsz" 36, "SOFT" 80, "WONK" 1, "wght" 480',
                  }}
                >
                  {i + 1}
                </span>
                <h3
                  className="relative mt-5 text-[20px] leading-[1.22] tracking-[-0.005em]"
                  style={{ fontVariationSettings: '"opsz" 48, "SOFT" 50, "WONK" 1, "wght" 540' }}
                >
                  {s.title}
                </h3>
                <p
                  className="font-[family-name:var(--font-darker)] relative mt-3 text-[18px] font-medium leading-[1.45]"
                  style={{ color: "rgba(239,234,216,0.74)" }}
                >
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* ───────── PRICING ───────── */}
        <section ref={fd.pricingRef} className="mt-28">
          <p
            className="font-[family-name:var(--font-darker)] mb-5 text-[15px] font-bold uppercase tracking-[0.34em]"
            style={{ color: LIME }}
          >
            Membership
          </p>
          <h2
            className="max-w-[20ch] text-balance text-[27px] leading-[1.16] tracking-[-0.01em]"
            style={{ fontVariationSettings: '"opsz" 72, "SOFT" 50, "WONK" 1, "wght" 520' }}
          >
            {pricing.title}
          </h2>
          <p
            className="font-[family-name:var(--font-darker)] mt-5 max-w-[36ch] text-[18px] font-medium leading-[1.45]"
            style={{ color: "rgba(239,234,216,0.78)" }}
          >
            {pricing.subtitle}
          </p>

          <div className="mt-9 space-y-5">
            {pricing.plans.map((plan, i) => {
              const hot = !!plan.highlight;
              return (
                <div
                  key={i}
                  className="relative overflow-hidden rounded-[22px] px-6 py-7"
                  style={
                    hot
                      ? {
                          background: LIME,
                          color: FOREST,
                          boxShadow: "0 30px 60px -30px rgba(200,241,105,0.55)",
                        }
                      : {
                          background:
                            "linear-gradient(165deg, rgba(239,234,216,0.07), rgba(239,234,216,0.02))",
                          boxShadow: "inset 0 0 0 1px rgba(239,234,216,0.12)",
                        }
                  }
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 mix-blend-soft-light opacity-25"
                    style={{ backgroundImage: GRAIN, backgroundSize: "150px 150px" }}
                  />
                  {hot && (
                    <span
                      className="font-[family-name:var(--font-darker)] relative inline-block rounded-full px-3 py-0.5 text-[14px] font-bold uppercase tracking-[0.2em]"
                      style={{ background: FOREST, color: LIME }}
                    >
                      Most chosen
                    </span>
                  )}
                  <p
                    className="font-[family-name:var(--font-darker)] relative mt-2 text-[17px] font-bold uppercase tracking-[0.18em]"
                    style={{ color: hot ? "rgba(18,32,23,0.7)" : SAGE }}
                  >
                    {plan.name}
                  </p>
                  <p
                    className="relative mt-1 text-[42px] leading-none tracking-[-0.01em]"
                    style={{ fontVariationSettings: '"opsz" 144, "SOFT" 30, "WONK" 1, "wght" 560' }}
                  >
                    {plan.price}
                  </p>
                  <p
                    className="font-[family-name:var(--font-darker)] relative mt-3 text-[17px] font-semibold"
                    style={{ color: hot ? "rgba(18,32,23,0.66)" : "rgba(239,234,216,0.62)" }}
                  >
                    {plan.descriptor}
                  </p>
                  <button
                    onClick={() => fd.onCta(`pricing-${plan.name.toLowerCase()}`)}
                    className="font-[family-name:var(--font-darker)] relative mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-[19px] font-bold uppercase tracking-[0.04em] transition-transform duration-300 hover:-translate-y-[1px]"
                    style={
                      hot
                        ? { background: FOREST, color: CREAM }
                        : { background: LIME, color: FOREST }
                    }
                  >
                    {plan.ctaLabel}
                    <span>→</span>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Included — letterpress catalogue list */}
          <div
            className="relative mt-8 overflow-hidden rounded-[22px] px-6 py-7"
            style={{ boxShadow: "inset 0 0 0 1px rgba(239,234,216,0.12)" }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 mix-blend-soft-light opacity-25"
              style={{ backgroundImage: GRAIN, backgroundSize: "150px 150px" }}
            />
            <p
              className="font-[family-name:var(--font-darker)] relative text-[15px] font-bold uppercase tracking-[0.3em]"
              style={{ color: LIME }}
            >
              Everything included
            </p>
            <ul className="relative mt-5 space-y-3">
              {pricing.included.map((feature, i) => (
                <li
                  key={i}
                  className="font-[family-name:var(--font-darker)] flex items-center gap-3 text-[19px] font-medium"
                  style={{ color: "rgba(239,234,216,0.86)" }}
                >
                  <span
                    className="flex h-5 w-5 flex-none items-center justify-center rounded-full text-[12px] font-bold"
                    style={{ background: "rgba(200,241,105,0.16)", color: LIME }}
                  >
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <p
            className="font-[family-name:var(--font-darker)] mt-6 max-w-[36ch] text-[16px] font-medium leading-[1.45]"
            style={{ color: SAGE }}
          >
            {pricing.scarcityLine}
          </p>
        </section>

        {/* ───────── TESTIMONIALS ───────── */}
        <section className="mt-28">
          <p
            className="font-[family-name:var(--font-darker)] mb-7 text-[15px] font-bold uppercase tracking-[0.34em]"
            style={{ color: LIME }}
          >
            From those who started
          </p>
          <div className="space-y-5">
            {testimonials.map((t, i) => (
              <figure
                key={i}
                className="relative overflow-hidden rounded-[22px] px-6 py-7"
                style={{
                  background:
                    "linear-gradient(165deg, rgba(239,234,216,0.07), rgba(239,234,216,0.02))",
                  boxShadow: "inset 0 0 0 1px rgba(239,234,216,0.10)",
                }}
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 mix-blend-soft-light opacity-25"
                  style={{ backgroundImage: GRAIN, backgroundSize: "150px 150px" }}
                />
                <span
                  aria-hidden
                  className="relative block text-[48px] leading-none"
                  style={{
                    color: "rgba(200,241,105,0.5)",
                    fontVariationSettings: '"opsz" 144, "SOFT" 80, "WONK" 1, "wght" 500',
                  }}
                >
                  &ldquo;
                </span>
                <blockquote
                  className="relative mt-1 text-[19px] leading-[1.42] tracking-[-0.005em]"
                  style={{ fontVariationSettings: '"opsz" 48, "SOFT" 60, "WONK" 1, "wght" 480' }}
                >
                  {t.quote}
                </blockquote>
                <figcaption
                  className="font-[family-name:var(--font-darker)] mt-5 text-[15px] font-bold uppercase tracking-[0.2em]"
                  style={{ color: SAGE }}
                >
                  {t.name} · {t.age}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ───────── FAQ ───────── */}
        <section className="mt-28">
          <p
            className="font-[family-name:var(--font-darker)] mb-7 text-[15px] font-bold uppercase tracking-[0.34em]"
            style={{ color: LIME }}
          >
            Questions you might have
          </p>
          <div className="space-y-3">
            {faq.map((item, i) => (
              <details
                key={i}
                className="group overflow-hidden rounded-[18px] px-6 py-4"
                style={{ boxShadow: "inset 0 0 0 1px rgba(239,234,216,0.12)" }}
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                  <span
                    className="text-[18px] leading-[1.3] tracking-[-0.005em]"
                    style={{ fontVariationSettings: '"opsz" 36, "SOFT" 50, "WONK" 1, "wght" 520' }}
                  >
                    {item.q}
                  </span>
                  <span
                    className="font-[family-name:var(--font-darker)] mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-full text-[22px] leading-none transition-transform duration-300 group-open:rotate-45"
                    style={{ background: "rgba(200,241,105,0.14)", color: LIME }}
                  >
                    +
                  </span>
                </summary>
                <p
                  className="font-[family-name:var(--font-darker)] mt-3 text-[18px] font-medium leading-[1.5]"
                  style={{ color: "rgba(239,234,216,0.76)" }}
                >
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* ───────── FINAL CTA ───────── */}
        <section className="relative mt-28 overflow-hidden rounded-[28px] px-8 py-14 text-center">
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(100% 80% at 50% 0%, rgba(200,241,105,0.16), transparent 60%), linear-gradient(180deg, #1c3327, #102016)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 mix-blend-soft-light opacity-40"
            style={{ backgroundImage: GRAIN, backgroundSize: "150px 150px" }}
          />
          <Sprig
            className="absolute left-1/2 top-5 h-14 w-9 -translate-x-1/2"
            style={{ color: LIME }}
          />
          <h2
            className="relative mx-auto mt-8 max-w-[16ch] text-balance text-[32px] leading-[1.08] tracking-[-0.015em]"
            style={{ fontVariationSettings: '"opsz" 144, "SOFT" 50, "WONK" 1, "wght" 560' }}
          >
            {content.finalCta.headline}
          </h2>
          <button
            onClick={() => fd.onCta("final")}
            className="font-[family-name:var(--font-darker)] relative mt-8 inline-flex items-center justify-center gap-2.5 rounded-2xl px-9 py-4 text-[21px] font-bold uppercase tracking-[0.04em] transition-transform duration-300 hover:-translate-y-[2px]"
            style={{ background: LIME, color: FOREST }}
          >
            {content.finalCta.ctaLabel}
            <span>→</span>
          </button>
        </section>

        {/* ───────── FAKE-DOOR ───────── */}
        {fd.showWaitlist && (
          <section
            id="waitlist"
            className="relative mt-12 overflow-hidden rounded-[28px] px-6 py-10"
            style={{
              background:
                "linear-gradient(165deg, rgba(239,234,216,0.08), rgba(239,234,216,0.02))",
              boxShadow: "inset 0 0 0 1px rgba(239,234,216,0.14)",
            }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 mix-blend-soft-light opacity-30"
              style={{ backgroundImage: GRAIN, backgroundSize: "150px 150px" }}
            />
            {fd.state === "done" ? (
              <div className="relative text-center">
                <p
                  className="text-[26px] leading-tight"
                  style={{ fontVariationSettings: '"opsz" 72, "SOFT" 50, "WONK" 1, "wght" 540' }}
                >
                  {content.confirmation.title}
                </p>
                <p
                  className="font-[family-name:var(--font-darker)] mx-auto mt-4 max-w-[34ch] text-[18px] font-medium leading-[1.5]"
                  style={{ color: "rgba(239,234,216,0.78)" }}
                >
                  {content.confirmation.body}
                </p>
              </div>
            ) : (
              <>
                <p
                  className="relative text-center text-[28px] italic leading-[1.1] tracking-[-0.01em]"
                  style={{ fontVariationSettings: '"opsz" 72, "SOFT" 80, "WONK" 1, "wght" 520' }}
                >
                  {fakedoor.title}
                </p>
                <p
                  className="font-[family-name:var(--font-darker)] relative mx-auto mt-4 max-w-[34ch] text-center text-[18px] font-medium leading-[1.5]"
                  style={{ color: "rgba(239,234,216,0.78)" }}
                >
                  {fakedoor.body}
                </p>
                <form onSubmit={fd.submit} className="relative mt-7 flex flex-col gap-3">
                  <input
                    type="email"
                    required
                    value={fd.email}
                    onChange={(e) => fd.setEmail(e.target.value)}
                    placeholder={fakedoor.emailPlaceholder}
                    className="font-[family-name:var(--font-darker)] w-full rounded-xl border px-5 py-4 text-[19px] font-medium focus:outline-none"
                    style={{
                      borderColor: "rgba(239,234,216,0.2)",
                      background: "rgba(18,32,23,0.5)",
                      color: CREAM,
                    }}
                  />
                  <button
                    type="submit"
                    disabled={fd.state === "loading"}
                    className="font-[family-name:var(--font-darker)] w-full rounded-xl px-6 py-4 text-[20px] font-bold uppercase tracking-[0.04em] disabled:opacity-60"
                    style={{ background: LIME, color: FOREST }}
                  >
                    {fd.state === "loading" ? "..." : fakedoor.submitLabel}
                  </button>
                  {fd.state === "error" && (
                    <p
                      className="font-[family-name:var(--font-darker)] text-center text-[16px] font-semibold"
                      style={{ color: "#e9a06b" }}
                    >
                      Something went wrong. Try again.
                    </p>
                  )}
                </form>
                <p
                  className="font-[family-name:var(--font-darker)] relative mt-5 text-center text-[15px] font-medium"
                  style={{ color: SAGE }}
                >
                  {fakedoor.privacyLine}
                </p>
              </>
            )}
          </section>
        )}

        {/* ───────── FOOTER ───────── */}
        <footer className="mt-24 text-center">
          <Sprig className="mx-auto h-12 w-8" style={{ color: SAGE }} />
          <p
            className="mt-5 text-[18px] italic"
            style={{ fontVariationSettings: '"opsz" 36, "SOFT" 60, "WONK" 1, "wght" 480' }}
          >
            {footer.lines[0]}
          </p>
          <p
            className="font-[family-name:var(--font-darker)] mt-4 text-[15px] font-bold uppercase tracking-[0.24em]"
            style={{ color: SAGE }}
          >
            {footer.lines.slice(1).join("  ·  ")}
          </p>
        </footer>
      </div>

      {/* Sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 px-5 pb-5">
        <button
          onClick={() => fd.onCta("sticky")}
          className="font-[family-name:var(--font-darker)] mx-auto flex w-full max-w-md items-center justify-center gap-2 rounded-2xl px-6 py-4 text-[21px] font-bold uppercase tracking-[0.04em]"
          style={{
            background: LIME,
            color: FOREST,
            boxShadow: "0 22px 46px -20px rgba(0,0,0,0.9)",
          }}
        >
          {hero.ctaLabel}
          <span>→</span>
        </button>
      </div>
    </main>
  );
}
