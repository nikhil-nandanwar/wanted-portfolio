import Section from "@/components/section";
import { experience } from "@/data/site";

const monthYear = new Intl.DateTimeFormat("en-IN", {
  month: "short",
  year: "numeric",
});

export default function ExperienceSection() {
  return (
    <Section id="experience" labelledBy="experience-heading">
      <p className="m-0 text-xs font-semibold uppercase tracking-widest text-foreground/40">
        Experience
      </p>
      <h2
        id="experience-heading"
        className="mt-3 mb-10 max-w-xl text-2xl font-bold leading-tight tracking-tight sm:mt-4 sm:mb-14 sm:text-3xl md:text-4xl"
      >
        Where I&apos;ve worked.
      </h2>

      <div className="relative">
        {/* Timeline line */}
        <div
          className="absolute left-[15px] top-0 bottom-0 hidden w-px bg-gradient-to-b from-foreground/30 via-foreground/10 to-transparent md:block"
          aria-hidden="true"
        />

        <ol className="m-0 grid list-none gap-6 p-0 sm:gap-8">
          {experience.map((item) => (
            <li
              key={`${item.company}-${item.role}`}
              className="glass glow-hover group relative grid gap-4 rounded-2xl p-5 transition-all duration-300 hover:border-[var(--accent)]/40 sm:p-8 md:grid-cols-[1fr_2.5fr] md:gap-8 md:pl-12"
            >
              {/* Timeline dot */}
              <div
                className="absolute top-8 hidden size-2.5 rounded-full bg-foreground ring-4 ring-[var(--background)] transition-colors duration-300 group-hover:bg-[var(--accent)] md:block"
                aria-hidden="true"
                style={{ left: "-16px" }}
              />

              {/* Date & company */}
              <div className="space-y-1 sm:space-y-1.5">
                <p className="m-0 text-xs font-semibold tracking-wide text-foreground/50">
                  <time dateTime={item.start}>
                    {monthYear.format(new Date(`${item.start}-01`))}
                  </time>{" "}
                  –{" "}
                  <time dateTime={item.end}>
                    {monthYear.format(new Date(`${item.end}-01`))}
                  </time>
                </p>
                <p className="m-0 text-sm font-medium text-foreground/40">
                  {item.company}
                </p>
              </div>

              {/* Role & description */}
              <div>
                <h3 className="m-0 text-base font-bold leading-tight tracking-tight sm:text-lg lg:text-xl">
                  {item.role}
                </h3>
                <p className="mt-2.5 m-0 text-sm leading-6 text-foreground/50 sm:mt-3 sm:leading-7">
                  {item.description}
                </p>
                <ul
                  className="mt-4 flex list-none flex-wrap gap-1.5 p-0 sm:mt-5 sm:gap-2"
                  aria-label={`Areas of focus at ${item.company}`}
                >
                  {item.focus.map((area) => (
                    <li className="tag" key={area}>
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
