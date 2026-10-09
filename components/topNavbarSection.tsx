import Link from "next/link";

const navLinks = [
  {
    flag: false,
    label: "About",
    href: "#about"
  },
  {
    flag: false,
    label: "Skills",
    href: "#skills"
  },
  {
    flag: false,
    label: "Projects",
    href: "#projects"
  },
  {
    flag: false,
    label: "Experience",
    href: "#experience"
  },
  {
    flag: true,
    label: "FAQ",
    href: "#faq"
  },
  {
    flag: false,
    label: "Contact",
    href: "#contact"
  },
  {
    flag: false,
    label: "Blog",
    href: "https://blogs.nixhil.dev/", external: true
  },
  {
    flag: false,
    label: "Resume",
    href: "/documents/Nikhil_Nandanwar_Full_Stack_Developer.pdf", external: true
  },
];

export default function TopNavbarSection() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full border-b border-dashed border-foreground/25 bg-background">
      <nav className="mx-auto flex min-h-16 w-full max-w-7xl items-center gap-4 border-x border-dashed border-foreground/25 px-2 sm:min-h-18 sm:px-6 lg:px-10" aria-label="Primary navigation">
        <Link className="flex min-h-11 shrink-0 items-center text-md font-extrabold tracking-tighter sm:text-lg" href="#top" aria-label="Nikhil Nandanwar, home">
          NN<span className="opacity-45">.</span>
        </Link>
        <div className="flex min-w-0 flex-1 items-center justify-end gap-0 overflow-x-auto sm:gap-4 md:gap-8 lg:gap-12">
          {navLinks.map((link) => (
            <Link
              className={`flex min-h-11 shrink-0 items-center px-1 text-[0.625rem] tracking-wide uppercase transition-opacity hover:opacity-60 sm:text-xs ${link.flag ? "sr-only" : ""}`}
              href={link.href}
              key={link.label}
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {link.label}
              {link.external && <span className="sr-only"> (opens in a new tab)</span>}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
