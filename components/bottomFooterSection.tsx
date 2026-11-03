"use client";

import { useState } from "react";
import Link from "next/link";
import { GitHub } from "@/components/skills/github";
import { LinkedIn } from "@/components/skills/linkedIn";
import { XformerlyTwitter } from "@/components/skills/x";

const footerLinks = [
  { link: "https://github.com/nikhil-nandanwar", name: "GitHub", Icon: GitHub },
  { link: "https://x.com/nixhil_", name: "X (Twitter)", Icon: XformerlyTwitter },
  { link: "https://www.linkedin.com/in/nandanwar-nikhil", name: "LinkedIn", Icon: LinkedIn },
];

export default function BottomFooterSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("contact@nixhil.dev");
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="relative flex w-full justify-center border-t border-[var(--border)] bg-[var(--background)]"
      id="contact"
    >
      <div className="w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-20 lg:px-10">
        {/* Main CTA Container */}
        <div className="card p-6 sm:p-10 lg:p-14">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground text-balance">
              Let&apos;s build something enduring.
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg leading-relaxed text-[var(--muted)] text-pretty">
              I am open to software engineering opportunities, contract projects, and architecture consultations.
              Feel free to reach out directly.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:items-center sm:flex-wrap gap-3 sm:gap-4">
              <Link
                className="btn-press flex h-12 w-full sm:w-auto items-center justify-center bg-foreground px-7 text-xs font-semibold uppercase tracking-wider text-background hover:bg-foreground/90"
                href="mailto:contact@nixhil.dev"
              >
                Send Direct Email
              </Link>

              {/* 1-Click Copy Email */}
              <button
                type="button"
                onClick={copyEmail}
                className="btn-press flex h-12 w-full sm:w-auto items-center justify-center border border-[var(--border-strong)] bg-transparent px-6 text-xs font-semibold uppercase tracking-wider text-foreground hover:bg-foreground/5"
                aria-live="polite"
              >
                {copied ? "✓ Copied Email" : "Copy contact@nixhil.dev"}
              </button>

              <Link
                className="btn-press flex h-12 w-full sm:w-auto items-center justify-center border border-[var(--border)] px-5 text-xs font-semibold uppercase tracking-wider text-[var(--muted)] hover:text-foreground hover:bg-foreground/5"
                href="/documents/Nikhil_Nandanwar_Full_Stack_Developer.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
                <span className="sr-only"> (opens in a new tab)</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Closing Bar */}
        <div className="mt-12 sm:mt-16 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between border-t border-[var(--border)] pt-8">
          <div>
            <p className="text-sm font-bold tracking-tight text-foreground">
              Nikhil Nandanwar
            </p>
            <p className="mt-1 text-xs text-[var(--muted)]">
              &copy; {new Date().getFullYear()} Nikhil Nandanwar. Built with Next.js, React 19, and Tailwind CSS.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Social Links with Accessible Hit Targets */}
            <nav className="flex items-center gap-2" aria-label="Social Profiles">
              {footerLinks.map((item) => (
                <Link
                  key={item.link}
                  className="btn-press flex size-11 items-center justify-center border border-[var(--border)] text-foreground hover:bg-foreground/5 hover:border-[var(--border-strong)]"
                  href={item.link}
                  target="_blank"
                  rel="me noopener noreferrer"
                  aria-label={item.name}
                >
                  <item.Icon aria-hidden="true" className="size-5" />
                </Link>
              ))}
            </nav>

            {/* Back to top button */}
            <button
              type="button"
              onClick={scrollToTop}
              className="btn-press flex size-11 items-center justify-center border border-[var(--border)] text-foreground hover:bg-foreground/5"
              aria-label="Scroll back to top of page"
              title="Back to top"
            >
              ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
