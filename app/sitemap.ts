import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.nixhil.dev",
      lastModified: "2026-10-08",
      changeFrequency: "monthly",
      priority: 1
    }
  ];
}
