import { ReactNode } from "react";

type CardVariant = "default" | "inverted" | "translucent";

interface CardProps {
  title: string;
  description?: string;
  children?: ReactNode;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  variant?: CardVariant;
}

const variantStyles: Record<CardVariant, { container: string; title: string; body: string }> = {
  default: {
    container:
      "border-white/10 bg-white/5 text-white/90 shadow-[0_24px_64px_-48px_rgba(14,165,233,0.45)] backdrop-blur hover:border-white/20 hover:shadow-[0_32px_80px_-48px_rgba(37,99,235,0.5)] focus-within:border-white/20 focus-within:shadow-[0_32px_80px_-48px_rgba(37,99,235,0.5)]",
    title: "text-white",
    body: "text-white/70",
  },
  inverted: {
    container:
      "border-midnight/5 bg-cloud text-midnight shadow-[0_24px_64px_-48px_rgba(5,11,26,0.2)] hover:border-midnight/10 hover:shadow-[0_32px_80px_-48px_rgba(5,11,26,0.25)] focus-within:border-midnight/10 focus-within:shadow-[0_32px_80px_-48px_rgba(5,11,26,0.25)]",
    title: "text-midnight",
    body: "text-neutral",
  },
  translucent: {
    container:
      "border-white/10 bg-white/10 text-white/80 shadow-[0_24px_64px_-48px_rgba(14,165,233,0.3)] backdrop-blur hover:border-white/20 hover:shadow-[0_32px_80px_-48px_rgba(14,165,233,0.4)] focus-within:border-white/20 focus-within:shadow-[0_32px_80px_-48px_rgba(14,165,233,0.4)]",
    title: "text-white",
    body: "text-white/70",
  },
};

export function Card({
  title,
  description,
  children,
  as: Component = "div",
  className = "",
  variant = "default",
}: CardProps) {
  const styles = variantStyles[variant];

  return (
    <Component
      className={`group relative flex h-full flex-col gap-4 overflow-hidden rounded-3xl border p-6 transition-all duration-200 hover:-translate-y-1 focus-within:-translate-y-1 ${styles.container} ${className}`}
    >
      <span className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-white/10 via-white/40 to-white/10 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100" />
      <div>
        <h3 className={`text-lg font-semibold ${styles.title}`}>{title}</h3>
        {description ? <p className={`mt-2 text-sm leading-relaxed ${styles.body}`}>{description}</p> : null}
      </div>
      {children ? <div className={`text-sm leading-relaxed ${styles.body}`}>{children}</div> : null}
    </Component>
  );
}
