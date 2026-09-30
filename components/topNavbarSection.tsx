import Link from "next/link";
// import { ModeToggle } from "./theme/theme-toggle-button";

export default function TopNavbarSection() {
  return (
    <header>
      <nav
        className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-10 flex min-h-18 items-center justify-between gap-3 border-b border-foreground/25 md:min-h-16"
        aria-label="Primary navigation"
      >
        <Link
          className="flex min-h-11 shrink-0 items-center text-lg font-extrabold tracking-tighter"
          href="#top"
          aria-label="Nikhil Nandanwar, home"
        >
          NN<span className="opacity-45">.</span>
        </Link>
        <div className="flex min-w-0 items-center gap-2 sm:gap-4 md:gap-8 lg:gap-12">
          <Link className="text-xs tracking-wide uppercase transition-opacity hover:opacity-60 flex min-h-11 items-center" href="#work">
            Work
          </Link>
          <Link className="text-xs tracking-wide uppercase transition-opacity hover:opacity-60 hidden min-h-11 items-center md:flex" href="#experience">
            Experience
          </Link>
          <Link className="text-xs tracking-wide uppercase transition-opacity hover:opacity-60 flex min-h-11 items-center" href="#about">
            About
          </Link>
          <Link className="text-xs tracking-wide uppercase transition-opacity hover:opacity-60 flex min-h-11 items-center" href="#contact">
            Contact
          </Link>

          {/* <ModeToggle /> */}
        </div>
      </nav>
    </header>
  );
}
