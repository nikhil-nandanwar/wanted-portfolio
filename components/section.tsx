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
      className={`flex w-full scroll-mt-18 justify-center border-y border-dashed border-foreground/25 ${className}`}
    >
      <div className="w-full max-w-7xl border-x border-dashed border-foreground/25 px-4 py-16 sm:px-6 sm:py-24 lg:px-10 lg:py-36">
        {children}
      </div>
    </section>
  );
}
