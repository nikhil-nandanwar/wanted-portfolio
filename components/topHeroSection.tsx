import Link from "next/link";
import Section from "@/components/section";

export default function TopHeroSection() {
  return (
    <Section id="top" labelledBy="hero-heading">
      <p className="mt-12 text-xs uppercase tracking-widest text-foreground/60 md:mt-4">
        Nikhil Nandanwar · Full Stack Developer · India
      </p>
      <h1
        id="hero-heading"
        className="mt-20 mb-12 text-5xl font-semibold leading-[0.98] wrap-anywhere sm:mb-16 sm:text-6xl md:mb-10 md:text-7xl lg:text-8xl"
      >
        <span className="sr-only">Nikhil Nandanwar, full stack developer: </span>
        I build digital
        <span className="block text-transparent [-webkit-text-stroke:1px_var(--foreground)] md:[-webkit-text-stroke-width:1.5px]">
          experiences that feel right.
        </span>
      </h1>
      <div className="w-full flex flex-col mt-30 items-start gap-10 md:flex-row  md:justify-between md:gap-12">
        <p className="m-0 md:w-2/3 text-sm leading-6 text-foreground/75 sm:text-base sm:leading-7 lg:text-lg lg:leading-8">
          I&apos;m Nikhil, a creative developer focused on thoughtful
          interfaces, strong visual systems, and beautifully simple
          interactions.
        </p>

        <div>

          <Link
            className="flex min-h-11 items-center border-b border-foreground text-xs uppercase tracking-wide whitespace-nowrap"
            href="#projects"
          >
            Explore my work <span className="ml-6" aria-hidden="true">↓</span>
          </Link>
        </div>
      </div>
    </Section>
  );
}
