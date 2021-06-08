import styled from "styled-components";

export const Container = styled.button`
  border: 1px solid black;
  border-radius: 4px;
  background-color: black;
  width: 130px;
  padding: 6px;
  padding-top: 14px;
  padding-bottom: 14px;
  color: ${({ white }) => (white ? "black" : "white")};
  background-color: ${({ white }) => (white ? "white" : "black")};
  font-size: 0.8rem;
`;
