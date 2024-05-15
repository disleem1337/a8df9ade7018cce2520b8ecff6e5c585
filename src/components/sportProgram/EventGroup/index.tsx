import { EventGroupHeader } from "@/components/sportProgram/EventGroupHeader";
import { EventRow } from "@/components/sportProgram/EventRow";
import { ESport, Event } from "@/types/sportProgram";
import { useState } from "react";
import { EventGroupBody, EventGroupWrapper } from "./styled";

export interface EventGroupProps {
  events: Array<Event>;
  sportId: ESport;
}

export function EventGroup({ events, sportId }: EventGroupProps) {
  const [isGroupOpen, setIsGroupOpen] = useState(true);

  return (
    <EventGroupWrapper>
      <EventGroupHeader
        sportId={sportId}
        title={events[0].ede}
        isGroupOpen={isGroupOpen}
        onChangIsGroupOpen={setIsGroupOpen}
      />
      <EventGroupBody>
        {isGroupOpen &&
          events.map((event) => (
            <EventRow key={event.bid} event={event} sportId={sportId} />
          ))}
      </EventGroupBody>
    </EventGroupWrapper>
  );
}
