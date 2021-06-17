import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  figure {
    height: 85vh;
    width: 100%;
    img {
      height: 85vh;
      width: 100%;
      object-fit: cover;
    }
  }
  .logo {
    z-index: 2;
    position: absolute;
    top: 3vh;
    left: 50%;
    transform: translateX(-50%);
  }
  .containerButtons {
    display: flex;
    margin-top: 3.5vh;
    column-gap: 5%;
    justify-content: center;
  }

  .bar {
    margin: 0 auto;
    height: 4px;
    width: 200px;
    background-color: black;
    margin-top: 2vh;
  }
`;