"use client";

import { useMemo, useState } from "react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionary";
import { documentRegistry } from "@/lib/content/documentRegistry";
import { serviceRegistry } from "@/lib/content/serviceRegistry";
import { localeMeta } from "@/lib/i18n/config";
import { VerificationBadge } from "@/components/ui/VerificationBadge";

export function FormsAndDownloadsList({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const f = dict.centres.forms;
  const [serviceFilter, setServiceFilter] = useState("all");
  const [langFilter, setLangFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");

  const filtered = useMemo(() => {
    return documentRegistry.filter((d) => {
      if (serviceFilter !== "all" && d.serviceSlug !== serviceFilter) return false;
      if (langFilter !== "all" && d.language !== langFilter) return false;
      if (typeFilter !== "all" && d.fileType !== typeFilter) return false;
      return true;
    });
  }, [serviceFilter, langFilter, typeFilter]);

  const selectCls = "border border-line bg-ivory-50 px-3 py-2 text-[13.5px] text-charcoal-900";

  return (
    <div className="mt-8">
      <div className="mb-6 flex flex-wrap gap-4">
        <label className="flex flex-col gap-1">
          <span className="text-[12px] font-bold uppercase tracking-wide text-burgundy-700">{f.filterService}</span>
          <select className={selectCls} value={serviceFilter} onChange={(e) => setServiceFilter(e.target.value)}>
            <option value="all">{f.allOption}</option>
            {serviceRegistry.map((s) => (
              <option key={s.slug} value={s.slug}>{s.content[locale].title}</option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-[12px] font-bold uppercase tracking-wide text-burgundy-700">{f.filterLanguage}</span>
          <select className={selectCls} value={langFilter} onChange={(e) => setLangFilter(e.target.value)}>
            <option value="all">{f.allOption}</option>
            {(["ar", "ro", "en", "fr"] as Locale[]).map((l) => (
              <option key={l} value={l}>{localeMeta[l].label}</option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-[12px] font-bold uppercase tracking-wide text-burgundy-700">{f.filterType}</span>
          <select className={selectCls} value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
            <option value="all">{f.allOption}</option>
            <option value="PDF">PDF</option>
            <option value="DOCX">DOCX</option>
          </select>
        </label>
      </div>

      {filtered.length === 0 ? (
        <p className="text-[14.5px] italic text-charcoal-600">{f.noResults}</p>
      ) : (
        <div className="overflow-x-auto border border-line">
          <table className="w-full min-w-[720px] border-collapse text-start">
            <thead>
              <tr className="border-b border-line bg-ivory-100 text-start">
                {[f.columns.title, f.columns.category, f.columns.language, f.columns.fileType, f.columns.source, f.columns.lastReviewed, f.columns.status].map((h) => (
                  <th key={h} scope="col" className="px-4 py-3 text-start text-[11.5px] font-bold uppercase tracking-wide text-cedar-950">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((d) => {
                const service = serviceRegistry.find((s) => s.slug === d.serviceSlug);
                return (
                  <tr key={d.id} className="border-b border-line last:border-b-0">
                    <td className="px-4 py-3 text-[13.5px] font-semibold text-charcoal-900">{d.titleKey}</td>
                    <td className="px-4 py-3 text-[13.5px] text-charcoal-600">{service?.content[locale].title ?? "—"}</td>
                    <td className="px-4 py-3 text-[13.5px] text-charcoal-600">{localeMeta[d.language].label}</td>
                    <td className="px-4 py-3 text-[13.5px] text-charcoal-600">{d.fileType}</td>
                    <td className="px-4 py-3 text-[13.5px] text-charcoal-600">{d.sourceAuthority}</td>
                    <td className="px-4 py-3 text-[13.5px] text-charcoal-600">{d.lastReviewedDate ?? "—"}</td>
                    <td className="px-4 py-3">
                      <VerificationBadge status={d.verificationStatus} dict={dict} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      <p className="mt-4 text-[13.5px] italic text-charcoal-600">{f.pendingDocument}</p>
    </div>
  );
}
