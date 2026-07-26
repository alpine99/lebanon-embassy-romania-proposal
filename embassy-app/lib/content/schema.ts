// Source-and-trust content schema.
//
// Every factual content record on this site (service details, fees,
// hours, contact info, timeline entries, etc.) carries this metadata.
// It is never displayed as decoration — verificationStatus drives what
// actually renders (e.g. DO_NOT_PUBLISH content must never reach the
// page; unconfirmed quick-facts must render the pending-confirmation
// string, never a guessed value).

export type VerificationStatus =
  | "VERIFIED_LEBANESE_OFFICIAL"
  | "VERIFIED_ROMANIAN_OFFICIAL"
  | "ROMANIA_EMBASSY_APPROVAL_REQUIRED"
  | "TRANSLATION_REVIEW_REQUIRED"
  | "DEMO_ONLY"
  | "DO_NOT_PUBLISH";

// Priority order matters: it's the literal hierarchy content editors
// must follow when more than one source could apply (see README /
// SOURCES.md). Never use a lower-priority source when a higher one is
// available, and never substitute one country's or one embassy's facts
// for another's.
export type OfficialSourceAuthority =
  | "EMBASSY_OF_LEBANON_IN_ROMANIA"
  | "LEBANESE_MFA_EMIGRANTS"
  | "LEBANESE_GENERAL_SECURITY"
  | "LEBANESE_MINISTRY_OF_INTERIOR"
  | "ROMANIAN_MFA"
  | "OTHER_ROMANIAN_AUTHORITY"
  | "OTHER_LEBANESE_AUTHORITY"
  | "NOT_YET_SOURCED";

export interface SourceRecord {
  verificationStatus: VerificationStatus;
  officialSourceAuthority: OfficialSourceAuthority;
  /** Human-readable title of the source document/page, e.g. "General Security — Passport Renewal Guidance" */
  officialSourceTitle: string | null;
  officialSourceUrl: string | null;
  /** ISO date string — when an editor last confirmed the source URL was live and said what this record claims. */
  officialSourceAccessedDate: string | null;
  embassyApprovalRequired: boolean;
  translationReviewRequired: boolean;
  /** ISO date string — when an editor last reviewed this whole record (content + translation + source). */
  lastReviewedDate: string | null;
  /** Internal-only. Never rendered on the public site. */
  internalEditorialNotes: string | null;
}

/**
 * The single, hard rule this schema exists to enforce: content whose
 * status is DO_NOT_PUBLISH must never reach a rendered page, no matter
 * what UI it's requested from. Every page/section that renders a list
 * of SourceRecord-backed items must filter through this first.
 */
export function isPublishable(record: SourceRecord): boolean {
  return record.verificationStatus !== "DO_NOT_PUBLISH";
}

/** A single quick-fact value that may not be confirmed yet. Never guess. */
export type PendingOr<T> =
  | { status: "confirmed"; value: T }
  | { status: "pending" };

export function pending<T>(): PendingOr<T> {
  return { status: "pending" };
}
export function confirmed<T>(value: T): PendingOr<T> {
  return { status: "confirmed", value };
}

export interface QuickFacts {
  appointmentRequired: PendingOr<boolean>;
  personalAttendanceRequired: PendingOr<boolean>;
  processingTime: PendingOr<string>;
  fees: PendingOr<string>;
}

export interface ServiceStep {
  order: number;
  title: string;
  description: string;
}

export interface ServiceRecord {
  slug: string;
  categorySlug: string;
  titleKey: string; // dictionary key resolving to localized title
  summaryKey: string;
  quickFacts: QuickFacts;
  whoForKey: string;
  requiredDocumentKeys: string[]; // dictionary keys, one per checklist item
  steps: { titleKey: string; descriptionKey: string }[]; // max 5, enforced by content review, not by this type
  importantNotesKeys: string[];
  hasDownloadableForm: boolean;
  source: SourceRecord;
}
