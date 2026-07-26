import type { ServiceDefinition } from "../serviceTypes";
import { pending } from "../schema";

export const deathRegistration: ServiceDefinition = {
  slug: "death-registration",
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
      "If the family also needs to repatriate the remains, that is a distinct, more urgent process — see the Repatriation of Remains page and the Emergency Centre. This page is specifically about civil registration of the death, which can happen on a separate timeline.",
  },
  content: {
    en: {
      title: "Registering a Death",
      summary: "Register the death of a Lebanese citizen who died in Romania with Lebanese civil status authorities.",
      whoFor: "Family members of a Lebanese citizen who died in Romania and needs the death recorded in Lebanese civil records.",
      requiredDocuments: [
        "Original Romanian death certificate",
        "Apostille/translation of the death certificate — pending confirmation of whether required",
        "Deceased's Lebanese passport and civil registry extract",
        "Requester's proof of relationship to the deceased",
        "Completed registration form — pending confirmation of which form",
      ],
      steps: [
        { title: "Obtain the Romanian death certificate", description: "Register the death with Romanian civil authorities first, per Romanian procedure." },
        { title: "Contact the Embassy", description: "If repatriation of remains is also needed, contact the Embassy urgently — see the Emergency Centre for that process." },
        { title: "Gather documents", description: "Assemble the required documents listed above." },
        { title: "Book an appointment", description: "Use the Service Finder or Appointment Hub to request a time (demo only in this prototype)." },
        { title: "Submit for registration", description: "Personal attendance requirement and processing time pending confirmation by the Embassy." },
      ],
      importantNotes: [
        "If you need to repatriate remains, that is a separate and time-sensitive process — see the Emergency Centre rather than starting here.",
      ],
    },
    ro: {
      title: "Înregistrarea unui deces",
      summary: "Înregistrați decesul unui cetățean libanez survenit în România la autoritățile de stare civilă libaneze.",
      whoFor: "Membrii familiei unui cetățean libanez decedat în România, care au nevoie ca decesul să fie înregistrat în registrele civile libaneze.",
      requiredDocuments: [
        "Certificatul de deces românesc original",
        "Apostilă/traducere a certificatului de deces — în așteptarea confirmării necesității",
        "Pașaportul libanez și extrasul de registru civil al decedatului",
        "Dovada relației solicitantului cu decedatul",
        "Formular de înregistrare completat — în așteptarea confirmării formularului corect",
      ],
      steps: [
        { title: "Obțineți certificatul de deces românesc", description: "Înregistrați mai întâi decesul la autoritățile civile române, conform procedurii românești." },
        { title: "Contactați Ambasada", description: "Dacă este necesară și repatrierea rămășițelor, contactați Ambasada urgent — consultați Centrul de urgență pentru acest proces." },
        { title: "Pregătiți documentele", description: "Adunați documentele necesare enumerate mai sus." },
        { title: "Programați o vizită", description: "Utilizați Asistentul de servicii sau Centrul de programări pentru a solicita o oră (doar demonstrativ)." },
        { title: "Depuneți pentru înregistrare", description: "Cerința de prezență personală și timpul de procesare sunt în așteptarea confirmării de către Ambasadă." },
      ],
      importantNotes: [
        "Dacă aveți nevoie de repatrierea rămășițelor, acesta este un proces separat și urgent — consultați Centrul de urgență în loc să începeți aici.",
      ],
    },
    ar: {
      title: "تسجيل الوفاة",
      summary: "تسجيل وفاة مواطن لبناني توفي في رومانيا لدى سلطات الأحوال الشخصية اللبنانية.",
      whoFor: "أفراد عائلة مواطن لبناني توفي في رومانيا ويحتاجون إلى تسجيل الوفاة في السجلات المدنية اللبنانية.",
      requiredDocuments: [
        "شهادة الوفاة الرومانية الأصلية",
        "تصديق/ترجمة شهادة الوفاة — بانتظار تأكيد الحاجة إليها",
        "جواز السفر اللبناني للمتوفى وإخراج القيد الفردي",
        "إثبات صلة القرابة بين مقدم الطلب والمتوفى",
        "استمارة التسجيل معبأة — بانتظار تأكيد الاستمارة الصحيحة",
      ],
      steps: [
        { title: "الحصول على شهادة الوفاة الرومانية", description: "سجّل الوفاة أولاً لدى السلطات المدنية الرومانية وفق الإجراء الروماني." },
        { title: "التواصل مع السفارة", description: "إذا كانت إعادة الرفات مطلوبة أيضًا، تواصل مع السفارة بشكل عاجل — راجع مركز الطوارئ لهذا الإجراء." },
        { title: "تجهيز المستندات", description: "اجمع المستندات المطلوبة المذكورة أعلاه." },
        { title: "حجز موعد", description: "استخدم دليل الخدمات أو مركز المواعيد لطلب موعد (نموذج توضيحي فقط)." },
        { title: "التقديم للتسجيل", description: "شرط الحضور الشخصي ومدة المعالجة بانتظار تأكيد السفارة." },
      ],
      importantNotes: [
        "إذا كنت بحاجة إلى إعادة الرفات، فهذا إجراء منفصل وعاجل — راجع مركز الطوارئ بدلاً من البدء هنا.",
      ],
    },
    fr: {
      title: "Déclaration d'un décès",
      summary: "Déclarer le décès d'un citoyen libanais survenu en Roumanie auprès des autorités d'état civil libanaises.",
      whoFor: "Membres de la famille d'un citoyen libanais décédé en Roumanie devant faire enregistrer le décès dans les registres civils libanais.",
      requiredDocuments: [
        "Certificat de décès roumain original",
        "Apostille/traduction du certificat de décès — en attente de confirmation de la nécessité",
        "Passeport libanais et extrait de registre civil du défunt",
        "Preuve du lien de parenté du demandeur avec le défunt",
        "Formulaire d'enregistrement complété — en attente de confirmation du formulaire correct",
      ],
      steps: [
        { title: "Obtenir le certificat de décès roumain", description: "Déclarez d'abord le décès auprès des autorités civiles roumaines, selon la procédure roumaine." },
        { title: "Contacter l'Ambassade", description: "Si le rapatriement de la dépouille est également nécessaire, contactez l'Ambassade en urgence — voir le Centre d'urgence pour cette procédure." },
        { title: "Rassembler les documents", description: "Rassemblez les documents requis énumérés ci-dessus." },
        { title: "Prendre rendez-vous", description: "Utilisez l'Assistant des services ou le Centre de rendez-vous pour demander un créneau (démonstration uniquement)." },
        { title: "Soumettre pour enregistrement", description: "L'exigence de présence personnelle et le délai de traitement sont en attente de confirmation par l'Ambassade." },
      ],
      importantNotes: [
        "Si vous devez rapatrier une dépouille, il s'agit d'une procédure distincte et urgente — consultez le Centre d'urgence plutôt que de commencer ici.",
      ],
    },
  },
};
