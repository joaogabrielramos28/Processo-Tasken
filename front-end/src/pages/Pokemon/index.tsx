import React, { useState } from "react";

import {
  Container,
  Card,
  PokemonImage,
  CardInfo,
  CardHeader,
  PokemonName,
  Icon,
  Space,
  PokemonTypes,
  PokemonType,
  Pokeball,
  Moves,
  Title,
  Move,
} from "./styles";

import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_POKEMON } from "../../services/apollo-client";
import PokeballImage from "../../assets/pokeball.png";
import Spinner from "../../components/Spinner";
import Button from "../../components/Button";

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
  const [loadMoves, setLoadMoves] = useState(10);
  const { name } = useParams();

  const { data } = useQuery<PokemonDataProps>(GET_POKEMON, {
    variables: {
      name: name,
    },
  });

  if (!data) {
    return <Spinner />;
  }

  function handleAddMoreMoves() {
    setLoadMoves(loadMoves + 5);
  }
  const movesLength = data?.pokemon.moves.length || 0;

  return (
    <Container>
      <Card type={data.pokemon.types[0].type.name}>
        <CardHeader>
          <Link to="/">
            <Icon />
          </Link>
          <PokemonName>{data.pokemon.name}</PokemonName>
          <Space></Space>
        </CardHeader>
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
            {loadMoves < movesLength && (
              <Button
                size={"250px"}
                onClick={handleAddMoreMoves}
                title={"Load More"}
              />
            )}
          </Moves>
          <Button size={"350px"} title={"Catch"} onClick={() => {}} />
        </CardInfo>
      </Card>
    </Container>
  );
};

export default Pokemon;
