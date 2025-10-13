import { ReactNode } from "react";

interface CardProps {
  title: string;
  description?: string;
  children?: ReactNode;
  as?: keyof JSX.IntrinsicElements;
}

export function Card({ title, description, children, as: Component = "div" }: CardProps) {
  return (
    <Component className="flex h-full flex-col gap-4 rounded-2xl bg-graphite/70 p-6 text-cloud shadow-card backdrop-blur">
      <div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        {description ? <p className="mt-2 text-sm leading-relaxed text-neutral">{description}</p> : null}
      </div>
      {children ? <div className="text-sm leading-relaxed text-neutral">{children}</div> : null}
    </Component>
  );
}
