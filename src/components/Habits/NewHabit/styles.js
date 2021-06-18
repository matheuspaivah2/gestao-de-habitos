import styled from "styled-components";
import { TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

export const Button = styled.button`
  width: 60%;
  border: 2px solid black;
  background-color: #0a315d;
  border-radius: 4px;
  color: white;
  font-size: 1.1rem;
  font-weight: bolder;
  padding: 8px;
  font-family: "Londrina Solid", cursive;
  @media (min-width: 768px) {
    width: 60%;
    font-size: 1.6rem;
    cursor: pointer;
    &:hover {
      background-color: var(--orange);
      color: black;
    }
  }
`;

export const MySelect = styled.select`
  background-color: white;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.23);
  color: rgba(0, 0, 0, 0.54);
  padding: 0.7rem;
  width: 90%;
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

export const Container = styled.div`
  height: 72vh;
  width: 100%;
  background-color: white;

  .header {
    width: 100%;
    background-color: #0a315d;
    height: 7vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 3vh;
    padding-right: 2vh;
    border-bottom: 2px solid black;

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

  form {
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    height: 64vh;
  }
`;

export const Input = withStyles({
  root: {
    width: "90%",
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
