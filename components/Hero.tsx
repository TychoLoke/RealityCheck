import { CTAButton } from "./CTAButton";
import { Container } from "./Container";

interface HeroProps {
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  tertiaryCta?: { label: string; href: string };
  tagline?: string;
  eyebrow?: string;
  proofPoints?: string[];
}

export function Hero({
  title,
  description,
  primaryCta,
  secondaryCta,
  tertiaryCta,
  tagline,
  eyebrow,
  proofPoints = [],
}: HeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-midnight/10 bg-gradient-to-b from-white via-white to-graphite py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(11,14,26,0.1),transparent_65%)]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 -z-10 hidden w-1/2 bg-[radial-gradient(circle_at_center,rgba(11,14,26,0.06),transparent_60%)] sm:block" />
      <Container className="flex flex-col items-start gap-12 text-left">
        <div className="flex flex-col gap-6">
          <span className="inline-flex items-center gap-3 rounded-full border border-midnight/10 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-neutral backdrop-blur">
            {eyebrow ?? "Vendor-neutral by design"}
          </span>
          <h1 className="text-4xl font-semibold text-midnight sm:text-5xl lg:text-6xl">{title}</h1>
          {tagline ? (
            <p className="text-xl font-medium text-neutral sm:text-2xl">{tagline}</p>
          ) : null}
          <p className="max-w-3xl text-lg leading-relaxed text-neutral sm:text-xl">{description}</p>
          <div className="flex flex-wrap items-center gap-3">
            <CTAButton href={primaryCta.href}>{primaryCta.label}</CTAButton>
            {secondaryCta ? (
              <CTAButton href={secondaryCta.href} variant="ghost" className="px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em]">
                {secondaryCta.label}
              </CTAButton>
            ) : null}
            {tertiaryCta ? (
              <CTAButton href={tertiaryCta.href} variant="ghost" className="px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em]">
                {tertiaryCta.label}
              </CTAButton>
            ) : null}
          </div>
        </div>
        {proofPoints.length ? (
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-[0.28em] text-neutral">
            {proofPoints.map((point) => (
              <span key={point} className="flex items-center gap-2">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accentBlue/70" />
                {point}
              </span>
            ))}
          </div>
        ) : null}
      </Container>
    </section>
  );
}
