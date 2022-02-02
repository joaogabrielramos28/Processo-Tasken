import styled from "styled-components";

export const Container = styled.div`
  width: 450px;
  display: flex;

  padding: 1rem;

  box-shadow: 0 0 20px 0 #4bd0b1;

  background-color: #4bd0b1;

  border-radius: 3rem;

  padding: 3rem 1rem 3rem 3rem;
`;

export const PokeInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
`;

export const PokeName = styled.h2`
  color: ${({ theme }) => theme.white};
  font-weight: bold;
  font-size: 2rem;

  text-transform: capitalize;
`;

export const PokeTypes = styled.div`
  margin-top: 1rem;
`;

export const PokeType = styled.h3`
  color: ${({ theme }) => theme.white};
  font-weight: 200;
  font-size: 1rem;

  border-radius: 100rem;
  text-align: center;
  background-color: ${({ theme }) => theme.white_light};

  padding: 0.3rem 0.7rem;

  margin-top: 0.3rem;
`;

export const PokeImage = styled.img`
  width: 180px;
`;
