import styled from "styled-components";

export const MbBoxWrapper = styled.div<{ $bgColor: string }>`
  ${({ theme, $bgColor }) => ({
    color: theme.colors.white,
    backgroundColor: $bgColor,
    borderRadius: "2.5px",
    fontWeight: theme.fontWeight.bold,
    fontSize: "11px",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    width: "16px",
    height: "16px",
    lineHeight: 1,
  })}
`;
