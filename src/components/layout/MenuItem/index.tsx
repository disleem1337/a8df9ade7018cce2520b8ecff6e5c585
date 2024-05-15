import { LinkProps } from "next/link";
import React from "react";
import { MenuItemWrapper } from "./styled";

export interface MenuItemProps extends LinkProps, React.PropsWithChildren {
  isActive?: boolean;
  href: string;
}

export function MenuItem({
  isActive,
  href,
  children,
  ...props
}: MenuItemProps) {
  return (
    <MenuItemWrapper $isActive={isActive} href={href} {...props}>
      {children}
    </MenuItemWrapper>
  );
}
