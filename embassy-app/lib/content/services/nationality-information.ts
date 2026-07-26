import type { ServiceDefinition } from "../serviceTypes";
import { pending } from "../schema";

export const nationalityInformation: ServiceDefinition = {
  slug: "nationality-information",
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
      "Nationality law is one of the highest-stakes categories on this entire site — eligibility questions (e.g. transmission of nationality) must never be answered generically. This page intentionally stops at 'contact the Embassy' rather than attempting to summarise eligibility criteria, since an incomplete summary could be actively harmful.",
  },
  content: {
    en: {
      title: "Lebanese Nationality Information",
      summary: "General information on Lebanese nationality matters, and how to raise a specific question with the Embassy.",
      whoFor: "Individuals with a question about their own or a family member's Lebanese nationality status.",
      requiredDocuments: [
        "Any existing Lebanese civil documents you hold (passport, civil registry extract, ID)",
        "Documents relevant to your specific question (e.g. parents' or grandparents' civil records) — varies by case",
      ],
      steps: [
        { title: "Identify your specific question", description: "Nationality matters are highly case-specific — the more precisely you can describe your situation, the better the Embassy can help." },
        { title: "Gather any documents you already hold", description: "Existing civil records, however partial, help the Embassy assess your situation." },
        { title: "Contact the Embassy directly", description: "Nationality questions are not handled through a general checklist — use the Contact page to reach the consular section." },
        { title: "Follow the Embassy's guidance", description: "Next steps, required documents, and any applicable procedure will depend entirely on your individual case." },
      ],
      importantNotes: [
        "This page deliberately does not attempt to summarise nationality eligibility rules. Nationality law has real, permanent consequences and depends on individual facts — always get a direct answer from the Embassy rather than relying on a general guide.",
      ],
    },
    ro: {
      title: "Informații privind cetățenia libaneză",
      summary: "Informații generale privind aspectele legate de cetățenia libaneză și modul de a adresa o întrebare specifică Ambasadei.",
      whoFor: "Persoanele care au o întrebare cu privire la statutul propriu sau al unui membru al familiei privind cetățenia libaneză.",
      requiredDocuments: [
        "Orice documente civile libaneze pe care le dețineți deja (pașaport, extras de registru civil, act de identitate)",
        "Documente relevante pentru întrebarea dumneavoastră specifică (de exemplu, actele civile ale părinților sau bunicilor) — variază în funcție de caz",
      ],
      steps: [
        { title: "Identificați întrebarea dumneavoastră specifică", description: "Chestiunile legate de cetățenie sunt extrem de specifice fiecărui caz — cu cât descrieți mai precis situația dumneavoastră, cu atât Ambasada vă poate ajuta mai bine." },
        { title: "Pregătiți documentele pe care le dețineți deja", description: "Actele civile existente, chiar și parțiale, ajută Ambasada să vă evalueze situația." },
        { title: "Contactați direct Ambasada", description: "Întrebările privind cetățenia nu sunt tratate printr-o listă generală de verificare — utilizați pagina de Contact pentru a ajunge la secția consulară." },
        { title: "Urmați îndrumările Ambasadei", description: "Pașii următori, documentele necesare și orice procedură aplicabilă vor depinde în întregime de cazul dumneavoastră individual." },
      ],
      importantNotes: [
        "Această pagină nu încearcă în mod deliberat să rezume regulile de eligibilitate pentru cetățenie. Dreptul cetățeniei are consecințe reale și permanente și depinde de fapte individuale — obțineți întotdeauna un răspuns direct de la Ambasadă, în loc să vă bazați pe un ghid general.",
      ],
    },
    ar: {
      title: "معلومات عن الجنسية اللبنانية",
      summary: "معلومات عامة حول مسائل الجنسية اللبنانية، وكيفية طرح سؤال محدد على السفارة.",
      whoFor: "الأفراد الذين لديهم سؤال بشأن وضعهم الشخصي أو وضع أحد أفراد الأسرة فيما يتعلق بالجنسية اللبنانية.",
      requiredDocuments: [
        "أي مستندات مدنية لبنانية تملكها بالفعل (جواز سفر، إخراج قيد فردي، هوية)",
        "المستندات ذات الصلة بسؤالك المحدد (مثل السجلات المدنية للوالدين أو الأجداد) — تختلف حسب الحالة",
      ],
      steps: [
        { title: "تحديد سؤالك المحدد", description: "مسائل الجنسية خاصة جدًا بكل حالة — كلما وصفت حالتك بدقة أكبر، كان بإمكان السفارة مساعدتك بشكل أفضل." },
        { title: "تجهيز أي مستندات تملكها بالفعل", description: "السجلات المدنية الموجودة، حتى الجزئية منها، تساعد السفارة على تقييم حالتك." },
        { title: "التواصل مباشرة مع السفارة", description: "لا تُعالج أسئلة الجنسية عبر قائمة تحقق عامة — استخدم صفحة الاتصال للوصول إلى القسم القنصلي." },
        { title: "اتباع إرشادات السفارة", description: "الخطوات التالية والمستندات المطلوبة وأي إجراء ينطبق ستعتمد كليًا على حالتك الفردية." },
      ],
      importantNotes: [
        "لا تحاول هذه الصفحة عمدًا تلخيص قواعد أهلية الجنسية. لقانون الجنسية تبعات حقيقية ودائمة ويعتمد على وقائع فردية — احصل دائمًا على إجابة مباشرة من السفارة بدلاً من الاعتماد على دليل عام.",
      ],
    },
    fr: {
      title: "Informations sur la nationalité libanaise",
      summary: "Informations générales sur les questions de nationalité libanaise et comment poser une question précise à l'Ambassade.",
      whoFor: "Toute personne ayant une question sur son propre statut de nationalité libanaise ou celui d'un membre de sa famille.",
      requiredDocuments: [
        "Tout document civil libanais déjà en votre possession (passeport, extrait de registre civil, carte d'identité)",
        "Documents pertinents pour votre question spécifique (par exemple, actes civils des parents ou grands-parents) — variable selon le cas",
      ],
      steps: [
        { title: "Identifier votre question spécifique", description: "Les questions de nationalité sont hautement spécifiques à chaque cas — plus vous décrivez précisément votre situation, mieux l'Ambassade pourra vous aider." },
        { title: "Rassembler les documents déjà en votre possession", description: "Les actes civils existants, même partiels, aident l'Ambassade à évaluer votre situation." },
        { title: "Contacter directement l'Ambassade", description: "Les questions de nationalité ne sont pas traitées via une liste de contrôle générale — utilisez la page Contact pour joindre la section consulaire." },
        { title: "Suivre les indications de l'Ambassade", description: "Les étapes suivantes, les documents requis et toute procédure applicable dépendront entièrement de votre cas individuel." },
      ],
      importantNotes: [
        "Cette page ne tente délibérément pas de résumer les règles d'éligibilité à la nationalité. Le droit de la nationalité a des conséquences réelles et permanentes et dépend de faits individuels — obtenez toujours une réponse directe de l'Ambassade plutôt que de vous fier à un guide général.",
      ],
    },
  },
};
