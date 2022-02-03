import React from "react";
import { Container } from "./styles";

interface ButtonProps {
  title: string;
  onClick: () => void;
  size: string;
}

const Button = ({ title, onClick, size, ...rest }: ButtonProps) => {
  return (
    <Container size={size} onClick={onClick} {...rest}>
      {title}
    </Container>
  );
};

export default Button;
