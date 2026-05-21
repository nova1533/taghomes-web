import Link from "next/link";
import Image from "next/image";
import { PHONE } from "@/lib/data";

const LINKS = [
  { href: "/", label: "home" },
  { href: "/about", label: "about" },
  { href: "/how-it-works", label: "how it works" },
  { href: "/reviews", label: "reviews" },
  { href: "/projects", label: "projects" },
  { href: "/journal", label: "journal" },
  { href: "/faq", label: "faq" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-cream border-t border-rule">
      <div className="max-w-[1280px] mx-auto px-14 py-16 max-[900px]:px-6">
        <div className="grid grid-cols-3 gap-12 max-[900px]:grid-cols-1">
          {/* Logo */}
          <div>
            <Image
              src="/tag-logo.png"
              alt="TAG Homes"
              width={240}
              height={180}
              className="h-[180px] w-auto"
            />
          </div>

          {/* Explore */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-ink-mute mb-6">Explore</p>
            <div className="flex flex-col gap-3">
              {LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[14px] text-ink-soft hover:text-tag-blue-deep transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-ink-mute mb-6">Contact</p>
            <div className="flex flex-col gap-3">
              <a
                href={`tel:${PHONE.replace(/\D/g, "")}`}
                className="text-[18px] font-serif text-ink hover:text-tag-blue-deep transition-colors"
              >
                {PHONE}
              </a>
              <a
                href="https://instagram.com/theandersongrouphomes"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] text-ink-soft hover:text-tag-blue-deep transition-colors"
              >
                @theandersongrouphomes
              </a>
              <Link
                href="/contact"
                className="mt-4 inline-block px-5 py-2 rounded-full bg-tag-blue text-white text-[14px] font-medium text-center hover:bg-tag-blue-deep transition-all hover:-translate-y-px"
              >
                request an offer
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-rule flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-[10px] uppercase tracking-[0.28em] text-ink-mute">
            © {year} The Anderson Group
          </p>
          <p className="text-[10px] uppercase tracking-[0.28em] text-ink-mute">
            made with care in oklahoma
          </p>
        </div>
      </div>
    </footer>
  );
}
