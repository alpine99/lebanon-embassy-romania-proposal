import type { ServiceDefinition } from "../serviceTypes";
import { pending } from "../schema";

export const visaToLebanon: ServiceDefinition = {
  slug: "visa-to-lebanon",
  categorySlug: "visas-to-lebanon",
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
      "Visa eligibility depends heavily on nationality and purpose of travel — Lebanese General Security publishes national visa-on-arrival eligibility lists by nationality, which would be the correct VERIFIED_LEBANESE_OFFICIAL source once cited. This page must not assert eligibility for any specific nationality without that citation.",
  },
  content: {
    en: {
      title: "Visas to Lebanon",
      summary: "Check entry requirements before travelling to Lebanon, and how to apply for a visa if one is required.",
      whoFor: "Romanian citizens, third-country nationals, and anyone else who is not a Lebanese citizen planning to travel to Lebanon.",
      requiredDocuments: [
        "Valid passport with the required remaining validity — pending confirmation of exact requirement",
        "Visa application form, if a visa is required for your nationality — pending confirmation",
        "Passport-style photograph — pending confirmation of exact specification",
        "Documentation of purpose of travel — pending confirmation of what's required",
      ],
      steps: [
        { title: "Check whether you need a visa", description: "Requirements depend on your nationality and purpose of travel — do not assume visa-free or visa-on-arrival status without confirming." },
        { title: "Gather documents", description: "Assemble the required documents listed above once you know your visa category." },
        { title: "Apply through the correct channel", description: "Depending on your situation, this may be through the Embassy or on arrival — pending confirmation." },
        { title: "Allow for processing time", description: "Processing time pending confirmation by the Embassy." },
      ],
      importantNotes: [
        "This page does not state which nationalities require a visa in advance versus visa-on-arrival, because that determination must come from an official Lebanese source and has not yet been cited here.",
        "Requirements can change — always confirm current requirements before booking travel.",
      ],
    },
    ro: {
      title: "Vize pentru Liban",
      summary: "Verificați condițiile de intrare înainte de a călători în Liban și modul de a solicita o viză, dacă este necesară.",
      whoFor: "Cetățenii români, resortisanții din țări terțe și orice altă persoană care nu este cetățean libanez și intenționează să călătorească în Liban.",
      requiredDocuments: [
        "Pașaport valabil cu perioada de valabilitate rămasă necesară — în așteptarea confirmării cerinței exacte",
        "Formular de cerere de viză, dacă este necesară o viză pentru naționalitatea dumneavoastră — în așteptare",
        "Fotografie tip pașaport — în așteptarea confirmării specificațiilor exacte",
        "Documente privind scopul călătoriei — în așteptarea confirmării cerințelor",
      ],
      steps: [
        { title: "Verificați dacă aveți nevoie de viză", description: "Cerințele depind de naționalitatea dumneavoastră și de scopul călătoriei — nu presupuneți un statut fără viză sau cu viză la sosire fără confirmare." },
        { title: "Pregătiți documentele", description: "Adunați documentele necesare enumerate mai sus odată ce cunoașteți categoria de viză aplicabilă." },
        { title: "Solicitați prin canalul corect", description: "În funcție de situația dumneavoastră, aceasta poate fi prin Ambasadă sau la sosire — în așteptarea confirmării." },
        { title: "Prevedeți timp pentru procesare", description: "Timpul de procesare este în așteptarea confirmării de către Ambasadă." },
      ],
      importantNotes: [
        "Această pagină nu precizează care naționalități necesită viză în avans față de viză la sosire, deoarece această determinare trebuie să provină dintr-o sursă oficială libaneză, care nu a fost încă citată aici.",
        "Cerințele se pot schimba — confirmați întotdeauna cerințele actuale înainte de a rezerva călătoria.",
      ],
    },
    ar: {
      title: "تأشيرات إلى لبنان",
      summary: "التحقق من شروط الدخول قبل السفر إلى لبنان، وكيفية التقدم بطلب تأشيرة إذا كانت مطلوبة.",
      whoFor: "المواطنون الرومانيون ومواطنو الدول الأخرى وأي شخص آخر غير لبناني الجنسية يخطط للسفر إلى لبنان.",
      requiredDocuments: [
        "جواز سفر ساري المفعول بالمدة المتبقية المطلوبة — بانتظار تأكيد المتطلب الدقيق",
        "استمارة طلب التأشيرة، إذا كانت مطلوبة لجنسيتك — قيد الانتظار",
        "صورة شخصية بمواصفات جواز السفر — بانتظار تأكيد المواصفات الدقيقة",
        "مستندات الغرض من السفر — بانتظار تأكيد المتطلبات",
      ],
      steps: [
        { title: "التحقق مما إذا كنت بحاجة إلى تأشيرة", description: "تعتمد المتطلبات على جنسيتك والغرض من سفرك — لا تفترض الإعفاء من التأشيرة أو الحصول عليها عند الوصول دون التأكد." },
        { title: "تجهيز المستندات", description: "اجمع المستندات المطلوبة المذكورة أعلاه بمجرد معرفة فئة التأشيرة الخاصة بك." },
        { title: "التقديم عبر القناة الصحيحة", description: "حسب حالتك، قد يكون ذلك عبر السفارة أو عند الوصول — بانتظار التأكيد." },
        { title: "توقع وقتًا للمعالجة", description: "مدة المعالجة بانتظار تأكيد السفارة." },
      ],
      importantNotes: [
        "لا تذكر هذه الصفحة الجنسيات التي تتطلب تأشيرة مسبقة مقابل التأشيرة عند الوصول، لأن هذا التحديد يجب أن يأتي من مصدر لبناني رسمي لم يُستشهد به هنا بعد.",
        "قد تتغير المتطلبات — تأكد دائمًا من المتطلبات الحالية قبل حجز السفر.",
      ],
    },
    fr: {
      title: "Visas pour le Liban",
      summary: "Vérifier les conditions d'entrée avant de voyager au Liban, et comment demander un visa si nécessaire.",
      whoFor: "Citoyens roumains, ressortissants de pays tiers et toute autre personne non libanaise prévoyant de voyager au Liban.",
      requiredDocuments: [
        "Passeport valide avec la durée de validité restante requise — en attente de confirmation de l'exigence exacte",
        "Formulaire de demande de visa, si un visa est requis pour votre nationalité — en attente",
        "Photographie format passeport — en attente de confirmation des spécifications exactes",
        "Documentation sur l'objet du voyage — en attente de confirmation des exigences",
      ],
      steps: [
        { title: "Vérifier si un visa est nécessaire", description: "Les exigences dépendent de votre nationalité et de l'objet du voyage — ne présumez pas d'une exemption de visa ou d'un visa à l'arrivée sans confirmation." },
        { title: "Rassembler les documents", description: "Rassemblez les documents requis énumérés ci-dessus une fois que vous connaissez votre catégorie de visa." },
        { title: "Soumettre par le bon canal", description: "Selon votre situation, cela peut se faire via l'Ambassade ou à l'arrivée — en attente de confirmation." },
        { title: "Prévoir un délai de traitement", description: "Le délai de traitement est en attente de confirmation par l'Ambassade." },
      ],
      importantNotes: [
        "Cette page n'indique pas quelles nationalités nécessitent un visa à l'avance par rapport à un visa à l'arrivée, car cette détermination doit provenir d'une source libanaise officielle, non encore citée ici.",
        "Les exigences peuvent changer — confirmez toujours les exigences actuelles avant de réserver un voyage.",
      ],
    },
  },
};
