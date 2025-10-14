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
      "border-midnight/10 bg-cloud text-midnight/90 shadow-[0_20px_60px_-45px_rgba(11,14,26,0.18)] hover:border-midnight/30 hover:shadow-[0_28px_80px_-48px_rgba(11,14,26,0.22)] focus-within:border-midnight/30 focus-within:shadow-[0_28px_80px_-48px_rgba(11,14,26,0.22)]",
    title: "text-midnight",
    body: "text-neutral",
  },
  inverted: {
    container:
      "border-white/15 bg-midnight text-white shadow-[0_24px_70px_-45px_rgba(11,14,26,0.55)] hover:border-white/25 hover:shadow-[0_32px_90px_-48px_rgba(11,14,26,0.6)] focus-within:border-white/25 focus-within:shadow-[0_32px_90px_-48px_rgba(11,14,26,0.6)]",
    title: "text-white",
    body: "text-white/80",
  },
  translucent: {
    container:
      "border-midnight/10 bg-graphite text-midnight/90 shadow-[0_20px_60px_-45px_rgba(11,14,26,0.15)] hover:border-midnight/25 hover:shadow-[0_28px_80px_-48px_rgba(11,14,26,0.2)] focus-within:border-midnight/25 focus-within:shadow-[0_28px_80px_-48px_rgba(11,14,26,0.2)]",
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
