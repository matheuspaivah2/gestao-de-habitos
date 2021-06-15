import { Container } from "./styles";
import NewGoal from "../NewGoal";
import NewActivity from "../NewActivity";
import { useState } from "react";
import Goal from "../Goal";
import Activity from "../Activity";
const CardGroup = ({ group }) => {
  const [openNewGoal, setOpenNewGoal] = useState(false);
  const [openNewActivity, setOpenNewActivity] = useState(false);

  const [modalGoal, setModalGoal] = useState(false);
  const [goal, setGoal] = useState([]);

  const [modalActivity, setModalActivity] = useState(false);
  const [activity, setActivity] = useState([]);

  const handleGoal = (goal) => {
    setModalGoal(true);
    setGoal(goal);
  };

  const handleActivity = (act) => {
    setModalActivity(true);
    setActivity(act);
  };

  const handleNewGoal = () => {
    setOpenNewGoal(true);
  };
  const handleNewActivity = () => {
    setOpenNewActivity(true);
  };
  return (
    <Container>
      <div className="container--NameGroup">
        <strong>{group.name}</strong>
      </div>
      <p>{group.description}</p>
      <span className="category">{group.category}</span>
      <div className="container__InfoGroup">
        <div className="goals box">
          <h3>Goals</h3>
          <ul className="list__goals list">
            {group.goals &&
              group.goals.map((goal) => (
                <li key={goal.id} onClick={() => handleGoal(goal)}>
                  {goal.title}
                </li>
              ))}
            {!group.goals[0] && <li key={1}>Empty List</li>}
          </ul>
        </div>
        <div className="activities box">
          <h3>Activities</h3>
          <ul className="list__activities list">
            {group.activities &&
              group.activities.map((activity) => (
                <li key={group.id} onClick={() => handleActivity(activity)}>
                  {activity.title}
                </li>
              ))}
            {!group.activities[0] && <li key={1}>Empty List</li>}
          </ul>
        </div>
      </div>
      <div className="buttons__Add">
        <button onClick={() => handleNewGoal()}>Add</button>
        <button onClick={() => handleNewActivity()}>Add</button>
      </div>
      <NewGoal
        openNewGoal={openNewGoal}
        setOpenNewGoal={setOpenNewGoal}
        groupId={group.id}
      />
      <NewActivity
        groupId={group.id}
        openNewActivity={openNewActivity}
        setOpenNewActivity={setOpenNewActivity}
      />
      <Goal
        modalGoal={modalGoal}
        setModalGoal={setModalGoal}
        goal={goal}
        setGoal={setGoal}
      />
      <Activity
        modalActivity={modalActivity}
        setModalActivity={setModalActivity}
        activity={activity}
        setActivity={setActivity}
      />
    </Container>
  );
};

export default CardGroup;
