import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion from "./FaqAccordion";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about selling your home to TAG Homes in Oklahoma City. No fees, no repairs, close in 21-30 days.",
};

export default function FAQPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-cream border-b border-rule">
        <div className="max-w-[1280px] mx-auto px-14 py-16 max-[900px]:px-6 max-[900px]:py-10">
          <p className="text-[11px] uppercase tracking-[0.22em] text-tag-blue-deep mb-4">
            faq
          </p>
          <h1
            className="font-serif text-ink mb-4"
            style={{ fontSize: "clamp(40px, 4.6vw, 64px)" }}
          >
            Common <em>questions</em>.
          </h1>
          <p className="text-[18px] leading-[1.55] text-ink-soft">
            Everything you need to know before reaching out.
          </p>
        </div>
      </section>

      {/* Accordion */}
      <section className="max-w-[1280px] mx-auto px-14 py-16 max-[900px]:px-6 max-[900px]:py-10">
        <FaqAccordion />
      </section>

      {/* CTA */}
      <section className="bg-cream border-t border-rule">
        <div className="max-w-[1280px] mx-auto px-14 py-14 max-[900px]:px-6">
          <h2 className="font-serif text-ink text-[28px] mb-3">
            Still have questions?
          </h2>
          <p className="text-ink-soft text-[16px] mb-6">
            We&apos;re happy to talk through your situation with no pressure.
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 rounded-full bg-tag-blue text-white text-[14px] font-medium hover:bg-tag-blue-deep transition-all hover:-translate-y-px"
          >
            get your offer
          </Link>
        </div>
      </section>
    </>
  );
}
