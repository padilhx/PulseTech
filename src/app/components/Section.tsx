import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  muted?: boolean;
  id?: string;
};

export function Section({
  children,
  className = "",
  contentClassName = "",
  muted = false,
  id,
}: SectionProps) {
  const surface = muted ? "bg-gray-50" : "bg-white";
  const anchor = id ? "scroll-mt-24 md:scroll-mt-28" : "";
  return (
    <section id={id} className={`${surface} px-6 ${anchor} ${className}`.trim()}>
      <div className={`max-w-7xl mx-auto ${contentClassName}`.trim()}>{children}</div>
    </section>
  );
}

type SectionHeadingProps = {
  title: string;
  description: string;
};

export function SectionHeading({ title, description }: SectionHeadingProps) {
  return (
    <header className="mb-10 md:mb-14">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 md:mb-4">{title}</h2>
      <p className="text-gray-600 text-base md:text-lg max-w-2xl">{description}</p>
    </header>
  );
}
