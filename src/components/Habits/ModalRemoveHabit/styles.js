import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 100%;
  height: 40vh;
  padding: 0;
  justify-content: space-evenly;
  align-items: center;
  max-height: 300px;

  .container__nameGoal {
    margin: 0;
    height: 9vh;
    width: 100%;
    background-color: #0a315d;

    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid black;
    padding: 6vw;
    padding-right: 4vw;
    @media (min-width: 768px) {
      padding: 3vh;
      max-height: 80px;
    }
    strong {
      font-size: 1.1rem;
      color: white;
      font-weight: bolder;
      @media (min-width: 768px) {
        font-size: 1.9rem;
      }
    }
    div {
      font-size: 1.3rem;
      color: white;
      cursor: pointer;
      @media (min-width: 768px) {
        font-size: 1.9rem;
      }
    }
  }

  .container__infoGoal {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 2vh;
    row-gap: 2vh;
    padding: 4px;
    width: 100%;
    height: 81%;

    h2 {
      text-transform: uppercase;
      font-size: 1.4rem;
      text-align: center;
      overflow: hidden;
      max-height: 50px;
      @media (min-width: 768px) {
        font-size: 2rem;
        max-height: 100px;
      }
    }
    p {
      font-size: 1.2rem;
      @media (min-width: 768px) {
        font-size: 1.9rem;
      }
    }
  }
  button {
    width: 50%;
    border: 2px solid black;
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
      cursor: pointer;
      &:hover {
        background-color: var(--orange);
        color: black;
      }
    }
  }
`;
