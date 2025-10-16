import Link from "next/link";

interface PostCardProps {
  slug: string;
  title: string;
  summary: string;
  date: string;
}

export function PostCard({ slug, title, summary, date }: PostCardProps) {
  return (
    <article className="flex flex-col gap-4 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-secondary">{date}</p>
        <h2 className="text-xl font-semibold text-brand-primary">
          <Link href={`/journal/${slug}`}>{title}</Link>
        </h2>
        <p className="text-sm text-brand-secondary">{summary}</p>
      </div>
      <Link href={`/journal/${slug}`} className="text-sm font-semibold text-brand-primary underline-offset-4 hover:underline">
        Read update
      </Link>
    </article>
  );
}
