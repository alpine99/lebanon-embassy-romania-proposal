"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionary";
import { Button } from "@/components/ui/Button";

type View = "form" | "submitted" | "update" | "delete-confirm" | "deleted";

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[13px] font-semibold text-charcoal-900">{label}</span>
      {children}
    </label>
  );
}

const inputCls =
  "border border-line bg-ivory-50 px-3.5 py-2.5 text-[14.5px] text-charcoal-900 focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-gold-400";

export function CommunityRegistrationForm({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const c = dict.centres.community;
  const [view, setView] = useState<View>("form");

  return (
    <div className="mt-8 max-w-2xl">
      <div className="mb-6 border border-gold-400/50 bg-ivory-100 px-4 py-3 text-[13.5px] font-semibold text-burgundy-700">
        {c.prototypeNotice}
      </div>

      {view === "form" && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setView("submitted");
          }}
          className="flex flex-col gap-5"
        >
          <Field label={c.fields.fullName}>
            <input type="text" autoComplete="off" className={inputCls} />
          </Field>
          <Field label={c.fields.city}>
            <input type="text" autoComplete="off" className={inputCls} />
          </Field>
          <Field label={c.fields.contactMethod}>
            <select className={inputCls} defaultValue="email">
              <option value="email">Email</option>
              <option value="phone">Phone</option>
              <option value="whatsapp">WhatsApp</option>
            </select>
          </Field>
          <Field label={c.fields.familyMembers}>
            <input type="number" min={0} max={20} defaultValue={0} className={inputCls} />
          </Field>
          <Field label={c.fields.preferredLanguage}>
            <select className={inputCls} defaultValue={locale}>
              <option value="ar">العربية</option>
              <option value="ro">Română</option>
              <option value="en">English</option>
              <option value="fr">Français</option>
            </select>
          </Field>
          <Field label={c.fields.crisisNotification}>
            <select className={inputCls} defaultValue="yes">
              <option value="yes">{dict.servicePage.yes}</option>
              <option value="no">{dict.servicePage.no}</option>
            </select>
          </Field>
          <div>
            <Button type="submit" variant="primary">
              {c.registerCta}
            </Button>
          </div>
        </form>
      )}

      {view === "submitted" && (
        <div className="border border-line bg-ivory-100 p-6">
          <p className="text-[15px] text-charcoal-900">{c.submittedNotice}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button variant="outline" onClick={() => setView("update")}>
              {c.updateCta}
            </Button>
            <Button variant="outline" onClick={() => setView("delete-confirm")}>
              {c.deleteCta}
            </Button>
          </div>
        </div>
      )}

      {view === "update" && (
        <div className="border border-line bg-ivory-100 p-6">
          <h3 className="font-sans text-[15px] font-bold text-cedar-950">{c.updateJourneyTitle}</h3>
          <p className="mt-2 text-[14px] text-charcoal-600">{c.updateJourneyBody}</p>
          <div className="mt-5">
            <Button variant="outline" onClick={() => setView("form")}>
              {c.cancelCta}
            </Button>
          </div>
        </div>
      )}

      {view === "delete-confirm" && (
        <div className="border border-burgundy-700/40 bg-ivory-100 p-6">
          <h3 className="font-sans text-[15px] font-bold text-cedar-950">{c.confirmDeleteTitle}</h3>
          <p className="mt-2 text-[14px] text-charcoal-600">{c.confirmDeleteBody}</p>
          <div className="mt-5 flex gap-3">
            <Button variant="emergency" onClick={() => setView("deleted")}>
              {c.confirmDeleteCta}
            </Button>
            <Button variant="outline" onClick={() => setView("submitted")}>
              {c.cancelCta}
            </Button>
          </div>
        </div>
      )}

      {view === "deleted" && (
        <div className="border border-line bg-ivory-100 p-6">
          <p className="text-[15px] text-charcoal-900">{c.submittedNotice}</p>
          <div className="mt-5">
            <Button variant="outline" onClick={() => setView("form")}>
              {dict.centres.appointment.startOverCta}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
