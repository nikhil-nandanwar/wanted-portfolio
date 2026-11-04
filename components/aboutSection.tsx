import Section from "@/components/section";

export default function AboutSection() {
  return (
    <Section id="about" labelledBy="about-heading">
      <div className="border-t border-border pt-12 sm:pt-16 lg:pt-20">
        <h2
          id="about-heading"
          className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground text-balance pb-6 sm:pb-8"
        >
          About &amp; Engineering Philosophy
        </h2>

        <div className="grid gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-16 items-start">
          {/* Main Statement */}
          <div className="lg:col-span-5">
            {/*
              Self-contained citable block (~60 words) for GEO/AI Overviews.
              Front-loads the most quotable definition of Nikhil's approach.
            */}
            <p className="text-lg xs:text-xl sm:text-2xl font-bold leading-snug tracking-tight text-foreground text-balance">
              I believe great software is built at the intersection of robust architecture, strict accessibility, and deliberate design.
            </p>
            <div className="mt-6 sm:mt-8 space-y-2.5 border-l-2 border-accent pl-4 text-xs sm:text-sm font-medium text-muted">
              <p>
                <span className="font-semibold text-foreground">Location:</span>{" "}
                Bangalore, Karnataka, India
              </p>
              <p>
                <span className="font-semibold text-foreground">Primary stack:</span>{" "}
                React, Next.js, TypeScript, Node.js, .NET, full-stack architecture
              </p>
              <p>
                <span className="font-semibold text-foreground">Focus:</span>{" "}
                Scalable web applications and cross-platform mobile experiences
              </p>
              <p>
                <span className="font-semibold text-foreground">Open to:</span>{" "}
                Full-time roles, contract projects, architecture consultations
              </p>
            </div>
          </div>

          {/* Narrative paragraphs */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-sm sm:text-base leading-relaxed text-muted text-pretty">
            <p>
              Nikhil Nandanwar is a full stack developer specialising in end-to-end web and mobile development.
              His background spans engineering frontend applications with React and Next.js, implementing
              cross-platform mobile clients with React Native, and architecting backend services with Node.js and .NET.
              He treats developer experience and end-user speed as first-class architectural constraints.
            </p>
            <p>
              Having worked across fast-moving startups and enterprise teams including Cognizant and Nabham Tech,
              Nikhil values clear ownership, pragmatic design decisions, and writing maintainable code that scales gracefully.
              He has built production systems ranging from insurance underwriting platforms with role-based access control
              to real-time video recording applications and AI-powered chat interfaces.
            </p>
            <p>
              When not writing code, he explores open web standards, documents technical concepts on his blog
              at blogs.nixhil.dev, and builds practical open-source utilities available on GitHub.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
