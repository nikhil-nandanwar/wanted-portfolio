export default function AboutSection() {
  return (
    <section
      className="mx-auto w-full max-w-6xl border-t border-foreground/25 px-4 py-24 sm:px-6 lg:px-10 lg:py-36"
      id="about"
      aria-labelledby="about-heading"
    >
      <p className="m-0 text-xs leading-normal tracking-widest uppercase text-foreground/60">About me</p>
      <div className="mt-16 grid gap-12 md:grid-cols-5 md:gap-16 lg:gap-28">
        <h2 id="about-heading" className="m-0 max-w-3xl text-section-title font-medium tracking-heading wrap-anywhere md:col-span-3">
          I care about the space between useful and memorable.
        </h2>
        <div className="max-w-lg md:col-span-2">
          <p className="mt-0 mb-6 leading-7 text-foreground/70">
            My approach combines clean code with deliberate design. I enjoy
            turning early ideas into focused, accessible products that work just
            as well as they look.
          </p>
          <p className="mt-0 mb-6 leading-7 text-foreground/70">
            Away from the screen, I&apos;m usually exploring new tools,
            collecting visual references, or learning something I can bring into
            the next project.
          </p>
        </div>
      </div>
    </section>
  );
}
