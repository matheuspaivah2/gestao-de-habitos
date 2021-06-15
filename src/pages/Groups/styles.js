import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  .container__PageName {
    margin: 0 auto;
    height: 7vh;
    width: 70%;
    background-color: #056479;
    border-bottom-left-radius: 100px;
    border-bottom-right-radius: 100px;
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
  border: none;
  width: 90%;
  padding: 1.5vh;
  color: white;
  background-color: black;
  font-size: 1rem;
  border-radius: 4px;
  margin: 0 auto;
  margin-top: 3vh;
  text-align: left;
`;
