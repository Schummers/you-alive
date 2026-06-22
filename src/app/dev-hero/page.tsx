"use client";

// DEV ONLY — 5 hero gradient/halo proposals for b-manual-01.
// Goal: find the right halo level (the violet ad-halo was too strong / too much
// contrast). All 5 use ONLY the site lavender palette, no saturated violet.
// Stacked top-to-bottom, each labelled. Not wired into the registry/gallery.

import { Fraunces, DM_Sans } from "next/font/google";
import { ArrowRight } from "lucide-react";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  axes: ["opsz", "SOFT"],
  style: ["normal", "italic"],
  display: "swap",
});
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-body", display: "swap" });

const INK = "#26235A";
const SOFT = "#5A5690";
const TITLE_ACCENT = "#5A5690";
const ACCENT = "#6F69C9";
const LIGHT = "#F7F4FF";

// Each level uses only site lavender tones (#F7F4FF / #F3ECFF / #EFEAFF /
// #EBE6FF / #D6E4FF). They differ in halo intensity + ghost color.
const LEVELS = [
  {
    label: "1 · Le plus doux",
    field: "linear-gradient(180deg,#F7F4FF 0%,#F3ECFF 100%)",
    halo:
      "radial-gradient(56% 50% at 50% 42%, rgba(214,228,255,0.40) 0%, rgba(214,228,255,0) 70%)",
    ghost: "#EBE6FF",
    ghostShadow: "none",
  },
  {
    label: "2 · Doux",
    field: "linear-gradient(180deg,#F7F4FF 0%,#F3ECFF 100%)",
    halo:
      "radial-gradient(56% 52% at 50% 42%, rgba(214,228,255,0.62) 0%, rgba(235,230,255,0.30) 45%, rgba(214,228,255,0) 72%)",
    ghost: "rgba(255,255,255,0.68)",
    ghostShadow: "0 2px 36px rgba(90,86,144,0.12)",
  },
  {
    label: "3 · Médian",
    field: "linear-gradient(180deg,#F7F4FF 0%,#EFEAFF 100%)",
    halo:
      "radial-gradient(56% 52% at 50% 42%, rgba(198,210,245,0.70) 0%, rgba(214,228,255,0.34) 46%, rgba(214,228,255,0) 72%)",
    ghost: "rgba(255,255,255,0.78)",
    ghostShadow: "0 2px 40px rgba(90,86,144,0.14)",
  },
  {
    label: "4 · Médian froid (periwinkle)",
    field: "linear-gradient(180deg,#F7F4FF 0%,#EFEAFF 100%)",
    halo:
      "radial-gradient(56% 52% at 50% 40%, rgba(176,190,235,0.72) 0%, rgba(214,228,255,0.40) 44%, rgba(214,228,255,0) 72%)",
    ghost: "rgba(255,255,255,0.82)",
    ghostShadow: "0 2px 40px rgba(90,86,144,0.16)",
  },
  {
    label: "5 · Diffus (2 halos, sans point chaud)",
    field: "linear-gradient(180deg,#F7F4FF 0%,#F1ECFC 100%)",
    halo:
      "radial-gradient(70% 60% at 34% 30%, rgba(235,230,255,0.75) 0%, rgba(235,230,255,0) 60%)," +
      "radial-gradient(62% 56% at 76% 46%, rgba(214,228,255,0.58) 0%, rgba(214,228,255,0) 60%)",
    ghost: "#E2DCF4",
    ghostShadow: "none",
  },
];

function Hero({
  field,
  halo,
  ghost,
  ghostShadow,
  label,
}: {
  field: string;
  halo: string;
  ghost: string;
  ghostShadow: string;
  label: string;
}) {
  return (
    <section
      className={`${fraunces.variable} ${dmSans.variable} font-[family-name:var(--font-body)] relative overflow-hidden`}
      style={{ background: field, color: INK }}
    >
      <div className="relative z-10 mx-auto max-w-xl px-6 pb-20">
        <div className="flex items-center justify-between pt-7">
          <span
            className="font-[family-name:var(--font-display)] text-[18px] italic"
            style={{ fontVariationSettings: '"opsz" 20, "SOFT" 60' }}
          >
            You Alive<span style={{ color: ACCENT }}>?</span>
          </span>
          <span
            className="rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em]"
            style={{ background: INK, color: LIGHT }}
          >
            {label}
          </span>
        </div>

        <div className="relative pt-12 md:pt-16">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-[38%] -z-0 h-[560px] w-[680px] -translate-x-1/2 -translate-y-1/2 blur-[60px]"
            style={{ background: halo }}
          />
          <p
            aria-hidden
            className="pointer-events-none -mx-2 select-none font-[family-name:var(--font-display)] leading-[0.84] tracking-[-0.03em]"
            style={{ color: ghost }}
          >
            <span
              className="block"
              style={{
                fontSize: "clamp(92px, 30vw, 140px)",
                fontVariationSettings: '"opsz" 144, "SOFT" 100',
                textShadow: ghostShadow,
              }}
            >
              You
            </span>
            <span
              className="block"
              style={{
                fontSize: "clamp(92px, 30vw, 140px)",
                fontVariationSettings: '"opsz" 144, "SOFT" 100',
                textShadow: ghostShadow,
              }}
            >
              Alive?
            </span>
          </p>

          <div className="relative -mt-10 md:-mt-14">
            <h1
              className="font-[family-name:var(--font-display)] text-[42px] leading-[1.06] tracking-[-0.02em] md:text-[56px]"
              style={{ fontVariationSettings: '"opsz" 72, "SOFT" 50' }}
            >
              Leave nothing{" "}
              <span className="italic" style={{ color: TITLE_ACCENT }}>
                unsaid.
              </span>{" "}
              Leave nothing{" "}
              <span className="italic" style={{ color: TITLE_ACCENT }}>
                unfound.
              </span>
            </h1>
            <p className="mt-6 max-w-[40ch] text-[16px] leading-[1.68]" style={{ color: SOFT }}>
              No scramble for passwords, no guessing your wishes. Just the answers you left them,
              ready the day they&rsquo;re needed.
            </p>
            <button
              className="mt-9 inline-flex items-center gap-2.5 rounded-[18px] px-7 py-4 text-[15px] font-semibold"
              style={{ backgroundColor: INK, color: LIGHT }}
            >
              Start my plan
              <ArrowRight style={{ width: 18, height: 18 }} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function DevHeroPage() {
  return (
    <main>
      {LEVELS.map((l) => (
        <Hero key={l.label} {...l} />
      ))}
    </main>
  );
}
