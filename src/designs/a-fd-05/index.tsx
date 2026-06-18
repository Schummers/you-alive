"use client";

import Image from "next/image";
import { Libre_Caslon_Display, Newsreader, IBM_Plex_Mono } from "next/font/google";
import type { DesignProps } from "@/designs/types";
import { useFakeDoor } from "@/designs/shared/useFakeDoor";

// ─────────────────────────────────────────────────────────────────────────────
// Direction: "THE SEALED LEDGER" — an after-death archive rendered like a
// legal document kept in a vault at night. Near-black ink-blue ground, warm
// parchment ivory ink, one oxblood wax-seal red. Hairline ledger rules, a
// recurring seal/strongbox motif, monospaced "procedure" labels for the
// verification machinery. Solemn, institutional, exact.
// ─────────────────────────────────────────────────────────────────────────────
const caslon = Libre_Caslon_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-caslon",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-news",
  axes: ["opsz"],
  style: ["normal", "italic"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono-x",
  display: "swap",
});

export default function SealedLedgerDesign({ content, slug }: DesignProps) {
  const fd = useFakeDoor(slug);
  const { hero, problem, solution, pricing, testimonials, faq, fakedoor, finalCta, footer } =
    content;

  const ink = "#0B1014"; // vault night
  const parchment = "#EDE4D1"; // warm ivory
  const oxblood = "#9C2A26"; // wax seal red
  const muted = "#8C8674"; // faded ledger ink

  return (
    <main
      className={`${caslon.variable} ${newsreader.variable} ${plexMono.variable} relative min-h-screen overflow-hidden`}
      style={{
        backgroundColor: ink,
        color: parchment,
        fontFamily: "var(--font-news), ui-serif, Georgia, serif",
      }}
    >
      {/* Atmosphere: vignette + grain + faint vertical ledger rules */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(120% 80% at 50% -10%, rgba(156,42,38,0.12) 0%, rgba(11,16,20,0) 55%), radial-gradient(100% 60% at 50% 110%, rgba(237,228,209,0.05) 0%, rgba(11,16,20,0) 60%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.07] mix-blend-screen"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative z-10 mx-auto max-w-md px-6 pb-36">
        {/* ───────── MASTHEAD ───────── */}
        <div className="flex items-center justify-between border-b pt-7 pb-3" style={{ borderColor: "rgba(237,228,209,0.18)" }}>
          <span
            className="text-[12px] uppercase tracking-[0.34em]"
            style={{ fontFamily: "var(--font-mono-x)", color: parchment }}
          >
            You&nbsp;Alive
          </span>
          <span
            className="text-[10px] uppercase tracking-[0.28em]"
            style={{ fontFamily: "var(--font-mono-x)", color: muted }}
          >
            est. for the day after
          </span>
        </div>

        {/* ───────── HERO ───────── */}
        <header className="pt-9">
          <p
            className="text-[10px] uppercase tracking-[0.4em]"
            style={{ fontFamily: "var(--font-mono-x)", color: oxblood }}
          >
            A sealed record · opened only when needed
          </p>

          <h1
            className="mt-5 text-balance text-[40px] leading-[0.98] tracking-[-0.01em]"
            style={{ fontFamily: "var(--font-caslon)", color: parchment }}
          >
            {hero.title}
          </h1>

          {/* Hero photo as a framed, darkened archival plate */}
          <figure
            className="relative mt-8 overflow-hidden border"
            style={{ borderColor: "rgba(237,228,209,0.22)" }}
          >
            <div className="relative h-[300px] w-full">
              <Image
                src="/designs/a/hero.jpeg"
                alt=""
                fill
                priority
                sizes="(max-width: 768px) 100vw, 450px"
                className="object-cover"
                style={{ filter: "saturate(0.55) brightness(0.78) contrast(1.05)" }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(11,16,20,0.25) 0%, rgba(11,16,20,0.1) 40%, rgba(11,16,20,0.85) 100%)",
                }}
              />
              <div
                className="absolute inset-0 mix-blend-color"
                style={{ backgroundColor: "rgba(11,16,20,0.35)" }}
              />
            </div>
            {/* corner registration ticks */}
            <span aria-hidden className="absolute left-2 top-2 text-[14px]" style={{ color: parchment, opacity: 0.6 }}>+</span>
            <span aria-hidden className="absolute right-2 top-2 text-[14px]" style={{ color: parchment, opacity: 0.6 }}>+</span>
            <span aria-hidden className="absolute bottom-2 left-2 text-[14px]" style={{ color: parchment, opacity: 0.6 }}>+</span>
            <span aria-hidden className="absolute bottom-2 right-2 text-[14px]" style={{ color: parchment, opacity: 0.6 }}>+</span>
          </figure>

          <p
            className="mt-7 text-[18px] leading-[1.5]"
            style={{ fontFamily: "var(--font-news)", color: "rgba(237,228,209,0.86)" }}
          >
            {hero.subtitle}
          </p>

          <button
            onClick={() => fd.onCta("hero")}
            className="group mt-8 inline-flex w-full items-center justify-center gap-3 px-7 py-4 text-[14px] uppercase tracking-[0.18em] transition-transform duration-300 hover:-translate-y-[1px]"
            style={{
              backgroundColor: parchment,
              color: ink,
              fontFamily: "var(--font-mono-x)",
              boxShadow: "0 18px 44px -22px rgba(0,0,0,0.9)",
            }}
          >
            {hero.ctaLabel}
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </button>

          <p
            className="mt-5 flex items-center justify-center gap-2 text-[12px] tracking-wide"
            style={{ color: muted, fontFamily: "var(--font-mono-x)" }}
          >
            <span className="inline-block h-[5px] w-[5px] rounded-full" style={{ backgroundColor: oxblood }} />
            {hero.reassuranceLine}
          </p>
        </header>

        {/* ───────── PROBLEM ───────── */}
        <section className="mt-28">
          <SectionLabel>The problem</SectionLabel>
          <h2
            className="mt-5 text-balance text-[28px] leading-[1.12] tracking-[-0.01em]"
            style={{ fontFamily: "var(--font-caslon)", color: parchment }}
          >
            {problem.title}
          </h2>
          <p
            className="mt-6 text-[16px] leading-[1.6]"
            style={{ fontFamily: "var(--font-news)", color: "rgba(237,228,209,0.78)" }}
          >
            {problem.body}
          </p>
        </section>

        {/* ───────── SOLUTION ───────── */}
        <section className="mt-28">
          <SectionLabel>{solution.intro}</SectionLabel>

          <ol className="mt-9">
            {solution.steps.map((s, i) => (
              <li
                key={i}
                className="border-t py-7"
                style={{ borderColor: "rgba(237,228,209,0.16)" }}
              >
                <div className="flex items-baseline gap-3">
                  <span
                    className="text-[12px]"
                    style={{ fontFamily: "var(--font-mono-x)", color: oxblood }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="text-[10px] uppercase tracking-[0.3em]"
                    style={{ fontFamily: "var(--font-mono-x)", color: muted }}
                  >
                    {["prepare", "verify", "deliver"][i] ?? "step"}
                  </span>
                </div>
                <h3
                  className="mt-3 text-[21px] leading-[1.22] tracking-[-0.005em]"
                  style={{ fontFamily: "var(--font-caslon)", color: parchment }}
                >
                  {s.title}
                </h3>
                <p
                  className="mt-3 text-[15px] leading-[1.6]"
                  style={{ fontFamily: "var(--font-news)", color: "rgba(237,228,209,0.74)" }}
                >
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* ───────── PRICING ───────── */}
        <section ref={fd.pricingRef} className="mt-28">
          <SectionLabel>Membership</SectionLabel>
          <h2
            className="mt-5 text-balance text-[26px] leading-[1.14] tracking-[-0.01em]"
            style={{ fontFamily: "var(--font-caslon)", color: parchment }}
          >
            {pricing.title}
          </h2>
          <p
            className="mt-4 text-[15px] leading-[1.55]"
            style={{ fontFamily: "var(--font-news)", color: "rgba(237,228,209,0.72)" }}
          >
            {pricing.subtitle}
          </p>

          {/* Plans */}
          <div className="mt-8 space-y-4">
            {pricing.plans.map((plan, i) => {
              const featured = plan.highlight === true;
              return (
                <div
                  key={i}
                  className="relative border p-6"
                  style={{
                    borderColor: featured ? oxblood : "rgba(237,228,209,0.22)",
                    backgroundColor: featured ? "rgba(156,42,38,0.07)" : "transparent",
                  }}
                >
                  {featured && (
                    <span
                      className="absolute -top-[10px] left-6 px-2 py-[3px] text-[9px] uppercase tracking-[0.26em]"
                      style={{
                        backgroundColor: oxblood,
                        color: parchment,
                        fontFamily: "var(--font-mono-x)",
                      }}
                    >
                      Sealed choice
                    </span>
                  )}
                  <div className="flex items-baseline justify-between">
                    <span
                      className="text-[11px] uppercase tracking-[0.28em]"
                      style={{ fontFamily: "var(--font-mono-x)", color: muted }}
                    >
                      {plan.name}
                    </span>
                  </div>
                  <p
                    className="mt-2 text-[32px] leading-none"
                    style={{ fontFamily: "var(--font-caslon)", color: parchment }}
                  >
                    {plan.price}
                  </p>
                  <p
                    className="mt-2 text-[13px] italic"
                    style={{ fontFamily: "var(--font-news)", color: featured ? "rgba(237,228,209,0.85)" : muted }}
                  >
                    {plan.descriptor}
                  </p>
                  <button
                    onClick={() => fd.onCta("pricing")}
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 px-6 py-3.5 text-[13px] uppercase tracking-[0.18em] transition hover:opacity-90"
                    style={
                      featured
                        ? { backgroundColor: oxblood, color: parchment, fontFamily: "var(--font-mono-x)" }
                        : {
                            backgroundColor: "transparent",
                            color: parchment,
                            border: "1px solid rgba(237,228,209,0.4)",
                            fontFamily: "var(--font-mono-x)",
                          }
                    }
                  >
                    {plan.ctaLabel}
                    <span>→</span>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Included manifest */}
          <div
            className="mt-8 border-t pt-6"
            style={{ borderColor: "rgba(237,228,209,0.16)" }}
          >
            <p
              className="text-[10px] uppercase tracking-[0.3em]"
              style={{ fontFamily: "var(--font-mono-x)", color: oxblood }}
            >
              Inventory of the vault
            </p>
            <ul className="mt-4 grid grid-cols-1 gap-y-2.5">
              {pricing.included.map((item, i) => (
                <li
                  key={i}
                  className="flex items-baseline gap-3 text-[14.5px]"
                  style={{ fontFamily: "var(--font-news)", color: "rgba(237,228,209,0.82)" }}
                >
                  <span
                    className="text-[11px]"
                    style={{ fontFamily: "var(--font-mono-x)", color: muted }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p
            className="mt-7 text-center text-[12px]"
            style={{ fontFamily: "var(--font-mono-x)", color: muted }}
          >
            {pricing.scarcityLine}
          </p>
        </section>

        {/* ───────── TESTIMONIALS ───────── */}
        <section className="mt-28">
          <SectionLabel>On the record</SectionLabel>
          <div className="mt-8 space-y-9">
            {testimonials.map((t, i) => (
              <figure
                key={i}
                className="border-l-2 pl-5"
                style={{ borderColor: oxblood }}
              >
                <blockquote
                  className="text-[19px] leading-[1.4] tracking-[-0.005em]"
                  style={{ fontFamily: "var(--font-news)", fontStyle: "italic", color: parchment }}
                >
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption
                  className="mt-3 text-[11px] uppercase tracking-[0.24em]"
                  style={{ fontFamily: "var(--font-mono-x)", color: muted }}
                >
                  {t.name} · {t.age}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ───────── FAQ ───────── */}
        <section className="mt-28">
          <SectionLabel>Matters of record</SectionLabel>
          <div className="mt-6 border-t" style={{ borderColor: "rgba(237,228,209,0.16)" }}>
            {faq.map((item, i) => (
              <details
                key={i}
                className="group border-b py-5"
                style={{ borderColor: "rgba(237,228,209,0.16)" }}
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                  <span
                    className="text-[17px] leading-[1.3] tracking-[-0.005em]"
                    style={{ fontFamily: "var(--font-caslon)", color: parchment }}
                  >
                    {item.q}
                  </span>
                  <span
                    className="mt-1 select-none text-[18px] leading-none transition-transform duration-300 group-open:rotate-45"
                    style={{ color: oxblood, fontFamily: "var(--font-mono-x)" }}
                  >
                    +
                  </span>
                </summary>
                <p
                  className="mt-3 max-w-[40ch] text-[14.5px] leading-[1.6]"
                  style={{ fontFamily: "var(--font-news)", color: "rgba(237,228,209,0.76)" }}
                >
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* ───────── FINAL CTA ───────── */}
        <section className="mt-28 text-center">
          <span
            aria-hidden
            className="mx-auto flex h-14 w-14 items-center justify-center rounded-full text-[22px]"
            style={{ border: `1px solid ${oxblood}`, color: oxblood, fontFamily: "var(--font-caslon)" }}
          >
            ✦
          </span>
          <h2
            className="mt-6 text-balance text-[32px] leading-[1.05] tracking-[-0.01em]"
            style={{ fontFamily: "var(--font-caslon)", color: parchment }}
          >
            {finalCta.headline}
          </h2>
          <button
            onClick={() => fd.onCta("final")}
            className="mt-7 inline-flex w-full items-center justify-center gap-3 px-7 py-4 text-[14px] uppercase tracking-[0.18em] transition-transform duration-300 hover:-translate-y-[1px]"
            style={{
              backgroundColor: parchment,
              color: ink,
              fontFamily: "var(--font-mono-x)",
            }}
          >
            {finalCta.ctaLabel}
            <span>→</span>
          </button>
        </section>

        {/* ───────── FAKE-DOOR ───────── */}
        {fd.showWaitlist && (
          <section
            id="waitlist"
            className="mt-28 border p-7"
            style={{ borderColor: oxblood, backgroundColor: "rgba(156,42,38,0.06)" }}
          >
            {fd.state === "done" ? (
              <div className="text-center">
                <p
                  className="text-[24px] leading-tight"
                  style={{ fontFamily: "var(--font-caslon)", color: parchment }}
                >
                  {content.confirmation.title}
                </p>
                <p
                  className="mt-3 text-[15px] leading-[1.6]"
                  style={{ fontFamily: "var(--font-news)", color: "rgba(237,228,209,0.8)" }}
                >
                  {content.confirmation.body}
                </p>
              </div>
            ) : (
              <>
                <p
                  className="text-[10px] uppercase tracking-[0.34em]"
                  style={{ fontFamily: "var(--font-mono-x)", color: oxblood }}
                >
                  Waitlist · sealed
                </p>
                <p
                  className="mt-3 text-[26px] leading-[1.1] tracking-[-0.01em]"
                  style={{ fontFamily: "var(--font-caslon)", color: parchment }}
                >
                  {fakedoor.title}
                </p>
                <p
                  className="mt-3 text-[15px] leading-[1.6]"
                  style={{ fontFamily: "var(--font-news)", color: "rgba(237,228,209,0.8)" }}
                >
                  {fakedoor.body}
                </p>
                <form onSubmit={fd.submit} className="mt-6 flex flex-col gap-3">
                  <input
                    type="email"
                    required
                    value={fd.email}
                    onChange={(e) => fd.setEmail(e.target.value)}
                    placeholder={fakedoor.emailPlaceholder}
                    className="w-full border bg-transparent px-5 py-3.5 text-[15px] focus:outline-none"
                    style={{
                      borderColor: "rgba(237,228,209,0.35)",
                      color: parchment,
                      fontFamily: "var(--font-mono-x)",
                    }}
                  />
                  <button
                    type="submit"
                    disabled={fd.state === "loading"}
                    className="w-full px-6 py-3.5 text-[13px] uppercase tracking-[0.18em] disabled:opacity-60"
                    style={{ backgroundColor: oxblood, color: parchment, fontFamily: "var(--font-mono-x)" }}
                  >
                    {fd.state === "loading" ? "Sealing…" : fakedoor.submitLabel}
                  </button>
                  {fd.state === "error" && (
                    <p className="text-[13px]" style={{ color: oxblood, fontFamily: "var(--font-mono-x)" }}>
                      Something went wrong. Try again.
                    </p>
                  )}
                </form>
                <p
                  className="mt-4 text-center text-[12px]"
                  style={{ color: muted, fontFamily: "var(--font-mono-x)" }}
                >
                  {fakedoor.privacyLine}
                </p>
              </>
            )}
          </section>
        )}

        {/* ───────── FOOTER ───────── */}
        <footer
          className="mt-24 border-t pt-8 text-center"
          style={{ borderColor: "rgba(237,228,209,0.16)" }}
        >
          <p
            className="text-[16px] italic"
            style={{ fontFamily: "var(--font-news)", color: "rgba(237,228,209,0.85)" }}
          >
            {footer.lines[0]}
          </p>
          <p
            className="mt-3 text-[10px] uppercase tracking-[0.26em]"
            style={{ fontFamily: "var(--font-mono-x)", color: muted }}
          >
            {footer.lines.slice(1).join("  ·  ")}
          </p>
        </footer>
      </div>

      {/* Sticky CTA */}
      <div
        className="fixed inset-x-0 bottom-0 z-40 border-t px-6 py-3"
        style={{
          borderColor: "rgba(237,228,209,0.14)",
          backgroundColor: "rgba(11,16,20,0.9)",
          backdropFilter: "blur(8px)",
        }}
      >
        <button
          onClick={() => fd.onCta("sticky")}
          className="mx-auto flex w-full max-w-md items-center justify-center gap-2 px-6 py-3.5 text-[13px] uppercase tracking-[0.18em]"
          style={{ backgroundColor: parchment, color: ink, fontFamily: "var(--font-mono-x)" }}
        >
          {hero.ctaLabel}
          <span>→</span>
        </button>
      </div>
    </main>
  );

  function SectionLabel({ children }: { children: React.ReactNode }) {
    return (
      <div className="flex items-center gap-3">
        <span
          className="text-[10px] uppercase tracking-[0.34em]"
          style={{ fontFamily: "var(--font-mono-x)", color: oxblood }}
        >
          {children}
        </span>
        <span className="h-px flex-1" style={{ backgroundColor: "rgba(237,228,209,0.2)" }} />
      </div>
    );
  }
}
