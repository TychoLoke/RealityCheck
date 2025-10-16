import { Card } from "./Card";
import { AudioPlayerStub } from "./AudioPlayerStub";

interface EpisodeCardProps {
  title: string;
  guest: string;
  summary: string;
  runtime: string;
}

export function EpisodeCard({ title, guest, summary, runtime }: EpisodeCardProps) {
  return (
    <Card className="flex flex-col gap-4">
      <div>
        <p className="text-sm font-semibold text-brand-secondary">{runtime}</p>
        <h3 className="mt-1 text-xl font-semibold text-brand-primary">{title}</h3>
        <p className="text-base text-brand-secondary">Guest: {guest}</p>
      </div>
      <p className="text-sm text-brand-secondary">{summary}</p>
      <AudioPlayerStub />
    </Card>
  );
}
