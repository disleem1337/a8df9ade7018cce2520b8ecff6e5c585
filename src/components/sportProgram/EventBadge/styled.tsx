import styled from "styled-components";
import { variant } from "styled-system";
import { EventBadgeType } from ".";

export const EventBadgeWrapper = styled.div<{ $badgeType: EventBadgeType }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: 2px;

  ${({ theme }) =>
    variant({
      prop: "$badgeType",
      variants: {
        kralBet: {
          backgroundColor: theme.colors.abbey,
          fontSize: "10px",
          color: theme.colors.secondary,
        },
        live: {
          backgroundColor: theme.colors.trinidad,
          fontSize: "9px",
          color: theme.colors.white,
        },
      },
    })}
`;
