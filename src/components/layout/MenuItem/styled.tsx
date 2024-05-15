import Link from "next/link";
import styled from "styled-components";

export const MenuItemWrapper = styled(Link)<{ $isActive?: boolean }>`
  ${({ theme, $isActive }) => ({
    display: "flex",
    alignItems: "center",
    gap: "5px",
    padding: "0 10px",
    height: "50px",

    cursor: "pointer",
    textDecoration: "none",
    fontSize: theme.fontSize.xs,
    fontWeight: theme.fontWeight.semibold,
    color: theme.colors.white,
    textTransform: "uppercase",

    backgroundColor: $isActive ? theme.colors.limedSpruce : "none",
    transition: "background-color 0.2s ease-in-out",
    "&:hover": {
      backgroundColor: theme.colors.limedSpruce,
    },
  })}
`;
