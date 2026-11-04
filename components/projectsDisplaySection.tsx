"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Section from "@/components/section";
import { projects } from "@/data/site";

const categories = ["All", "Full Stack", "AI & LLM", "Interactive Web"];

const projectDetails: Record<string, { architecture: string; highlights: string[] }> = {
  "ShareVault - Secure Sharing Platform": {
    architecture: "React frontend, Node.js REST API, MongoDB document store, Cloudflare R2 object storage.",
    highlights: [
      "Ephemeral 6-digit code generation for zero-credential transfers",
      "Direct-to-storage signed upload links avoiding server memory bottleneck",
      "Automatic expiration TTL indexes on MongoDB records",
    ],
  },
  "GeminiChat - AI Chat Application": {
    architecture: "React SPA with streaming text decoder, Node.js backend proxy, Google Gemini 1.5 API.",
    highlights: [
      "Streamed chunk-by-chunk token rendering with auto-scroll handling",
      "Persistent thread storage with markdown and code syntax rendering",
      "Thread export and shareable conversation URLs",
    ],
  },
  "Mines Game - Minesweeper Game": {
    architecture: "Vanilla modern JavaScript, zero-dependency DOM matrix, CSS custom property rendering.",
    highlights: [
      "Optimized flood-fill reveal algorithm with recursive boundary checking",
      "Adjustable grid dimensions and custom mine density probabilities",
      "Zero layout shift timer and flag counter with high contrast accessibility",
    ],
  },
};

export default function ProjectDisplaySection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [expandedDetails, setExpandedDetails] = useState<Record<string, boolean>>({});

  const toggleDetails = (title: string) => {
    setExpandedDetails((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Full Stack") return project.tags.includes("Node.js") || project.tags.includes("MongoDB");
    if (activeFilter === "AI & LLM") return project.tags.includes("Google Gemini");
    if (activeFilter === "Interactive Web") return project.tags.includes("JavaScript");
    return true;
  });

  return (
    <Section id="projects" labelledBy="projects-heading">
      <div className="border-t border-border pt-12 sm:pt-16 lg:pt-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-8 sm:pb-12">
          <div>
            <h2
              id="projects-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground text-balance"
            >
              Featured Applications
            </h2>
            <p className="mt-3 max-w-xl text-sm sm:text-base leading-relaxed text-muted text-pretty">
              Production web applications engineered with clean architectural separation, robust error boundaries, and accessible interactions.
            </p>
          </div>

          {/* Interactive Category Filter Pills */}
          <div
            className="flex flex-wrap items-center gap-1.5 sm:gap-2"
            role="tablist"
            aria-label="Filter projects by category"
          >
            {categories.map((category) => {
              const isSelected = activeFilter === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveFilter(category)}
                  className={`btn-press px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
                    isSelected
                      ? "bg-foreground text-background"
                      : "border border-border bg-background text-muted hover:text-foreground"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects List */}
        <div className="space-y-10 sm:space-y-14">
          {filteredProjects.map((project, index) => {
            const isReversed = index % 2 === 1;
            const extra = projectDetails[project.title];
            const isExpanded = !!expandedDetails[project.title];

            return (
              <article
                key={project.title}
                className="card overflow-hidden transition-shadow hover:border-(--border-strong)"
              >
                <div className="grid lg:grid-cols-12 gap-0 items-stretch">
                  {/* Screenshot Visual */}
                  <div
                    className={`lg:col-span-7 bg-background flex items-center justify-center p-4 sm:p-6 lg:p-8 ${
                      isReversed ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="img-frame w-full overflow-hidden bg-black/5 dark:bg-white/5">
                      <Image
                        src={project.image}
                        alt={`Screenshot preview of ${project.title}`}
                        width={1920}
                        height={1080}
                        sizes="(min-width: 1024px) 58vw, 100vw"
                        className="w-full h-auto object-cover transition-transform duration-300 hover:scale-[1.01]"
                        priority={index === 0}
                      />
                    </div>
                  </div>

                  {/* Project Details */}
                  <div
                    className={`lg:col-span-5 flex flex-col justify-between p-5 sm:p-7 lg:p-9 border-t lg:border-t-0 ${
                      isReversed
                        ? "lg:order-1 lg:border-r lg:border-border"
                        : "lg:order-2 lg:border-l lg:border-border"
                    }`}
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                          {project.title}
                        </h3>
                      </div>

                      <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted text-pretty">
                        {project.description}
                      </p>

                      {/* Tech tags */}
                      <ul
                        className="mt-5 flex flex-wrap gap-1.5"
                        aria-label={`Technologies used for ${project.title}`}
                      >
                        {project.tags.map((tag) => (
                          <li className="tag" key={tag}>
                            {tag}
                          </li>
                        ))}
                      </ul>

                      {/* Interactive Architecture Dropdown */}
                      {extra && (
                        <div className="mt-5 border-t border-border pt-4">
                          <button
                            type="button"
                            onClick={() => toggleDetails(project.title)}
                            aria-expanded={isExpanded}
                            className="btn-press flex items-center justify-between w-full text-xs font-semibold uppercase tracking-wider text-muted hover:text-foreground"
                          >
                            <span>Architecture & Engineering Notes</span>
                            <span className="text-xs">{isExpanded ? "▲ Hide" : "▼ View"}</span>
                          </button>

                          {isExpanded && (
                            <div className="mt-3 space-y-2 text-xs leading-relaxed text-muted bg-background p-3.5 border border-border">
                              <p className="font-semibold text-foreground">
                                Stack: <span className="font-normal text-muted">{extra.architecture}</span>
                              </p>
                              <ul className="list-disc pl-4 space-y-1">
                                {extra.highlights.map((h) => (
                                  <li key={h}>{h}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Action buttons */}
                    <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-2.5 pt-4 border-t border-border">
                      <Link
                        className="btn-press flex min-h-11 sm:min-h-10 items-center justify-center bg-foreground px-5 text-xs font-semibold tracking-wide text-background uppercase"
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Launch Application
                        <span className="sr-only"> for {project.title} (opens in a new tab)</span>
                      </Link>
                      <Link
                        className="btn-press flex min-h-11 sm:min-h-10 items-center justify-center border border-(--border-strong) bg-transparent px-5 text-xs font-semibold tracking-wide text-foreground uppercase hover:bg-foreground/5"
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Source Repository
                        <span className="sr-only"> for {project.title} (opens in a new tab)</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
