import styled from "styled-components";

export const GridBoxWrapper = styled.div<{ $w?: number }>`
  ${({ $w }) => ({
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    width: `${$w ? $w * 30 : 27}px`,
  })}
`;
