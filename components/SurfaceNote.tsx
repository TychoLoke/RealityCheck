import { ReactNode } from "react";
import { Container } from "./Container";

interface SurfaceNoteProps {
  children: ReactNode;
  tone?: "default" | "inverted";
  align?: "left" | "center";
  className?: string;
}

const toneStyles = {
  default: "border-midnight/10 bg-cloud text-neutral shadow-[0_24px_64px_-48px_rgba(11,14,26,0.18)]",
  inverted: "border-white/20 bg-midnight text-white/80 shadow-[0_24px_70px_-48px_rgba(11,14,26,0.55)]",
};

export function SurfaceNote({
  children,
  tone = "default",
  align = "left",
  className = "",
}: SurfaceNoteProps) {
  const alignment = align === "center" ? "text-center" : "text-left";

  return (
    <Container className={`max-w-3xl ${className}`}>
      <div
        className={`rounded-[var(--radius-xl)] border px-6 py-5 text-sm leading-relaxed sm:px-8 sm:py-6 ${toneStyles[tone]} ${alignment}`}
      >
        {children}
      </div>
    </Container>
  );
}
