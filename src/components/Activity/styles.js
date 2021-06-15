import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 100%;
  height: 40vh;
  padding: 0;

  .container__nameGoal {
    margin: 0;
    height: 9vh;
    width: 100%;
    background-color: #056479;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid black;
    strong {
      font-size: 1.5rem;
      color: white;
      font-weight: bolder;
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
    height: 81%;

    h2 {
      text-transform: uppercase;
      font-size: 1.1rem;
      text-align: center;
    }
    p {
      font-size: 1rem;
    }
  }

  .container__buttons {
    width: 100%;
    display: flex;
    column-gap: 3vw;
    justify-content: center;
    align-items: center;
    margin-top: auto;
    margin-bottom: 1vh;

    button {
      width: 45%;
      border: none;
      background-color: #056479;
      border-radius: 4px;
      color: white;
      font-size: 1rem;
      font-weight: bolder;
      padding: 8px;
    }
  }
`;
