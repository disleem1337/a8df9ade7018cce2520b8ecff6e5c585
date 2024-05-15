import styled from "styled-components";

export const ClockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
`;

export const ClockText = styled.p`
  ${({ theme }) => ({
    color: theme.colors.white,
    fontSize: theme.fontSize.xxxs,
    fontWeight: theme.fontWeight.medium,
    textAlign: "center",
  })}
`;
