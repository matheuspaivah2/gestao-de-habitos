import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  figure {
    height: 85vh;
    width: 100%;
    img {
      height: 85vh;
      width: 100%;
      object-fit: cover;
    }
  }
  .container__Logo {
    margin: 0 auto;
    width: 65vw;
    height: 30vh;
    margin-top: 25vh;
    .logo {
      width: 65vw;
      height: 30vh;
      margin: 0 auto;

      object-fit: contain;
    }
  }

  .containerButtons {
    display: flex;
    margin-top: 30vh;
    column-gap: 5%;
    justify-content: center;
    @media (min-width: 768px) {
      column-gap: 2%;
    }
  }

  .bar {
    margin: 0 auto;
    height: 4px;
    width: 200px;
    background-color: #0a315d;
    margin-top: 4vh;

    @media (min-width: 1000px) {
      display: none;
    }
  }
`;

export const ButtonHome = styled.button`
  width: 40%;
  border: 2px solid black;
  border-radius: 3px;
  max-width: 300px;
  padding: 6px;
  padding-top: 1.5vh;
  padding-bottom: 1.5vh;
  color: ${({ white }) => (white ? "#0a315d" : "#ffffff")};
  background-color: ${({ white }) => (white ? "#ffffff" : "#0a315d")};
  font-size: 1rem;
  font-weight: bolder;
  font-family: "Londrina Solid", cursive;
  cursor: pointer;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;