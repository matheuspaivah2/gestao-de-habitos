import styled from "styled-components";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar } from "react-circular-progressbar";

export const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  border-radius: 8px;
  margin: 0 auto;
  min-height: 350px;
  margin-top: 4vh;
  height: 65vh;

  .container--NameGroup {
    margin: 0 auto;
    height: 7vh;
    width: 70%;
    background-color: black;
    border-bottom-left-radius: 100px;
    border-bottom-right-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    strong {
      font-size: 1.2rem;
      color: white;
      font-weight: 400;
      width: 80%;
      overflow: hidden;
      height: 25px;
    }
  }

  .list {
    display: flex;
    height: 62vh;
    flex-direction: column;
    font-size: 18px;
    justify-content: space-evenly;
  }
  .container__Progress {
  }
`;

export const Progress = styled(CircularProgressbar)`
  /* width: 100px; */
  height: 15vh;
  width: 25vw;
  align-self: center;
  .CircularProgressbar {
    .CircularProgressbar,
    .CircularProgressbar {
      stroke: black;
    }
  }
`;
