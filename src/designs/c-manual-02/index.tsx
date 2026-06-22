"use client";

import type { DesignProps } from "@/designs/types";
import RetroForestBase from "@/designs/c-manual-shared/RetroForestBase";

// MANUAL · C · 02 — bolder cut of the same base: hero entirely lime, giant,
// one word per line (6 lines), pill CTA, smaller subtitle, dark forest footer.
export default function ManualRetroForest02(props: DesignProps) {
  return (
    <RetroForestBase
      {...props}
      problemBg="#EEF1DC"
      heroMode="stack"
      heroMobilePx={64}
      heroDesktopPx={84}
      subtitlePx={16}
      ctaRadius={999}
      footerMode="dark"
    />
  );
}
