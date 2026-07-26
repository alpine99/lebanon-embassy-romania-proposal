import type { Metadata } from "next";
import { locales, type Locale } from "@/lib/i18n/config";

const baseUrl = "https://example-embassy-lebanon-romania.pending";

/**
 * Shared metadata builder for simple locale-routed pages (not the
 * homepage or service pages, which have their own richer metadata).
 * Keeps hreflang/canonical/robots consistent across every new route
 * added in this phase instead of re-deriving it nine times.
 */
export function buildPageMetadata({
  locale,
  path,
  title,
  description,
}: {
  locale: Locale;
  path: string; // e.g. "/emergency" (no locale prefix)
  title: string;
  description: string;
}): Metadata {
  return {
    title,
    description,
    robots: { index: false, follow: false },
    alternates: {
      canonical: `${baseUrl}/${locale}${path}`,
      languages: {
        ...Object.fromEntries(locales.map((l) => [l, `${baseUrl}/${l}${path}`])),
        "x-default": baseUrl,
      },
    },
  };
}
