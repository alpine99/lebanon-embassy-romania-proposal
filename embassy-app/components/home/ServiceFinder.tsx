"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionary";
import { Button } from "@/components/ui/Button";
import { PendingTag } from "@/components/ui/PendingTag";

export function ServiceFinder({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const goals = dict.finder.goals;
  const [activeId, setActiveId] = useState(goals[0]?.id ?? "");
  const active = goals.find((g) => g.id === activeId) ?? goals[0];

  if (!active) return null;

  return (
    <section id="finder" className="bg-cedar-950 py-14 text-ivory-50 sm:py-16">
      <div className="mx-auto max-w-content px-5">
        <div className="mb-10 max-w-2xl md:mb-11">
          <span className="font-sans text-[12.5px] font-semibold uppercase tracking-[0.14em] text-gold-300">
            {dict.finder.eyebrow}
          </span>
          <h2 className="mt-3 font-serif text-[28px] leading-tight text-ivory-50 sm:text-[30px]">
            {dict.finder.heading}
          </h2>
        </div>

        <div className="border border-ivory-50/20 md:grid md:grid-cols-[280px_1fr]">
          <div
            role="tablist"
            aria-label={dict.finder.heading}
            className="flex overflow-x-auto border-b border-ivory-50/20 md:flex-col md:overflow-visible md:border-b-0 md:border-e md:border-ivory-50/20"
          >
            {goals.map((goal) => {
              const selected = goal.id === activeId;
              return (
                <button
                  key={goal.id}
                  id={`finder-tab-${goal.id}`}
                  role="tab"
                  aria-selected={selected}
                  aria-controls="finder-panel"
                  onClick={() => setActiveId(goal.id)}
                  className={`flex flex-none items-center justify-between gap-2.5 whitespace-nowrap border-b border-ivory-50/10 px-5 py-4 text-start font-sans text-[14.5px] font-semibold last:border-b-0 md:whitespace-normal md:border-b md:border-e md:last:border-b-0 ${
                    selected
                      ? "bg-ivory-50/8 text-gold-300"
                      : "text-ivory-50 hover:bg-ivory-50/6"
                  }`}
                >
                  {goal.label}
                </button>
              );
            })}
          </div>

          <div
            id="finder-panel"
            role="tabpanel"
            aria-labelledby={`finder-tab-${active.id}`}
            aria-live="polite"
            className="p-7 sm:p-9"
          >
            <h3 className="text-[22px] font-serif text-ivory-50">
              {active.title}
            </h3>
            <p className="mb-6 mt-1.5 flex flex-wrap items-center gap-2 text-[14.5px] text-ivory-50/70">
              {active.overview}
              <PendingTag tone="dark">{dict.finder.pendingTag}</PendingTag>
            </p>

            <div className="mb-6 grid gap-7 sm:grid-cols-2">
              <div>
                <h4 className="mb-2.5 font-sans text-[12.5px] font-semibold uppercase tracking-[0.1em] text-gold-300">
                  {dict.finder.requiredDocsLabel}
                </h4>
                <ul className="list-disc space-y-1.5 ps-[18px] text-[14.5px] leading-relaxed text-ivory-50/90">
                  {active.docs.map((doc) => (
                    <li key={doc}>{doc}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="mb-2.5 font-sans text-[12.5px] font-semibold uppercase tracking-[0.1em] text-gold-300">
                  {dict.finder.processLabel}
                </h4>
                <ul className="space-y-2.5 text-[14.5px] text-ivory-50/90">
                  <li>
                    {dict.finder.attendanceLabel}:{" "}
                    <PendingTag tone="dark">
                      {dict.finder.pendingConfirmation}
                    </PendingTag>
                  </li>
                  <li>
                    {dict.finder.processingTimeLabel}:{" "}
                    <PendingTag tone="dark">{dict.finder.pendingTag}</PendingTag>
                  </li>
                  <li>
                    {dict.finder.feesLabel}:{" "}
                    <PendingTag tone="dark">{dict.finder.pendingTag}</PendingTag>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap gap-3.5">
              <Button href="#" variant="gold">
                {dict.finder.downloadChecklist}
              </Button>
              <Button href={`/${locale}#finder`} variant="ghost">
                {dict.finder.bookAppointment}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
