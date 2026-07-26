import type { ServiceDefinition } from "../serviceTypes";
import { pending } from "../schema";

export const unregisteredCitizenServices: ServiceDefinition = {
  slug: "unregistered-citizen-services",
  categorySlug: "community-other-services",
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
      "This page exists to reassure citizens who haven't formally registered with the Embassy that they can still access consular services — registration status should not gate access to passports, civil status services, or emergency help. Confirm this framing is accurate with the Embassy before publishing.",
  },
  content: {
    en: {
      title: "Services for Lebanese Citizens Not Registered in Romania",
      summary: "You do not need to be formally registered with the Embassy to access consular services.",
      whoFor: "Lebanese citizens living in or visiting Romania who have not formally registered their presence with the Embassy.",
      requiredDocuments: [
        "Valid Lebanese passport or other proof of Lebanese citizenship",
        "Proof of current address in Romania, if relevant to the service requested — pending confirmation",
      ],
      steps: [
        { title: "Identify the service you need", description: "Use the Service Finder or browse Consular Services — registration is not a prerequisite for most services." },
        { title: "Consider registering with the Community Registration prototype", description: "Registering is optional but can help the Embassy reach you in a crisis — see the Community section (demonstration only in this prototype)." },
        { title: "Proceed with your specific service", description: "Follow the steps on that service's own page." },
        { title: "Contact the Embassy with any questions", description: "If you're unsure whether registration affects your situation, ask directly rather than assuming." },
      ],
      importantNotes: [
        "Community registration (where available) is a way for the Embassy to reach citizens during a crisis — it is not a requirement to access passports, civil status services, or emergency assistance.",
      ],
    },
    ro: {
      title: "Servicii pentru cetățenii libanezi neînregistrați în România",
      summary: "Nu trebuie să fiți înregistrat oficial la Ambasadă pentru a avea acces la serviciile consulare.",
      whoFor: "Cetățenii libanezi care locuiesc sau vizitează România și nu și-au înregistrat oficial prezența la Ambasadă.",
      requiredDocuments: [
        "Pașaport libanez valabil sau altă dovadă a cetățeniei libaneze",
        "Dovada adresei actuale din România, dacă este relevantă pentru serviciul solicitat — în așteptarea confirmării",
      ],
      steps: [
        { title: "Identificați serviciul de care aveți nevoie", description: "Utilizați Asistentul de servicii sau răsfoiți Serviciile consulare — înregistrarea nu este o condiție prealabilă pentru majoritatea serviciilor." },
        { title: "Luați în considerare înregistrarea prin prototipul de Înregistrare comunitară", description: "Înregistrarea este opțională, dar poate ajuta Ambasada să vă contacteze într-o situație de criză — consultați secțiunea Comunitate (doar demonstrativ în acest prototip)." },
        { title: "Continuați cu serviciul dumneavoastră specific", description: "Urmați pașii de pe pagina proprie a serviciului respectiv." },
        { title: "Contactați Ambasada cu orice întrebări", description: "Dacă nu sunteți sigur dacă înregistrarea vă afectează situația, întrebați direct în loc să presupuneți." },
      ],
      importantNotes: [
        "Înregistrarea comunitară (unde este disponibilă) este o modalitate prin care Ambasada poate contacta cetățenii în timpul unei crize — nu este o cerință pentru accesul la pașapoarte, servicii de stare civilă sau asistență de urgență.",
      ],
    },
    ar: {
      title: "خدمات للمواطنين اللبنانيين غير المسجلين في رومانيا",
      summary: "لست بحاجة إلى أن تكون مسجلاً رسميًا لدى السفارة للوصول إلى الخدمات القنصلية.",
      whoFor: "المواطنون اللبنانيون المقيمون في رومانيا أو الزائرون لها ولم يسجلوا وجودهم رسميًا لدى السفارة.",
      requiredDocuments: [
        "جواز سفر لبناني ساري المفعول أو إثبات آخر للجنسية اللبنانية",
        "إثبات العنوان الحالي في رومانيا، إن كان ذا صلة بالخدمة المطلوبة — بانتظار التأكيد",
      ],
      steps: [
        { title: "تحديد الخدمة التي تحتاجها", description: "استخدم دليل الخدمات أو تصفح الخدمات القنصلية — التسجيل ليس شرطًا مسبقًا لمعظم الخدمات." },
        { title: "النظر في التسجيل عبر نموذج تسجيل المجتمع", description: "التسجيل اختياري لكنه قد يساعد السفارة على الوصول إليك في حالة الطوارئ — راجع قسم المجتمع (نموذج توضيحي فقط في هذا النموذج الأولي)." },
        { title: "المتابعة مع خدمتك المحددة", description: "اتبع الخطوات الموجودة في صفحة تلك الخدمة." },
        { title: "التواصل مع السفارة لأي استفسارات", description: "إذا لم تكن متأكدًا مما إذا كان التسجيل يؤثر على حالتك، اسأل مباشرة بدلاً من الافتراض." },
      ],
      importantNotes: [
        "التسجيل المجتمعي (حيثما توفر) وسيلة تتيح للسفارة الوصول إلى المواطنين خلال الأزمات — وهو ليس شرطًا للوصول إلى جوازات السفر أو خدمات الأحوال الشخصية أو المساعدة الطارئة.",
      ],
    },
    fr: {
      title: "Services pour les citoyens libanais non enregistrés en Roumanie",
      summary: "Vous n'avez pas besoin d'être officiellement enregistré auprès de l'Ambassade pour accéder aux services consulaires.",
      whoFor: "Citoyens libanais vivant en Roumanie ou y séjournant qui n'ont pas officiellement enregistré leur présence auprès de l'Ambassade.",
      requiredDocuments: [
        "Passeport libanais valide ou autre preuve de nationalité libanaise",
        "Preuve d'adresse actuelle en Roumanie, si pertinente pour le service demandé — en attente de confirmation",
      ],
      steps: [
        { title: "Identifier le service dont vous avez besoin", description: "Utilisez l'Assistant des services ou parcourez les Services consulaires — l'enregistrement n'est pas un prérequis pour la plupart des services." },
        { title: "Envisager l'enregistrement via le prototype d'inscription communautaire", description: "L'enregistrement est facultatif mais peut aider l'Ambassade à vous joindre en cas de crise — voir la section Communauté (démonstration uniquement dans ce prototype)." },
        { title: "Poursuivre avec votre service spécifique", description: "Suivez les étapes sur la page propre à ce service." },
        { title: "Contacter l'Ambassade pour toute question", description: "Si vous n'êtes pas sûr que l'enregistrement affecte votre situation, demandez directement plutôt que de présumer." },
      ],
      importantNotes: [
        "L'inscription communautaire (lorsqu'elle est disponible) est un moyen pour l'Ambassade de joindre les citoyens en cas de crise — ce n'est pas une exigence pour accéder aux passeports, aux services d'état civil ou à l'assistance d'urgence.",
      ],
    },
  },
};
