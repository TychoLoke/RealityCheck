"use client";

import { useState } from "react";
import { CTAButton } from "./CTAButton";
import { Container } from "./Container";

interface FocusArea {
  label: string;
  headline: string;
  description: string;
  signals: string[];
  stat?: { label: string; value: string };
  action?: { label: string; href: string };
}

interface InteractiveFocusProps {
  areas: FocusArea[];
}

export function InteractiveFocus({ areas }: InteractiveFocusProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeArea = areas[activeIndex];

  return (
    <section className="relative py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-graphite via-cloud to-cloud" />
      <Container className="flex flex-col gap-10">
        <div className="max-w-3xl space-y-4">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral">
            Operating focus
          </span>
          <h2 className="text-2xl font-semibold text-midnight sm:text-3xl">
            Turn the OS into momentum
          </h2>
          <p className="text-base leading-relaxed text-neutral">
            Explore how Channel OS aligns teams around the same habits. Choose a focus area to see the
            operating loops, proof, and outcomes.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {areas.map((area, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={area.label}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-midnight ${
                  isActive
                    ? "border-midnight bg-midnight text-graphite shadow-sm"
                    : "border-midnight/20 bg-cloud text-neutral hover:border-midnight/40 hover:text-midnight"
                }`}
                aria-pressed={isActive}
              >
                {area.label}
              </button>
            );
          })}
        </div>

        <div className="grid gap-10 rounded-3xl border border-midnight/10 bg-cloud p-8 shadow-[0_24px_64px_-48px_rgba(12,15,27,0.25)] lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-neutral">{activeArea.label}</p>
              <h3 className="text-2xl font-semibold text-midnight sm:text-3xl">{activeArea.headline}</h3>
              <p className="text-base leading-relaxed text-neutral">{activeArea.description}</p>
            </div>
            <ul className="grid gap-3 text-sm leading-relaxed text-neutral sm:grid-cols-2">
              {activeArea.signals.map((signal) => (
                <li
                  key={signal}
                  className="flex items-start gap-3 rounded-2xl border border-midnight/10 bg-graphite/70 p-4 transition hover:border-midnight/20"
                >
                  <span aria-hidden="true" className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-neutral" />
                  <span>{signal}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-between gap-6 rounded-3xl border border-midnight/10 bg-graphite/80 p-6 text-neutral">
            {activeArea.stat ? (
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral">{activeArea.stat.label}</p>
                <p className="text-4xl font-semibold text-midnight">{activeArea.stat.value}</p>
              </div>
            ) : null}

            <p className="text-sm leading-relaxed text-neutral">
              Each focus area comes with templates, live labs, and checklists you can apply instantly inside your
              channel program.
            </p>

            {activeArea.action ? (
              <CTAButton href={activeArea.action.href}>{activeArea.action.label}</CTAButton>
            ) : (
              <div className="rounded-2xl border border-midnight/10 bg-graphite/70 p-4 text-sm leading-relaxed text-neutral">
                Pick a focus to explore its playbooks and recommended next steps.
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
