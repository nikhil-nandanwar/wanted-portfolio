"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { id: "top", label: "Home", href: "#top" },
  { id: "projects", label: "Work", href: "#projects" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "about", label: "About", href: "#about" },
  { id: "faq", label: "FAQ", href: "#faq" },
  { id: "blog", label: "Blog", href: "https://blogs.nixhil.dev/", external: true },
];

export default function TopNavbarSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("top");
  const [theme, setTheme] = useState<"system" | "light" | "dark">("system");
  const [scrolled, setScrolled] = useState(false);

  // Initialize theme
  useEffect(() => {
    const saved = localStorage.getItem("theme") as "system" | "light" | "dark" | null;
    if (saved) {
      setTheme(saved);
      if (saved === "system") {
        document.documentElement.removeAttribute("data-theme");
      } else {
        document.documentElement.setAttribute("data-theme", saved);
      }
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  };

  // Scroll detection & Active Section Spy
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionIds = ["top", "projects", "skills", "experience", "about", "faq"];
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-200 border-b  ${
        scrolled
          ? "border-border bg-(--background)/95 backdrop-blur-md"
          : "border-transparent bg-background"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10">
        {/* Brand Wordmark */}
        <Link
          className="btn-press flex items-center gap-2.5 text-base font-bold tracking-tight text-foreground"
          href="#top"
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Nikhil Nandanwar, back to top"
        >
          <span className="flex size-7 items-center justify-center bg-foreground text-xs font-black text-background">
            N
          </span>
          <span className="font-semibold tracking-tight">Nikhil Nandanwar</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:items-center lg:gap-6" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = !link.external && activeSection === link.id;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`relative py-1 text-xs uppercase tracking-wider font-semibold transition-colors ${
                  isActive
                    ? "text-foreground font-bold"
                    : "text-muted hover:text-foreground"
                }`}
                {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {link.label}
                {isActive && (
                  <span
                    className="absolute inset-x-0 -bottom-1 h-0.5 bg-accent"
                    aria-hidden="true"
                  />
                )}
                {link.external && <span className="sr-only"> (opens in a new tab)</span>}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Right Controls (Theme Toggle + Resume) */}
        <div className="hidden lg:flex lg:items-center lg:gap-3">
          {/* Interactive Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="btn-press flex size-9 items-center justify-center border border-border text-foreground hover:bg-foreground/5"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            {theme === "dark" ? (
              <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
            ) : (
              <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            )}
          </button>

          <Link
            className="btn-press inline-flex h-9 items-center justify-center bg-foreground px-4 text-xs font-semibold uppercase tracking-wider text-background hover:bg-foreground/90"
            href="/documents/Nikhil_Nandanwar_Full_Stack_Developer.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
            <span className="sr-only"> (opens in a new tab)</span>
          </Link>
        </div>

        {/* Tablet / Mobile controls (< lg) */}
        <div className="flex items-center gap-2 lg:hidden">
          {/* Mobile Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            className="btn-press flex size-10 items-center justify-center border border-border text-foreground hover:bg-foreground/5"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            {theme === "dark" ? (
              <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
            ) : (
              <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            )}
          </button>

          {/* Menu Hamburger / Close */}
          <button
            type="button"
            className="btn-press flex size-10 items-center justify-center border border-border text-foreground hover:bg-foreground/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileMenuOpen ? (
              <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Responsive Overlay) */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="fixed inset-x-0 top-16 bottom-0 z-40 flex flex-col justify-between bg-background px-6 py-6 overflow-y-auto lg:hidden border-t border-border"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <div className="flex flex-col divide-y divide-border">
            {navLinks.map((link) => {
              const isActive = !link.external && activeSection === link.id;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex min-h-12 items-center justify-between py-3 text-base font-semibold tracking-tight transition-colors ${
                    isActive ? "text-accent" : "text-foreground hover:text-accent"
                  }`}
                  {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-muted" aria-hidden="true">
                    {link.external ? "↗" : "→"}
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="pt-6 space-y-3 pb-safe">
            <Link
              href="/documents/Nikhil_Nandanwar_Full_Stack_Developer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-press flex min-h-12 w-full items-center justify-center bg-foreground text-xs font-semibold uppercase tracking-wider text-background"
            >
              Download Resume
            </Link>
            <Link
              href="mailto:contact@nixhil.dev"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-press flex min-h-12 w-full items-center justify-center border border-(--border-strong) bg-transparent text-xs font-semibold uppercase tracking-wider text-foreground"
            >
              contact@nixhil.dev
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
