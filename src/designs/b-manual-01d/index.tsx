"use client";

import type { DesignProps } from "@/designs/types";
import { HaloBase, GRADIENT_2 } from "@/designs/b-manual-01";

// b-manual-01d = Halo, hero gradient level 2 (doux+), but near-square corners
// (Scripture-like). Same design as 01b, only the corner radius changes.
export default function BManual01dHaloSquare(props: DesignProps) {
  return <HaloBase {...props} gradient={GRADIENT_2} squared />;
}
