// Shared shape for all locale dictionaries. Keeping this as a plain,
// fully-typed object (rather than pulling in an i18n framework) is a
// deliberate performance choice — see spec §13 (minimal JavaScript).
//
// TRANSLATION NOTE: the Romanian and Arabic strings below are provided
// as functional scaffolding so every locale renders a complete,
// correctly-structured page. They are NOT certified official
// translations. Per spec §5, any consular/legal copy must be
// human-verified by embassy staff before publication — mark unverified
// strings accordingly in the CMS once real content is entered.

export interface FinderGoal {
  id: string;
  label: string;
  title: string;
  overview: string;
  docs: string[];
}

export interface Dictionary {
  meta: {
    conceptFlag: string;
  };
  utilityBar: {
    accessibility: string;
    emergency: string;
  };
  nav: {
    consularServices: string;
    visasTravel: string;
    emergency: string;
    community: string;
    lebanonRomania: string;
    newsMedia: string;
    contact: string;
    bookAppointment: string;
    search: string;
    openMenu: string;
    brandName: string;
    brandSub: string;
    emblemPending: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    lede: string;
    ctaPrimary: string;
    ctaSecondary: string;
    connectionLine: string;
    beirut: string;
    bucharest: string;
    slides: { alt: string; caption: string }[];
    controls: {
      play: string;
      pause: string;
      previous: string;
      next: string;
      slideLabel: string;
    };
  };
  services: {
    eyebrow: string;
    heading: string;
    cards: { id: string; title: string; desc: string; href: string }[];
  };
  finder: {
    eyebrow: string;
    heading: string;
    startHere: string;
    pendingTag: string;
    requiredDocsLabel: string;
    processLabel: string;
    attendanceLabel: string;
    processingTimeLabel: string;
    feesLabel: string;
    pendingConfirmation: string;
    downloadChecklist: string;
    bookAppointment: string;
    goals: FinderGoal[];
  };
  announcement: {
    demoTag: string;
    title: string;
    body: string;
    dismiss: string;
  };
  news: {
    eyebrow: string;
    heading: string;
    demoTag: string;
    readMore: string;
    placeholderDate: string;
    items: { category: string; title: string }[];
  };
  relations: {
    eyebrow: string;
    heading: string;
    pendingTag: string;
    items: { title: string; body: string }[];
  };
  ambassador: {
    eyebrow: string;
    portraitPending: string;
    quote: string;
    namePending: string;
    role: string;
  };
  visit: {
    eyebrow: string;
    heading: string;
    pending: string;
    labels: {
      hours: string;
      address: string;
      phone: string;
      email: string;
      emergency: string;
    };
    mapPending: string;
  };
  footer: {
    tagline: string;
    columns: { heading: string; links: string[] }[];
    copyright: string;
    socialPending: string;
  };
  demoDisclaimer: string;
  skipToContent: string;
  servicePage: {
    quickFactsHeading: string;
    appointmentRequired: string;
    personalAttendanceRequired: string;
    processingTime: string;
    fees: string;
    pendingConfirmationLong: string;
    yes: string;
    no: string;
    whoForHeading: string;
    requiredDocumentsHeading: string;
    stepsHeading: string;
    importantNotesHeading: string;
    formsHeading: string;
    noFormAvailable: string;
    bookAppointmentCta: string;
    contactConsularCta: string;
    lastReviewedHeading: string;
    notYetReviewed: string;
    officialSourceHeading: string;
    sourcePendingText: string;
    generalGuidanceNote: string;
    backToServices: string;
  };
  verificationBadges: Record<
    | "VERIFIED_LEBANESE_OFFICIAL"
    | "VERIFIED_ROMANIAN_OFFICIAL"
    | "ROMANIA_EMBASSY_APPROVAL_REQUIRED"
    | "TRANSLATION_REVIEW_REQUIRED"
    | "DEMO_ONLY"
    | "DO_NOT_PUBLISH",
    string
  >;
  embassyJourney: {
    eyebrow: string;
    heading: string;
    steps: { title: string; description: string }[];
  };
  search: {
    triggerLabel: string;
    dialogLabel: string;
    placeholder: string;
    closeLabel: string;
    emptyState: string;
    startTyping: string;
    resultsCount: string;
    filterAll: string;
    typeLabels: Record<
      "service" | "form" | "faq" | "emergency" | "news" | "student" | "page" | "contact",
      string
    >;
  };
  centres: {
    emergency: {
      eyebrow: string;
      heading: string;
      intro: string;
      duringHours: string;
      outsideHours: string;
      contactPending: string;
      situations: { title: string; description: string; href: string | null }[];
      notEmergencyTitle: string;
      notEmergencyBody: string;
    };
    community: {
      eyebrow: string;
      heading: string;
      intro: string;
      prototypeNotice: string;
      fields: {
        fullName: string;
        city: string;
        contactMethod: string;
        familyMembers: string;
        preferredLanguage: string;
        crisisNotification: string;
      };
      registerCta: string;
      updateJourneyTitle: string;
      updateJourneyBody: string;
      deleteJourneyTitle: string;
      deleteJourneyBody: string;
      updateCta: string;
      deleteCta: string;
      confirmDeleteTitle: string;
      confirmDeleteBody: string;
      confirmDeleteCta: string;
      cancelCta: string;
      submittedNotice: string;
    };
    forms: {
      eyebrow: string;
      heading: string;
      intro: string;
      filterService: string;
      filterLanguage: string;
      filterType: string;
      allOption: string;
      noResults: string;
      pendingDocument: string;
      columns: { title: string; category: string; language: string; fileType: string; source: string; lastReviewed: string; status: string };
    };
    appointment: {
      eyebrow: string;
      heading: string;
      intro: string;
      notice: string;
      steps: { chooseService: string; reviewRequirements: string; chooseSlot: string; contactInfo: string; summary: string; confirmation: string };
      demoAvailability: string;
      selectServicePrompt: string;
      nameLabel: string;
      emailLabel: string;
      phoneLabel: string;
      continueCta: string;
      backCta: string;
      confirmCta: string;
      confirmationTitle: string;
      confirmationBody: string;
      rescheduleCta: string;
      cancelCta: string;
      cancelledNotice: string;
      startOverCta: string;
    };
    antiFraud: {
      eyebrow: string;
      heading: string;
      intro: string;
      sections: { title: string; body: string }[];
    };
    openingHours: {
      eyebrow: string;
      heading: string;
      intro: string;
      labels: {
        embassyHours: string;
        consularHours: string;
        submissionHours: string;
        collectionHours: string;
        lebaneseHolidays: string;
        romanianHolidays: string;
        exceptionalClosures: string;
        currentStatus: string;
      };
      pending: string;
      statusNote: string;
    };
    students: {
      eyebrow: string;
      heading: string;
      intro: string;
      sections: { title: string; body: string }[];
      faqHeading: string;
      faqs: { question: string; answer: string }[];
    };
    media: {
      eyebrow: string;
      heading: string;
      intro: string;
      demoTag: string;
      categories: string[];
      archiveHeading: string;
      enquiryHeading: string;
      enquiryNotice: string;
      enquiryName: string;
      enquiryEmail: string;
      enquiryOrg: string;
      enquiryMessage: string;
      enquirySubmit: string;
    };
    relationsPage: {
      eyebrow: string;
      heading: string;
      intro: string;
      timelineHeading: string;
      timelineEmpty: string;
      galleryHeading: string;
      galleryPending: string;
      linksHeading: string;
    };
  };
}
