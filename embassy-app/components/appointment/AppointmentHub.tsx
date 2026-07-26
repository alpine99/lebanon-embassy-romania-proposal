"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionary";
import { serviceRegistry } from "@/lib/content/serviceRegistry";
import { Button } from "@/components/ui/Button";

type Step = "service" | "requirements" | "slot" | "contact" | "summary" | "confirmation" | "cancelled";

const DEMO_SLOTS = [
  "Mon 10:00", "Mon 11:30", "Tue 09:00", "Wed 14:00", "Thu 10:30", "Fri 09:30",
];

const stepOrder: Step[] = ["service", "requirements", "slot", "contact", "summary", "confirmation"];

export function AppointmentHub({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const a = dict.centres.appointment;
  const [step, setStep] = useState<Step>("service");
  const [serviceSlug, setServiceSlug] = useState<string>(serviceRegistry[0]?.slug ?? "");
  const [slot, setSlot] = useState<string>(DEMO_SLOTS[0] ?? "");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const service = serviceRegistry.find((s) => s.slug === serviceSlug);
  const content = service?.content[locale];

  const stepIndex = stepOrder.indexOf(step);
  const next = () => setStep(stepOrder[Math.min(stepIndex + 1, stepOrder.length - 1)]!);
  const back = () => setStep(stepOrder[Math.max(stepIndex - 1, 0)]!);

  const stepLabels: Record<Exclude<Step, "cancelled">, string> = {
    service: a.steps.chooseService,
    requirements: a.steps.reviewRequirements,
    slot: a.steps.chooseSlot,
    contact: a.steps.contactInfo,
    summary: a.steps.summary,
    confirmation: a.steps.confirmation,
  };

  return (
    <div className="mt-8 max-w-2xl">
      <div className="mb-8 border border-gold-400/50 bg-ivory-100 px-4 py-3 text-[13.5px] font-semibold text-burgundy-700">
        {a.notice}
      </div>

      {step !== "confirmation" && step !== "cancelled" && (
        <ol className="mb-8 flex flex-wrap gap-x-6 gap-y-2 text-[12.5px] font-semibold uppercase tracking-wide">
          {stepOrder.slice(0, 5).map((s, i) => (
            <li
              key={s}
              className={i <= stepIndex ? "text-cedar-950" : "text-charcoal-600/50"}
            >
              {i + 1}. {stepLabels[s as Exclude<Step, "cancelled">]}
            </li>
          ))}
        </ol>
      )}

      {step === "service" && (
        <div>
          <p className="mb-4 text-[14.5px] text-charcoal-600">{a.selectServicePrompt}</p>
          <div className="flex flex-col gap-2.5">
            {serviceRegistry.map((s) => (
              <label
                key={s.slug}
                className="flex cursor-pointer items-center gap-3 border border-line bg-ivory-50 px-4 py-3 has-[:checked]:border-cedar-800"
              >
                <input
                  type="radio"
                  name="service"
                  checked={serviceSlug === s.slug}
                  onChange={() => setServiceSlug(s.slug)}
                />
                <span className="text-[14.5px] text-charcoal-900">{s.content[locale].title}</span>
              </label>
            ))}
          </div>
          <div className="mt-6">
            <Button variant="primary" onClick={next}>{a.continueCta}</Button>
          </div>
        </div>
      )}

      {step === "requirements" && content && (
        <div>
          <h3 className="font-sans text-[15px] font-bold text-cedar-950">{content.title}</h3>
          <ul className="mt-3 flex flex-col gap-2">
            {content.requiredDocuments.map((d, i) => (
              <li key={i} className="flex items-start gap-2.5 text-[14px] text-charcoal-900">
                <span aria-hidden="true" className="mt-1 h-3.5 w-3.5 flex-none rounded-[2px] border border-cedar-800" />
                {d}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex gap-3">
            <Button variant="outline" onClick={back}>{a.backCta}</Button>
            <Button variant="primary" onClick={next}>{a.continueCta}</Button>
          </div>
        </div>
      )}

      {step === "slot" && (
        <div>
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
            {DEMO_SLOTS.map((s) => (
              <button
                key={s}
                onClick={() => setSlot(s)}
                className={`border px-3 py-3 text-[13.5px] font-semibold ${
                  slot === s ? "border-cedar-950 bg-cedar-950 text-ivory-50" : "border-line bg-ivory-50 text-charcoal-900"
                }`}
              >
                {s}
                <span className="mt-1 block text-[10.5px] font-normal opacity-70">{a.demoAvailability}</span>
              </button>
            ))}
          </div>
          <div className="mt-6 flex gap-3">
            <Button variant="outline" onClick={back}>{a.backCta}</Button>
            <Button variant="primary" onClick={next}>{a.continueCta}</Button>
          </div>
        </div>
      )}

      {step === "contact" && (
        <div className="flex flex-col gap-4">
          <label className="flex flex-col gap-1.5">
            <span className="text-[13px] font-semibold text-charcoal-900">{a.nameLabel}</span>
            <input value={name} onChange={(e) => setName(e.target.value)} className="border border-line bg-ivory-50 px-3.5 py-2.5 text-[14.5px]" />
          </label>
          <label className="flex flex-col gap-1.5">
            <span className="text-[13px] font-semibold text-charcoal-900">{a.emailLabel}</span>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="border border-line bg-ivory-50 px-3.5 py-2.5 text-[14.5px]" />
          </label>
          <label className="flex flex-col gap-1.5">
            <span className="text-[13px] font-semibold text-charcoal-900">{a.phoneLabel}</span>
            <input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" className="border border-line bg-ivory-50 px-3.5 py-2.5 text-[14.5px]" />
          </label>
          <div className="mt-2 flex gap-3">
            <Button variant="outline" onClick={back}>{a.backCta}</Button>
            <Button variant="primary" onClick={next}>{a.continueCta}</Button>
          </div>
        </div>
      )}

      {step === "summary" && content && (
        <div>
          <dl className="flex flex-col gap-3 border border-line bg-ivory-100 p-5">
            <div><dt className="text-[12px] font-bold uppercase text-burgundy-700">{a.steps.chooseService}</dt><dd className="text-[14.5px]">{content.title}</dd></div>
            <div><dt className="text-[12px] font-bold uppercase text-burgundy-700">{a.steps.chooseSlot}</dt><dd className="text-[14.5px]">{slot} ({a.demoAvailability})</dd></div>
            <div><dt className="text-[12px] font-bold uppercase text-burgundy-700">{a.nameLabel}</dt><dd className="text-[14.5px]">{name || "—"}</dd></div>
            <div><dt className="text-[12px] font-bold uppercase text-burgundy-700">{a.emailLabel}</dt><dd className="text-[14.5px]">{email || "—"}</dd></div>
          </dl>
          <div className="mt-6 flex gap-3">
            <Button variant="outline" onClick={back}>{a.backCta}</Button>
            <Button variant="primary" onClick={next}>{a.confirmCta}</Button>
          </div>
        </div>
      )}

      {step === "confirmation" && (
        <div className="border border-line bg-ivory-100 p-6">
          <h3 className="font-serif text-[20px] text-cedar-950">{a.confirmationTitle}</h3>
          <p className="mt-2 text-[14.5px] text-charcoal-600">{a.confirmationBody}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button variant="outline" onClick={() => setStep("slot")}>{a.rescheduleCta}</Button>
            <Button variant="emergency" onClick={() => setStep("cancelled")}>{a.cancelCta}</Button>
          </div>
        </div>
      )}

      {step === "cancelled" && (
        <div className="border border-line bg-ivory-100 p-6">
          <p className="text-[15px] text-charcoal-900">{a.cancelledNotice}</p>
          <div className="mt-5">
            <Button variant="outline" onClick={() => setStep("service")}>{a.startOverCta}</Button>
          </div>
        </div>
      )}
    </div>
  );
}
