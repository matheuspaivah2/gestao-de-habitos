import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export const Container = styled(Carousel)`
  margin-top: 0vh;
  height: 80vh;
  .carousel {
    height: 80vh;
  }
  @media (min-width: 768px) {
    .carousel.carousel-slider .control-arrow {
      background-color: #0a315dc4;
    }
  }
`;
