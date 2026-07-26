import type { Dictionary } from "@/lib/i18n/dictionary";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function NewsGrid({ dict }: { dict: Dictionary }) {
  return (
    <section id="news" className="py-14 sm:py-16 md:py-[72px]">
      <div className="mx-auto max-w-content px-5">
        <SectionHeading
          eyebrow={dict.news.eyebrow}
          heading={dict.news.heading}
          className="mb-10 md:mb-11"
        />
        <div className="grid gap-7 md:grid-cols-3">
          {dict.news.items.map((item) => (
            <article
              key={item.title}
              className="flex flex-col border border-line bg-ivory-50"
            >
              <div className="relative h-[150px] bg-cedar-800 [background-image:repeating-linear-gradient(135deg,rgba(15,42,34,0.9)_0,rgba(15,42,34,0.9)_1px,transparent_1px,transparent_14px)]">
                <span className="absolute start-3 top-3 rounded bg-ivory-50/95 px-2 py-1 text-[10.5px] font-bold uppercase tracking-wide text-cedar-950">
                  {dict.news.demoTag}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-2.5 p-6">
                <span className="text-[11.5px] font-bold uppercase tracking-wide text-burgundy-700">
                  {item.category}
                </span>
                <h3 className="font-sans text-[17px] font-bold text-cedar-950">
                  {item.title}
                </h3>
                <span className="mt-auto text-[13px] text-charcoal-600">
                  {dict.news.placeholderDate}
                </span>
                <a
                  href="#"
                  className="text-[13.5px] font-bold text-cedar-950 hover:underline"
                >
                  {dict.news.readMore}{" "}
                  <span aria-hidden="true" className="inline-block rtl:-scale-x-100">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
