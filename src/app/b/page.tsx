import { notFound } from "next/navigation";
import { designMap } from "@/designs/registry";
import { site } from "@/content/site";

// Prod ad route — variant B. See src/app/a/page.tsx for the rationale.
const SLUG = "b-manual-01d";

export default function VariantB() {
  const design = designMap[SLUG];
  if (!design) notFound();
  const { Component } = design;
  return <Component content={site} slug={SLUG} />;
}
