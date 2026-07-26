"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionary";
import {
  buildSearchIndex,
  searchIndex,
  type SearchItemType,
} from "@/lib/search/buildSearchIndex";

function Highlight({ text, query }: { text: string; query: string }) {
  if (!query.trim()) return <>{text}</>;
  const q = query.trim();
  const idx = text.toLocaleLowerCase().indexOf(q.toLocaleLowerCase());
  if (idx === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, idx)}
      <mark className="bg-gold-300/60 text-cedar-950">{text.slice(idx, idx + q.length)}</mark>
      {text.slice(idx + q.length)}
    </>
  );
}

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function SearchDialog({
  locale,
  dict,
  open,
  onClose,
}: {
  locale: Locale;
  dict: Dictionary;
  open: boolean;
  onClose: () => void;
}) {
  const s = dict.search;
  const [query, setQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState<SearchItemType | "all">("all");
  const dialogRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const index = useMemo(() => buildSearchIndex(locale, dict), [locale, dict]);
  const results = useMemo(() => searchIndex(index, query, typeFilter), [index, query, typeFilter]);

  const grouped = useMemo(() => {
    const map = new Map<SearchItemType, typeof results>();
    for (const r of results) {
      const arr = map.get(r.type) ?? [];
      arr.push(r);
      map.set(r.type, arr);
    }
    return map;
  }, [results]);

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    } else {
      setQuery("");
      setTypeFilter("all");
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        // Focus restoration is the caller's responsibility (see
        // SiteHeader.closeSearch) — it can reliably check whether the
        // original trigger is still mounted (it isn't, on mobile, since
        // opening search also closes the drawer that contained the
        // button) and fall back sensibly. This component only signals
        // "closed", it doesn't guess where focus should land.
        onClose();
        return;
      }
      if (e.key === "Tab" && dialogRef.current) {
        const focusables = Array.from(
          dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
        );
        if (focusables.length === 0) return;
        const first = focusables[0]!;
        const last = focusables[focusables.length - 1]!;
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  const typeOrder: SearchItemType[] = [
    "service",
    "emergency",
    "form",
    "faq",
    "student",
    "news",
    "contact",
    "page",
  ];

  return (
    <div className="fixed inset-0 z-[200] flex items-start justify-center bg-cedar-950/60 px-4 pt-[10vh]">
      <button
        aria-label={s.closeLabel}
        onClick={onClose}
        className="absolute inset-0 cursor-default"
        tabIndex={-1}
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={s.dialogLabel}
        className="relative z-10 max-h-[76vh] w-full max-w-2xl overflow-hidden border border-line bg-ivory-50 shadow-xl"
      >
        <div className="flex items-center gap-3 border-b border-line p-4">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="flex-none text-cedar-950">
            <circle cx="11" cy="11" r="7" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={s.placeholder}
            className="flex-1 bg-transparent text-[15px] text-charcoal-900 outline-none"
            aria-label={s.dialogLabel}
          />
          <button
            onClick={onClose}
            aria-label={s.closeLabel}
            className="flex h-8 w-8 flex-none items-center justify-center rounded-full text-charcoal-600 hover:bg-ivory-100 focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-gold-400"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>

        <div className="flex flex-wrap gap-2 border-b border-line px-4 py-3">
          <button
            onClick={() => setTypeFilter("all")}
            className={`rounded-full border px-3 py-1 text-[12.5px] font-semibold ${
              typeFilter === "all" ? "border-cedar-950 bg-cedar-950 text-ivory-50" : "border-line text-charcoal-900"
            }`}
          >
            {s.filterAll}
          </button>
          {typeOrder.map((t) => (
            <button
              key={t}
              onClick={() => setTypeFilter(t)}
              className={`rounded-full border px-3 py-1 text-[12.5px] font-semibold ${
                typeFilter === t ? "border-cedar-950 bg-cedar-950 text-ivory-50" : "border-line text-charcoal-900"
              }`}
            >
              {s.typeLabels[t]}
            </button>
          ))}
        </div>

        <div className="max-h-[52vh] overflow-y-auto p-4">
          <p role="status" aria-live="polite" className="sr-only">
            {query.trim() ? `${results.length} ${s.resultsCount}` : ""}
          </p>

          {!query.trim() && (
            <p className="py-8 text-center text-[14px] text-charcoal-600">{s.startTyping}</p>
          )}

          {query.trim() && results.length === 0 && (
            <p role="status" className="py-8 text-center text-[14px] text-charcoal-600">
              {s.emptyState}
            </p>
          )}

          {typeOrder.map((t) => {
            const group = grouped.get(t);
            if (!group || group.length === 0) return null;
            return (
              <div key={t} className="mb-6 last:mb-0">
                <h2 className="mb-2 text-[11.5px] font-bold uppercase tracking-wide text-burgundy-700">
                  {s.typeLabels[t]}
                </h2>
                <ul className="flex flex-col gap-1">
                  {group.map((item, i) => (
                    <li key={`${t}-${i}`}>
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="block rounded px-3 py-2.5 hover:bg-ivory-100 focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-gold-400"
                      >
                        <div className="text-[14.5px] font-semibold text-cedar-950">
                          <Highlight text={item.title} query={query} />
                        </div>
                        <div className="mt-0.5 text-[13px] text-charcoal-600">
                          <Highlight text={item.snippet} query={query} />
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
