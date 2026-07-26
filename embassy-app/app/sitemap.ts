import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n/config";

// Present for structural completeness even though robots.ts currently
// disallows crawling (see that file's comment) — this becomes useful
// the moment indexing is turned on for a real, embassy-approved domain.
const baseUrl = "https://example-embassy-lebanon-romania.pending";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/accessibility"];
  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(0), // no real publish date until this ships
      changeFrequency: "weekly" as const,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${baseUrl}/${l}${route}`])
        ),
      },
    }))
  );
}
