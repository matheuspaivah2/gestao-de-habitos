import{Link} from "react-router-dom"
const Dashboard = () => {
  return (
    <>
    

    <p><Link to="/myacount">MyAcount</Link></p>
    <p><Link to="/groups">Groups</Link></p>
    <p><Link to="/habits">Habits</Link></p>
    <p><Link to="/">Home</Link></p>
   </>
  );
};

export default Dashboard;
