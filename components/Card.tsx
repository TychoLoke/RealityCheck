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
      "border-midnight/10 bg-white/95 text-midnight shadow-card backdrop-blur hover:border-midnight/20 hover:shadow-xl focus-within:border-midnight/20 focus-within:shadow-xl",
    title: "text-midnight",
    body: "text-neutral",
  },
  inverted: {
    container:
      "border-white/15 bg-white/10 text-cloud shadow-[0_24px_64px_-40px_rgba(11,14,26,0.65)] hover:border-white/25 hover:shadow-[0_28px_70px_-40px_rgba(11,14,26,0.85)] focus-within:border-white/25 focus-within:shadow-[0_28px_70px_-40px_rgba(11,14,26,0.85)]",
    title: "text-white",
    body: "text-cloud/80",
  },
  translucent: {
    container:
      "border-white/20 bg-white/70 text-midnight shadow-card backdrop-blur hover:border-white/40 hover:shadow-xl focus-within:border-white/40 focus-within:shadow-xl",
    title: "text-midnight",
    body: "text-neutral",
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
      className={`group relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl border p-6 transition-all duration-200 hover:-translate-y-1 focus-within:-translate-y-1 ${styles.container} ${className}`}
    >
      <span className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-signalAmber via-accentTeal to-accentBlue opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100" />
      <div>
        <h3 className={`text-lg font-semibold ${styles.title}`}>{title}</h3>
        {description ? <p className={`mt-2 text-sm leading-relaxed ${styles.body}`}>{description}</p> : null}
      </div>
      {children ? <div className={`text-sm leading-relaxed ${styles.body}`}>{children}</div> : null}
    </Component>
  );
}
