import type { FactStatus } from "@/content/home";

type StatusChipProps = {
  status: FactStatus;
  className?: string;
};

const labels: Record<FactStatus, string> = {
  confirmed: "Confirmed",
  planned: "Planned",
  "to-be-announced": "TBA",
};

const styles: Record<FactStatus, { chip: string; dot: string }> = {
  confirmed: {
    chip: "border-white/20 text-white",
    dot: "bg-red",
  },
  planned: {
    chip: "border-white/15 text-white/70",
    dot: "bg-white/50",
  },
  "to-be-announced": {
    chip: "border-white/10 text-white/55",
    dot: "bg-white/30",
  },
};

export function StatusChip({ status, className = "" }: StatusChipProps) {
  const style = styles[status];

  return (
    <span
      className={`inline-flex items-center gap-2 border px-2.5 py-1 font-mono text-[9px] font-medium uppercase tracking-[0.16em] ${style.chip} ${className}`}
    >
      <span aria-hidden="true" className={`h-1 w-1 ${style.dot}`} />
      {labels[status]}
    </span>
  );
}
