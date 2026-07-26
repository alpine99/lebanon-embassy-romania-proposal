import type { Locale } from "@/lib/i18n/config";
import type { QuickFacts, SourceRecord } from "./schema";

export interface ServiceLocalizedContent {
  title: string;
  summary: string; // one sentence, plain language
  whoFor: string;
  requiredDocuments: string[];
  steps: { title: string; description: string }[]; // max 5
  importantNotes: string[];
}

export interface ServiceCategoryLocalized {
  title: string;
  description: string;
}

export interface ServiceDefinition {
  slug: string;
  categorySlug:
    | "passports-travel-documents"
    | "family-civil-status"
    | "legal-documents"
    | "visas-to-lebanon"
    | "emergency-assistance"
    | "community-other-services";
  quickFacts: QuickFacts;
  hasDownloadableForm: boolean;
  source: SourceRecord;
  content: Record<Locale, ServiceLocalizedContent>;
}

export const serviceCategories: Record<
  ServiceDefinition["categorySlug"],
  Record<Locale, ServiceCategoryLocalized>
> = {
  "passports-travel-documents": {
    en: { title: "Passports & Travel Documents", description: "Renew, replace, or request an emergency travel document." },
    ro: { title: "Pașapoarte și documente de călătorie", description: "Reînnoiți, înlocuiți sau solicitați un document de călătorie de urgență." },
    ar: { title: "جوازات السفر ووثائق السفر", description: "تجديد أو استبدال جواز السفر أو طلب وثيقة سفر طارئة." },
    fr: { title: "Passeports et documents de voyage", description: "Renouveler, remplacer ou demander un document de voyage d'urgence." },
  },
  "family-civil-status": {
    en: { title: "Family & Civil Status", description: "Register a birth, marriage, divorce, or death." },
    ro: { title: "Familie și stare civilă", description: "Înregistrați o naștere, o căsătorie, un divorț sau un deces." },
    ar: { title: "الأسرة والأحوال الشخصية", description: "تسجيل ولادة أو زواج أو طلاق أو وفاة." },
    fr: { title: "Famille et état civil", description: "Déclarer une naissance, un mariage, un divorce ou un décès." },
  },
  "legal-documents": {
    en: { title: "Legal Documents", description: "Powers of attorney, legalisation, and consular certificates." },
    ro: { title: "Documente juridice", description: "Procuri, legalizări și certificate consulare." },
    ar: { title: "المستندات القانونية", description: "الوكالات والتصديقات والشهادات القنصلية." },
    fr: { title: "Documents juridiques", description: "Procurations, légalisations et attestations consulaires." },
  },
  "visas-to-lebanon": {
    en: { title: "Visas to Lebanon", description: "Entry requirements for travelling to Lebanon." },
    ro: { title: "Vize pentru Liban", description: "Condiții de intrare pentru călătoria în Liban." },
    ar: { title: "تأشيرات إلى لبنان", description: "شروط الدخول للسفر إلى لبنان." },
    fr: { title: "Visas pour le Liban", description: "Conditions d'entrée pour voyager au Liban." },
  },
  "emergency-assistance": {
    en: { title: "Emergency Assistance", description: "Urgent consular help for citizens facing an emergency abroad." },
    ro: { title: "Asistență de urgență", description: "Ajutor consular urgent pentru cetățenii aflați într-o situație de urgență în străinătate." },
    ar: { title: "المساعدة الطارئة", description: "مساعدة قنصلية عاجلة للمواطنين الذين يواجهون حالة طارئة في الخارج." },
    fr: { title: "Assistance d'urgence", description: "Aide consulaire urgente pour les citoyens confrontés à une urgence à l'étranger." },
  },
  "community-other-services": {
    en: { title: "Community & Other Services", description: "Registration, students, and services not listed elsewhere." },
    ro: { title: "Comunitate și alte servicii", description: "Înregistrare, studenți și servicii neenumerate în altă parte." },
    ar: { title: "المجتمع والخدمات الأخرى", description: "التسجيل والطلاب والخدمات غير المدرجة في مكان آخر." },
    fr: { title: "Communauté et autres services", description: "Inscription, étudiants et services non listés ailleurs." },
  },
};
