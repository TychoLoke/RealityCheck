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
      "border-midnight/10 bg-cloud text-midnight shadow-[0_24px_64px_-48px_rgba(12,15,27,0.2)] hover:border-midnight/20 hover:shadow-[0_28px_72px_-48px_rgba(12,15,27,0.25)] focus-within:border-midnight/20 focus-within:shadow-[0_28px_72px_-48px_rgba(12,15,27,0.25)]",
    title: "text-midnight",
    body: "text-neutral",
  },
  inverted: {
    container:
      "border-midnight/30 bg-graphite text-midnight shadow-[0_24px_64px_-48px_rgba(12,15,27,0.45)] hover:border-midnight/40 hover:shadow-[0_32px_80px_-48px_rgba(12,15,27,0.55)] focus-within:border-midnight/40 focus-within:shadow-[0_32px_80px_-48px_rgba(12,15,27,0.55)]",
    title: "text-midnight",
    body: "text-midnight/80",
  },
  translucent: {
    container:
      "border-midnight/10 bg-graphite/80 text-midnight shadow-[0_24px_64px_-48px_rgba(12,15,27,0.15)] backdrop-blur hover:border-midnight/20 hover:shadow-[0_28px_72px_-48px_rgba(12,15,27,0.2)] focus-within:border-midnight/20 focus-within:shadow-[0_28px_72px_-48px_rgba(12,15,27,0.2)]",
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
      <span className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-neutral via-graphite to-midnight opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100" />
      <div>
        <h3 className={`text-lg font-semibold ${styles.title}`}>{title}</h3>
        {description ? <p className={`mt-2 text-sm leading-relaxed ${styles.body}`}>{description}</p> : null}
      </div>
      {children ? <div className={`text-sm leading-relaxed ${styles.body}`}>{children}</div> : null}
    </Component>
  );
}
