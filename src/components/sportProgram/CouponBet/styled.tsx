import styled from "styled-components";

export const CouponBetWrapper = styled.div`
  ${({ theme }) => ({
    padding: "8px",
    backgroundColor: theme.colors.white,
  })}
`;

export const CouponBetHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
`;

export const CouponBetHeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const CouponBetIconWrapper = styled.div`
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CouponBetMiddle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

export const CouponBetTitle = styled.p`
  ${({ theme }) => ({
    fontSize: theme.fontSize.xs,
    fontWeight: theme.fontWeight.medium,
    color: theme.colors.balticSea,
  })}
`;

export const CouponBetDateText = styled.p`
  ${({ theme }) => ({
    fontSize: theme.fontSize.xxxs,
    fontWeight: theme.fontWeight.regular,
    color: theme.colors.black,
  })}
`;

export const CouponBetFooter = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: space-between;
`;

export const CouponBetFooterLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const CouponBetMnText = styled.p`
  ${({ theme }) => ({
    fontSize: theme.fontSize.xxs,
    fontWeight: theme.fontWeight.regular,
    color: theme.colors.black,
  })}
`;

export const CouponBetOnaText = styled.span`
  ${({ theme }) => ({
    fontSize: theme.fontSize.xxs,
    fontWeight: theme.fontWeight.bold,
    color: theme.colors.primary,
  })}
`;

export const CouponBetFooterRight = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const CouponBetOddText = styled.p`
  ${({ theme }) => ({
    fontSize: theme.fontSize.xs,
    fontWeight: theme.fontWeight.semibold,
    color: theme.colors.balticSea,
  })}
`;

export const CouponBetBadges = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
