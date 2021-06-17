import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
        margin-top: 3vh;
        background-color: #0a315d;
        color: var(--white); 
        width: 90vw;
        border-radius: 5px;
        text-align: center;
        padding: 5px 0;
        font-size: 3.5vh;
    }
    .input {
        width: 90vw;
        margin: 3vh 0;
        display: flex;
        justify-content: center;

        input {
            width: 43vw;
            height: 6vh;
            border-radius: 5px 0 0 5px;
            border: 0;
            background-color: var(--black);
            color: var(--white); 
            font-size: 2.7vh;
            text-align: center;
        }

        select {
            width: 24vw;
            height: 6vh;
            background-color: #0a315d;
            color: var(--white); 
            border-radius: 0 5px 5px 0;
            border: 0;
            font-size: 2.3vh;

            
        }

        button {
            margin: 0 0 0 1vw;
            width: 25%;
            height: 6vh;
            background-color: var(--black);
            color: var(--white); 
            border: 0;
            border-radius: 5px;
            font-size: 2.7vh;
        }
    }

    span {
        width: 90vw;
        text-align: left;
        margin-bottom: 3vh;
        font-size: 3.4vh;
    }

    
`;
export const Groups = styled(Carousel)`
    width: 90vw;

    .groups {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        height: 60vh;
        width: 90vw;
    }

    .carousel-status {
        visibility: hidden;
        margin: 0;
        padding: 0;
    }
    
`;