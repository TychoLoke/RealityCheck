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
  variant?: "light" | "dark";
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
  variant = "light",
}: HeroProps) {
  const isDark = variant === "dark";
  const sectionBackground = isDark
    ? "border-graphite/15 bg-gradient-to-b from-midnight via-[#111931] to-[#0b0e1a]"
    : "border-graphite/15 bg-gradient-to-b from-midnight/80 via-midnight/70 to-midnight/80";
  const eyebrowClasses =
    "inline-flex items-center gap-3 rounded-full border border-neutral/40 bg-midnight/60 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-neutral backdrop-blur";
  const titleClasses = "text-4xl font-semibold text-graphite sm:text-5xl lg:text-6xl";
  const taglineClasses = "text-xl font-medium text-neutral sm:text-2xl";
  const descriptionClasses = "max-w-3xl text-lg leading-relaxed text-neutral sm:text-xl";
  const proofPointClasses = "flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-[0.28em] text-neutral";
  const proofDotClasses = "h-1.5 w-1.5 rounded-full bg-neutral";
  const ghostButtonClasses = "px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-neutral";
  const primaryButtonClasses = "";

  return (
    <section
      className={`relative overflow-hidden border-b py-20 sm:py-24 ${sectionBackground}`}
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(138,147,166,0.12),transparent_65%)]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 -z-10 hidden w-1/2 bg-[radial-gradient(circle_at_center,rgba(138,147,166,0.08),transparent_60%)] sm:block" />
      <Container className="flex flex-col items-start gap-12 text-left">
        <div className="flex flex-col gap-6">
          <span className={eyebrowClasses}>
            {eyebrow ?? "Vendor-neutral by design"}
          </span>
          <h1 className={titleClasses}>{title}</h1>
          {tagline ? <p className={taglineClasses}>{tagline}</p> : null}
          <p className={descriptionClasses}>{description}</p>
          <div className="flex flex-wrap items-center gap-3">
            <CTAButton href={primaryCta.href} className={primaryButtonClasses}>
              {primaryCta.label}
            </CTAButton>
            {secondaryCta ? (
              <CTAButton
                href={secondaryCta.href}
                variant={isDark ? "inverted" : "ghost"}
                className={ghostButtonClasses}
              >
                {secondaryCta.label}
              </CTAButton>
            ) : null}
            {tertiaryCta ? (
              <CTAButton
                href={tertiaryCta.href}
                variant={isDark ? "inverted" : "ghost"}
                className={ghostButtonClasses}
              >
                {tertiaryCta.label}
              </CTAButton>
            ) : null}
          </div>
        </div>
        {proofPoints.length ? (
          <div className={proofPointClasses}>
            {proofPoints.map((point) => (
              <span key={point} className="flex items-center gap-2">
                <span aria-hidden="true" className={proofDotClasses} />
                {point}
              </span>
            ))}
          </div>
        ) : null}
      </Container>
    </section>
  );
}
