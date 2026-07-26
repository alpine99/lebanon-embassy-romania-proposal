import type { Metadata } from "next";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { buildPageMetadata } from "@/lib/seo";
import { MediaEnquiryForm } from "@/components/media/MediaEnquiryForm";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale: Locale = isLocale(params.locale) ? params.locale : "en";
  const dict = getDictionary(locale);
  return buildPageMetadata({
    locale,
    path: "/media",
    title: dict.centres.media.heading,
    description: dict.centres.media.intro,
  });
}

export default function MediaPage({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : "en";
  const dict = getDictionary(locale);
  const m = dict.centres.media;

  return (
    <div className="mx-auto max-w-content px-5 py-12 sm:py-14">
      <span className="font-sans text-[12.5px] font-semibold uppercase tracking-[0.14em] text-burgundy-700">
        {m.eyebrow}
      </span>
      <h1 className="mt-3 font-serif text-[32px] leading-tight text-cedar-950 sm:text-[38px]">
        {m.heading}
      </h1>
      <p className="mt-4 max-w-2xl text-[17px] text-charcoal-600">{m.intro}</p>

      <div className="mt-8 flex flex-wrap gap-2.5">
        {m.categories.map((cat) => (
          <span
            key={cat}
            className="border border-line px-3.5 py-1.5 text-[13px] font-semibold text-cedar-950"
          >
            {cat}
          </span>
        ))}
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {m.categories.map((cat) => (
          <article key={cat} className="border border-line bg-ivory-50 p-6">
            <span className="mb-2 inline-block bg-burgundy-700 px-2 py-1 text-[10.5px] font-bold uppercase tracking-wide text-white">
              {m.demoTag}
            </span>
            <h2 className="font-sans text-[15px] font-bold text-cedar-950">{cat}</h2>
          </article>
        ))}
      </div>

      <div className="mt-12 border-t border-line pt-8">
        <h2 className="mb-1 font-serif text-[20px] text-cedar-950">{m.archiveHeading}</h2>
      </div>

      <div className="mt-12 border-t border-line pt-8">
        <h2 className="mb-4 font-serif text-[20px] text-cedar-950">{m.enquiryHeading}</h2>
        <MediaEnquiryForm dict={dict} />
      </div>
    </div>
  );
}
