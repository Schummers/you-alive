import { notFound } from "next/navigation";
import { designMap } from "@/designs/registry";
import { site } from "@/content/site";

// Prod ad route — variant A. Maps the clean /a URL to the finalist design,
// decoupled from /preview so the preview gallery can be removed later without
// breaking the live ad pages. The design slug is kept as the tracking id, so
// PostHog/Notion segment on the same `design` value used during preview QA.
const SLUG = "a-manual-03";

export default function VariantA() {
  const design = designMap[SLUG];
  if (!design) notFound();
  const { Component } = design;
  return <Component content={site} slug={SLUG} />;
}
