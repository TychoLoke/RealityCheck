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
    <section
      id="channel-map"
      className="space-y-6 rounded-[20px] border border-[#0B0E1A]/10 bg-[#FFFFFF] px-6 py-8 text-[#0B0E1A] shadow-sm shadow-[#0B0E1A]/5 md:px-8"
    >
      <header className="space-y-3">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8A93A6]">Channel map</p>
        <h2 className="text-2xl font-semibold text-[#0B0E1A]">See how every role hands off the motion</h2>
        <p className="text-sm leading-relaxed text-[#1D2333]/80">
          Scan the full lifecycle, then tap into the motions that matter most right now. Each card opens the quick brief for
          that step—what success looks like, which KPIs to watch, and the pitfalls we hear most from operators.
        </p>
      </header>

      <div className="space-y-4 md:hidden">
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

      <div className="hidden gap-4 md:flex md:flex-col">
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
      className="inline-flex rounded-[14px] border border-[#0B0E1A]/20 bg-[#F4F5FB] p-1"
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
              isActive
                ? "bg-[#0B0E1A] text-[#FFFFFF] shadow-sm shadow-[#0B0E1A]/20"
                : "text-[#0B0E1A] hover:bg-[#FFFFFF]"
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
        className={`flex h-28 w-40 flex-col justify-between rounded-[14px] border px-3 py-3 text-left text-xs transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#0B0E1A] ${
          isActive
            ? "border-[#0B0E1A] bg-[#0B0E1A] text-[#FFFFFF] shadow-lg shadow-[#0B0E1A]/25"
            : "border-[#0B0E1A]/30 bg-[#F9FAFE] text-[#0B0E1A] hover:border-[#0B0E1A]/50"
        }`}
        style={{ minWidth: "148px" }}
      >
        <span className="truncate text-sm font-semibold">{motion.label}</span>
        <span className={`truncate text-[11px] leading-snug ${isActive ? "text-[#FFFFFF]" : "text-[#1D2333]/80"}`}>
          {motion.tip}
        </span>
      </button>
      {isTooltipOpen && motion.summary ? (
        <div className="absolute left-1/2 top-full z-10 mt-3 w-48 -translate-x-1/2 rounded-[14px] border border-[#0B0E1A]/20 bg-[#FFFFFF] px-3 py-3 text-xs text-[#0B0E1A] shadow-xl shadow-[#0B0E1A]/15">
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
