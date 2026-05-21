import type { Metadata } from "next";
import Image from "next/image";
import { TEAM } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the TAG Homes team. Oklahoma City-based cash home buyers with 6+ years experience, 190+ sellers helped across the OKC metro.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-cream border-b border-rule">
        <div className="max-w-[1280px] mx-auto px-14 py-16 max-[900px]:px-6 max-[900px]:py-10">
          <p className="text-[11px] uppercase tracking-[0.22em] text-tag-blue-deep mb-4">
            about tag homes
          </p>
          <h1
            className="font-serif text-ink"
            style={{ fontSize: "clamp(40px, 4.6vw, 64px)" }}
          >
            Real people. <em>Real</em> offers.
          </h1>
        </div>
      </section>

      {/* Our story */}
      <section className="max-w-[1280px] mx-auto px-14 py-20 max-[900px]:px-6 max-[900px]:py-12">
        <div className="grid grid-cols-2 gap-16 items-center max-[900px]:grid-cols-1">
          <div>
            <h2 className="font-serif text-ink mb-6" style={{ fontSize: "32px" }}>
              Our story
            </h2>
            <p className="text-[16px] leading-[1.55] text-ink-soft mb-4">
              TAG Homes was founded on a simple idea: selling your home
              shouldn&apos;t be complicated. We started in Oklahoma City in 2020 and
              have since helped over 190 homeowners move on their timeline,
              without the fees, repairs, or uncertainty of a traditional listing.
            </p>
            <p className="text-[16px] leading-[1.55] text-ink-soft">
              We&apos;re local investors who genuinely care about the people we work
              with. Every offer we make is straightforward, every close is
              on-time, and every seller walks away knowing exactly what to
              expect. That&apos;s the TAG standard.
            </p>
          </div>
          <div
            className="relative rounded-[6px] overflow-hidden"
            style={{ aspectRatio: "3/2" }}
          >
            <Image
              src={TEAM[0].img}
              alt="The TAG Homes team"
              fill
              className="object-cover"
              style={{ objectPosition: "center" }}
            />
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-cream-2 border-y border-rule">
        <div className="max-w-[1280px] mx-auto px-14 py-16 max-[900px]:px-6 max-[900px]:py-10">
          <p className="text-[11px] uppercase tracking-[0.22em] text-tag-blue-deep mb-4">
            meet your team
          </p>
          <h2
            className="font-serif text-ink mb-12"
            style={{ fontSize: "clamp(32px, 3.6vw, 52px)" }}
          >
            The people behind <em>Tag</em>
          </h2>
          <div className="grid grid-cols-3 gap-8 max-[900px]:grid-cols-1">
            {TEAM.map((member) => (
              <div key={member.name}>
                <div
                  className="relative rounded-[6px] overflow-hidden mb-4"
                  style={{ aspectRatio: "4/5" }}
                >
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-[11px] uppercase tracking-[0.1em] text-ink-mute mb-1">
                  {member.role}
                </p>
                <h3 className="font-serif text-ink text-[24px] mb-3">
                  {member.name}
                </h3>
                <p className="text-[15px] leading-[1.55] text-ink-soft">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
