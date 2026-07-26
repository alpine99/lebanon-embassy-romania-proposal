import type { Metadata } from "next";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { buildPageMetadata } from "@/lib/seo";
import { FormsAndDownloadsList } from "@/components/forms/FormsAndDownloadsList";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale: Locale = isLocale(params.locale) ? params.locale : "en";
  const dict = getDictionary(locale);
  return buildPageMetadata({
    locale,
    path: "/forms",
    title: dict.centres.forms.heading,
    description: dict.centres.forms.intro,
  });
}

export default function FormsPage({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : "en";
  const dict = getDictionary(locale);
  const c = dict.centres.forms;

  return (
    <div className="mx-auto max-w-content px-5 py-12 sm:py-14">
      <span className="font-sans text-[12.5px] font-semibold uppercase tracking-[0.14em] text-burgundy-700">
        {c.eyebrow}
      </span>
      <h1 className="mt-3 font-serif text-[32px] leading-tight text-cedar-950 sm:text-[38px]">
        {c.heading}
      </h1>
      <p className="mt-4 max-w-2xl text-[17px] text-charcoal-600">{c.intro}</p>

      <FormsAndDownloadsList locale={locale} dict={dict} />
    </div>
  );
}
