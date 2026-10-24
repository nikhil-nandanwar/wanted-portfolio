import Link from "next/link";
import Image from "next/image";
import Section from "@/components/section";
import { projects } from "@/data/site";

export default function ProjectDisplaySection() {
  return (
    <Section id="projects" labelledBy="projects-heading">
      <p className="m-0 text-xs font-semibold uppercase tracking-widest text-foreground/40">
        Featured Projects
      </p>
      <h2
        id="projects-heading"
        className="mt-3 text-2xl font-bold leading-tight tracking-tight sm:mt-4 sm:text-3xl md:text-4xl"
      >
        Things I&apos;ve built.
      </h2>

      <div className="mt-10 grid gap-6 sm:mt-14 sm:gap-8 md:gap-10">
        {projects.map((project) => (
          <article
            key={project.number}
            className="glass glow-hover group overflow-hidden rounded-2xl transition-all duration-300 hover:border-[var(--accent)]/40"
          >
            <div className="grid gap-0 lg:grid-cols-2">
              {/* Project screenshot */}
              <div className="relative overflow-hidden bg-foreground/5">
                <Image
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  width={1920}
                  height={892}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="aspect-video h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Project details */}
              <div className="flex flex-col justify-center p-5 sm:p-8 lg:p-10">
                <span className="text-xs font-bold tracking-wider text-foreground/30">
                  PROJECT {project.number}
                </span>
                <h3 className="mt-2.5 mb-3 text-lg font-bold leading-tight tracking-tight break-words sm:mt-3 sm:mb-4 sm:text-xl lg:text-2xl">
                  {project.title}
                </h3>
                <p className="m-0 text-sm leading-6 text-foreground/50 sm:leading-7">
                  {project.description}
                </p>

                {/* Tech tags */}
                <ul
                  className="mt-4 m-0 flex list-none flex-wrap gap-1.5 p-0 sm:mt-5 sm:gap-2"
                  aria-label={`Technologies used for ${project.title}`}
                >
                  {project.tags.map((tag) => (
                    <li className="tag" key={tag}>
                      {tag}
                    </li>
                  ))}
                </ul>

                {/* Action buttons */}
                <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
                  <Link
                    className="inline-flex min-h-11 items-center justify-center rounded-xl bg-foreground px-5 text-xs font-semibold tracking-wide text-background uppercase transition-all duration-200 hover:opacity-85 sm:min-h-10"
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                    <span className="ml-2" aria-hidden="true">↗</span>
                    <span className="sr-only"> for {project.title} (opens in a new tab)</span>
                  </Link>
                  <Link
                    className="inline-flex min-h-11 items-center justify-center rounded-xl border border-foreground/20 px-5 text-xs font-medium tracking-wide uppercase transition-all duration-200 hover:border-foreground hover:bg-foreground hover:text-background sm:min-h-10"
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Source Code
                    <span className="ml-2" aria-hidden="true">↗</span>
                    <span className="sr-only"> for {project.title} (opens in a new tab)</span>
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
