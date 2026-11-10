import type { ReactNode } from "react";
import { SectionLabel } from "@/components/ui/section-label";

type PageSectionTone = "black" | "smoke" | "garnet";

type PageSectionProps = {
  id?: string;
  tone?: PageSectionTone;
  index?: string;
  label?: string;
  title?: ReactNode;
  intro?: string;
  children?: ReactNode;
  className?: string;
};

const toneStyles: Record<
  PageSectionTone,
  {
    background: string;
    labelTone: "dark" | "light" | "red";
    muted: string;
    border: string;
  }
> = {
  black: {
    background: "bg-black text-white",
    labelTone: "dark",
    muted: "text-white/70",
    border: "border-white/15",
  },
  smoke: {
    background: "bg-smoke text-black",
    labelTone: "light",
    muted: "text-black/70",
    border: "border-black/15",
  },
  garnet: {
    background: "bg-garnet text-white",
    labelTone: "red",
    muted: "text-white/75",
    border: "border-white/20",
  },
};

export function PageSection({
  id,
  tone = "black",
  index,
  label,
  title,
  intro,
  children,
  className = "",
}: PageSectionProps) {
  const styles = toneStyles[tone];
  const hasHeader = Boolean(label || title);

  return (
    <section
      id={id}
      className={`relative scroll-mt-24 overflow-hidden ${styles.background} ${className}`}
    >
      <div className="shell py-16 sm:py-20 lg:py-24">
        {hasHeader ? (
          <div className="grid gap-6 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              {label ? (
                <SectionLabel
                  index={index}
                  variant="rule"
                  tone={styles.labelTone}
                >
                  {label}
                </SectionLabel>
              ) : null}
              {title ? (
                <h2 className="heading-section mt-5 max-w-3xl text-[clamp(1.9rem,4.2vw,3.4rem)]">
                  {title}
                </h2>
              ) : null}
            </div>

            {intro ? (
              <div className="lg:col-span-5 lg:pt-10">
                <p className={`max-w-xl text-[16px]/[1.7] ${styles.muted}`}>
                  {intro}
                </p>
              </div>
            ) : null}
          </div>
        ) : null}

        <div className={hasHeader ? "mt-10 lg:mt-12" : ""}>{children}</div>
      </div>
    </section>
  );
}
