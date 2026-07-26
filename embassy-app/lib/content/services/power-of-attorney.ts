import type { ServiceDefinition } from "../serviceTypes";
import { pending } from "../schema";

export const powerOfAttorney: ServiceDefinition = {
  slug: "power-of-attorney",
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
      "A consular power of attorney's exact wording/scope requirements are legally significant — do not draft or suggest sample wording without embassy legal review, even informally.",
  },
  content: {
    en: {
      title: "Preparing a Power of Attorney",
      summary: "Grant a power of attorney to someone else to act on your behalf in Lebanon.",
      whoFor: "Lebanese citizens who need to authorise another person to act for them on a legal or administrative matter in Lebanon.",
      requiredDocuments: [
        "Valid Lebanese passport",
        "Full details of the person being granted power of attorney (attorney-in-fact) — pending confirmation of what's required",
        "A clear statement of the purpose and scope of the power of attorney — pending confirmation of format",
        "Any supporting documents relevant to the matter — pending confirmation",
      ],
      steps: [
        { title: "Define the scope", description: "Be precise about what the power of attorney is meant to authorise — this affects what the Embassy will need." },
        { title: "Identify the attorney-in-fact", description: "Gather the full legal details of the person you are authorising." },
        { title: "Book an appointment", description: "Use the Service Finder or Appointment Hub to request a time (demo only in this prototype)." },
        { title: "Attend in person", description: "Personal attendance requirement pending confirmation by the Embassy." },
        { title: "Collect the notarised document", description: "Processing time pending confirmation by the Embassy." },
      ],
      importantNotes: [
        "The exact wording of a power of attorney has real legal consequences in Lebanon. This page cannot substitute for legal advice — the Embassy's guidance on drafting is the correct source once confirmed.",
      ],
    },
    ro: {
      title: "Pregătirea unei procuri",
      summary: "Acordați unei alte persoane o procură pentru a acționa în numele dumneavoastră în Liban.",
      whoFor: "Cetățenii libanezi care trebuie să împuternicească o altă persoană să acționeze pentru ei într-o chestiune juridică sau administrativă în Liban.",
      requiredDocuments: [
        "Pașaport libanez valabil",
        "Datele complete ale persoanei împuternicite (mandatarul) — în așteptarea confirmării cerințelor",
        "O declarație clară a scopului și obiectului procurii — în așteptarea confirmării formatului",
        "Orice documente justificative relevante pentru chestiunea respectivă — în așteptare",
      ],
      steps: [
        { title: "Definiți obiectul", description: "Fiți precis cu privire la ceea ce urmează să autorizeze procura — acest lucru influențează ce va solicita Ambasada." },
        { title: "Identificați mandatarul", description: "Adunați datele legale complete ale persoanei pe care o împuterniciți." },
        { title: "Programați o vizită", description: "Utilizați Asistentul de servicii sau Centrul de programări pentru a solicita o oră (doar demonstrativ)." },
        { title: "Prezentați-vă personal", description: "Cerința de prezență personală este în așteptarea confirmării de către Ambasadă." },
        { title: "Ridicați documentul notarial", description: "Timpul de procesare este în așteptarea confirmării de către Ambasadă." },
      ],
      importantNotes: [
        "Formularea exactă a unei procuri are consecințe juridice reale în Liban. Această pagină nu poate înlocui consultanța juridică — îndrumările Ambasadei privind redactarea sunt sursa corectă odată confirmate.",
      ],
    },
    ar: {
      title: "إعداد وكالة",
      summary: "منح شخص آخر وكالة للتصرف نيابة عنك في لبنان.",
      whoFor: "المواطنون اللبنانيون الذين يحتاجون إلى تفويض شخص آخر للتصرف نيابة عنهم في مسألة قانونية أو إدارية في لبنان.",
      requiredDocuments: [
        "جواز سفر لبناني ساري المفعول",
        "البيانات الكاملة للشخص الممنوح الوكالة (الوكيل) — بانتظار تأكيد المتطلبات",
        "بيان واضح للغرض من الوكالة ونطاقها — بانتظار تأكيد الصيغة",
        "أي مستندات داعمة ذات صلة بالمسألة — قيد الانتظار",
      ],
      steps: [
        { title: "تحديد النطاق", description: "كن دقيقًا بشأن ما يُفترض أن تخوّله الوكالة — هذا يؤثر على ما ستطلبه السفارة." },
        { title: "تحديد الوكيل", description: "اجمع البيانات القانونية الكاملة للشخص الذي تفوضه." },
        { title: "حجز موعد", description: "استخدم دليل الخدمات أو مركز المواعيد لطلب موعد (نموذج توضيحي فقط)." },
        { title: "الحضور شخصيًا", description: "شرط الحضور الشخصي بانتظار تأكيد السفارة." },
        { title: "استلام المستند الموثّق", description: "مدة المعالجة بانتظار تأكيد السفارة." },
      ],
      importantNotes: [
        "للصياغة الدقيقة للوكالة تبعات قانونية حقيقية في لبنان. لا يمكن لهذه الصفحة أن تحل محل الاستشارة القانونية — إرشادات السفارة بشأن الصياغة هي المصدر الصحيح بمجرد تأكيدها.",
      ],
    },
    fr: {
      title: "Préparation d'une procuration",
      summary: "Accorder une procuration à une autre personne pour agir en votre nom au Liban.",
      whoFor: "Citoyens libanais devant autoriser une autre personne à agir pour eux dans une affaire juridique ou administrative au Liban.",
      requiredDocuments: [
        "Passeport libanais valide",
        "Coordonnées complètes de la personne mandatée (le mandataire) — en attente de confirmation des exigences",
        "Un énoncé clair de l'objet et de la portée de la procuration — en attente de confirmation du format",
        "Tout document justificatif pertinent à l'affaire — en attente",
      ],
      steps: [
        { title: "Définir la portée", description: "Soyez précis sur ce que la procuration est censée autoriser — cela détermine ce dont l'Ambassade aura besoin." },
        { title: "Identifier le mandataire", description: "Rassemblez les coordonnées légales complètes de la personne que vous mandatez." },
        { title: "Prendre rendez-vous", description: "Utilisez l'Assistant des services ou le Centre de rendez-vous pour demander un créneau (démonstration uniquement)." },
        { title: "Se présenter en personne", description: "L'exigence de présence personnelle est en attente de confirmation par l'Ambassade." },
        { title: "Récupérer le document notarié", description: "Le délai de traitement est en attente de confirmation par l'Ambassade." },
      ],
      importantNotes: [
        "La formulation exacte d'une procuration a de réelles conséquences juridiques au Liban. Cette page ne peut se substituer à un conseil juridique — les indications de l'Ambassade sur la rédaction sont la source correcte une fois confirmées.",
      ],
    },
  },
};
