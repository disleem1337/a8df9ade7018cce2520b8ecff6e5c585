import { GridBox } from "@/components/ui/GridBox";
import styled from "styled-components";

export const EventRowWrapper = styled.div`
  ${({ theme }) => ({
    display: "flex",
    minHeight: "34px",
    "--borderColor": theme.colors.catskillWhite,
    "&:nth-of-type(even)": {
      backgroundColor: theme.colors.harp,
      "--borderColor": theme.colors.platinum,
    },
  })}
`;

export const EventRowMbBoxWrapper = styled.div`
  min-width: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 1px;
    height: 100%;
    background-color: var(--borderColor);
  }
`;

export const EventRowTimeBoxWrapper = styled.div`
  min-width: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0 5px;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 1px;
    height: 100%;
    background-color: var(--borderColor);
  }
`;

export const EventTimeWrapper = styled.div`
  ${({ theme }) => ({
    fontSize: theme.fontSize.xxs,
    color: theme.colors.zeus,
    fontWeight: theme.fontWeight.bold,
    display: "flex",
    alignItems: "center",
  })}
`;

export const EventRowMiddleWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: space-between;
  padding-left: 8px;
  padding-right: 8px;
`;

export const EventTitleWrapper = styled.div`
  ${({ theme }) => ({
    fontSize: theme.fontSize.xs,
    color: theme.colors.zeus,
    fontWeight: theme.fontWeight.bold,
    display: "flex",
    alignItems: "center",
  })}
`;

export const EventBadgesWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const EventOddGroupsWrapper = styled.div`
  display: flex;
`;

export const EventOddGroupWrapper = styled.div`
  ${({ theme }) => ({
    display: "flex",
    color: theme.colors.tuna,
    fontWeight: theme.fontWeight.bold,
    fontSize: theme.fontSize.xxs,
    position: "relative",

    "&:first-of-type::before": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      width: "1px",
      height: "100%",
      backgroundColor: theme.colors.cadetGrey,
      zIndex: 1,
    },
  })}
`;

export const EventOddGroupTotalWrapper = styled.div`
  ${({ theme }) => ({
    backgroundColor: theme.colors.outerSpace,
    color: theme.colors.white,
    display: "flex",
    alignItems: "center",
    fontWeight: theme.fontWeight.bold,
    fontSize: "10px",
  })}
`;

export const EventOddBox = styled(GridBox)<{ $isSelected: boolean }>`
  ${({ theme, $isSelected }) => ({
    backgroundColor: $isSelected ? theme.colors.secondary : "transparent",
    cursor: "pointer",

    "&::after": {
      content: "''",
      position: "absolute",
      top: 0,
      right: 0,
      width: "1px",
      height: "100%",
      backgroundColor: "var(--borderColor)",
    },
  })}
`;
