export interface Bet {
  betId: string;
  eventId: number;
  sportId: number;
  eventName: string;
  eventDateStr: string;
  eventHourStr: string;
  isKralBet: boolean;
  isLive: boolean;
  mn: string;
  odd: number;
  ona: string;
  mb: number
}

export interface Coupon {
  bets: Array<Bet>;
}
