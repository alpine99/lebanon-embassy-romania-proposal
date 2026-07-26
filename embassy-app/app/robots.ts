import type { MetadataRoute } from "next";

// This is a design-concept prototype, not the official embassy website.
// Disallow all crawling until the embassy approves real content and a
// real production domain replaces the placeholder baseUrl used here
// and in app/[locale]/layout.tsx's generateMetadata.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: "/",
    },
  };
}
