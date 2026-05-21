import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You",
  description: "We received your info and will be in touch within 24 hours.",
};

export default function ThankYouPage() {
  return (
    <section className="bg-cream min-h-[60vh] flex items-center">
      <div className="max-w-[1280px] mx-auto px-14 py-20 max-[900px]:px-6 text-center">
        <p className="text-[11px] uppercase tracking-[0.22em] text-tag-blue-deep mb-6">
          got it
        </p>
        <h1
          className="font-serif text-ink mb-6"
          style={{ fontSize: "clamp(40px, 4.6vw, 64px)" }}
        >
          We&apos;ll be in <em>touch</em> soon.
        </h1>
        <p className="text-[18px] leading-[1.55] text-ink-soft mb-10 max-w-md mx-auto">
          Thanks for reaching out. Someone from our team will contact you within
          24 hours with a fair, no-obligation cash offer.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-3.5 rounded-full bg-tag-blue text-white text-[14px] font-medium hover:bg-tag-blue-deep transition-all hover:-translate-y-px"
        >
          back to home
        </Link>
      </div>
    </section>
  );
}
