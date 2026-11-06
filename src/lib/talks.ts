export interface Talk {
  date: string;
  event: string;
  title: string;
  url?: string;
  time?: string;
}

// Compare calendar dates, keeping today's sessions upcoming through the end of the day.
export function warsawDate(now: Date = new Date()): string {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Europe/Warsaw',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(now);
  const part = (type: string) => parts.find((value) => value.type === type)!.value;
  return `${part('year')}-${part('month')}-${part('day')}`;
}

export function groupTalks(talks: readonly Talk[], now: Date = new Date()) {
  const today = warsawDate(now);
  return {
    upcoming: talks.filter((talk) => talk.date >= today)
      .sort((a, b) => a.date.localeCompare(b.date)),
    past: talks.filter((talk) => talk.date < today)
      .sort((a, b) => b.date.localeCompare(a.date)),
  };
}

export function formatTalkDate(date: string): string {
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC',
  }).format(new Date(`${date}T12:00:00Z`));
}
