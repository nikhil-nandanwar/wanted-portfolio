// components/skillsSection.tsx
import Section from "@/components/section";
import { skills } from "@/data/site";
import { skillIcons } from "@/components/skills";

export default function SkillsSection() {
  return (
    <Section id="skills" labelledBy="skills-heading">
      <p className="text-xs uppercase tracking-widest text-foreground/60">Skills</p>
      <h2 id="skills-heading" className="mt-6 text-3xl font-medium tracking-tight sm:text-5xl">
        Technical skills &amp; technologies
      </h2>
      <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-8">
        {skills.map((skill) => {
          const Icon = skillIcons[skill];
          return (
            <li
              key={skill}
              className="group flex min-h-28 flex-col items-center justify-center gap-4 rounded-xl border border-foreground/15 px-2 text-center transition duration-300 hover:-translate-y-1 hover:border-foreground/40 hover:bg-foreground/5 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              {Icon && (
                <Icon
                  aria-hidden="true"
                  className="size-8 opacity-70 transition duration-300 sm:size-9 [@media(hover:hover)]:grayscale group-hover:opacity-100 group-hover:grayscale-0"
                />
              )}
              <span className="text-[0.7rem] font-medium uppercase tracking-wider text-foreground/60 transition-colors group-hover:text-foreground">
                {skill}
              </span>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}