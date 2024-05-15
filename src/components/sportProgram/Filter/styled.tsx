import styled from "styled-components";
import { Input } from "@/components/ui/Input";
import { SearchIcon } from "@/icons";
import { GridBox } from "@/components/ui/GridBox";

export const FilterWrapper = styled.div`
  ${({ theme }) => ({
    height: "60px",
    paddingLeft: 14,
    backgroundColor: theme.colors.balticSea,
    display: "flex",
    justifyContent: "space-between",
    gap: "10px",
    position: "sticky",
    top: 50,
    zIndex: 90,
  })}
`;

export const SubFilterWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const TeamFilterInputWrapper = styled.div`
  width: 134px;
  position: relative;
`;

export const TeamFilterInput = styled(Input)`
  padding-right: 30px;
`;

export const SearchIconWrapper = styled(SearchIcon)`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 15px;
  color: ${({ theme }) => theme.colors.white};
`;

export const FilterHeaderWrapper = styled.div`
  ${({ theme }) => ({
    display: "flex",
    position: "relative",
    color: theme.colors.white,
  })}
`;

export const FilterHeaderBox = styled(GridBox)`
  ${({ theme }) => ({
    fontSize: theme.fontSize.xs,
    color: theme.colors.white,
    fontWeight: 700,
  })}
`;

export const FilterMatchResultWrapper = styled.div`
  ${({ theme }) => ({
    display: "flex",
    alignItems: "center",
    position: "relative",
    "&::before": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      width: "1px",
      height: "100%",
      backgroundColor: theme.colors.oldBurgundy,
      zIndex: -1,
    },
    "&::after": {
      content: "''",
      position: "absolute",
      top: 0,
      right: 0,
      width: "1px",
      height: "100%",
      backgroundColor: theme.colors.oldBurgundy,
      zIndex: -1,
    },
  })}
`;
