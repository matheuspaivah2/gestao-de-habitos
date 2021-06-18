import styled from "styled-components";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar } from "react-circular-progressbar";

export const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  border-radius: 4px;
  margin: 0 auto;
  min-height: 350px;
  margin-top: 4vh;
  height: 65vh;
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='79' height='79' viewBox='0 0 200 200'%3E%3Cpolygon fill='%23DCEFFA' points='100 0 0 100 100 100 100 200 200 100 200 0'/%3E%3C/svg%3E");

  .container--NameGroup {
    margin: 0 auto;
    height: 7vh;
    width: 100%;
    background-color: #0a315d;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid black;
    position: relative;
    strong {
      font-size: 1.3rem;
      color: white;
      font-weight: 400;
      width: 80%;
      overflow: hidden;
      height: 25px;

      @media (min-width: 768px) {
        font-size: 2.1rem;
        height: 40px;
      }
    }
    div {
      width: 3vw;
      height: 3vh;
      border-radius: 50px;
      /* background-color: white; */
      position: absolute;
      right: 20px;
      top: 5px;
      cursor: pointer;
      @media (min-width: 768px) {
        &:hover {
          background-color: var(--orange);
          color: black;
        }
      }
    }
  }

  .list {
    display: flex;
    height: 62vh;
    flex-direction: column;
    font-size: 18px;
    justify-content: space-evenly;

    li {
      font-size: 1.2rem;
      color: #09315d;
      @media (min-width: 768px) {
        font-size: 1.9rem;
      }
      span {
        color: var(--orange);
        @media (min-width: 768px) {
          font-size: 1.9rem;
        }
      }
    }

    .check {
      display: flex;
      width: 70%;
      max-width: 195px;
      margin: 0 auto;
      justify-content: space-evenly;
      align-items: center;
      padding-left: 4px;
      padding-right: 4px;
      border-radius: 4px;
      border: 2px solid black;
      background-color: #0a315d;
      @media (min-width: 768px) {
        max-width: 25%;
      }
      span {
        font-size: 1.1rem;
        color: white;
        @media (min-width: 768px) {
          font-size: 1.7rem;
        }
      }
    }
  }
  .container__Progress {
  }
`;

export const Progress = styled(CircularProgressbar)`
  height: 15vh;
  width: 25vw;
  align-self: center;
  .CircularProgressbar {
    .CircularProgressbar,
    .CircularProgressbar {
      stroke: black;
    }
  }
`;
