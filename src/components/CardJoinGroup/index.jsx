import { Backdrop, Fade, makeStyles, Modal } from "@material-ui/core";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { useMyGroups } from "../../providers/MyGroups";
import { Group } from "./styles";

const CardJoinGroup = ({ group, toggle, setToggle }) => {
  const [token] = useState(
    JSON.parse(localStorage.getItem("@GestãoDeHábitos:access")) || ""
  );

  const { loadGroups } = useMyGroups();
  const joinGroup = () => {
    axios
      .post(
        `https://kabit-api.herokuapp.com/groups/${group.id}/subscribe/`,
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        toast.success("Joined Group!");
        loadGroups();
      })
      .catch((err) => toast.error("You are already registered in this group!"));
  };

  const useStyles = makeStyles((theme) => ({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      maxWidth: "1000px",
      margin: "0 auto",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      margin: "0 auto",
      display: "flex",
      width: "90%",
      borderRadius: "2px",
      padding: "0",
    },
  }));
  const classes = useStyles();

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={toggle}
      onClose={!toggle}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={toggle}>
        <div className={classes.paper}>
          <Group>
            <div className="container--NameGroup">
              <strong>{group.name}</strong>
              <div onClick={() => setToggle(!toggle)}>X</div>
            </div>
            <p>{group.description}</p>
            <span className="category">{group.category}</span>
            <div className="container__InfoGroup">
              <div className="goals box">
                <h3>Goals</h3>
                <ul className="list__goals list">
                  {group.goals &&
                    group.goals.map((goal) => (
                      <li key={goal.id}>{goal.title}</li>
                    ))}
                  {!group.goals[0] && <li key={1}>Empty List</li>}
                </ul>
              </div>
              <div className="activities box">
                <h3>Activities</h3>
                <ul className="list__activities list">
                  {group.activities &&
                    group.activities.map((activity) => (
                      <li key={group.id}>{activity.title}</li>
                    ))}
                  {!group.activities[0] && <li key={1}>Empty List</li>}
                </ul>
              </div>
            </div>
            <div className="buttons__Add">
              <button onClick={joinGroup}>Join Group</button>
            </div>
          </Group>
        </div>
      </Fade>
    </Modal>
  );
};

export default CardJoinGroup;
