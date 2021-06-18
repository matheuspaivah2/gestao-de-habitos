import { Container, Progress } from "./styles";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { makeStyles, Modal, Checkbox } from "@material-ui/core";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { buildStyles } from "react-circular-progressbar";
import { useMyGroups } from "../../providers/MyGroups";
const Goal = ({ goal, setModalGoal, modalGoal, setGoal }) => {
  const [disabledCheck, setDisabledCheck] = useState(false);
  const [checked, setChecked] = useState(localStorage.getItem("dailyCheck"));
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setChecked(localStorage.getItem("dailyCheck"));
  }, []);

  const { loadGroups } = useMyGroups();

  const handleCheck = (e) => {
    setCounter(counter + 14);
    if (counter > 83) {
      setCounter(100);
    }
    if (e.target.checked === true) {
      api.patch(`/goals/${goal.id}/`, {
        how_much_achieved: counter,
      });
      setDisabledCheck(true);
      setChecked(true);
      toast.success("Daily goal checked");
      localStorage.setItem("dailyCheck", true);
      setTimeout(() => {
        localStorage.setItem("dailyCheck", false);
        setDisabledCheck(false);
        setChecked(false);
      }, 2000);
    }
  };

  const handleClose = () => {
    setModalGoal(false);
    setGoal([]);
  };

  const token = localStorage.getItem("@GestãoDeHábitos:access") || "";
  const handleDelete = () => {
    axios
      .delete(
        `https://kabit-api.herokuapp.com/goals/${goal.id}/`,

        {
          headers: {
            Authorization: `Bearer ${JSON.parse(token)}`,
          },
        }
      )
      .then((response) => {
        toast.success("Deleted");
        setModalGoal(false);
        loadGroups();
      })
      .catch((e) => {
        toast.error("Error!");
      });
  };
  const useStyles = makeStyles((theme) => ({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      maxWidth: "500px",
      margin: "0 auto",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      margin: "0 auto",
      display: "flex",
      width: "90%",
      borderRadius: "4px",
      padding: "0",
    },
  }));
  const classes = useStyles();

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={modalGoal}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={modalGoal}>
        <div className={classes.paper}>
          <Container>
            <div className="container__nameGoal">
              <strong>Goal</strong>
              <div onClick={() => handleClose()}>X</div>
            </div>

            <div className="container__infoGoal">
              <h2>{goal.title}</h2>
              <p>Difficulty: {goal.difficulty}</p>
              <div className="achieved">
                <Progress
                  value={counter}
                  text={`${counter}%`}
                  styles={buildStyles({
                    pathColor: "var(--orange)",
                    textColor: "#0a315d",
                    trailColor: "rgb(162 169 170)",
                  })}
                />
                <div className="check">
                  <Checkbox
                    checked={checked}
                    disabled={disabledCheck}
                    onChange={(e) => handleCheck(e)}
                  />
                  <span>Daily check</span>
                </div>
              </div>

              <button onClick={() => handleDelete()}>Delete</button>
            </div>
          </Container>
        </div>
      </Fade>
    </Modal>
  );
};

export default Goal;
