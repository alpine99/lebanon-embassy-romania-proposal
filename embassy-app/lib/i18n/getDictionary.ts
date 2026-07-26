import type { Locale } from "./config";
import type { Dictionary } from "./dictionary";
import { en } from "./dictionaries/en";
import { ro } from "./dictionaries/ro";
import { ar } from "./dictionaries/ar";
import { fr } from "./dictionaries/fr";

const dictionaries: Record<Locale, Dictionary> = { en, ro, ar, fr };

// Synchronous on purpose: these are small, statically-imported objects,
// not fetched at runtime — keeps this fast and avoids a client-side
// i18n framework (see spec §13, minimal JavaScript).
export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
