declare module "*.mdx" {
  let MDXComponent: (props: Record<string, unknown>) => JSX.Element;
  export const metadata: Record<string, any>;
  export default MDXComponent;
}
