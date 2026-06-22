"use client";

import type { DesignProps } from "@/designs/types";
import RetroForestBase from "@/designs/c-manual-shared/RetroForestBase";

// MANUAL · C · 01 — Retro Forest. Problem band + footer in pale lime-tint;
// hero is the white-lead / lime-punch split, sized up to 48px on mobile.
export default function ManualRetroForest01(props: DesignProps) {
  return (
    <RetroForestBase
      {...props}
      problemBg="#EEF1DC"
      heroMode="split"
      heroMobilePx={46}
      heroDesktopPx={64}
      footerMode="dark"
    />
  );
}
