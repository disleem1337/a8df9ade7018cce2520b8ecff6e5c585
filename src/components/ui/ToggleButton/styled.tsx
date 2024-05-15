import styled from "styled-components";

export const ToggleButtonContainer = styled.button<{ $isActive?: boolean }>`
  ${({ theme, $isActive }) => ({
    height: "32px",
    padding: "0 9px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "4px",
    border: "0",
    cursor: "pointer",
    backgroundColor: "transparent",
    color: $isActive ? theme.colors.secondary : theme.colors.white,
    fontSize: "25px",
  })}
`;
