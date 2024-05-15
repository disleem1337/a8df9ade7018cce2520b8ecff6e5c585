import { CouponBet } from "@/components/sportProgram/CouponBet";
import { CouponCreatedModal } from "@/components/sportProgram/CouponCreatedModal";
import { Button } from "@/components/ui/Button";
import { Select } from "@/components/ui/Select";
import { appConfig } from "@/constants/appConfig";
import { useAppDispatch, useAppSelector } from "@/hooks/store";
import { ChevronDownIcon, LogoSoloIcon } from "@/icons";
import { useState } from "react";
import {
  MyCouponsBody,
  MyCouponsCalculationRow,
  MyCouponsCalculationRowLabel,
  MyCouponsCalculationRowValue,
  MyCouponsCalculations,
  MyCouponsEmptyBody,
  MyCouponsEmptyDescription,
  MyCouponsEmptyIconWrapper,
  MyCouponsEmptyTitle,
  MyCouponsFooter,
  MyCouponsFooterSelectLabel,
  MyCouponsHeader,
  MyCouponsHeaderLeft,
  MyCouponsHeaderRight,
  MyCouponsHeaderTitle,
  MyCouponsMatchCounter,
  MyCouponsPlayButtonWrapper,
  MyCouponsShrinkButton,
  MyCouponsTotalOddText,
  MyCouponsWrapper,
} from "./styled";
import { clearCoupon } from "@/store/slices/myCoupons";

export function MyCoupons() {
  const [misli, setMisli] = useState(appConfig.minCouponBet);
  const [isMyCouponsOpen, setMyCouponsIsOpen] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const coupon = useAppSelector((state) => state.myCoupons.coupon);
  const dispatch = useAppDispatch();

  const totalOdd =
    coupon.bets.length > 0
      ? coupon.bets.reduce((acc, bet) => acc * bet.odd, 1).toFixed(2)
      : "0.00";

  const isEmpty = coupon.bets.length === 0;
  const mbs = Math.max(...coupon.bets.map((bet) => bet.mb));

  return (
    <MyCouponsWrapper>
      <MyCouponsHeader>
        <MyCouponsHeaderLeft>
          <MyCouponsHeaderTitle>Kuponum</MyCouponsHeaderTitle>
          <MyCouponsTotalOddText>T.Oran: {totalOdd}</MyCouponsTotalOddText>
        </MyCouponsHeaderLeft>
        <MyCouponsHeaderRight>
          {isMyCouponsOpen && !isEmpty && (
            <MyCouponsMatchCounter>
              {coupon.bets.length} Maç
            </MyCouponsMatchCounter>
          )}
          <MyCouponsShrinkButton
            $numberOfCoupons={coupon.bets.length}
            $isOpen={isMyCouponsOpen}
            onClick={() => setMyCouponsIsOpen(!isMyCouponsOpen)}
          >
            <ChevronDownIcon />
          </MyCouponsShrinkButton>
        </MyCouponsHeaderRight>
      </MyCouponsHeader>
      {isMyCouponsOpen && (
        <>
          {!isEmpty ? (
            <MyCouponsBody>
              {coupon.bets.map((bet) => (
                <CouponBet key={bet.betId} bet={bet} />
              ))}
            </MyCouponsBody>
          ) : (
            <MyCouponsEmptyBody>
              <MyCouponsEmptyIconWrapper>
                <LogoSoloIcon />
              </MyCouponsEmptyIconWrapper>
              <MyCouponsEmptyTitle>
                Kuponunuzda maç bulunmamaktadır.
              </MyCouponsEmptyTitle>
              <MyCouponsEmptyDescription>
                Hemen bültene göz atarak maç ekleyebilirsin.
              </MyCouponsEmptyDescription>
            </MyCouponsEmptyBody>
          )}
          {!isEmpty && (
            <MyCouponsFooter>
              <MyCouponsFooterSelectLabel>Misli</MyCouponsFooterSelectLabel>
              <Select
                options={Array.from(
                  {
                    length: appConfig.maxCouponBet - appConfig.minCouponBet + 1,
                  },
                  (_, i) => ({
                    value: i + appConfig.minCouponBet,
                    label: i + appConfig.minCouponBet,
                  })
                )}
                value={{
                  label: misli,
                  value: misli,
                }}
                onChange={(e) => setMisli((e as any).value)}
              />
              <MyCouponsCalculations>
                <MyCouponsCalculationRow>
                  <MyCouponsCalculationRowLabel>
                    Kupon Bedeli :
                  </MyCouponsCalculationRowLabel>
                  <MyCouponsCalculationRowValue>
                    {misli.toFixed(2)} TL
                  </MyCouponsCalculationRowValue>
                </MyCouponsCalculationRow>

                <MyCouponsCalculationRow>
                  <MyCouponsCalculationRowLabel>
                    Toplam Oran :
                  </MyCouponsCalculationRowLabel>
                  <MyCouponsCalculationRowValue>
                    {totalOdd}
                  </MyCouponsCalculationRowValue>
                </MyCouponsCalculationRow>

                <MyCouponsCalculationRow>
                  <MyCouponsCalculationRowLabel>
                    Maksimum Kazanç :
                  </MyCouponsCalculationRowLabel>
                  <MyCouponsCalculationRowValue>
                    {(misli * Number(totalOdd)).toFixed(2)} TL
                  </MyCouponsCalculationRowValue>
                </MyCouponsCalculationRow>
              </MyCouponsCalculations>
              <MyCouponsPlayButtonWrapper>
                <Button onClick={() => setIsModalOpen(true)} fullWidth>
                  Hemen Oyna
                </Button>
              </MyCouponsPlayButtonWrapper>
            </MyCouponsFooter>
          )}
        </>
      )}

      <CouponCreatedModal
        onClose={() => {
          dispatch(clearCoupon());
          setIsModalOpen(false);
        }}
        isOpen={isModalOpen}
      />
    </MyCouponsWrapper>
  );
}
