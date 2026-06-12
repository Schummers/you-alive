<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog into the you-alive Next.js App Router project.

**Changes made:**

- **`instrumentation-client.ts`** (new): Client-side PostHog initialization using the Next.js 15.3+ recommended pattern. Handles own-traffic exclusion via `?internal=1` URL param and `ph_internal` localStorage flag. Connects through the `/ingest` reverse proxy.
- **`src/components/PostHogProvider.tsx`** (simplified): Removed the `useEffect`-based PostHog init (replaced by `instrumentation-client.ts`); kept as a thin passthrough wrapper for `layout.tsx`.
- **`next.config.ts`** (updated): Added `/ingest` reverse proxy rules routing to `eu.i.posthog.com` and `eu-assets.i.posthog.com`. Also set `skipTrailingSlashRedirect: true` for PostHog API compatibility.
- **`src/lib/posthog-server.ts`** (new): Singleton PostHog Node.js client for server-side event capture.
- **`src/app/api/waitlist/route.ts`** (updated): Refactored to use the shared `getPostHogClient()` helper; added `waitlist_server_error` event when Notion write fails.
- **`src/components/Landing.tsx`** (updated): Added `variant_viewed` event on mount (top of conversion funnel) and `waitlist_error` event when the API call fails.
- **`.env.local`** (created): `NEXT_PUBLIC_POSTHOG_KEY` and `NEXT_PUBLIC_POSTHOG_HOST` set.

| Event | Description | File |
|---|---|---|
| `variant_viewed` | User lands on a variant page — top of funnel. Props: `variant`, `positioning`. | `src/components/Landing.tsx` |
| `cta_click` | User clicks a CTA button. Props: `variant`, `placement` (hero\|pricing). | `src/components/Landing.tsx` |
| `pricing_view` | Pricing section scrolls into view (IntersectionObserver, fires once). Props: `variant`. | `src/components/Landing.tsx` |
| `email_submit` | Waitlist email submitted successfully (client-side). Props: `variant`. | `src/components/Landing.tsx` |
| `waitlist_error` | Waitlist API call failed client-side. Props: `variant`. | `src/components/Landing.tsx` |
| `email_submit_server` | Server-side mirror of `email_submit` (bypasses ad blockers). Props: `variant`. | `src/app/api/waitlist/route.ts` |
| `waitlist_server_error` | Notion write failed on the server. Props: `variant`, `error_message`. | `src/app/api/waitlist/route.ts` |

## Next steps

Dashboard creation requires a PostHog personal API key (Settings > Personal API Keys). Once available, create a dashboard named **"Analytics basics (wizard)"** with these 5 insights:

1. **Conversion funnel**: `variant_viewed` → `cta_click` → `email_submit`
2. **Waitlist signups over time**: `email_submit_server` trend
3. **Variant comparison**: `email_submit` broken down by `variant` property
4. **CTA placement**: `cta_click` broken down by `placement` property (hero vs pricing)
5. **Error rate**: `waitlist_error` + `waitlist_server_error` trend

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
