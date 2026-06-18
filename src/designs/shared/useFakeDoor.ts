"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { track, getAttribution } from "@/lib/analytics";

// Shared landing logic for every design variant. A design renders its own
// markup but calls this hook so the funnel events fire identically everywhere:
//
//   design_viewed   -> on mount (segments analytics by design slug)
//   pricing_view    -> when the pricing block scrolls into view (attach pricingRef)
//   cta_click       -> on every CTA (pass a placement label)
//   email_submit    -> on successful fake-door submit
//   waitlist_error  -> on submit failure
//
// Usage in a design:
//   const fd = useFakeDoor(slug);
//   <section ref={fd.pricingRef}> ... </section>
//   <button onClick={() => fd.onCta("hero")}>Buy now</button>
//   {fd.showWaitlist && <form onSubmit={fd.submit}> <input value={fd.email}
//     onChange={(e) => fd.setEmail(e.target.value)} /> ... </form>}
//   fd.state === "done" -> show the confirmation copy.

export type FakeDoorState = "idle" | "loading" | "done" | "error";

export function useFakeDoor(slug: string) {
  const [showWaitlist, setShowWaitlist] = useState(false);
  const [email, setEmail] = useState("");
  const [state, setState] = useState<FakeDoorState>("idle");
  const pricingRef = useRef<HTMLElement | null>(null);

  // View event, once per mount.
  useEffect(() => {
    track("design_viewed", { design: slug });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Pricing-in-view event, once.
  useEffect(() => {
    const el = pricingRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          track("pricing_view", { design: slug });
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [slug]);

  const onCta = useCallback(
    (placement: string) => {
      track("cta_click", { design: slug, placement });
      setShowWaitlist(true);
      requestAnimationFrame(() =>
        document
          .getElementById("waitlist")
          ?.scrollIntoView({ behavior: "smooth" })
      );
    },
    [slug]
  );

  const submit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setState("loading");
      // Shared dedup key between the browser Pixel and the server CAPI event.
      const eventId = crypto.randomUUID();
      try {
        const res = await fetch("/api/waitlist", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            variant: slug,
            event_id: eventId,
            event_source_url: window.location.href,
            ...getAttribution(),
          }),
        });
        if (!res.ok) throw new Error("failed");
        track("email_submit", { design: slug }, { eventId });
        setState("done");
      } catch {
        track("waitlist_error", { design: slug });
        setState("error");
      }
    },
    [email, slug]
  );

  return {
    pricingRef,
    showWaitlist,
    email,
    setEmail,
    state,
    onCta,
    submit,
  };
}
