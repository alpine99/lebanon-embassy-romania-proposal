import type { Locale } from "@/lib/i18n/config";
import type { VerificationStatus } from "./schema";

export interface DocumentRecord {
  id: string;
  titleKey: string; // English title used as the canonical key across locales for this demo registry
  serviceSlug: string;
  language: Locale;
  fileType: "PDF" | "DOCX";
  sourceAuthority: string;
  lastReviewedDate: string | null;
  verificationStatus: VerificationStatus;
  downloadUrl: string | null; // null until a real, approved file exists
}

// Illustrative only — every entry is DOWNLOAD-DISABLED (downloadUrl: null)
// because no real, embassy-approved file exists yet for any of them.
// This demonstrates the filter/search UI working against real data
// shapes without ever generating or linking a fake government PDF.
export const documentRegistry: DocumentRecord[] = [
  {
    id: "passport-renewal-form",
    titleKey: "Passport Renewal Application Form",
    serviceSlug: "passport-renewal",
    language: "en",
    fileType: "PDF",
    sourceAuthority: "Not yet sourced",
    lastReviewedDate: null,
    verificationStatus: "ROMANIA_EMBASSY_APPROVAL_REQUIRED",
    downloadUrl: null,
  },
  {
    id: "birth-registration-form",
    titleKey: "Birth Registration Form",
    serviceSlug: "birth-registration",
    language: "en",
    fileType: "PDF",
    sourceAuthority: "Not yet sourced",
    lastReviewedDate: null,
    verificationStatus: "ROMANIA_EMBASSY_APPROVAL_REQUIRED",
    downloadUrl: null,
  },
  {
    id: "poa-template",
    titleKey: "Power of Attorney Template",
    serviceSlug: "power-of-attorney",
    language: "ar",
    fileType: "DOCX",
    sourceAuthority: "Not yet sourced",
    lastReviewedDate: null,
    verificationStatus: "ROMANIA_EMBASSY_APPROVAL_REQUIRED",
    downloadUrl: null,
  },
  {
    id: "visa-application-form",
    titleKey: "Lebanon Visa Application Form",
    serviceSlug: "visa-to-lebanon",
    language: "en",
    fileType: "PDF",
    sourceAuthority: "Not yet sourced",
    lastReviewedDate: null,
    verificationStatus: "ROMANIA_EMBASSY_APPROVAL_REQUIRED",
    downloadUrl: null,
  },
  {
    id: "legalisation-request-form",
    titleKey: "Document Legalisation Request Form",
    serviceSlug: "document-legalisation",
    language: "fr",
    fileType: "PDF",
    sourceAuthority: "Not yet sourced",
    lastReviewedDate: null,
    verificationStatus: "ROMANIA_EMBASSY_APPROVAL_REQUIRED",
    downloadUrl: null,
  },
];
