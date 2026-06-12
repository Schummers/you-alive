import { notFound } from "next/navigation";
import Landing from "@/components/Landing";
import { variants, variantIds } from "@/content/variants";

// One page per variant: /a, /b. Each Meta ad points to its matching path so
// the on-site value prop matches the ad's positioning.
export function generateStaticParams() {
  return variantIds.map((variant) => ({ variant }));
}

export default async function VariantPage({
  params,
}: {
  params: Promise<{ variant: string }>;
}) {
  const { variant } = await params;
  const data = variants[variant];
  if (!data) notFound();
  return <Landing variant={data} />;
}
