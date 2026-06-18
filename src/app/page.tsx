import { redirect } from "next/navigation";

// Bare domain → the design gallery (all variants side by side). Ads link
// directly to /preview/a, /preview/b, /preview/c.
export default function Home() {
  redirect("/gallery");
}
