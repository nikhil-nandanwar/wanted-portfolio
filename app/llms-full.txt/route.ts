import fs from "fs";
import path from "path";

export function GET(): Response {
  const filePath = path.join(process.cwd(), "public", "llms-full.txt");
  const content = fs.readFileSync(filePath, "utf-8");

  return new Response(content, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Vary": "Accept",
      "Content-Signal": "search=yes, ai-input=yes, ai-train=yes",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}

