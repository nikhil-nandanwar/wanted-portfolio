"use client";

import { useState } from "react";
import Section from "@/components/section";
import { faqItems } from "@/data/site";

export default function FAQSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const filteredFaqs = faqItems.filter(
    (item) =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section id="faq" labelledBy="faq-heading" className="sr-only">
      <div className="border-t border-border pt-12 sm:pt-16 lg:pt-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-8 sm:pb-10">
          <div>
            <h2
              id="faq-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground text-balance"
            >
              Frequently Asked Questions
            </h2>
            <p className="mt-3 max-w-xl text-sm sm:text-base leading-relaxed text-muted text-pretty">
              Quick answers concerning technical expertise, employment history, and collaborative workflow.
            </p>
          </div>

          {/* Interactive Search Field */}
          <div className="w-full md:w-64">
            <label htmlFor="faq-search" className="sr-only">
              Search FAQ
            </label>
            <input
              id="faq-search"
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search questions..."
              className="h-10 w-full border border-border bg-background px-3 text-xs placeholder:text-muted text-foreground focus:outline-none focus:border-accent"
            />
          </div>
        </div>

        {/*
          Answers are rendered in the DOM even when visually hidden via CSS,
          so search crawlers and AI agents can read all Q&A content without JS.
          The `hidden` attribute is NOT used — we use CSS visibility instead.
        */}
        <div className="space-y-3" role="region" aria-label="FAQ Accordion">
          {filteredFaqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className="card overflow-hidden transition-colors border"
                itemScope
                itemType="https://schema.org/Question"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                  className="btn-press flex w-full items-center justify-between p-5 sm:p-6 text-left"
                >
                  <span
                    className="text-base sm:text-lg font-bold tracking-tight text-foreground pr-4"
                    itemProp="name"
                  >
                    {item.question}
                  </span>
                  <span
                    className={`flex size-6 shrink-0 items-center justify-center border border-border text-xs text-foreground transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

                {/*
                  Answer is always present in the DOM (not conditionally rendered)
                  so search engines and AI crawlers can read it without JS.
                  The CSS `max-h + overflow` pattern hides it visually when closed.
                */}
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  className={`border-t border-border transition-all duration-200 ${
                    isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 overflow-hidden opacity-0"
                  }`}
                  itemScope
                  itemType="https://schema.org/Answer"
                  itemProp="acceptedAnswer"
                >
                  <p
                    className="px-5 pb-5 sm:px-6 sm:pb-6 pt-4 text-sm sm:text-base leading-relaxed text-muted text-pretty"
                    itemProp="text"
                  >
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="card p-8 text-center text-sm text-muted">
              No questions found matching &ldquo;{searchTerm}&rdquo;. Feel free to email contact@nixhil.dev directly.
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
