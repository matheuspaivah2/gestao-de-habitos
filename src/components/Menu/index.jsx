import {
  Container,
  StyledToolBar,
  Button,
  ButtonLogout,
  ContainerButtons,
  LogoMenu,
  ContMenu,
} from "./styles";
import User from "../../assests/user.png";
import Group from "../../assests/multiple-users-silhouette.png";
import Rocket from "../../assests/rocket.png";
import Logo from "../../assests/logoBlue.png";
import Settings from "../../assests/settings.png";
import { useHistory } from "react-router-dom";

const Menu = () => {
  const history = useHistory();

  const handleClick = (route) => {
    history.push(route);
  };

  return (
    <Container anchor="left" open="left" onClose={{}} onOpen="left">
      <StyledToolBar>
        <ContMenu>
          <LogoMenu onClick={() => handleClick("/dashboard")}>
            <img src={Logo} alt="Logo" />
          </LogoMenu>
          <ContainerButtons>
            <Button
              backImg={User}
              onClick={() => handleClick("/dashboard")}
            ></Button>
            <Button
              backImg={Group}
              onClick={() => handleClick("/groups")}
            ></Button>
            <Button
              backImg={Rocket}
              onClick={() => handleClick("/discovery")}
            ></Button>
          </ContainerButtons>
          <Button
            backImg={Settings}
            onClick={() => handleClick("/myacount")}
          ></Button>
        </ContMenu>
      </StyledToolBar>
    </Container>
  );
};

export default Menu;
