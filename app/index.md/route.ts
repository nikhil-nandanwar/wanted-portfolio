import {
  skills,
  projects,
  experience,
  faqItems,
  SITE,
  SITE_DESCRIPTION,
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

> ${SITE_DESCRIPTION}
> Site: ${SITE} | Last updated: ${LAST_MODIFIED}

---

## Who is Nikhil Nandanwar?

Nikhil Nandanwar is a full stack developer based in Bangalore, Karnataka, India. He designs and engineers accessible, high-performance web and mobile applications. His primary stack includes React, Next.js, TypeScript, Node.js, .NET, C#, Angular, MongoDB, and React Native.

**Contact:** contact@nixhil.dev
**GitHub:** https://github.com/nikhil-nandanwar
**LinkedIn:** https://www.linkedin.com/in/nandanwar-nikhil
**X (Twitter):** https://x.com/nixhil_
**Blog:** https://blogs.nixhil.dev/
**Resume:** ${SITE}/documents/Nikhil_Nandanwar_Full_Stack_Developer.pdf

---

## Skills

${skills.join(" · ")}

---

## Work Experience

${experienceRows}

---

## Featured Projects

${projectRows}

---

## Frequently Asked Questions

${faqRows}

---

## About & Engineering Philosophy

Nikhil believes great software is built at the intersection of robust architecture, strict accessibility, and deliberate design. His background spans engineering frontend applications with React and Next.js, implementing cross-platform mobile clients with React Native, and architecting backend services with Node.js and .NET.

Having worked across fast-paced startups and enterprise teams including Cognizant and Nabham Tech, Nikhil values clear ownership, pragmatic design decisions, and writing maintainable code that scales gracefully.

**Open to:** full-time software engineering roles, contract projects, and architecture consultations.
`;
}

export async function GET(): Promise<Response> {
  const markdown = buildMarkdown();
  const tokens = countTokens(markdown);

  return new Response(markdown, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Vary": "Accept",
      "Link": '</index.md>; rel="alternate"; type="text/markdown"',
      "Content-Signal": "search=yes, ai-input=yes, ai-train=yes",
      "x-markdown-tokens": String(tokens),
      // Cache for 1 hour; serve stale while revalidating in background
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
