import type { Metadata } from "next";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { buildPageMetadata } from "@/lib/seo";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale: Locale = isLocale(params.locale) ? params.locale : "en";
  const dict = getDictionary(locale);
  return buildPageMetadata({
    locale,
    path: "/anti-fraud",
    title: dict.centres.antiFraud.heading,
    description: dict.centres.antiFraud.intro,
  });
}

export default function AntiFraudPage({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : "en";
  const dict = getDictionary(locale);
  const c = dict.centres.antiFraud;

  return (
    <div className="mx-auto max-w-content px-5 py-12 sm:py-14">
      <span className="font-sans text-[12.5px] font-semibold uppercase tracking-[0.14em] text-burgundy-700">
        {c.eyebrow}
      </span>
      <h1 className="mt-3 font-serif text-[32px] leading-tight text-cedar-950 sm:text-[38px]">
        {c.heading}
      </h1>
      <p className="mt-4 max-w-2xl text-[17px] text-charcoal-600">{c.intro}</p>

      <div className="mt-10 flex flex-col gap-8 max-w-3xl">
        {c.sections.map((s, i) => (
          <div key={s.title} className="flex gap-5 border-t border-line pt-6 first:border-t-0 first:pt-0">
            <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full border border-gold-400 font-serif text-[14px] text-cedar-950">
              {i + 1}
            </span>
            <div>
              <h2 className="font-sans text-[16px] font-bold text-cedar-950">{s.title}</h2>
              <p className="mt-1.5 text-[14.5px] text-charcoal-600">{s.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
