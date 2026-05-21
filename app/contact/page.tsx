import type { Metadata } from "next";
import { PHONE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact - Get Your Cash Offer",
  description:
    "Tell us about your Oklahoma City home and get a fair cash offer in 24 hours. No fees, no repairs, close in 21-30 days.",
};

const CHECKLIST = [
  "Single family homes across the OKC metro",
  "Any condition, any situation, any timeline",
  "Cash offer · close in 21-30 days",
];

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-cream border-b border-rule">
        <div className="max-w-[1280px] mx-auto px-14 py-16 max-[900px]:px-6 max-[900px]:py-10">
          <p className="text-[11px] uppercase tracking-[0.22em] text-tag-blue-deep mb-4">
            get your offer
          </p>
          <h1
            className="font-serif text-ink"
            style={{ fontSize: "clamp(40px, 4.6vw, 64px)" }}
          >
            Tell us about your <em>home</em>.
          </h1>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-14 py-16 max-[900px]:px-6 max-[900px]:py-10">
        <div style={{ display: "flex", gap: "64px", alignItems: "flex-start" }} className="max-[900px]:flex-col max-[900px]:gap-10">

          {/* Left: info */}
          <div style={{ flex: "0 0 360px" }} className="max-[900px]:flex-auto">
            <p className="text-[16px] leading-[1.55] text-ink-soft mb-8">
              Fill out the form and we&apos;ll be in touch within 24 hours with a
              fair, no-obligation cash offer. No repairs required, no fees, no
              surprises.
            </p>
            <div className="flex flex-col gap-4 mb-10">
              {CHECKLIST.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="text-tag-blue mt-0.5 flex-shrink-0">✓</span>
                  <p className="text-[15px] text-ink-soft">{item}</p>
                </div>
              ))}
            </div>
            <div>
              <p className="text-[13px] uppercase tracking-[0.1em] text-ink-mute mb-2">
                or call us directly
              </p>
              <a
                href={`tel:${PHONE.replace(/\D/g, "")}`}
                className="font-serif text-ink text-[28px] hover:text-tag-blue-deep transition-colors"
              >
                {PHONE}
              </a>
            </div>
          </div>

          {/* Right: JotForm */}
          <div style={{ flex: "1 1 0", minWidth: 0 }}>
            <iframe
              id="JotFormIFrame-240295194097059"
              title="Contact Form"
              src="https://form.jotform.com/240295194097059"
              style={{ width: "100%", height: "750px", border: "none", display: "block" }}
              scrolling="no"
            />
          </div>

        </div>
      </section>
    </>
  );
}
