// import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const footerLinks = [
  {
    link: "https://github.com/nikhil-nandanwar",
    name: "GitHub",
    logo: ""
  },
  {
    link: "https://x.com/nixhil_",
    name: "X",
    logo: ""
  },
  {
    link: "https://www.linkedin.com/in/nandanwar-nikhil",
    name: "LinkedIn",
    logo: ""
  }
]

export default function BottomFooterSection() {
  return (
    <footer
      className="mx-auto w-full scroll-mt-16 flex justify-center border-y border-t border-dashed border-foreground/25"
      id="contact"
    >
      <div className="w-full max-w-7xl border-x border-dashed border-foreground/25 px-4 py-16 sm:px-6 sm:py-24 lg:px-10 lg:pt-26">

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

            {
              footerLinks.map((footerlink) => (
                <Link
                  key={`${footerlink.link}-${footerlink.name}-${footerlink.logo}`}
                  className="text-xs tracking-wide uppercase transition-opacity hover:opacity-60"
                  href={footerlink.link}
                  target="_blank"
                  rel="me noopener noreferrer"
                >
                  {footerlink.name}<span className="sr-only"> (opens in a new tab)</span>
                </Link>
              ))
            }
          </nav>
        </div>

      </div>
    </footer>
  );
}
