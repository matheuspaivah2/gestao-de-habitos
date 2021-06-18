import { Redirect } from "react-router";
import Typed from "react-typed";
import { DashboardComponent, Container, MoboHeader, Svgdiv } from './styles'
import {ReactComponent as Dashboardsvg} from '../../undraw/dashboardsvg1.svg';
import {ReactComponent as Dashboardsvg2} from '../../undraw/dashboardsvg2.svg';

const Dashboard = () => {
  const token = localStorage.getItem("@GestãoDeHábitos:access") || false;


  if(!token){
    return <Redirect to="/login"/>
  }
  return (
    <div style={{display: "flex", flexWrap: "wrap"}}>
      <DashboardComponent>
      
        <Container>
          <Typed
            strings={[
              'Create your habits...',
              'Create your groups of activities',
              'Update them daily...',
              'and... Enjoy!']}
            typeSpeed={40}
            backSpeed={50}
            loop />
            
        </Container>
        <Svgdiv style={{width: 700}}>
        <Dashboardsvg/>
        </Svgdiv>
        <MoboHeader>
          <Typed
            strings={[
              `Welcome, how's goin' ya habits?`,
              `let's get started!`,
               `open the menu clicking on the icon above me...`
            ]}
            typeSpeed={40}
            backSpeed={50}
            startDelay={50} />
        </MoboHeader>
      </DashboardComponent>
      
  
    </div>
  );
};

export default Dashboard;
