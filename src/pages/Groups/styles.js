import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin: 0 auto;

  .container__PageName {
    margin: 0 auto;
    height: 7vh;
    width: 40%;
    background-color: #0a315d;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    border: 2px solid black;
    border-top: none;
    display: flex;
    justify-content: center;
    align-items: center;
    strong {
      font-size: 1.5rem;
      color: white;
      font-weight: 300;
    }
  }
`;

export const Button = styled.button`
  border: 2px solid black;
  width: 90%;
  padding: 1.6vh;
  color: white;
  background-color: #0a315d;
  font-size: 1.1rem;
  border-radius: 3px;
  margin: 0 auto;
  margin-top: 3vh;
  text-align: left;
  font-family: "Londrina Solid", cursive;
  cursor: pointer;
  @media (min-width: 768px) {
    font-size: 1.4rem;

    &:hover {
      background-color: var(--orange);
      color: black;
    }
  }
`;
