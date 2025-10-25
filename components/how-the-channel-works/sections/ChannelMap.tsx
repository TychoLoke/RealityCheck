import clsx from "clsx";

interface Role {
  id: string;
  label: string;
  description?: string;
}

interface Motion {
  id: string;
  label: string;
  lane: string;
  summary?: string;
  goodLooksLike?: string[];
  kpis?: string[];
  pitfalls?: string[];
}

interface Edge {
  from: string;
  to: string;
  motion: string;
}

interface ChannelMapProps {
  roles: Role[];
  motions: Motion[];
  edges: Edge[];
  selectedRole: string;
  selectedMotion: string;
}

const LABEL_WIDTH = 168;
const CARD_WIDTH = 220;
const CARD_HEIGHT = 140;
const COLUMN_GAP = 32;
const ROW_GAP = 32;

export function ChannelMap({
  roles,
  motions,
  edges,
  selectedRole,
  selectedMotion,
}: ChannelMapProps) {
  const columnCount = motions.length;
  const gridWidth = LABEL_WIDTH + columnCount * CARD_WIDTH + (columnCount - 1) * COLUMN_GAP;
  const gridHeight = roles.length * CARD_HEIGHT + (roles.length - 1) * ROW_GAP;

  const roleIndex = Object.fromEntries(roles.map((role, index) => [role.id, index]));
  const motionIndex = Object.fromEntries(motions.map((motion, index) => [motion.id, index]));

  return (
    <section className="space-y-6">
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-secondary">
          Channel map
        </p>
        <h2 className="text-3xl font-semibold text-brand-primary">Follow the handoffs</h2>
        <p className="max-w-3xl text-base text-brand-secondary">
          Follow the handoffs that turn products into outcomes. Hover a step to see what good looks like
          and track the lanes where your team leads or supports the motion.
        </p>
      </header>

      <div className="relative overflow-x-auto">
        <div
          className="relative inline-grid rounded-[24px] border border-zinc-200 bg-white p-6 shadow-sm"
          style={{
            gridTemplateColumns: `minmax(${LABEL_WIDTH}px, ${LABEL_WIDTH}px) repeat(${columnCount}, minmax(${CARD_WIDTH}px, ${CARD_WIDTH}px))`,
            gridAutoRows: `${CARD_HEIGHT}px`,
            columnGap: `${COLUMN_GAP}px`,
            rowGap: `${ROW_GAP}px`,
          }}
        >
          {roles.map((role, row) => (
            <div
              key={role.id}
              className="flex flex-col justify-center gap-1 border-r border-dashed border-brand-secondary/30 pr-4"
              style={{ gridColumn: "1 / span 1", gridRow: `${row + 1} / span 1`, width: LABEL_WIDTH }}
            >
              <p
                className={clsx(
                  "text-sm font-semibold text-brand-primary",
                  selectedRole === role.id ? "text-brand-primary" : "text-brand-secondary"
                )}
              >
                {role.label}
              </p>
              {role.description ? (
                <p className="text-xs text-brand-secondary">{role.description}</p>
              ) : null}
            </div>
          ))}

          {roles.map((role, row) =>
            motions.map((motion, column) => {
              const isOwner = motion.lane === role.id;
              const isSelectedMotion = selectedMotion === motion.id;
              const isSelectedRole = selectedRole === role.id;
              const isHighlighted = isOwner && (isSelectedMotion || isSelectedRole);

              return (
                <div
                  key={`${role.id}-${motion.id}`}
                  className={clsx(
                    "relative flex h-full flex-col justify-between rounded-[18px] border bg-brand-muted/40 p-4 text-left transition",
                    isOwner
                      ? "border-brand-muted"
                      : "border-dashed border-transparent bg-transparent",
                    isHighlighted && isOwner
                      ? "border-brand-primary bg-white shadow-lg"
                      : isOwner
                      ? "hover:border-brand-primary hover:bg-white"
                      : ""
                  )}
                  style={{ gridColumn: `${column + 2} / span 1`, gridRow: `${row + 1} / span 1` }}
                >
                  {isOwner ? (
                    <>
                      <div className="space-y-2">
                        <p className="text-xs font-semibold uppercase tracking-wide text-brand-secondary">
                          {motion.label}
                        </p>
                        <p className="text-sm font-semibold text-brand-primary">{motion.summary}</p>
                      </div>
                      <div className="space-y-1 text-xs text-brand-secondary">
                        <p className="font-semibold text-brand-primary/80">Good looks like</p>
                        <ul className="space-y-1">
                          {motion.goodLooksLike?.map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <span aria-hidden className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-primary" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : null}
                </div>
              );
            })
          )}

          <svg
            className="pointer-events-none absolute inset-6 h-[calc(100%-3rem)] w-[calc(100%-3rem)]"
            viewBox={`0 0 ${gridWidth} ${gridHeight}`}
            preserveAspectRatio="none"
          >
            <defs>
              <marker
                id="arrowhead"
                markerWidth="12"
                markerHeight="12"
                refX="10"
                refY="6"
                orient="auto"
              >
                <path d="M0,0 L12,6 L0,12 Z" fill="#0B0E1A" />
              </marker>
              <marker
                id="arrowhead-muted"
                markerWidth="12"
                markerHeight="12"
                refX="10"
                refY="6"
                orient="auto"
              >
                <path d="M0,0 L12,6 L0,12 Z" fill="#C3C7D2" />
              </marker>
            </defs>
            {edges.map((edge) => {
              const column = motionIndex[edge.motion];
              const fromRow = roleIndex[edge.from];
              const toRow = roleIndex[edge.to];

              if (column === undefined || fromRow === undefined || toRow === undefined) {
                return null;
              }

              const startX = LABEL_WIDTH + column * (CARD_WIDTH + COLUMN_GAP) + CARD_WIDTH / 2;
              const endX = startX;
              const startY = fromRow * (CARD_HEIGHT + ROW_GAP) + CARD_HEIGHT / 2;
              const endY = toRow * (CARD_HEIGHT + ROW_GAP) + CARD_HEIGHT / 2;
              const controlOffset = Math.abs(endY - startY) / 2 + 40;
              const path = `M ${startX} ${startY} C ${startX + controlOffset} ${startY}, ${endX + controlOffset} ${endY}, ${endX} ${endY}`;
              const isActive = edge.motion === selectedMotion;

              return (
                <path
                  key={`${edge.from}-${edge.to}-${edge.motion}`}
                  d={path}
                  fill="none"
                  stroke={isActive ? "#0B0E1A" : "#C3C7D2"}
                  strokeWidth={isActive ? 3 : 2}
                  markerEnd={`url(#${isActive ? "arrowhead" : "arrowhead-muted"})`}
                  opacity={edge.motion === selectedMotion || selectedMotion === "" ? 1 : 0.6}
                />
              );
            })}
          </svg>
        </div>
      </div>
    </section>
  );
}
