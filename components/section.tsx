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
      className={`relative flex w-full scroll-mt-20 justify-center ${className}`}
    >
      <div className="w-full max-w-6xl px-4 py-16 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
        {children}
      </div>
    </section>
  );
}
