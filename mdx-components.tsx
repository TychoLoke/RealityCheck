import type { ComponentPropsWithoutRef, ComponentType } from "react";

type MDXComponents = Record<string, ComponentType<any>>;
type AnchorProps = ComponentPropsWithoutRef<"a">;

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: (props: AnchorProps) => (
      <a
        {...props}
        className="text-accent underline decoration-dotted underline-offset-4 transition hover:text-accent/80"
      />
    ),
    ...components,
  };
}
