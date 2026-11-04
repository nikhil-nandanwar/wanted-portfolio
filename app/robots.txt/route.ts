const contentSignal = "Content-Signal: ai-train=yes, search=yes, ai-input=yes";

const robotsGroup = (userAgents: string[]) =>
  `${userAgents.map((userAgent) => `User-agent: ${userAgent}`).join("\n")}
${contentSignal}
Allow: /`;

const robotsTxt = `# Public crawler policy for nixhil.dev
# Unknown crawlers inherit the same public-content policy.
${robotsGroup(["*"])}

# Search crawlers
${robotsGroup([
  "Googlebot",
  "GoogleOther",
  "Google-InspectionTool",
  "Bingbot",
  "DuckDuckBot",
  "Applebot",
  "YandexBot",
  "Baiduspider",
])}

# AI search and answer crawlers
${robotsGroup([
  "OAI-SearchBot",
  "ChatGPT-User",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Agent",
  "Amazonbot",
])}

# AI training and grounding crawlers
${robotsGroup(["GPTBot", "ClaudeBot", "Google-Extended"])}

# Social preview and professional-network crawlers
${robotsGroup([
  "facebookexternalhit",
  "LinkedInBot",
  "Twitterbot",
  "Slackbot",
  "Discordbot",
])}

Sitemap: https://www.nixhil.dev/sitemap.xml
`;

export function GET(): Response {
  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "X-Robots-Tag": "noindex",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
