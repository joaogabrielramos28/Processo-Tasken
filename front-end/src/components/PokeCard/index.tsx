import React from "react";
import { Container, PokeInfo, PokeImage, PokeName } from "./styles";

interface PokemonProps {
  name: string;
  image: string;
}

const PokeCard = ({ name, image }: PokemonProps) => {
  return (
    <Container>
      <PokeImage src={image} />
      <PokeInfo>
        <PokeName>{name}</PokeName>
      </PokeInfo>
    </Container>
  );
};

export default PokeCard;
