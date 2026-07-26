import type { ServiceDefinition } from "./serviceTypes";
import { passportRenewal } from "./services/passport-renewal";
import { lostStolenPassport } from "./services/lost-stolen-passport";
import { birthRegistration } from "./services/birth-registration";
import { marriageRegistration } from "./services/marriage-registration";
import { divorceRegistration } from "./services/divorce-registration";
import { deathRegistration } from "./services/death-registration";
import { powerOfAttorney } from "./services/power-of-attorney";
import { documentLegalisation } from "./services/document-legalisation";
import { nationalityInformation } from "./services/nationality-information";
import { repatriationOfRemains } from "./services/repatriation-of-remains";
import { consularCertificates } from "./services/consular-certificates";
import { visaToLebanon } from "./services/visa-to-lebanon";
import { unregisteredCitizenServices } from "./services/unregistered-citizen-services";

// All 13 services named in the brief are now registered, each with a
// full ServiceDefinition (real content in all 4 languages, not a stub).
export const serviceRegistry: ServiceDefinition[] = [
  passportRenewal,
  lostStolenPassport,
  birthRegistration,
  marriageRegistration,
  divorceRegistration,
  deathRegistration,
  powerOfAttorney,
  documentLegalisation,
  nationalityInformation,
  repatriationOfRemains,
  consularCertificates,
  visaToLebanon,
  unregisteredCitizenServices,
];

export function getServiceBySlug(slug: string): ServiceDefinition | undefined {
  return serviceRegistry.find((s) => s.slug === slug);
}

export function getServicesByCategory(
  categorySlug: ServiceDefinition["categorySlug"]
): ServiceDefinition[] {
  return serviceRegistry.filter((s) => s.categorySlug === categorySlug);
}
