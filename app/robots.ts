import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: ["Googlebot", "Bingbot", "OAI-SearchBot", "GPTBot", "ChatGPT-User", "ClaudeBot",
          "Claude-SearchBot", "Claude-User", "PerplexityBot", "Perplexity-User", "Google-Extended",
          "Applebot", "Applebot-Extended", "DuckDuckBot", "CCBot", "Amazonbot"],
        allow: "/",
      },
    ],
    sitemap: "https://www.nixhil.dev/sitemap.xml",
  };
}
