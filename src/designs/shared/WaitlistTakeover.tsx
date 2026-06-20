"use client";

import { ArrowLeft, Check, Lock, Zap } from "lucide-react";
import type { SiteContent } from "@/content/site";

// Full-screen waitlist takeover shared by the manual-A designs. Rendered in
// place of the landing when `fd.showWaitlist` is true (the design early-returns
// this). Visual treatment matches the You Alive A palette (cream / forest /
// terra, Fraunces + Quicksand); `align` switches between the left-aligned
// designs (manual-01 / -03) and the centered one (manual-02).
//
// Decorative blobs are static gradients here (no animation classes) because the
// design's own <style> keyframes aren't mounted when only the takeover renders.

const CREAM = "#F4EFE6";
const FOREST = "#1F2A22";
const TERRA = "#B5754E";

type Fd = {
  email: string;
  setEmail: (v: string) => void;
  features: string[];
  toggleFeature: (id: string) => void;
  closeWaitlist: () => void;
  state: "idle" | "loading" | "done" | "error";
  submit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export function WaitlistTakeover({
  fd,
  fakedoor,
  confirmation,
  align = "left",
  fontVars,
}: {
  fd: Fd;
  fakedoor: SiteContent["fakedoor"];
  confirmation: SiteContent["confirmation"];
  align?: "left" | "center";
  fontVars: string;
}) {
  const centered = align === "center";
  const features = fakedoor.features ?? [];
  const loading = fd.state === "loading";

  return (
    <main
      className={`${fontVars} font-[family-name:var(--font-quicksand)] relative min-h-screen overflow-hidden antialiased`}
      style={{ backgroundColor: CREAM, color: FOREST }}
    >
      {/* Static warm washes (no animation — design keyframes aren't mounted here). */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute -left-24 top-[12vh] h-72 w-72 rounded-[58%_42%_55%_45%/55%_48%_52%_45%] opacity-70 blur-2xl"
          style={{
            background:
              "radial-gradient(circle at 35% 35%, rgba(181,117,78,0.28), rgba(181,117,78,0) 70%)",
          }}
        />
        <div
          className="absolute right-[-25%] bottom-[-10%] h-80 w-80 rounded-[42%_58%_46%_54%/52%_44%_56%_48%] opacity-55 blur-2xl"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(31,42,34,0.14), rgba(31,42,34,0) 72%)",
          }}
        />
      </div>

      <div className="mx-auto flex h-screen max-w-xl flex-col px-6 py-5">
        {/* Top bar: back + badge */}
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={fd.closeWaitlist}
            className="group inline-flex items-center gap-1.5 text-[13px] transition-transform duration-300 hover:-translate-x-[1px]"
            style={{ color: "#6a7a6f" }}
          >
            <ArrowLeft style={{ width: 15, height: 15 }} strokeWidth={2.25} />
            Back to home
          </button>
          {fakedoor.badge && (
            <span
              className="rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em]"
              style={{ borderColor: "rgba(181,117,78,0.35)", color: TERRA, backgroundColor: "rgba(181,117,78,0.1)" }}
            >
              {fakedoor.badge}
            </span>
          )}
        </div>

        {/* Center content */}
        <div
          className={`flex flex-1 flex-col justify-center py-6 ${
            centered ? "items-center text-center" : ""
          }`}
        >
          {fd.state === "done" ? (
            <div className={centered ? "mx-auto max-w-[42ch]" : "max-w-[42ch]"}>
              <h1
                className="font-[family-name:var(--font-fraunces)] text-[28px] leading-tight tracking-[-0.01em]"
                style={{ fontVariationSettings: '"opsz" 48, "SOFT" 90', fontWeight: 480 }}
              >
                {confirmation.title}
              </h1>
              <p className="mt-4 text-[15px] leading-[1.7]" style={{ color: "#4a5a4f" }}>
                {confirmation.body}
              </p>
            </div>
          ) : (
            <div className="w-full">
              <h1
                className="font-[family-name:var(--font-fraunces)] text-[34px] leading-[1.12] tracking-[-0.015em] sm:text-[40px]"
                style={{ fontVariationSettings: '"opsz" 72, "SOFT" 90', fontWeight: 470 }}
              >
                {fakedoor.title}
              </h1>
              <p
                className={`mt-4 text-[15px] leading-[1.7] ${centered ? "mx-auto" : ""} max-w-[46ch]`}
                style={{ color: "#4a5a4f" }}
              >
                {fakedoor.body}
              </p>

              <form
                onSubmit={fd.submit}
                className={`mt-6 w-full ${centered ? "mx-auto max-w-[440px]" : "max-w-[440px]"}`}
              >
                <label
                  htmlFor="ya-email"
                  className={`block text-[13px] font-semibold ${centered ? "text-center" : ""}`}
                >
                  Your email{" "}
                  <span aria-hidden="true" style={{ color: TERRA }}>*</span>
                </label>
                <input
                  id="ya-email"
                  type="email"
                  required
                  value={fd.email}
                  onChange={(e) => fd.setEmail(e.target.value)}
                  placeholder={fakedoor.emailPlaceholder}
                  className="mt-2 w-full rounded-full border border-[#1F2A22]/15 bg-white/70 px-6 py-4 text-[15px] text-[#1F2A22] placeholder:text-[#9c8a6d] focus:border-[#1F2A22] focus:outline-none focus:ring-2 focus:ring-[#B5754E]/40"
                />
                {fakedoor.fieldNote && (
                  <p
                    className={`mt-2 inline-flex items-center gap-1.5 text-[12px] font-semibold ${
                      centered ? "justify-center" : ""
                    }`}
                    style={{ color: TERRA }}
                  >
                    <Zap style={{ width: 13, height: 13 }} strokeWidth={2.25} />
                    {fakedoor.fieldNote}
                  </p>
                )}

                {features.length > 0 && (
                  <fieldset className="mt-5 border-0 p-0">
                    <legend
                      className={`mb-3 text-[13px] font-semibold ${centered ? "w-full text-center" : ""}`}
                    >
                      {fakedoor.featuresTitle}{" "}
                      <span style={{ color: "#9c8a6d", fontWeight: 400 }}>(optional)</span>
                    </legend>
                    <div className={`flex flex-wrap gap-2 ${centered ? "justify-center" : ""}`}>
                      {features.map((f) => {
                        const on = fd.features.includes(f.id);
                        return (
                          <button
                            key={f.id}
                            type="button"
                            aria-pressed={on}
                            onClick={() => fd.toggleFeature(f.id)}
                            className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[11.5px] font-semibold transition-colors duration-200"
                            style={
                              on
                                ? { backgroundColor: FOREST, borderColor: FOREST, color: CREAM }
                                : {
                                    backgroundColor: "transparent",
                                    borderColor: "rgba(31,42,34,0.18)",
                                    color: "#4a5a4f",
                                  }
                            }
                          >
                            {on && <Check style={{ width: 13, height: 13 }} strokeWidth={2.5} />}
                            {f.label}
                          </button>
                        );
                      })}
                    </div>
                  </fieldset>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-5 w-full rounded-full bg-[#1F2A22] px-6 py-4 text-[15px] font-semibold text-[#F4EFE6] transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-[1px] active:scale-[0.98] disabled:opacity-60"
                >
                  {loading ? "…" : fakedoor.submitLabel}
                </button>

                {fd.state === "error" && (
                  <p className="mt-3 text-[13px]" style={{ color: TERRA }}>
                    Something went wrong. Try again.
                  </p>
                )}

                <p
                  className="mt-3 flex w-full items-center justify-center gap-1.5 text-[12px]"
                  style={{ color: "#6a7a6f" }}
                >
                  <Lock style={{ width: 12, height: 12 }} strokeWidth={2.25} />
                  {fakedoor.privacyLine}
                </p>
              </form>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
