"use client";

import { useEffect, useRef, useState } from "react";
import type { Variant } from "@/content/variants";
import { track } from "@/lib/analytics";

// Mobile-first landing for paid traffic. Structure: Hero -> Problem ->
// Solution & Benefits -> Pricing -> Reassurance -> Footer.
// Same structure for every variant; only the copy (value prop) changes.
export default function Landing({ variant }: { variant: Variant }) {
  const [showWaitlist, setShowWaitlist] = useState(false);
  const pricingRef = useRef<HTMLElement | null>(null);

  // Fire pricing_view once when the pricing block scrolls into view.
  useEffect(() => {
    const el = pricingRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          track("pricing_view", { variant: variant.id });
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [variant.id]);

  const onCta = (placement: string) => {
    track("cta_click", { variant: variant.id, placement });
    setShowWaitlist(true);
    requestAnimationFrame(() =>
      document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })
    );
  };

  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col gap-16 px-5 py-10">
      {/* Hero */}
      <section className="flex flex-col gap-4 pt-6">
        <h1 className="text-3xl font-semibold leading-tight">{variant.hero.title}</h1>
        <p className="text-lg text-gray-600">{variant.hero.subtitle}</p>
        <button
          onClick={() => onCta("hero")}
          className="rounded-full bg-black px-6 py-3 text-base font-medium text-white"
        >
          {variant.hero.cta}
        </button>
        <p className="text-sm text-gray-400">{variant.hero.reassurance}</p>
      </section>

      {/* Problem */}
      <section className="flex flex-col gap-3">
        <h2 className="text-2xl font-semibold">{variant.problem.heading}</h2>
        <p className="text-gray-600">{variant.problem.body}</p>
      </section>

      {/* Solution & benefits */}
      <section className="flex flex-col gap-5">
        <h2 className="text-2xl font-semibold">{variant.solution.heading}</h2>
        <ol className="flex flex-col gap-5">
          {variant.solution.steps.map((s, i) => (
            <li key={i} className="flex gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-black text-sm text-white">
                {i + 1}
              </span>
              <div>
                <p className="font-medium">{s.title}</p>
                <p className="text-sm text-gray-600">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Pricing */}
      <section ref={pricingRef} className="flex flex-col items-center gap-4 rounded-2xl bg-gray-50 px-6 py-8 text-center">
        <h2 className="text-2xl font-semibold">{variant.pricing.heading}</h2>
        <p>
          <span className="text-4xl font-bold">{variant.pricing.price}</span>
          <span className="text-gray-500">{variant.pricing.period}</span>
        </p>
        <button
          onClick={() => onCta("pricing")}
          className="w-full rounded-full bg-black px-6 py-3 text-base font-medium text-white"
        >
          {variant.pricing.cta}
        </button>
      </section>

      {/* Reassurance / testimonials */}
      <section className="flex flex-col gap-4">
        {variant.testimonials.map((t, i) => (
          <figure key={i} className="rounded-xl border border-gray-100 p-4">
            <blockquote className="text-sm text-gray-700">&ldquo;{t.quote}&rdquo;</blockquote>
            <figcaption className="mt-2 text-xs text-gray-400">{t.author}</figcaption>
          </figure>
        ))}
      </section>

      {/* Waitlist fake-door (revealed after CTA) */}
      {showWaitlist && <Waitlist variant={variant} />}

      {/* Footer */}
      <footer className="mt-auto border-t border-gray-100 pt-6 text-center text-xs text-gray-400">
        <p>You Alive</p>
        <p className="mt-1">Privacy · Terms · Contact</p>
      </footer>
    </main>
  );
}

function Waitlist({ variant }: { variant: Variant }) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">("idle");

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, variant: variant.id }),
      });
      if (!res.ok) throw new Error("failed");
      track("email_submit", { variant: variant.id });
      setState("done");
    } catch {
      setState("error");
    }
  };

  return (
    <section id="waitlist" className="flex flex-col gap-3 rounded-2xl bg-black px-6 py-8 text-white">
      {state === "done" ? (
        <p className="text-center">You&apos;re on the list. We&apos;ll email you the moment a slot opens.</p>
      ) : (
        <>
          <p className="text-sm">
            We&apos;re capping membership to keep the system stable. Enter your email to be
            notified the second a slot opens up.
          </p>
          <form onSubmit={submit} className="flex flex-col gap-2">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              className="rounded-full px-4 py-3 text-black"
            />
            <button
              type="submit"
              disabled={state === "loading"}
              className="rounded-full bg-white px-6 py-3 font-medium text-black disabled:opacity-60"
            >
              {state === "loading" ? "..." : "Notify me"}
            </button>
            {state === "error" && (
              <p className="text-sm text-red-300">Something went wrong. Try again.</p>
            )}
          </form>
        </>
      )}
    </section>
  );
}
