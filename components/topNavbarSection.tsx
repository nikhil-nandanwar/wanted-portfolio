import Link from "next/link";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
  { label: "Blog", href: "https://blogs.nixhil.dev/", external: true },
  { label: "Resume", href: "https://drive.google.com/file/d/1MORUESGlncs5203DXM_q7Sq6imkNaXYK/view", external: true },
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
              className="flex min-h-11 shrink-0 items-center px-1 text-[0.625rem] tracking-wide uppercase transition-opacity hover:opacity-60 sm:text-xs"
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
