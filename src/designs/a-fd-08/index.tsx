"use client";

import Image from "next/image";
import { Libre_Caslon_Display, Newsreader, IBM_Plex_Mono } from "next/font/google";
import type { DesignProps } from "@/designs/types";
import { useFakeDoor } from "@/designs/shared/useFakeDoor";

// ─────────────────────────────────────────────────────────────────────────────
// Direction: "THE ARCHIVE AT DUSK"
// A dignified, near-black ink-blue dossier — a secure vault rendered as a quiet
// record room. Midnight navy paper, vellum-bone ink, a single signal-amber.
// Display: Libre Caslon Display (high-contrast Didone gravity).
// Body: Newsreader (literary, warm). Meta/labels: IBM Plex Mono (ledger / vault).
// The hero photo lives as a cold duotone plate beneath a sealed vellum card.
// ─────────────────────────────────────────────────────────────────────────────

const caslon = Libre_Caslon_Display({
  subsets: ["latin"],
  variable: "--font-caslon",
  weight: "400",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-news",
  axes: ["opsz"],
  style: ["normal", "italic"],
  display: "swap",
});

const plex = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex",
  weight: ["400", "500"],
  display: "swap",
});

export default function ArchiveDuskDesign({ content, slug }: DesignProps) {
  const fd = useFakeDoor(slug);
  const { hero, problem, solution, pricing, testimonials, faq, fakedoor, footer } = content;
  const highlightPlan = pricing.plans.find((p) => p.highlight);

  return (
    <main
      className={`${caslon.variable} ${newsreader.variable} ${plex.variable} relative min-h-screen overflow-hidden bg-[#0B1016] text-[#E7E2D4] selection:bg-[#C8923B] selection:text-[#0B1016]`}
      style={{ fontFamily: "var(--font-news), ui-serif, Georgia, serif" }}
    >
      {/* Grain + cold vignette atmosphere */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.05] mix-blend-screen"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% -10%, rgba(200,146,59,0.10), transparent 55%), radial-gradient(100% 60% at 50% 120%, rgba(11,16,22,0.9), transparent 60%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-md px-5 pb-36">
        {/* ───────── MASTHEAD ───────── */}
        <div className="flex items-center justify-between pt-7 font-[family-name:var(--font-plex)] text-[10px] uppercase tracking-[0.34em] text-[#8A8470]">
          <span className="text-[#C8923B]">You Alive</span>
          <span>Dossier · 08</span>
        </div>

        {/* ───────── HERO ───────── */}
        <header className="mt-6">
          <div className="relative overflow-hidden rounded-[4px] border border-[#2A2E2A] shadow-[0_30px_70px_-30px_rgba(0,0,0,0.9)]">
            <div className="relative h-[58vh] min-h-[420px] w-full">
              <Image
                src="/designs/a/hero.jpeg"
                alt=""
                fill
                priority
                sizes="(max-width: 768px) 100vw, 450px"
                className="object-cover [filter:grayscale(0.45)_contrast(1.05)_brightness(0.82)]"
              />
              {/* Cold ink-blue duotone wash */}
              <div className="absolute inset-0 bg-[#0B1016]/45 mix-blend-multiply" />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(11,16,22,0.15), rgba(11,16,22,0.0) 30%, rgba(11,16,22,0.85))",
                }}
              />
              {/* Sealed corner marks */}
              <div className="absolute left-3 top-3 h-4 w-4 border-l border-t border-[#E7E2D4]/40" />
              <div className="absolute right-3 top-3 h-4 w-4 border-r border-t border-[#E7E2D4]/40" />
              <div className="absolute bottom-3 left-3 h-4 w-4 border-b border-l border-[#E7E2D4]/40" />
              <div className="absolute bottom-3 right-3 h-4 w-4 border-b border-r border-[#E7E2D4]/40" />

              <p className="absolute inset-x-0 bottom-0 px-5 pb-5 font-[family-name:var(--font-plex)] text-[9.5px] uppercase tracking-[0.3em] text-[#E7E2D4]/70">
                Filed in confidence · opened only when it matters
              </p>
            </div>
          </div>

          <h1 className="mt-9 text-balance font-[family-name:var(--font-caslon)] text-[42px] leading-[0.98] tracking-[-0.01em] text-[#F2EEE1]">
            {hero.title}
          </h1>

          <p className="mt-6 text-[17px] leading-[1.55] text-[#BDB8A6]">
            {hero.subtitle}
          </p>

          <button
            onClick={() => fd.onCta("hero")}
            className="group mt-8 inline-flex w-full items-center justify-between gap-3 rounded-[3px] bg-[#C8923B] px-6 py-4 text-[15px] font-medium text-[#0B1016] transition-all duration-300 hover:bg-[#dba74b] hover:shadow-[0_18px_40px_-18px_rgba(200,146,59,0.7)]"
          >
            <span className="font-[family-name:var(--font-plex)] uppercase tracking-[0.12em]">
              {hero.ctaLabel}
            </span>
            <span className="text-lg transition-transform group-hover:translate-x-1">→</span>
          </button>

          <p className="mt-5 flex items-center gap-2 font-[family-name:var(--font-plex)] text-[11px] tracking-wide text-[#8A8470]">
            <span className="inline-block h-[1px] w-7 bg-[#C8923B]" />
            {hero.reassuranceLine}
          </p>
        </header>

        {/* ───────── PROBLEM ───────── */}
        <section className="mt-28">
          <p className="mb-5 font-[family-name:var(--font-plex)] text-[10px] uppercase tracking-[0.34em] text-[#C8923B]">
            § 01 — The silence
          </p>
          <h2 className="text-balance font-[family-name:var(--font-caslon)] text-[29px] leading-[1.08] tracking-[-0.005em] text-[#F2EEE1]">
            {problem.title}
          </h2>
          <p className="mt-6 text-[16px] leading-[1.6] text-[#BDB8A6]">
            {problem.body}
          </p>
        </section>

        {/* ───────── SOLUTION ───────── */}
        <section className="mt-28">
          <p className="mb-5 font-[family-name:var(--font-plex)] text-[10px] uppercase tracking-[0.34em] text-[#C8923B]">
            § 02 — The procedure
          </p>
          <h2 className="font-[family-name:var(--font-caslon)] text-[29px] leading-[1.05] tracking-[-0.005em] text-[#F2EEE1]">
            {solution.intro}
          </h2>

          <ol className="mt-10 space-y-px overflow-hidden rounded-[4px] border border-[#22272D]">
            {solution.steps.map((s, i) => (
              <li
                key={i}
                className="relative grid grid-cols-[auto_1fr] gap-5 bg-[#0E141B] p-6"
              >
                <span className="font-[family-name:var(--font-plex)] text-[13px] tracking-[0.1em] text-[#C8923B]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-[family-name:var(--font-news)] text-[19px] italic leading-[1.25] text-[#F2EEE1]">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-[1.6] text-[#BDB8A6]">
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* ───────── PRICING ───────── */}
        <section ref={fd.pricingRef} className="mt-28">
          <p className="mb-5 font-[family-name:var(--font-plex)] text-[10px] uppercase tracking-[0.34em] text-[#C8923B]">
            § 03 — Terms
          </p>
          <h2 className="text-balance font-[family-name:var(--font-caslon)] text-[28px] leading-[1.08] tracking-[-0.005em] text-[#F2EEE1]">
            {pricing.title}
          </h2>
          <p className="mt-4 text-[15px] leading-[1.55] text-[#BDB8A6]">
            {pricing.subtitle}
          </p>

          <div className="mt-8 space-y-4">
            {pricing.plans.map((plan, i) => {
              const featured = !!plan.highlight;
              return (
                <div
                  key={i}
                  className={
                    featured
                      ? "relative overflow-hidden rounded-[5px] border border-[#C8923B] bg-[#13100A] p-6"
                      : "relative rounded-[5px] border border-[#22272D] bg-[#0E141B] p-6"
                  }
                >
                  {featured && (
                    <span className="absolute right-4 top-4 font-[family-name:var(--font-plex)] text-[9px] uppercase tracking-[0.24em] text-[#C8923B]">
                      Recommended
                    </span>
                  )}
                  <p className="font-[family-name:var(--font-plex)] text-[11px] uppercase tracking-[0.24em] text-[#8A8470]">
                    {plan.name}
                  </p>
                  <p className="mt-2 font-[family-name:var(--font-caslon)] text-[34px] leading-none text-[#F2EEE1]">
                    {plan.price}
                  </p>
                  <p className="mt-2 text-[13.5px] italic text-[#BDB8A6]">
                    {plan.descriptor}
                  </p>
                  <button
                    onClick={() => fd.onCta(featured ? "pricing" : "pricing-alt")}
                    className={
                      featured
                        ? "mt-5 w-full rounded-[3px] bg-[#C8923B] px-6 py-3.5 font-[family-name:var(--font-plex)] text-[13px] uppercase tracking-[0.12em] text-[#0B1016] transition hover:bg-[#dba74b]"
                        : "mt-5 w-full rounded-[3px] border border-[#3A3F36] px-6 py-3.5 font-[family-name:var(--font-plex)] text-[13px] uppercase tracking-[0.12em] text-[#E7E2D4] transition hover:border-[#C8923B] hover:text-[#C8923B]"
                    }
                  >
                    {plan.ctaLabel}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Included ledger */}
          <div className="mt-8 rounded-[5px] border border-[#22272D] bg-[#0E141B] p-6">
            <p className="font-[family-name:var(--font-plex)] text-[10px] uppercase tracking-[0.3em] text-[#8A8470]">
              Enclosed{highlightPlan ? ` with ${highlightPlan.name}` : ""}
            </p>
            <ul className="mt-4 grid grid-cols-1 gap-y-3">
              {pricing.included.map((item, i) => (
                <li
                  key={i}
                  className="flex items-baseline gap-3 border-b border-dotted border-[#22272D] pb-3 text-[14.5px] text-[#E7E2D4] last:border-0 last:pb-0"
                >
                  <span className="font-[family-name:var(--font-plex)] text-[11px] text-[#C8923B]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-5 text-center font-[family-name:var(--font-plex)] text-[11px] leading-[1.5] tracking-wide text-[#8A8470]">
            {pricing.scarcityLine}
          </p>
        </section>

        {/* ───────── TESTIMONIALS ───────── */}
        <section className="mt-28">
          <p className="mb-6 font-[family-name:var(--font-plex)] text-[10px] uppercase tracking-[0.34em] text-[#C8923B]">
            § 04 — On the record
          </p>
          <div className="space-y-10">
            {testimonials.map((t, i) => (
              <figure key={i} className="border-l border-[#C8923B]/50 pl-5">
                <blockquote className="font-[family-name:var(--font-news)] text-[19px] italic leading-[1.45] text-[#F2EEE1]">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-3 font-[family-name:var(--font-plex)] text-[11px] uppercase tracking-[0.2em] text-[#8A8470]">
                  {t.name} · {t.age}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ───────── FAQ ───────── */}
        <section className="mt-28">
          <p className="mb-3 font-[family-name:var(--font-plex)] text-[10px] uppercase tracking-[0.34em] text-[#C8923B]">
            § 05 — Questions on file
          </p>
          <div className="divide-y divide-[#22272D]">
            {faq.map((item, i) => (
              <details key={i} className="group py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                  <span className="font-[family-name:var(--font-news)] text-[17px] leading-[1.3] text-[#F2EEE1]">
                    {item.q}
                  </span>
                  <span className="mt-1 select-none font-[family-name:var(--font-plex)] text-[18px] leading-none text-[#C8923B] transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-[36ch] text-[14px] leading-[1.6] text-[#BDB8A6]">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* ───────── FINAL CTA ───────── */}
        <section className="mt-28 overflow-hidden rounded-[6px] border border-[#22272D] bg-[#0E141B] p-8 text-center">
          <h2 className="text-balance font-[family-name:var(--font-caslon)] text-[30px] leading-[1.05] text-[#F2EEE1]">
            {content.finalCta.headline}
          </h2>
          <button
            onClick={() => fd.onCta("final")}
            className="group mt-7 inline-flex w-full items-center justify-center gap-3 rounded-[3px] bg-[#C8923B] px-6 py-4 font-[family-name:var(--font-plex)] text-[13px] uppercase tracking-[0.14em] text-[#0B1016] transition hover:bg-[#dba74b]"
          >
            {content.finalCta.ctaLabel}
            <span className="text-base transition-transform group-hover:translate-x-1">→</span>
          </button>
        </section>

        {/* ───────── FAKE-DOOR ───────── */}
        {fd.showWaitlist && (
          <section
            id="waitlist"
            className="mt-12 rounded-[6px] border border-[#C8923B]/40 bg-[#13100A] px-6 py-9"
          >
            {fd.state === "done" ? (
              <div className="text-center">
                <p className="font-[family-name:var(--font-caslon)] text-[26px] leading-tight text-[#F2EEE1]">
                  {content.confirmation.title}
                </p>
                <p className="mt-3 text-[14.5px] leading-[1.6] text-[#BDB8A6]">
                  {content.confirmation.body}
                </p>
              </div>
            ) : (
              <>
                <p className="font-[family-name:var(--font-caslon)] text-[27px] leading-[1.1] text-[#F2EEE1]">
                  {fakedoor.title}
                </p>
                <p className="mt-3 text-[14.5px] leading-[1.6] text-[#BDB8A6]">
                  {fakedoor.body}
                </p>
                <form onSubmit={fd.submit} className="mt-6 flex flex-col gap-3">
                  <input
                    type="email"
                    required
                    value={fd.email}
                    onChange={(e) => fd.setEmail(e.target.value)}
                    placeholder={fakedoor.emailPlaceholder}
                    className="w-full rounded-[3px] border border-[#3A3F36] bg-[#0B1016] px-5 py-3.5 text-[15px] text-[#E7E2D4] placeholder:text-[#8A8470] focus:border-[#C8923B] focus:outline-none"
                  />
                  <button
                    type="submit"
                    disabled={fd.state === "loading"}
                    className="w-full rounded-[3px] bg-[#C8923B] px-6 py-3.5 font-[family-name:var(--font-plex)] text-[13px] uppercase tracking-[0.12em] text-[#0B1016] disabled:opacity-60"
                  >
                    {fd.state === "loading" ? "Sealing…" : fakedoor.submitLabel}
                  </button>
                  {fd.state === "error" && (
                    <p className="font-[family-name:var(--font-plex)] text-[12px] text-[#E0746A]">
                      Something went wrong. Try again.
                    </p>
                  )}
                </form>
                <p className="mt-4 text-center font-[family-name:var(--font-plex)] text-[11px] tracking-wide text-[#8A8470]">
                  {fakedoor.privacyLine}
                </p>
              </>
            )}
          </section>
        )}

        {/* ───────── FOOTER ───────── */}
        <footer className="mt-24 border-t border-[#22272D] pt-8 text-center">
          <p className="font-[family-name:var(--font-news)] text-[15px] italic text-[#E7E2D4]">
            {footer.lines[0]}
          </p>
          <p className="mt-3 font-[family-name:var(--font-plex)] text-[10px] uppercase tracking-[0.24em] text-[#8A8470]">
            {footer.lines.slice(1).join("  ·  ")}
          </p>
        </footer>
      </div>

      {/* ───────── STICKY CTA ───────── */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#22272D] bg-[#0B1016]/90 px-5 py-3 backdrop-blur-md">
        <button
          onClick={() => fd.onCta("sticky")}
          className="mx-auto flex w-full max-w-md items-center justify-center gap-2 rounded-[3px] bg-[#C8923B] px-6 py-3.5 font-[family-name:var(--font-plex)] text-[13px] uppercase tracking-[0.12em] text-[#0B1016]"
        >
          {hero.ctaLabel}
          <span className="text-base">→</span>
        </button>
      </div>
    </main>
  );
}
