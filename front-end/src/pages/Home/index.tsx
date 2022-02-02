import React from "react";
import Header from "../../components/Header";
import PokeCard from "../../components/PokeCard";
import { Container } from "./styles";
import { Todos } from "../../services/apollo-client";

const Home = () => {
  const { data } = Todos();
  console.log(data);
  return (
    <>
      <Header />

      <Container>
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
        <PokeCard />
      </Container>
    </>
  );
};

export default Home;
