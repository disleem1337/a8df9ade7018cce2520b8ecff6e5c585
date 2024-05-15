import { Bet, Coupon } from "@/types/coupon";
import { O } from "@/types/sportProgram";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Event } from "@/types/sportProgram";

interface MyCouponsState {
  coupon: Coupon;
}

const initialState: MyCouponsState = {
  coupon: {
    bets: [],
  },
};

const save = (coupon: Coupon) => {
  localStorage.setItem("myCoupons", JSON.stringify(coupon));
};

const myCouponsSlice = createSlice({
  name: "myCoupons",
  initialState,
  reducers: {
    addBet: (
      state,
      {
        payload: { event, o },
      }: PayloadAction<{
        event: Event;
        o: O;
      }>
    ) => {
      const betWithSameEventIndex = state.coupon.bets.findIndex(
        (bet) => bet.eventId == event.eid
      );

      const newBet: Bet = {
        betId: crypto.randomUUID(),
        eventId: event.eid,
        eventName: event.en,
        eventDateStr: event.ede,
        eventHourStr: event.edh,
        isKralBet: event.iskbet,
        isLive: event.live,
        mn: "Maç sonucu",
        odd: o.odd,
        ona: o.ona,
        sportId: event.sid,
        mb: event.mb,
      };

      // if bet with same event already exists, update it
      if (betWithSameEventIndex != -1) {
        state.coupon.bets[betWithSameEventIndex] = newBet;
      } else {
        state.coupon.bets.push(newBet);
      }

      save(state.coupon);
    },

    removeBet: (state, action: PayloadAction<number>) => {
      state.coupon.bets = state.coupon.bets.filter(
        (bet) => bet.eventId != action.payload
      );

      save(state.coupon);
    },

    clearCoupon: (state) => {
      state.coupon = {
        bets: [],
      };

      save(state.coupon);
    },

    loadCoupon: (state, action: PayloadAction<Coupon>) => {
      state.coupon = action.payload;
    },
  },
});

export const { addBet, removeBet, clearCoupon, loadCoupon } = myCouponsSlice.actions;

export default myCouponsSlice.reducer;
