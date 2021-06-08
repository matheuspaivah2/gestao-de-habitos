import styled, {css} from "styled-components"

export const Container = styled.div`
    text-align: left;
    margin-top:15px;
    margin-bottom: 10px;
    div{
        span{
            color: var(--red)
        }
    }
`;

export const InputContainer = styled.div`
    background: var(--white);
    border-radius: 1px;
    border: 2px solid var(--black);
    color: var(--gray);
    padding: 0.7rem;
    width: 100%;
    display:flex;
    transition: 0.5s;
    
    
    ${(props) => 
        props.isErrored && 
        css`
            border-color: var(--red);
            svg{
                color: var(--red);
            }
    `}

    input{
        background: transparent;
        align-items: center;
        flex: 1;
        border: 0;
        color: var(--gray);
        &::placeholder{
            color: var(--gray)
        }
    }
    svg{
        margin-right: 13px;
    }
`;

