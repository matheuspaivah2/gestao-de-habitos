import { Container } from "./styles";
import Button from "../../components/Button";
const Home = () => {
  return (
    <Container>
      <div className="containerButtons">
        <Button white={true}>LOG IN</Button>
        <Button>REGISTER</Button>
      </div>
    </Container>
  );
};

export default Home;
