import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1000px;
    margin: 0 auto;
    
    .input {
        width: 90%;
        margin: 3vh 0;
        display: flex;
        justify-content: center;

        input {
            width: 43vw;
            height: 7vh;
            border-radius: 5px 0 0 5px;
            border: 0;
            background-color: var(--black);
            color: var(--white); 
            font-size: 2.8vh;
            text-align: center;
        }

        select {
            width: 24vw;
            height: 7vh;
            background-color: #0a315d;
            color: var(--white); 
            border-radius: 0 5px 5px 0;
            border: 0;
            font-size: 2.4vh;

            
        }

        button {
            margin: 0 0 0 1vw;
            width: 25%;
            height: 7vh;
            background-color: var(--black);
            color: var(--white); 
            border: 0;
            border-radius: 5px;
            font-size: 2.7vh;
            cursor: pointer;
        }
    }

    span {
        width: 90%;
        text-align: left;
        margin-bottom: 3vh;
        font-size: 3.4vh;
    }

    
`;
export const Groups = styled(Carousel)`
    width: 90%;

    .groups {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        height: 60vh;
        width: 100%;
    }

    .carousel-status {
        visibility: hidden;
        margin: 0;
        padding: 0;
    }
    
`;