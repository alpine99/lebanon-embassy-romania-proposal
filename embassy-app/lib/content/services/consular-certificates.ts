import type { ServiceDefinition } from "../serviceTypes";
import { pending } from "../schema";

export const consularCertificates: ServiceDefinition = {
  slug: "consular-certificates",
  categorySlug: "legal-documents",
  hasDownloadableForm: false,
  quickFacts: {
    appointmentRequired: pending(),
    personalAttendanceRequired: pending(),
    processingTime: pending(),
    fees: pending(),
  },
  source: {
    verificationStatus: "ROMANIA_EMBASSY_APPROVAL_REQUIRED",
    officialSourceAuthority: "NOT_YET_SOURCED",
    officialSourceTitle: null,
    officialSourceUrl: null,
    officialSourceAccessedDate: null,
    embassyApprovalRequired: true,
    translationReviewRequired: true,
    lastReviewedDate: null,
    internalEditorialNotes:
      "'Consular statement/certificate' covers a range of distinct documents (proof of life, proof of residence, certified copies, etc.) — this page describes the general request process; it does not enumerate every certificate type, since that list should come from the Embassy.",
  },
  content: {
    en: {
      title: "Consular Statements and Certificates",
      summary: "Request a consular statement or certificate (such as proof of life or a certified copy) from the Embassy.",
      whoFor: "Lebanese citizens who need an official statement or certificate issued by the Embassy for use with another authority or institution.",
      requiredDocuments: [
        "Valid passport or other Lebanese ID",
        "A clear statement of which certificate you need and why — pending confirmation of exact certificate types offered",
        "Any supporting documents relevant to the specific certificate — pending confirmation",
      ],
      steps: [
        { title: "Identify the exact certificate you need", description: "Contact the Embassy to confirm they issue the specific statement/certificate required for your purpose." },
        { title: "Gather supporting documents", description: "Requirements vary by certificate type — the Embassy will confirm what's needed for yours." },
        { title: "Book an appointment", description: "Use the Service Finder or Appointment Hub to request a time (demo only in this prototype)." },
        { title: "Attend in person", description: "Personal attendance requirement pending confirmation by the Embassy." },
        { title: "Collect the certificate", description: "Processing time pending confirmation by the Embassy." },
      ],
      importantNotes: [
        "This page does not list every certificate type the Embassy may offer — contact the consular section to confirm availability for your specific need.",
      ],
    },
    ro: {
      title: "Declarații și certificate consulare",
      summary: "Solicitați o declarație sau un certificat consular (precum dovada de viață sau o copie certificată) de la Ambasadă.",
      whoFor: "Cetățenii libanezi care au nevoie de o declarație sau un certificat oficial emis de Ambasadă pentru a fi utilizat la o altă autoritate sau instituție.",
      requiredDocuments: [
        "Pașaport valabil sau alt act de identitate libanez",
        "O declarație clară a certificatului de care aveți nevoie și motivul — în așteptarea confirmării tipurilor exacte de certificate oferite",
        "Orice documente justificative relevante pentru certificatul specific — în așteptare",
      ],
      steps: [
        { title: "Identificați certificatul exact de care aveți nevoie", description: "Contactați Ambasada pentru a confirma că emite declarația/certificatul specific necesar în scopul dumneavoastră." },
        { title: "Pregătiți documentele justificative", description: "Cerințele variază în funcție de tipul de certificat — Ambasada va confirma ce este necesar pentru al dumneavoastră." },
        { title: "Programați o vizită", description: "Utilizați Asistentul de servicii sau Centrul de programări pentru a solicita o oră (doar demonstrativ)." },
        { title: "Prezentați-vă personal", description: "Cerința de prezență personală este în așteptarea confirmării de către Ambasadă." },
        { title: "Ridicați certificatul", description: "Timpul de procesare este în așteptarea confirmării de către Ambasadă." },
      ],
      importantNotes: [
        "Această pagină nu enumeră toate tipurile de certificate pe care le poate oferi Ambasada — contactați secția consulară pentru a confirma disponibilitatea pentru nevoia dumneavoastră specifică.",
      ],
    },
    ar: {
      title: "الإفادات والشهادات القنصلية",
      summary: "طلب إفادة أو شهادة قنصلية (مثل إثبات الحياة أو نسخة مصدّقة) من السفارة.",
      whoFor: "المواطنون اللبنانيون الذين يحتاجون إلى إفادة أو شهادة رسمية صادرة عن السفارة لاستخدامها لدى جهة أو مؤسسة أخرى.",
      requiredDocuments: [
        "جواز سفر ساري المفعول أو هوية لبنانية أخرى",
        "بيان واضح للشهادة التي تحتاجها والسبب — بانتظار تأكيد أنواع الشهادات المتاحة بالضبط",
        "أي مستندات داعمة ذات صلة بالشهادة المحددة — قيد الانتظار",
      ],
      steps: [
        { title: "تحديد الشهادة المطلوبة بالضبط", description: "تواصل مع السفارة للتأكد من أنها تصدر الإفادة/الشهادة المحددة المطلوبة لغرضك." },
        { title: "تجهيز المستندات الداعمة", description: "تختلف المتطلبات حسب نوع الشهادة — ستؤكد السفارة ما هو مطلوب لشهادتك." },
        { title: "حجز موعد", description: "استخدم دليل الخدمات أو مركز المواعيد لطلب موعد (نموذج توضيحي فقط)." },
        { title: "الحضور شخصيًا", description: "شرط الحضور الشخصي بانتظار تأكيد السفارة." },
        { title: "استلام الشهادة", description: "مدة المعالجة بانتظار تأكيد السفارة." },
      ],
      importantNotes: [
        "لا تسرد هذه الصفحة جميع أنواع الشهادات التي قد تقدمها السفارة — تواصل مع القسم القنصلي للتأكد من توفر ما تحتاجه تحديدًا.",
      ],
    },
    fr: {
      title: "Attestations et certificats consulaires",
      summary: "Demander une attestation ou un certificat consulaire (comme un certificat de vie ou une copie certifiée) auprès de l'Ambassade.",
      whoFor: "Citoyens libanais ayant besoin d'une attestation ou d'un certificat officiel délivré par l'Ambassade pour une autre autorité ou institution.",
      requiredDocuments: [
        "Passeport valide ou autre pièce d'identité libanaise",
        "Un énoncé clair du certificat requis et de sa raison — en attente de confirmation des types de certificats exacts proposés",
        "Tout document justificatif pertinent pour le certificat spécifique — en attente",
      ],
      steps: [
        { title: "Identifier le certificat exact requis", description: "Contactez l'Ambassade pour confirmer qu'elle délivre l'attestation/le certificat spécifique nécessaire à votre besoin." },
        { title: "Rassembler les documents justificatifs", description: "Les exigences varient selon le type de certificat — l'Ambassade confirmera ce qui est nécessaire pour le vôtre." },
        { title: "Prendre rendez-vous", description: "Utilisez l'Assistant des services ou le Centre de rendez-vous pour demander un créneau (démonstration uniquement)." },
        { title: "Se présenter en personne", description: "L'exigence de présence personnelle est en attente de confirmation par l'Ambassade." },
        { title: "Récupérer le certificat", description: "Le délai de traitement est en attente de confirmation par l'Ambassade." },
      ],
      importantNotes: [
        "Cette page ne liste pas tous les types de certificats que l'Ambassade peut proposer — contactez la section consulaire pour confirmer la disponibilité pour votre besoin spécifique.",
      ],
    },
  },
};
