"use client";

import { useState } from "react";
import Section from "@/components/section";
import { skillIcons } from "@/components/skills";

const categories = [
  {
    id: "all",
    title: "All Technologies",
    description: "Complete full-stack toolset used across production web and native mobile codebases.",
    items: [
      "React", "Next.js", "React Native", "Node.js", ".NET", "C#", "MongoDB",
      "Angular", "Docker", "SQL", "TailwindCSS", "JavaScript", "TypeScript",
      "Git", "HTML5", "CSS3", "C++"
    ],
  },
  {
    id: "frontend",
    title: "Frontend & Mobile",
    description: "Responsive interfaces, state synchronization, accessible components, and cross-platform mobile apps.",
    items: ["React", "Next.js", "React Native", "Angular", "TailwindCSS", "JavaScript", "TypeScript", "HTML5", "CSS3"],
  },
  {
    id: "backend",
    title: "Backend & Systems",
    description: "Microservices architectures, REST & GraphQL endpoints, relational and document persistence.",
    items: ["Node.js", "C#", ".NET", "MongoDB", "SQL", "C++"],
  },
  {
    id: "devops",
    title: "DevOps & Tooling",
    description: "Dockerized containerization, version control branching strategies, and CI/CD automation.",
    items: ["Docker", "Git"],
  },
];

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const currentCategory = categories.find((c) => c.id === selectedCategory) || categories[0];

  const displayedSkills = currentCategory.items.filter((skill) =>
    skill.toLowerCase().includes(searchTerm.toLowerCase().trim())
  );

  return (
    <Section id="skills" labelledBy="skills-heading">
      <div className="border-t border-[var(--border)] pt-12 sm:pt-16 lg:pt-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-8 sm:pb-10">
          <div>
            <h2
              id="skills-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground text-balance"
            >
              Technical Capabilities
            </h2>
            <p className="mt-3 max-w-xl text-sm sm:text-base leading-relaxed text-[var(--muted)] text-pretty">
              Full-stack toolset spanning client engineering, backend service orchestration, distributed databases, and containerization.
            </p>
          </div>

          {/* Interactive Search Input */}
          <div className="w-full md:w-64">
            <label htmlFor="skill-search" className="sr-only">
              Search skills
            </label>
            <div className="relative">
              <input
                id="skill-search"
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Filter tech stack..."
                className="h-10 w-full border border-[var(--border)] bg-[var(--background)] px-3 text-xs placeholder:text-[var(--muted)] text-foreground focus:outline-none focus:border-[var(--accent)]"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm("")}
                  className="absolute right-2 top-2.5 text-xs text-[var(--muted)] hover:text-foreground"
                  aria-label="Clear skill search"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div
          className="flex flex-wrap gap-1.5 sm:gap-2 pb-6"
          role="tablist"
          aria-label="Skill domains"
        >
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedCategory(cat.id)}
                className={`btn-press px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
                  isSelected
                    ? "bg-foreground text-background"
                    : "border border-[var(--border)] bg-[var(--background)] text-[var(--muted)] hover:text-foreground"
                }`}
              >
                {cat.title.split("&")[0]}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="card p-6 sm:p-8">
          <p className="text-xs sm:text-sm text-muted mb-6">
            {currentCategory.description}
          </p>

          <ul
            className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3"
            aria-label={`${currentCategory.title} technologies`}
          >
            {displayedSkills.map((skill) => {
              const Icon = skillIcons[skill];
              return (
                <li
                  key={skill}
                  className="btn-press group flex items-center gap-3 border border-border bg-background p-3 transition-colors hover:border-[var(--border-strong)]"
                >
                  {Icon && (
                    <Icon
                      aria-hidden="true"
                      className="size-5 shrink-0 opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                  )}
                  <span className="truncate text-xs font-semibold text-foreground">
                    {skill}
                  </span>
                </li>
              );
            })}
          </ul>

          {displayedSkills.length === 0 && (
            <p className="text-sm text-[var(--muted)] py-8 text-center">
              No matching technologies found for &ldquo;{searchTerm}&rdquo;.
            </p>
          )}
        </div>
      </div>
    </Section>
  );
}
