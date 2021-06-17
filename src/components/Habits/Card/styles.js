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
  /* background: rgba( 7, 7, 7, 0.25 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 ); */

  .container--NameGroup {
    margin: 0 auto;
    height: 7vh;
    width: 70%;
    background-color: #0a315d;
    border-bottom-left-radius: 100px;
    border-bottom-right-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    strong {
      font-size: 1.2rem;
      color: white;
      font-weight: 400;
      width: 80%;
      overflow: hidden;
      height: 25px;
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
      color: #09315D;

      span {
        color: #000;
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
