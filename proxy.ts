import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Content negotiation proxy: when a client sends `Accept: text/markdown`
 * (e.g. an AI agent), rewrite the request to the /index.md route handler
 * which returns a clean markdown representation of the site.
 *
 * HTML browsers are unaffected — they never send this Accept header.
 */
export function proxy(request: NextRequest) {
  const accept = request.headers.get("accept") ?? "";

  if (accept.includes("text/markdown")) {
    const markdownUrl = new URL("/index.md", request.url);
    return NextResponse.rewrite(markdownUrl);
  }
}

export const config = {
  matcher: [
    /*
     * Run only on page routes, not on:
     * - /index.md  (the markdown route handler itself)
     * - /api/*     (API routes)
     * - /_next/*   (Next.js internals)
     * - /public assets (images, icons, etc.)
     */
    "/((?!index\\.md|api|_next/static|_next/image|_next/data|favicon\\.ico|robots\\.txt|sitemap\\.xml|.*\\.(?:png|jpg|jpeg|webp|avif|svg|ico|woff2?|ttf)).*)",
  ],
};
