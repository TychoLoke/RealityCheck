import { useState } from "react";

interface Role {
  id: string;
  label: string;
}

interface Motion {
  id: string;
  label: string;
  lane: string;
  tip?: string;
  summary?: string;
}

interface FilterOption {
  id: string;
  label: string;
}

interface ChannelMapProps {
  roles: Role[];
  motions: Motion[];
  filteredMotions: Motion[];
  filters: { id: string; label: string }[];
  activeFilter: string;
  onFilterChange: (id: string) => void;
  selectedMotion: string;
  onSelectMotion: (motionId: string) => void;
}

export function ChannelMap({
  roles,
  motions,
  filteredMotions,
  filters,
  activeFilter,
  onFilterChange,
  selectedMotion,
  onSelectMotion,
}: ChannelMapProps) {
  const [openTooltipId, setOpenTooltipId] = useState<string | null>(null);

  const handleCardClick = (motionId: string) => {
    if (openTooltipId === motionId) {
      setOpenTooltipId(null);
      onSelectMotion(motionId);
      return;
    }

    setOpenTooltipId(motionId);
    onSelectMotion(motionId);
  };

  return (
    <section className="rounded-[12px] border border-[#0B0E1A] bg-[#FFFFFF] px-5 py-5 text-[#0B0E1A] shadow-sm">
      <header className="flex flex-col gap-1">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8A93A6]">Channel map</p>
        <h2 className="text-lg font-semibold">Roles and motions at a glance</h2>
      </header>

      <div className="mt-4 md:hidden">
        <SegmentedControl
          options={filters}
          activeId={activeFilter}
          onChange={onFilterChange}
          controlsId="channel-map-mobile-panel"
        />
        <div
          id="channel-map-mobile-panel"
          role="tabpanel"
          aria-labelledby={`channel-map-tab-${activeFilter}`}
          className="mt-3 grid grid-cols-2 gap-3"
        >
          {filteredMotions.map((motion) => (
            <MotionCard
              key={motion.id}
              motion={motion}
              isActive={selectedMotion === motion.id}
              isTooltipOpen={openTooltipId === motion.id}
              onClick={() => handleCardClick(motion.id)}
            />
          ))}
        </div>
      </div>

      <div className="mt-4 hidden gap-3 md:flex md:flex-col">
        {roles.map((role) => {
          const laneMotions = motions.filter((motion) => motion.lane === role.id);
          if (!laneMotions.length) return null;

          return (
            <div key={role.id} className="flex items-start gap-3">
              <div className="w-40 shrink-0">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#8A93A6]">{role.label}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                {laneMotions.map((motion) => (
                  <MotionCard
                    key={motion.id}
                    motion={motion}
                    isActive={selectedMotion === motion.id}
                    isTooltipOpen={openTooltipId === motion.id}
                    onClick={() => handleCardClick(motion.id)}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

interface SegmentedControlProps {
  options: FilterOption[];
  activeId: string;
  onChange: (id: string) => void;
  controlsId: string;
}

function SegmentedControl({ options, activeId, onChange, controlsId }: SegmentedControlProps) {
  return (
    <div
      role="tablist"
      aria-label="Motion filter"
      className="inline-flex rounded-[12px] border border-[#0B0E1A] bg-[#FFFFFF] p-1"
    >
      {options.map((option) => {
        const isActive = option.id === activeId;
        return (
          <button
            key={option.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-controls={controlsId}
            id={`channel-map-tab-${option.id}`}
            className={`min-w-[96px] rounded-[10px] px-3 py-2 text-xs font-semibold transition ${
              isActive ? "bg-[#0B0E1A] text-[#FFFFFF]" : "text-[#0B0E1A]"
            }`}
            onClick={() => onChange(option.id)}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}

interface MotionCardProps {
  motion: Motion;
  isActive: boolean;
  isTooltipOpen: boolean;
  onClick: () => void;
}

function MotionCard({ motion, isActive, isTooltipOpen, onClick }: MotionCardProps) {
  return (
    <div className="relative">
      <button
        type="button"
        onClick={onClick}
        aria-expanded={isTooltipOpen}
        className={`flex h-24 w-40 flex-col justify-between rounded-[12px] border px-3 py-2 text-left text-xs transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#0B0E1A] ${
          isActive ? "border-[#0B0E1A] bg-[#0B0E1A] text-[#FFFFFF]" : "border-[#0B0E1A] text-[#0B0E1A]"
        }`}
        style={{ minWidth: "148px" }}
      >
        <span className="text-sm font-semibold truncate">{motion.label}</span>
        <span className={`text-[11px] ${isActive ? "text-[#FFFFFF]" : "text-[#0B0E1A]"} truncate`}>
          {motion.tip}
        </span>
      </button>
      {isTooltipOpen && motion.summary ? (
        <div className="absolute left-1/2 top-full z-10 mt-2 w-44 -translate-x-1/2 rounded-[12px] border border-[#0B0E1A] bg-[#FFFFFF] px-3 py-2 text-xs text-[#0B0E1A] shadow-md">
          <p
            className="leading-snug"
            style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}
          >
            {motion.summary}
          </p>
        </div>
      ) : null}
    </div>
  );
}
