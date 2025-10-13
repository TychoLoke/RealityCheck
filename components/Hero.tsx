import { CTAButton } from "./CTAButton";
import { Container } from "./Container";

interface HeroProps {
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}

export function Hero({ title, description, primaryCta, secondaryCta }: HeroProps) {
  return (
    <section className="border-b border-white/10 bg-gradient-to-b from-white/5 to-transparent py-20 sm:py-24">
      <Container className="flex flex-col items-start gap-8 text-left">
        <div className="flex flex-col gap-6">
          <span className="inline-flex items-center rounded-full border border-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accentTeal">
            Vendor Neutral • Community Driven
          </span>
          <h1 className="text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">{title}</h1>
          <p className="max-w-2xl text-base leading-relaxed text-neutral sm:text-lg">{description}</p>
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
