import type { ComponentPropsWithoutRef, ComponentType } from "react";

type MDXComponents = Record<string, ComponentType<any>>;
type AnchorProps = ComponentPropsWithoutRef<"a">;

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: (props: AnchorProps) => (
      <a
        {...props}
        className="text-brand-primary underline underline-offset-4 transition hover:no-underline"
      />
    ),
    ...components,
  };
}
