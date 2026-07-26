import type { ServiceDefinition } from "../serviceTypes";
import { pending } from "../schema";

export const divorceRegistration: ServiceDefinition = {
  slug: "divorce-registration",
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
      "Divorce registration in Lebanon depends heavily on the religious/confessional court system under which the original marriage was registered — this is a case where general Lebanese guidance may not translate cleanly even at the national level, let alone for a Romania-specific procedure. Flag for careful embassy review before publishing beyond this skeletal version.",
  },
  content: {
    en: {
      title: "Registering a Divorce",
      summary: "Register a divorce with Lebanese civil status authorities so Lebanese civil records reflect the change.",
      whoFor: "Lebanese citizens whose divorce was finalised in Romania (or elsewhere) and needs to be reflected in Lebanese civil records.",
      requiredDocuments: [
        "Final divorce decree/certificate",
        "Apostille/translation of the divorce decree — pending confirmation of whether required",
        "Original marriage registration record, if previously registered with the Embassy",
        "Passport",
        "Completed registration form — pending confirmation of which form",
      ],
      steps: [
        { title: "Confirm which procedure applies", description: "Lebanese divorce-recognition procedure can depend on which religious/civil court registered the original marriage — contact the Embassy before assuming a document list." },
        { title: "Gather documents", description: "Assemble the required documents listed above." },
        { title: "Book an appointment", description: "Use the Service Finder or Appointment Hub to request a time (demo only in this prototype)." },
        { title: "Attend in person", description: "Personal attendance requirement pending confirmation by the Embassy." },
        { title: "Submit for registration", description: "Processing time pending confirmation by the Embassy." },
      ],
      importantNotes: [
        "This is one of the areas most likely to vary by individual circumstance — treat this page as a starting point, not a complete procedure, until confirmed by the Embassy.",
      ],
    },
    ro: {
      title: "Înregistrarea unui divorț",
      summary: "Înregistrați un divorț la autoritățile de stare civilă libaneze pentru ca registrele civile libaneze să reflecte schimbarea.",
      whoFor: "Cetățenii libanezi al căror divorț a fost finalizat în România (sau în altă parte) și trebuie reflectat în registrele civile libaneze.",
      requiredDocuments: [
        "Hotărârea/certificatul final de divorț",
        "Apostilă/traducere a hotărârii de divorț — în așteptarea confirmării necesității",
        "Înregistrarea originală a căsătoriei, dacă a fost înregistrată anterior la Ambasadă",
        "Pașaport",
        "Formular de înregistrare completat — în așteptarea confirmării formularului corect",
      ],
      steps: [
        { title: "Confirmați procedura aplicabilă", description: "Procedura libaneză de recunoaștere a divorțului poate depinde de instanța religioasă/civilă care a înregistrat căsătoria inițială — contactați Ambasada înainte de a presupune o listă de documente." },
        { title: "Pregătiți documentele", description: "Adunați documentele necesare enumerate mai sus." },
        { title: "Programați o vizită", description: "Utilizați Asistentul de servicii sau Centrul de programări pentru a solicita o oră (doar demonstrativ)." },
        { title: "Prezentați-vă personal", description: "Cerința de prezență personală este în așteptarea confirmării de către Ambasadă." },
        { title: "Depuneți pentru înregistrare", description: "Timpul de procesare este în așteptarea confirmării de către Ambasadă." },
      ],
      importantNotes: [
        "Aceasta este una dintre situațiile cele mai susceptibile să varieze în funcție de circumstanțele individuale — tratați această pagină ca punct de plecare, nu ca procedură completă, până la confirmarea de către Ambasadă.",
      ],
    },
    ar: {
      title: "تسجيل الطلاق",
      summary: "تسجيل الطلاق لدى سلطات الأحوال الشخصية اللبنانية بحيث تعكس السجلات المدنية اللبنانية هذا التغيير.",
      whoFor: "المواطنون اللبنانيون الذين تم الانتهاء من إجراءات طلاقهم في رومانيا (أو في مكان آخر) ويحتاجون إلى انعكاس ذلك في السجلات المدنية اللبنانية.",
      requiredDocuments: [
        "قرار/شهادة الطلاق النهائية",
        "تصديق/ترجمة قرار الطلاق — بانتظار تأكيد الحاجة إليها",
        "سجل تسجيل الزواج الأصلي، إذا تم تسجيله سابقًا لدى السفارة",
        "جواز السفر",
        "استمارة التسجيل معبأة — بانتظار تأكيد الاستمارة الصحيحة",
      ],
      steps: [
        { title: "تأكيد الإجراء المطبق", description: "قد يعتمد إجراء الاعتراف بالطلاق اللبناني على المحكمة الدينية/المدنية التي سجّلت الزواج الأصلي — تواصل مع السفارة قبل افتراض قائمة مستندات." },
        { title: "تجهيز المستندات", description: "اجمع المستندات المطلوبة المذكورة أعلاه." },
        { title: "حجز موعد", description: "استخدم دليل الخدمات أو مركز المواعيد لطلب موعد (نموذج توضيحي فقط)." },
        { title: "الحضور شخصيًا", description: "شرط الحضور الشخصي بانتظار تأكيد السفارة." },
        { title: "التقديم للتسجيل", description: "مدة المعالجة بانتظار تأكيد السفارة." },
      ],
      importantNotes: [
        "هذا أحد المجالات الأكثر عرضة للاختلاف حسب الظروف الفردية — تعامل مع هذه الصفحة كنقطة انطلاق وليست إجراءً كاملاً، إلى حين تأكيد السفارة.",
      ],
    },
    fr: {
      title: "Déclaration d'un divorce",
      summary: "Déclarer un divorce auprès des autorités d'état civil libanaises afin que les registres civils libanais reflètent ce changement.",
      whoFor: "Citoyens libanais dont le divorce a été finalisé en Roumanie (ou ailleurs) et doit être reflété dans les registres civils libanais.",
      requiredDocuments: [
        "Jugement/certificat de divorce définitif",
        "Apostille/traduction du jugement de divorce — en attente de confirmation de la nécessité",
        "Enregistrement original du mariage, s'il a été précédemment enregistré auprès de l'Ambassade",
        "Passeport",
        "Formulaire d'enregistrement complété — en attente de confirmation du formulaire correct",
      ],
      steps: [
        { title: "Confirmer la procédure applicable", description: "La procédure libanaise de reconnaissance du divorce peut dépendre de la juridiction religieuse/civile ayant enregistré le mariage initial — contactez l'Ambassade avant de présumer une liste de documents." },
        { title: "Rassembler les documents", description: "Rassemblez les documents requis énumérés ci-dessus." },
        { title: "Prendre rendez-vous", description: "Utilisez l'Assistant des services ou le Centre de rendez-vous pour demander un créneau (démonstration uniquement)." },
        { title: "Se présenter en personne", description: "L'exigence de présence personnelle est en attente de confirmation par l'Ambassade." },
        { title: "Soumettre pour enregistrement", description: "Le délai de traitement est en attente de confirmation par l'Ambassade." },
      ],
      importantNotes: [
        "C'est l'un des domaines les plus susceptibles de varier selon les circonstances individuelles — considérez cette page comme un point de départ, non une procédure complète, jusqu'à confirmation par l'Ambassade.",
      ],
    },
  },
};
