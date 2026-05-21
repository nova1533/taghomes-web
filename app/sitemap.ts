import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://taghomes.co";
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/how-it-works`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/reviews`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/projects`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/journal`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
  ];
}
