"use client";

import { useEffect, useMemo, useState } from "react";
import channelMapData from "@/content/how-the-channel-works/channel-map.json";
import economicsData from "@/content/how-the-channel-works/economics.json";
import rolePlansData from "@/content/how-the-channel-works/role-plans.json";
import { Hero } from "./sections/Hero";
import { ChannelMap } from "./sections/ChannelMap";
import { LifecycleTimeline } from "./sections/LifecycleTimeline";
import { EconomicsFlow } from "./sections/EconomicsFlow";
import { WhereYouFit } from "./sections/WhereYouFit";

type MotionOption = (typeof channelMapData.motions)[number];

const MOTION_FILTERS = [
  { id: "all", label: "All", group: () => true },
  {
    id: "sell-deliver",
    label: "Sell/Deliver",
    group: (motion: MotionOption) => ["sell", "procure", "deliver"].includes(motion.id),
  },
  {
    id: "operate-expand",
    label: "Operate/Expand",
    group: (motion: MotionOption) => ["adopt", "operate", "expand"].includes(motion.id),
  },
];

export function PageContent() {
  const roles = channelMapData.roles;
  const motions = channelMapData.motions as MotionOption[];
  const economics = economicsData.economics;
  const maturity = rolePlansData.maturity;
  const plans = rolePlansData.plans;

  const [selectedMotion, setSelectedMotion] = useState<string>(motions[0]?.id ?? "");
  const [motionFilter, setMotionFilter] = useState<string>(MOTION_FILTERS[0]?.id ?? "all");
  const [openDrawerMotion, setOpenDrawerMotion] = useState<string | null>(null);
  const [highlightedFlow, setHighlightedFlow] = useState<number | null>(null);
  const [selectedRole, setSelectedRole] = useState<string>("partner");
  const [selectedMaturity, setSelectedMaturity] = useState<string>(maturity[0] ?? "Explorer");
  const [activeTab, setActiveTab] = useState<"role" | "partners" | "offers" | "sprint">("role");

  const filteredMotions = useMemo(() => {
    const predicate = MOTION_FILTERS.find((filter) => filter.id === motionFilter)?.group;
    if (!predicate) return motions;
    return motions.filter((motion) => predicate(motion));
  }, [motionFilter, motions]);

  useEffect(() => {
    if (openDrawerMotion) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [openDrawerMotion]);

  const activeMotionData = useMemo(() => {
    if (openDrawerMotion) {
      return motions.find((motion) => motion.id === openDrawerMotion) ?? motions[0];
    }
    return motions.find((motion) => motion.id === selectedMotion) ?? motions[0];
  }, [motions, openDrawerMotion, selectedMotion]);

  return (
    <div className="bg-[#FFFFFF] text-[#0B0E1A]">
      <div className="mx-auto flex min-h-[90vh] max-w-[1120px] flex-col gap-12 px-6 py-10 md:gap-16 md:py-16 lg:px-8">
        <Hero />

        <ChannelMap
          roles={roles}
          motions={motions}
          filteredMotions={filteredMotions}
          filters={MOTION_FILTERS}
          activeFilter={motionFilter}
          onFilterChange={setMotionFilter}
          selectedMotion={selectedMotion}
          onSelectMotion={(motionId) => {
            setSelectedMotion(motionId);
            setOpenDrawerMotion(motionId);
          }}
        />

        <LifecycleTimeline
          motions={motions}
          activeMotion={selectedMotion}
          onSelect={(motionId) => {
            setSelectedMotion(motionId);
            setOpenDrawerMotion(motionId);
          }}
        />

        <EconomicsFlow
          data={economics}
          highlightedIndex={highlightedFlow}
          onHighlight={setHighlightedFlow}
        />

        <WhereYouFit
          roles={roles}
          plans={plans}
          maturityLevels={maturity}
          selectedRole={selectedRole}
          onRoleChange={setSelectedRole}
          selectedMaturity={selectedMaturity}
          onMaturityChange={setSelectedMaturity}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
      </div>

      {openDrawerMotion && activeMotionData ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={`motion-${openDrawerMotion}-title`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B0E1A]/60 px-4"
        >
          <div
            className="w-full max-w-[560px] rounded-[24px] bg-[#FFFFFF] p-6 text-[#0B0E1A] shadow-2xl shadow-[#0B0E1A]/30 md:max-w-[640px] md:p-8"
            style={{ width: "min(92vw, 620px)" }}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#8A93A6]">
                  Motion {motions.findIndex((motion) => motion.id === openDrawerMotion) + 1}
                </p>
                <h3
                  id={`motion-${openDrawerMotion}-title`}
                  className="mt-2 text-2xl font-semibold text-[#0B0E1A]"
                >
                  {activeMotionData.label}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#1D2333]/80">
                  {activeMotionData.summary}
                </p>
              </div>
              <button
                type="button"
                aria-label="Close"
                onClick={() => setOpenDrawerMotion(null)}
                className="h-11 w-11 rounded-full border border-[#0B0E1A]/30 text-xl font-semibold text-[#0B0E1A] transition hover:border-[#0B0E1A] hover:bg-[#F4F5FB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#0B0E1A]"
              >
                ×
              </button>
            </div>

            <div className="mt-6 space-y-5 overflow-y-auto pr-1" style={{ maxHeight: "60vh" }}>
              <DrawerList title="What good looks like" items={activeMotionData.goodLooksLike} />
              <DrawerList title="KPIs" items={activeMotionData.kpis} />
              <DrawerList title="Pitfalls" items={activeMotionData.pitfalls} />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

interface DrawerListProps {
  title: string;
  items?: string[];
}

function DrawerList({ title, items }: DrawerListProps) {
  if (!items?.length) return null;

  return (
    <section>
      <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#8A93A6]">{title}</h4>
      <ul className="mt-3 space-y-2 text-sm text-[#0B0E1A]">
        {items.slice(0, 3).map((item) => (
          <li key={item} className="rounded-[12px] bg-[#0B0E1A]/5 px-4 py-3">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
