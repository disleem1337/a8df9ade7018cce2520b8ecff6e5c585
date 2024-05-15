import styled from "styled-components";

export const ContainerWrapper = styled.div`
  ${({ theme }) => ({
    maxWidth: theme.width.container,
    padding: "0 15px",
    margin: "0 auto",
  })}
`;
