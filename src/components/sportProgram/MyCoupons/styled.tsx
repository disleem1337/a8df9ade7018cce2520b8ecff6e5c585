import styled from "styled-components";

export const MyCouponsWrapper = styled.div`
  position: sticky;
  top: 50px;
  width: 236px;
  flex-shrink: 0;
`;

export const MyCouponsHeader = styled.div`
  ${({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 12px 14px",
    borderTopRightRadius: "4px",
    backgroundColor: theme.colors.arsenic2,
  })}
`;

export const MyCouponsHeaderLeft = styled.div`
  ${({ theme }) => ({})}
`;

export const MyCouponsHeaderTitle = styled.h6`
  ${({ theme }) => ({
    fontSize: theme.fontSize.lg,
    fontWeight: 600,
    color: theme.colors.white,
    margin: 0,
  })}
`;

export const MyCouponsTotalOddText = styled.p`
  ${({ theme }) => ({
    fontSize: theme.fontSize.sm,
    fontWeight: 500,
    color: theme.colors.white,
    marginTop: "4px",
  })}
`;

export const MyCouponsHeaderRight = styled.div`
  ${({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "8px",
  })}
`;

export const MyCouponsMatchCounter = styled.div`
  ${({ theme }) => ({
    backgroundColor: theme.colors.secondary,
    fontSize: theme.fontSize.xs,
    fontWeight: 700,
    color: theme.colors.mirage2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "32px",
    padding: "0px 11px",
    borderRadius: "3px",
  })}
`;

export const MyCouponsShrinkButton = styled.button<{
  $isOpen: boolean;
  $numberOfCoupons: number;
}>`
  ${({ theme, $isOpen, $numberOfCoupons }) => ({
    width: $isOpen ? "auto" : "28px",
    height: $isOpen ? "auto" : "28px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: $isOpen ? "transparent" : theme.colors.philippineGray,
    border: "none",
    borderRadius: $isOpen ? "0px" : "50%",
    fontSize: theme.fontSize.xs,
    color: theme.colors.white,
    cursor: "pointer",
    transform: $isOpen ? "rotate(0deg)" : "rotate(180deg)",
    position: "relative",
    "&::after": {
      display: $isOpen ? "none" : "flex",
      alignItems: "center",
      justifyContent: "center",
      content: `'${$numberOfCoupons}'`,
      position: "absolute",
      bottom: -4,
      left: -4,
      borderWidth: "1px",
      borderColor: theme.colors.arsenic2,
      borderStyle: "solid",
      fontSize: theme.fontSize.xxxs,
      fontWeight: 600,
      width: "16px",
      height: "16px",
      borderRadius: "50%",
      backgroundColor: theme.colors.secondary,
      color: theme.colors.black,
      transform: "rotate(180deg)",
    },
  })}
`;

export const MyCouponsBody = styled.div`
  ${({ theme }) => ({
    backgroundColor: theme.colors.brightGray,
    display: "flex",
    flexDirection: "column",
    gap: "1px",
    maxHeight: "260px",
    overflowY: "auto",
  })}
`;

export const MyCouponsFooter = styled.div`
  ${({ theme }) => ({
    padding: "10px 8px 18px",
    backgroundColor: theme.colors.balticSea,
    borderBottomRightRadius: "4px",
  })}
`;

export const MyCouponsFooterSelectLabel = styled.p`
  ${({ theme }) => ({
    fontSize: theme.fontSize.xxs,
    fontWeight: 500,
    color: theme.colors.white,
    marginBottom: "6px",
  })}
`;

export const MyCouponsCalculations = styled.div`
  ${({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    marginTop: "12px",
  })}
`;

export const MyCouponsCalculationRow = styled.div`
  ${({ theme }) => ({
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "8px",
  })}
`;

export const MyCouponsCalculationRowLabel = styled.p`
  ${({ theme }) => ({
    flexShrink: 0,
    fontSize: theme.fontSize.xs,
    fontWeight: 500,
    color: theme.colors.white,
  })}
`;

export const MyCouponsCalculationRowValue = styled.p`
  ${({ theme }) => ({
    fontSize: theme.fontSize.xxs,
    fontWeight: 600,
    color: theme.colors.white,
    textAlign: "right",
  })}
`;

export const MyCouponsPlayButtonWrapper = styled.div`
  ${({ theme }) => ({
    marginTop: "12px",
  })}
`;

export const MyCouponsEmptyBody = styled.div`
  ${({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "30px 11px",
    backgroundColor: theme.colors.white,
    borderBottomRightRadius: "4px",
  })}
`;

export const MyCouponsEmptyIconWrapper = styled.div`
  ${({ theme }) => ({
    color: theme.colors.cadetGrey2,
    fontSize: "46px",
  })}
`;

export const MyCouponsEmptyTitle = styled.p`
  ${({ theme }) => ({
    fontSize: theme.fontSize.md,
    fontWeight: 700,
    color: theme.colors.cadetGrey2,
    marginTop: "20px",
    textAlign: "center",
  })}
`;

export const MyCouponsEmptyDescription = styled.p`
  ${({ theme }) => ({
    fontSize: theme.fontSize.xs,
    fontWeight: 400,
    color: theme.colors.cadetGrey2,
    marginTop: "20px",
    textAlign: "center",
  })}
`;
