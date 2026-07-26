import type { Metadata } from "next";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { buildPageMetadata } from "@/lib/seo";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale: Locale = isLocale(params.locale) ? params.locale : "en";
  const dict = getDictionary(locale);
  return buildPageMetadata({
    locale,
    path: "/students",
    title: dict.centres.students.heading,
    description: dict.centres.students.intro,
  });
}

export default function StudentsPage({ params }: { params: { locale: string } }) {
  const locale: Locale = isLocale(params.locale) ? params.locale : "en";
  const dict = getDictionary(locale);
  const c = dict.centres.students;

  return (
    <div className="mx-auto max-w-content px-5 py-12 sm:py-14">
      <span className="font-sans text-[12.5px] font-semibold uppercase tracking-[0.14em] text-burgundy-700">
        {c.eyebrow}
      </span>
      <h1 className="mt-3 font-serif text-[32px] leading-tight text-cedar-950 sm:text-[38px]">
        {c.heading}
      </h1>
      <p className="mt-4 max-w-2xl text-[17px] text-charcoal-600">{c.intro}</p>

      <div className="mt-10 grid gap-8 sm:grid-cols-3">
        {c.sections.map((s) => (
          <div key={s.title}>
            <h2 className="mb-2 font-sans text-[15px] font-bold text-cedar-950">{s.title}</h2>
            <p className="text-[14px] text-charcoal-600">{s.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 max-w-2xl border-t border-line pt-8">
        <h2 className="mb-4 font-serif text-[20px] text-cedar-950">{c.faqHeading}</h2>
        <div className="flex flex-col gap-5">
          {c.faqs.map((f) => (
            <div key={f.question}>
              <div className="font-sans text-[14.5px] font-bold text-cedar-950">{f.question}</div>
              <div className="mt-1 text-[14px] text-charcoal-600">{f.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
