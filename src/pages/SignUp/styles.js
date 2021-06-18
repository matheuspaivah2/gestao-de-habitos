import styled, { keyframes } from "styled-components"

export const Container = styled.div`
    height:90vh;
    width: 100vw;
    display:flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    h1{
        text-align:left;
        margin-left: 6px;
    }
`
const appearFromRight = keyframes`
    from{
        opacity:0;
        transform: translateX(-150px)
    }
    to{
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
    form{
        width: 99vw;
        text-align:center;
    }
    h1{
        margin-bottom:32px;
    }
    p{
        margin-top:8px;
        a{
            font-weight: bold;
            color: var(--orange);
        }
    }
    @media(min-width: 800px) {
        form{
            margin:80px;
            width:540px;
            text-align:center;
        }
    }
    
`
export const Button = styled.button`
  border: 2px solid var(--black);
  width: ${({ size }) => (size)};
  padding: 1.6vh;
  color: white;
  margin-top: 1vh;
  background-color: #0a315d;
  font-size: 1.1rem;
  border-radius: 2px;
  margin: 0 auto;
  text-align: center;
  font-family: "Londrina Solid", cursive;
  @media(max-width: 400px) {
        margin-top: ${({ margin }) => (margin)};
    }
`;



