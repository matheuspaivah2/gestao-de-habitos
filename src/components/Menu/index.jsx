import {
  Container,
  StyledToolBar,
  Button,
  ContainerButtons,
  LogoMenu,
} from "./styles";
import User from "../../assests/user.png";
import Group from "../../assests/multiple-users-silhouette.png";
import Rocket from "../../assests/rocket.png";
import Logo from "../../assests/logo.png";
import Settings from "../../assests/settings.png";
const Menu = () => {
  return (
    <Container
      anchor="left"
      open="left"
      //   onClose={}
      // onOpen={toggleDrawer(anchor, true)}
    >
      <StyledToolBar>
        <LogoMenu>
          <img src={Logo} alt="" />
        </LogoMenu>
        <ContainerButtons>
          <Button backImg={User}></Button>
          <Button backImg={Group}></Button>
          <Button backImg={Rocket}></Button>
        </ContainerButtons>
        <Button backImg={Settings}></Button>
      </StyledToolBar>
    </Container>
  );
};

export default Menu;
