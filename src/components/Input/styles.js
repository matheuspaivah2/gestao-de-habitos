import styled, { css } from "styled-components";

export const Container = styled.div`
  text-align: left;
  padding-top: 1.5vh;
  padding-bottom: 1.5vh;
  div {
    span {
      color: var(--red);
    }
  }
`;

export const InputContainer = styled.div`
  background: var(--white);
  border-radius: 1px;
  border: 2px solid var(--black);
  color: var(--gray);
  padding: 0.7rem;

  display: flex;
  transition: 0.5s;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: var(--red);
      svg {
        color: var(--red);
      }
    `}

  input {
    background: transparent;
    align-items: center;
    flex: 1;
    border: 0;
    color: var(--gray);
    &::placeholder {
      color: var(--gray);
    }

    @media (min-width: 768px) {
      font-size: 1.3rem;
    }
  }
  svg {
    margin-right: 10px;
  }
`;
