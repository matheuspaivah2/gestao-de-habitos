import styled from "styled-components";

export const Container = styled.button`
  border: 2px solid black;
  border-radius: 4px;
  background-color: black;
  width: 135px;
  padding: 6px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: ${({ white }) => (white ? "black" : "white")};
  background-color: ${({ white }) => (white ? "white" : "black")};
  font-size: 0.8rem;
`;
