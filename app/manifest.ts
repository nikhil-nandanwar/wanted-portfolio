import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Nikhil Nandanwar | Full Stack Developer",
        short_name: "Nikhil N.",
        description: "Portfolio of Nikhil Nandanwar, full stack developer.",
        start_url: "/",
        display: "standalone",
        background_color: "#f0efef",
        theme_color: "#f0efef",
    };
}