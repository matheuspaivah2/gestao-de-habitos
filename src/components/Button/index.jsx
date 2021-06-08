import { Container } from "./styles";

const Button = ({ white, children }) => {
  return <Container white={white}>{children}</Container>;
};

export default Button;
