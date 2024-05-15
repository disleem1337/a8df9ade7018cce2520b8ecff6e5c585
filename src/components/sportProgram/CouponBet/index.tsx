import { EventBadge } from "@/components/sportProgram/EventBadge";
import { IconButton } from "@/components/ui/IconButton";
import { MbBox } from "@/components/ui/MbBox";
import { sportIdToIcon } from "@/constants/sports";
import { useAppDispatch } from "@/hooks/store";
import { Trash2Icon } from "@/icons";
import { removeBet } from "@/store/slices/myCoupons";
import { Bet } from "@/types/coupon";
import { ESport } from "@/types/sportProgram";
import {
  CouponBetBadges,
  CouponBetDateText,
  CouponBetFooter,
  CouponBetFooterLeft,
  CouponBetFooterRight,
  CouponBetHeader,
  CouponBetHeaderLeft,
  CouponBetIconWrapper,
  CouponBetMiddle,
  CouponBetMnText,
  CouponBetOddText,
  CouponBetOnaText,
  CouponBetTitle,
  CouponBetWrapper,
} from "./styled";

export interface CouponBetProps {
  bet: Bet;
}

export function CouponBet({ bet }: CouponBetProps) {
  const dispatch = useAppDispatch();

  const Icon = sportIdToIcon[bet.sportId as ESport];

  return (
    <CouponBetWrapper>
      <CouponBetHeader>
        <CouponBetHeaderLeft>
          <CouponBetIconWrapper>
            <Icon />
          </CouponBetIconWrapper>
          <CouponBetMiddle>
            <CouponBetTitle>{bet.eventName}</CouponBetTitle>
            <CouponBetDateText>
              {bet.eventDateStr} {bet.eventHourStr}
            </CouponBetDateText>
          </CouponBetMiddle>
        </CouponBetHeaderLeft>
        <IconButton
          onClick={() => dispatch(removeBet(bet.eventId))}
          variant="secondary"
          size="small"
        >
          <Trash2Icon />
        </IconButton>
      </CouponBetHeader>
      <CouponBetFooter>
        <CouponBetFooterLeft>
          <MbBox mb={bet.mb} />
          <CouponBetMnText>
            {bet.mn} : <CouponBetOnaText>{bet.ona}</CouponBetOnaText>
          </CouponBetMnText>
        </CouponBetFooterLeft>
        <CouponBetFooterRight>
          <CouponBetOddText>{bet.odd.toFixed(2)}</CouponBetOddText>

          <CouponBetBadges>
            {bet.isKralBet && <EventBadge badgeType="kralBet" />}
            {bet.isLive && <EventBadge badgeType="live" />}
          </CouponBetBadges>
        </CouponBetFooterRight>
      </CouponBetFooter>
    </CouponBetWrapper>
  );
}
