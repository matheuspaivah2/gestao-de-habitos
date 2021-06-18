import { buildStyles } from "react-circular-progressbar";
import { IoSettingsOutline } from "react-icons/io5";
import { Checkbox } from "@material-ui/core";
import { Container, Progress } from "./styles";
import { useState } from "react";
import ModalRemoveHabit from "../ModalRemoveHabit";
import { toast } from "react-toastify";
import api from "../../../services/api";
import { useHabits } from "../../../providers/habits";
import { useEffect } from "react";

const Card = ({ habit }) => {
  const [openRemoveHabit, setOpenRemoveHabit] = useState(false);
  const [disabledCheck, setDisabledCheck] = useState(false);
  const [checked, setChecked] = useState(
    localStorage.getItem("dailyCheckHabit")
  );
  const [counter, setCounter] = useState(0);

  const { token } = useHabits();
  useEffect(() => {
    setChecked(localStorage.getItem("dailyCheckHabit"));
  }, []);

  const handleUpdateGroup = () => {
    setOpenRemoveHabit(true);
  };

  const handleCheck = (e) => {
    setCounter(counter + 14);
    if (counter > 83) {
      setCounter(100);
    }
    if (e.target.checked === true) {
      api.patch(`/habits/${habit.id}/`, {
        how_much_achieved: counter,
      });

      setDisabledCheck(true);
      setChecked(true);
      toast.success("Daily goal checked");
      localStorage.setItem("dailyCheckHabit", true);
      setTimeout(() => {
        habit.how_much_achieved += counter;
        localStorage.setItem("dailyCheckHabit", false);
        setDisabledCheck(false);
        setChecked(false);
      }, 2000);
    }
  };

  return (
    <Container key={habit.id}>
      <div className="container--NameGroup">
        <strong>{habit.title.toUpperCase()}</strong>
        <div className="remove_habit" onClick={() => handleUpdateGroup()}>
          <IoSettingsOutline
            style={{
              width: "20px",
              height: "30px",
              color: "white",
            }}
          />
        </div>
      </div>
      <ul className="list">
        <li>
          Category: <span>{habit.category}</span>
        </li>
        <li>
          Difficulty: <span>{habit.difficulty}</span>
        </li>
        <li>
          Frequency: <span>{habit.frequency}</span>
        </li>
        <div className="container__Progress">
          <Progress
            value={counter}
            text={`${counter}%`}
            styles={buildStyles({
              pathColor: "var(--orange)",
              textColor: "#0a315d",
              trailColor: "rgb(162 169 170)",
            })}
          />
        </div>
        <div className="check">
          <Checkbox
            checked={checked}
            disabled={disabledCheck}
            onChange={(e) => handleCheck(e)}
          />
          <span>Daily check</span>
        </div>

        <ModalRemoveHabit
          openRemoveHabit={openRemoveHabit}
          setOpenRemoveHabit={setOpenRemoveHabit}
          habit={habit}
        />
      </ul>
    </Container>
  );
};

export default Card;
