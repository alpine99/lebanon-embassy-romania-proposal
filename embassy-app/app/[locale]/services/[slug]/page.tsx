import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { isLocale, locales, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { serviceRegistry, getServiceBySlug } from "@/lib/content/serviceRegistry";
import { isPublishable } from "@/lib/content/schema";
import { ServicePageTemplate } from "@/components/services/ServicePageTemplate";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    serviceRegistry.map((s) => ({ locale, slug: s.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string; slug: string };
}): Promise<Metadata> {
  const locale: Locale = isLocale(params.locale) ? params.locale : "en";
  const service = getServiceBySlug(params.slug);
  const baseUrl = "https://example-embassy-lebanon-romania.pending";
  if (!service) return { robots: { index: false, follow: false } };
  const title = service.content[locale].title;
  return {
    title,
    description: service.content[locale].summary,
    robots: { index: false, follow: false },
    alternates: {
      canonical: `${baseUrl}/${locale}/services/${service.slug}`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `${baseUrl}/${l}/services/${service.slug}`])
      ),
    },
  };
}

export default function ServiceDetailPage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const locale: Locale = isLocale(params.locale) ? params.locale : "en";
  const dict = getDictionary(locale);
  const service = getServiceBySlug(params.slug);

  if (!service || !isPublishable(service.source)) {
    notFound();
  }

  return <ServicePageTemplate locale={locale} dict={dict} service={service!} />;
}
