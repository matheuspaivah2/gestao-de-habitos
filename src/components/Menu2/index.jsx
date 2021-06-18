import React, { useEffect } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Logo from "../../assests/logoMenuLaranja.png";
import {
  Container,
  StyledToolBar,
  Button,
  Button2,
  ContainerButtons,
  LogoMenu,
  ContMenu,
  BtMenu,
  LogoDesk,
  ButtonMenu,
  ContainerDesk,
} from "./styles";
import { AppBar, Toolbar } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { IoRocketOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { useState } from "react";

const useStyles = makeStyles({
  list: {
    width: "25vw",
  },
  fullList: {
    width: "25vw",
  },
  toolbar: {
    backgroundColor: "#7a76b673",
    width: "100%",
    height: "5vh",
    margin: "0 auto",
    paddingBottom: "1vh",
    paddingTop: "1vh",
    paddingLeft: "2px",
  },
  appbar: {
    backgroundColor: "#7a76b673",
    boxSizing: "borderbox",
  },
});

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const history = useHistory();

  const handleClick = (route) => {
    history.push(route);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      window.addEventListener("resize", handleResize);

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
  }

  const size = useWindowSize();

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <StyledToolBar>
        <ContMenu>
          <LogoMenu onClick={() => handleClick("/habits")}>
            <img src={Logo} alt="Logo" />
          </LogoMenu>
          <ContainerButtons>
            <Button2
              //   backImg={User}
              onClick={() => handleClick("/dashboard")}
            >
              <FaRegUser
                style={{
                  width: "100%",
                  height: "100%",
                  color: "white",
                }}
              />
            </Button2>
            <Button2
              //   backImg={Group}
              onClick={() => handleClick("/groups")}
            >
              <FiUsers
                style={{
                  width: "100%",
                  height: "100%",
                  color: "white",
                }}
              />
            </Button2>
            <Button2
              //   backImg={Rocket}
              onClick={() => handleClick("/discovery")}
            >
              <IoRocketOutline
                style={{
                  width: "100%",
                  height: "100%",
                  color: "white",
                }}
              />
            </Button2>
          </ContainerButtons>
          <Button2
            // backImg={Settings}
            onClick={() => handleClick("/myacount")}
          >
            <IoSettingsOutline
              style={{
                width: "100%",
                height: "100%",
                color: "white",
              }}
            />
          </Button2>
        </ContMenu>
      </StyledToolBar>
    </div>
  );

  return (
    <aside>
      {size.width < 768 ? (
        <>
          {["left"].map((anchor) => (
            <React.Fragment key={anchor}>
              {/* <Button onClick={toggleDrawer(anchor, true)} styles={{}}></Button> */}
              <BtMenu onClick={toggleDrawer(anchor, true)}>
                <img src={Logo} alt="Logo" />
              </BtMenu>
              <SwipeableDrawer
                anchor={anchor}
                open={state[anchor]}
                x
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}
                onClick={toggleDrawer(anchor, true)}
              >
                {list(anchor)}
              </SwipeableDrawer>
            </React.Fragment>
          ))}
        </>
      ) : (
        <>
          <AppBar
            position="static"
            className={classes.appbar}
            fontWeight="fontWeightBold"
          >
            <Toolbar className={classes.toolbar}>
              <LogoDesk htmlFor="" onClick={() => handleClick("/dashboard")}>
                <img src={Logo} alt="Logo" />
              </LogoDesk>
              <ContainerDesk>
                <ButtonMenu
                  style={{ marginLeft: "auto" }}
                  onClick={() => handleClick("/habits")}
                >
                  <FaRegUser
                    style={{
                      width: "50px",
                      height: "30px",
                      color: "white",
                    }}
                  />
                  <span>Habits</span>
                </ButtonMenu>

                <ButtonMenu onClick={() => handleClick("/groups")}>
                  <FiUsers
                    style={{
                      width: "50px",
                      height: "30px",
                      color: "white",
                    }}
                  />
                  <span>Groups</span>
                </ButtonMenu>
                <ButtonMenu onClick={() => handleClick("/discovery")}>
                  <IoRocketOutline
                    style={{
                      width: "50px",
                      height: "30px",
                      color: "white",
                    }}
                  />
                  <span>Discovery</span>
                </ButtonMenu>
                <ButtonMenu
                  style={{ alignSelf: "flex-end" }}
                  onClick={() => handleClick("/myacount")}
                >
                  <IoSettingsOutline
                    style={{
                      width: "50px",
                      height: "30px",
                      color: "white",
                    }}
                  />
                  <span>Settings</span>
                </ButtonMenu>
              </ContainerDesk>
            </Toolbar>
          </AppBar>
        </>
      )}
    </aside>
  );
}
