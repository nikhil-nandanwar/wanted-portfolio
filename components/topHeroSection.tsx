export default function TopHeroSection() {
  return (
    <section
      className="mx-auto w-full flex justify-center border-y border-t border-dashed border-foreground/25" id="top"
      aria-labelledby="hero-heading"
    >
      <div className=" border-x border-dashed border-foreground/25 px-4 py-16 sm:px-6 sm:py-24 lg:px-10 lg:py-36">

        <p className="mt-10 text-xs leading-normal tracking-widest uppercase text-foreground/60">
          Designer &amp; developer · India
        </p>
        <h1
          id="hero-heading"
          className="my-8 mb-12  text-5xl font-semibold leading-[0.98] tracking-[-0.06em] wrap-anywhere sm:my-10 sm:mb-16 sm:text-6xl md:mb-20 md:text-7xl lg:text-8xl"
        >
          I build digital
          <span className="block text-transparent [-webkit-text-stroke:1px_var(--foreground)] md:[-webkit-text-stroke-width:1.5px]">
            experiences that feel right.
          </span>
        </h1>
        <div className="flex flex-col items-start gap-10 md:flex-row md:items-end md:justify-between md:gap-12">
          <p className="m-0 text-sm leading-6 text-foreground/75 sm:text-base sm:leading-7 lg:text-lg lg:leading-8">
            I&apos;m Nikhil, a creative developer focused on thoughtful
            interfaces, strong visual systems, and beautifully simple
            interactions.
          </p>
          <a
            className="flex min-h-11 items-center border-b border-foreground text-xs tracking-wide whitespace-nowrap uppercase"
            href="#work"
          >
            Explore my work{" "}
            <span className="ml-6" aria-hidden="true">
              ↓
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}
