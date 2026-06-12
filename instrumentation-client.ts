import posthog from "posthog-js";

const params = new URLSearchParams(window.location.search);
if (params.get("internal") === "1") {
  localStorage.setItem("ph_internal", "1");
}
const isInternal = localStorage.getItem("ph_internal") === "1";

posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
  api_host: "/ingest",
  ui_host: "https://eu.posthog.com",
  defaults: "2026-01-30",
  capture_exceptions: true,
  capture_pageview: true,
  capture_pageleave: true,
  opt_out_capturing_by_default: isInternal,
  persistence: "localStorage+cookie",
  debug: process.env.NODE_ENV === "development",
});
