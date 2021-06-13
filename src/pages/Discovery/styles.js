import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
        background-color: var(--boldgreen);
        color: var(--white); 
        width: 50vw;
        border-radius: 0 0 100px 100px;
        padding: 5px 0;
    }
    .input {
        width: 93vw;
        margin: 5vw 0;
        display: flex;
        justify-content: center;

        input {
            width: 40%;
            height: 10vw;
            border-radius: 5px 0 0 5px;
            border: 0;
            background-color: var(--black);
            color: var(--white); 
            font-size: 16px;
            text-align: center;
        }

        select {
            width: 30vw;
            height: 10vw;
            background-color: var(--boldgreen);
            color: var(--white); 
            border-radius: 0 5px 5px 0;
            border: 0;
            font-size: 14px;
        }

        button {
            margin: 0 0 0 1vw;
            width: 25%;
            height: 10vw;
            background-color: var(--black);
            color: var(--white); 
            border: 0;
            border-radius: 5px;
            font-size: 16px;
        }
    }

    span {
        width: 92vw;
        text-align: left;
        margin-bottom: 5vw;
        font-size: 18px;
    }

    .groups {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
`;