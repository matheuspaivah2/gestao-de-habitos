import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;

  .input {
    width: 90%;
    margin: 3vh 0;
    display: flex;
    justify-content: center;

    input {
      width: 40vw;
      height: 6vh;
      border-radius: 2px 0 0 2px;
      border: 2px solid black;
      background-color: var(--orange);
      color: black;
      font-size: 1rem;
      text-align: left;
      padding-left: 8px;

      @media (min-width: 768px) {
        width: 43vw;
        font-size: 1.3rem;
      }
    }

    select {
      width: 26vw;
      height: 6vh;
      background-color: #0a315d;
      color: var(--white);
      border-radius: 0 2px 2px 0;
      border: 2px solid black;
      font-size: 0.8rem;
      font-weight: bold;

      @media (min-width: 768px) {
        width: 24vw;
        font-size: 1.2rem;
      }
    }

    button {
      margin: 0 0 0 1vw;
      width: 25%;
      height: 6vh;
      padding: 3px;
      background-color: #0a315d;
      color: var(--white);
      border: 2px solid black;
      border-radius: 2px;
      font-size: 1rem;
      cursor: pointer;
      font-weight: bold;

      @media (min-width: 768px) {
        font-size: 1.3rem;
        &:hover {
          background-color: var(--orange);
          color: black;
        }
      }
    }
  }

  span {
    width: 90%;
    text-align: left;
    margin-bottom: 6vh;
    margin-top: 3vh;
    font-size: 1.3rem;
    color: var(--white);

    @media (min-width: 768px) {
      font-size: 1.8rem;
    }
  }
`;
export const Groups = styled(Carousel)`
  width: 90%;

  .groups {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    height: 60vh;
    width: 100%;
  }

  .carousel-status {
    visibility: hidden;
    margin: 0;
    padding: 0;
  }
`;
