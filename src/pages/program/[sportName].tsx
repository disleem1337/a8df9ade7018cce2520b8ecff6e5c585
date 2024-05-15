import { EventGrid } from "@/components/sportProgram/EventGrid";
import { Filter } from "@/components/sportProgram/Filter";
import { MyCoupons } from "@/components/sportProgram/MyCoupons";
import { ContainerWrapper } from "@/components/layout/Container";
import { sportNameToId } from "@/constants/sports";
import { getSportProgram } from "@/services/sportsProgram";
import { useRouter } from "next/router";
import styled from "styled-components";
import { EventCollection } from "@/types/sportProgram";
import { useQuery } from "@tanstack/react-query";
import { useGroupEvents } from "@/hooks/useGroupEvents";
import { useFilterEvents } from "@/hooks/useFilterEvents";
import { useFilterStates } from "@/hooks/useFilterStates";
import { useSportName } from "@/hooks/useSportName";

const PageWrapper = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: flex-start;
  gap: 4px;
`;

const BulletinWrapper = styled.div`
  flex-grow: 1;
`;

function getDateList(eventCollections: EventCollection[]) {
  return eventCollections.map(([key, events]) => ({
    label: events[0].ede,
    value: key,
  }));
}

export default function SportName() {
  const sportName = useSportName();

  const {
    teamNameFilter,
    setTeamNameFilter,
    dateFilter,
    setDateFilter,
    isCrownFilter,
    setIsCrownFilter,
    isSingleMatchFilter,
    setIsSingleMatchFilter,
  } = useFilterStates();

  const isValidSportName =
    typeof sportName == "string" && sportNameToId.hasOwnProperty(sportName);

  const { data } = useQuery({
    queryKey: ["program", sportName],
    queryFn: () => getSportProgram(sportNameToId[sportName as string]),
    enabled: isValidSportName,
  });

  const groupedEvents: EventCollection[] = useGroupEvents(data?.events);

  const filteredGroupedEvents: EventCollection[] = useFilterEvents(
    groupedEvents,
    {
      teamName: teamNameFilter,
      date: dateFilter,
      isKBet: isCrownFilter,
      isSingleMatch: isSingleMatchFilter,
    }
  );

  const dateList = getDateList(groupedEvents);

  return (
    <ContainerWrapper>
      <PageWrapper>
        <BulletinWrapper>
          <Filter
            teamName={teamNameFilter}
            onChangeTeamName={setTeamNameFilter}
            date={dateFilter}
            onChangeDate={setDateFilter}
            crown={isCrownFilter}
            onChangeCrown={setIsCrownFilter}
            singleMatch={isSingleMatchFilter}
            onChangeSingleMatch={setIsSingleMatchFilter}
            dateList={dateList}
          />
          {data && (
            <EventGrid
              eventCollections={filteredGroupedEvents}
              sportId={data.sportId}
            />
          )}
        </BulletinWrapper>
        <MyCoupons />
      </PageWrapper>
    </ContainerWrapper>
  );
}
