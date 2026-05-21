import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Selling your home to TAG Homes is simple. Four steps from contact to cash in hand, usually in 21-30 days. No repairs, no fees, no showings.",
};

const STEPS = [
  {
    num: "01",
    title: "Contact",
    desc: "Tell us about your property, address, condition, and timeline. Takes about 2 minutes.",
  },
  {
    num: "02",
    title: "Appointment",
    desc: "If it's a fit for our buying criteria, we'll set up a quick walk-through at your convenience.",
  },
  {
    num: "03",
    title: "Offer",
    desc: "We present a fair, no-obligation cash offer. Take it, leave it, or ask questions, no pressure.",
  },
  {
    num: "04",
    title: "Close",
    desc: "We close at a local, reputable title company on the date that works for you. Cash in hand.",
  },
];

const CALLOUTS = [
  {
    title: "No fees or commissions",
    desc: "We cover all closing costs. You keep more of the sale price.",
  },
  {
    title: "Any condition",
    desc: "Don't clean it, fix it, or stage it. We buy homes as-is.",
  },
  {
    title: "Any situation",
    desc: "Inherited, vacant, behind on payments, or simply ready to move on.",
  },
  {
    title: "Your timeline",
    desc: "Need to close in two weeks? Two months? We work around you.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-cream border-b border-rule">
        <div className="max-w-[1280px] mx-auto px-14 py-16 max-[900px]:px-6 max-[900px]:py-10">
          <p className="text-[11px] uppercase tracking-[0.22em] text-tag-blue-deep mb-4">
            the process
          </p>
          <h1
            className="font-serif text-ink mb-4"
            style={{ fontSize: "clamp(40px, 4.6vw, 64px)" }}
          >
            From hello to <em>closed</em>, usually in three weeks.
          </h1>
          <p className="text-[18px] leading-[1.55] text-ink-soft max-w-xl">
            No listings, no waiting on financing. A simple four-step process
            built around your timeline.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="max-w-[1280px] mx-auto px-14 py-16 max-[900px]:px-6 max-[900px]:py-10">
        <div className="grid grid-cols-2 gap-10 max-[900px]:grid-cols-1">
          {STEPS.map((step) => (
            <div
              key={step.num}
              className="border border-rule rounded-[6px] p-8"
            >
              <p
                className="font-serif text-tag-blue mb-3"
                style={{ fontSize: "48px", fontWeight: 300 }}
              >
                {step.num}
              </p>
              <h2 className="font-serif text-ink text-[28px] mb-3">
                {step.title}
              </h2>
              <p className="text-[16px] leading-[1.55] text-ink-soft">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Callouts */}
      <section className="bg-cream-2 border-y border-rule">
        <div className="max-w-[1280px] mx-auto px-14 py-16 max-[900px]:px-6 max-[900px]:py-10">
          <div className="grid grid-cols-4 gap-6 max-[900px]:grid-cols-1">
            {CALLOUTS.map((c) => (
              <div key={c.title}>
                <h3 className="font-serif text-ink text-[20px] mb-2">
                  {c.title}
                </h3>
                <p className="text-[15px] leading-[1.55] text-ink-soft">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-[1280px] mx-auto px-14 py-16 text-center max-[900px]:px-6">
        <h2 className="font-serif text-ink text-[32px] mb-4">
          Ready to get started?
        </h2>
        <p className="text-ink-soft text-[16px] mb-8">
          It takes about 2 minutes to tell us about your property.
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-3.5 rounded-full bg-tag-blue text-white text-[14px] font-medium hover:bg-tag-blue-deep transition-all hover:-translate-y-px"
        >
          get your offer
        </Link>
      </section>
    </>
  );
}
