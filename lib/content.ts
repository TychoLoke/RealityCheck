export type EventFormat = "Online" | "In-person";

export type Event = {
  title: string;
  date: string; // YYYY-MM-DD
  time: string;
  location: string;
  format: EventFormat;
  value: string;
  rsvpUrl: string;
  slidesUrl?: string;
  replayUrl?: string;
  notesUrl?: string;
};

export type Talk = {
  title: string;
  guests: string;
  insight: string;
  episodeUrl: string;
  audioUrl?: string;
  videoUrl?: string;
  transcriptUrl?: string;
};

export type Playbook = {
  title: string;
  summary: string;
  downloads?: string;
  difficulty: "Starter" | "Practitioner" | "Advanced";
  timeToShip: string;
  tags: string[];
};

export type TrainingTrack = {
  title: string;
  outline: string;
  duration: string;
  sessions: string;
};

export const events: Event[] = [
  {
    title: "Channel Sprint: Mapping Partner Outcomes",
    date: "2024-09-19",
    time: "09:00 PT",
    location: "Online",
    format: "Online",
    value: "Align partner health metrics for Q4 planning.",
    rsvpUrl: "https://example.com/rsvp-outcomes",
    slidesUrl: "https://example.com/slides-outcomes",
    replayUrl: "https://example.com/replay-outcomes",
  },
  {
    title: "Operator Circle: Service Baselines in 30 Days",
    date: "2024-08-08",
    time: "10:00 ET",
    location: "Online",
    format: "Online",
    value: "See how MSPs stand up baseline monitoring fast.",
    rsvpUrl: "https://example.com/rsvp-baselines",
    slidesUrl: "https://example.com/slides-baselines",
    replayUrl: "https://example.com/replay-baselines",
  },
  {
    title: "Channel Lab Live: Marketplace Integrations",
    date: "2024-06-12",
    time: "14:00 CET",
    location: "Berlin, DE",
    format: "In-person",
    value: "Share adapters and data flows that reduce swivel chair work.",
    rsvpUrl: "https://example.com/rsvp-marketplace",
    slidesUrl: "https://example.com/slides-marketplace",
    replayUrl: "https://example.com/replay-marketplace",
    notesUrl: "https://example.com/notes-marketplace",
  },
];

export const talks: Talk[] = [
  {
    title: "Episode 12 — Designing Partner Scorecards",
    guests: "Amara Sen (Northwind MSP)",
    insight: "Scorecards move partners from guesswork to shared accountability.",
    episodeUrl: "https://example.com/talks/episode-12",
    audioUrl: "https://example.com/audio-12.mp3",
    videoUrl: "https://example.com/video-12.mp4",
    transcriptUrl: "https://example.com/transcript-12",
  },
  {
    title: "Episode 11 — Distribution Without Friction",
    guests: "Luis Ortega (LatAm Distributor Collective)",
    insight: "Tight data contracts keep incentives aligned through the channel.",
    episodeUrl: "https://example.com/talks/episode-11",
    audioUrl: "https://example.com/audio-11.mp3",
    transcriptUrl: "https://example.com/transcript-11",
  },
  {
    title: "Episode 10 — Security Hygiene at Scale",
    guests: "Priya Nandakumar (CISO, Alloy Partners)",
    insight: "Baseline security lets every partner move faster with confidence.",
    episodeUrl: "https://example.com/talks/episode-10",
    videoUrl: "https://example.com/video-10.mp4",
    transcriptUrl: "https://example.com/transcript-10",
  },
];

export const playbooks: Playbook[] = [
  {
    title: "Partner Launch Checklist",
    summary: "Ship a partner-ready offer with approvals, handoffs, and KPIs in place.",
    downloads: "Checklist (Google Sheets)",
    difficulty: "Starter",
    timeToShip: "1 week",
    tags: ["GTM", "Ops"],
  },
  {
    title: "Incident Escalation Template",
    summary: "Map the 24-hour response path from trigger to resolution across partners.",
    downloads: "Runbook (Notion)",
    difficulty: "Practitioner",
    timeToShip: "3 days",
    tags: ["Security", "Ops"],
  },
  {
    title: "Marketplace Listing Optimizer",
    summary: "Capture data, visuals, and proof so marketplaces can publish without rework.",
    downloads: "Template (FigJam)",
    difficulty: "Advanced",
    timeToShip: "5 days",
    tags: ["GTM", "Data"],
  },
];

export const trainingTracks: TrainingTrack[] = [
  {
    title: "GTM Essentials",
    outline: "ICP, offers, narrative, partner motions.",
    duration: "4 × 1 h",
    sessions: "Weekly live sessions with scorecards.",
  },
  {
    title: "Operational Maturity",
    outline: "Roles, runbooks, scorecards.",
    duration: "4 × 1 h",
    sessions: "Live build reviews and templates.",
  },
  {
    title: "Data & AI Readiness",
    outline: "Governance, value cases, adoption.",
    duration: "3 × 1 h",
    sessions: "Model primers with implementation plans.",
  },
  {
    title: "Security-by-Default",
    outline: "Baselines, monitoring, incident flow.",
    duration: "3 × 1 h",
    sessions: "Control mapping and tabletop drills.",
  },
];

export function getUpcomingEvents(reference = new Date()): Event[] {
  return events.filter((event) => new Date(event.date) >= startOfDay(reference)).sort(sortByDateAsc);
}

export function getPastEvents(reference = new Date()): Event[] {
  return events.filter((event) => new Date(event.date) < startOfDay(reference)).sort(sortByDateDesc);
}

export function getLatestTalk(): Talk | undefined {
  return talks[0];
}

export function getNextEvent(): Event | undefined {
  return getUpcomingEvents()[0];
}

function startOfDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function sortByDateAsc(a: Event, b: Event) {
  return new Date(a.date).getTime() - new Date(b.date).getTime();
}

function sortByDateDesc(a: Event, b: Event) {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
}
