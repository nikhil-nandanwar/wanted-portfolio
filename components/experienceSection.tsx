"use client";

import { useState } from "react";
import Section from "@/components/section";
import { experience } from "@/data/site";

const monthYear = new Intl.DateTimeFormat("en-IN", {
  month: "short",
  year: "numeric",
});

const achievements: Record<string, string[]> = {
  "Nabham Tech": [
    "Engineered the full-stack video recording web portal and companion React Native mobile application",
    "Configured containerized microservices with Docker for seamless staging and deployment",
    "Developed robust administrative dashboards with role-based authentication and telemetry",
  ],
  Cognizant: [
    "Implemented insurance underwriting business logic within a C# / .NET microservices ecosystem",
    "Built and audited granular Role-Based Access Control (RBAC) security filters across endpoints",
    "Created modular Angular frontend views consuming asynchronous REST services with high test coverage",
  ],
  "Living Pixel Labs": [
    "Developed the official marketing site and mobile client for the AI conversational assistant",
    "Integrated live streaming chat interactions with low latency and optimistic UI updates",
    "Established scalable component primitives adhering to accessibility best practices",
  ],
};

export default function ExperienceSection() {
  const [expandedCompany, setExpandedCompany] = useState<string | null>(experience[0].company);

  const toggleCompany = (company: string) => {
    setExpandedCompany(expandedCompany === company ? null : company);
  };

  return (
    <Section id="experience" labelledBy="experience-heading">
      <div className="border-t border-[var(--border)] pt-12 sm:pt-16 lg:pt-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 pb-8 sm:pb-12">
          <div>
            <h2
              id="experience-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground text-balance"
            >
              Work Experience
            </h2>
            <p className="mt-3 max-w-xl text-sm sm:text-base leading-relaxed text-[var(--muted)] text-pretty">
              Proven engineering background across fast-paced product teams, enterprise architectures, and distributed systems.
            </p>
          </div>
        </div>

        <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
          {experience.map((item) => {
            const isExpanded = expandedCompany === item.company;
            const bullets = achievements[item.company];

            return (
              <article
                key={`${item.company}-${item.role}`}
                className="py-6 sm:py-8 grid gap-4 md:grid-cols-12 md:gap-8 items-start transition-colors"
              >
                {/* Date & Company (left column) */}
                <div className="md:col-span-4 space-y-1">
                  <p className="text-base font-bold tracking-tight text-foreground">
                    {item.company}
                  </p>
                  <p className="text-xs font-medium tabular-nums text-[var(--muted)]">
                    <time dateTime={item.start}>
                      {monthYear.format(new Date(`${item.start}-01`))}
                    </time>{" "}
                    —{" "}
                    <time dateTime={item.end}>
                      {monthYear.format(new Date(`${item.end}-01`))}
                    </time>
                  </p>
                </div>

                {/* Role & Description (right column) */}
                <div className="md:col-span-8">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <h3 className="text-base sm:text-lg font-bold tracking-tight text-foreground">
                      {item.role}
                    </h3>

                    {bullets && (
                      <button
                        type="button"
                        onClick={() => toggleCompany(item.company)}
                        className="btn-press text-xs font-semibold uppercase tracking-wider text-[var(--muted)] hover:text-foreground self-start sm:self-auto"
                        aria-expanded={isExpanded}
                      >
                        {isExpanded ? "Hide Details ▲" : "View Details ▼"}
                      </button>
                    )}
                  </div>

                  <p className="mt-2.5 text-sm sm:text-base leading-relaxed text-[var(--muted)] text-pretty">
                    {item.description}
                  </p>

                  {/* Interactive Expandable Key Deliverables */}
                  {isExpanded && bullets && (
                    <div className="mt-4 border border-[var(--border)] bg-[var(--background)] p-4 text-xs sm:text-sm text-[var(--muted)]">
                      <p className="font-semibold text-foreground mb-2">Key Contributions & Architecture:</p>
                      <ul className="list-disc pl-4 space-y-1.5">
                        {bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Focus Areas */}
                  <ul
                    className="mt-4 flex flex-wrap gap-1.5 sm:gap-2"
                    aria-label={`Core technologies used at ${item.company}`}
                  >
                    {item.focus.map((area) => (
                      <li className="tag" key={area}>
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
