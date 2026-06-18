"use client";

import Image from "next/image";
import { Cormorant_Garamond, Spline_Sans_Mono } from "next/font/google";
import type { DesignProps } from "@/designs/types";
import { useFakeDoor } from "@/designs/shared/useFakeDoor";

// ── Direction ────────────────────────────────────────────────────────────────
// "The Heirloom Ledger." A keepsake / estate-document aesthetic: warm twilight
// ink (near-black walnut), aged parchment ivory, and a single struck-brass gold.
// High-contrast Cormorant Garamond display set against a clerical mono (Spline
// Sans Mono) used for stamped labels, ledger numerals and UI — like a private
// record bound in cloth. Engraved hairlines, numbered rows, a foil-stamped
// pricing certificate, soft vignette + grain. Deliberately solemn, not sterile.

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const mono = Spline_Sans_Mono({
  subsets: ["latin"],
  variable: "--font-mono-led",
  weight: ["400", "500"],
  display: "swap",
});

const INK = "#16130F";
const PAPER = "#EDE3D1";
const BRASS = "#B68A3E";

export default function HeirloomLedgerDesign({ content, slug }: DesignProps) {
  const fd = useFakeDoor(slug);
  const { hero, problem, solution, pricing, testimonials, faq, fakedoor, footer } =
    content;

  const labelCls =
    "font-[family-name:var(--font-mono-led)] text-[10px] uppercase tracking-[0.34em] text-[#9a7c45]";

  return (
    <main
      className={`${cormorant.variable} ${mono.variable} relative min-h-screen overflow-hidden text-[#EDE3D1] selection:bg-[#B68A3E] selection:text-[#16130F]`}
      style={{
        backgroundColor: INK,
        fontFamily: "var(--font-mono-led), ui-monospace, monospace",
      }}
    >
      {/* atmosphere: warm vignette + a faint radial hearth glow */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(120% 70% at 50% -10%, rgba(182,138,62,0.16), transparent 55%), radial-gradient(140% 90% at 50% 120%, rgba(0,0,0,0.55), transparent 60%)",
        }}
      />
      {/* grain */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.07] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative z-10 mx-auto max-w-md px-6 pb-32">
        {/* ───────── MASTHEAD ───────── */}
        <div className="flex items-center justify-between border-b border-[#EDE3D1]/15 py-5">
          <span className="font-[family-name:var(--font-cormorant)] text-[19px] italic tracking-tight text-[#EDE3D1]">
            You Alive
          </span>
          <span className={labelCls}>est. record · no. 03</span>
        </div>

        {/* ───────── HERO ───────── */}
        <header className="pt-9">
          <p className={labelCls}>A letter to the people you love</p>

          <h1
            className="mt-5 text-balance font-[family-name:var(--font-cormorant)] text-[46px] leading-[0.98] tracking-[-0.01em] text-[#EDE3D1]"
            style={{ fontWeight: 500 }}
          >
            {hero.title}
          </h1>

          {/* hero plate — the ad photo, framed like a tipped-in photograph */}
          <figure className="relative mt-8 overflow-hidden rounded-[4px] border border-[#EDE3D1]/15">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/designs/a/hero.jpeg"
                alt=""
                fill
                priority
                sizes="(max-width: 768px) 100vw, 450px"
                className="object-cover"
                style={{ filter: "sepia(0.28) saturate(0.85) contrast(1.04)" }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(22,19,15,0.18), rgba(22,19,15,0.05) 35%, rgba(22,19,15,0.55))",
                }}
              />
              <div className="pointer-events-none absolute inset-2 rounded-[2px] border border-[#EDE3D1]/20" />
            </div>
          </figure>

          <p className="mt-7 font-[family-name:var(--font-cormorant)] text-[21px] italic leading-[1.4] text-[#d9cbb0]">
            {hero.subtitle}
          </p>

          <button
            onClick={() => fd.onCta("hero")}
            className="group mt-7 inline-flex w-full items-center justify-between gap-3 rounded-[3px] bg-[#B68A3E] px-7 py-4 text-[12px] uppercase tracking-[0.18em] text-[#16130F] transition-all duration-300 hover:bg-[#c89b4d]"
          >
            <span>{hero.ctaLabel}</span>
            <span className="transition-transform group-hover:translate-x-1">⟶</span>
          </button>

          <p className="mt-5 flex items-center gap-3 text-[11px] tracking-[0.04em] text-[#9a7c45]">
            <span className="inline-block h-[1px] w-8 bg-[#B68A3E]/60" />
            {hero.reassuranceLine}
          </p>
        </header>

        {/* ───────── PROBLEM ───────── */}
        <section className="mt-24">
          <p className={labelCls}>The weight left behind</p>
          <h2 className="mt-5 text-balance font-[family-name:var(--font-cormorant)] text-[31px] leading-[1.08] tracking-[-0.01em] text-[#EDE3D1]">
            {problem.title}
          </h2>
          <p className="mt-6 text-[14px] leading-[1.7] tracking-[0.01em] text-[#c4b596]">
            {problem.body}
          </p>
        </section>

        {/* ───────── SOLUTION (ledger rows) ───────── */}
        <section className="mt-24">
          <div className="flex items-baseline justify-between border-b border-[#EDE3D1]/15 pb-3">
            <p className={labelCls}>How it works</p>
            <p className="font-[family-name:var(--font-cormorant)] text-[15px] italic text-[#9a7c45]">
              three safeguards
            </p>
          </div>
          <h2 className="mt-6 font-[family-name:var(--font-cormorant)] text-[30px] leading-[1.05] tracking-[-0.01em] text-[#EDE3D1]">
            {solution.intro}
          </h2>

          <ol className="mt-9">
            {solution.steps.map((s, i) => (
              <li
                key={i}
                className="grid grid-cols-[auto_1fr] gap-5 border-t border-[#EDE3D1]/12 py-7 first:border-t-0"
              >
                <span className="font-[family-name:var(--font-mono-led)] text-[12px] tracking-[0.1em] text-[#B68A3E]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-[family-name:var(--font-cormorant)] text-[21px] leading-[1.2] tracking-[-0.005em] text-[#EDE3D1]">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[13.5px] leading-[1.65] text-[#c4b596]">
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* ───────── PRICING (foil-stamped certificate) ───────── */}
        <section ref={fd.pricingRef} className="mt-24">
          <p className={labelCls}>Membership</p>
          <h2 className="mt-5 text-balance font-[family-name:var(--font-cormorant)] text-[31px] leading-[1.08] tracking-[-0.01em] text-[#EDE3D1]">
            {pricing.title}
          </h2>
          <p className="mt-4 text-[13.5px] leading-[1.65] text-[#c4b596]">
            {pricing.subtitle}
          </p>

          {/* plans */}
          <div className="mt-8 space-y-4">
            {pricing.plans.map((plan, i) => {
              const hot = !!plan.highlight;
              return (
                <div
                  key={i}
                  className={
                    hot
                      ? "relative overflow-hidden rounded-[5px] border border-[#B68A3E] bg-[#1c1813] p-6"
                      : "relative overflow-hidden rounded-[5px] border border-[#EDE3D1]/15 bg-transparent p-6"
                  }
                >
                  {hot && (
                    <div
                      aria-hidden
                      className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#B68A3E]/20 blur-2xl"
                    />
                  )}
                  <div className="relative flex items-baseline justify-between">
                    <span className="font-[family-name:var(--font-mono-led)] text-[11px] uppercase tracking-[0.28em] text-[#9a7c45]">
                      {plan.name}
                    </span>
                    {hot && (
                      <span className="rounded-[2px] border border-[#B68A3E]/60 px-2 py-[3px] font-[family-name:var(--font-mono-led)] text-[9px] uppercase tracking-[0.2em] text-[#B68A3E]">
                        chosen
                      </span>
                    )}
                  </div>
                  <p className="relative mt-3 font-[family-name:var(--font-cormorant)] text-[40px] leading-none tracking-[-0.01em] text-[#EDE3D1]">
                    {plan.price}
                  </p>
                  <p className="relative mt-2 font-[family-name:var(--font-cormorant)] text-[16px] italic text-[#c4b596]">
                    {plan.descriptor}
                  </p>
                  <button
                    onClick={() => fd.onCta(hot ? "pricing" : "pricing-monthly")}
                    className={
                      hot
                        ? "relative mt-5 inline-flex w-full items-center justify-center rounded-[3px] bg-[#B68A3E] px-6 py-3.5 text-[11px] uppercase tracking-[0.18em] text-[#16130F] transition hover:bg-[#c89b4d]"
                        : "relative mt-5 inline-flex w-full items-center justify-center rounded-[3px] border border-[#EDE3D1]/30 px-6 py-3.5 text-[11px] uppercase tracking-[0.18em] text-[#EDE3D1] transition hover:border-[#B68A3E] hover:text-[#B68A3E]"
                    }
                  >
                    {plan.ctaLabel}
                  </button>
                </div>
              );
            })}
          </div>

          {/* included — engraved ledger of contents */}
          <div className="mt-8 rounded-[5px] border border-[#EDE3D1]/15 p-6">
            <p className={labelCls}>What is kept inside</p>
            <ul className="mt-4 grid grid-cols-1 gap-x-5 gap-y-0">
              {pricing.included.map((feat, i) => (
                <li
                  key={i}
                  className="flex items-center justify-between gap-3 border-b border-dotted border-[#EDE3D1]/15 py-2.5 last:border-b-0"
                >
                  <span className="text-[13px] tracking-[0.01em] text-[#d9cbb0]">
                    {feat}
                  </span>
                  <span className="font-[family-name:var(--font-cormorant)] text-[15px] text-[#B68A3E]">
                    ✓
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-6 text-center text-[11px] leading-[1.6] tracking-[0.02em] text-[#9a7c45]">
            {pricing.scarcityLine}
          </p>
        </section>

        {/* ───────── TESTIMONIALS ───────── */}
        <section className="mt-24">
          <p className={labelCls}>Entrusted by</p>
          <div className="mt-7 space-y-9">
            {testimonials.map((t, i) => (
              <figure key={i} className="border-l border-[#B68A3E]/50 pl-5">
                <blockquote className="font-[family-name:var(--font-cormorant)] text-[20px] italic leading-[1.4] tracking-[-0.005em] text-[#EDE3D1]">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-3 font-[family-name:var(--font-mono-led)] text-[10px] uppercase tracking-[0.22em] text-[#9a7c45]">
                  {t.name} · {t.age}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ───────── FAQ ───────── */}
        <section className="mt-24">
          <p className={labelCls}>Questions you might have</p>
          <div className="mt-4 border-t border-[#EDE3D1]/15">
            {faq.map((item, i) => (
              <details key={i} className="group border-b border-[#EDE3D1]/15 py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                  <span className="font-[family-name:var(--font-cormorant)] text-[19px] leading-[1.25] tracking-[-0.005em] text-[#EDE3D1]">
                    {item.q}
                  </span>
                  <span className="mt-1 select-none font-[family-name:var(--font-mono-led)] text-[18px] leading-none text-[#B68A3E] transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-[36ch] text-[13px] leading-[1.7] text-[#c4b596]">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* ───────── FINAL CTA ───────── */}
        <section className="mt-24 text-center">
          <h2 className="mx-auto max-w-[18ch] text-balance font-[family-name:var(--font-cormorant)] text-[34px] leading-[1.05] tracking-[-0.01em] text-[#EDE3D1]">
            {content.finalCta.headline}
          </h2>
          <button
            onClick={() => fd.onCta("final")}
            className="group mt-7 inline-flex items-center gap-3 rounded-[3px] bg-[#B68A3E] px-9 py-4 text-[12px] uppercase tracking-[0.18em] text-[#16130F] transition hover:bg-[#c89b4d]"
          >
            <span>{content.finalCta.ctaLabel}</span>
            <span className="transition-transform group-hover:translate-x-1">⟶</span>
          </button>
        </section>

        {/* ───────── FAKE-DOOR ───────── */}
        {fd.showWaitlist && (
          <section
            id="waitlist"
            className="mt-24 rounded-[6px] border border-[#B68A3E]/45 bg-[#1c1813] px-6 py-9"
          >
            {fd.state === "done" ? (
              <div className="text-center">
                <p className="font-[family-name:var(--font-cormorant)] text-[27px] leading-tight text-[#EDE3D1]">
                  {content.confirmation.title}
                </p>
                <p className="mt-3 text-[13.5px] leading-[1.7] text-[#c4b596]">
                  {content.confirmation.body}
                </p>
              </div>
            ) : (
              <>
                <p className="font-[family-name:var(--font-cormorant)] text-[29px] italic leading-[1.05] tracking-[-0.01em] text-[#EDE3D1]">
                  {fakedoor.title}
                </p>
                <p className="mt-3 text-[13.5px] leading-[1.7] text-[#c4b596]">
                  {fakedoor.body}
                </p>
                <form onSubmit={fd.submit} className="mt-6 flex flex-col gap-3">
                  <input
                    type="email"
                    required
                    value={fd.email}
                    onChange={(e) => fd.setEmail(e.target.value)}
                    placeholder={fakedoor.emailPlaceholder}
                    className="w-full rounded-[3px] border border-[#EDE3D1]/25 bg-[#16130F] px-5 py-3.5 font-[family-name:var(--font-mono-led)] text-[14px] text-[#EDE3D1] placeholder:text-[#9a7c45] focus:border-[#B68A3E] focus:outline-none"
                  />
                  <button
                    type="submit"
                    disabled={fd.state === "loading"}
                    className="w-full rounded-[3px] bg-[#B68A3E] px-6 py-3.5 text-[11px] uppercase tracking-[0.18em] text-[#16130F] transition hover:bg-[#c89b4d] disabled:opacity-60"
                  >
                    {fd.state === "loading" ? "…" : fakedoor.submitLabel}
                  </button>
                  {fd.state === "error" && (
                    <p className="text-[12px] text-[#d98a5a]">
                      Something went wrong. Try again.
                    </p>
                  )}
                </form>
                <p className="mt-4 text-center text-[11px] tracking-[0.02em] text-[#9a7c45]">
                  {fakedoor.privacyLine}
                </p>
              </>
            )}
          </section>
        )}

        {/* ───────── FOOTER ───────── */}
        <footer className="mt-20 border-t border-[#EDE3D1]/15 pt-8 text-center">
          <p className="font-[family-name:var(--font-cormorant)] text-[16px] italic text-[#d9cbb0]">
            {footer.lines[0]}
          </p>
          <p className="mt-3 font-[family-name:var(--font-mono-led)] text-[10px] uppercase tracking-[0.24em] text-[#9a7c45]">
            {footer.lines.slice(1).join("  ·  ")}
          </p>
        </footer>
      </div>

      {/* ───────── STICKY CTA ───────── */}
      <div
        className="fixed inset-x-0 bottom-0 z-40 border-t border-[#B68A3E]/25 px-6 py-3 backdrop-blur-md"
        style={{ backgroundColor: "rgba(22,19,15,0.88)" }}
      >
        <button
          onClick={() => fd.onCta("sticky")}
          className="mx-auto flex w-full max-w-md items-center justify-center gap-2 rounded-[3px] bg-[#B68A3E] px-6 py-3.5 text-[11px] uppercase tracking-[0.18em] text-[#16130F]"
        >
          {hero.ctaLabel}
        </button>
      </div>
    </main>
  );
}
