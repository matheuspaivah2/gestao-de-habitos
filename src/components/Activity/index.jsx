import { Container } from "./styles";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { makeStyles, Modal } from "@material-ui/core";
import axios from "axios";
import { toast } from "react-toastify";

const Activity = ({
  activity,
  setModalActivity,
  modalActivity,
  setActivity,
}) => {
  const handleClose = () => {
    setModalActivity(false);
    setActivity([]);
  };

  const token = localStorage.getItem("@GestãoDeHábitos:access") || "";
  const handleDelete = () => {
    axios
      .delete(
        `https://kabit-api.herokuapp.com/activities/${activity.id}/`,

        {
          headers: {
            Authorization: `Bearer ${JSON.parse(token)}`,
          },
        }
      )
      .then((response) => {
        toast.success("Deleted");
        setModalActivity(false);
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

  // console.log(activity.realization_time.toLocaleDateString("pt-BR"));

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={modalActivity}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={modalActivity}>
        <div className={classes.paper}>
          <Container>
            <div className="container__nameGoal">
              <strong>Activity</strong>
              <div onClick={() => handleClose()}>X</div>
            </div>

            <div className="container__infoGoal">
              <h2>{activity.title}</h2>
              <p>{activity.realization_time}</p>
              <button onClick={() => handleDelete()}>Delete</button>
            </div>
          </Container>
        </div>
      </Fade>
    </Modal>
  );
};

export default Activity;
