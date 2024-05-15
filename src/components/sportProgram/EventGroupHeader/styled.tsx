import { GridBox } from "@/components/ui/GridBox";
import { GridBoxWrapper } from "@/components/ui/GridBox/styled";
import styled from "styled-components";

export const EventGroupHeaderWrapper = styled.div`
  ${({ theme }) => ({
    height: "30px",
    paddingLeft: "15px",
    backgroundColor: theme.colors.arsenic,
    display: "flex",
    justifyContent: "space-between",
    position: "sticky",
    top: 110,
    zIndex: 80,
  })}
`;

export const EventGroupHeaderTitle = styled.div`
  ${({ theme }) => ({
    fontSize: theme.fontSize.sm,
    color: theme.colors.white,
    fontWeight: theme.fontWeight.bold,
    display: "flex",
    alignItems: "center",
  })};
`;

export const EventGroupHeaderContentWrapper = styled.div`
  display: flex;
`;

export const EventGroupHeaderOddWrapper = styled.div`
  ${({ theme }) => ({
    display: "flex",
    color: theme.colors.white,
    fontWeight: theme.fontWeight.bold,
    fontSize: theme.fontSize.xxxs,

    [`> ${GridBoxWrapper}::after`]: {
      content: "''",
      position: "absolute",
      top: 0,
      right: 0,
      width: "1px",
      height: "100%",
      backgroundColor: theme.colors.outerSpace2,
      zIndex: -1,
    },

    [`> ${GridBoxWrapper}:first-of-type::before`]: {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      width: "1px",
      height: "100%",
      backgroundColor: theme.colors.outerSpace2,
      zIndex: -1,
    },
  })}
`;

export const EventGroupHeaderArrowBoxWrapper = styled(GridBox)<{
  $isGroupOpen: boolean;
}>`
  ${({ theme, $isGroupOpen }) => ({
    color: theme.colors.white,
    fontSize: "8px",
    transform: $isGroupOpen ? "rotate(0deg)" : "rotate(180deg)",
  })}
`;
