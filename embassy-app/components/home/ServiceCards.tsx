import Link from "next/link";
import type { ReactNode } from "react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionary";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons: Record<string, ReactNode> = {
  "passports-travel-documents": (
    <path d="M4 3h16v18H4V3Zm8 7a2.4 2.4 0 1 0 0-4.8 2.4 2.4 0 0 0 0 4.8ZM8 17c.6-2 2-3 4-3s3.4 1 4 3" />
  ),
  "family-civil-status": (
    <path d="M4 20V6a2 2 0 0 1 2-2h6l6 6v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2ZM12 4v6h6" />
  ),
  "legal-documents": (
    <path d="M9 3h6l2 4H7l2-4ZM5 7h14l-1.2 12.2A2 2 0 0 1 15.8 21H8.2a2 2 0 0 1-2-1.8L5 7ZM9 11h6" />
  ),
  "visas-to-lebanon": (
    <path d="M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3ZM3 12h18M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z" />
  ),
  "emergency-assistance": (
    <path d="M12 3 2 20h20L12 3Zm0 7v4m0 3.2h.01" />
  ),
  "community-other-services": (
    <path d="M17 20v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2M10 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM22 20v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  ),
};

export function ServiceCards({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const resolveHref = (href: string) =>
    href.startsWith("#") ? href : `/${locale}${href}`;
  return (
    <section id="services" className="py-14 sm:py-16 md:py-[72px]">
      <div className="mx-auto max-w-content px-5">
        <SectionHeading
          eyebrow={dict.services.eyebrow}
          heading={dict.services.heading}
          className="mb-10 md:mb-11"
        />
        <div className="grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {dict.services.cards.map((card) => {
            const isEmergency = card.id === "emergency-assistance";
            return (
              <article
                key={card.id}
                className={`flex min-h-[210px] flex-col gap-3.5 p-7 ${
                  isEmergency
                    ? "bg-cedar-950 text-ivory-50"
                    : "bg-ivory-50"
                }`}
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  aria-hidden="true"
                  className={isEmergency ? "text-ivory-50" : "text-cedar-950"}
                >
                  {icons[card.id]}
                </svg>
                <h3
                  className={`font-sans text-[18px] font-bold ${
                    isEmergency ? "text-ivory-50" : "text-cedar-950"
                  }`}
                >
                  {card.title}
                </h3>
                <p
                  className={`flex-1 text-[14.5px] ${
                    isEmergency ? "text-ivory-50/78" : "text-charcoal-600"
                  }`}
                >
                  {card.desc}
                </p>
                <Link
                  href={resolveHref(card.href)}
                  className={`inline-flex items-center gap-1.5 text-[14px] font-bold ${
                    isEmergency ? "text-gold-300" : "text-burgundy-700"
                  }`}
                >
                  {dict.finder.startHere}{" "}
                  <span aria-hidden="true" className="inline-block rtl:-scale-x-100">→</span>
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
