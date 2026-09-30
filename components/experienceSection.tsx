const experience = [
  {
    period: "2024 — Present",
    role: "Designer & Developer",
    company: "Independent",
    description:
      "Designing and building focused digital products from early concepts through polished, responsive interfaces.",
    focus: ["Product design", "Front-end", "Design systems"],
  },
];

export default function ExperienceSection() {
  return (
    <section
      className="mx-auto w-full max-w-6xl border-t border-foreground/25 px-4 py-24 sm:px-6 lg:px-10 lg:py-36"
      id="experience"
      aria-labelledby="experience-heading"
    >
      <div className="grid gap-14 md:grid-cols-5 md:gap-16 lg:gap-28">
        <div className="md:col-span-2">
          <p className="m-0 text-xs leading-normal tracking-widest uppercase text-foreground/60">Experience</p>
          <h2
            id="experience-heading"
            className="mt-6 max-w-sm text-section-lead font-medium tracking-heading"
          >
            Building with intent, from idea to interface.
          </h2>
        </div>

        <ol className="m-0 list-none p-0 md:col-span-3">
          {experience.map((item) => (
            <li
              className="grid gap-4 border-t border-foreground/25 py-8 first:pt-0 sm:grid-cols-3 sm:gap-8"
              key={`${item.company}-${item.role}`}
            >
              <p className="m-0 text-xs tracking-wide uppercase text-foreground/60">
                {item.period}
              </p>
              <div className="sm:col-span-2">
                <h3 className="m-0 text-item-title tracking-title">
                  {item.role}
                </h3>
                <p className="mt-2 mb-5 text-xs tracking-wide uppercase text-foreground/60">
                  {item.company}
                </p>
                <p className="m-0 max-w-xl leading-7 text-foreground/70">
                  {item.description}
                </p>
                <ul
                  className="mt-6 flex list-none flex-wrap gap-x-5 gap-y-2 p-0 text-xs uppercase text-foreground/60"
                  aria-label={`Areas of focus at ${item.company}`}
                >
                  {item.focus.map((area) => (
                    <li className="before:mr-2 before:content-['/']" key={area}>
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
