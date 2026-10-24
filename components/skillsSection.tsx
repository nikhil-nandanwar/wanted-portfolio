// components/skillsSection.tsx
import Section from "@/components/section";
import { skills } from "@/data/site";
import { skillIcons } from "@/components/skills";

export default function SkillsSection() {
  return (
    <Section id="skills" labelledBy="skills-heading">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="m-0 text-xs font-semibold uppercase tracking-widest text-foreground/40">
            Tech Stack
          </p>
          <h2
            id="skills-heading"
            className="mt-3 max-w-xl text-2xl font-bold leading-tight tracking-tight sm:mt-4 sm:text-3xl md:text-4xl"
          >
            Tools I use to ship fast.
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-6 text-foreground/45">
          Full stack coverage — from React frontends to .NET APIs, containerized
          with Docker and deployed to the cloud.
        </p>
      </div>

      <ul className="mt-10 grid grid-cols-2 gap-2.5 sm:mt-14 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-8 sm:gap-3">
        {skills.map((skill, i) => {
          const Icon = skillIcons[skill];
          return (
            <li
              key={skill}
              className="glass glow-hover group flex min-h-24 flex-col items-center justify-center gap-2 rounded-xl p-2 text-center transition-all duration-300 hover:border-[var(--accent)]/40 motion-reduce:transition-none sm:min-h-28 sm:gap-3"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              {Icon && (
                <Icon
                  aria-hidden="true"
                  className="size-7 opacity-80 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110 sm:size-8"
                />
              )}
              <span className="truncate max-w-full px-1 text-[0.62rem] font-semibold uppercase tracking-wider text-foreground/50 transition-colors group-hover:text-foreground sm:text-[0.68rem]">
                {skill}
              </span>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}