import { CTAButton } from "./CTAButton";
import { Container } from "./Container";

const actions = [
  { label: "Explore the Academy", href: "/academy" },
  { label: "Join the Community", href: "/community" },
  { label: "Read the Standard v1.0", href: "/standard" },
];

export function ActionBand() {
  return (
    <div className="relative z-40">
      <Container className="flex flex-wrap items-center justify-center gap-3 py-3">
        {actions.map((action) => (
          <CTAButton
            key={action.href}
            href={action.href}
            variant="ghost"
            className="group gap-2 rounded-full border border-midnight/10 bg-cloud px-5 py-2 text-[0.65rem] uppercase tracking-[0.32em] text-midnight/70 shadow-[0_12px_30px_-20px_rgba(11,14,26,0.4)] hover:border-midnight/30 hover:bg-midnight/5"
          >
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-gradient-to-br from-accentBlue to-accentTeal transition group-hover:scale-110" aria-hidden="true" />
            {action.label}
          </CTAButton>
        ))}
      </Container>
    </div>
  );
}
