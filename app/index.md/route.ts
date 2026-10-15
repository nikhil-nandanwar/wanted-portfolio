import type { NextRequest } from "next/server";
import {
  skills,
  projects,
  experience,
  faqItems,
  SITE,
  LAST_MODIFIED,
} from "@/data/site";

/** Approximate token count: ~4 characters per token (GPT-4 baseline) */
function countTokens(text: string): number {
  return Math.ceil(text.length / 4);
}

function buildMarkdown(): string {
  const experienceRows = experience
    .map((e) => {
      const start = e.start.replace("-", "/");
      const end = e.end.replace("-", "/");
      return `- **${e.role}** at ${e.company} (${start} – ${end})\n  ${e.description}\n  *Stack: ${e.focus.join(", ")}*`;
    })
    .join("\n\n");

  const projectRows = projects
    .map(
      (p) =>
        `### ${p.title}\n${p.description}\n\n- **Tags:** ${p.tags.join(", ")}\n- **Live:** ${p.href}\n- **Code:** ${p.code}`
    )
    .join("\n\n");

  const faqRows = faqItems
    .map((f) => `**Q: ${f.question}**\nA: ${f.answer}`)
    .join("\n\n");

  return `# Nikhil Nandanwar — Full Stack Developer

> Personal portfolio of Nikhil Nandanwar (nixhil), a full stack developer from Bangalore, India.
> Site: ${SITE} | Last updated: ${LAST_MODIFIED}

---

## About

Nikhil Nandanwar is a full stack developer building thoughtful, accessible web and mobile applications with React, Next.js, Node.js, MongoDB, Angular and .NET.

**Contact:** contact@nixhil.dev
**GitHub:** https://github.com/nikhil-nandanwar
**LinkedIn:** https://www.linkedin.com/in/nandanwar-nikhil
**X (Twitter):** https://x.com/nixhil_
**Blog:** https://blogs.nixhil.dev/

---

## Skills

${skills.join(" · ")}

---

## Experience

${experienceRows}

---

## Projects

${projectRows}

---

## FAQ

${faqRows}
`;
}

export async function GET(_req: NextRequest): Promise<Response> {
  const markdown = buildMarkdown();
  const tokens = countTokens(markdown);

  return new Response(markdown, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "x-markdown-tokens": String(tokens),
      // Cache for 1 hour; serve stale while revalidating in background
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
