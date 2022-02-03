import React from "react";
import { LoadContainer } from "./styles";
import SpinnerGif from "../../assets/loading.gif";

const Spinner = () => {
  return (
    <LoadContainer>
      <img src={SpinnerGif} alt="Spinner de carregamento" />
    </LoadContainer>
  );
};

export default Spinner;
