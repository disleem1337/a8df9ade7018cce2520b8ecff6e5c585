import { CIcon, CrownIcon } from "@/icons";
import { EventBadgeWrapper } from "./styled";

export type EventBadgeType = "kralBet" | "live";

export interface EventBadgeProps {
  badgeType: "kralBet" | "live";
}

export function EventBadge({ badgeType }: EventBadgeProps) {
  const IconMap: Record<EventBadgeType, React.FC> = {
    kralBet: CrownIcon,
    live: CIcon,
  };

  const Icon = IconMap[badgeType];

  return (
    <EventBadgeWrapper $badgeType={badgeType}>
      <Icon />
    </EventBadgeWrapper>
  );
}
