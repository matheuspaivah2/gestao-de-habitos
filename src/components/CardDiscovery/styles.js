import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 45vw;
    height: 45vw;
    border: 2px solid #0a315d;
    border-radius: 10px;
    margin-bottom: 2.5vw;

    h4 {
        background-color: #0a315d;
        color: var(--white); 
        width: 100%;
        border-radius: 4px 4px 0 0;
        padding-top: 2px ;
        overflow: hidden;
        height: 7vw;
    }

    .description {
        padding: 2px 0;
        height: 28vw;
        display: flex;
        align-items: center;
        overflow: hidden;
        font-size: 0.9rem;
    }
`;

