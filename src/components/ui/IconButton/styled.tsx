import styled from "styled-components";
import { variant } from "styled-system";
import { IconButtonSize, IconButtonVariants } from ".";

export const IconButtonContainer = styled.button<{
  $variant: IconButtonVariants;
  $size: IconButtonSize;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;

  ${({ theme }) =>
    variant({
      prop: "$variant",
      variants: {
        primary: {
          backgroundColor: theme.colors.bleached,
          color: theme.colors.white,
        },
        secondary: {
          color: theme.colors.balticSea,
          backgroundColor: theme.colors.lightSilver,
        },
      },
    })}

${() =>
    variant({
      prop: "$size",
      variants: {
        small: {
          borderRadius: "2px",
          fontSize: "9px",
          height: "18px",
          padding: "0 4.5px",
        },
        medium: {
          borderRadius: "3px",
          fontSize: "15px",
          height: "32px",
          padding: "0 9px",
        },
      },
    })}
`;
