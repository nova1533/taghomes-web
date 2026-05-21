"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/", label: "home" },
  { href: "/about", label: "about" },
  { href: "/how-it-works", label: "how it works" },
  { href: "/reviews", label: "reviews" },
  { href: "/projects", label: "projects" },
  { href: "/journal", label: "journal" },
  { href: "/faq", label: "faq" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav
      className="sticky top-0 z-50 border-b border-rule"
      style={{ backgroundColor: "rgba(245, 241, 232, 0.92)", backdropFilter: "blur(8px)" }}
    >
      <div className="max-w-[1280px] mx-auto flex items-center gap-8 px-14 py-[14px] max-[900px]:px-6">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/tag-logo.png"
            alt="TAG Homes"
            width={160}
            height={96}
            className="h-24 w-auto"
            priority
          />
        </Link>

        {/* Desktop links */}
        <div className="flex items-center gap-8 ml-auto max-[900px]:hidden">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[13px] tracking-[0.04em] transition-colors relative pb-0.5 ${
                pathname === link.href
                  ? "text-tag-blue-deep after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-tag-blue-deep"
                  : "text-ink-soft hover:text-tag-blue-deep"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-2 px-5 py-2 rounded-full bg-tag-blue text-white text-[14px] font-medium tracking-[0.02em] hover:bg-tag-blue-deep transition-all hover:-translate-y-px"
          >
            get your offer
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="ml-auto p-2 hidden max-[900px]:flex flex-col gap-[5px]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="block w-5 h-px bg-ink" />
          <span className="block w-5 h-px bg-ink" />
          <span className="block w-5 h-px bg-ink" />
        </button>
      </div>

      {/* Mobile sheet */}
      {open && (
        <div className="border-t border-rule bg-cream px-6 py-5 flex flex-col gap-4">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[14px] text-ink-soft hover:text-tag-blue-deep transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-2 px-5 py-2.5 rounded-full bg-tag-blue text-white text-[14px] font-medium text-center hover:bg-tag-blue-deep transition-all"
            onClick={() => setOpen(false)}
          >
            get your offer
          </Link>
        </div>
      )}
    </nav>
  );
}
