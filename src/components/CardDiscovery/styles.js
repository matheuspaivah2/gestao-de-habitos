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
    margin-bottom: 2.5vw;

    h4 {
        background-color: var(--boldgreen);
        color: var(--white); 
        width: 35vw;
        border-radius: 0 0 80px 80px;
        padding-top: 2px ;
        overflow: hidden;
        height: 7vw;
    }

    .description {
        height: 28vw;
        display: flex;
        align-items: center;
        overflow: scroll;
    }
`;

export const Group = styled.div`

`;