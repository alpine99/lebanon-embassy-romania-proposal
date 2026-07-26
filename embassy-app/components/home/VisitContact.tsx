import type { Dictionary } from "@/lib/i18n/dictionary";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PendingTag } from "@/components/ui/PendingTag";

export function VisitContact({ dict }: { dict: Dictionary }) {
  const items = [
    dict.visit.labels.hours,
    dict.visit.labels.address,
    dict.visit.labels.phone,
    dict.visit.labels.email,
    dict.visit.labels.emergency,
  ];

  return (
    <section id="contact" className="bg-ivory-100 py-14 sm:py-16 md:py-[72px]">
      <div className="mx-auto max-w-content px-5">
        <SectionHeading
          eyebrow={dict.visit.eyebrow}
          heading={dict.visit.heading}
          className="mb-10 md:mb-11"
        />
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <dl className="flex flex-col gap-5">
            {items.map((label) => (
              <div key={label}>
                <dt className="mb-1 text-[12px] font-bold uppercase tracking-[0.09em] text-burgundy-700">
                  {label}
                </dt>
                <dd>
                  <PendingTag>{dict.visit.pending}</PendingTag>
                </dd>
              </div>
            ))}
          </dl>
          <div
            role="img"
            aria-label={dict.visit.mapPending}
            className="flex h-[320px] items-center justify-center border-[1.5px] border-dashed border-cedar-800 bg-ivory-50 p-6 text-center text-[13.5px] text-charcoal-600"
          >
            {dict.visit.mapPending}
          </div>
        </div>
      </div>
    </section>
  );
}
