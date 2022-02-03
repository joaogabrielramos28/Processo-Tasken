import styled, { css } from "styled-components";
import { AiOutlineArrowLeft } from "react-icons/ai";
interface CardProps {
  type: string;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Card = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 450px;
  height: 700px;
  background-color: #6244e8;
  ${({ theme, type }) =>
    type === "grass" &&
    css`
      background-color: ${theme.grass.background};
    `};
  ${({ theme, type }) =>
    type === "bug" &&
    css`
      background-color: ${theme.bug.background};
    `};
  ${({ theme, type }) =>
    type === "water" &&
    css`
      background-color: ${theme.water.background};
    `};
  ${({ theme, type }) =>
    type === "fire" &&
    css`
      background-color: ${theme.fire.background};
    `};

  border-radius: 8px;
`;

export const CardHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Icon = styled(AiOutlineArrowLeft)`
  cursor: pointer;
  font-size: 1.5rem;

  color: ${({ theme }) => theme.white};
`;
export const PokemonName = styled.h2`
  margin-top: 12px;
  font-size: 2rem;
  transform: translateX(-10px);
  color: ${({ theme }) => theme.white};
`;
export const Space = styled.div``;

export const PokemonTypes = styled.div`
  padding: 12px 32px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PokemonType = styled.h3`
  cursor: pointer;
  padding: 2px 12px;
  margin: 0 10px;
  color: ${({ theme }) => theme.title};
  border-radius: 100rem;
  background-color: ${({ theme }) => theme.white_light};
  color: ${({ theme }) => theme.white};

  &:hover {
    opacity: 0.3;

    transition: 0.7s ease;
  }
`;

export const PokemonImage = styled.img`
  width: 250px;
  transition: 0.7s ease;
  &:hover {
    transform: translateY(-10px);
    transition: 0.7s ease;
  }
`;

export const CardInfo = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.white};
  padding: 12px 0;
  width: 100%;
  border-radius: 42px 42px 0 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const Pokeball = styled.img`
  width: 64px;
  object-fit: cover;
  position: absolute;
  top: -30px;
  transition: 0.7s;

  padding: 0px;

  &:hover {
    transform: rotate(360deg);
    transition: 0.8s;
    padding: 12px;
  }
`;

export const Moves = styled.div`
  margin-top: 20px;
  padding: 30px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: 350px;
  align-items: center;
`;

export const Title = styled.h3`
  text-align: center;
  color: ${({ theme }) => theme.title};
  font-size: 1.3rem;

  margin-bottom: 10px;
`;

export const Move = styled.h3`
  padding: 4px 6px;
  width: 100%;
  color: ${({ theme }) => theme.title};
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  text-align: center;
`;
