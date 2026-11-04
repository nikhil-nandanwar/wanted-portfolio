import type { MetadataRoute } from "next";
import { LAST_MODIFIED, SITE } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 1,
      images: [
        `${SITE}/assets/preview-social.webp`,
        `${SITE}/assets/preview.webp`,
      ],
      // Alternate: Markdown version for AI crawlers that prefer plain text
      alternates: {
        languages: {
          "en-IN": `${SITE}`,
        },
      },
    },
  ];
}
