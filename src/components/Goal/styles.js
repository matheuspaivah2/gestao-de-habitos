import styled from "styled-components";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* margin: 0 auto; */
  background-color: white;
  width: 100%;
  height: 60vh;
  padding: 0;

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
    strong {
      font-size: 1.4rem;
      color: white;
      font-weight: bolder;
    }
    div {
      font-size: 1.5rem;
      color: white;
      cursor: pointer;
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
      font-size: 1rem;
      text-align: center;
    }
    .achieved {
      display: flex;
      column-gap: 4vw;
      justify-content: center;
      align-items: center;
      margin-top: 4vh;
      .check {
        display: flex;
        width: 65%;
        max-width: 155px;

        justify-content: space-evenly;
        align-items: center;
        padding-left: 4px;
        padding-right: 4px;
        border-radius: 4px;
        border: 2px solid black;
        background-color: #0a315d;

        span {
          font-size: 1.1rem;
          color: white;
        }
      }
    }
  }
  button {
    width: 60%;
    border: 2px solid black;
    background-color: #0a315d;
    border-radius: 4px;
    color: white;
    font-size: 1.2rem;
    font-weight: bolder;
    padding: 6px;
    font-family: "Londrina Solid", cursive;
  }
`;

export const Progress = styled(CircularProgressbar)`
  /* width: 100px; */
  height: 15vh;
  width: 25vw;
  align-self: center;
`;
