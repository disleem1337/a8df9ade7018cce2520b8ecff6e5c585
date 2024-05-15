import styled from "styled-components";

export const DropdownWrapper = styled.div<{ $isEmpty: boolean }>`
  ${({ theme, $isEmpty }) => ({
    padding: "0 8px",
    fontSize: "8px",
    color: $isEmpty ? theme.colors.white : theme.colors.secondary,
  })}
`;

export const OptionWrapper = styled.div`
  ${({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "8px 16px",

    fontSize: theme.fontSize.xs,
    color: theme.colors.white,
    cursor: "pointer",
  })}
`;

export const OptionCheckbox = styled.div<{ isSelected: boolean }>`
  ${({ theme, isSelected }) => ({
    position: "relative",
    width: 16,
    height: 16,
    backgroundColor: isSelected ? theme.colors.primary : "transparent",
    marginRight: 8,
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: isSelected ? theme.colors.secondary : theme.colors.white,

    "&::after": {
      content: "''",
      background:
        "url(/images/bulletin-filter-checkbox.svg) center center / 8px 12px no-repeat",
      display: isSelected ? "block" : "none",
      width: 8,
      height: 8,
      borderRadius: "50%",
      position: "absolute",
      top: 2,
      left: 2,
    },
  })}
`;

export const OptionLabel = styled.div<{ isSelected: boolean }>`
  ${({ theme, isSelected }) => ({
    fontSize: theme.fontSize.xs,
    fontWeight: theme.fontWeight.medium,
    color: isSelected ? theme.colors.secondary : theme.colors.white,
  })}
`;
