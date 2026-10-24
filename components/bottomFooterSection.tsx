import Link from "next/link";
import { GitHub } from "@/components/skills/github";
import { LinkedIn } from "@/components/skills/linkedIn";
import { XformerlyTwitter } from "@/components/skills/x";

const footerLinks = [
  { link: "https://github.com/nikhil-nandanwar", name: "GitHub", Icon: GitHub },
  { link: "https://x.com/nixhil_", name: "X", Icon: XformerlyTwitter },
  { link: "https://www.linkedin.com/in/nandanwar-nikhil", name: "LinkedIn", Icon: LinkedIn },
];

export default function BottomFooterSection() {
  return (
    <footer
      className="relative flex w-full justify-center"
      id="contact"
    >
      <div className="w-full max-w-6xl px-4 py-16 sm:px-8 sm:py-28 lg:px-10">
        {/* CTA section */}
        <div className="glass rounded-3xl p-6 sm:p-12 lg:p-16 text-center">
          <p className="m-0 text-xs font-semibold uppercase tracking-widest text-foreground/40">
            Get in touch
          </p>
          <h2 className="mt-4 text-2xl font-bold leading-tight tracking-tight sm:mt-6 sm:text-4xl md:text-5xl">
            Let&apos;s build something{" "}
            <span className="gradient-text">great together.</span>
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-foreground/40 sm:mt-4 sm:leading-7">
            I&apos;m always open to discussing new opportunities, interesting projects,
            or ways I can add value to your team.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
            <Link
              className="glow-hover flex min-h-12 items-center justify-center rounded-xl bg-foreground px-7 text-sm font-semibold tracking-wide text-background transition-all duration-300 hover:opacity-85"
              href="mailto:contact@nixhil.dev"
            >
              Send me an email
              <span className="ml-3" aria-hidden="true">↗</span>
            </Link>
            <Link
              className="flex min-h-12 items-center justify-center rounded-xl border border-foreground/20 px-6 text-sm font-medium tracking-wide transition-all duration-200 hover:border-foreground hover:bg-foreground hover:text-background"
              href="/documents/Nikhil_Nandanwar_Full_Stack_Developer.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
              <span className="sr-only"> (opens in a new tab)</span>
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center gap-4 text-center sm:mt-12 sm:flex-row sm:justify-between sm:text-left">
          <p className="m-0 text-xs text-foreground/30">
            &copy; {new Date().getFullYear()} Nikhil Nandanwar. Built with Next.js.
          </p>
          <nav className="flex gap-4 sm:gap-5" aria-label="Social links">
            {footerLinks.map((footerlink) => (
              <Link
                key={`${footerlink.link}-${footerlink.name}`}
                className="flex items-center justify-center rounded-xl p-2.5 text-foreground/40 transition-all duration-200 hover:bg-foreground/5 hover:text-foreground"
                href={footerlink.link}
                target="_blank"
                rel="me noopener noreferrer"
              >
                <footerlink.Icon aria-hidden="true" className="size-5" />
                <span className="sr-only">
                  {footerlink.name} (opens in a new tab)
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}