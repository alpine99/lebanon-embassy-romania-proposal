import type { ServiceDefinition } from "../serviceTypes";
import { pending } from "../schema";

export const lostStolenPassport: ServiceDefinition = {
  slug: "lost-stolen-passport",
  categorySlug: "passports-travel-documents",
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
      "This is time-sensitive for the citizen, so the page leads with the most urgent action (report to local police) before any consular step. The requirement to report to Romanian police first is standard practice internationally, but the exact Romanian authority/process to cite should be confirmed against a Romanian MFA or police source before publishing as VERIFIED_ROMANIAN_OFFICIAL — currently unsourced.",
  },
  content: {
    en: {
      title: "Lost or Stolen Passport",
      summary: "What to do if your Lebanese passport is lost or stolen while in Romania.",
      whoFor: "Lebanese citizens in Romania whose passport has been lost or stolen.",
      requiredDocuments: [
        "Police report confirming the loss or theft — pending confirmation of which Romanian authority to report to",
        "Any secondary ID you still hold (national ID, old passport copy, driving licence)",
        "Recent passport-style photograph — pending confirmation of exact specification",
        "Completed declaration/application form — pending confirmation of which form",
      ],
      steps: [
        { title: "Report it locally first", description: "Report the loss or theft to the local Romanian police before contacting the Embassy — exact reporting authority pending confirmation." },
        { title: "Contact the Embassy", description: "Use the Emergency Centre or Contact page to reach the consular section." },
        { title: "Gather documents", description: "Assemble the required documents listed above, including the police report." },
        { title: "Attend in person", description: "Personal attendance requirement pending confirmation by the Embassy." },
        { title: "Receive a travel document", description: "Whether an emergency travel document or a full passport is issued, and the timing, is pending confirmation by the Embassy." },
      ],
      importantNotes: [
        "If you are also facing a genuine emergency (e.g. you need to travel imminently), see the Emergency Centre.",
        "Never pay anyone claiming to expedite a replacement passport outside the Embassy's official process — see the Anti-Fraud & Official Channels page.",
      ],
    },
    ro: {
      title: "Pașaport pierdut sau furat",
      summary: "Ce trebuie să faceți dacă pașaportul dumneavoastră libanez este pierdut sau furat în România.",
      whoFor: "Cetățenii libanezi din România al căror pașaport a fost pierdut sau furat.",
      requiredDocuments: [
        "Raport de poliție care confirmă pierderea sau furtul — în așteptarea confirmării autorității române la care trebuie raportat",
        "Orice act de identitate secundar pe care îl mai dețineți (carte de identitate națională, copie a vechiului pașaport, permis de conducere)",
        "Fotografie recentă tip pașaport — în așteptarea confirmării specificațiilor exacte",
        "Declarație/formular de cerere completat — în așteptarea confirmării formularului corect",
      ],
      steps: [
        { title: "Raportați mai întâi local", description: "Raportați pierderea sau furtul la poliția română locală înainte de a contacta Ambasada — autoritatea exactă la care trebuie raportat este în așteptarea confirmării." },
        { title: "Contactați Ambasada", description: "Utilizați Centrul de urgență sau pagina de Contact pentru a ajunge la secția consulară." },
        { title: "Pregătiți documentele", description: "Adunați documentele necesare enumerate mai sus, inclusiv raportul de poliție." },
        { title: "Prezentați-vă personal", description: "Cerința de prezență personală este în așteptarea confirmării de către Ambasadă." },
        { title: "Primiți un document de călătorie", description: "Dacă se eliberează un document de călătorie de urgență sau un pașaport complet, precum și momentul acestui proces, sunt în așteptarea confirmării de către Ambasadă." },
      ],
      importantNotes: [
        "Dacă vă confruntați și cu o urgență reală (de exemplu, trebuie să călătoriți iminent), consultați Centrul de urgență.",
        "Nu plătiți niciodată pe cineva care pretinde că poate accelera eliberarea unui pașaport de înlocuire în afara procesului oficial al Ambasadei — consultați pagina Prevenirea fraudelor și canale oficiale.",
      ],
    },
    ar: {
      title: "جواز سفر مفقود أو مسروق",
      summary: "ما يجب فعله إذا فُقد جواز سفرك اللبناني أو سُرق أثناء وجودك في رومانيا.",
      whoFor: "المواطنون اللبنانيون في رومانيا الذين فُقد جواز سفرهم أو سُرق.",
      requiredDocuments: [
        "تقرير الشرطة يؤكد الفقدان أو السرقة — بانتظار تأكيد الجهة الرومانية المختصة بالإبلاغ",
        "أي هوية ثانوية ما زلت تحتفظ بها (بطاقة هوية وطنية، نسخة من جواز السفر القديم، رخصة القيادة)",
        "صورة شخصية حديثة بمواصفات جواز السفر — بانتظار تأكيد المواصفات الدقيقة",
        "إقرار/استمارة طلب معبأة — بانتظار تأكيد الاستمارة الصحيحة",
      ],
      steps: [
        { title: "الإبلاغ محليًا أولاً", description: "أبلغ الشرطة الرومانية المحلية بالفقدان أو السرقة قبل التواصل مع السفارة — الجهة الدقيقة للإبلاغ بانتظار التأكيد." },
        { title: "التواصل مع السفارة", description: "استخدم مركز الطوارئ أو صفحة الاتصال للوصول إلى القسم القنصلي." },
        { title: "تجهيز المستندات", description: "اجمع المستندات المطلوبة المذكورة أعلاه، بما في ذلك تقرير الشرطة." },
        { title: "الحضور شخصيًا", description: "شرط الحضور الشخصي بانتظار تأكيد السفارة." },
        { title: "استلام وثيقة سفر", description: "ما إذا كانت ستصدر وثيقة سفر طارئة أو جواز سفر كامل، وتوقيت ذلك، بانتظار تأكيد السفارة." },
      ],
      importantNotes: [
        "إذا كنت تواجه أيضًا حالة طارئة فعلية (مثل الحاجة للسفر بشكل وشيك)، راجع مركز الطوارئ.",
        "لا تدفع مطلقًا لأي شخص يدّعي القدرة على تسريع إصدار جواز سفر بديل خارج الإجراء الرسمي للسفارة — راجع صفحة مكافحة الاحتيال والقنوات الرسمية.",
      ],
    },
    fr: {
      title: "Passeport perdu ou volé",
      summary: "Que faire si votre passeport libanais est perdu ou volé en Roumanie.",
      whoFor: "Citoyens libanais en Roumanie dont le passeport a été perdu ou volé.",
      requiredDocuments: [
        "Rapport de police confirmant la perte ou le vol — en attente de confirmation de l'autorité roumaine compétente",
        "Toute pièce d'identité secondaire encore en votre possession (carte d'identité nationale, copie de l'ancien passeport, permis de conduire)",
        "Photographie récente format passeport — en attente de confirmation des spécifications exactes",
        "Déclaration/formulaire de demande complété — en attente de confirmation du formulaire correct",
      ],
      steps: [
        { title: "Signaler localement d'abord", description: "Signalez la perte ou le vol à la police roumaine locale avant de contacter l'Ambassade — l'autorité exacte à contacter est en attente de confirmation." },
        { title: "Contacter l'Ambassade", description: "Utilisez le Centre d'urgence ou la page Contact pour joindre la section consulaire." },
        { title: "Rassembler les documents", description: "Rassemblez les documents requis énumérés ci-dessus, y compris le rapport de police." },
        { title: "Se présenter en personne", description: "L'exigence de présence personnelle est en attente de confirmation par l'Ambassade." },
        { title: "Recevoir un document de voyage", description: "La délivrance d'un document de voyage d'urgence ou d'un passeport complet, ainsi que le délai, sont en attente de confirmation par l'Ambassade." },
      ],
      importantNotes: [
        "Si vous faites également face à une urgence réelle (par exemple un départ imminent), consultez le Centre d'urgence.",
        "Ne payez jamais quelqu'un qui prétend pouvoir accélérer la délivrance d'un passeport de remplacement en dehors du processus officiel de l'Ambassade — voir la page Prévention de la fraude et canaux officiels.",
      ],
    },
  },
};
