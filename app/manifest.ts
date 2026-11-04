import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nikhil Nandanwar | Full Stack Developer",
    short_name: "Nikhil N.",
    description:
      "Portfolio of Nikhil Nandanwar, full stack developer in Bangalore, India. React, Next.js, Node.js, .NET, Angular, React Native.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#0c0c0c",
    theme_color: "#0c0c0c",
    lang: "en-IN",
    dir: "ltr",
    orientation: "portrait-primary",
    categories: ["portfolio", "developer", "technology"],
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png", purpose: "maskable" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
