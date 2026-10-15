import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Content negotiation proxy: when a client sends `Accept: text/markdown`
 * (e.g. an AI agent), rewrite the request to the /index.md route handler
 * which returns a clean markdown representation of the site.
 *
 * HTML browsers are unaffected — they never send this Accept header.
 *
 * All responses carry:
 *   - `Vary: Accept`  — so CDN/caches store separate entries per content type
 *   - `Link`          — advertises the markdown alternate for agent discovery
 */
export function proxy(request: NextRequest) {
  const accept = request.headers.get("accept") ?? "";
  const markdownUrl = new URL("/index.md", request.url);

  if (accept.includes("text/markdown")) {
    // Rewrite to the markdown route; Vary + Content-Type are set by the handler.
    const res = NextResponse.rewrite(markdownUrl);
    res.headers.set("Vary", "Accept");
    return res;
  }

  // HTML path: pass through but tag with Vary so caches key on Accept,
  // and add a Link header so agents that land here can find the markdown copy.
  const res = NextResponse.next();
  res.headers.set("Vary", "Accept");
  res.headers.set(
    "Link",
    `<${markdownUrl.pathname}>; rel="alternate"; type="text/markdown"`
  );
  return res;
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
