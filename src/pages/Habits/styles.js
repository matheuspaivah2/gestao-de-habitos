import styled, { keyframes } from "styled-components"

const Container = styled.div`
  margin-top: 20px;
  display:flex;
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
    form{
        width:250px;
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
`;

export const Box = styled.div`
  border: 2px solid #000;
  border-radius: 5px;
  margin: 10px;
`;

export const InputMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--white);
  border-radius: 1px;
  border: 2px solid var(--black);
  color: var(--gray);
  padding: 0.7rem;
  width: 100%;
  Button {
    font-size: 12px;
    display: flex;
    
    text-align: center;
  }
  Menu {
    border: solid 2px black;
  }
`;

export const BackgroundHeading = styled.div`
  background-color: #3AACB6;
  border-radius: 0 0 30px 30px;
  width: 200px;
  margin: 0 auto;
  h1 {
    color: #fff;
  }
`;

export default Container;