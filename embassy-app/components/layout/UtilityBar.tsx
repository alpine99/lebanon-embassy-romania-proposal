"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, localeMeta, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionary";

export function UtilityBar({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const pathname = usePathname();
  // Strip the current locale prefix so switching language preserves the
  // current page (e.g. /en/accessibility -> /fr/accessibility) instead
  // of always bouncing back to the homepage. Built from `locales` so a
  // future locale addition can't silently break this via a stale regex.
  const localePattern = locales.join("|");
  const pathWithoutLocale =
    pathname.replace(new RegExp(`^/(${localePattern})(?=/|$)`), "") || "";

  return (
    <div className="bg-cedar-950 text-[13px] text-ivory-50/90">
      <div className="mx-auto flex max-w-content flex-wrap items-center justify-between gap-4 px-5 py-2">
        <span className="font-medium">{dict.meta.conceptFlag}</span>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <nav
            aria-label="Language selector"
            className="flex items-center gap-2.5"
          >
            {locales.map((l, i) => (
              <span key={l} className="flex items-center gap-2.5">
                <Link
                  href={`/${l}${pathWithoutLocale}`}
                  hrefLang={l}
                  lang={l}
                  aria-current={l === locale ? "true" : undefined}
                  className={`hover:underline ${
                    l === locale ? "font-bold underline" : ""
                  }`}
                >
                  {localeMeta[l].label}
                </Link>
                {i < locales.length - 1 && (
                  <span aria-hidden="true" className="opacity-50">
                    |
                  </span>
                )}
              </span>
            ))}
          </nav>
          <Link href={`/${locale}/accessibility`} className="hover:underline">
            {dict.utilityBar.accessibility}
          </Link>
          <Link
            href={`/${locale}/emergency`}
            className="flex items-center gap-1.5 font-bold text-[#F2C9CE] hover:underline"
          >
            <span aria-hidden="true">⚠</span>
            {dict.utilityBar.emergency}
          </Link>
        </div>
      </div>
    </div>
  );
}
