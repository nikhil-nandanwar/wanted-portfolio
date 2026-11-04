"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Section from "@/components/section";

export default function TopHeroSection() {
  const [copied, setCopied] = useState(false);
  const [istTime, setIstTime] = useState("");

  // Live Bangalore Time (IST: UTC+5:30)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setIstTime(new Intl.DateTimeFormat("en-IN", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("contact@nixhil.dev");
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <Section id="top" labelledBy="hero-heading" className="pt-8 sm:pt-16 lg:pt-24">
      <div className="flex flex-col items-start text-left max-w-4xl">
        {/*
          H1: Primary keyword target.
          "Full-stack developer" + name both appear above the fold for fast crawl pickup.
        */}
        <h1
          id="hero-heading"
          className="text-3xl xs:text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-foreground leading-[1.08] text-balance"
        >
          Full-stack developer building resilient software.
        </h1>

        {/*
          Supporting paragraph: self-contained, citable intro (~40 words).
          Leads with the name + location + skills for AI Overview extraction.
        */}
        <p className="mt-5 sm:mt-6 max-w-2xl text-base sm:text-lg lg:text-xl leading-relaxed text-muted text-pretty">
          I&apos;m{" "}
          <strong className="text-foreground font-semibold">Nikhil Nandanwar</strong>,
          a full stack developer based in{" "}
          <strong className="text-foreground font-semibold">Bangalore, India</strong>.
          I engineer end-to-end web and mobile applications with React, Next.js, Node.js, and .NET —
          focusing on high performance, thorough accessibility, and clean systems architecture.
        </p>

        {/* Live IST time — signals freshness to crawlers */}
        {istTime && (
          <p className="mt-3 text-xs text-muted tabular-nums" aria-label="Current time in Bangalore">
            <span aria-hidden="true">🕐 </span>Bangalore time: <time dateTime={new Date().toISOString()}>{istTime}</time>
          </p>
        )}

        {/* Interactive Responsive Action Buttons */}
        <div className="mt-8 sm:mt-10 flex w-full flex-col sm:flex-row sm:w-auto sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
          <Link
            className="btn-press flex h-12 w-full sm:w-auto items-center justify-center bg-foreground px-7 text-sm font-semibold tracking-wide text-background hover:bg-foreground/90"
            href="#projects"
          >
            Explore Projects
          </Link>

          {/* Interactive Copy Email Button */}
          <button
            type="button"
            onClick={copyEmail}
            className="btn-press flex h-12 w-full sm:w-auto items-center justify-center border border-(--border-strong) bg-transparent px-5 text-sm font-semibold tracking-wide text-foreground hover:bg-foreground/5 relative"
            aria-live="polite"
          >
            {copied ? (
              <span className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                Copied contact@nixhil.dev
              </span>
            ) : (
              <span className="inline-flex items-center gap-2">
                <svg className="size-4 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
                </svg>
                Copy Email
              </span>
            )}
          </button>

          <Link
            className="btn-press flex h-12 w-full sm:w-auto items-center justify-center border border-border px-5 text-sm font-medium text-muted hover:text-foreground hover:bg-foreground/5"
            href="/documents/Nikhil_Nandanwar_Full_Stack_Developer.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
            <span className="sr-only"> (opens in a new tab)</span>
          </Link>
        </div>
      </div>
    </Section>
  );
}
