export const faqItems = [
  {
    question: "Who is Nikhil Nandanwar?",
    answer:
      "Nikhil Nandanwar is a full stack developer from India who builds accessible web and mobile applications with React, Next.js, Node.js, MongoDB, Angular and .NET.",
  },
  {
    question: "What technologies does Nikhil Nandanwar work with?",
    answer:
      "React, Next.js, Node.js, MongoDB, Angular, C#, .NET, React Native, SQL, Docker, Git and TailwindCSS.",
  },
  {
    question: "What is Nikhil Nandanwar's experience?",
    answer:
      "Internships as a Full Stack Developer at Nabham Tech, a Full Stack Engineer at Cognizant, and a Frontend Developer at Living Pixel Labs.",
  },
  {
    question: "How can I hire or contact Nikhil Nandanwar?",
    answer:
      "Email nikhilnandanwar429@gmail.com or reach out on LinkedIn, GitHub or X.",
  },
];

export default function FAQSection() {
  return (
    <section
      className="mx-auto w-full scroll-mt-16 flex justify-center border-y border-t border-dashed border-foreground/25"
      id="faq"
      aria-labelledby="faq-heading"
    >
      <div className="w-full max-w-7xl border-x border-dashed border-foreground/25 px-4 py-16 sm:px-6 sm:py-24 lg:px-10 lg:py-36">
        <p className="m-0 text-xs leading-normal tracking-widest uppercase text-foreground/60">FAQ</p>
        <h2 id="faq-heading" className="mt-6 text-3xl font-medium leading-tight tracking-tight sm:text-5xl">
          Frequently asked questions
        </h2>
        <dl className="mt-10 space-y-8">
          {faqItems.map((item) => (
            <div key={item.question}>
              <dt className="text-xl font-medium leading-tight tracking-tight">{item.question}</dt>
              <dd className="mt-3 leading-7 text-foreground/70">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
