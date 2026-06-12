import { redirect } from "next/navigation";
import { defaultVariant } from "@/content/variants";

// Bare domain redirects to the default variant. Ads always link to /a or /b.
export default function Home() {
  redirect(`/${defaultVariant}`);
}
