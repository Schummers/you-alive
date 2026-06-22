"use client";

import type { DesignProps } from "@/designs/types";
import RetroForestBase from "@/designs/c-manual-shared/RetroForestBase";

// MANUAL · C · 01 — problem band: warm sand (the quiet, neutral warm option).
export default function ManualRetroForest01(props: DesignProps) {
  return <RetroForestBase {...props} problemBg="#ECE5D3" />;
}
