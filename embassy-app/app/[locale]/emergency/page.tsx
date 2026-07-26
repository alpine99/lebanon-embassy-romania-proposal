import type { Metadata } from "next";
import Link from "next/link";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { buildPageMetadata } from "@/lib/seo";
import { PendingTag } from "@/components/ui/PendingTag";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale: Locale = isLocale(params.locale) ? params.locale : "en";
  const dict = getDictionary(locale);
  return buildPageMetadata({
    locale,
    path: "/emergency",
    title: dict.centres.emergency.heading,
    description: dict.centres.emergency.intro,
  });
}

export default function EmergencyPage({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : "en";
  const dict = getDictionary(locale);
  const c = dict.centres.emergency;

  return (
    <div className="mx-auto max-w-content px-5 py-12 sm:py-14">
      <span className="font-sans text-[12.5px] font-semibold uppercase tracking-[0.14em] text-burgundy-700">
        {c.eyebrow}
      </span>
      <h1 className="mt-3 font-serif text-[32px] leading-tight text-cedar-950 sm:text-[38px]">
        {c.heading}
      </h1>
      <p className="mt-4 max-w-2xl text-[17px] text-charcoal-600">{c.intro}</p>

      <div className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-2">
        {c.situations.map((s) => (
          <div key={s.title} className="flex flex-col gap-2 bg-ivory-50 p-6">
            <h2 className="font-sans text-[16px] font-bold text-cedar-950">{s.title}</h2>
            <p className="flex-1 text-[14px] text-charcoal-600">{s.description}</p>
            {s.href && (
              <Link
                href={`/${locale}${s.href}`}
                className="text-[13.5px] font-bold text-burgundy-700 hover:underline"
              >
                {dict.finder.startHere} →
              </Link>
            )}
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        <div>
          <h2 className="mb-2 font-sans text-[13px] font-bold uppercase tracking-[0.09em] text-cedar-950">
            {c.duringHours}
          </h2>
          <PendingTag>{c.contactPending}</PendingTag>
        </div>
        <div>
          <h2 className="mb-2 font-sans text-[13px] font-bold uppercase tracking-[0.09em] text-cedar-950">
            {c.outsideHours}
          </h2>
          <PendingTag>{c.contactPending}</PendingTag>
        </div>
      </div>

      <div className="mt-10 border-s-2 border-gold-400 bg-ivory-100 p-6 ps-5">
        <h2 className="mb-2 font-sans text-[15px] font-bold text-cedar-950">
          {c.notEmergencyTitle}
        </h2>
        <p className="text-[14.5px] text-charcoal-600">{c.notEmergencyBody}</p>
      </div>
    </div>
  );
}
