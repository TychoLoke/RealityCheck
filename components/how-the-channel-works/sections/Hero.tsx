import clsx from "clsx";

type Role = {
  id: string;
  label: string;
  description?: string;
};

type Motion = {
  id: string;
  label: string;
  summary?: string;
};

interface HeroProps {
  roles: Role[];
  motions: Motion[];
  selectedRole: string;
  onRoleChange: (role: string) => void;
  selectedMotion: string;
  onMotionChange: (motion: string) => void;
}

export function Hero({
  roles,
  motions,
  selectedRole,
  onRoleChange,
  selectedMotion,
  onMotionChange,
}: HeroProps) {
  return (
    <section className="bg-brand-muted py-16">
      <div className="mx-auto max-w-[1120px] px-4">
        <div className="space-y-6">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-brand-secondary">
            Channel OS™ Insight
          </p>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold leading-tight text-brand-primary md:text-5xl">
              How the Channel Works
            </h1>
            <p className="max-w-2xl text-lg text-brand-secondary">
              Five roles, eight motions, one goal—repeatable customer value. Explore the flows,
              economics, and plays that keep the ecosystem in sync.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex flex-wrap gap-2">
              {roles.map((role) => (
                <button
                  key={role.id}
                  onClick={() => onRoleChange(role.id)}
                  className={clsx(
                    "rounded-full border px-4 py-2 text-sm font-medium transition",
                    selectedRole === role.id
                      ? "border-brand-primary bg-brand-primary text-white"
                      : "border-zinc-200 bg-white text-brand-primary hover:border-brand-primary"
                  )}
                  type="button"
                >
                  {role.label}
                </button>
              ))}
            </div>
            <span className="hidden text-sm font-semibold uppercase tracking-[0.18em] text-brand-secondary md:inline">
              Motions
            </span>
            <div className="flex flex-wrap gap-2">
              {motions.map((motion) => (
                <button
                  key={motion.id}
                  onClick={() => onMotionChange(motion.id)}
                  className={clsx(
                    "rounded-full border px-4 py-2 text-sm transition",
                    selectedMotion === motion.id
                      ? "border-brand-primary bg-white text-brand-primary shadow"
                      : "border-zinc-200 bg-white text-brand-secondary hover:border-brand-primary"
                  )}
                  type="button"
                >
                  {motion.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="/join"
              className="inline-flex items-center justify-center rounded-[12px] bg-brand-primary px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#04060d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
            >
              Join the Community
            </a>
            <a
              href="/community"
              className="inline-flex items-center justify-center rounded-[12px] border border-brand-primary px-5 py-3 text-sm font-semibold text-brand-primary transition hover:bg-brand-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
            >
              Explore Partners
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
