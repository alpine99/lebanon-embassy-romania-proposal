import type { Dictionary } from "@/lib/i18n/dictionary";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function EmbassyJourney({ dict }: { dict: Dictionary }) {
  const j = dict.embassyJourney;
  return (
    <section className="bg-ivory-100 py-14 sm:py-16 md:py-[72px]">
      <div className="mx-auto max-w-content px-5">
        <SectionHeading eyebrow={j.eyebrow} heading={j.heading} className="mb-11" />
        <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {j.steps.map((step, i) => (
            <li key={step.title} className="flex flex-col gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold-400 font-serif text-[15px] text-cedar-950">
                {i + 1}
              </span>
              <h3 className="font-sans text-[15px] font-bold text-cedar-950">{step.title}</h3>
              <p className="text-[13.5px] text-charcoal-600">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
