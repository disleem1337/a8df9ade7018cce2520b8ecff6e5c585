import { Event, EventCollection } from "@/types/sportProgram";
import { groupAndSortEventsByDate } from "@/utils/date";
import { useMemo } from "react";

export function useGroupEvents(events?: Event[]): EventCollection[] {
  return useMemo(
    () => (events ? groupAndSortEventsByDate(events) : []),
    [events]
  );
}
