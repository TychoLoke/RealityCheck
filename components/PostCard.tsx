import Link from "next/link";

interface PostCardProps {
  slug: string;
  title: string;
  summary: string;
  date: string;
}

export function PostCard({ slug, title, summary, date }: PostCardProps) {
  return (
    <article className="flex flex-col gap-4 rounded-2xl border border-slate/60 bg-night/70 p-6 shadow-surface transition hover:-translate-y-1 hover:border-accent/60">
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-ink/50">{date}</p>
        <h2 className="text-xl font-semibold text-ink">
          <Link href={`/journal/${slug}`}>{title}</Link>
        </h2>
        <p className="text-sm text-ink/70">{summary}</p>
      </div>
      <Link href={`/journal/${slug}`} className="text-sm font-semibold text-accent transition hover:text-accentSoft">
        Read update
      </Link>
    </article>
  );
}
