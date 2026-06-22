"use client";

import type { DesignProps } from "@/designs/types";
import { HaloBase, GRADIENT_3 } from "@/designs/b-manual-01";

// b-manual-01c = Halo, hero gradient level 3 (médian). Same design as 01.
export default function BManual01cHalo(props: DesignProps) {
  return <HaloBase {...props} gradient={GRADIENT_3} />;
}
