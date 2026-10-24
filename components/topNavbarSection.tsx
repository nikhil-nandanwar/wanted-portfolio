"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Blog", href: "https://blogs.nixhil.dev/", external: true },
];

export default function TopNavbarSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <header className="fixed inset-x-0 top-0 z-50 flex w-full justify-center px-3 pt-3 sm:px-6 sm:pt-4">
      <nav
        className="glass relative flex min-h-14 w-full max-w-4xl items-center justify-between rounded-2xl px-3.5 sm:px-6"
        aria-label="Primary navigation"
      >
        <Link
          className="flex shrink-0 items-center gap-2.5 text-sm font-semibold tracking-tight sm:text-base"
          href="#top"
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Nikhil Nandanwar, home"
        >
          <span className="flex size-8 items-center justify-center rounded-lg bg-foreground text-xs font-bold text-background">
            N
          </span>
          <span className="inline text-foreground">
            Nikhil<span className="text-foreground/30">.</span>
          </span>
        </Link>

        {/* Desktop / Tablet Links (>= md) */}
        <div className="hidden md:flex md:items-center md:gap-1">
          {navLinks.map((link) => (
            <Link
              className="flex min-h-10 items-center rounded-xl px-3 text-xs font-medium uppercase tracking-wide text-foreground/60 transition-all duration-200 hover:bg-foreground/5 hover:text-foreground"
              href={link.href}
              key={link.label}
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {link.label}
              {link.external && <span className="sr-only"> (opens in a new tab)</span>}
            </Link>
          ))}
          <Link
            className="ml-2 flex min-h-9 items-center rounded-xl bg-foreground px-4 text-xs font-semibold uppercase tracking-wide text-background transition-all duration-200 hover:opacity-85"
            href="/documents/Nikhil_Nandanwar_Full_Stack_Developer.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
            <span className="sr-only"> (opens in a new tab)</span>
          </Link>
        </div>

        {/* Mobile controls (< md) */}
        <div className="flex items-center gap-2 md:hidden">
          <Link
            className="flex min-h-8 items-center rounded-lg bg-foreground px-3 text-[0.7rem] font-semibold uppercase tracking-wide text-background transition-opacity hover:opacity-85"
            href="/documents/Nikhil_Nandanwar_Full_Stack_Developer.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
            <span className="sr-only"> (opens in a new tab)</span>
          </Link>

          <button
            type="button"
            className="flex size-9 items-center justify-center rounded-xl border border-foreground/15 text-foreground transition-colors hover:bg-foreground/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Overlay (< md) */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-[68px] z-40 flex flex-col bg-background/80 p-4 backdrop-blur-xl md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="glass flex flex-col gap-2 rounded-2xl p-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex min-h-12 items-center justify-between rounded-xl px-4 text-sm font-semibold tracking-wide text-foreground transition-colors hover:bg-foreground/5 hover:text-[var(--accent)]"
                {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <span>{link.label}</span>
                <span className="text-xs text-foreground/30" aria-hidden="true">
                  {link.external ? "↗" : "→"}
                </span>
              </Link>
            ))}

            <div className="my-2 h-px w-full bg-foreground/10" />

            <Link
              href="/documents/Nikhil_Nandanwar_Full_Stack_Developer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex min-h-12 items-center justify-center rounded-xl bg-foreground px-4 text-xs font-semibold uppercase tracking-wider text-background transition-opacity hover:opacity-85"
            >
              Download Resume ↗
            </Link>

            <Link
              href="mailto:contact@nixhil.dev"
              onClick={() => setMobileMenuOpen(false)}
              className="flex min-h-12 items-center justify-center rounded-xl border border-foreground/20 px-4 text-xs font-semibold uppercase tracking-wider text-foreground transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
            >
              Get In Touch ✉
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
