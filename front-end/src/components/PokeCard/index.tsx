import React from "react";
import {
  Container,
  PokeInfo,
  PokeImage,
  PokeName,
  PokeTypes,
  PokeType,
} from "./styles";

const PokeCard = () => {
  return (
    <Container>
      <PokeInfo>
        <PokeName>Bulbasaur</PokeName>

        <PokeTypes>
          <PokeType>Grass</PokeType>
          <PokeType>Grass</PokeType>
        </PokeTypes>
      </PokeInfo>
      <PokeImage src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" />
    </Container>
  );
};

export default PokeCard;
