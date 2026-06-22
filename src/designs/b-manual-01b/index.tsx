"use client";

import type { DesignProps } from "@/designs/types";
import { HaloBase, GRADIENT_2 } from "@/designs/b-manual-01";

// b-manual-01b = Halo, hero gradient level 2 (doux). Same design as 01.
export default function BManual01bHalo(props: DesignProps) {
  return <HaloBase {...props} gradient={GRADIENT_2} />;
}
