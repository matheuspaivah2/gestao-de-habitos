import { Container } from "./styles";
import Button from "../../components/Button";
import BackgroundHome from "../../assests/back2.jpg";
import Logo from "../../assests/logoHabits.png";
import { Redirect,useHistory } from "react-router";
const Home = () => {
  const history = useHistory();
  const token = localStorage.getItem("@GestãoDeHábitos:access") || false;
  const handleLogin = () => {
    history.push("/login");
  };

  const handleRegister = () => {
    history.push("/signup");
  };
  if(token){
    return <Redirect to="/dashboard"/>
  }

  return (
    <Container>
      <figure>
        <img src={BackgroundHome} alt=""></img>
      </figure>
      <img src={Logo} alt="logo" className="logo"></img>
      <div className="containerButtons">
        <Button white={true} size={"40%"} handle={handleLogin}>
          LOG IN
        </Button>
        <Button size={"40%"} handle={handleRegister}>REGISTER</Button>
      </div>
      <div className="bar"></div>
    </Container>
  );
};

export default Home;
