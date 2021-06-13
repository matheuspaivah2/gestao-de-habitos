import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 45vw;
    height: 45vw;
    border: 2px solid var(--boldgreen);
    border-radius: 10px;
    margin-bottom: 2vw;

    h4 {
        background-color: var(--boldgreen);
        color: var(--white); 
        width: 35vw;
        border-radius: 0 0 100px 100px;
        padding: 5px 0;
    }
`;