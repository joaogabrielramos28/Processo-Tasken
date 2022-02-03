import React, { useState } from "react";
import {
  Container,
  Card,
  PokemonImage,
  CardInfo,
  PokemonName,
  PokemonTypes,
  PokemonType,
  Pokeball,
  Moves,
  Title,
  Move,
  ButtonLoad,
  Button,
} from "./styles";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_POKEMON } from "../../services/apollo-client";
import PokeballImage from "../../assets/pokeball.png";

interface PokemonDataProps {
  pokemon: {
    id: number;
    name: string;
    moves: {
      move: {
        name: string;
      };
    }[];
    sprites: {
      front_default: string;
    };

    types: {
      type: {
        name: string;
      };
    }[];
  };
}

const Pokemon = () => {
  const [loadMoves, setLoadMoves] = useState(5);
  const [showButton, setshowButton] = useState(true);
  const { name } = useParams();

  const { data } = useQuery<PokemonDataProps>(GET_POKEMON, {
    variables: {
      name: name,
    },
  });

  if (!data) {
    return <h2>carregando...</h2>;
  }

  function handleAddMoreMoves() {
    const movesLength = data?.pokemon.moves.length || 0;
    if (loadMoves >= movesLength) {
      setshowButton(false);
    } else setLoadMoves(loadMoves + 5);
  }

  return (
    <Container>
      <Card type={data.pokemon.types[0].type.name}>
        <PokemonName>{data.pokemon.name}</PokemonName>
        <PokemonTypes>
          {data.pokemon.types.map((types) => (
            <PokemonType>{types.type.name}</PokemonType>
          ))}
        </PokemonTypes>
        <PokemonImage src={data.pokemon.sprites.front_default} />

        <CardInfo>
          <Pokeball src={PokeballImage} />
          <Moves>
            <Title>Moves</Title>
            {data.pokemon.moves.slice(0, loadMoves).map((moves) => {
              return <Move key={moves.move.name}>{moves.move.name}</Move>;
            })}
            {showButton && (
              <ButtonLoad onClick={handleAddMoreMoves}>Load more</ButtonLoad>
            )}
          </Moves>
          <Button>Catch</Button>
        </CardInfo>
      </Card>
    </Container>
  );
};

export default Pokemon;
