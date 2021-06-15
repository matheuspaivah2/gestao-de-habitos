import styled from "styled-components";
import { Toolbar, withStyles, SwipeableDrawer } from "@material-ui/core";
import BackgroundMenu from "../../assests/backgroundMenu.jpg";

export const StyledToolBar = withStyles({
  root: {
    backgroundColor: "white",
    backgroundImage: `url(${BackgroundMenu})`,

    width: "25vw",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "0",
  },
})(Toolbar);

export const Container = withStyles({
  root: {},
})(SwipeableDrawer);

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 50%;
  align-items: center;
  justify-content: space-evenly;
`;
export const Button = styled.div`
  cursor: pointer;
  width: 98%;
  height: 8vh;
  background-image: url(${({ backImg }) => backImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin-bottom: 20px;
`;

export const LogoMenu = styled.figure`
  cursor: pointer;
  width: 100%;
  height: 10%;
  background-size: contain;
  background-repeat: no-repeat;
  margin-top: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
