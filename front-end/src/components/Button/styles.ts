import styled from "styled-components";

interface ButtonProps {
  size: string;
}

export const Container = styled.button<ButtonProps>`
  margin: 20px 0;
  width: ${({ size }) => size};
  padding: 12px 8px;
  background-color: ${({ theme }) => theme.fire.background};
  color: ${({ theme }) => theme.white};
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 8px;

  &:hover {
    opacity: 0.8;
    transition: 0.7s ease;
  }
`;
