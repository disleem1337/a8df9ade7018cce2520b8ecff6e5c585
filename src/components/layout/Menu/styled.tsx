import styled from "styled-components";

export const MenuWrapper = styled.div`
  ${({ theme }) => ({
    backgroundColor: theme.colors.bunker,
  })}
`;

export const MenuInnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MenuListWrapper = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
`;

export const IconWrapper = styled.div`
  font-size: 20px;
  display: flex;
  align-items: center;
`;
