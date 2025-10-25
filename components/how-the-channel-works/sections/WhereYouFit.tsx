import Link from "next/link";

interface RoleDefinition {
  id: string;
  label: string;
}

interface PlanContent {
  [maturity: string]: string[];
}

interface RolePlan {
  label: string;
  role: PlanContent;
  partners: PlanContent;
  offers: PlanContent;
  sprint: PlanContent;
}

interface WhereYouFitProps {
  roles: RoleDefinition[];
  plans: Record<string, RolePlan>;
  maturityLevels: string[];
  selectedRole: string;
  onRoleChange: (roleId: string) => void;
  selectedMaturity: string;
  onMaturityChange: (stage: string) => void;
  activeTab: "role" | "partners" | "offers" | "sprint";
  onTabChange: (tab: "role" | "partners" | "offers" | "sprint") => void;
}

const TABS: { id: "role" | "partners" | "offers" | "sprint"; label: string }[] = [
  { id: "role", label: "Role" },
  { id: "partners", label: "Partners" },
  { id: "offers", label: "Offers" },
  { id: "sprint", label: "30-Day Sprint" },
];

export function WhereYouFit({
  roles,
  plans,
  maturityLevels,
  selectedRole,
  onRoleChange,
  selectedMaturity,
  onMaturityChange,
  activeTab,
  onTabChange,
}: WhereYouFitProps) {
  const availableRoles = roles.filter((role) => plans[role.id]);
  const activePlan = plans[selectedRole] ?? plans[availableRoles[0]?.id ?? ""];
  const maturity = maturityLevels.includes(selectedMaturity)
    ? selectedMaturity
    : maturityLevels[0];
  const panelId = "where-you-fit-panel";

  if (!activePlan) {
    return null;
  }

  const content = getTabContent(activePlan, activeTab, maturity);

  return (
    <section className="rounded-[12px] border border-[#0B0E1A] bg-[#FFFFFF] px-5 py-5 text-[#0B0E1A] shadow-sm">
      <header className="flex flex-col gap-1">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8A93A6]">Guided teaming</p>
        <h2 className="text-lg font-semibold">Where you fit &amp; how to team up</h2>
      </header>

      <div className="mt-4 flex flex-wrap gap-2">
        {availableRoles.map((role) => {
          const isActive = role.id === selectedRole;
          const label = plans[role.id]?.label ?? role.label;
          return (
            <button
              key={role.id}
              type="button"
              onClick={() => onRoleChange(role.id)}
              aria-pressed={isActive}
              className={`rounded-full border px-3 py-2 text-xs font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#0B0E1A] ${
                isActive ? "border-[#0B0E1A] bg-[#0B0E1A] text-[#FFFFFF]" : "border-[#0B0E1A] text-[#0B0E1A]"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      <div className="mt-3 inline-flex rounded-[12px] border border-[#0B0E1A] p-1">
        {maturityLevels.map((stage) => {
          const isActive = stage === maturity;
          return (
            <button
              key={stage}
              type="button"
              onClick={() => onMaturityChange(stage)}
              className={`min-w-[90px] rounded-[10px] px-3 py-2 text-xs font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#0B0E1A] ${
                isActive ? "bg-[#0B0E1A] text-[#FFFFFF]" : "text-[#0B0E1A]"
              }`}
            >
              {stage}
            </button>
          );
        })}
      </div>

      <div className="mt-4">
        <div role="tablist" aria-label="Role guidance tabs" className="flex flex-wrap gap-2">
          {TABS.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={panelId}
                id={`where-you-fit-tab-${tab.id}`}
                onClick={() => onTabChange(tab.id)}
                className={`rounded-full border px-3 py-2 text-xs font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#0B0E1A] ${
                  isActive ? "border-[#0B0E1A] bg-[#0B0E1A] text-[#FFFFFF]" : "border-[#0B0E1A] text-[#0B0E1A]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div
          id={panelId}
          role="tabpanel"
          aria-live="polite"
          aria-labelledby={`where-you-fit-tab-${activeTab}`}
          className="mt-3 rounded-[12px] border border-dashed border-[#0B0E1A] px-4 py-3"
          style={{ minHeight: "100px" }}
        >
          <ul className="space-y-1 text-xs text-[#0B0E1A]">
            {content.map((item) => (
              <li key={item} className="rounded-[10px] bg-[#0B0E1A]/5 px-3 py-2">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        <Link
          href="/join"
          className="inline-flex h-11 items-center justify-center rounded-[12px] bg-[#0B0E1A] px-5 text-sm font-semibold text-[#FFFFFF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#0B0E1A]"
        >
          Join the Community
        </Link>
        <Link
          href="/community#contribute"
          className="inline-flex h-11 items-center justify-center rounded-[12px] border border-[#0B0E1A] px-5 text-sm font-semibold text-[#0B0E1A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#0B0E1A]"
        >
          Find a Partner
        </Link>
      </div>
    </section>
  );
}

function getTabContent(plan: RolePlan, tab: "role" | "partners" | "offers" | "sprint", maturity: string) {
  const tabSet = plan[tab] ?? {};
  const availableStages = Object.keys(tabSet);
  const fallbackStage = availableStages[0];
  const items = tabSet[maturity] ?? (fallbackStage ? tabSet[fallbackStage] : []);
  return (items ?? []).slice(0, 3);
}
