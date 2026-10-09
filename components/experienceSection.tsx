import Section from "@/components/section";
import { experience } from "@/data/site";

const monthYear = new Intl.DateTimeFormat("en-IN", {
  month: "short",
  year: "numeric",
});

export default function ExperienceSection() {
  return (
    <Section id="experience" labelledBy="experience-heading">
      <div className="grid w-full gap-14 md:grid-cols-5 md:gap-16 lg:gap-28">
        <div className="md:col-span-2 md:self-start md:sticky md:top-[40vh] md:mt-20 md:-translate-y-1/2">
          <p className="m-0 text-xs leading-normal tracking-widest uppercase text-foreground/60">Experience</p>
          <h2 id="experience-heading" className="mt-6 text-3xl font-medium leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Building with intent, from idea to interface.
          </h2>
        </div>
        <ol className="m-0 list-none p-0 md:col-span-3">
          {experience.map((item) => (
            <li className="grid gap-4 border-t border-foreground/25 py-8 sm:grid-cols-3 sm:gap-8" key={`${item.company}-${item.role}`}>
              <p className="m-0 text-xs tracking-wide uppercase text-foreground/60">
                <time dateTime={item.start}>{monthYear.format(new Date(`${item.start}-01`))}</time> -{" "}
                <time dateTime={item.end}>{monthYear.format(new Date(`${item.end}-01`))}</time>
              </p>
              <div className="sm:col-span-2">
                <h3 className="m-0 text-xl font-medium leading-tight tracking-tight sm:text-2xl">{item.role}</h3>
                <p className="mt-2 mb-5 text-xs tracking-wide uppercase text-foreground/60">{item.company}</p>
                <p className="m-0 leading-7 text-foreground/70">{item.description}</p>
                <ul className="mt-6 flex list-none flex-wrap gap-x-5 gap-y-2 p-0 text-xs uppercase text-foreground/60" aria-label={`Areas of focus at ${item.company}`}>
                  {item.focus.map((area) => <li className="before:mr-2 before:content-['/']" key={area}>{area}</li>)}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
