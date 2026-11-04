import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const siteName = "Nikhil Nandanwar";
const siteDescription =
  "Nikhil Nandanwar is a full stack developer building thoughtful, accessible web applications with React, Node.js, MongoDB, and Next.js. Explore his work.";
const socialImage = {
  url: "https://www.nixhil.dev/assets/preview-social.webp",
  width: 1200,
  height: 630,
  alt: "Nikhil Nandanwar full stack developer portfolio",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nixhil.dev"),
  title: {
    default: "Nikhil Nandanwar | Full Stack Developer",
    template: "%s | Nikhil Nandanwar",
  },
  description: siteDescription,
  applicationName: "Nikhil Nandanwar Portfolio",
  authors: [{ name: "Nikhil Nandanwar", url: "https://www.nixhil.dev" }],
  creator: "Nikhil Nandanwar",
  publisher: "Nikhil Nandanwar",
  keywords: [
    "Nikhil Nandanwar",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    ".NET",
    "TypeScript",
    "Portfolio",
    "Software Engineer",
  ],
  category: "technology",
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": [],
      "text/markdown": "/index.md",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    url: "https://www.nixhil.dev",
    title: "Full Stack Developer | Nikhil Nandanwar",
    description: siteDescription,
    siteName,
    locale: "en_IN",
    images: [socialImage],
    type: "profile",
    firstName: "Nikhil",
    lastName: "Nandanwar",
    username: "nixhil_",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@nixhil_",
    site: "@nixhil_",
    title: "Full Stack Developer | Nikhil Nandanwar",
    description: siteDescription,
    images: [socialImage],
  },
  icons: {
    icon: "/assets/codeLogo.webp",
    apple: "/icons/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
  verification: {
    google: "G1KEugmB96eEfAR6EwZB0Zw0zAEDtsHtUhB0XgGeRq8",
    other: { "msvalidate.01": "AEA746E414D5C6F56EE5D86283F9E53E" },
  },
  other: { "format-detection": "telephone=no" },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0c0c" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-IN"
      className={`${geistSans.variable} h-full antialiased`}
    >
      <head>
        <link rel="alternate" type="text/markdown" href="/index.md" />
      </head>
      <body className="min-h-full flex flex-col selection:bg-accent selection:text-white">
        <a
          className="absolute left-4 top-4 z-100 -translate-y-20 bg-foreground px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-background transition-transform focus:translate-y-0 rounded-none border border-foreground focus:outline-none focus:ring-2 focus:ring-accent"
          href="#main-content"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
