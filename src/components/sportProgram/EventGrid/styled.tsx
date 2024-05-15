import styled from "styled-components";

export const EventGridWrapper = styled.div`
  ${({ theme }) => ({
    backgroundColor: theme.colors.white,
  })}
`;

export const EmptyEventGridWrapper = styled.div`
  min-height: 350px;
  padding-top: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const EmptyEventGridIconWrapper = styled.div`
  ${({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: theme.colors.cadetGrey2,
    fontSize: "90px",
    marginTop: "20px",
  })}
`;

export const EmptyEventGridDescription = styled.p`
  ${({ theme }) => ({
    fontSize: theme.fontSize.md,
    fontWeight: theme.fontWeight.bold,
    color: theme.colors.cadetGrey2,
    marginTop: "30px",
    textAlign: "center",
  })}
`;
