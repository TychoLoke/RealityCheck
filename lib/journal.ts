import BuildingTheStandard, { metadata as buildingMeta } from "../content/journal/building-the-standard.mdx";
import ChannelLanguage, { metadata as languageMeta } from "../content/journal/channel-language.mdx";
import BaselineDrift, { metadata as baselineMeta } from "../content/journal/baseline-drift.mdx";

export interface JournalEntry {
  slug: string;
  title: string;
  summary: string;
  date: string;
  component: () => JSX.Element;
}

function withComponent(
  slug: string,
  metadata: Record<string, string>,
  Component: () => JSX.Element,
): JournalEntry {
  return {
    slug,
    title: metadata.title,
    summary: metadata.summary,
    date: metadata.date,
    component: Component,
  };
}

export const journalEntries: JournalEntry[] = [
  withComponent("building-the-standard", buildingMeta, BuildingTheStandard),
  withComponent("channel-language", languageMeta, ChannelLanguage),
  withComponent("baseline-drift", baselineMeta, BaselineDrift),
].sort((a, b) => (a.date < b.date ? 1 : -1));

export function getJournalEntry(slug: string): JournalEntry | undefined {
  return journalEntries.find((entry) => entry.slug === slug);
}
