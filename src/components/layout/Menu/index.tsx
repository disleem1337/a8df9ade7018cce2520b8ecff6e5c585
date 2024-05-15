import { BasketballIcon, FootballIcon, TennisIcon } from "@/icons";
import {
  IconWrapper,
  MenuInnerWrapper,
  MenuListWrapper,
  MenuWrapper,
} from "./styled";

import { ContainerWrapper } from "@/components/layout/Container";
import { MenuItem } from "@/components/layout/MenuItem";
import { useSportName } from "@/hooks/useSportName";
import { Clock } from "../Clock";

export function Menu() {
  const sportName = useSportName();

  const menuItems = [
    {
      title: "FUTBOL",
      key: "futbol",
      icon: <FootballIcon />,
    },
    {
      title: "BASKETBOL",
      key: "basketbol",
      icon: <BasketballIcon />,
    },
    {
      title: "TENİS",
      key: "tenis",
      icon: <TennisIcon />,
    },
  ];
  
  return (
    <MenuWrapper>
      <ContainerWrapper>
        <MenuInnerWrapper>
          <MenuListWrapper>
            {menuItems.map((item) => (
              <MenuItem
                key={item.key}
                isActive={sportName === item.key}
                href={`/program/${item.key}`}
              >
                <IconWrapper>{item.icon}</IconWrapper>
                {item.title}
              </MenuItem>
            ))}
          </MenuListWrapper>

          <Clock />
        </MenuInnerWrapper>
      </ContainerWrapper>
    </MenuWrapper>
  );
}
