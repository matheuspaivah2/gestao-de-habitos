import { Container } from "./styles";
import Button from "../../components/Button";
import BackgroundHome from "../../assests/back2.jpg";
import Logo from "../../assests/logoHabits.png";
import { useHistory } from "react-router";
const Home = () => {
  const history = useHistory();

  const handleLogin = () => {
    history.push("/login");
  };

  const handleRegister = () => {
    history.push("/singup");
  };
  return (
    <Container>
      <figure>
        <img src={BackgroundHome} alt=""></img>
      </figure>
      <img src={Logo} alt="logo" className="logo"></img>
      <div className="containerButtons">
        <Button white={true} handle={handleLogin}>
          LOG IN
        </Button>
        <Button handle={handleRegister}>REGISTER</Button>
      </div>
      <div className="bar"></div>
    </Container>
  );
};

export default Home;
