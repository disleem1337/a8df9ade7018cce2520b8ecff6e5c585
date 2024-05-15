import { GridBox } from "@/components/ui/GridBox";
import { sportMatchResults } from "@/constants/sports";
import { ChevronDownIcon } from "@/icons";
import { ESport } from "@/types/sportProgram";
import {
  EventGroupHeaderArrowBoxWrapper,
  EventGroupHeaderContentWrapper,
  EventGroupHeaderOddWrapper,
  EventGroupHeaderTitle,
  EventGroupHeaderWrapper,
} from "./styled";

export interface EventGroupHeaderProps {
  title: string;
  sportId: ESport;
  isGroupOpen: boolean;
  onChangIsGroupOpen: (isGroupOpen: boolean) => void;
}

export function EventGroupHeader({
  title,
  sportId,
  isGroupOpen,
  onChangIsGroupOpen,
}: EventGroupHeaderProps) {
  return (
    <EventGroupHeaderWrapper>
      <EventGroupHeaderTitle>{title}</EventGroupHeaderTitle>
      <EventGroupHeaderContentWrapper>
        <EventGroupHeaderOddWrapper>
          {sportMatchResults[sportId].map((matchResult, index) => (
            <GridBox key={index} w={1}>
              {matchResult}
            </GridBox>
          ))}
        </EventGroupHeaderOddWrapper>
        <EventGroupHeaderArrowBoxWrapper
          onClick={() => onChangIsGroupOpen(!isGroupOpen)}
          $isGroupOpen={isGroupOpen}
        >
          <ChevronDownIcon />
        </EventGroupHeaderArrowBoxWrapper>
      </EventGroupHeaderContentWrapper>
    </EventGroupHeaderWrapper>
  );
}
