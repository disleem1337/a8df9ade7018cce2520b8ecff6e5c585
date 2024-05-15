import { EventGroup } from "@/components/sportProgram/EventGroup";
import { LogoSoloIcon } from "@/icons";
import { ESport, EventCollection } from "@/types/sportProgram";
import {
  EmptyEventGridDescription,
  EmptyEventGridIconWrapper,
  EmptyEventGridWrapper,
  EventGridWrapper,
} from "./styled";

export interface EventGridProps {
  eventCollections: EventCollection[];
  sportId: ESport;
}

export function EventGrid({ eventCollections, sportId }: EventGridProps) {
  const isEmpty = eventCollections.length === 0;

  return (
    <EventGridWrapper>
      {!isEmpty ? (
        eventCollections.map(([key, value]) => (
          <EventGroup key={key} events={value} sportId={sportId} />
        ))
      ) : (
        <EmptyEventGridWrapper>
          <EmptyEventGridIconWrapper>
            <LogoSoloIcon />
          </EmptyEventGridIconWrapper>
          <EmptyEventGridDescription>
            Şu anda oynanabilir bahis bulunmamaktadır.
          </EmptyEventGridDescription>
        </EmptyEventGridWrapper>
      )}
    </EventGridWrapper>
  );
}
