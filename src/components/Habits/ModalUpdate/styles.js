import styled from "styled-components";

export const Button = styled.button`
  width: 50%;
  border: none;
  background-color: #0a315d;
  border-radius: 4px;
  color: white;
  font-size: 1.1rem;
  font-weight: bolder;
  padding: 8px;
  font-family: "Londrina Solid", cursive;
  @media (min-width: 768px) {
    width: 50%;
    font-size: 1.6rem;
  }
`;

export const Container = styled.div``;

export const MySelect = styled.select`
  background: var(--white);
  border-radius: 1px;
  border: 2px solid var(--black);
  color: var(--gray);
  padding: 0.7rem;
  width: 100%;
  display: flex;
  transition: 0.5s;
`;
