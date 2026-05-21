"use client";
import { useState } from "react";
import { FAQS } from "@/lib/data";

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="max-w-2xl">
      {FAQS.map((faq, i) => (
        <div key={i} className="border-b border-rule">
          <button
            className="w-full flex items-start justify-between gap-6 py-6 text-left"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <h2 className="font-serif text-ink text-[22px] leading-snug">
              {faq.q}
            </h2>
            <span className="text-tag-blue-deep text-[20px] font-light mt-1 flex-shrink-0">
              {open === i ? "−" : "+"}
            </span>
          </button>
          {open === i && (
            <p className="text-[16px] leading-[1.55] text-ink-soft pb-6">
              {faq.a}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
