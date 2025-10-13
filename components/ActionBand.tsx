import { CTAButton } from "./CTAButton";
import { Container } from "./Container";

const actions = [
  { label: "Start Channel 101", href: "/school" },
  { label: "Join the Community", href: "/community" },
  { label: "Read the Standard v1.0", href: "/standard" },
];

export function ActionBand() {
  return (
    <div className="border-b border-midnight/5 bg-white/80 backdrop-blur">
      <Container className="flex flex-wrap items-center justify-center gap-3 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-neutral">
        {actions.map((action) => (
          <CTAButton key={action.href} href={action.href} variant="ghost" className="px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-midnight hover:text-neutral">
            {action.label}
          </CTAButton>
        ))}
      </Container>
    </div>
  );
}
