import { forwardRef } from "react";
import { InputWrapper } from "./styled";

export interface InputProps extends React.ComponentPropsWithRef<"input"> {
  fullWidth?: boolean;
}

export const Input = forwardRef(
  (
    { children, fullWidth, ...props }: InputProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <InputWrapper $fullWidth={fullWidth} {...props} ref={ref}>
        {children}
      </InputWrapper>
    );
  }
);

Input.displayName = "Input";