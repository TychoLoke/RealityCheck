import { CTAButton } from "./CTAButton";
import { Container } from "./Container";

interface HeroProps {
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  tertiaryCta?: { label: string; href: string };
  tagline?: string;
  eyebrow?: string;
}

export function Hero({
  title,
  description,
  primaryCta,
  secondaryCta,
  tertiaryCta,
  tagline,
  eyebrow,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-midnight/10 bg-gradient-to-b from-white via-white to-graphite py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(11,14,26,0.16),transparent_60%)]" />
      <Container className="flex flex-col items-start gap-10 text-left">
        <div className="flex flex-col gap-6">
          <span className="inline-flex items-center rounded-full border border-midnight/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-neutral">
            {eyebrow ?? "Vendor-neutral by design"}
          </span>
          <h1 className="text-4xl font-semibold text-midnight sm:text-5xl lg:text-6xl">{title}</h1>
          {tagline ? (
            <p className="text-xl font-medium text-neutral sm:text-2xl">{tagline}</p>
          ) : null}
          <p className="max-w-3xl text-lg leading-relaxed text-neutral sm:text-xl">{description}</p>
          <div className="flex flex-wrap gap-3">
            <CTAButton href={primaryCta.href}>{primaryCta.label}</CTAButton>
            <CTAButton href={secondaryCta.href} variant="secondary">
              {secondaryCta.label}
            </CTAButton>
            {tertiaryCta ? (
              <CTAButton href={tertiaryCta.href} variant="ghost">
                {tertiaryCta.label}
              </CTAButton>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
