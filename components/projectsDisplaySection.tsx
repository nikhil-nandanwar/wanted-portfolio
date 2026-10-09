import Link from "next/link";
import Image from "next/image";
import Section from "@/components/section";
import { projects } from "@/data/site";

export default function ProjectDisplaySection() {
  return (
    <Section id="projects" labelledBy="projects-heading">
        <div className="mb-10 flex items-start justify-between gap-4 sm:mb-14">
          <p className="m-0 text-xs leading-normal tracking-widest uppercase text-foreground/60">Featured projects</p>
          <h2 id="projects-heading" className="sr-only">Selected projects by Nikhil Nandanwar</h2>
        </div>
        <div>
          {projects.map((project) => (
            <article className="border-t border-foreground/25 transition-colors hover:bg-foreground/2 last:border-b" key={project.number}>
              <div className="grid grid-cols-[2rem_minmax(0,1fr)] gap-6 py-6 sm:gap-x-6 lg:grid-cols-[2rem_minmax(0,1.1fr)_minmax(0,1fr)_auto] lg:items-start lg:gap-x-8">
                <span className="text-xs text-foreground/50" aria-hidden="true">
                  {project.number}
                </span>
                <Image
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  width={1920}
                  height={892}
                  sizes="(min-width: 1024px) 38vw, 100vw"
                  className="col-start-2 aspect-video h-auto w-full rounded object-cover lg:col-start-auto"
                />
                <div className="col-start-2 min-w-0 lg:col-start-auto">
                  <h3 className="mt-0 mb-3 text-xl font-medium leading-tight tracking-tight wrap-anywhere sm:text-2xl">
                    {project.title}
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
                      <span className="sr-only"> for {project.title} (opens in a new tab)</span>
                    </Link>
                    <Link
                      className="inline-flex min-h-10 items-center justify-center bg-foreground px-4 text-xs font-medium tracking-wide uppercase text-background transition-opacity hover:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live demo
                      <span className="ml-2 text-sm" aria-hidden="true">↗</span>
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
