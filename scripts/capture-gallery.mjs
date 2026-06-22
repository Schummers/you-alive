// Capture 390px full-page gallery thumbnails for the bake-off designs.
// Reduced-motion is forced so scroll-reveals settle into their visible state.
// Run: node scripts/capture-gallery.mjs [slug ...]  (default = B/C guided set)
import { chromium } from "playwright";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.resolve(__dirname, "../public/gallery");
const BASE = process.env.GALLERY_BASE || "http://localhost:3210";

const DEFAULT = [
  ...Array.from({ length: 8 }, (_, i) => `b-fd-0${i + 1}`),
  ...Array.from({ length: 8 }, (_, i) => `c-fd-0${i + 1}`),
];
const slugs = process.argv.slice(2).length ? process.argv.slice(2) : DEFAULT;

const browser = await chromium.launch();
const ctx = await browser.newContext({
  viewport: { width: 390, height: 844 },
  deviceScaleFactor: 2,
  reducedMotion: "reduce",
});
const page = await ctx.newPage();

for (const slug of slugs) {
  await page.goto(`${BASE}/preview/${slug}`, { waitUntil: "networkidle" });
  // Trigger any IntersectionObserver / scroll reveals, then return to top.
  await page.evaluate(async () => {
    const step = window.innerHeight;
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 120));
    }
    window.scrollTo(0, 0);
    await new Promise((r) => setTimeout(r, 300));
  });
  await page.waitForTimeout(300);
  await page.screenshot({
    path: path.join(OUT, `${slug}.jpg`),
    type: "jpeg",
    quality: 72,
    fullPage: true,
  });
  console.log(`captured ${slug}`);
}

await browser.close();
