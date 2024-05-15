import { forwardRef } from "react";
import { ButtonContainer } from "./styled";

export type ButtonVariant = "primary" | "secondary" | "white";

export interface ButtonProps extends React.ComponentPropsWithRef<"button"> {
  variant?: ButtonVariant;
  fullWidth?: boolean;
}

export const Button = forwardRef(
  (
    { fullWidth = false, variant = "primary", children, ...props }: ButtonProps,
    ref: React.ForwardedRef<HTMLButtonElement>
  ) => {
    return (
      <ButtonContainer
        $fullWidth={fullWidth}
        $variant={variant}
        {...props}
        ref={ref}
      >
        {children}
      </ButtonContainer>
    );
  }
);

Button.displayName = "Button";