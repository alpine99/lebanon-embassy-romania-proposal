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
    path: "/relations",
    title: dict.centres.relationsPage.heading,
    description: dict.centres.relationsPage.intro,
  });
}

export default function RelationsEditorialPage({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : "en";
  const dict = getDictionary(locale);
  const r = dict.centres.relationsPage;

  return (
    <div className="mx-auto max-w-content px-5 py-12 sm:py-14">
      <span className="font-sans text-[12.5px] font-semibold uppercase tracking-[0.14em] text-burgundy-700">
        {r.eyebrow}
      </span>
      <h1 className="mt-3 font-serif text-[32px] leading-tight text-cedar-950 sm:text-[38px]">
        {r.heading}
      </h1>
      <p className="mt-4 max-w-2xl text-[17px] text-charcoal-600">{r.intro}</p>

      <div className="mt-12 grid gap-11 sm:grid-cols-2 sm:gap-x-14">
        {dict.relations.items.map((item) => (
          <div key={item.title} className="border-t-2 border-gold-400 pt-4">
            <h2 className="mb-2.5 font-sans text-[18px] font-bold text-cedar-950">{item.title}</h2>
            <p className="text-[14.5px] text-charcoal-600">
              {item.body} <PendingTag>{dict.relations.pendingTag}</PendingTag>
            </p>
          </div>
        ))}
      </div>

      <div className="mt-14 border-t border-line pt-8">
        <h2 className="mb-3 font-serif text-[20px] text-cedar-950">{r.timelineHeading}</h2>
        <p className="max-w-xl text-[14.5px] italic text-charcoal-600">{r.timelineEmpty}</p>
      </div>

      <div className="mt-14 border-t border-line pt-8">
        <h2 className="mb-4 font-serif text-[20px] text-cedar-950">{r.galleryHeading}</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="flex aspect-[4/3] items-center justify-center border border-dashed border-cedar-800 bg-ivory-100 p-3 text-center text-[12px] text-charcoal-600"
            >
              {r.galleryPending}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 border-t border-line pt-8">
        <h2 className="mb-4 font-serif text-[20px] text-cedar-950">{r.linksHeading}</h2>
        <ul className="flex flex-col gap-2">
          <li>
            <PendingTag>{dict.relations.pendingTag}</PendingTag>
          </li>
        </ul>
      </div>
    </div>
  );
}
