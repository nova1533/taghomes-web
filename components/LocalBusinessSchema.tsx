import { PHONE } from "@/lib/data";

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "TAG Homes",
    description:
      "We buy houses for cash in Oklahoma City and the OKC metro. No fees, no repairs, close in 21-30 days.",
    url: "https://taghomes.co",
    telephone: PHONE,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Oklahoma City",
      addressRegion: "OK",
      addressCountry: "US",
    },
    areaServed: [
      "Oklahoma City, OK",
      "Edmond, OK",
      "Norman, OK",
      "Moore, OK",
      "Mustang, OK",
      "Choctaw, OK",
    ],
    sameAs: ["https://www.instagram.com/theandersongrouphomes"],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "40",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
