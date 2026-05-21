import type { Metadata } from "next";
import Link from "next/link";
import { REVIEWS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "See what Oklahoma City homeowners say about selling to TAG Homes. 5.0 average from 40+ Google reviews.",
};

export default function ReviewsPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-cream border-b border-rule">
        <div className="max-w-[1280px] mx-auto px-14 py-16 max-[900px]:px-6 max-[900px]:py-10">
          <p className="text-[11px] uppercase tracking-[0.22em] text-tag-blue-deep mb-4">
            client reviews
          </p>
          <h1
            className="font-serif text-ink mb-4"
            style={{ fontSize: "clamp(40px, 4.6vw, 64px)" }}
          >
            What past <em>clients</em> say.
          </h1>
          <p className="text-[18px] leading-[1.55] text-ink-soft">
            5.0 average from over 40 Google reviews. Here&apos;s a sample.
          </p>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="max-w-[1280px] mx-auto px-14 py-16 max-[900px]:px-6 max-[900px]:py-10">
        <div className="grid grid-cols-2 gap-6 max-[900px]:grid-cols-1">
          {REVIEWS.map((r) => (
            <div
              key={r.name}
              className="border border-rule rounded-[6px] p-6 flex flex-col gap-4"
            >
              <p className="text-tag-blue-deep text-sm tracking-widest">
                ★★★★★
              </p>
              <blockquote className="font-serif text-ink-soft leading-relaxed text-[15px] italic flex-1">
                &ldquo;{r.text}&rdquo;
              </blockquote>
              <p className="text-[13px] text-ink-mute">- {r.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-tag-blue">
        <div className="max-w-[1280px] mx-auto px-14 py-14 text-center max-[900px]:px-6">
          <h2 className="font-serif text-white text-[32px] mb-4">
            Ready to join them?
          </h2>
          <Link
            href="/contact"
            className="inline-block px-8 py-3.5 rounded-full bg-white text-tag-blue-deep text-[14px] font-medium hover:bg-cream transition-all hover:-translate-y-px"
          >
            get your offer
          </Link>
        </div>
      </section>
    </>
  );
}
