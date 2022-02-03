import React, { useState } from "react";
import Header from "../../components/Header";
import PokeCard from "../../components/PokeCard";
import { Container, Search } from "./styles";
import { GET_POKEMONS, GET_POKEMON } from "../../services/apollo-client";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

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
  const { data } = useQuery<DataProps>(GET_POKEMONS, {
    variables: {
      limit: 10,
      offset: 0,
    },
  });

  console.log(data);

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
    </>
  );
};

export default Home;
