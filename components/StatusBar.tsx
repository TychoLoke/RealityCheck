interface StatusBarProps {
  status: string;
  launchDate: string;
  nextUpdate: string;
}

export function StatusBar({ status, launchDate, nextUpdate }: StatusBarProps) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 rounded-full border border-slate/60 bg-night/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-ink/70">
      <span>Status: {status}</span>
      <span className="h-1 w-1 rounded-full bg-ink/50" aria-hidden />
      <span>Launch: {launchDate}</span>
      <span className="h-1 w-1 rounded-full bg-ink/50" aria-hidden />
      <span>Next update: {nextUpdate}</span>
    </div>
  );
}
