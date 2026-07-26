import type { VerificationStatus } from "@/lib/content/schema";
import type { Dictionary } from "@/lib/i18n/dictionary";

const toneClasses: Record<VerificationStatus, string> = {
  VERIFIED_LEBANESE_OFFICIAL: "border-cedar-800 text-cedar-800 bg-ivory-50",
  VERIFIED_ROMANIAN_OFFICIAL: "border-cedar-800 text-cedar-800 bg-ivory-50",
  ROMANIA_EMBASSY_APPROVAL_REQUIRED: "border-burgundy-700 text-burgundy-700 bg-ivory-50",
  TRANSLATION_REVIEW_REQUIRED: "border-burgundy-700 text-burgundy-700 bg-ivory-50",
  DEMO_ONLY: "border-charcoal-600 text-charcoal-600 bg-ivory-50",
  DO_NOT_PUBLISH: "border-burgundy-800 text-burgundy-800 bg-ivory-100",
};

export function VerificationBadge({
  status,
  dict,
}: {
  status: VerificationStatus;
  dict: Dictionary;
}) {
  return (
    <span
      className={`inline-block rounded border px-2.5 py-1 text-xs font-bold tracking-wide ${toneClasses[status]}`}
    >
      {dict.verificationBadges[status]}
    </span>
  );
}
