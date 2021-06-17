import styled from "styled-components";

export const Group = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 8px;
    margin: 0 auto;
    min-height: 350px;
    height: 75vh;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='79' height='79' viewBox='0 0 200 200'%3E%3Cpolygon fill='%23DCEFFA' points='100 0 0 100 100 100 100 200 200 100 200 0'/%3E%3C/svg%3E");
    background-color: #ffffff;

    .container--NameGroup {
      margin: 0 auto;
      height: 7vh;
      width: 100%;
      background-color: #0a315d;
      display: flex;
      justify-content: center;
      align-items: center;
      strong {
        font-size: 1.2rem;
        color: white;
        font-weight: 300;
        width: 80%;
        overflow: hidden;
        height: 25px;
      }
      div {
        color: #ffffff;
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

    p {
      overflow: hidden;
      text-align: center;
      font-size: 0.8rem;
      margin-top: 1vh;
    }

    .container__InfoGroup {
      display: flex;
      margin: 0 auto;
      width: 100%;
      justify-content: center;
      column-gap: 2%;
      height: 49vh;
    }
    .category {
      text-align: center;
      font-weight: bolder;
      margin-top: 1vh;
    }

    .box {
      display: flex;
      flex-direction: column;
      margin-top: 2vh;
      width: 45%;
      border-radius: 6px;
      height: 95%;
      

      h3 {
        font-size: 1rem;
        text-align: center;
      }

      .list {
        border: 2px solid black;
        height: 93%;
        border-radius: 4px;
        padding: 4px;
        overflow: scroll;
        background-color: #ffffff;
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
      justify-content: space-evenly;
      margin-bottom: 1vh;

      button {
        width: 43%;
        border: none;
        background-color: #0a315d;
        color: white;
        border-radius: 4px;
        padding: 4px;
        font-size: 1rem;
        font-weight: bolder;
        cursor: pointer;
      }
    }
`;