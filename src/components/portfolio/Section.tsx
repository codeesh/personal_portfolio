import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title?: string;
  lead?: string;
  children: ReactNode;
  contentClassName?: string;
  sectionClassName?: string;
};

export function Section({
  id,
  title,
  lead,
  children,
  contentClassName,
  sectionClassName,
}: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 py-20 ${sectionClassName ?? ""}`.trim()}>
      <div className={`mx-auto w-[min(1120px,92vw)] ${contentClassName ?? ""}`.trim()}>
        {title ? <h2 className="text-[clamp(1.8rem,4vw,2.5rem)]">{title}</h2> : null}
        {lead ? <p className="max-w-[66ch] text-[var(--muted)]">{lead}</p> : null}
        {children}
      </div>
    </section>
  );
}
