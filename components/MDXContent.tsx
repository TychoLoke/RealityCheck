import { ReactNode } from "react";

interface MDXContentProps {
  children: ReactNode;
}

export function MDXContent({ children }: MDXContentProps) {
  return (
    <div className="prose max-w-none prose-headings:font-semibold prose-headings:text-brand-primary prose-p:text-brand-secondary prose-a:text-brand-primary">
      {children}
    </div>
  );
}
