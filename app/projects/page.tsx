import type { Metadata } from "next";
import Image from "next/image";
import { PROJECTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "See homes TAG Homes has purchased and renovated across the Oklahoma City metro. Real before-and-after results.",
};

export default function ProjectsPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-cream border-b border-rule">
        <div className="max-w-[1280px] mx-auto px-14 py-16 max-[900px]:px-6 max-[900px]:py-10">
          <p className="text-[11px] uppercase tracking-[0.22em] text-tag-blue-deep mb-4">
            our work
          </p>
          <h1
            className="font-serif text-ink"
            style={{ fontSize: "clamp(40px, 4.6vw, 64px)" }}
          >
            Homes we&apos;ve <em>loved</em> back to life.
          </h1>
        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-[1280px] mx-auto px-14 py-16 max-[900px]:px-6 max-[900px]:py-10">
        <div className="grid grid-cols-3 gap-4 max-[900px]:grid-cols-1">
          {PROJECTS.map((img, i) => (
            <div
              key={i}
              className={`relative rounded-[6px] overflow-hidden ${
                i === 0 ? "col-span-2 max-[900px]:col-span-1" : ""
              }`}
              style={{ aspectRatio: i === 0 ? "16/9" : "4/3" }}
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
      </section>
    </>
  );
}
