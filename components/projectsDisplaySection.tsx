import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    number: "01",
    title: "ShareVault - Secure Sharing Platform",
    description:
      "A secure file and text sharing application enabling users to share content with anyone using a simple 6-digit code. Built with modern web technologies for fast, secure, and hassle-free sharing experiences.",
    tags: ["React", "Node.js", "MongoDB", "Cloudflare R2"],
    image: "/assets/onlineClipboard.webp",
    code: "https://github.com/nikhil-nandanwar/ShareVault",
    href: "https://share-vault-mango.vercel.app/",
  },
  {
    number: "02",
    title: "GeminiChat - AI Chat Application",
    description:
      "An intelligent chat interface powered by Google Gemini AI with advanced features including conversation sharing, persistent storage, and seamless user interactions for enhanced productivity.",
    tags: ["React", "Node.js", "Google Gemini"],
    image: "/assets/geminiChat.webp",
    code: "https://github.com/nikhil-nandanwar/GeminiApp",
    href: "https://ai-by-gemini.netlify.app/",
  },
  {
    number: "03",
    title: "Mines Game - Minesweeper Game",
    description:
      "A modern web-based implementation of the classic Minesweeper game featuring adjustable difficulty levels, responsive design, and smooth gameplay for both casual and competitive players.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    image: "/assets/minesGame.webp",
    code: "https://github.com/nikhil-nandanwar/Mines",
    href: "https://mines-game.netlify.app/",
  },
];

export default function ProjectDisplaySection() {
  return (
    <section
      className="w-full scroll-mt-16 flex justify-center border-y border-t border-dashed border-foreground/25"
      id="projects"
      aria-labelledby="projects-heading"
    >
      <div className="w-full max-w-7xl border-x border-dashed border-foreground/25 px-4 py-16 sm:px-6 sm:py-24 lg:px-10 lg:py-36">
        <div className="mb-10 flex items-start justify-between gap-4 sm:mb-14">
          <h2 id="projects-heading" className="m-0 text-xs leading-normal tracking-widest uppercase text-foreground/60">Featured projects</h2>
          {/* <p className="m-0 text-xs text-foreground/60">2024 — 2026</p> */}
        </div>
        <div>
          {projects.map((project) => (
            <article className="border-t border-foreground/25 last:border-b hover:bg-hover" key={project.number}>
              <div className="grid grid-cols-[2rem_minmax(0,1fr)] gap-6 py-6 sm:gap-x-6 lg:grid-cols-[2rem_minmax(0,1.1fr)_minmax(0,1fr)_auto] lg:items-start lg:gap-x-8">
                <span className="text-xs text-foreground/50" aria-hidden="true">
                  {project.number}
                </span>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1920}
                  height={892}
                  className="col-start-2 aspect-video h-auto w-full rounded object-cover lg:col-start-auto"
                />
                <div className="col-start-2 min-w-0 lg:col-start-auto">
                  <h3 className="mt-0 mb-3 text-xl font-medium leading-tight tracking-tight wrap-anywhere sm:text-2xl">
                    {project.title}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </h3>
                  <p className="m-0 leading-7 text-foreground/65">
                    {project.description}
                  </p>
                  <ul
                    className="mt-6 m-0 flex list-none flex-wrap gap-2 p-0"
                    aria-label={`Technologies used for ${project.title}`}
                  >
                    {project.tags.map((tag) => (
                      <li className="rounded-full border border-foreground/30 px-3 py-1.5 text-xs" key={tag}>
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <Link
                      className="inline-flex min-h-10 items-center justify-center border border-foreground/35 px-4 text-xs font-medium tracking-wide uppercase transition-colors hover:border-foreground hover:bg-foreground hover:text-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Code
                      <span className="ml-2 text-sm" aria-hidden="true">↗</span>
                      <span className="sr-only"> (opens in a new tab)</span>
                    </Link>
                    <Link
                      className="inline-flex min-h-10 items-center justify-center bg-foreground px-4 text-xs font-medium tracking-wide uppercase text-background transition-opacity hover:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live demo
                      <span className="ml-2 text-sm" aria-hidden="true">↗</span>
                      <span className="sr-only"> (opens in a new tab)</span>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

    </section>
  );
}
