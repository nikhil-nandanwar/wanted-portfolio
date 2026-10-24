import Link from "next/link";
import Section from "@/components/section";

export default function TopHeroSection() {
  return (
    <Section id="top" labelledBy="hero-heading">
      {/* Status badge */}
      <div className="animate-fade-in-up mt-8 sm:mt-12 md:mt-6">
        <span className="inline-flex items-center gap-2.5 rounded-full border border-foreground/10 bg-foreground/[0.03] px-3.5 py-1.5 text-xs font-medium tracking-wide text-foreground/60 sm:px-4 sm:py-2">
          <span
            className="animate-pulse-dot size-2 rounded-full bg-[var(--accent)]"
            aria-hidden="true"
          />
          Open to opportunities
        </span>
      </div>

      {/* Main heading */}
      <h1
        id="hero-heading"
        className="animate-fade-in-up delay-100 mt-8 mb-5 max-w-5xl text-3xl font-bold leading-[1.12] tracking-tight sm:mt-12 sm:mb-6 sm:text-5xl md:text-6xl lg:text-7xl"
      >
        <span className="sr-only">Nikhil Nandanwar, full stack developer: </span>
        Full Stack Developer{" "}
        <span className="gradient-text">building products</span>{" "}
        that users love.
      </h1>

      {/* Subheading */}
      <p className="animate-fade-in-up delay-200 m-0 max-w-2xl text-sm leading-6 text-foreground/50 sm:text-lg sm:leading-8">
        I&apos;m Nikhil — I design and engineer web & mobile apps with
        React, Next.js, Node.js, and .NET. Clean code, sharp UI, fast
        delivery.
      </p>

      {/* CTA buttons */}
      <div className="animate-fade-in-up delay-300 mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center">
        <Link
          className="glow-hover flex min-h-12 items-center justify-center rounded-xl bg-foreground px-6 text-sm font-semibold tracking-wide text-background transition-all duration-300 hover:opacity-85"
          href="#projects"
        >
          View my work
          <span className="ml-3" aria-hidden="true">↓</span>
        </Link>
        <Link
          className="flex min-h-12 items-center justify-center rounded-xl border border-foreground/20 px-6 text-sm font-medium tracking-wide transition-all duration-200 hover:border-foreground hover:bg-foreground hover:text-background"
          href="#contact"
        >
          Get in touch
          <span className="ml-3" aria-hidden="true">↗</span>
        </Link>
        <Link
          className="flex min-h-12 items-center justify-center rounded-xl px-4 text-sm font-medium text-foreground/40 transition-colors hover:text-foreground"
          href="/documents/Nikhil_Nandanwar_Full_Stack_Developer.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Resume →
          <span className="sr-only"> (opens in a new tab)</span>
        </Link>
      </div>

      {/* Key stats for quick scanning */}
      <div className="animate-fade-in-up delay-400 mt-12 grid max-w-3xl grid-cols-2 gap-3 sm:mt-20 sm:grid-cols-4 sm:gap-6">
        {[
          { value: "3+", label: "Internships" },
          { value: "16", label: "Technologies" },
          { value: "3+", label: "Years Coding" },
          { value: "5+", label: "Shipped Projects" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="glass rounded-xl p-3 text-center transition-all duration-300 hover:border-[var(--border-hover)] sm:px-5 sm:py-4"
          >
            <p className="text-xl font-bold tracking-tight sm:text-3xl">
              {stat.value}
            </p>
            <p className="mt-1 text-[0.65rem] font-medium uppercase tracking-wider text-foreground/40 sm:text-[0.7rem]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
