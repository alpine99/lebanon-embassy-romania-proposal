// A single, consistent visual marker for any fact the embassy has not
// yet approved (fees, hours, names, requirements...). Used throughout
// instead of inventing plausible-sounding placeholder data — see the
// content governance rules in the product spec.

import type { ReactNode } from "react";

export function PendingTag({
  children,
  tone = "light",
}: {
  children: ReactNode;
  tone?: "light" | "dark";
}) {
  const toneClasses =
    tone === "dark"
      ? "border-gold-400 text-gold-300"
      : "border-burgundy-700 text-burgundy-700 bg-ivory-50";

  return (
    <span
      className={`inline-block rounded border px-2.5 py-1 text-xs font-bold tracking-wide ${toneClasses}`}
    >
      {children}
    </span>
  );
}
