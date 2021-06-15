import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 45vw;
    height: 45vw;
    border: 2px solid var(--boldgreen);
    border-radius: 10px;
    margin-bottom: 2.5vw;

    h4 {
        background-color: var(--boldgreen);
        color: var(--white); 
        width: 35vw;
        border-radius: 0 0 80px 80px;
        padding-top: 2px ;
        overflow: hidden;
        height: 7vw;
    }

    .description {
        padding: 2px 0;
        height: 28vw;
        display: flex;
        align-items: center;
        overflow: scroll;
        font-size: 13px;
    }
`;

export const Group = styled.div`
    width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  margin: 0 auto;
  min-height: 350px;
  height: 70vh;
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
      font-weight: 300;
      width: 80%;
      overflow: hidden;
      height: 25px;
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
    }

    .list {
      border: 2px solid black;
      height: 93%;
      border-radius: 4px;
      padding: 4px;
      overflow: scroll;

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

    button {
      width: 43%;
      border: none;
      background-color: black;
      color: white;
      border-radius: 4px;
      padding: 4px;
      font-size: 1rem;
      font-weight: bolder;
      cursor: pointer;
    }
  }
`;