import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Source_Serif_4, Source_Sans_3, IBM_Plex_Sans_Arabic } from "next/font/google";
import { locales, localeMeta, isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { UtilityBar } from "@/components/layout/UtilityBar";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

const sourceSerif = Source_Serif_4({
  subsets: ["latin", "latin-ext"],
  variable: "--font-serif",
  display: "swap",
  weight: ["500", "600", "700"],
});

const sourceSans = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "600", "700"],
});

const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-arabic",
  display: "swap",
  weight: ["400", "600", "700"],
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = isLocale(params.locale) ? params.locale : "en";
  const dict = getDictionary(locale);
  const title = `${dict.nav.brandName} ${dict.nav.brandSub}`;

  // Base URL is intentionally a placeholder — replace with the real
  // production domain once the embassy assigns one; every alternate
  // and OG url below is derived from this single constant.
  const baseUrl = "https://example-embassy-lebanon-romania.pending";

  return {
    title,
    description: dict.hero.lede,
    // Prevents this concept prototype from being indexed until it is
    // reviewed, approved, and replaced by real embassy content.
    robots: { index: false, follow: false },
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        ar: `${baseUrl}/ar`,
        ro: `${baseUrl}/ro`,
        en: `${baseUrl}/en`,
        fr: `${baseUrl}/fr`,
        // x-default points visitors with no matching locale preference
        // to the language-negotiation entry point (see middleware.ts).
        "x-default": baseUrl,
      },
    },
    openGraph: {
      title,
      description: dict.hero.lede,
      locale: localeMeta[locale].htmlLang,
      alternateLocale: locales
        .filter((l) => l !== locale)
        .map((l) => localeMeta[l].htmlLang),
      type: "website",
      // No image specified: no approved embassy OG image exists yet.
      // Add one only once the embassy supplies an approved asset.
    },
  };
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const locale: Locale = isLocale(params.locale) ? params.locale : "en";
  const dict = getDictionary(locale);
  const { dir } = localeMeta[locale];
  const isArabic = locale === "ar";

  return (
    <html
      lang={localeMeta[locale].htmlLang}
      dir={dir}
      className={`${sourceSerif.variable} ${sourceSans.variable} ${plexArabic.variable}`}
    >
      <body
        className={`bg-ivory-50 text-charcoal-900 antialiased ${
          isArabic ? "font-arabic" : "font-sans"
        }`}
      >
        <a href="#main" className="skip-link">
          {dict.skipToContent}
        </a>
        <UtilityBar locale={locale} dict={dict} />
        <SiteHeader locale={locale} dict={dict} />
        <main id="main">{children}</main>
        <SiteFooter locale={locale} dict={dict} />
      </body>
    </html>
  );
}
