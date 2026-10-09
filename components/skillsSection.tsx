import Section from "@/components/section";
import { skills } from "@/data/site";

export default function SkillsSection() {
  return (
    <Section id="skills" labelledBy="skills-heading">
        <p className="text-xs uppercase tracking-widest text-foreground/60">Skills</p>
        <h2 id="skills-heading" className="mt-6 text-3xl font-medium tracking-tight sm:text-5xl">
          Technical skills &amp; technologies
        </h2>
        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-8">
          {skills.map((skill) => (
            <li
              className="flex min-h-20 items-center justify-center rounded-lg border border-foreground/25 px-2 text-center text-sm font-medium transition-colors hover:bg-foreground/5"
              key={skill}
            >
              {skill}
            </li>
          ))}
        </ul>
    </Section>
  );
}
