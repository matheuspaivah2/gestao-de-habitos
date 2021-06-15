import { Redirect } from "react-router";
import Menu from "../../components/Menu";

const Dashboard = () => {
  const token = localStorage.getItem("@GestãoDeHábitos:access") || false;
  if(!token){
    return <Redirect to="/login"/>
  }
  return (
    <>
      <Menu />
      {/* <h1>Teste Dashboard</h1> */}
    </>
  );
};

export default Dashboard;
