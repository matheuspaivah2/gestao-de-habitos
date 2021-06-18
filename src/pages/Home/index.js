import { Container, ButtonHome } from "./styles";
import Logo from "../../assests/logoLaranja.png";
import { Redirect, useHistory } from "react-router";

const Home = () => {
  const history = useHistory();
  const token = localStorage.getItem("@GestãoDeHábitos:access") || false;
  const handleLogin = () => {
    history.push("/login");
  };

  const handleRegister = () => {
    history.push("/signup");
  };

  if (token) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <Container>
      <div className="container__Logo">
        <img src={Logo} alt="logo" className="logo"></img>
      </div>

      <div className="containerButtons">
        <ButtonHome white={true} onClick={handleLogin}>
          LOG IN
        </ButtonHome>
        <ButtonHome white={false} onClick={handleRegister}>
          REGISTER
        </ButtonHome>
      </div>
      <div className="bar"></div>
    </Container>
  );
};

export default Home;
