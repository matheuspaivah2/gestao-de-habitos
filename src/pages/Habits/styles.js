import styled, { keyframes } from "styled-components"

const Container = styled.div`
  height:100vh;
  display:flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
`;

const appearFromRight = keyframes`
  from {
    opacity:0;
    transform: translateX(-150px)
  }
  to {
    opacity: 1;
    transform: translateX(0px)
  }

`

export const AnimationContainer = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content:center;
    animation: ${appearFromRight} 1s;
`

export default Container;