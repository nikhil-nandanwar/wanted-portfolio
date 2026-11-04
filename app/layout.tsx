import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { SITE, SITE_DESCRIPTION, SITE_NAME } from "@/data/site";

const socialImage = {
  url: `${SITE}/assets/preview-social.webp`,
  width: 1200,
  height: 630,
  alt: "Nikhil Nandanwar – Full Stack Developer portfolio preview",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Nikhil Nandanwar | Full Stack Developer in Bangalore",
    template: "%s | Nikhil Nandanwar",
  },
  description: SITE_DESCRIPTION,
  applicationName: "Nikhil Nandanwar Portfolio",
  authors: [{ name: SITE_NAME, url: SITE }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  keywords: [
    "Nikhil Nandanwar",
    "Full Stack Developer Bangalore",
    "Full Stack Engineer India",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    ".NET Developer",
    "TypeScript Developer",
    "Angular Developer",
    "React Native Developer",
    "hire full stack developer India",
    "web developer Bangalore",
    "software engineer portfolio",
    "nixhil.dev",
  ],
  category: "technology",
  alternates: {
    canonical: "/",
    types: {
      "text/markdown": "/index.md",
      "text/plain": "/llms.txt",
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
    url: SITE,
    title: "Full Stack Developer in Bangalore | Nikhil Nandanwar",
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
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
    title: "Full Stack Developer in Bangalore | Nikhil Nandanwar",
    description: SITE_DESCRIPTION,
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
        <link rel="alternate" type="text/plain" href="/llms.txt" />
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
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
