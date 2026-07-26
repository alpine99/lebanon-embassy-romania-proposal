"use client";

import { useState } from "react";
import type { Dictionary } from "@/lib/i18n/dictionary";

export function AnnouncementBar({ dict }: { dict: Dictionary }) {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div id="notices" className="border-y border-line bg-ivory-100">
      <div className="mx-auto flex max-w-content items-start gap-4 px-5 py-5">
        <span className="mt-0.5 flex-none rounded bg-burgundy-700 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
          {dict.announcement.demoTag}
        </span>
        <div>
          <strong className="block text-[15.5px] text-charcoal-900">
            {dict.announcement.title}
          </strong>
          <span className="text-[14px] text-charcoal-600">
            {dict.announcement.body}
          </span>
        </div>
        <button
          aria-label={dict.announcement.dismiss}
          onClick={() => setVisible(false)}
          className="ms-auto flex-none rounded p-1 text-[20px] leading-none text-charcoal-600 hover:text-charcoal-900"
        >
          ×
        </button>
      </div>
    </div>
  );
}
