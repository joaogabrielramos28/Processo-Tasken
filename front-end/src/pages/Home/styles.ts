import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 12px 32px;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, auto));
  justify-content: center;
  gap: 20px;
`;

export const Search = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    padding: 8px 12px;
    border: 2px solid ${({ theme }) => theme.fire.background};
    color: ${({ theme }) => theme.text_dark};
    border-radius: 8px;

    outline: none;

    background-color: ${({ theme }) => theme.white};
  }
`;
export const LoadContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;
