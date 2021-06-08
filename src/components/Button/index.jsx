import { Container } from "./styles";

const Button = ({ white, children, handle, size }) => {
  return (
    <Container onClick={handle} size={size} white={white}>
      {children}
    </Container>
  );
};

export default Button;
