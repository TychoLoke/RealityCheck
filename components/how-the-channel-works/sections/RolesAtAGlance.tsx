interface RoleCard {
  id: string;
  title: string;
  goal: string;
  value: string;
  kpis: string[];
  signal: string;
}

interface RolesAtAGlanceProps {
  roles: RoleCard[];
}

export function RolesAtAGlance({ roles }: RolesAtAGlanceProps) {
  return (
    <section className="space-y-6">
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-secondary">
          Roles
        </p>
        <h2 className="text-3xl font-semibold text-brand-primary">Roles at a glance</h2>
        <p className="max-w-3xl text-base text-brand-secondary">
          Every player adds a unique lever. Compare goals, the value they add, and the KPIs they
          monitor to keep joint motions aligned.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {roles.map((role) => (
          <article
            key={role.id}
            className="flex h-full flex-col justify-between rounded-[20px] border border-zinc-200 bg-white p-6 shadow-sm"
          >
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-brand-primary">{role.title}</h3>
              <p className="text-sm text-brand-secondary">{role.goal}</p>
              <p className="text-sm font-semibold text-brand-primary/80">Value they add</p>
              <p className="text-sm text-brand-primary/70">{role.value}</p>
            </div>
            <div className="mt-4 space-y-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-secondary">Core KPIs</p>
                <ul className="mt-1 space-y-1 text-sm text-brand-primary/80">
                  {role.kpis.map((kpi) => (
                    <li key={kpi}>• {kpi}</li>
                  ))}
                </ul>
              </div>
              <p className="text-xs text-brand-secondary">Signal of maturity: {role.signal}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
