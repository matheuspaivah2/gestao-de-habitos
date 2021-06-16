import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  border-radius: 4px;
  margin: 0 auto;
  min-height: 350px;
  margin-top: 4vh;
  height: 70vh;
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='79' height='79' viewBox='0 0 200 200'%3E%3Cpolygon fill='%23DCEFFA' points='100 0 0 100 100 100 100 200 200 100 200 0'/%3E%3C/svg%3E");
  .container--NameGroup {
    margin: 0 auto;
    height: 7vh;
    width: 100%;
    background-color: #0a315d;
    border-bottom: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    strong {
      font-size: 1.3rem;
      color: white;
      font-weight: 300;
      width: 80%;
      overflow: hidden;
      height: 25px;
    }
  }

  p {
    overflow: hidden;
    text-align: center;
    font-size: 0.9rem;
    margin-top: 1vh;
    width: 90%;
    margin: 1vh auto;
  }

  .container__InfoGroup {
    display: flex;
    margin: 0 auto;
    width: 100%;
    justify-content: center;
    column-gap: 2%;
    height: 47vh;
  }
  .category {
    font-weight: bolder;
    margin-top: 1vh;
    font-size: 1.2rem;
  }

  .box {
    display: flex;
    flex-direction: column;
    margin-top: 2vh;
    width: 45%;

    border-radius: 6px;
    height: 95%;

    h3 {
      font-size: 1.1rem;
    }

    .list {
      border: 2px solid black;
      height: 93%;
      border-radius: 4px;
      padding: 4px;
      overflow: scroll;
      background-color: #ffffffa6;
      li {
        color: black;
        font-size: 1rem;
        text-align: left;
        width: 90%;
        margin-bottom: 2vh;
        cursor: pointer;
        text-decoration: underline;
        font-style: italic;
      }
    }
  }

  .buttons__Add {
    display: flex;
    width: 100%;
    justify-content: center;
    column-gap: 2%;
    button {
      width: 45%;
      border: none;
      background-color: #0a315d;
      color: white;
      border-radius: 2px;
      padding: 4px;
      font-size: 1rem;
      font-weight: bolder;
      cursor: pointer;
      font-family: "Londrina Solid", cursive;
    }
  }
`;
