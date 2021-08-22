import { Redirect } from "react-router";
import Typed from "react-typed";
import { motion } from "framer-motion";
import { DashboardComponent, Container, MoboHeader, Svgdiv } from "./styles";
import { ReactComponent as Dashboardsvg } from "../../undraw/dashboardsvg1.svg";

const Dashboard = () => {
  const token = localStorage.getItem("@GestãoDeHábitos:access") || false;

  if (!token) {
    return <Redirect to="/login" />;
  }

  const anima = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 1,
      },
    },
  };

  return (
    <motion.div variants={anima} initial="hidden" animate="show">
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <DashboardComponent>
          <Container>
            <Typed
              strings={[
                "Create your habits...",
                "Create your groups of activities",
                "Update them daily...",
                "and... Enjoy!",
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          </Container>
          <Svgdiv style={{ width: 700 }}>
            <Dashboardsvg />
          </Svgdiv>
          <MoboHeader>
            <Typed
              strings={[
                `Welcome, how's goin' ya habits?`,
                `let's get started!`,
                `open the menu clicking on the icon above me...`,
              ]}
              typeSpeed={40}
              backSpeed={50}
              startDelay={50}
            />
          </MoboHeader>
        </DashboardComponent>
      </div>
    </motion.div>
  );
};

export default Dashboard;
