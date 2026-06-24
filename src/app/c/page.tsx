import { notFound } from "next/navigation";
import { designMap } from "@/designs/registry";
import { site } from "@/content/site";

// Prod ad route — variant C. See src/app/a/page.tsx for the rationale.
const SLUG = "c-manual-03";

export default function VariantC() {
  const design = designMap[SLUG];
  if (!design) notFound();
  const { Component } = design;
  return <Component content={site} slug={SLUG} />;
}
