"use client";

import { useState } from "react";
import type { Dictionary } from "@/lib/i18n/dictionary";
import { Button } from "@/components/ui/Button";

export function MediaEnquiryForm({ dict }: { dict: Dictionary }) {
  const m = dict.centres.media;
  const [submitted, setSubmitted] = useState(false);
  const inputCls = "border border-line bg-ivory-50 px-3.5 py-2.5 text-[14.5px] text-charcoal-900";

  if (submitted) {
    return (
      <div className="border border-line bg-ivory-100 p-6">
        <p className="text-[14.5px] text-charcoal-900">{m.enquiryNotice}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="flex flex-col gap-4 max-w-xl"
    >
      <div className="mb-1 border border-gold-400/50 bg-ivory-100 px-4 py-3 text-[13px] font-semibold text-burgundy-700">
        {m.enquiryNotice}
      </div>
      <label className="flex flex-col gap-1.5">
        <span className="text-[13px] font-semibold text-charcoal-900">{m.enquiryName}</span>
        <input className={inputCls} autoComplete="off" />
      </label>
      <label className="flex flex-col gap-1.5">
        <span className="text-[13px] font-semibold text-charcoal-900">{m.enquiryEmail}</span>
        <input type="email" className={inputCls} autoComplete="off" />
      </label>
      <label className="flex flex-col gap-1.5">
        <span className="text-[13px] font-semibold text-charcoal-900">{m.enquiryOrg}</span>
        <input className={inputCls} autoComplete="off" />
      </label>
      <label className="flex flex-col gap-1.5">
        <span className="text-[13px] font-semibold text-charcoal-900">{m.enquiryMessage}</span>
        <textarea rows={4} className={inputCls} />
      </label>
      <div>
        <Button type="submit" variant="primary">{m.enquirySubmit}</Button>
      </div>
    </form>
  );
}
