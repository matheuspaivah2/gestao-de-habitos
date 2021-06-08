import styled, { keyframes } from "styled-components"

export const Container = styled.div`
    height:100vh;
    display:flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
`
export const Content = styled.div`
    width: 100%;
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
        margin:80px;
        width:340px;
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
`

