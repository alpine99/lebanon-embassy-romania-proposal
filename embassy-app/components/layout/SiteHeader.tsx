"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionary";
import { Button } from "@/components/ui/Button";
import { SearchDialog } from "@/components/search/SearchDialog";

export function SiteHeader({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchBtnRef = useRef<HTMLButtonElement | null>(null);
  const menuBtnRef = useRef<HTMLButtonElement | null>(null);

  // The trigger that opened search may no longer be mounted by the time
  // it closes: opening search from the mobile drawer also closes that
  // drawer (setMenuOpen(false)), which unmounts the mobile search
  // button. Calling .focus() on a detached element is a silent no-op,
  // so we check document.contains() and fall back to the hamburger
  // button (always present) rather than losing focus restoration
  // entirely on mobile.
  const closeSearch = () => {
    setSearchOpen(false);
    const el = searchBtnRef.current;
    if (el && document.contains(el)) {
      el.focus();
    } else {
      menuBtnRef.current?.focus();
    }
  };

  const navLinks = [
    { href: `/${locale}#services`, label: dict.nav.consularServices },
    { href: `/${locale}#finder`, label: dict.nav.visasTravel },
    { href: `/${locale}/emergency`, label: dict.nav.emergency },
    { href: `/${locale}/community`, label: dict.nav.community },
    { href: `/${locale}/relations`, label: dict.nav.lebanonRomania },
    { href: `/${locale}/media`, label: dict.nav.newsMedia },
    { href: `/${locale}#contact`, label: dict.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-[100] border-b border-line bg-ivory-50">
      <div className="mx-auto flex max-w-content items-center justify-between gap-4 px-5 py-3.5">
        <Link href={`/${locale}`} className="flex items-center gap-3.5">
          <div
            role="img"
            aria-label={dict.nav.emblemPending}
            className="flex h-[46px] w-[46px] flex-none items-center justify-center rounded-full border-[1.5px] border-dashed border-cedar-950 p-0.5 text-center text-[8px] leading-tight text-cedar-800"
          >
            EMBLEM
            <br />
            PENDING
          </div>
          <span className="flex flex-col">
            <span className="font-serif text-[17px] font-semibold text-cedar-950">
              {dict.nav.brandName}
            </span>
            <span className="text-[11.5px] tracking-wide text-charcoal-600">
              {dict.nav.brandSub}
            </span>
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-6 min-[940px]:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="border-b-2 border-transparent py-1.5 text-[14.5px] font-semibold text-charcoal-900 hover:border-gold-400"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3.5">
          <button
            aria-label={dict.nav.search}
            onClick={(e) => {
              searchBtnRef.current = e.currentTarget;
              setSearchOpen(true);
            }}
            className="hidden p-2 text-cedar-950 min-[420px]:inline-flex"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
          <Button
            href={`/${locale}#finder`}
            variant="primary"
            size="sm"
            className="hidden min-[420px]:inline-flex"
          >
            {dict.nav.bookAppointment}
          </Button>
          <button
            ref={menuBtnRef}
            aria-label={dict.nav.openMenu}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="inline-flex rounded border border-line p-2 min-[940px]:hidden"
          >
            <span aria-hidden="true">☰</span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          aria-label="Primary (mobile)"
          className="border-t border-line bg-ivory-50 px-5 py-4 min-[940px]:hidden"
        >
          <button
            onClick={(e) => {
              searchBtnRef.current = e.currentTarget;
              setMenuOpen(false);
              setSearchOpen(true);
            }}
            className="mb-3 flex items-center gap-2 py-1 text-[15px] font-semibold text-charcoal-900"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            {dict.nav.search}
          </button>
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-1 text-[15px] font-semibold text-charcoal-900"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}

      <SearchDialog
        locale={locale}
        dict={dict}
        open={searchOpen}
        onClose={closeSearch}
      />
    </header>
  );
}
