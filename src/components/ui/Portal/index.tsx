import { forwardRef } from "react";
import { createPortal } from "react-dom";

interface PortalProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Portal = forwardRef<HTMLDivElement, PortalProps>(
  ({ ...props }, forwardedRef) => {
    const container = globalThis?.document?.body;

    return container
      ? createPortal(<div {...props} ref={forwardedRef} />, container)
      : null;
  }
);

Portal.displayName = "Portal";