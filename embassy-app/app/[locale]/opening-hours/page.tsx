import type { Metadata } from "next";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { buildPageMetadata } from "@/lib/seo";
import { PendingTag } from "@/components/ui/PendingTag";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale: Locale = isLocale(params.locale) ? params.locale : "en";
  const dict = getDictionary(locale);
  return buildPageMetadata({
    locale,
    path: "/opening-hours",
    title: dict.centres.openingHours.heading,
    description: dict.centres.openingHours.intro,
  });
}

export default function OpeningHoursPage({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : "en";
  const dict = getDictionary(locale);
  const c = dict.centres.openingHours;

  const rows = [
    c.labels.embassyHours,
    c.labels.consularHours,
    c.labels.submissionHours,
    c.labels.collectionHours,
    c.labels.lebaneseHolidays,
    c.labels.romanianHolidays,
    c.labels.exceptionalClosures,
  ];

  return (
    <div className="mx-auto max-w-content px-5 py-12 sm:py-14">
      <span className="font-sans text-[12.5px] font-semibold uppercase tracking-[0.14em] text-burgundy-700">
        {c.eyebrow}
      </span>
      <h1 className="mt-3 font-serif text-[32px] leading-tight text-cedar-950 sm:text-[38px]">
        {c.heading}
      </h1>
      <p className="mt-4 max-w-2xl text-[17px] text-charcoal-600">{c.intro}</p>

      <div className="mt-10 max-w-xl border border-line bg-ivory-100 p-6">
        <h2 className="mb-1 text-[12px] font-bold uppercase tracking-[0.09em] text-burgundy-700">
          {c.labels.currentStatus}
        </h2>
        <p className="text-[14px] italic text-charcoal-600">{c.statusNote}</p>
      </div>

      <dl className="mt-10 flex max-w-xl flex-col">
        {rows.map((label) => (
          <div key={label} className="flex flex-col gap-1 border-t border-line py-4 first:border-t-0">
            <dt className="text-[13px] font-bold text-cedar-950">{label}</dt>
            <dd>
              <PendingTag>{c.pending}</PendingTag>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
