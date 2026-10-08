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
    default: "Full Stack Developer | Nikhil Nandanwar",
    template: "%s | Nikhil Nandanwar",
  },
  description: siteDescription,
  alternates: {
    canonical: "/",
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
    type: "website",
    url: "https://www.nixhil.dev",
    title: "Full Stack Developer | Nikhil Nandanwar",
    description: siteDescription,
    siteName,
    locale: "en_IN",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Full Stack Developer | Nikhil Nandanwar",
    description: siteDescription,
    images: [socialImage],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f0efef",
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
