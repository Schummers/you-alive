"use client";

import type { DesignProps } from "@/designs/types";
import RetroForestBase from "@/designs/c-manual-shared/RetroForestBase";

// MANUAL · C · 03 — identical to c-manual-01 (Retro Forest, 4-line split hero),
// but the whole H1 is lime (no white lead lines).
export default function ManualRetroForest03(props: DesignProps) {
  return (
    <RetroForestBase
      {...props}
      problemBg="#EEF1DC"
      heroMode="split"
      heroAllLime
      heroMobilePx={46}
      heroDesktopPx={64}
      footerMode="dark"
      hideReassurance
    />
  );
}
