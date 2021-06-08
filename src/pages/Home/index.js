import { Container } from "./styles";
import Button from "../../components/Button";
import BackgroundHome from "../../assests/backgroundHome.png";
const Home = () => {
  return (
    <Container>
      <figure>
        <img src={BackgroundHome} alt=""></img>
      </figure>
      <div className="containerButtons">
        <Button white={true}>LOG IN</Button>
        <Button>REGISTER</Button>
      </div>
      <div className="bar"></div>
    </Container>
  );
};

export default Home;
