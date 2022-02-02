import styled from "styled-components";

export const Container = styled.div`
  color: ${(props) => props.theme.background};

  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 40px 0;
`;

export const Logo = styled.img`
  width: 30px;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.title};

  font-size: 3rem;
`;
