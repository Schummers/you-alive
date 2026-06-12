"use client";

import posthog from "posthog-js";

// Funnel events fired to BOTH trackers from the same user action:
// - PostHog: our analysis (funnel, segmentation, replay)
// - Meta Pixel: ad-algo optimization (mapped to standard events)
//
// We optimize Meta delivery on cta_click (InitiateCheckout) because it has
// enough volume to learn; email_submit (Lead) is the value signal we report on.

type Props = Record<string, unknown>;

const metaStandardEvent: Record<string, string> = {
  cta_click: "InitiateCheckout",
  pricing_view: "ViewContent",
  email_submit: "Lead",
};

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export function track(event: string, props: Props = {}) {
  if (typeof window === "undefined") return;

  // PostHog
  posthog?.capture(event, props);

  // Meta Pixel
  const fb = metaStandardEvent[event];
  if (window.fbq && fb) {
    window.fbq("track", fb, props);
  }
}
