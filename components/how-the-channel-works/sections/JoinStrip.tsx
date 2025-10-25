export function JoinStrip() {
  return (
    <section className="bg-brand-primary py-12">
      <div className="mx-auto flex max-w-[1120px] flex-col items-center gap-4 px-4 text-center text-white md:flex-row md:justify-between md:text-left">
        <div className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">Stay in the loop</p>
          <h2 className="text-2xl font-semibold">Join the community</h2>
          <p className="text-sm text-white/80">
            Get early access to playbooks, peer sessions, and channel benchmarks.
          </p>
        </div>
        <form className="flex w-full max-w-md flex-col gap-2 md:flex-row">
          <input
            type="email"
            placeholder="you@company.com"
            className="w-full rounded-[12px] border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/60 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/60"
            aria-label="Email address"
          />
          <button
            type="submit"
            className="rounded-[12px] bg-white px-5 py-3 text-sm font-semibold text-brand-primary transition hover:bg-brand-muted"
          >
            Sign up
          </button>
        </form>
      </div>
    </section>
  );
}
