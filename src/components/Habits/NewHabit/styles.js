import styled from "styled-components";
import { TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

export const Button = styled.button`
  border: none;
  width: 70%;
  padding: 1.5vh;
  color: white;
  background-color: #0a315d;
  font-size: 1rem;
  border-radius: 2px;
  margin: 0 auto;
  margin-top: 3vh;
  text-align: left;
  font-weight: bolder;
  text-align: center;
  border: 1px solid black;

  &:hover {
    border: 2px solid #0a315d;
    background-color: white;
    color: #0a315d;
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
    border-bottom: 3px solid black;
    position: relative;
    strong {
      font-size: 1.1rem;
      color: white;
    }
    div {
      /* position: absolute; */
      right: 10px;
      top: 8px;
      width: 5%;
      height: 4vh;
      color: white;
      font-size: 1.2rem;
      cursor: pointer;
      text-align: center;
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
    margin: "0",
  },
})(TextField);
