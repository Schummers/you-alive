"use client";

import Image from "next/image";
import { Fraunces } from "next/font/google";
import type { DesignProps } from "@/designs/types";
import { useFakeDoor } from "@/designs/shared/useFakeDoor";

// Editorial / contemplative direction — channels ad image1 (hammock photograph,
// big white serif, natural calm). Magazine-style hero, soft cream paper, deep
// forest ink, terracotta accent. Italic Fraunces for the lyrical pulls.
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT"],
  style: ["normal", "italic"],
  display: "swap",
});

export default function EditorialNatureDesign({ content, slug }: DesignProps) {
  const fd = useFakeDoor(slug);
  const { hero, problem, solution, pricing, testimonials, faq, fakedoor, footer } = content;

  return (
    <main
      className={`${fraunces.variable} relative min-h-screen overflow-hidden bg-[#F4EFE6] text-[#1F2A22] selection:bg-[#1F2A22] selection:text-[#F4EFE6]`}
      style={{ fontFamily: "var(--font-geist-sans), ui-sans-serif" }}
    >
      {/* Grain overlay */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.06] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative mx-auto max-w-md px-5 pb-32">
        {/* ───────── HERO ───────── */}
        <header className="-mx-5">
          <div className="relative h-[78vh] min-h-[560px] w-full overflow-hidden">
            <Image
              src="/designs/a/hero.jpeg"
              alt=""
              fill
              priority
              sizes="(max-width: 768px) 100vw, 450px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-[#1F2A22]/85" />

            {/* Tiny masthead */}
            <div className="absolute inset-x-0 top-0 px-5 pt-7">
              <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.28em] text-white/85">
                <span className="font-[family-name:var(--font-fraunces)] text-[13px] italic tracking-normal">
                  You Alive
                </span>
                <span>vol. I · no. 01</span>
              </div>
            </div>

            {/* H1 over photo, anchored bottom */}
            <div className="absolute inset-x-0 bottom-0 px-5 pb-9">
              <h1
                className="text-balance font-[family-name:var(--font-fraunces)] text-[44px] leading-[0.94] tracking-[-0.02em] text-[#F4EFE6]"
                style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100' }}
              >
                {hero.title}
              </h1>
            </div>
          </div>

          {/* Subtitle + CTA on cream */}
          <section className="px-5 pt-8">
            <p className="text-[17px] leading-[1.5] text-[#3a4a3f]">
              {hero.subtitle}
            </p>

            <div className="mt-7 flex items-center gap-4">
              <button
                onClick={() => fd.onCta("hero")}
                className="group relative inline-flex items-center gap-3 rounded-full bg-[#1F2A22] px-7 py-4 text-[15px] font-medium text-[#F4EFE6] transition-transform duration-300 hover:-translate-y-[1px] hover:shadow-[0_18px_40px_-20px_rgba(31,42,34,0.7)]"
              >
                {hero.ctaLabel}
                <span className="text-lg transition-transform group-hover:translate-x-0.5">→</span>
              </button>
            </div>

            <p className="mt-4 flex items-center gap-2 text-[12.5px] tracking-wide text-[#6a7a6f]">
              <span className="inline-block h-[1px] w-6 bg-[#b8a888]" />
              {hero.reassuranceLine}
            </p>
          </section>
        </header>

        {/* ───────── PROBLEM ───────── */}
        <section className="mt-24">
          <p className="mb-5 text-[10px] uppercase tracking-[0.32em] text-[#9c8a6d]">
            The problem
          </p>
          <h2
            className="text-balance font-[family-name:var(--font-fraunces)] text-[30px] leading-[1.05] tracking-[-0.015em] text-[#1F2A22]"
            style={{ fontVariationSettings: '"opsz" 144' }}
          >
            <span className="italic">{problem.title.split(",")[0]},</span>
            {problem.title.includes(",") && (
              <span className="block opacity-90">
                {problem.title.split(",").slice(1).join(",").trim()}
              </span>
            )}
          </h2>
          <p className="mt-6 text-[15.5px] leading-[1.55] text-[#3a4a3f]">
            {problem.body}
          </p>
        </section>

        {/* ───────── SOLUTION ───────── */}
        <section className="mt-24">
          <div className="flex items-baseline justify-between">
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#9c8a6d]">
              How it works
            </p>
            <p className="font-[family-name:var(--font-fraunces)] text-[13px] italic text-[#6a7a6f]">
              three quiet steps
            </p>
          </div>
          <h2
            className="mt-3 font-[family-name:var(--font-fraunces)] text-[30px] leading-[1.05] tracking-[-0.015em] text-[#1F2A22]"
            style={{ fontVariationSettings: '"opsz" 144' }}
          >
            {solution.intro}
          </h2>

          <ol className="mt-10 space-y-12">
            {solution.steps.map((s, i) => (
              <li key={i} className="grid grid-cols-[auto_1fr] gap-5">
                <div className="pt-1">
                  <span
                    className="block font-[family-name:var(--font-fraunces)] text-[44px] leading-none text-[#B5754E]"
                    style={{ fontVariationSettings: '"opsz" 144' }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <h3
                    className="font-[family-name:var(--font-fraunces)] text-[20px] leading-[1.2] tracking-[-0.005em] text-[#1F2A22]"
                    style={{ fontVariationSettings: '"opsz" 32' }}
                  >
                    {s.title}
                  </h3>
                  <p className="mt-2.5 text-[14.5px] leading-[1.55] text-[#3a4a3f]">
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* ───────── PRICING ───────── */}
        <section
          ref={fd.pricingRef}
          className="relative mt-24 overflow-hidden rounded-[28px] bg-[#1F2A22] px-7 py-10 text-[#F4EFE6]"
        >
          <div
            aria-hidden
            className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-[#B5754E]/30 blur-3xl"
          />
          <p className="text-[10px] uppercase tracking-[0.32em] text-[#b8a888]">
            Membership
          </p>
          <h2
            className="mt-3 text-balance font-[family-name:var(--font-fraunces)] text-[28px] leading-[1.1] tracking-[-0.015em]"
            style={{ fontVariationSettings: '"opsz" 144' }}
          >
            {pricing.title}
          </h2>

          <div className="mt-7 flex items-baseline gap-3">
            <span
              className="font-[family-name:var(--font-fraunces)] text-[56px] leading-none"
              style={{ fontVariationSettings: '"opsz" 144' }}
            >
              {pricing.monthly.split(" ")[0]}
            </span>
            <span className="text-[14px] text-[#b8a888]">
              {pricing.monthly.split(" ").slice(1).join(" ")}
            </span>
          </div>
          <p className="mt-1.5 font-[family-name:var(--font-fraunces)] text-[13px] italic text-[#b8a888]">
            or {pricing.annual.toLowerCase()}
          </p>

          <button
            onClick={() => fd.onCta("pricing")}
            className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#F4EFE6] px-7 py-4 text-[15px] font-medium text-[#1F2A22] transition hover:bg-white"
          >
            {pricing.ctaLabel}
            <span className="text-lg">→</span>
          </button>

          <p className="mt-5 text-center text-[12px] text-[#b8a888]">
            {pricing.scarcityLine}
          </p>
        </section>

        {/* ───────── TESTIMONIALS ───────── */}
        <section className="mt-24">
          <p className="mb-5 text-[10px] uppercase tracking-[0.32em] text-[#9c8a6d]">
            From those who started
          </p>

          <div className="space-y-10">
            {testimonials.map((t, i) => (
              <figure key={i} className="relative">
                <span
                  aria-hidden
                  className="absolute -left-1 -top-3 font-[family-name:var(--font-fraunces)] text-[64px] leading-none text-[#B5754E]/50"
                  style={{ fontVariationSettings: '"opsz" 144' }}
                >
                  &ldquo;
                </span>
                <blockquote
                  className="pl-6 font-[family-name:var(--font-fraunces)] text-[19px] leading-[1.4] tracking-[-0.005em] text-[#1F2A22]"
                  style={{ fontVariationSettings: '"opsz" 32' }}
                >
                  {t.quote}
                </blockquote>
                <figcaption className="mt-3 pl-6 text-[12.5px] uppercase tracking-[0.16em] text-[#6a7a6f]">
                  {t.name} · {t.age}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ───────── FAQ ───────── */}
        <section className="mt-24">
          <p className="mb-5 text-[10px] uppercase tracking-[0.32em] text-[#9c8a6d]">
            Questions you might have
          </p>
          <div className="divide-y divide-[#1F2A22]/15">
            {faq.map((item, i) => (
              <details key={i} className="group py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-[16px] leading-[1.3]">
                  <span
                    className="font-[family-name:var(--font-fraunces)] text-[17px] tracking-[-0.005em] text-[#1F2A22]"
                    style={{ fontVariationSettings: '"opsz" 32' }}
                  >
                    {item.q}
                  </span>
                  <span className="mt-1 select-none font-[family-name:var(--font-fraunces)] text-[22px] leading-none text-[#B5754E] transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-[34ch] text-[14px] leading-[1.55] text-[#3a4a3f]">
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
            className="mt-24 rounded-[28px] border border-[#1F2A22]/15 bg-[#EFE8DA] px-6 py-9"
          >
            {fd.state === "done" ? (
              <div className="text-center">
                <p className="font-[family-name:var(--font-fraunces)] text-[24px] leading-tight text-[#1F2A22]" style={{ fontVariationSettings: '"opsz" 144' }}>
                  {content.confirmation.title}
                </p>
                <p className="mt-3 text-[14.5px] leading-[1.55] text-[#3a4a3f]">
                  {content.confirmation.body}
                </p>
              </div>
            ) : (
              <>
                <p
                  className="font-[family-name:var(--font-fraunces)] text-[26px] leading-[1.1] tracking-[-0.015em] text-[#1F2A22]"
                  style={{ fontVariationSettings: '"opsz" 144' }}
                >
                  <span className="italic">{fakedoor.title}</span>
                </p>
                <p className="mt-3 text-[14.5px] leading-[1.55] text-[#3a4a3f]">
                  {fakedoor.body}
                </p>
                <form onSubmit={fd.submit} className="mt-6 flex flex-col gap-3">
                  <input
                    type="email"
                    required
                    value={fd.email}
                    onChange={(e) => fd.setEmail(e.target.value)}
                    placeholder={fakedoor.emailPlaceholder}
                    className="w-full rounded-full border border-[#1F2A22]/20 bg-[#F4EFE6] px-5 py-3.5 text-[15px] text-[#1F2A22] placeholder:text-[#9c8a6d] focus:border-[#1F2A22] focus:outline-none"
                  />
                  <button
                    type="submit"
                    disabled={fd.state === "loading"}
                    className="w-full rounded-full bg-[#1F2A22] px-6 py-3.5 text-[15px] font-medium text-[#F4EFE6] disabled:opacity-60"
                  >
                    {fd.state === "loading" ? "..." : fakedoor.submitLabel}
                  </button>
                  {fd.state === "error" && (
                    <p className="text-[13px] text-[#B5754E]">
                      Something went wrong. Try again.
                    </p>
                  )}
                </form>
                <p className="mt-4 text-center text-[12px] text-[#6a7a6f]">
                  {fakedoor.privacyLine}
                </p>
              </>
            )}
          </section>
        )}

        {/* ───────── FOOTER ───────── */}
        <footer className="mt-20 border-t border-[#1F2A22]/15 pt-8 text-center">
          <p
            className="font-[family-name:var(--font-fraunces)] text-[15px] italic text-[#1F2A22]"
            style={{ fontVariationSettings: '"opsz" 32' }}
          >
            {footer.lines[0]}
          </p>
          <p className="mt-3 text-[11px] uppercase tracking-[0.24em] text-[#9c8a6d]">
            {footer.lines.slice(1).join(" · ")}
          </p>
        </footer>
      </div>

      {/* Sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#1F2A22]/10 bg-[#F4EFE6]/85 px-5 py-3 backdrop-blur-md">
        <button
          onClick={() => fd.onCta("sticky")}
          className="mx-auto flex w-full max-w-md items-center justify-center gap-2 rounded-full bg-[#1F2A22] px-6 py-3.5 text-[15px] font-medium text-[#F4EFE6]"
        >
          {hero.ctaLabel}
          <span className="text-base">→</span>
        </button>
      </div>
    </main>
  );
}
