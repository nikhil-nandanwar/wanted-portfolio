// import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function BottomFooterSection() {
  return (
    <footer
      className="mx-auto w-full max-w-6xl border-x border-t border-dashed border-foreground/25 px-4 pt-16 pb-9 sm:px-6 sm:pt-24 lg:px-10 lg:pt-36"
      id="contact"
    >
      <h2 className="m-0 text-xs leading-normal tracking-widest uppercase text-foreground/60">Have a project in mind?</h2>
      <Link
        className="my-7 mb-16 flex min-h-11 items-end justify-between gap-4 border-b-2 border-foreground pb-5 text-3xl font-medium leading-tight tracking-tight wrap-anywhere sm:text-4xl sm:pb-7 md:mb-28 md:text-5xl"
        href="mailto:nikhilnandanwar429@gmail.com"
      >
        Let&apos;s work together{" "}
        <span className="text-3xl md:text-5xl" aria-hidden="true">
          {/* <ArrowUpRightIcon /> */}
        </span>
      </Link>
      <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
        <p className="m-0 flex items-center text-xs text-foreground/60">
          <span className="mr-1 flex w-2 text-base" aria-hidden="true">&copy;</span>
          {new Date().getFullYear()} Nikhil Nandanwar
        </p>
        <nav className="flex gap-6 md:gap-12" aria-label="Social links">
          <Link
            className="text-xs tracking-wide uppercase transition-opacity hover:opacity-60"
            href="https://github.com/nikhil-nandanwar"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub<span className="sr-only"> (opens in a new tab)</span>
          </Link>
          <Link
            className="text-xs tracking-wide uppercase transition-opacity hover:opacity-60"
            href="https://www.linkedin.com/in/nandanwar-nikhil"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn<span className="sr-only"> (opens in a new tab)</span>
          </Link>
        </nav>
      </div>
    </footer>
  );
}
