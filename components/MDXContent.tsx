import { ReactNode } from "react";

interface MDXContentProps {
  children: ReactNode;
}

export function MDXContent({ children }: MDXContentProps) {
  return (
    <div className="prose prose-invert prose-headings:font-semibold prose-headings:text-ink prose-p:text-ink/80 prose-strong:text-ink max-w-none">
      {children}
    </div>
  );
}
