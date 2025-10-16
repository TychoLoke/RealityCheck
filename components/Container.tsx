import { ReactNode } from "react";
import clsx from "clsx";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export function Container({ children, className, as: Component = "div" }: ContainerProps) {
  return (
    <Component className={clsx("mx-auto w-full max-w-content px-6 sm:px-10", className)}>
      {children}
    </Component>
  );
}
