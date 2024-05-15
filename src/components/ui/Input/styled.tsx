import styled from "styled-components";

export const InputWrapper = styled.input<{ $fullWidth?: boolean }>`
  ${({ theme, $fullWidth }) => ({
    width: $fullWidth ? "100%" : "auto",
    height: "32px",
    padding: "8.5px 8px",
    borderRadius: "3px",
    border: "none",
    backgroundColor: theme.colors.bleached,
    color: theme.colors.white,
    fontSize: theme.fontSize.xs,
    fontWeight: theme.fontWeight.medium,

    "&::placeholder": {
      color: theme.colors.white,
      opacity: 0.2,
      fontSize: theme.fontSize.xs,
    },

    "&:focus": {
      outline: "none",
    },
  })}
`;
