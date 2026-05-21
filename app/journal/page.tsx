import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { POSTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Real estate tips, OKC market updates, and seller guides from TAG Homes. Helping Oklahoma City homeowners make informed decisions.",
};

export default function JournalPage() {
  const [featured, ...rest] = POSTS;

  return (
    <>
      {/* Page header */}
      <section className="bg-cream border-b border-rule">
        <div className="max-w-[1280px] mx-auto px-14 py-16 max-[900px]:px-6 max-[900px]:py-10">
          <p className="text-[11px] uppercase tracking-[0.22em] text-tag-blue-deep mb-4">
            journal
          </p>
          <h1
            className="font-serif text-ink"
            style={{ fontSize: "clamp(40px, 4.6vw, 64px)" }}
          >
            Insights for <em>OKC</em> homeowners.
          </h1>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-14 py-16 max-[900px]:px-6 max-[900px]:py-10">
        {/* Featured post */}
        <Link
          href={`/journal/${featured.slug}`}
          className="group grid grid-cols-2 gap-12 mb-16 items-center max-[900px]:grid-cols-1 max-[900px]:mb-10"
        >
          <div
            className="relative rounded-[6px] overflow-hidden"
            style={{ aspectRatio: "16/10" }}
          >
            <Image
              src={featured.img}
              alt={featured.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div>
            <span className="inline-block text-[11px] uppercase tracking-[0.15em] text-tag-blue-deep border border-tag-blue-soft rounded-full px-3 py-1 mb-4">
              {featured.tag}
            </span>
            <h2
              className="font-serif text-ink mb-3 group-hover:text-tag-blue-deep transition-colors"
              style={{ fontSize: "clamp(24px, 2.4vw, 36px)" }}
            >
              {featured.title}
            </h2>
            <p className="text-[16px] leading-[1.55] text-ink-soft mb-4">
              {featured.excerpt}
            </p>
            <p className="text-[13px] text-ink-mute">{featured.read}</p>
          </div>
        </Link>

        {/* Post grid */}
        <div className="grid grid-cols-2 gap-8 max-[900px]:grid-cols-1">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/journal/${post.slug}`}
              className="group"
            >
              <div
                className="relative rounded-[6px] overflow-hidden mb-4"
                style={{ aspectRatio: "16/10" }}
              >
                <Image
                  src={post.img}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <span className="inline-block text-[11px] uppercase tracking-[0.15em] text-tag-blue-deep border border-tag-blue-soft rounded-full px-3 py-1 mb-3">
                {post.tag}
              </span>
              <h3
                className="font-serif text-ink mb-2 group-hover:text-tag-blue-deep transition-colors"
                style={{ fontSize: "22px" }}
              >
                {post.title}
              </h3>
              <p className="text-[15px] leading-[1.55] text-ink-soft mb-3">
                {post.excerpt}
              </p>
              <p className="text-[13px] text-ink-mute">{post.read}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter band */}
      <section className="bg-cream-2 border-t border-rule">
        <div className="max-w-[1280px] mx-auto px-14 py-14 max-[900px]:px-6">
          <div className="max-w-lg">
            <h2
              className="font-serif text-ink mb-3"
              style={{ fontSize: "clamp(28px, 2.8vw, 40px)" }}
            >
              Get the OKC market <em>letter</em>
            </h2>
            <p className="text-[16px] leading-[1.55] text-ink-soft mb-6">
              Local market updates, seller tips, and behind-the-scenes looks at
              OKC real estate. No spam.
            </p>
            <form className="flex gap-3 max-[900px]:flex-col">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 rounded-full border border-rule text-[14px] text-ink placeholder:text-ink-mute focus:outline-none focus:border-tag-blue-deep transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-full bg-tag-blue text-white text-[14px] font-medium hover:bg-tag-blue-deep transition-all hover:-translate-y-px whitespace-nowrap"
              >
                subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
