import Link from "next/link";

export default function TopHeroSection() {
  return (
    <section
      className="mx-auto  w-full scroll-mt-16 flex justify-center border-y border-t border-dashed border-foreground/25" id="top"
      aria-labelledby="hero-heading"
    >
      <div className="w-full max-w-7xl border-x border-dashed border-foreground/25 px-4 py-16 sm:px-6 sm:py-24 lg:px-10 lg:py-36">
        <p className="mt-12 text-xs uppercase tracking-widest text-foreground/60 md:mt-4">
          Full Stack Developer · India
        </p>
        <h1
          id="hero-heading"
          className="my-20 mb-12 text-5xl font-semibold leading-[0.98]  wrap-anywhere  sm:mb-16 sm:text-6xl md:mb-10 md:text-7xl lg:text-8xl"
        >
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
          <Link
            className="flex min-h-11 items-center border-b border-foreground text-xs uppercase tracking-wide whitespace-nowrap"
            href="#projects"
          >
            Explore my work <span className="ml-6" aria-hidden="true">↓</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
