import Section from "@/components/section";
import { faqItems } from "@/data/site";

export default function FAQSection() {
  return (
    <Section id="faq" labelledBy="faq-heading" className="sr-only">
      <p className="m-0 text-xs leading-normal tracking-widest uppercase text-foreground/60">FAQ</p>
      <h2 id="faq-heading" className="mt-6 text-3xl font-medium leading-tight tracking-tight sm:text-5xl">Frequently asked questions</h2>
      <dl className="mt-10 space-y-8">
        {faqItems.map((item) => (
          <div key={item.question}>
            <dt className="text-xl font-medium leading-tight tracking-tight">{item.question}</dt>
            <dd className="mt-3 leading-7 text-foreground/70">{item.answer}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
