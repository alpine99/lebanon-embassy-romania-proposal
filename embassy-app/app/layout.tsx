import type { ReactNode } from "react";
import "./globals.css";

// Intentionally minimal: locale (and therefore <html lang>/<html dir>)
// is only known inside app/[locale]/layout.tsx, which owns the actual
// <html> and <body> tags. This file exists because Next.js requires a
// root layout, but all real markup lives one level down.
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
