import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 24vh;
    height: 24vh;
    border: 2px solid #0a315d;
    border-radius: 5px;

    h4 {
        background-color: #0a315d;
        color: var(--white); 
        width: 100%;
        border-radius: 1px 1px 0 0;
        overflow: hidden;
        height: 7vw;
        font-size: 3vh;
    }

    p {
        font-size: 2.6vh;
    }

    .description {
        display: flex;
        align-items: center;
        height: 60%;
        width: 95%;

        p {
            text-align: center;
            width: 100%;
            max-height: 100%;
            overflow: scroll;
        }
    }
`;

