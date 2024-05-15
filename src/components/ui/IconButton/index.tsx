import { forwardRef } from "react";
import { IconButtonContainer } from "./styled";

export type IconButtonVariants = "primary" | "secondary";
export type IconButtonSize = "small" | "medium";

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: IconButtonVariants;
  size?: IconButtonSize;
}

export const IconButton = forwardRef(
  (
    {
      variant = "primary",
      size = "medium",
      children,
      ...props
    }: IconButtonProps,
    ref: React.ForwardedRef<HTMLButtonElement>
  ) => {
    return (
      <IconButtonContainer $size={size} $variant={variant} {...props} ref={ref}>
        {children}
      </IconButtonContainer>
    );
  }
);

IconButton.displayName = "IconButton";