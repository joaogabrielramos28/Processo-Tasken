import React, { useState } from "react";
import Header from "../../components/Header";
import { Container, Search, ButtonContainer } from "./styles";
import { GET_POKEMONS } from "../../services/apollo-client";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import PokeCard from "../../components/PokeCard";
import Spinner from "../../components/Spinner";
import Button from "../../components/Button";
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

  if (!data) {
    return <Spinner />;
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
        <ButtonContainer>
          <Button
            size={"450px"}
            onClick={handleLoadMorePokemons}
            title={"Load More"}
          />
        </ButtonContainer>
      )}
    </>
  );
};

export default Home;
