export default function TopHeroSection() {
  return (
    <section
      className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-10 flex min-h-[calc(100svh-5rem)] flex-col justify-between pt-16 pb-10 md:min-h-[calc(100vh-4rem)] md:pt-12 md:pb-16 lg:pt-20 border-x border-dashed border-foreground/25 "
      id="top"
      aria-labelledby="hero-heading"
    >
      <p className="m-0 text-xs leading-normal tracking-widest uppercase text-foreground/60">
        Designer &amp; developer · India
      </p>
      <h1
        id="hero-heading"
        className="my-8 mb-12 max-w-5xl text-hero font-semibold tracking-display text-8xl wrap-anywhere sm:my-10 sm:mb-16 md:mb-20"
      >
        I build digital
        <span className="block text-transparent [-webkit-text-stroke:1px_var(--foreground)] md:[-webkit-text-stroke-width:1.5px]">
          experiences that feel right.
        </span>
      </h1>
      <div className="flex flex-col items-start gap-10 md:flex-row md:items-end md:justify-between md:gap-12">
        <p className="m-0 max-w-xl text-base leading-7 text-foreground/75 lg:text-lg lg:leading-8">
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
    </section>
  );
}
