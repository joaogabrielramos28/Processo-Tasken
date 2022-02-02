import React from "react";
import { Container, Logo, Title } from "./styles";
import PokeBall from "../../assets/pokeball.svg";
const Header = () => {
  return (
    <Container>
      <Title>
        P
        <Logo src={PokeBall} />
        kédex
      </Title>
    </Container>
  );
};

export default Header;
