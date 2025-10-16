interface StatusBarProps {
  status: string;
  launchDate: string;
  cadence: string;
}

export function StatusBar({ status, launchDate, cadence }: StatusBarProps) {
  return (
    <div className="flex flex-wrap items-center gap-3 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-secondary">
      <span>Status: {status}</span>
      <span aria-hidden className="h-1 w-1 rounded-full bg-brand-secondary/50" />
      <span>Launch: {launchDate}</span>
      <span aria-hidden className="h-1 w-1 rounded-full bg-brand-secondary/50" />
      <span>Updates: {cadence}</span>
    </div>
  );
}
