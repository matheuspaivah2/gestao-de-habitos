import styled from "styled-components";

export const Group = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  border-radius: 2px;
  min-height: 350px;
  height: 74vh;
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='79' height='79' viewBox='0 0 200 200'%3E%3Cpolygon fill='%23DCEFFA' points='100 0 0 100 100 100 100 200 200 100 200 0'/%3E%3C/svg%3E");
  .container--NameGroup {
    height: 7vh;
    width: 100%;
    background-color: #0a315d;
    border-bottom: 2px solid black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    strong {
      font-size: 1.3rem;
      color: white;
      font-weight: bolder;
      width: 80%;
      overflow: hidden;
      height: 25px;
      padding-left: 4%;
      @media (min-width: 768px) {
        font-size: 1.8rem;
        height: 40px;
      }
    }
    div {
      font-size: 1.3rem;
      color: white;
      font-weight: bolder;
      cursor: pointer;
      padding-right: 4%;
      @media (min-width: 768px) {
        font-size: 1.8rem;
        height: 40px;
      }
    }
  }

  p {
    overflow: hidden;
    text-align: center;
    font-size: 0.9rem;
    margin-top: 1vh;
    width: 90%;
    margin: 1vh auto;
    @media (min-width: 768px) {
      font-size: 1.3rem;
    }
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
    text-align: center;
    @media (min-width: 768px) {
      font-size: 1.8rem;
    }
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
      @media (min-width: 768px) {
        font-size: 1.6rem;
      }
    }

    .list {
      border: 2px solid black;
      height: 93%;
      border-radius: 2px;
      padding: 4px;
      overflow-y: scroll;
      overflow-x: hidden;
      background-color: #ffffffa6;
      li {
        color: black;
        font-size: 1rem;
        text-align: left;
        width: 90%;
        margin-bottom: 2vh;
        text-decoration: underline;
        font-style: italic;

        @media (min-width: 768px) {
          font-size: 1.5rem;
        }
      }
    }
  }

  .buttons__Add {
    display: flex;
    width: 100%;
    justify-content: center;
    column-gap: 2%;
    margin: auto;
    button {
      width: 45%;
      border: 2px solid black;
      background-color: #0a315d;
      color: white;
      border-radius: 2px;
      padding: 4px;
      font-size: 1rem;
      font-weight: bolder;
      cursor: pointer;
      font-family: "Londrina Solid", cursive;
      @media (min-width: 768px) {
        width: 40%;
        font-size: 1.6rem;
        &:hover {
          background-color: var(--orange);
          color: black;
        }
      }
    }
  }
`;
