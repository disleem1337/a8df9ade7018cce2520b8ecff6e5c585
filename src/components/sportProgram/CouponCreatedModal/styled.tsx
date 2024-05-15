import styled from "styled-components";

export const CouponCreatedModalWrapper = styled.div`
  ${({ theme }) => ({
    backgroundColor: theme.colors.white,
    padding: "60px 42px 42px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "36px",
    width: "430px",
  })}
`;

export const CouponCreatedModalTitle = styled.p`
  ${({ theme }) => ({
    color: theme.colors.primary,
    fontSize: theme.fontSize.xxl,
    fontWeight: theme.fontWeight.bold,
    textAlign: "center",
  })}
`;
