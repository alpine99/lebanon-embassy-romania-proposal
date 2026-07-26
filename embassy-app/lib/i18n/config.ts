// Locale architecture for the site.
//
// Language is a first-class URL segment (/ar/..., /ro/..., /en/...),
// not a cookie-only toggle — required for search engines, sharing
// links, and assistive technology (see spec §5).

export const locales = ["ar", "ro", "en", "fr"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeMeta: Record<
  Locale,
  { label: string; dir: "ltr" | "rtl"; htmlLang: string }
> = {
  ar: { label: "العربية", dir: "rtl", htmlLang: "ar" },
  ro: { label: "Română", dir: "ltr", htmlLang: "ro" },
  en: { label: "English", dir: "ltr", htmlLang: "en" },
  fr: { label: "Français", dir: "ltr", htmlLang: "fr" },
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
