import type { ServiceDefinition } from "../serviceTypes";
import { pending } from "../schema";

export const birthRegistration: ServiceDefinition = {
  slug: "birth-registration",
  categorySlug: "family-civil-status",
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
      "Lebanese civil status registration generally falls under the Ministry of Interior / civil registry authorities; the correct VERIFIED_LEBANESE_OFFICIAL citation should point to their published guidance on registering a birth abroad. The Romania-specific chain (whether Romanian birth certificate needs Romanian apostille/translation before the Embassy will accept it) must be confirmed with the Embassy directly.",
  },
  content: {
    en: {
      title: "Registering a Birth Abroad",
      summary: "Register the birth of a child born in Romania with Lebanese civil status authorities.",
      whoFor: "Lebanese parents (or a Lebanese parent) whose child was born in Romania and needs to be registered in Lebanese civil records.",
      requiredDocuments: [
        "Original Romanian birth certificate",
        "Romanian apostille/translation of the birth certificate — pending confirmation of whether required",
        "Parents' Lebanese civil registry extracts — pending confirmation of validity period accepted",
        "Parents' passports and marriage certificate (if applicable)",
        "Completed registration form — pending confirmation of which form",
      ],
      steps: [
        { title: "Obtain the Romanian birth certificate", description: "Register the birth with Romanian civil authorities first, per Romanian procedure." },
        { title: "Prepare Lebanese-side documents", description: "Gather the parents' civil registry extracts and other required documents." },
        { title: "Contact the Embassy", description: "Confirm the exact document chain and any translation/apostille requirements before submitting." },
        { title: "Book an appointment", description: "Use the Service Finder or Appointment Hub to request a time (demo only in this prototype)." },
        { title: "Submit for registration", description: "Personal attendance requirement and processing time pending confirmation by the Embassy." },
      ],
      importantNotes: [
        "Registration deadlines can matter for civil status matters — contact the Embassy as early as possible after the birth rather than waiting.",
        "This page does not state a deadline, fee, or exact document chain because none is yet confirmed for Romania specifically.",
      ],
    },
    ro: {
      title: "Înregistrarea unei nașteri în străinătate",
      summary: "Înregistrați nașterea unui copil născut în România la autoritățile de stare civilă libaneze.",
      whoFor: "Părinți libanezi (sau un părinte libanez) al căror copil s-a născut în România și trebuie înregistrat în registrele civile libaneze.",
      requiredDocuments: [
        "Certificatul de naștere românesc original",
        "Apostilă/traducere română a certificatului de naștere — în așteptarea confirmării necesității",
        "Extrasele de registru civil libanez ale părinților — în așteptarea confirmării perioadei de valabilitate acceptate",
        "Pașapoartele părinților și certificatul de căsătorie (dacă este cazul)",
        "Formular de înregistrare completat — în așteptarea confirmării formularului corect",
      ],
      steps: [
        { title: "Obțineți certificatul de naștere românesc", description: "Înregistrați mai întâi nașterea la autoritățile civile române, conform procedurii românești." },
        { title: "Pregătiți documentele din partea libaneză", description: "Adunați extrasele de registru civil ale părinților și celelalte documente necesare." },
        { title: "Contactați Ambasada", description: "Confirmați lanțul exact de documente și eventualele cerințe de traducere/apostilare înainte de depunere." },
        { title: "Programați o vizită", description: "Utilizați Asistentul de servicii sau Centrul de programări pentru a solicita o oră (doar demonstrativ în acest prototip)." },
        { title: "Depuneți pentru înregistrare", description: "Cerința de prezență personală și timpul de procesare sunt în așteptarea confirmării de către Ambasadă." },
      ],
      importantNotes: [
        "Termenele de înregistrare pot fi importante pentru chestiunile de stare civilă — contactați Ambasada cât mai curând posibil după naștere, în loc să așteptați.",
        "Această pagină nu indică un termen, o taxă sau un lanț exact de documente, deoarece niciunul nu este încă confirmat specific pentru România.",
      ],
    },
    ar: {
      title: "تسجيل ولادة في الخارج",
      summary: "تسجيل ولادة طفل وُلد في رومانيا لدى سلطات الأحوال الشخصية اللبنانية.",
      whoFor: "الوالدان اللبنانيان (أو أحدهما) اللذان وُلد طفلهما في رومانيا ويحتاج إلى تسجيله في السجلات المدنية اللبنانية.",
      requiredDocuments: [
        "شهادة الميلاد الرومانية الأصلية",
        "تصديق/ترجمة رومانية لشهادة الميلاد — بانتظار تأكيد الحاجة إليها",
        "إخراج قيد فردي لبناني للوالدين — بانتظار تأكيد مدة الصلاحية المقبولة",
        "جوازا سفر الوالدين وشهادة الزواج (إن وجدت)",
        "استمارة التسجيل معبأة — بانتظار تأكيد الاستمارة الصحيحة",
      ],
      steps: [
        { title: "الحصول على شهادة الميلاد الرومانية", description: "سجّل الولادة أولاً لدى السلطات المدنية الرومانية وفق الإجراء الروماني." },
        { title: "تجهيز المستندات اللبنانية", description: "اجمع إخراجات القيد الفردي للوالدين والمستندات الأخرى المطلوبة." },
        { title: "التواصل مع السفارة", description: "تأكد من سلسلة المستندات الدقيقة وأي متطلبات ترجمة أو تصديق قبل التقديم." },
        { title: "حجز موعد", description: "استخدم دليل الخدمات أو مركز المواعيد لطلب موعد (نموذج توضيحي فقط في هذا النموذج الأولي)." },
        { title: "التقديم للتسجيل", description: "شرط الحضور الشخصي ومدة المعالجة بانتظار تأكيد السفارة." },
      ],
      importantNotes: [
        "قد تكون مواعيد التسجيل مهمة في مسائل الأحوال الشخصية — تواصل مع السفارة في أقرب وقت ممكن بعد الولادة بدلاً من الانتظار.",
        "لا تذكر هذه الصفحة مهلة زمنية أو رسمًا أو سلسلة مستندات دقيقة لأن أيًا منها غير مؤكد بعد بالنسبة لرومانيا تحديدًا.",
      ],
    },
    fr: {
      title: "Déclaration d'une naissance à l'étranger",
      summary: "Déclarer la naissance d'un enfant né en Roumanie auprès des autorités d'état civil libanaises.",
      whoFor: "Parents libanais (ou un parent libanais) dont l'enfant est né en Roumanie et doit être enregistré dans les registres civils libanais.",
      requiredDocuments: [
        "Acte de naissance roumain original",
        "Apostille/traduction roumaine de l'acte de naissance — en attente de confirmation de la nécessité",
        "Extraits de registre civil libanais des parents — en attente de confirmation de la période de validité acceptée",
        "Passeports des parents et certificat de mariage (le cas échéant)",
        "Formulaire d'enregistrement complété — en attente de confirmation du formulaire correct",
      ],
      steps: [
        { title: "Obtenir l'acte de naissance roumain", description: "Déclarez d'abord la naissance auprès des autorités civiles roumaines, selon la procédure roumaine." },
        { title: "Préparer les documents côté libanais", description: "Rassemblez les extraits de registre civil des parents et les autres documents requis." },
        { title: "Contacter l'Ambassade", description: "Confirmez la chaîne exacte de documents et toute exigence de traduction/apostille avant de soumettre." },
        { title: "Prendre rendez-vous", description: "Utilisez l'Assistant des services ou le Centre de rendez-vous pour demander un créneau (démonstration uniquement)." },
        { title: "Soumettre pour enregistrement", description: "L'exigence de présence personnelle et le délai de traitement sont en attente de confirmation par l'Ambassade." },
      ],
      importantNotes: [
        "Les délais d'enregistrement peuvent être importants pour les questions d'état civil — contactez l'Ambassade le plus tôt possible après la naissance plutôt que d'attendre.",
        "Cette page n'indique ni délai, ni frais, ni chaîne exacte de documents, car aucun n'est encore confirmé spécifiquement pour la Roumanie.",
      ],
    },
  },
};
