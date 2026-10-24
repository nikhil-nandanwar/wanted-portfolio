import Section from "@/components/section";

export default function AboutSection() {
  return (
    <Section id="about" labelledBy="about-heading">
      <p className="m-0 text-xs font-semibold uppercase tracking-widest text-foreground/40">
        About Me
      </p>
      <div className="mt-8 grid gap-8 sm:mt-14 md:grid-cols-5 md:gap-16 lg:gap-24">
        <h2
          id="about-heading"
          className="m-0 text-2xl font-bold leading-tight tracking-tight wrap-anywhere sm:text-3xl md:col-span-3 md:text-4xl"
        >
          I care about craft — making things that are{" "}
          <span className="gradient-text">useful, fast, and memorable.</span>
        </h2>
        <div className="md:col-span-2">
          <p className="mt-0 mb-4 text-sm leading-6 text-foreground/50 sm:mb-5 sm:leading-7">
            My approach combines clean architecture with deliberate design. I enjoy
            turning early ideas into focused, accessible products that work just
            as well as they look.
          </p>
          <p className="mt-0 mb-4 text-sm leading-6 text-foreground/50 sm:mb-5 sm:leading-7">
            I thrive in collaborative environments, move fast with clear ownership,
            and care deeply about the developer experience — both for users and
            teams I work with.
          </p>
          <p className="sr-only mt-0 mb-5 leading-7 text-foreground/50">
            Nikhil Nandanwar is a full stack developer from India who builds web
            and mobile applications with React, Next.js, Node.js, MongoDB,
            Angular and .NET, and has worked as an intern at Nabham Tech,
            Cognizant and Living Pixel Labs.
          </p>
        </div>
      </div>
    </Section>
  );
}
