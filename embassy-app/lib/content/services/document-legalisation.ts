import type { ServiceDefinition } from "../serviceTypes";
import { pending } from "../schema";

export const documentLegalisation: ServiceDefinition = {
  slug: "document-legalisation",
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
      "The legalisation vs. apostille distinction matters and depends on whether Lebanon and Romania's chain runs through the apostille convention for the specific document type — do not assert which applies without a confirmed source.",
  },
  content: {
    en: {
      title: "Legalising a Document for Use in Lebanon",
      summary: "Have a Romanian document certified so it is recognised as valid in Lebanon.",
      whoFor: "Anyone needing a Romanian-issued document (academic, civil, commercial, or other) to be recognised as valid in Lebanon.",
      requiredDocuments: [
        "Original document to be legalised",
        "Romanian notarisation or apostille of the document — pending confirmation of which applies",
        "Certified translation, if the document is not in Arabic, French, or English — pending confirmation of requirement",
        "Completed request form — pending confirmation of which form",
      ],
      steps: [
        { title: "Confirm the document type is eligible", description: "Not all documents follow the same legalisation chain — confirm with the Embassy before starting." },
        { title: "Complete Romanian-side certification", description: "Obtain any required Romanian notarisation or apostille first." },
        { title: "Arrange translation if needed", description: "Confirm whether a certified translation is required for your document." },
        { title: "Book an appointment", description: "Use the Service Finder or Appointment Hub to request a time (demo only in this prototype)." },
        { title: "Submit for legalisation", description: "Personal attendance requirement and processing time pending confirmation by the Embassy." },
      ],
      importantNotes: [
        "\"Legalisation\" and \"apostille\" are not interchangeable — which one applies depends on the document and its intended use. This page does not assert which applies to your situation.",
      ],
    },
    ro: {
      title: "Legalizarea unui document pentru utilizare în Liban",
      summary: "Certificați un document românesc astfel încât să fie recunoscut ca valabil în Liban.",
      whoFor: "Orice persoană care are nevoie ca un document emis în România (academic, civil, comercial sau de alt tip) să fie recunoscut ca valabil în Liban.",
      requiredDocuments: [
        "Documentul original care urmează a fi legalizat",
        "Notarizarea sau apostila românească a documentului — în așteptarea confirmării care se aplică",
        "Traducere autorizată, dacă documentul nu este în arabă, franceză sau engleză — în așteptarea confirmării necesității",
        "Formular de cerere completat — în așteptarea confirmării formularului corect",
      ],
      steps: [
        { title: "Confirmați eligibilitatea tipului de document", description: "Nu toate documentele urmează același lanț de legalizare — confirmați cu Ambasada înainte de a începe." },
        { title: "Finalizați certificarea din partea română", description: "Obțineți mai întâi orice notarizare sau apostilă românească necesară." },
        { title: "Organizați traducerea, dacă este necesară", description: "Confirmați dacă este necesară o traducere autorizată pentru documentul dumneavoastră." },
        { title: "Programați o vizită", description: "Utilizați Asistentul de servicii sau Centrul de programări pentru a solicita o oră (doar demonstrativ)." },
        { title: "Depuneți pentru legalizare", description: "Cerința de prezență personală și timpul de procesare sunt în așteptarea confirmării de către Ambasadă." },
      ],
      importantNotes: [
        "„Legalizarea” și „apostila” nu sunt interschimbabile — ceea ce se aplică depinde de document și de utilizarea prevăzută. Această pagină nu afirmă ce se aplică în situația dumneavoastră.",
      ],
    },
    ar: {
      title: "تصديق مستند لاستخدامه في لبنان",
      summary: "تصديق مستند روماني ليُعترف به كصالح في لبنان.",
      whoFor: "أي شخص يحتاج إلى الاعتراف بمستند صادر في رومانيا (أكاديمي أو مدني أو تجاري أو غيره) كصالح في لبنان.",
      requiredDocuments: [
        "المستند الأصلي المطلوب تصديقه",
        "التصديق الروماني الرسمي أو الأبوستيل للمستند — بانتظار تأكيد الإجراء المطبق",
        "ترجمة معتمدة، إذا لم يكن المستند بالعربية أو الفرنسية أو الإنجليزية — بانتظار تأكيد الحاجة إليها",
        "استمارة الطلب معبأة — بانتظار تأكيد الاستمارة الصحيحة",
      ],
      steps: [
        { title: "تأكيد أهلية نوع المستند", description: "لا تتبع جميع المستندات سلسلة التصديق نفسها — تأكد من السفارة قبل البدء." },
        { title: "إتمام التصديق من الجانب الروماني", description: "احصل أولاً على أي تصديق رسمي أو أبوستيل روماني مطلوب." },
        { title: "ترتيب الترجمة إذا لزم الأمر", description: "تأكد مما إذا كانت الترجمة المعتمدة مطلوبة لمستندك." },
        { title: "حجز موعد", description: "استخدم دليل الخدمات أو مركز المواعيد لطلب موعد (نموذج توضيحي فقط)." },
        { title: "التقديم للتصديق", description: "شرط الحضور الشخصي ومدة المعالجة بانتظار تأكيد السفارة." },
      ],
      importantNotes: [
        "«التصديق» و«الأبوستيل» ليسا مترادفين — ما ينطبق يعتمد على المستند والغرض المقصود منه. لا تؤكد هذه الصفحة أيهما ينطبق على حالتك.",
      ],
    },
    fr: {
      title: "Légalisation d'un document destiné au Liban",
      summary: "Faire certifier un document roumain afin qu'il soit reconnu comme valide au Liban.",
      whoFor: "Toute personne ayant besoin qu'un document délivré en Roumanie (académique, civil, commercial ou autre) soit reconnu comme valide au Liban.",
      requiredDocuments: [
        "Document original à légaliser",
        "Notarisation ou apostille roumaine du document — en attente de confirmation de la procédure applicable",
        "Traduction certifiée, si le document n'est pas en arabe, français ou anglais — en attente de confirmation de la nécessité",
        "Formulaire de demande complété — en attente de confirmation du formulaire correct",
      ],
      steps: [
        { title: "Confirmer l'éligibilité du type de document", description: "Tous les documents ne suivent pas la même chaîne de légalisation — confirmez auprès de l'Ambassade avant de commencer." },
        { title: "Effectuer la certification côté roumain", description: "Obtenez d'abord toute notarisation ou apostille roumaine requise." },
        { title: "Organiser la traduction si nécessaire", description: "Confirmez si une traduction certifiée est requise pour votre document." },
        { title: "Prendre rendez-vous", description: "Utilisez l'Assistant des services ou le Centre de rendez-vous pour demander un créneau (démonstration uniquement)." },
        { title: "Soumettre pour légalisation", description: "L'exigence de présence personnelle et le délai de traitement sont en attente de confirmation par l'Ambassade." },
      ],
      importantNotes: [
        "« Légalisation » et « apostille » ne sont pas interchangeables — ce qui s'applique dépend du document et de son usage prévu. Cette page n'affirme pas ce qui s'applique à votre situation.",
      ],
    },
  },
};
