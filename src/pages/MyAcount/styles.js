import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  height: 70vh;
  margin-top: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  h1 {
    text-align: left;
    margin-left: 6px;

    @media (min-width: 768px) {
      font-size: 2.7rem;
    }
  }
`;
const appearFromUp = keyframes`
    from{
        opacity:0;
        width:100%;
        transform: translateY(-50px)
    }
    to{
        opacity: 1;
        transform: translateY(0px)
    }

`;
export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${appearFromUp} 1s;
  margin: 20px;
  form {
    width: 90vw;
    text-align: center;
    form {
      margin: 0px;
    }
  }
  h1 {
    margin-bottom: 32px;
  }
  p {
    margin-left: 4px;
    margin-top: 2px;
    text-align: left;

    @media (min-width: 768px) {
      font-size: 1.5rem;
    }
    a {
      font-weight: bold;
      color: var(--orange);
    }
  }
  @media (min-width: 768px) {
    form {
      margin: 40px;
      width: 540px;
      text-align: center;
    }
  }
`;
export const Button = styled.button`
  border: 2px solid #0a315d;
  width: ${({ size }) => size};
  padding: 12px;
  color: white;
  margin-top: 1vh;
  background-color: #0a315d;
  font-size: 1.1rem;
  border-radius: 2px;
  margin: 0 auto;
  text-align: center;
  font-family: "Londrina Solid", cursive;
  margin-top: ${({ margin }) => margin};

  @media (min-width: 768px) {
    font-size: 1.5rem;
    &:hover {
      background-color: var(--orange);
      color: black;
    }
  }
`;
