import type { ServiceDefinition } from "../serviceTypes";
import { pending } from "../schema";

export const marriageRegistration: ServiceDefinition = {
  slug: "marriage-registration",
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
      "Lebanese marriage registration procedure varies depending on where and under what rite the marriage took place — this is exactly the kind of nuance that must come from the Embassy directly rather than being generalised. Do not add a document list beyond what's here without a confirmed source.",
  },
  content: {
    en: {
      title: "Registering a Marriage",
      summary: "Register a marriage with Lebanese civil status authorities when one or both spouses are Lebanese.",
      whoFor: "Lebanese citizens who were married in Romania (or elsewhere) and need the marriage recorded in Lebanese civil records.",
      requiredDocuments: [
        "Original Romanian marriage certificate (or equivalent from country of marriage)",
        "Apostille/translation of the marriage certificate — pending confirmation of whether required",
        "Both spouses' civil registry extracts — pending confirmation of validity period accepted",
        "Both spouses' passports",
        "Completed registration form — pending confirmation of which form",
      ],
      steps: [
        { title: "Confirm which procedure applies", description: "Marriage registration procedures can differ by circumstance — contact the Embassy before assuming a document list." },
        { title: "Gather documents", description: "Assemble the required documents listed above." },
        { title: "Book an appointment", description: "Use the Service Finder or Appointment Hub to request a time (demo only in this prototype)." },
        { title: "Attend in person", description: "Personal attendance requirement pending confirmation by the Embassy." },
        { title: "Submit for registration", description: "Processing time pending confirmation by the Embassy." },
      ],
      importantNotes: [
        "Requirements can differ depending on where and how the marriage took place — do not assume this checklist is complete without confirming with the Embassy.",
      ],
    },
    ro: {
      title: "Înregistrarea unei căsătorii",
      summary: "Înregistrați o căsătorie la autoritățile de stare civilă libaneze atunci când unul sau ambii soți sunt libanezi.",
      whoFor: "Cetățenii libanezi care s-au căsătorit în România (sau în altă parte) și au nevoie ca respectiva căsătorie să fie înregistrată în registrele civile libaneze.",
      requiredDocuments: [
        "Certificatul de căsătorie românesc original (sau echivalentul din țara căsătoriei)",
        "Apostilă/traducere a certificatului de căsătorie — în așteptarea confirmării necesității",
        "Extrasele de registru civil ale ambilor soți — în așteptarea confirmării perioadei de valabilitate acceptate",
        "Pașapoartele ambilor soți",
        "Formular de înregistrare completat — în așteptarea confirmării formularului corect",
      ],
      steps: [
        { title: "Confirmați procedura aplicabilă", description: "Procedurile de înregistrare a căsătoriei pot varia în funcție de circumstanțe — contactați Ambasada înainte de a presupune o listă de documente." },
        { title: "Pregătiți documentele", description: "Adunați documentele necesare enumerate mai sus." },
        { title: "Programați o vizită", description: "Utilizați Asistentul de servicii sau Centrul de programări pentru a solicita o oră (doar demonstrativ)." },
        { title: "Prezentați-vă personal", description: "Cerința de prezență personală este în așteptarea confirmării de către Ambasadă." },
        { title: "Depuneți pentru înregistrare", description: "Timpul de procesare este în așteptarea confirmării de către Ambasadă." },
      ],
      importantNotes: [
        "Cerințele pot diferi în funcție de locul și modul în care a avut loc căsătoria — nu presupuneți că această listă este completă fără a confirma cu Ambasada.",
      ],
    },
    ar: {
      title: "تسجيل الزواج",
      summary: "تسجيل الزواج لدى سلطات الأحوال الشخصية اللبنانية عندما يكون أحد الزوجين أو كلاهما لبنانيًا.",
      whoFor: "المواطنون اللبنانيون الذين تزوجوا في رومانيا (أو في مكان آخر) ويحتاجون إلى تسجيل الزواج في السجلات المدنية اللبنانية.",
      requiredDocuments: [
        "عقد الزواج الروماني الأصلي (أو ما يعادله من بلد الزواج)",
        "تصديق/ترجمة عقد الزواج — بانتظار تأكيد الحاجة إليها",
        "إخراج قيد فردي لكلا الزوجين — بانتظار تأكيد مدة الصلاحية المقبولة",
        "جوازا سفر الزوجين",
        "استمارة التسجيل معبأة — بانتظار تأكيد الاستمارة الصحيحة",
      ],
      steps: [
        { title: "تأكيد الإجراء المطبق", description: "قد تختلف إجراءات تسجيل الزواج حسب الظروف — تواصل مع السفارة قبل افتراض قائمة مستندات." },
        { title: "تجهيز المستندات", description: "اجمع المستندات المطلوبة المذكورة أعلاه." },
        { title: "حجز موعد", description: "استخدم دليل الخدمات أو مركز المواعيد لطلب موعد (نموذج توضيحي فقط)." },
        { title: "الحضور شخصيًا", description: "شرط الحضور الشخصي بانتظار تأكيد السفارة." },
        { title: "التقديم للتسجيل", description: "مدة المعالجة بانتظار تأكيد السفارة." },
      ],
      importantNotes: [
        "قد تختلف المتطلبات حسب مكان وكيفية عقد الزواج — لا تفترض أن هذه القائمة كاملة دون التأكد من السفارة.",
      ],
    },
    fr: {
      title: "Déclaration d'un mariage",
      summary: "Déclarer un mariage auprès des autorités d'état civil libanaises lorsque l'un des époux ou les deux sont libanais.",
      whoFor: "Citoyens libanais mariés en Roumanie (ou ailleurs) devant faire enregistrer leur mariage dans les registres civils libanais.",
      requiredDocuments: [
        "Certificat de mariage roumain original (ou équivalent du pays du mariage)",
        "Apostille/traduction du certificat de mariage — en attente de confirmation de la nécessité",
        "Extraits de registre civil des deux époux — en attente de confirmation de la période de validité acceptée",
        "Passeports des deux époux",
        "Formulaire d'enregistrement complété — en attente de confirmation du formulaire correct",
      ],
      steps: [
        { title: "Confirmer la procédure applicable", description: "Les procédures de déclaration de mariage peuvent varier selon les circonstances — contactez l'Ambassade avant de présumer une liste de documents." },
        { title: "Rassembler les documents", description: "Rassemblez les documents requis énumérés ci-dessus." },
        { title: "Prendre rendez-vous", description: "Utilisez l'Assistant des services ou le Centre de rendez-vous pour demander un créneau (démonstration uniquement)." },
        { title: "Se présenter en personne", description: "L'exigence de présence personnelle est en attente de confirmation par l'Ambassade." },
        { title: "Soumettre pour enregistrement", description: "Le délai de traitement est en attente de confirmation par l'Ambassade." },
      ],
      importantNotes: [
        "Les exigences peuvent varier selon le lieu et les circonstances du mariage — ne présumez pas que cette liste est complète sans confirmation de l'Ambassade.",
      ],
    },
  },
};
