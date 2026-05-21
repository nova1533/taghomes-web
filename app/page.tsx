import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { STATS, REVIEWS, PROJECTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "TAG Homes | Sell Your House Fast in Oklahoma City",
  description:
    "We buy houses for cash in Oklahoma City, Edmond, Norman, Moore, Mustang and surrounding areas. No fees, no commissions, close in 21-30 days.",
};

const COMPARE = [
  { aspect: "closing time", agent: "45-90+ days", tag: "21-30 days" },
  { aspect: "certainty", agent: "deals fall through", tag: "guaranteed close" },
  { aspect: "commissions", agent: "3-6%", tag: "0%" },
  { aspect: "repairs", agent: "often required", tag: "none needed" },
  { aspect: "showings", agent: "disruptions to your life", tag: "no showings" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream">
        <div className="max-w-[1280px] mx-auto px-14 py-20 max-[900px]:px-6 max-[900px]:py-12">
          <div className="grid grid-cols-[1.05fr_1fr] gap-20 items-center max-[900px]:grid-cols-1 max-[900px]:gap-10">
            {/* Left */}
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-tag-blue-deep mb-6">
                Oklahoma City · Est. 2020
              </p>
              <h1
                className="font-serif text-ink leading-[1.02] mb-6"
                style={{ fontSize: "clamp(44px, 5.4vw, 80px)" }}
              >
                Sell your home <em>simply</em>.<br />
                On your timeline.
              </h1>
              <p className="text-[18px] leading-[1.55] text-ink-soft mb-8 max-w-md">
                We buy houses for cash across the OKC metro. No repairs, no
                commissions, no waiting. Just a fair offer and a close date that
                works for you.
              </p>
              <div className="flex items-center gap-4 flex-wrap mb-8">
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-full bg-tag-blue text-white text-[14px] font-medium tracking-[0.02em] hover:bg-tag-blue-deep transition-all hover:-translate-y-px"
                >
                  get your offer
                </Link>
                <Link
                  href="/how-it-works"
                  className="px-6 py-3 rounded-full border border-ink/20 text-ink-soft text-[14px] font-medium tracking-[0.02em] hover:border-tag-blue-deep hover:text-tag-blue-deep transition-all"
                >
                  how it works →
                </Link>
              </div>
              <p className="text-[13px] text-ink-mute">
                ★★★★★&nbsp; 5.0 from 40+ Google reviews
              </p>
            </div>

            {/* Right: hero image */}
            <div
              className="relative rounded-[4px] overflow-hidden"
              style={{
                aspectRatio: "4/5",
                boxShadow: "0 30px 60px -30px rgba(42,46,58,0.25)",
              }}
            >
              <Image
                src="/hero-okc.jpg"
                alt="Oklahoma City skyline at sunset"
                fill
                className="object-cover"
                style={{ objectPosition: "70% 30%" }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-cream-2 border-y border-rule">
        <div className="max-w-[1280px] mx-auto px-14 py-12 max-[900px]:px-6">
          <div className="grid grid-cols-4 gap-8 max-[900px]:grid-cols-2">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <p
                  className="font-serif text-ink tracking-[-0.02em] mb-1"
                  style={{ fontSize: "48px", fontWeight: 300 }}
                >
                  {s.value}
                </p>
                <p className="text-[13px] uppercase tracking-[0.1em] text-ink-mute">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compare */}
      <section className="max-w-[1280px] mx-auto px-14 py-20 max-[900px]:px-6 max-[900px]:py-12">
        <p className="text-[11px] uppercase tracking-[0.22em] text-tag-blue-deep mb-4 text-center">
          your options
        </p>
        <h2
          className="font-serif text-ink text-center mb-12"
          style={{ fontSize: "clamp(32px, 3.6vw, 52px)" }}
        >
          Selling with an agent <em>vs.</em> selling to TAG
        </h2>
        <div className="max-w-2xl mx-auto border border-rule rounded-[6px] overflow-hidden">
          <div className="grid grid-cols-3 bg-cream-2">
            <div className="px-6 py-3" />
            <div className="px-6 py-3 text-[12px] uppercase tracking-[0.1em] text-ink-mute text-center border-l border-rule">
              with an agent
            </div>
            <div className="px-6 py-3 text-[12px] uppercase tracking-[0.1em] text-tag-blue-deep text-center border-l border-rule bg-tag-blue-soft/30">
              selling to TAG
            </div>
          </div>
          {COMPARE.map((row, i) => (
            <div
              key={row.aspect}
              className={`grid grid-cols-3 border-t border-rule ${i % 2 === 0 ? "" : "bg-cream/40"}`}
            >
              <div className="px-6 py-4 text-[13px] uppercase tracking-[0.08em] text-ink-mute">
                {row.aspect}
              </div>
              <div className="px-6 py-4 text-[14px] text-ink-soft text-center border-l border-rule">
                {row.agent}
              </div>
              <div className="px-6 py-4 text-[14px] text-ink font-medium text-center border-l border-rule bg-tag-blue-soft/20">
                {row.tag}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Projects */}
      <section className="bg-cream-2 border-y border-rule">
        <div className="max-w-[1280px] mx-auto px-14 py-16 max-[900px]:px-6 max-[900px]:py-10">
          <div className="flex items-end justify-between mb-8 max-[900px]:flex-col max-[900px]:items-start max-[900px]:gap-3">
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-tag-blue-deep mb-2">
                recent work
              </p>
              <h2 className="font-serif text-ink" style={{ fontSize: "32px" }}>
                Homes we&apos;ve loved back to life
              </h2>
            </div>
            <Link
              href="/projects"
              className="text-[13px] text-tag-blue-deep hover:underline tracking-[0.02em]"
            >
              view all projects →
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-4 max-[900px]:grid-cols-1">
            {PROJECTS.slice(0, 3).map((img, i) => (
              <div
                key={i}
                className="relative rounded-[6px] overflow-hidden"
                style={{ aspectRatio: "4/3" }}
              >
                <Image
                  src={img}
                  alt={`Project ${i + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="max-w-[1280px] mx-auto px-14 py-20 max-[900px]:px-6 max-[900px]:py-12">
        <p className="text-[11px] uppercase tracking-[0.22em] text-tag-blue-deep mb-4 text-center">
          what clients say
        </p>
        <h2
          className="font-serif text-ink text-center mb-12"
          style={{ fontSize: "clamp(32px, 3.6vw, 52px)" }}
        >
          5.0 from 40+ <em>Google</em> reviews
        </h2>
        <div className="grid grid-cols-3 gap-6 max-[900px]:grid-cols-1">
          {REVIEWS.slice(0, 3).map((r) => (
            <div
              key={r.name}
              className="border border-rule rounded-[6px] p-6 flex flex-col gap-4"
            >
              <p className="text-tag-blue-deep text-sm tracking-widest">★★★★★</p>
              <blockquote className="font-serif text-ink-soft leading-relaxed text-[15px] italic flex-1">
                &ldquo;{r.text}&rdquo;
              </blockquote>
              <p className="text-[13px] text-ink-mute">- {r.name}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/reviews"
            className="px-6 py-3 rounded-full border border-rule text-ink-soft text-[14px] font-medium hover:border-tag-blue-deep hover:text-tag-blue-deep transition-all"
          >
            read all reviews →
          </Link>
        </div>
      </section>

      {/* CTA Band */}
      <section className="bg-tag-blue">
        <div className="max-w-[1280px] mx-auto px-14 py-16 text-center max-[900px]:px-6">
          <p
            className="text-[11px] uppercase tracking-[0.08em] text-white/70 mb-4"
          >
            READY?
          </p>
          <h2
            className="font-serif text-white mb-4"
            style={{ fontSize: "32px" }}
          >
            Get your cash offer today.
          </h2>
          <p className="text-white/80 text-[16px] leading-[1.55] mb-8 max-w-md mx-auto">
            No fees, no repairs, no hassle. Pick a close date that works for
            you.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3.5 rounded-full bg-white text-tag-blue-deep text-[14px] font-medium tracking-[0.02em] hover:bg-cream transition-all hover:-translate-y-px"
          >
            get your offer
          </Link>
        </div>
      </section>
    </>
  );
}
