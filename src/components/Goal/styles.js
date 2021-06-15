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
    background-color: #056479;
    /* border-bottom-left-radius: 100px;
    border-bottom-right-radius: 100px; */
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
    justify-content: center;
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
        width: 50%;
        max-width: 155px;

        justify-content: space-between;
        align-items: center;
        padding-left: 4px;
        padding-right: 4px;
        border-radius: 4px;
        border: 2px solid black;
        background-color: #3e98c7;

        span {
          font-size: 1.1rem;
          color: white;
        }
      }
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

export const Progress = styled(CircularProgressbar)`
  /* width: 100px; */
  height: 15vh;
  width: 25vw;
  align-self: center;
`;
