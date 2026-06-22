"use client";

import type { DesignProps } from "@/designs/types";
import RetroForestBase from "@/designs/c-manual-shared/RetroForestBase";

// MANUAL · C · 03 — problem band: pale lime-tint (a brighter hint of the lime
// accent, warmest/most energetic of the three).
export default function ManualRetroForest03(props: DesignProps) {
  return <RetroForestBase {...props} problemBg="#EEF1DC" />;
}
