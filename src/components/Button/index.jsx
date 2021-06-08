import { Container } from "./styles";

const Button = ({ white, children, handle }) => {
  return (
    <Container onClick={handle} white={white}>
      {children}
    </Container>
  );
};

export default Button;
