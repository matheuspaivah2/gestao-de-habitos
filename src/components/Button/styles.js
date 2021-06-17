import styled from "styled-components";

export const Container = styled.button`
  border: 2px solid black;
  border-radius: 4px;
  background-color: black;
  width: ${({ size }) => (size ? '99%' : '40%')};
  padding: 6px;
  padding-top: 1.5vh;
  padding-bottom: 1.5vh;
  color: ${({ white }) => (white ? "black" : "white")};
  background-color: ${({ white }) => (white ? "white" : "black")};
  font-size: 0.8rem;
  cursor: pointer;
  @media(max-width: 400px) {
        margin-top:10px;
    }
`;