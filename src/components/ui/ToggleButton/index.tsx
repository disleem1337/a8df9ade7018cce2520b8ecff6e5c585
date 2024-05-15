import { forwardRef } from "react";
import { ToggleButtonContainer } from "./styled";

export interface ToggleButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
}

export const ToggleButton = forwardRef(
  (
    { children, isActive, ...props }: ToggleButtonProps,
    ref: React.ForwardedRef<HTMLButtonElement>
  ) => {
    return (
      <ToggleButtonContainer $isActive={isActive} {...props} ref={ref}>
        {children}
      </ToggleButtonContainer>
    );
  }
);

ToggleButton.displayName = "ToggleButton";