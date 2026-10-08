export default function AboutSection() {
  return (
    <section
      className="mx-auto w-full scroll-mt-16 flex justify-center border-y border-t border-dashed border-foreground/25"
      id="about"
      aria-labelledby="about-heading"
    >
      <div className="w-full max-w-7xl border-x border-dashed border-foreground/25 px-4 py-16 sm:px-6 sm:py-24 lg:px-10 lg:py-36">
        <p className="m-0 text-xs leading-normal tracking-widest uppercase text-foreground/60">About me</p>
        <div className="mt-10 grid gap-10 sm:mt-16 sm:gap-12 md:grid-cols-5 md:gap-16 lg:gap-28">
          <h2 id="about-heading" className="m-0  text-3xl font-medium leading-tight tracking-tight wrap-anywhere sm:text-4xl md:col-span-3 md:text-5xl">
            I care about the space between useful and memorable.
          </h2>
          <div className=" md:col-span-2">
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
            <p className="mt-0 mb-6 leading-7 text-foreground/70">
              Nikhil Nandanwar is a full stack developer from India who builds web
              and mobile applications with React, Next.js, Node.js, MongoDB,
              Angular and .NET, and has worked as an intern at Nabham Tech,
              Cognizant and Living Pixel Labs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
