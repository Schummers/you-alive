"use client";

import { ArrowLeft, Check, Lock, Zap } from "lucide-react";
import type { SiteContent } from "@/content/site";

// Full-screen "Start my plan" takeover for the c-manual designs — the C-skin
// counterpart of shared/WaitlistTakeover (which is A's cream/terra version).
// Deep forest, electric lime, Bricolage + Space Grotesk. Rendered in place of
// the landing when fd.showWaitlist is true (RetroForestBase early-returns it).

const FOREST = "#16271F";
const CARD = "#1d3328";
const LIME = "#C8F169";
const WHITE_1 = "#FAF7EF";
const MUTED_D = "rgba(250,247,239,0.82)";
const MUTED_D2 = "rgba(250,247,239,0.6)";

type Fd = {
  email: string;
  setEmail: (v: string) => void;
  features: string[];
  toggleFeature: (id: string) => void;
  otherFeature: string;
  setOtherFeature: (v: string) => void;
  closeWaitlist: () => void;
  state: "idle" | "loading" | "done" | "error";
  submit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export function RetroForestTakeover({
  fd,
  fakedoor,
  confirmation,
  fontVars,
  ctaRadius = 18,
}: {
  fd: Fd;
  fakedoor: SiteContent["fakedoor"];
  confirmation: SiteContent["confirmation"];
  fontVars: string;
  ctaRadius?: number;
}) {
  const features = fakedoor.features ?? [];
  const loading = fd.state === "loading";
  const canSubmit = fd.email.trim().length > 0;

  return (
    <main
      className={`${fontVars} font-[family-name:var(--font-body)] relative flex h-dvh flex-col overflow-hidden antialiased`}
      style={{ backgroundColor: FOREST, color: WHITE_1 }}
    >
      <style>{`
        .ya-tinput { background-color: ${CARD}; color: ${WHITE_1}; border: 1px solid rgba(250,247,239,0.2); }
        .ya-tinput::placeholder { color: rgba(250,247,239,0.45); }
        .ya-tinput:focus { outline: 2px solid ${LIME}; outline-offset: 2px; border-color: transparent; }
        .ya-tsubmit { transition: transform .3s cubic-bezier(.16,1,.3,1); }
        .ya-tsubmit:active { transform: scale(.98); }
      `}</style>

      {/* Faint ambient lime glow, low and quiet. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 left-1/2 -z-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full opacity-[0.10] blur-[100px]"
        style={{ backgroundColor: LIME }}
      />

      {/* Top bar */}
      <div className="mx-auto flex w-full max-w-xl shrink-0 items-center justify-between px-6 pb-3 pt-5">
        <button
          type="button"
          onClick={fd.closeWaitlist}
          className="group inline-flex items-center gap-1.5 text-[13px] transition-transform duration-300 hover:-translate-x-[1px]"
          style={{ color: MUTED_D }}
        >
          <ArrowLeft style={{ width: 15, height: 15 }} strokeWidth={2.25} />
          Back to home
        </button>
        {fakedoor.badge && (
          <span
            className="rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em]"
            style={{ borderColor: "rgba(200,241,105,0.4)", color: LIME, backgroundColor: "rgba(200,241,105,0.1)" }}
          >
            {fakedoor.badge}
          </span>
        )}
      </div>

      {/* Scrollable content */}
      <div className="mx-auto w-full max-w-xl flex-1 overflow-y-auto px-6 pb-4 pt-4">
        {fd.state === "done" ? (
          <div className="max-w-[42ch]">
            <h1
              className="font-[family-name:var(--font-display)] text-[30px] font-extrabold uppercase italic leading-[1.02] tracking-[-0.02em]"
              style={{ color: LIME }}
            >
              {confirmation.title}
            </h1>
            <p className="mt-4 text-[15px] leading-[1.7]" style={{ color: MUTED_D }}>
              {confirmation.body}
            </p>
          </div>
        ) : (
          <div className="w-full">
            <h1
              className="font-[family-name:var(--font-display)] text-[34px] font-extrabold leading-[1.08] tracking-[-0.02em] sm:text-[40px]"
              style={{ color: WHITE_1 }}
            >
              {fakedoor.title}
            </h1>
            <p className="mt-4 max-w-[46ch] text-[15px] leading-[1.7]" style={{ color: MUTED_D }}>
              {fakedoor.body}
            </p>

            <form id="ya-form" onSubmit={fd.submit} className="mt-7 w-full max-w-[440px]">
              <label htmlFor="ya-email" className="block text-[13px] font-bold uppercase tracking-[0.16em]">
                Leave your email for 20% off at launch
                <span aria-hidden="true" style={{ color: LIME }}>
                  *
                </span>
              </label>
              <input
                id="ya-email"
                type="email"
                required
                value={fd.email}
                onChange={(e) => fd.setEmail(e.target.value)}
                placeholder={fakedoor.emailPlaceholder}
                className="ya-tinput mt-2 w-full rounded-[18px] px-5 py-4 text-[15px]"
              />
              {fakedoor.fieldNote && (
                <p className="mt-2 inline-flex items-center gap-1.5 text-[12px] font-bold" style={{ color: LIME }}>
                  <Zap style={{ width: 13, height: 13 }} strokeWidth={2.25} />
                  {fakedoor.fieldNote}
                </p>
              )}

              {features.length > 0 && (
                <fieldset className="mt-6 border-0 p-0">
                  <legend className="mb-3 text-[13px] font-bold uppercase tracking-[0.16em]">
                    {fakedoor.featuresTitle}{" "}
                    <span style={{ color: MUTED_D2, fontWeight: 400 }}>(optional)</span>
                  </legend>
                  <div className="flex flex-wrap gap-2">
                    {features.map((f) => {
                      const on = fd.features.includes(f.id);
                      return (
                        <button
                          key={f.id}
                          type="button"
                          aria-pressed={on}
                          onClick={() => fd.toggleFeature(f.id)}
                          className="inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-[12px] font-semibold transition-colors duration-200"
                          style={
                            on
                              ? { backgroundColor: LIME, borderColor: LIME, color: FOREST }
                              : { backgroundColor: "transparent", borderColor: "rgba(250,247,239,0.22)", color: MUTED_D }
                          }
                        >
                          {on && <Check style={{ width: 13, height: 13 }} strokeWidth={2.5} />}
                          {f.label}
                        </button>
                      );
                    })}
                  </div>
                  <input
                    type="text"
                    value={fd.otherFeature}
                    onChange={(e) => fd.setOtherFeature(e.target.value)}
                    placeholder="Something else?"
                    maxLength={80}
                    className="ya-tinput mt-2 w-full rounded-full px-4 py-2 text-[12px] font-semibold"
                  />
                </fieldset>
              )}

              {fd.state === "error" && (
                <p className="mt-4 text-[13px]" style={{ color: LIME }}>
                  Something went wrong. Try again.
                </p>
              )}
            </form>
          </div>
        )}
      </div>

      {/* Sticky submit footer — hidden on confirmation */}
      {fd.state !== "done" && (
        <div className="relative mx-auto w-full max-w-xl shrink-0 px-6 pb-5 pt-4" style={{ backgroundColor: FOREST }}>
          <div
            aria-hidden
            className="pointer-events-none absolute -top-12 left-0 right-0 h-12"
            style={{ background: `linear-gradient(to bottom, rgba(22,39,31,0), ${FOREST})` }}
          />
          <button
            type="submit"
            form="ya-form"
            disabled={loading || !canSubmit}
            className="ya-tsubmit w-full px-6 py-4 text-[15px] font-bold uppercase tracking-wide"
            style={{ backgroundColor: LIME, color: FOREST, borderRadius: ctaRadius, opacity: canSubmit ? 1 : 0.4 }}
          >
            {loading ? "Reserving…" : fakedoor.submitLabel}
          </button>
          <p className="mt-3 flex w-full items-center justify-center gap-1.5 text-[12px]" style={{ color: MUTED_D2 }}>
            <Lock style={{ width: 12, height: 12 }} strokeWidth={2.25} />
            {fakedoor.privacyLine}
          </p>
        </div>
      )}
    </main>
  );
}
