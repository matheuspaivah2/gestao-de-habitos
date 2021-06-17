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
    @media (min-width: 768px) {
      padding: 3vw;
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
    height: 81%;

    h2 {
      text-transform: uppercase;
      font-size: 1.3rem;
      text-align: center;
      @media (min-width: 768px) {
        font-size: 1.9rem;
      }
    }
    p {
      font-size: 1rem;
      @media (min-width: 768px) {
        font-size: 1.6rem;
      }
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
        @media (min-width: 768px) {
          max-width: 245px;
        }
        span {
          font-size: 1.1rem;
          color: white;
          @media (min-width: 768px) {
            font-size: 1.7rem;
          }
        }
      }
    }
  }
  button {
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
  }
`;

export const Progress = styled(CircularProgressbar)`
  /* width: 100px; */
  height: 15vh;
  width: 25vw;
  align-self: center;
`;
