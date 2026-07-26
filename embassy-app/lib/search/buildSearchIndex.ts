import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionary";
import { serviceRegistry } from "@/lib/content/serviceRegistry";
import { documentRegistry } from "@/lib/content/documentRegistry";

export type SearchItemType =
  | "service"
  | "form"
  | "faq"
  | "emergency"
  | "news"
  | "student"
  | "page"
  | "contact";

export interface SearchItem {
  type: SearchItemType;
  title: string;
  snippet: string;
  href: string; // locale-prefixed, ready to render
  /** Extra text (e.g. required-document list) that should be searchable
   * even though it isn't shown in the result snippet. */
  searchableExtra?: string;
}

/**
 * Builds the search index strictly from the given locale's own content —
 * never mixes in another locale's strings, satisfying "no results from
 * another locale unless explicitly selected." This is a pure function of
 * (locale, dict) so it's cheap to rebuild per-render and trivially
 * testable without a DOM.
 */
export function buildSearchIndex(locale: Locale, dict: Dictionary): SearchItem[] {
  const items: SearchItem[] = [];
  const p = (path: string) => `/${locale}${path}`;

  // Services + their required-document guidance (searchable via extra text)
  for (const s of serviceRegistry) {
    const c = s.content[locale];
    items.push({
      type: "service",
      title: c.title,
      snippet: c.summary,
      href: p(`/services/${s.slug}`),
      searchableExtra: [c.whoFor, ...c.requiredDocuments, ...c.importantNotes].join(" "),
    });
  }

  // Forms & downloads
  for (const d of documentRegistry) {
    items.push({
      type: "form",
      title: d.titleKey,
      snippet: dict.centres.forms.pendingDocument,
      href: p("/forms"),
    });
  }

  // Student FAQs
  for (const f of dict.centres.students.faqs) {
    items.push({
      type: "faq",
      title: f.question,
      snippet: f.answer,
      href: p("/students"),
    });
  }

  // Student resource sections
  for (const sec of dict.centres.students.sections) {
    items.push({
      type: "student",
      title: sec.title,
      snippet: sec.body,
      href: p("/students"),
    });
  }

  // Emergency situations
  for (const sit of dict.centres.emergency.situations) {
    items.push({
      type: "emergency",
      title: sit.title,
      snippet: sit.description,
      href: sit.href ? p(sit.href) : p("/emergency"),
    });
  }

  // News (demo content — never presented as official; label carried in snippet)
  for (const n of dict.news.items) {
    items.push({
      type: "news",
      title: n.title,
      snippet: `${n.category} — ${dict.news.demoTag}`,
      href: p("/#news"),
    });
  }

  // Contact
  items.push({
    type: "contact",
    title: dict.visit.heading,
    snippet: dict.visit.eyebrow,
    href: p("/#contact"),
  });

  // Other core pages, so e.g. searching "hours" finds Opening Hours directly
  const pages: { title: string; snippet: string; href: string }[] = [
    { title: dict.centres.emergency.heading, snippet: dict.centres.emergency.intro, href: p("/emergency") },
    { title: dict.centres.community.heading, snippet: dict.centres.community.intro, href: p("/community") },
    { title: dict.centres.forms.heading, snippet: dict.centres.forms.intro, href: p("/forms") },
    { title: dict.centres.appointment.heading, snippet: dict.centres.appointment.intro, href: p("/appointment") },
    { title: dict.centres.antiFraud.heading, snippet: dict.centres.antiFraud.intro, href: p("/anti-fraud") },
    { title: dict.centres.openingHours.heading, snippet: dict.centres.openingHours.intro, href: p("/opening-hours") },
    { title: dict.centres.students.heading, snippet: dict.centres.students.intro, href: p("/students") },
    { title: dict.centres.media.heading, snippet: dict.centres.media.intro, href: p("/media") },
    { title: dict.centres.relationsPage.heading, snippet: dict.centres.relationsPage.intro, href: p("/relations") },
  ];
  for (const pg of pages) {
    items.push({ type: "page", ...pg });
  }

  return items;
}

function normalize(s: string): string {
  return s.toLocaleLowerCase();
}

export function searchIndex(
  items: SearchItem[],
  query: string,
  typeFilter: SearchItemType | "all"
): SearchItem[] {
  const q = normalize(query.trim());
  if (!q) return [];
  return items.filter((item) => {
    if (typeFilter !== "all" && item.type !== typeFilter) return false;
    const haystack = normalize(
      [item.title, item.snippet, item.searchableExtra ?? ""].join(" ")
    );
    return haystack.includes(q);
  });
}
