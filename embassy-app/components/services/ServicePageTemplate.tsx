import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionary";
import type { ServiceDefinition } from "@/lib/content/serviceTypes";
import { VerificationBadge } from "@/components/ui/VerificationBadge";
import { Button } from "@/components/ui/Button";

function QuickFactRow({
  label,
  value,
  pendingText,
}: {
  label: string;
  value: string | null;
  pendingText: string;
}) {
  return (
    <div className="flex flex-col gap-1 border-t border-line py-3.5 first:border-t-0 first:pt-0">
      <dt className="text-[12px] font-bold uppercase tracking-[0.09em] text-burgundy-700">
        {label}
      </dt>
      <dd className="text-[15px] text-charcoal-900">
        {value ?? <span className="italic text-charcoal-600">{pendingText}</span>}
      </dd>
    </div>
  );
}

export function ServicePageTemplate({
  locale,
  dict,
  service,
}: {
  locale: Locale;
  dict: Dictionary;
  service: ServiceDefinition;
}) {
  const c = service.content[locale];
  const sp = dict.servicePage;
  const qf = service.quickFacts;

  const boolFact = (f: typeof qf.appointmentRequired) =>
    f.status === "confirmed" ? (f.value ? sp.yes : sp.no) : null;
  const textFact = (f: typeof qf.processingTime) =>
    f.status === "confirmed" ? f.value : null;

  return (
    <div className="mx-auto max-w-content px-5 py-12 sm:py-14">
      {/* Breadcrumb-ish back link */}
      <Link
        href={`/${locale}#services`}
        className="mb-6 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-cedar-800 hover:underline"
      >
        <span aria-hidden="true" className="rtl:-scale-x-100">←</span> {sp.backToServices}
      </Link>

      {/* 1. Title, 13. verification badge */}
      <div className="mb-3 flex flex-wrap items-center gap-3">
        <VerificationBadge status={service.source.verificationStatus} dict={dict} />
      </div>
      <h1 className="font-serif text-[32px] leading-tight text-cedar-950 sm:text-[38px]">
        {c.title}
      </h1>

      {/* 2. One-sentence summary */}
      <p className="mt-4 max-w-2xl text-[17px] text-charcoal-600">{c.summary}</p>

      {/* General-guidance note, only when relevant */}
      {(service.source.verificationStatus === "VERIFIED_LEBANESE_OFFICIAL") && (
        <p className="mt-4 max-w-2xl rounded border border-line bg-ivory-100 px-4 py-3 text-[13.5px] text-charcoal-600">
          {sp.generalGuidanceNote}
        </p>
      )}

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_320px]">
        <div className="flex flex-col gap-10">
          {/* 4. Who this is for */}
          <section>
            <h2 className="mb-3 font-sans text-[13px] font-bold uppercase tracking-[0.09em] text-cedar-950">
              {sp.whoForHeading}
            </h2>
            <p className="text-[15px] text-charcoal-900">{c.whoFor}</p>
          </section>

          {/* 5. Required documents checklist */}
          <section>
            <h2 className="mb-3 font-sans text-[13px] font-bold uppercase tracking-[0.09em] text-cedar-950">
              {sp.requiredDocumentsHeading}
            </h2>
            <ul className="flex flex-col gap-2.5">
              {c.requiredDocuments.map((doc, i) => (
                <li key={i} className="flex items-start gap-2.5 text-[15px] text-charcoal-900">
                  <span aria-hidden="true" className="mt-1 h-4 w-4 flex-none rounded-[2px] border border-cedar-800" />
                  {doc}
                </li>
              ))}
            </ul>
          </section>

          {/* 6. Steps (max 5) */}
          <section>
            <h2 className="mb-4 font-sans text-[13px] font-bold uppercase tracking-[0.09em] text-cedar-950">
              {sp.stepsHeading}
            </h2>
            <ol className="flex flex-col gap-5">
              {c.steps.slice(0, 5).map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full border border-gold-400 font-serif text-[13px] text-cedar-950">
                    {i + 1}
                  </span>
                  <div>
                    <div className="font-sans text-[15px] font-bold text-cedar-950">{step.title}</div>
                    <div className="mt-0.5 text-[14.5px] text-charcoal-600">{step.description}</div>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* 7. Important notes */}
          {c.importantNotes.length > 0 && (
            <section>
              <h2 className="mb-3 font-sans text-[13px] font-bold uppercase tracking-[0.09em] text-cedar-950">
                {sp.importantNotesHeading}
              </h2>
              <ul className="flex flex-col gap-2.5">
                {c.importantNotes.map((note, i) => (
                  <li key={i} className="border-s-2 border-gold-400 ps-3.5 text-[14.5px] text-charcoal-600">
                    {note}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* 8. Forms and downloads */}
          <section>
            <h2 className="mb-3 font-sans text-[13px] font-bold uppercase tracking-[0.09em] text-cedar-950">
              {sp.formsHeading}
            </h2>
            {service.hasDownloadableForm ? (
              <Button href="#" variant="outline">
                {sp.formsHeading}
              </Button>
            ) : (
              <p className="text-[14px] italic text-charcoal-600">{sp.noFormAvailable}</p>
            )}
          </section>

          {/* 9 & 10. CTAs */}
          <div className="flex flex-wrap gap-3.5 border-t border-line pt-8">
            <Button href={`/${locale}#finder`} variant="primary">
              {sp.bookAppointmentCta}
            </Button>
            <Button href={`/${locale}#contact`} variant="outline">
              {sp.contactConsularCta}
            </Button>
          </div>
        </div>

        {/* Sidebar: 3. Quick facts, 11. last reviewed, 12. official source */}
        <aside className="h-fit border border-line bg-ivory-100 p-6">
          <h2 className="mb-1 font-serif text-[18px] text-cedar-950">{sp.quickFactsHeading}</h2>
          <dl>
            <QuickFactRow label={sp.appointmentRequired} value={boolFact(qf.appointmentRequired)} pendingText={sp.pendingConfirmationLong} />
            <QuickFactRow label={sp.personalAttendanceRequired} value={boolFact(qf.personalAttendanceRequired)} pendingText={sp.pendingConfirmationLong} />
            <QuickFactRow label={sp.processingTime} value={textFact(qf.processingTime)} pendingText={sp.pendingConfirmationLong} />
            <QuickFactRow label={sp.fees} value={textFact(qf.fees)} pendingText={sp.pendingConfirmationLong} />
          </dl>

          <div className="mt-6 border-t border-line pt-5">
            <h3 className="mb-1 text-[12px] font-bold uppercase tracking-[0.09em] text-burgundy-700">
              {sp.lastReviewedHeading}
            </h3>
            <p className="text-[14px] text-charcoal-900">
              {service.source.lastReviewedDate ?? sp.notYetReviewed}
            </p>
          </div>

          <div className="mt-6 border-t border-line pt-5">
            <h3 className="mb-1 text-[12px] font-bold uppercase tracking-[0.09em] text-burgundy-700">
              {sp.officialSourceHeading}
            </h3>
            {service.source.officialSourceTitle && service.source.officialSourceUrl ? (
              <a
                href={service.source.officialSourceUrl}
                className="text-[14px] text-cedar-800 underline"
              >
                {service.source.officialSourceTitle}
              </a>
            ) : (
              <p className="text-[14px] italic text-charcoal-600">{sp.sourcePendingText}</p>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}
