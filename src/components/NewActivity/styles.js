import styled from "styled-components";
import { TextField, withStyles } from "@material-ui/core";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
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
    padding: 3vw;
    strong {
      font-size: 1.1rem;
      color: white;
      font-weight: bolder;
    }
    div {
      font-size: 1.3rem;
      color: white;
      cursor: pointer;
    }
  }

  .container__inputs {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    row-gap: 2vh;
    padding: 4px;
    height: 80%;

    h2 {
      text-transform: uppercase;
      font-size: 1rem;
      text-align: center;
    }
  }
  button {
    width: 40%;
    border: none;
    background-color: #0a315d;
    border-radius: 4px;
    color: white;
    font-size: 1.2rem;
    font-weight: bolder;
    padding: 8px;
    font-family: "Londrina Solid", cursive;
  }
`;

export const Input = withStyles({
  root: {
    width: "90%",
  },
})(TextField);
