"use client";

import { useMemo, useState } from "react";
import { CTAButton } from "./CTAButton";
import { Container } from "./Container";

interface JourneyStep {
  label: string;
  headline: string;
  description: string;
  takeaway: string;
  action: { label: string; href: string };
}

interface JourneyExperienceProps {
  steps: JourneyStep[];
  eyebrow?: string;
  title?: string;
  description?: string;
  successHeading?: string;
  successPoints?: string[];
  variant?: "default" | "inverted";
}

export function JourneyExperience({
  steps,
  eyebrow = "Channel OS journey",
  title = "Plot your path from discover to contribute",
  description =
    "Every stage of the operating system comes with guidance, templates, and community touchpoints. Click through the steps to see what unlocks next.",
  successHeading = "What success looks like:",
  successPoints = [
    "Shared vocabulary and playbooks across the channel network.",
    "Auditable SLAs and metrics that keep partners accountable.",
    "Certification signals that travel with people, teams, and platforms.",
  ],
  variant = "default",
}: JourneyExperienceProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStep = steps[activeIndex];
  const progress = useMemo(() => ((activeIndex + 1) / steps.length) * 100, [activeIndex, steps.length]);
  const isInverted = variant === "inverted";
  const sectionBackground = isInverted
    ? "bg-gradient-to-br from-midnight via-[#10192f] to-[#0b0e1a]"
    : "bg-graphite";
  const eyebrowClasses = "text-sm font-semibold uppercase tracking-[0.3em] text-neutral";
  const titleClasses = isInverted
    ? "text-2xl font-semibold text-graphite sm:text-3xl"
    : "text-2xl font-semibold text-midnight sm:text-3xl";
  const descriptionClasses = "text-base leading-relaxed text-neutral";
  const focusOutline = isInverted ? "focus-visible:outline-neutral" : "focus-visible:outline-midnight";
  const stepButtonBase =
    "flex items-center gap-3 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";
  const stepButtonActive = isInverted
    ? "border-midnight bg-graphite text-midnight shadow-sm"
    : "border-midnight bg-midnight text-graphite shadow-sm";
  const stepButtonInactive = isInverted
    ? "border-graphite/30 bg-midnight/40 text-neutral hover:border-graphite/60 hover:text-graphite"
    : "border-midnight/20 bg-cloud text-neutral hover:border-midnight/40 hover:text-midnight";
  const panelBackground = isInverted
    ? "rounded-3xl border border-graphite/20 bg-graphite p-8 text-midnight shadow-[0_24px_64px_-40px_rgba(12,15,27,0.55)]"
    : "rounded-3xl border border-midnight/10 bg-cloud p-8 text-midnight shadow-[0_24px_64px_-48px_rgba(12,15,27,0.2)]";
  const labelClasses = "text-sm font-semibold uppercase tracking-[0.28em] text-neutral";
  const headlineClasses = isInverted
    ? "text-2xl font-semibold text-midnight sm:text-3xl"
    : "text-2xl font-semibold text-midnight sm:text-3xl";
  const copyClasses = "text-base leading-relaxed text-neutral";
  const takeawayClasses = isInverted
    ? "rounded-2xl border border-midnight/20 bg-midnight/5 p-5 text-sm leading-relaxed text-midnight/80"
    : "rounded-2xl border border-midnight/10 bg-graphite/80 p-5 text-sm leading-relaxed text-neutral";
  const ctaVariant = isInverted ? "inverted" : "primary";
  const progressTrackClasses = isInverted ? "bg-midnight/30" : "bg-midnight/10";
  const progressBarClasses = isInverted ? "bg-graphite" : "bg-midnight";
  const progressTextClasses = "text-sm font-medium text-neutral";
  const successWrapperClasses = isInverted
    ? "flex flex-col justify-between gap-6 rounded-3xl border border-midnight/20 bg-midnight/5 p-6 text-midnight"
    : "flex flex-col justify-between gap-6 rounded-3xl border border-midnight/10 bg-graphite/80 p-6 text-neutral";
  const successEyebrowClasses = "text-xs font-semibold uppercase tracking-[0.3em] text-neutral";
  const successHeadingClasses = isInverted
    ? "text-sm font-semibold text-graphite"
    : "text-sm font-semibold text-midnight";
  const successBodyClasses = "space-y-3 text-sm leading-relaxed text-neutral";
  const successBulletClasses = "flex items-start gap-2";
  const successDotClasses = isInverted
    ? "mt-1 h-2 w-2 flex-none rounded-full bg-neutral"
    : "mt-1 h-2 w-2 flex-none rounded-full bg-midnight/60";

  return (
    <section className={`py-16 sm:py-20 ${sectionBackground}`}>
      <Container className="flex flex-col gap-10">
        <div className="max-w-3xl space-y-4">
          <span className={eyebrowClasses}>{eyebrow}</span>
          <h2 className={titleClasses}>{title}</h2>
          <p className={descriptionClasses}>{description}</p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {steps.map((step, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={step.label}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`${stepButtonBase} ${focusOutline} ${
                  isActive ? stepButtonActive : stepButtonInactive
                }`}
                aria-pressed={isActive}
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-current text-[0.65rem]">
                  {index + 1}
                </span>
                {step.label}
              </button>
            );
          })}
        </div>

        <div className={`relative overflow-hidden ${panelBackground}`}>
          <span className="pointer-events-none absolute inset-x-8 top-0 h-1 rounded-full bg-gradient-to-r from-neutral via-graphite to-midnight" />
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <div className="space-y-3">
                <p className={labelClasses}>{activeStep.label}</p>
                <h3 className={headlineClasses}>{activeStep.headline}</h3>
                <p className={copyClasses}>{activeStep.description}</p>
              </div>
              <div className={takeawayClasses}>{activeStep.takeaway}</div>
              <CTAButton href={activeStep.action.href} variant={ctaVariant}>
                {activeStep.action.label}
              </CTAButton>
            </div>

            <div className={successWrapperClasses}>
              <div>
                <p className={successEyebrowClasses}>Progress</p>
                <div className={`mt-3 h-2 w-full overflow-hidden rounded-full ${progressTrackClasses}`}>
                  <div
                    className={`h-full rounded-full transition-all duration-300 ${progressBarClasses}`}
                    style={{ width: `${progress}%` }}
                    aria-hidden="true"
                  />
                </div>
                <p className={`mt-3 ${progressTextClasses}`}>
                  {activeIndex + 1} of {steps.length} phases
                </p>
              </div>

              <div className={successBodyClasses}>
                <p className={successHeadingClasses}>{successHeading}</p>
                <ul className="space-y-2">
                  {successPoints.map((point) => (
                    <li key={point} className={successBulletClasses}>
                      <span aria-hidden="true" className={successDotClasses} />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
