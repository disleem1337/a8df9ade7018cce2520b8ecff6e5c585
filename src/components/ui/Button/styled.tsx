import styled from "styled-components";
import { variant } from "styled-system";
import { ButtonVariant } from ".";

export const ButtonContainer = styled.button<{
  $fullWidth: boolean;
  $variant: ButtonVariant;
}>`
  ${({ theme, $fullWidth }) => ({
    width: $fullWidth ? "100%" : "auto",
    height: "32px",
    padding: "0 26px",
    borderRadius: "4px",
    border: "0",
    cursor: "pointer",
    fontWeight: theme.fontWeight.bold,
    fontSize: theme.fontSize.xs,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
  })}

  ${({ theme }) =>
    variant({
      prop: "$variant",
      variants: {
        primary: {
          color: theme.colors.white,
          backgroundColor: theme.colors.primary,
        },
        secondary: {
          color: theme.colors.mirage2,
          backgroundColor: theme.colors.secondary,
        },
        white: {
          color: theme.colors.mirage2,
          backgroundColor: theme.colors.white,
        },
      },
    })}
`;
