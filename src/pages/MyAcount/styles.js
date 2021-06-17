import styled, { keyframes } from "styled-components"

export const Container = styled.div`
    height:70vh;
    margin-top: 10vh;
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

`
export const AnimationContainer = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content:center;
    animation: ${appearFromUp} 1s;
    margin:20px;
    form{
        width:105%;
        text-align:center;
        form{
            margin: 0px;
        }
    }
    h1{
        margin-bottom:32px;
    }
    p{
        margin-left:4px;
        margin-top:2px;
        text-align: left;
        a{
            font-weight: bold;
            color: var(--orange);
        }
    }
    @media(min-width: 800px) {
        form{
            margin:40px;
            width:540px;
            text-align:center;
        }
    }
`
export const Button = styled.button`
  border: 2px #0a315d;
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
  margin-top: ${({ margin }) => (margin)};
`;


