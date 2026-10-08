import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const siteName = "Nikhil Nandanwar";
const siteDescription =
  "Nikhil Nandanwar is a full stack developer building thoughtful, accessible web applications with React, Node.js, MongoDB, and Next.js. Explore his work.";
const socialImage = {
  url: "/assets/preview.webp",
  width: 1907,
  height: 890,
  alt: "Nikhil Nandanwar full stack developer portfolio",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nixhil.dev"),
  title: {
    default: "Nikhil Nandanwar | Full Stack Developer (React, Next.js, Node.js, .NET)",
    template: "%s | Nikhil Nandanwar",
  },
  description: siteDescription,
  applicationName: "Nikhil Nandanwar Portfolio",
  authors: [{ name: "Nikhil Nandanwar", url: "https://www.nixhil.dev" }],
  creator: "Nikhil Nandanwar",
  publisher: "Nikhil Nandanwar",
  keywords: [
    "Nikhil Nandanwar", "full stack developer", "React developer", "Next.js developer",
    "Node.js developer", ".NET developer", "React Native developer", "web developer India",
    "freelance full stack developer", "developer portfolio",
  ],
  category: "technology",
  alternates: {
    canonical: "/",
    types: { "application/rss+xml": [] }, // add your blog feed URL here if it has one
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
    type: "profile", firstName: "Nikhil", lastName: "Nandanwar", username: "nixhil_"
  },
  twitter: {
    card: "summary_large_image", creator: "@nixhil_", site: "@nixhil_",
    title: "Full Stack Developer | Nikhil Nandanwar",
    description: siteDescription,
    images: [socialImage],
  },
  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
  manifest: "/manifest.webmanifest",
  // After adding the sites to Search Console / Bing Webmaster, paste the tokens:
  verification: { google: "GOOGLE_TOKEN", other: { "msvalidate.01": "BING_TOKEN" } },
  other: { "format-detection": "telephone=no" },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f0efef" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a
          className="absolute left-2 top-2 z-100 -translate-y-20 bg-foreground px-4 py-3 text-xs uppercase text-background transition-transform focus:translate-y-0"
          href="#main-content"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
