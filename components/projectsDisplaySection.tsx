import Link from "next/link";

const projects = [
  {
    number: "01",
    title: "Design Systems",
    description:
      "Reusable interfaces built with clear rules, thoughtful details, and room to scale.",
    tags: ["React", "TypeScript", "Tailwind"],
    href: "https://sharevault.nixhil.dev",
  },
  {
    number: "02",
    title: "Digital Experiences",
    description:
      "Fast, responsive products that make complex ideas feel simple and intuitive.",
    tags: ["Next.js", "Motion", "Accessibility"],
    href: "https://ai-by-gemini.netlify.app/",
  },
  {
    number: "03",
    title: "Creative Development",
    description:
      "Expressive websites where visual design and front-end engineering work together.",
    tags: ["WebGL", "Interaction", "Performance"],
    href: "https://mines-game.netlify.app/",
  },
];

export default function ProjectDisplaySection() {
  return (
    <section
      className="mx-auto w-full max-w-6xl border-x border-t border-dashed border-foreground/25 px-4 py-16 sm:px-6 sm:py-24 lg:px-10 lg:py-36"
      id="work"
      aria-labelledby="work-heading"
    >
      <div className="mb-10 flex items-start justify-between gap-4 sm:mb-14">
        <h2 id="work-heading" className="m-0 text-xs leading-normal tracking-widest uppercase text-foreground/60">Selected work</h2>
        {/* <p className="m-0 text-xs text-foreground/60">2024 — 2026</p> */}
      </div>
      <div>
        {projects.map((project) => (
          <article className="border-t border-foreground/25 last:border-b hover:bg-hover- " key={project.number}>
            <Link
              className="group grid min-h-11 grid-cols-12 items-center gap-x-2 gap-y-5 py-7 sm:gap-x-3 sm:py-9 md:gap-6"
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="col-span-1 mt-2 self-start text-xs text-foreground/50" aria-hidden="true">
                {project.number}
              </span>
              <div className="col-span-11 min-w-0 md:col-span-6">
                <h3 className="mt-0 mb-3 text-xl font-medium leading-tight tracking-tight wrap-anywhere sm:text-2xl">
                  {project.title}
                  <span className="sr-only"> (opens in a new tab)</span>
                </h3>
                <p className="m-0 max-w-xl leading-7 text-foreground/65">
                  {project.description}
                </p>
              </div>
              <ul
                className="col-span-11 col-start-2 m-0 flex list-none flex-wrap gap-2 p-0 md:col-span-4 md:col-start-auto"
                aria-label={`Technologies used for ${project.title}`}
              >
                {project.tags.map((tag) => (
                  <li className="rounded-full border border-foreground/30 px-3 py-2 text-xs" key={tag}>
                    {tag}
                  </li>
                ))}
              </ul>
              <span className="hidden text-2xl transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 md:col-span-1 md:block" aria-hidden="true">
                ↗
              </span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
