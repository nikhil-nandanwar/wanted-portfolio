import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const siteName = "Nikhil Nandanwar";
const siteDescription =
  "Nikhil Nandanwar is a full stack developer building thoughtful, accessible web applications with React, Node.js, MongoDB, and Next.js. Explore his work.";
const socialImage = {
  url: "/assets/preview-social.webp",
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
    "Nikhil Nandanwar", "full stack developer", "React developer", "Next.js developer",
    "Node.js developer", ".NET developer", "React Native developer", "web developer India",
    "freelance full stack developer", "developer portfolio","Mobile App developer", "web application developer", "software engineer", "software developer", "front-end developer", "back-end developer", "MERN stack developer", "MEAN stack developer", "JavaScript developer", "TypeScript developer", "MongoDB developer", "Express.js developer", "REST API developer", "GraphQL developer", "UI/UX designer", "responsive web design", "progressive web app (PWA) developer", "cloud computing developer", "AWS developer", "Azure developer", "Google Cloud Platform (GCP) developer", "DevOps engineer", "CI/CD pipeline developer", "agile software development practitioner"
  ],
  category: "technology",
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": [],           // add your blog feed URL here if it has one
      "text/markdown": "/index.md",         // markdown representation for AI agents
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
    type: "profile", firstName: "Nikhil", lastName: "Nandanwar", username: "nixhil_"
  },
  twitter: {
    card: "summary_large_image", creator: "@nixhil_", site: "@nixhil_",
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
    google: "",
    other: { "msvalidate.01": "AEA746E414D5C6F56EE5D86283F9E53E" },
  },
  other: { "format-detection": "telephone=no" },
};



export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-IN"
      className={`${geistSans.variable} h-full antialiased`}
    >
      <head>
        {/* Advertise the text/markdown alternate so agents can discover it */}
        <link rel="alternate" type="text/markdown" href="/index.md" />
      </head>
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
