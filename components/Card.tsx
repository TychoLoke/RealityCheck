import { ReactNode } from "react";

interface CardProps {
  title: string;
  description?: string;
  children?: ReactNode;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
}

export function Card({ title, description, children, as: Component = "div", className = "" }: CardProps) {
  return (
    <Component
      className={`flex h-full flex-col gap-4 rounded-2xl border border-midnight/10 bg-white/95 p-6 text-midnight shadow-card backdrop-blur ${className}`}
    >
      <div>
        <h3 className="text-lg font-semibold text-midnight">{title}</h3>
        {description ? <p className="mt-2 text-sm leading-relaxed text-neutral">{description}</p> : null}
      </div>
      {children ? <div className="text-sm leading-relaxed text-neutral">{children}</div> : null}
    </Component>
  );
}
