import Link from "next/link";
// import { ModeToggle } from "./theme/theme-toggle-button";

export default function TopNavbarSection() {
  return (
    <header className="fixed  w-full border-b border-foreground/25 border-dashed bg-background">
      <nav
        className="mx-auto flex min-h-16 w-full  items-center justify-between gap-2 border-x border-dashed border-foreground/25 px-3 sm:min-h-18 sm:gap-3 sm:px-6 md:min-h-16 lg:px-10"
        aria-label="Primary navigation"
      >
        <Link
          className="flex min-h-11 shrink-0 items-center text-base font-extrabold tracking-tighter sm:text-lg"
          href="#top"
          aria-label="Nikhil Nandanwar, home"
        >
          NN<span className="opacity-45">.</span>
        </Link>
        <div className="flex min-w-0 items-center gap-1 sm:gap-4 md:gap-8 lg:gap-12">
          <Link className="flex min-h-11 items-center px-1 text-[0.6875rem] tracking-wide uppercase transition-opacity hover:opacity-60 sm:text-xs" href="#work">
            Work
          </Link>
          <Link className="flex min-h-11 items-center px-1 text-[0.6875rem] tracking-wide uppercase transition-opacity hover:opacity-60 sm:text-xs" href="#experience">
            Experience
          </Link>
          <Link className="flex min-h-11 items-center px-1 text-[0.6875rem] tracking-wide uppercase transition-opacity hover:opacity-60 sm:text-xs" href="#about">
            About
          </Link>
          <Link className="flex min-h-11 items-center px-1 text-[0.6875rem] tracking-wide uppercase transition-opacity hover:opacity-60 sm:text-xs" href="#contact">
            Contact
          </Link>

          {/* <ModeToggle /> */}
        </div>
      </nav>
    </header>
  );
}
