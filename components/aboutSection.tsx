import Section from "@/components/section";

export default function AboutSection() {
  return (
    <Section id="about" labelledBy="about-heading">
      <div className="border-t border-border pt-12 sm:pt-16 lg:pt-20">
        <h2
          id="about-heading"
          className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground text-balance pb-6 sm:pb-8"
        >
          About & Engineering Philosophy
        </h2>

        <div className="grid gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-16 items-start">
          {/* Main Statement */}
          <div className="lg:col-span-5">
            <p className="text-lg xs:text-xl sm:text-2xl font-bold leading-snug tracking-tight text-foreground text-balance">
              I believe great software is built at the intersection of robust architecture, strict accessibility, and deliberate design.
            </p>
            <div className="mt-6 sm:mt-8 space-y-2.5 border-l-2 border-accent pl-4 text-xs sm:text-sm font-medium text-muted">
              <p>Location: Bangalore, Karnataka, India</p>
              <p>Stack: React, Next.js, Node.js, .NET, full-stack architecture</p>
              <p>Focus: Scalable web applications and mobile experiences</p>
            </div>
          </div>

          {/* Narrative paragraphs */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-sm sm:text-base leading-relaxed text-muted text-pretty">
            <p>
              My background spans engineering frontend applications with React and Next.js, implementing
              cross-platform mobile clients with React Native, and architecting backend services with Node.js and .NET.
              I treat developer experience and end-user speed as first-class architectural constraints.
            </p>
            <p>
              Having worked across fast-moving startups and enterprise teams like Cognizant and Nabham Tech,
              I value clear ownership, pragmatic design decisions, and writing maintainable code that scales gracefully.
            </p>
            <p>
              When not writing code, I explore open web standards, document technical concepts on my blog,
              and build practical open-source utilities.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
