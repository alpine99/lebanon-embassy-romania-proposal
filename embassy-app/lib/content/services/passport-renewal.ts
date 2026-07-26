import type { ServiceDefinition } from "../serviceTypes";
import { pending } from "../schema";

export const passportRenewal: ServiceDefinition = {
  slug: "passport-renewal",
  categorySlug: "passports-travel-documents",
  hasDownloadableForm: false, // no approved form on file yet — see source record
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
      "General Security (Lebanese passport authority) publishes national guidance on passport renewal; that would be the correct VERIFIED_LEBANESE_OFFICIAL source once an editor locates and cites the specific current page. The Romania-specific procedure (where to submit, in-person requirements, fees in RON/EUR, processing time from Beirut) must still be confirmed directly with the Embassy before this record can move out of ROMANIA_EMBASSY_APPROVAL_REQUIRED.",
  },
  content: {
    en: {
      title: "Renewing a Lebanese Passport",
      summary: "Renew an existing Lebanese passport that is expiring, expired, or damaged.",
      whoFor: "Lebanese citizens residing in Romania whose passport is expiring, has expired, or is damaged and no longer usable.",
      requiredDocuments: [
        "Current or most recent Lebanese passport",
        "Lebanese civil registry extract (\u00ab\u0625\u062e\u0631\u0627\u062c \u0642\u064a\u062f \u0641\u0631\u062f\u064a\u00bb) — pending confirmation of validity period accepted",
        "Recent passport-style photograph — pending confirmation of exact specification",
        "Completed application form — pending confirmation of which form",
      ],
      steps: [
        { title: "Confirm eligibility", description: "Confirm with the Embassy that renewal (not a first-time request) is the correct process for your situation." },
        { title: "Gather documents", description: "Assemble the required documents listed above." },
        { title: "Book an appointment", description: "Use the Service Finder or Appointment Hub to request a time (demo only in this prototype)." },
        { title: "Attend in person", description: "Personal attendance requirement pending confirmation by the Embassy." },
        { title: "Collect your passport", description: "Collection process and timing pending confirmation by the Embassy." },
      ],
      importantNotes: [
        "This page describes the general shape of the process. Fees, processing time, and exact document specifications are not yet confirmed — see the Quick Facts panel.",
        "Do not send passport scans or personal documents by email or social media unless you have verified you are contacting the Embassy's official channel — see the Anti-Fraud & Official Channels page.",
      ],
    },
    ro: {
      title: "Reînnoirea unui pașaport libanez",
      summary: "Reînnoiți un pașaport libanez existent care expiră, a expirat sau este deteriorat.",
      whoFor: "Cetățenii libanezi rezidenți în România al căror pașaport expiră, a expirat sau este deteriorat și nu mai poate fi utilizat.",
      requiredDocuments: [
        "Pașaportul libanez actual sau cel mai recent",
        "Extras de registru civil libanez — în așteptarea confirmării perioadei de valabilitate acceptate",
        "Fotografie recentă tip pașaport — în așteptarea confirmării specificațiilor exacte",
        "Formular de cerere completat — în așteptarea confirmării formularului corect",
      ],
      steps: [
        { title: "Confirmați eligibilitatea", description: "Confirmați cu Ambasada că reînnoirea (nu o cerere inițială) este procesul corect pentru situația dumneavoastră." },
        { title: "Pregătiți documentele", description: "Adunați documentele necesare enumerate mai sus." },
        { title: "Programați o vizită", description: "Utilizați Asistentul de servicii sau Centrul de programări pentru a solicita o oră (doar demonstrativ în acest prototip)." },
        { title: "Prezentați-vă personal", description: "Cerința de prezență personală este în așteptarea confirmării de către Ambasadă." },
        { title: "Ridicați pașaportul", description: "Procesul și momentul ridicării sunt în așteptarea confirmării de către Ambasadă." },
      ],
      importantNotes: [
        "Această pagină descrie forma generală a procesului. Taxele, timpul de procesare și specificațiile exacte ale documentelor nu sunt încă confirmate — consultați panoul Informații esențiale.",
        "Nu trimiteți scanări ale pașaportului sau documente personale prin e-mail sau rețele sociale decât dacă ați verificat că discutați cu canalul oficial al Ambasadei — consultați pagina Prevenirea fraudelor și canale oficiale.",
      ],
    },
    ar: {
      title: "تجديد جواز سفر لبناني",
      summary: "تجديد جواز سفر لبناني حالي منتهي الصلاحية أو على وشك الانتهاء أو تالف.",
      whoFor: "المواطنون اللبنانيون المقيمون في رومانيا الذين على وشك انتهاء صلاحية جواز سفرهم أو انتهت صلاحيته أو تلف ولم يعد صالحًا للاستخدام.",
      requiredDocuments: [
        "جواز السفر اللبناني الحالي أو الأحدث",
        "إخراج قيد فردي لبناني — بانتظار تأكيد مدة الصلاحية المقبولة",
        "صورة شخصية حديثة بمواصفات جواز السفر — بانتظار تأكيد المواصفات الدقيقة",
        "استمارة الطلب معبأة — بانتظار تأكيد الاستمارة الصحيحة",
      ],
      steps: [
        { title: "تأكيد الأهلية", description: "تأكد مع السفارة أن التجديد (وليس طلبًا لأول مرة) هو الإجراء الصحيح لحالتك." },
        { title: "تجهيز المستندات", description: "اجمع المستندات المطلوبة المذكورة أعلاه." },
        { title: "حجز موعد", description: "استخدم دليل الخدمات أو مركز المواعيد لطلب موعد (نموذج توضيحي فقط في هذا النموذج الأولي)." },
        { title: "الحضور شخصيًا", description: "شرط الحضور الشخصي بانتظار تأكيد السفارة." },
        { title: "استلام جواز السفر", description: "عملية الاستلام وتوقيتها بانتظار تأكيد السفارة." },
      ],
      importantNotes: [
        "تصف هذه الصفحة الشكل العام للإجراء. الرسوم ومدة المعالجة والمواصفات الدقيقة للمستندات غير مؤكدة بعد — راجع لوحة المعلومات السريعة.",
        "لا ترسل صور جواز السفر أو المستندات الشخصية عبر البريد الإلكتروني أو وسائل التواصل الاجتماعي إلا بعد التحقق من أنك تتواصل مع القناة الرسمية للسفارة — راجع صفحة مكافحة الاحتيال والقنوات الرسمية.",
      ],
    },
    fr: {
      title: "Renouvellement d'un passeport libanais",
      summary: "Renouveler un passeport libanais existant qui expire, a expiré ou est endommagé.",
      whoFor: "Citoyens libanais résidant en Roumanie dont le passeport expire, a expiré, ou est endommagé et n'est plus utilisable.",
      requiredDocuments: [
        "Passeport libanais actuel ou le plus récent",
        "Extrait de registre civil libanais — en attente de confirmation de la période de validité acceptée",
        "Photographie récente format passeport — en attente de confirmation des spécifications exactes",
        "Formulaire de demande complété — en attente de confirmation du formulaire correct",
      ],
      steps: [
        { title: "Confirmer l'éligibilité", description: "Confirmez auprès de l'Ambassade que le renouvellement (et non une première demande) est la procédure adaptée à votre situation." },
        { title: "Rassembler les documents", description: "Rassemblez les documents requis énumérés ci-dessus." },
        { title: "Prendre rendez-vous", description: "Utilisez l'Assistant des services ou le Centre de rendez-vous pour demander un créneau (démonstration uniquement dans ce prototype)." },
        { title: "Se présenter en personne", description: "L'exigence de présence personnelle est en attente de confirmation par l'Ambassade." },
        { title: "Récupérer le passeport", description: "Le processus et le délai de récupération sont en attente de confirmation par l'Ambassade." },
      ],
      importantNotes: [
        "Cette page décrit la forme générale de la procédure. Les frais, le délai de traitement et les spécifications exactes des documents ne sont pas encore confirmés — consultez le panneau Informations essentielles.",
        "N'envoyez pas de copies de passeport ou de documents personnels par e-mail ou réseaux sociaux sans avoir vérifié que vous communiquez avec le canal officiel de l'Ambassade — voir la page Prévention de la fraude et canaux officiels.",
      ],
    },
  },
};
