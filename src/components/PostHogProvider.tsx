"use client";

import { useEffect } from "react";
import posthog from "posthog-js";

// Initializes PostHog on the client. Own-traffic exclusion: visiting any page
// with ?internal=1 sets an opt-out cookie so your own sessions are dropped.
export default function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    if (!key) return; // not configured yet (spike); render app normally

    const params = new URLSearchParams(window.location.search);
    if (params.get("internal") === "1") {
      localStorage.setItem("ph_internal", "1");
    }
    const isInternal = localStorage.getItem("ph_internal") === "1";

    posthog.init(key, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://eu.i.posthog.com",
      capture_pageview: true,
      capture_pageleave: true,
      opt_out_capturing_by_default: isInternal,
      persistence: "localStorage+cookie",
    });
  }, []);

  return <>{children}</>;
}
