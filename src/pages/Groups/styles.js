import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  .container__PageName {
    margin: 0 auto;
    height: 7vh;
    width: 90%;
    background-color: #0a315d;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    border: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    strong {
      font-size: 1.5rem;
      color: white;
      font-weight: 300;
    }
  }
`;

export const Button = styled.button`
  border: 2px solid black;
  width: 90%;
  padding: 1.6vh;
  color: white;
  background-color: #0a315d;
  font-size: 1.1rem;
  border-radius: 3px;
  margin: 0 auto;
  margin-top: 3vh;
  text-align: left;
  font-family: "Londrina Solid", cursive;
`;
