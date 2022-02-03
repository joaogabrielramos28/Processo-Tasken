import React, { useState } from "react";
import Header from "../../components/Header";
import { Container, Search, Button, LoadContainer } from "./styles";
import { GET_POKEMONS, GET_POKEMON } from "../../services/apollo-client";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import PokeCard from "../../components/PokeCard";

interface ResultsProps {
  url: string;
  name: string;
  image: string;
}
interface DataProps {
  pokemons: {
    results: ResultsProps[];
  };
}

const Home = () => {
  const [searchPoke, setSearchPoke] = useState("");
  const [pokemonsVisible, setPokemonsVisible] = useState(10);
  const { data } = useQuery<DataProps>(GET_POKEMONS, {
    variables: {
      limit: 151,
      offset: 0,
    },
  });

  function handleLoadMorePokemons() {
    setPokemonsVisible(pokemonsVisible + 10);
  }

  const numberOfPokemons = data?.pokemons.results.length || 0;
  return (
    <>
      <Header />
      <Search>
        <input onChange={(e) => setSearchPoke(e.target.value)} />
      </Search>
      <Container>
        {data?.pokemons.results
          .filter((item) => {
            const pokeName = item.name.toLowerCase();
            if (pokeName.includes(searchPoke)) {
              return item;
            } else {
              return "";
            }
          })
          .slice(0, pokemonsVisible)

          .map((pokemon) => (
            <Link to={`/pokemon/${pokemon.name}`}>
              <PokeCard
                key={pokemon.url}
                name={pokemon.name}
                image={pokemon.image}
              />
            </Link>
          ))}
      </Container>
      {pokemonsVisible < numberOfPokemons && (
        <LoadContainer>
          <Button onClick={handleLoadMorePokemons}>Load More</Button>
        </LoadContainer>
      )}
    </>
  );
};

export default Home;
