import { ESport, Event } from "@/types/sportProgram";
import {
  EventBadgesWrapper,
  EventOddBox,
  EventOddGroupTotalWrapper,
  EventOddGroupWrapper,
  EventOddGroupsWrapper,
  EventRowMbBoxWrapper,
  EventRowMiddleWrapper,
  EventRowTimeBoxWrapper,
  EventRowWrapper,
  EventTimeWrapper,
  EventTitleWrapper,
} from "./styled";
import { GridBox } from "@/components/ui/GridBox";
import { MbBox } from "@/components/ui/MbBox";
import { sportMatchResultMuks, sportMatchResults } from "@/constants/sports";
import { useAppDispatch, useAppSelector } from "@/hooks/store";
import { addBet, removeBet } from "@/store/slices/myCoupons";
import { EventBadge } from "@/components/sportProgram/EventBadge";

interface EventRowProps {
  event: Event;
  sportId: ESport;
}

function getNumberOdds(event: Event) {
  return event.m.reduce(
    (acc, m) =>
      acc + m.o.reduce((acc2, o) => (o.sodd != "-" ? acc2 + 1 : acc2), 0),
    0
  );
}

export function EventRow({ event, sportId }: EventRowProps) {
  const coupon = useAppSelector((state) => state.myCoupons.coupon);
  const dispatch = useAppDispatch();

  const matchResults = event.m.find(
    (m) => m.muk == sportMatchResultMuks[sportId]
  );

  const betForCurrentEvent = coupon.bets.find(
    (bet) => bet.eventId == event.eid
  );

  const isKbet = event.iskbet;
  const isLive = event.live;
  const total = getNumberOdds(event);

  return (
    <EventRowWrapper>
      <EventRowMbBoxWrapper>
        <MbBox mb={event.mb} />
      </EventRowMbBoxWrapper>
      <EventRowTimeBoxWrapper>
        <EventTimeWrapper>{event.edh}</EventTimeWrapper>
      </EventRowTimeBoxWrapper>
      <EventRowMiddleWrapper>
        <EventTitleWrapper>{event.en}</EventTitleWrapper>
        <EventBadgesWrapper>
          {isKbet && <EventBadge badgeType="kralBet" />}
          {isLive && <EventBadge badgeType="live" />}
        </EventBadgesWrapper>
      </EventRowMiddleWrapper>
      <EventOddGroupsWrapper>
        <EventOddGroupWrapper>
          {matchResults
            ? matchResults.o.map((o, index) => (
                <EventOddBox
                  onClick={
                    o.sodd != "-"
                      ? () =>
                          dispatch(
                            betForCurrentEvent?.ona == o.ona
                              ? removeBet(event.eid)
                              : addBet({
                                  event,
                                  o,
                                })
                          )
                      : undefined
                  }
                  $isSelected={betForCurrentEvent?.ona == o.ona}
                  key={index}
                  w={1}
                >
                  {o.sodd}
                </EventOddBox>
              ))
            : sportMatchResults[sportId].map((_, index) => (
                <EventOddBox $isSelected={false} key={index} w={1}>
                  -
                </EventOddBox>
              ))}
        </EventOddGroupWrapper>
      </EventOddGroupsWrapper>
      <EventOddGroupTotalWrapper>
        <GridBox>+{total}</GridBox>
      </EventOddGroupTotalWrapper>
    </EventRowWrapper>
  );
}
