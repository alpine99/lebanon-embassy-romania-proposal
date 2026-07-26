import { NextRequest, NextResponse } from "next/server";

const locales = ["ar", "ro", "en", "fr"] as const;
type Locale = (typeof locales)[number];

const defaultLocale: Locale = "en";

function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

// Redirects "/" and any path missing a locale segment to a locale-prefixed
// path, using the browser's Accept-Language as a best-effort default.
// This keeps language a real, shareable, indexable URL segment rather
// than a client-side-only toggle (spec §5).
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (pathnameHasLocale) {
    return;
  }

  const acceptLanguage = request.headers.get("accept-language") ?? "";

  const preferred = acceptLanguage
    .split(",")
    .map((part) => part.split(";")[0]?.trim().slice(0, 2))
    .find((lang): lang is Locale => !!lang && isLocale(lang));

  const locale = preferred ?? defaultLocale;

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;

  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|.*\\..*).*)"],
};
