const words = ["Build", "Race", "Learn", "Connect"];

function TickerGroup({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className="flex shrink-0 items-center gap-5 pr-5"
      data-duplicate={duplicate || undefined}
    >
      {words.map((word) => (
        <div key={word} className="flex items-center gap-5">
          <span>{word}</span>
          <span className="h-1.5 w-1.5 bg-white" />
        </div>
      ))}
    </div>
  );
}

export function Ticker() {
  return (
    <div className="relative overflow-hidden border-y border-black bg-red py-3 font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-white">
      <p className="sr-only">Build. Race. Learn. Connect.</p>
      <div aria-hidden="true" className="marquee-track flex w-max">
        <TickerGroup />
        <TickerGroup duplicate />
      </div>
    </div>
  );
}
