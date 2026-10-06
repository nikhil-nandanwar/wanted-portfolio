import Link from "next/link";
export default function TopNavbarSection() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full border-b border-dashed border-foreground/25 bg-background">
      <nav
        className="mx-auto flex min-h-16 w-full max-w-7xl items-center justify-between gap-1 border-x border-dashed border-foreground/25 px-2 sm:min-h-18 sm:gap-3 sm:px-6 md:min-h-16 lg:px-10"
        aria-label="Primary navigation"
      >
        <Link
          className="flex min-h-11 shrink-0 items-center text-md font-extrabold tracking-tighter sm:text-lg"
          href="#top"
          aria-label="Nikhil Nandanwar, home"
        >
          NN<span className="opacity-45">.</span>
        </Link>
        <div className="flex min-w-0 items-center gap-0 sm:gap-4 md:gap-8 lg:gap-12">
          <Link className="flex min-h-11 items-center px-1 text-[0.625rem] tracking-wide uppercase transition-opacity hover:opacity-60 sm:text-xs" href="#about">
            About
          </Link>
          <Link className="flex min-h-11 items-center px-1 text-[0.625rem] tracking-wide uppercase transition-opacity hover:opacity-60 sm:text-xs" href="#skills">
            Skills
          </Link>
          <Link className="flex min-h-11 items-center px-1 text-[0.625rem] tracking-wide uppercase transition-opacity hover:opacity-60 sm:text-xs" href="#projects">
            Projects
          </Link>
          <Link className="flex min-h-11 items-center px-1 text-[0.625rem] tracking-wide uppercase transition-opacity hover:opacity-60 sm:text-xs" href="https://blogs.nixhil.dev/" target="_blank" rel="noopener noreferrer">
            Blog
          </Link>
          <Link className="hidden min-h-11 items-center px-1 text-[0.625rem] tracking-wide uppercase transition-opacity hover:opacity-60 sm:flex sm:text-xs" href="https://drive.google.com/file/d/1MORUESGlncs5203DXM_q7Sq6imkNaXYK/view" target="_blank" rel="noopener noreferrer">
            Resume
          </Link>
        </div>
      </nav>
    </header>
  );
}
