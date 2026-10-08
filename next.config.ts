import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  images: { formats: ["image/avif", "image/webp"] },
  async redirects() {
    return [{
      source: "/:path*",
      has: [{ type: "host", value: "nixhil.dev" }],
      destination: "https://www.nixhil.dev/:path*",
      permanent: true
    }];
  },
  async headers() {
    return [{
      source: "/(.*)", headers: [
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        { key: "X-Frame-Options", value: "SAMEORIGIN" },
      ]
    }];
  },
};

export default nextConfig;
