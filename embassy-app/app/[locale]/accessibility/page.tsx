import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { PendingTag } from "@/components/ui/PendingTag";

export default function AccessibilityPage({
  params,
}: {
  params: { locale: string };
}) {
  const locale: Locale = isLocale(params.locale) ? params.locale : "en";
  const dict = getDictionary(locale);

  return (
    <div className="mx-auto max-w-content px-5 py-16">
      <span className="font-sans text-[12.5px] font-semibold uppercase tracking-[0.14em] text-burgundy-700">
        {dict.utilityBar.accessibility}
      </span>
      <h1 className="mt-3 mb-6 font-serif text-[30px] text-cedar-950">
        {dict.utilityBar.accessibility}
      </h1>
      <p className="max-w-2xl text-[15px] leading-relaxed text-charcoal-600">
        This site is designed to meet WCAG 2.2 Level AA. A full accessibility
        statement — including the conformance status, known limitations, and
        a contact method for reporting accessibility issues — will appear
        here.
      </p>
      <div className="mt-4">
        <PendingTag>{dict.finder.pendingTag}</PendingTag>
      </div>
    </div>
  );
}
