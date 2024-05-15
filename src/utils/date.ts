import { Event, EventCollection } from "@/types/sportProgram";

export function getKeyFromDate(date: Date) {
  return `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${date.getDate()}`;
}

export function getKeyFromDateString(dateString: string) {
  const date = new Date(dateString);
  return getKeyFromDate(date);
}


export function groupEventsByDate(events: Event[]): Map<string, Event[]> {
  const result: Map<string, Event[]> = new Map();

  // Here we group the events by date, month, and year
  events.forEach((event) => {
    const date = new Date(event.ed * 1000);

    const key = getKeyFromDate(date);
    if (!result.has(key)) {
      result.set(key, []);
    }

    result.get(key)?.push(event);
  });

  return result;
}

// This function mutates the input map and sorts the events by date
export function sortEventsByDate(events: Event[]) {
  events.sort((a, b) => a.ed - b.ed);
}

export function groupAndSortEventsByDate(
  events: Event[]
): EventCollection[] {
  sortEventsByDate(events);
  const groupedEvents = groupEventsByDate(events);

  return Array.from(groupedEvents.entries()).sort((a, b) =>
    a[0].localeCompare(b[0])
  );
}