import styled from "styled-components";
import { TextField, withStyles } from "@material-ui/core";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* margin: 0 auto; */
  background-color: white;
  width: 100%;
  height: 50vh;
  padding: 0;

  .container__nameGoal {
    margin: 0;
    height: 9vh;
    width: 100%;
    background-color: #0a315d;
    display: flex;
    justify-content: space-between;
    padding: 3.5vh;
    align-items: center;
    border-bottom: 2px solid black;
    @media (min-width: 768px) {
      max-height: 10px;
    }
    strong {
      font-size: 1.2rem;
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
    height: 80%;

    h2 {
      text-transform: uppercase;
      font-size: 1rem;
      text-align: center;
    }
  }
  button {
    width: 50%;
    border: none;
    background-color: #0a315d;
    border-radius: 2px;
    border: 2px solid black;
    color: white;
    font-size: 1.1rem;
    font-weight: bolder;
    padding: 8px;
    font-family: "Londrina Solid", cursive;
    @media (min-width: 768px) {
      width: 50%;
      font-size: 1.6rem;
      cursor: pointer;
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
      // width: "90%",
      "& .MuiOutlinedInput-root": {
        height: "7vh",
      },
    },
  },
})(TextField);

export const MySelect = styled.select`
  background-color: white;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.23);
  color: rgba(0, 0, 0, 0.54);
  padding: 0.7rem;
  width: 80%;
  display: flex;
  transition: 0.5s;
  font-size: 1rem;
  @media (min-width: 768px) {
    height: 7vh;
  }
  option {
    background-color: white;
  }
`;
