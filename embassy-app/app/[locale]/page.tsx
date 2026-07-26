import { isLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { HeroCinematic } from "@/components/home/HeroCinematic";
import { ServiceCards } from "@/components/home/ServiceCards";
import { ServiceFinder } from "@/components/home/ServiceFinder";
import { AnnouncementBar } from "@/components/home/AnnouncementBar";
import { EmbassyJourney } from "@/components/home/EmbassyJourney";
import { NewsGrid } from "@/components/home/NewsGrid";
import { RelationsSection } from "@/components/home/RelationsSection";
import { AmbassadorSection } from "@/components/home/AmbassadorSection";
import { VisitContact } from "@/components/home/VisitContact";
import { SectionDivider } from "@/components/ui/SectionDivider";

export default function HomePage({
  params,
}: {
  params: { locale: string };
}) {
  const locale: Locale = isLocale(params.locale) ? params.locale : "en";
  const dict = getDictionary(locale);

  return (
    <>
      <HeroCinematic locale={locale} dict={dict} />
      <AnnouncementBar dict={dict} />
      <SectionDivider />
      <ServiceCards locale={locale} dict={dict} />
      <ServiceFinder locale={locale} dict={dict} />
      <EmbassyJourney dict={dict} />
      <NewsGrid dict={dict} />
      <SectionDivider />
      <RelationsSection dict={dict} />
      <AmbassadorSection dict={dict} />
      <VisitContact dict={dict} />
    </>
  );
}
