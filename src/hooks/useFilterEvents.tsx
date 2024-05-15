import { useMemo } from "react";
import { Event } from "@/types/sportProgram";
import { getKeyFromDate } from "@/utils/date";

function filterEvents(
  events: Event[],
  teamNameFilter: string | null,
  dateFilter: string | null,
  isKBetFilter: boolean | null,
  isSingleMatchFilter: boolean | null
) {
  return events.filter((event) => {
    const date = new Date(event.ed * 1000);
    if (
      teamNameFilter &&
      !event.en.toLocaleLowerCase().includes(teamNameFilter.toLocaleLowerCase())
    )
      return false;
    if (dateFilter && !dateFilter.split(",").includes(getKeyFromDate(date)))
      return false;
    if (isKBetFilter && !event.iskbet) return false;
    if (isSingleMatchFilter && event.mb !== 1) return false;
    return true;
  });
}

export function useFilterEvents(
  groupedEvents: Array<[string, Event[]]>,
  {
    teamName,
    date,
    isKBet,
    isSingleMatch,
  }: {
    teamName: string | null;
    date: string | null;
    isKBet: boolean | null;
    isSingleMatch: boolean | null;
  }
) {
  return useMemo(
    () =>
      groupedEvents
        .map(([key, events]) => [
          key,
          filterEvents(events, teamName, date, isKBet, isSingleMatch),
        ])
        .filter(([, events]) => events.length > 0) as Array<[string, Event[]]>,
    [groupedEvents, teamName, date, isKBet, isSingleMatch]
  );
}
