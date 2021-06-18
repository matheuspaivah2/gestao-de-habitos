import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 45%;
  height: 40%;
  border: 2px solid #0a315d;
  border-radius: 2px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='79' height='79' viewBox='0 0 200 200'%3E%3Cpolygon fill='%23DCEFFA' points='100 0 0 100 100 100 100 200 200 100 200 0'/%3E%3C/svg%3E");
  background-color: #ffffff;
  cursor: pointer;

  .name {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #0a315d;
    color: var(--white);
    width: 100%;
    border-radius: 1px 1px 0 0;
    overflow: hidden;
    height: 22%;
    h4 {
      font-size: 3vh;
      text-align: center;
      height: 80%;
      overflow: hidden;
      width: 90%;
    }
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
