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
            className="group gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-[0.65rem] uppercase tracking-[0.32em] text-white/70 hover:border-white/20 hover:bg-white/10"
          >
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-gradient-to-br from-accentBlue to-accentTeal transition group-hover:scale-110" aria-hidden="true" />
            {action.label}
          </CTAButton>
        ))}
      </Container>
    </div>
  );
}
