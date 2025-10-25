import { useMemo, useState, type ReactNode } from "react";
import clsx from "clsx";

type RolePlans = Record<
  string,
  {
    label: string;
    summary: string;
    partners: string[];
    offers: string[];
    handoffs: string[];
    kpis: string[];
    sprint: string[];
    risks: string[];
  }
>;

interface WhereYouFitProps {
  data: {
    maturity: string[];
    roles: RolePlans;
  };
}

export function WhereYouFit({ data }: WhereYouFitProps) {
  const roleKeys = Object.keys(data.roles);
  const [role, setRole] = useState(roleKeys[0] ?? "");
  const [maturity, setMaturity] = useState(data.maturity[1] ?? data.maturity[0] ?? "");

  const plan = useMemo(() => data.roles[role], [data.roles, role]);

  if (!plan) {
    return null;
  }

  return (
    <section className="space-y-8">
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-secondary">
          Role guidance
        </p>
        <h2 className="text-3xl font-semibold text-brand-primary">Where you fit &amp; how to team up</h2>
        <p className="max-w-3xl text-base text-brand-secondary">
          Pick your role to see the partners, offers, KPIs, and 30-day sprint that keep you aligned with
          the rest of the channel.
        </p>
      </header>

      <div className="space-y-6 rounded-[24px] border border-zinc-200 bg-white p-6 shadow-sm">
        <div className="space-y-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-secondary">Role</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {roleKeys.map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setRole(key)}
                  className={clsx(
                    "rounded-full border px-4 py-2 text-sm font-semibold transition",
                    role === key
                      ? "border-brand-primary bg-brand-primary text-white"
                      : "border-zinc-200 bg-brand-muted/60 text-brand-primary hover:border-brand-primary"
                  )}
                >
                  {data.roles[key].label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-secondary">Maturity</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {data.maturity.map((stage) => (
                <button
                  key={stage}
                  type="button"
                  onClick={() => setMaturity(stage)}
                  className={clsx(
                    "rounded-full border px-4 py-2 text-sm transition",
                    maturity === stage
                      ? "border-brand-primary bg-white text-brand-primary shadow"
                      : "border-zinc-200 bg-brand-muted/60 text-brand-primary hover:border-brand-primary"
                  )}
                >
                  {stage}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <InfoCard title="Your role in the channel">
            <p className="text-sm text-brand-primary/80">{plan.summary}</p>
          </InfoCard>
          <InfoCard title="Who to partner with">
            <List items={plan.partners} />
          </InfoCard>
          <InfoCard title="Offers to package now">
            <List items={plan.offers} />
          </InfoCard>
          <InfoCard title="Handoffs you own">
            <List items={plan.handoffs} ordered />
          </InfoCard>
          <InfoCard title="KPIs to track">
            <List items={plan.kpis} />
          </InfoCard>
          <InfoCard title={`30-day sprint (${maturity})`}>
            <List items={plan.sprint} ordered />
          </InfoCard>
          <InfoCard title="Risks &amp; anti-patterns">
            <List items={plan.risks} />
          </InfoCard>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href="/join"
            className="inline-flex items-center justify-center rounded-[12px] bg-brand-primary px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#04060d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
          >
            Join the Community
          </a>
          <a
            href="/community#contribute"
            className="inline-flex items-center justify-center rounded-[12px] border border-brand-primary px-5 py-3 text-sm font-semibold text-brand-primary transition hover:bg-brand-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
          >
            Find a Partner
          </a>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex h-full flex-col gap-3 rounded-[18px] border border-zinc-200 bg-brand-muted/40 p-5">
      <h3 className="text-base font-semibold text-brand-primary">{title}</h3>
      <div className="space-y-2 text-sm text-brand-primary/80">{children}</div>
    </div>
  );
}

function List({ items, ordered = false }: { items: string[]; ordered?: boolean }) {
  if (!items.length) return null;

  const ListTag: "ol" | "ul" = ordered ? "ol" : "ul";
  const baseClass = ordered ? "list-decimal pl-5 space-y-1" : "list-disc pl-5 space-y-1";

  return (
    <ListTag className={baseClass}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ListTag>
  );
}
