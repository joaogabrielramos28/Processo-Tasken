import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  display: flex;

  padding: 1rem;
  flex-direction: column;

  background-color: ${({ theme }) => theme.white};

  border-radius: 3rem;
  justify-content: center;

  align-items: center;
  padding: 3rem;

  cursor: pointer;
`;

export const PokeInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
`;

export const PokeName = styled.h2`
  color: ${({ theme }) => theme.title};
  font-weight: bold;
  font-size: 2rem;

  text-transform: capitalize;
`;

export const PokeImage = styled.img`
  width: 250px;
  object-fit: cover;
`;
