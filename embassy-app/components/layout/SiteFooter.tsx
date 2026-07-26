import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionary";

export function SiteFooter({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  return (
    <footer className="bg-cedar-950 text-ivory-50/90">
      <div className="mx-auto grid max-w-content grid-cols-2 gap-8 px-5 py-14 sm:grid-cols-2 md:grid-cols-5 md:py-16">
        <div className="col-span-2">
          <div className="mb-2.5 font-serif text-[19px] text-white">
            {dict.nav.brandName} {dict.nav.brandSub}
          </div>
          <p className="max-w-[280px] text-[13.5px] text-ivory-50/65">
            {dict.footer.tagline}
          </p>
        </div>
        {dict.footer.columns.map((col) => (
          <div key={col.heading}>
            <h4 className="mb-3.5 text-[12.5px] font-semibold uppercase tracking-[0.09em] text-gold-300">
              {col.heading}
            </h4>
            <ul className="flex flex-col gap-2.5">
              {col.links.map((link) => (
                <li key={link}>
                  <Link
                    href={`/${locale}`}
                    className="text-[14px] text-ivory-50/90 hover:underline"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto flex max-w-content flex-wrap items-center justify-between gap-2.5 border-t border-ivory-50/15 px-5 py-4 text-[12.5px] text-ivory-50/60">
        <span>{dict.footer.copyright}</span>
        <span>{dict.footer.socialPending}</span>
      </div>
      <div className="bg-burgundy-800 px-5 py-3 text-center text-[13px] font-semibold text-white">
        {dict.demoDisclaimer}
      </div>
    </footer>
  );
}
