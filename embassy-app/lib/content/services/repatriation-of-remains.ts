import type { ServiceDefinition } from "../serviceTypes";
import { pending } from "../schema";

export const repatriationOfRemains: ServiceDefinition = {
  slug: "repatriation-of-remains",
  categorySlug: "emergency-assistance",
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
      "This is a time-critical, high-distress process. The page leads with 'contact the Embassy immediately' rather than a document checklist, since the family should not be searching a website for a checklist in this situation — they should be on the phone with the Embassy. Do not add a fee or cost estimate; repatriation costs are exactly the kind of figure that must never be guessed.",
  },
  content: {
    en: {
      title: "Repatriation of Remains",
      summary: "What to do when a Lebanese citizen has died in Romania and the family wishes to repatriate the remains to Lebanon.",
      whoFor: "Family members of a Lebanese citizen who died in Romania and wish to return the remains to Lebanon.",
      requiredDocuments: [
        "Romanian death certificate",
        "Deceased's passport and civil registry extract",
        "Documentation from the funeral home/mortuary handling the remains",
        "Any additional documents required by Romanian authorities or the airline/carrier — pending confirmation",
      ],
      steps: [
        { title: "Contact the Embassy immediately", description: "This process is time-sensitive — reach the Embassy via the Emergency Centre as the first step, not the last." },
        { title: "Coordinate with Romanian authorities", description: "Romanian requirements for releasing and transporting remains must be met — the Embassy can advise on this coordination." },
        { title: "Arrange transport", description: "Specific requirements, costs, and airline/carrier procedures are pending confirmation by the Embassy — do not assume a figure." },
        { title: "Confirm documentation is complete", description: "The Embassy will confirm what documentation is required for the remains to be accepted into Lebanon." },
      ],
      importantNotes: [
        "If this applies to you right now, go to the Emergency Centre and contact the Embassy directly rather than following a checklist on this page.",
        "Costs and exact procedures are not stated here because they are not yet confirmed — never trust a cost estimate for this process from an unofficial source.",
      ],
    },
    ro: {
      title: "Repatrierea rămășițelor pământești",
      summary: "Ce trebuie făcut atunci când un cetățean libanez a decedat în România, iar familia dorește repatrierea rămășițelor în Liban.",
      whoFor: "Membrii familiei unui cetățean libanez decedat în România care doresc să repatrieze rămășițele în Liban.",
      requiredDocuments: [
        "Certificatul de deces românesc",
        "Pașaportul decedatului și extrasul de registru civil",
        "Documentația de la casa funerară/morga care gestionează rămășițele",
        "Orice documente suplimentare solicitate de autoritățile române sau de compania aeriană/transportator — în așteptarea confirmării",
      ],
      steps: [
        { title: "Contactați imediat Ambasada", description: "Acest proces este urgent — contactați Ambasada prin Centrul de urgență ca prim pas, nu ca ultim pas." },
        { title: "Coordonați-vă cu autoritățile române", description: "Cerințele românești pentru eliberarea și transportul rămășițelor trebuie îndeplinite — Ambasada vă poate sfătui cu privire la această coordonare." },
        { title: "Organizați transportul", description: "Cerințele specifice, costurile și procedurile companiei aeriene/transportatorului sunt în așteptarea confirmării de către Ambasadă — nu presupuneți o sumă." },
        { title: "Confirmați că documentația este completă", description: "Ambasada va confirma ce documentație este necesară pentru ca rămășițele să fie acceptate în Liban." },
      ],
      importantNotes: [
        "Dacă această situație vi se aplică chiar acum, accesați Centrul de urgență și contactați direct Ambasada, în loc să urmați o listă de verificare de pe această pagină.",
        "Costurile și procedurile exacte nu sunt menționate aici deoarece nu sunt încă confirmate — nu aveți niciodată încredere într-o estimare a costurilor pentru acest proces provenită dintr-o sursă neoficială.",
      ],
    },
    ar: {
      title: "إعادة الرفات إلى الوطن",
      summary: "ما يجب فعله عندما يتوفى مواطن لبناني في رومانيا وترغب العائلة في إعادة الرفات إلى لبنان.",
      whoFor: "أفراد عائلة مواطن لبناني توفي في رومانيا ويرغبون في إعادة الرفات إلى لبنان.",
      requiredDocuments: [
        "شهادة الوفاة الرومانية",
        "جواز سفر المتوفى وإخراج القيد الفردي",
        "مستندات من دار الجنازة/المشرحة المتعاملة مع الرفات",
        "أي مستندات إضافية تطلبها السلطات الرومانية أو شركة الطيران/الناقل — بانتظار التأكيد",
      ],
      steps: [
        { title: "التواصل مع السفارة فورًا", description: "هذا الإجراء عاجل — تواصل مع السفارة عبر مركز الطوارئ كخطوة أولى، وليس أخيرة." },
        { title: "التنسيق مع السلطات الرومانية", description: "يجب استيفاء المتطلبات الرومانية للإفراج عن الرفات ونقلها — يمكن للسفارة تقديم المشورة بشأن هذا التنسيق." },
        { title: "ترتيب النقل", description: "المتطلبات المحددة والتكاليف وإجراءات شركة الطيران/الناقل بانتظار تأكيد السفارة — لا تفترض أي رقم." },
        { title: "تأكيد اكتمال المستندات", description: "ستؤكد السفارة المستندات المطلوبة لقبول الرفات في لبنان." },
      ],
      importantNotes: [
        "إذا كانت هذه حالتك الآن، توجه إلى مركز الطوارئ وتواصل مع السفارة مباشرة بدلاً من اتباع قائمة تحقق في هذه الصفحة.",
        "لا تُذكر التكاليف والإجراءات الدقيقة هنا لأنها غير مؤكدة بعد — لا تثق أبدًا بتقدير تكلفة لهذا الإجراء من مصدر غير رسمي.",
      ],
    },
    fr: {
      title: "Rapatriement de dépouilles",
      summary: "Que faire lorsqu'un citoyen libanais est décédé en Roumanie et que la famille souhaite rapatrier la dépouille au Liban.",
      whoFor: "Membres de la famille d'un citoyen libanais décédé en Roumanie souhaitant rapatrier la dépouille au Liban.",
      requiredDocuments: [
        "Certificat de décès roumain",
        "Passeport du défunt et extrait de registre civil",
        "Documentation de la maison funéraire/morgue en charge de la dépouille",
        "Tout document supplémentaire requis par les autorités roumaines ou la compagnie aérienne/transporteur — en attente de confirmation",
      ],
      steps: [
        { title: "Contacter immédiatement l'Ambassade", description: "Cette procédure est urgente — contactez l'Ambassade via le Centre d'urgence en première étape, pas en dernière." },
        { title: "Coordonner avec les autorités roumaines", description: "Les exigences roumaines pour la libération et le transport de la dépouille doivent être respectées — l'Ambassade peut conseiller sur cette coordination." },
        { title: "Organiser le transport", description: "Les exigences spécifiques, coûts et procédures de la compagnie aérienne/du transporteur sont en attente de confirmation par l'Ambassade — ne présumez aucun montant." },
        { title: "Confirmer que la documentation est complète", description: "L'Ambassade confirmera quels documents sont nécessaires pour que la dépouille soit acceptée au Liban." },
      ],
      importantNotes: [
        "Si cette situation vous concerne actuellement, rendez-vous au Centre d'urgence et contactez directement l'Ambassade plutôt que de suivre une liste de contrôle sur cette page.",
        "Les coûts et procédures exacts ne sont pas indiqués ici car ils ne sont pas encore confirmés — ne faites jamais confiance à une estimation de coût pour cette procédure provenant d'une source non officielle.",
      ],
    },
  },
};
