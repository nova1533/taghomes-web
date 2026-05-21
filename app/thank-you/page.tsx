import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You",
  description: "We received your info and will be in touch within 24 hours.",
};

export default function ThankYouPage() {
  return (
    <section className="bg-cream min-h-[70vh] flex items-center justify-center">
      <div className="max-w-lg mx-auto px-8 py-16 text-center">

        {/* Checkmark circle */}
        <div className="w-16 h-16 rounded-full bg-tag-blue-soft flex items-center justify-center mx-auto mb-8">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M6 14l6 6 10-12" stroke="#4f7bc7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <p className="text-[11px] uppercase tracking-[0.22em] text-tag-blue-deep mb-4">
          form received
        </p>

        <h1
          className="font-serif text-ink mb-5"
          style={{ fontSize: "clamp(36px, 4vw, 56px)" }}
        >
          Thank <em>you!</em>
        </h1>

        <p className="text-[17px] leading-[1.6] text-ink-soft mb-3">
          Our team will be in touch with you soon.
        </p>
        <p className="text-[15px] leading-[1.6] text-ink-mute mb-10">
          We typically respond within a few hours during business hours. We look
          forward to learning more about your property.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="px-8 py-3.5 rounded-full bg-tag-blue text-white text-[14px] font-medium hover:bg-tag-blue-deep transition-all hover:-translate-y-px"
          >
            return to site
          </Link>
          <Link
            href="/how-it-works"
            className="px-8 py-3.5 rounded-full border border-rule text-ink-soft text-[14px] font-medium hover:border-tag-blue-deep hover:text-tag-blue-deep transition-all"
          >
            how it works →
          </Link>
        </div>

      </div>
    </section>
  );
}
