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
    padding: 3vh;
    strong {
      font-size: 1.1rem;
      color: white;
      font-weight: bolder;

      @media (min-width: 768px) {
        font-size: 1.7rem;
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

  .container__inputs {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    row-gap: 2vh;
    padding: 4px;
    height: 81%;

    h2 {
      text-transform: uppercase;
      font-size: 1rem;
      text-align: center;
    }
  }
  .bt__submit {
    width: 50%;
    border: 2px solid black;
    background-color: #0a315d;
    border-radius: 3px;
    color: white;
    font-size: 1rem;
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

export const Input = withStyles({
  root: {
    width: "80%",
    "& .MuiOutlinedInput-root": {
      height: "7vh",
    },
  },
  "@media (min-width: 768px)": {
    root: {
      "& .MuiOutlinedInput-root": {
        height: "7vh",
      },
    },
  },
})(TextField);
