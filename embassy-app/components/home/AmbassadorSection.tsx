import type { Dictionary } from "@/lib/i18n/dictionary";

export function AmbassadorSection({ dict }: { dict: Dictionary }) {
  return (
    <section id="embassy" className="py-14 sm:py-16 md:py-[72px]">
      <div className="mx-auto max-w-content px-5">
        <span className="font-sans text-[12.5px] font-semibold uppercase tracking-[0.14em] text-burgundy-700">
          {dict.ambassador.eyebrow}
        </span>
        <div className="mt-8 grid gap-9 md:grid-cols-[220px_1fr] md:items-start">
          <div
            role="img"
            aria-label={dict.ambassador.portraitPending}
            className="flex h-[220px] w-full items-center justify-center border-[1.5px] border-dashed border-cedar-800 bg-ivory-100 p-4 text-center text-[12.5px] leading-relaxed text-charcoal-600 md:h-[270px] md:w-[220px]"
          >
            {dict.ambassador.portraitPending}
          </div>
          <div>
            <blockquote className="mb-4.5 font-serif text-[20px] italic leading-relaxed text-cedar-950 sm:text-[22px]">
              {dict.ambassador.quote}
            </blockquote>
            <div className="font-bold text-[14.5px] text-charcoal-900">
              {dict.ambassador.namePending}
            </div>
            <div className="text-[13.5px] text-charcoal-600">
              {dict.ambassador.role}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
