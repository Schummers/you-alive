import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { designMap, designSlugs } from "@/designs/registry";
import { site } from "@/content/site";

// Internal design preview — never indexed, never reachable from ads/users.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

// Renders one design variant with the FIXED canonical content.
// Distinct from /[variant] (the copy A/B test) — this axis is visual design.
export function generateStaticParams() {
  return designSlugs.map((slug) => ({ slug }));
}

export default async function PreviewPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const design = designMap[slug];
  if (!design) notFound();
  const { Component } = design;
  return <Component content={site} slug={slug} />;
}
