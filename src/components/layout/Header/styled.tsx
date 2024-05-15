import styled from "styled-components";

export const HeaderWrapper = styled.div`
  ${({ theme }) => ({
    backgroundColor: theme.colors.primary,
    position: "sticky",
    top: 0,
    zIndex: 100,
  })}
`;

export const HeaderInnerWrapper = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
