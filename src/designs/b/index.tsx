"use client";

import { Newsreader } from "next/font/google";
import type { DesignProps } from "@/designs/types";
import { useFakeDoor } from "@/designs/shared/useFakeDoor";

// Soft / wellness direction — channels ad image2 (lavender→periwinkle mesh
// gradient, dark navy serif, airy and tender). High-contrast Newsreader serif
// with italics, deep indigo ink, dreamy gradient atmosphere, generous space.
const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  style: ["normal", "italic"],
  display: "swap",
});

const INK = "#26235A";
const SOFT = "#5A5690";

export default function SoftWellnessDesign({ content, slug }: DesignProps) {
  const fd = useFakeDoor(slug);
  const { hero, problem, solution, pricing, testimonials, faq, fakedoor, footer } = content;

  return (
    <main
      className={`${newsreader.variable} relative min-h-screen overflow-hidden text-[${INK}]`}
      style={{
        color: INK,
        fontFamily: "var(--font-geist-sans), ui-sans-serif",
        background:
          "radial-gradient(120% 80% at 15% 0%, #EBE6FF 0%, transparent 55%), radial-gradient(120% 90% at 90% 15%, #D6E4FF 0%, transparent 50%), radial-gradient(140% 120% at 50% 100%, #F3ECFF 0%, #F7F4FF 60%)",
      }}
    >
      <div className="relative mx-auto max-w-md px-6 pb-32">
        {/* ───────── HERO ───────── */}
        <header className="pt-9">
          <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.28em]" style={{ color: SOFT }}>
            <span className="font-[family-name:var(--font-newsreader)] text-[15px] italic tracking-normal" style={{ color: INK }}>
              You Alive
            </span>
            <span>est. for the living</span>
          </div>

          <div className="pt-16 pb-2 text-center">
            {/* floating soft orb */}
            <div className="mx-auto mb-9 h-16 w-16 rounded-full" style={{ background: "radial-gradient(circle at 35% 30%, #fff 0%, #C9B8FF 45%, #9C8DF0 100%)", boxShadow: "0 20px 50px -18px rgba(120,100,240,0.7)" }} />

            <h1
              className="text-balance font-[family-name:var(--font-newsreader)] text-[46px] font-light leading-[1.0] tracking-[-0.02em]"
              style={{ color: INK }}
            >
              {hero.title}
            </h1>
            <p className="mx-auto mt-6 max-w-[30ch] text-[16px] leading-[1.55]" style={{ color: SOFT }}>
              {hero.subtitle}
            </p>

            <button
              onClick={() => fd.onCta("hero")}
              className="mt-9 inline-flex items-center gap-2 rounded-full px-8 py-4 text-[15px] font-medium text-white transition-transform duration-300 hover:-translate-y-[2px]"
              style={{ background: INK, boxShadow: "0 18px 44px -18px rgba(38,35,90,0.65)" }}
            >
              {hero.ctaLabel}
            </button>
            <p className="mt-4 text-[12.5px]" style={{ color: SOFT }}>
              {hero.reassuranceLine}
            </p>
          </div>
        </header>

        {/* ───────── PROBLEM ───────── */}
        <section className="mt-24 text-center">
          <h2
            className="text-balance font-[family-name:var(--font-newsreader)] text-[30px] font-light italic leading-[1.12] tracking-[-0.01em]"
            style={{ color: INK }}
          >
            {problem.title}
          </h2>
          <p className="mx-auto mt-5 max-w-[34ch] text-[15.5px] leading-[1.6]" style={{ color: SOFT }}>
            {problem.body}
          </p>
        </section>

        {/* ───────── SOLUTION ───────── */}
        <section className="mt-24">
          <p className="text-center font-[family-name:var(--font-newsreader)] text-[13px] italic" style={{ color: SOFT }}>
            {solution.intro}
          </p>
          <div className="mt-8 space-y-5">
            {solution.steps.map((s, i) => (
              <div
                key={i}
                className="rounded-[26px] border border-white/70 bg-white/55 p-6 backdrop-blur-sm"
                style={{ boxShadow: "0 14px 40px -28px rgba(38,35,90,0.5)" }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="flex h-8 w-8 items-center justify-center rounded-full font-[family-name:var(--font-newsreader)] text-[15px] italic text-white"
                    style={{ background: INK }}
                  >
                    {i + 1}
                  </span>
                  <span className="h-[1px] flex-1" style={{ background: "linear-gradient(90deg,#C9B8FF,transparent)" }} />
                </div>
                <h3 className="mt-4 font-[family-name:var(--font-newsreader)] text-[19px] font-medium leading-[1.25]" style={{ color: INK }}>
                  {s.title}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.55]" style={{ color: SOFT }}>
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ───────── PRICING ───────── */}
        <section ref={fd.pricingRef} className="mt-24">
          <div
            className="relative overflow-hidden rounded-[30px] p-8 text-center text-white"
            style={{ background: "linear-gradient(160deg,#3A357A 0%,#26235A 55%,#1C1A45 100%)", boxShadow: "0 30px 70px -30px rgba(38,35,90,0.8)" }}
          >
            <div aria-hidden className="absolute -left-10 -top-10 h-40 w-40 rounded-full" style={{ background: "radial-gradient(circle,#9C8DF0 0%,transparent 70%)", opacity: 0.55 }} />
            <h2 className="relative text-balance font-[family-name:var(--font-newsreader)] text-[27px] font-light leading-[1.15]">
              {pricing.title}
            </h2>
            <div className="relative mt-7 flex items-baseline justify-center gap-2">
              <span className="font-[family-name:var(--font-newsreader)] text-[58px] font-light leading-none">
                {pricing.monthly.split(" ")[0]}
              </span>
              <span className="text-[14px] text-white/70">{pricing.monthly.split(" ").slice(1).join(" ")}</span>
            </div>
            <p className="relative mt-1 font-[family-name:var(--font-newsreader)] text-[13px] italic text-white/65">
              or {pricing.annual.toLowerCase()}
            </p>
            <button
              onClick={() => fd.onCta("pricing")}
              className="relative mt-7 w-full rounded-full bg-white px-7 py-4 text-[15px] font-medium"
              style={{ color: INK }}
            >
              {pricing.ctaLabel}
            </button>
            <p className="relative mt-5 text-[12px] text-white/60">{pricing.scarcityLine}</p>
          </div>
        </section>

        {/* ───────── TESTIMONIALS ───────── */}
        <section className="mt-24 space-y-6">
          {testimonials.map((t, i) => (
            <figure key={i} className="rounded-[26px] border border-white/70 bg-white/50 p-6 backdrop-blur-sm">
              <blockquote className="font-[family-name:var(--font-newsreader)] text-[18px] font-light italic leading-[1.4]" style={{ color: INK }}>
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 flex items-center gap-2 text-[12.5px] uppercase tracking-[0.14em]" style={{ color: SOFT }}>
                <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: "#9C8DF0" }} />
                {t.name} · {t.age}
              </figcaption>
            </figure>
          ))}
        </section>

        {/* ───────── FAQ ───────── */}
        <section className="mt-24">
          <h2 className="mb-6 text-center font-[family-name:var(--font-newsreader)] text-[24px] font-light italic" style={{ color: INK }}>
            Gentle answers
          </h2>
          <div className="space-y-3">
            {faq.map((item, i) => (
              <details key={i} className="group rounded-[20px] border border-white/70 bg-white/45 px-5 py-4 backdrop-blur-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-[15.5px] font-medium" style={{ color: INK }}>
                  {item.q}
                  <span className="select-none text-[20px] leading-none transition-transform duration-300 group-open:rotate-45" style={{ color: "#9C8DF0" }}>+</span>
                </summary>
                <p className="mt-3 text-[14px] leading-[1.55]" style={{ color: SOFT }}>
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* ───────── FAKE-DOOR ───────── */}
        {fd.showWaitlist && (
          <section
            id="waitlist"
            className="mt-24 rounded-[30px] border border-white/70 bg-white/60 p-8 text-center backdrop-blur"
            style={{ boxShadow: "0 24px 60px -30px rgba(38,35,90,0.6)" }}
          >
            {fd.state === "done" ? (
              <>
                <h3 className="font-[family-name:var(--font-newsreader)] text-[26px] font-light italic" style={{ color: INK }}>
                  {content.confirmation.title}
                </h3>
                <p className="mt-3 text-[14.5px] leading-[1.55]" style={{ color: SOFT }}>
                  {content.confirmation.body}
                </p>
              </>
            ) : (
              <>
                <h3 className="font-[family-name:var(--font-newsreader)] text-[30px] font-light italic" style={{ color: INK }}>
                  {fakedoor.title}
                </h3>
                <p className="mx-auto mt-3 max-w-[32ch] text-[14.5px] leading-[1.55]" style={{ color: SOFT }}>
                  {fakedoor.body}
                </p>
                <form onSubmit={fd.submit} className="mt-6 flex flex-col gap-3">
                  <input
                    type="email"
                    required
                    value={fd.email}
                    onChange={(e) => fd.setEmail(e.target.value)}
                    placeholder={fakedoor.emailPlaceholder}
                    className="w-full rounded-full border border-[#C9B8FF] bg-white px-5 py-3.5 text-[15px] outline-none focus:border-[#9C8DF0]"
                    style={{ color: INK }}
                  />
                  <button
                    type="submit"
                    disabled={fd.state === "loading"}
                    className="w-full rounded-full px-6 py-3.5 text-[15px] font-medium text-white disabled:opacity-60"
                    style={{ background: INK }}
                  >
                    {fd.state === "loading" ? "..." : fakedoor.submitLabel}
                  </button>
                  {fd.state === "error" && <p className="text-[13px] text-rose-500">Something went wrong. Try again.</p>}
                </form>
                <p className="mt-4 text-[12px]" style={{ color: SOFT }}>{fakedoor.privacyLine}</p>
              </>
            )}
          </section>
        )}

        {/* ───────── FOOTER ───────── */}
        <footer className="mt-20 text-center">
          <p className="font-[family-name:var(--font-newsreader)] text-[15px] italic" style={{ color: INK }}>
            {footer.lines[0]}
          </p>
          <p className="mt-3 text-[11px] uppercase tracking-[0.22em]" style={{ color: SOFT }}>
            {footer.lines.slice(1).join(" · ")}
          </p>
        </footer>
      </div>

      {/* Sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 px-6 py-3" style={{ background: "rgba(247,244,255,0.8)", backdropFilter: "blur(12px)", borderTop: "1px solid rgba(156,141,240,0.25)" }}>
        <button
          onClick={() => fd.onCta("sticky")}
          className="mx-auto block w-full max-w-md rounded-full px-6 py-3.5 text-[15px] font-medium text-white"
          style={{ background: INK }}
        >
          {hero.ctaLabel}
        </button>
      </div>
    </main>
  );
}
