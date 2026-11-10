import type { ReactNode } from "react";
import { SectionLabel } from "@/components/ui/section-label";

type CtaTone = "red" | "garnet" | "ink" | "smoke";

type CtaSectionProps = {
  id?: string;
  label: string;
  heading: ReactNode;
  body?: string;
  tone?: CtaTone;
  children: ReactNode;
};

const toneStyles: Record<
  CtaTone,
  {
    background: string;
    labelTone: "dark" | "light" | "red";
    body: string;
  }
> = {
  red: {
    background: "bg-red text-white",
    labelTone: "red",
    body: "text-white",
  },
  garnet: {
    background: "bg-garnet text-white",
    labelTone: "red",
    body: "text-white/80",
  },
  ink: {
    background: "bg-ink text-white",
    labelTone: "dark",
    body: "text-white/70",
  },
  smoke: {
    background: "bg-smoke text-black",
    labelTone: "light",
    body: "text-black/70",
  },
};

export function CtaSection({
  id,
  label,
  heading,
  body,
  tone = "red",
  children,
}: CtaSectionProps) {
  const styles = toneStyles[tone];

  return (
    <section
      id={id}
      className={`relative scroll-mt-24 overflow-hidden ${styles.background}`}
    >
      <div className="shell py-14 sm:py-18 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="lg:col-span-8">
            <SectionLabel variant="rule" tone={styles.labelTone}>
              {label}
            </SectionLabel>
            <h2 className="heading-section mt-5 max-w-3xl text-[clamp(2.2rem,5vw,4.5rem)]">
              {heading}
            </h2>
          </div>

          <div className="lg:col-span-4">
            {body ? (
              <p className={`max-w-md text-[15px]/[1.7] ${styles.body}`}>
                {body}
              </p>
            ) : null}
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
