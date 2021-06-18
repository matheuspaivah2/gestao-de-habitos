import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export const Container = styled(Carousel)`
  margin-top: 3vh;
  height: 75vh;
  max-width: 1000px;
  margin: 0 auto;
  .carousel {
    height: 75vh;
  }
  @media (min-width: 768px) {
    .carousel.carousel-slider .control-arrow {
      background-color: #0a315dc4;
    }
  }
`;
