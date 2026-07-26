import type { Dictionary } from "@/lib/i18n/dictionary";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PendingTag } from "@/components/ui/PendingTag";

export function RelationsSection({ dict }: { dict: Dictionary }) {
  return (
    <section id="relations" className="bg-ivory-100 py-14 sm:py-16 md:py-[72px]">
      <div className="mx-auto max-w-content px-5">
        <SectionHeading
          eyebrow={dict.relations.eyebrow}
          heading={dict.relations.heading}
          className="mb-10 md:mb-11"
        />
        <div className="grid gap-11 sm:grid-cols-2 sm:gap-x-14">
          {dict.relations.items.map((item) => (
            <div key={item.title} className="border-t-2 border-gold-400 pt-4">
              <h3 className="mb-2.5 font-sans text-[19px] font-bold text-cedar-950">
                {item.title}
              </h3>
              <p className="text-[15px] text-charcoal-600">
                {item.body} <PendingTag>{dict.relations.pendingTag}</PendingTag>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
