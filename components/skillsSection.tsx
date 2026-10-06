const skills = [
  "HTML5", "CSS3", "JavaScript", "React", "Node.js", "C#", ".NET",
  "Angular", "MongoDB", "C++", "SQL", "Docker", "Git", "React Native",
  "TailwindCSS", "Next.js",
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="flex w-full scroll-mt-16 justify-center border-y border-t border-dashed border-foreground/25"
      aria-labelledby="skills-heading"
    >
      <div className="w-full max-w-7xl border-x border-dashed border-foreground/25 px-4 py-16 sm:px-6 sm:py-24 lg:px-10 lg:py-36">
        <p className="text-xs uppercase tracking-widest text-foreground/60">Skills</p>
        <h2 id="skills-heading" className="mt-6 text-3xl font-medium tracking-tight sm:text-5xl">
          Technical skills &amp; technologies
        </h2>
        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-8">
          {skills.map((skill) => (
            <li
              className="flex min-h-20 items-center justify-center rounded-lg border border-foreground/25 px-2 text-center text-sm font-medium transition-colors hover:bg-hover"
              key={skill}
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
