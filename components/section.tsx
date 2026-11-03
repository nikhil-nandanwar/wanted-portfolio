import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  labelledBy?: string;
  children: ReactNode;
  className?: string;
};

export default function Section({ id, labelledBy, children, className = "" }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`relative flex w-full scroll-mt-16 sm:scroll-mt-20 justify-center ${className}`}
    >
      <div className="w-full max-w-6xl px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-14 lg:py-16">
        {children}
      </div>
    </section>
  );
}
