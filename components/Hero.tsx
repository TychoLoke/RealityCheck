import { CTAButton } from "./CTAButton";
import { Container } from "./Container";

interface HeroProps {
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  tagline?: string;
  eyebrow?: string;
}

export function Hero({ title, description, primaryCta, secondaryCta, tagline, eyebrow }: HeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 py-20 sm:py-24">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(28deg,rgba(91,92,235,0.28)_0%,rgba(0,179,164,0.22)_55%,rgba(11,14,26,0.7)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)]" />
      <Container className="flex flex-col items-start gap-8 text-left">
        <div className="flex flex-col gap-6">
          <span className="inline-flex items-center rounded-full border border-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accentTeal">
            {eyebrow ?? "Vendor-neutral by design"}
          </span>
          <h1 className="text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">{title}</h1>
          {tagline ? (
            <p className="text-lg font-medium text-cloud/80 sm:text-xl">{tagline}</p>
          ) : null}
          <p className="max-w-3xl text-base leading-relaxed text-neutral sm:text-lg">{description}</p>
          <div className="flex flex-wrap gap-4">
            <CTAButton href={primaryCta.href}>{primaryCta.label}</CTAButton>
            <CTAButton href={secondaryCta.href} variant="secondary">
              {secondaryCta.label}
            </CTAButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
