import { Container } from "./styles";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { makeStyles, Modal } from "@material-ui/core";
import axios from "axios";
import { toast } from "react-toastify";
import { useHabits } from "../../../providers/habits";

const ModalRemoveHabit = ({ openRemoveHabit, setOpenRemoveHabit, habit }) => {
  const handleClose = () => {
    setOpenRemoveHabit(false);
  };

  const { getHabits } = useHabits();

  const token = localStorage.getItem("@GestãoDeHábitos:access") || "";
  const handleDelete = () => {
    axios
      .delete(
        `https://kabit-api.herokuapp.com/habits/${habit.id}/`,

        {
          headers: {
            Authorization: `Bearer ${JSON.parse(token)}`,
          },
        }
      )
      .then((response) => {
        toast.success("Deleted");
        setOpenRemoveHabit(false);
        getHabits();
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
      open={openRemoveHabit}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openRemoveHabit}>
        <div className={classes.paper}>
          <Container>
            <div className="container__nameGoal">
              <strong>Remove Habit</strong>
              <div onClick={() => handleClose()}>X</div>
            </div>

            <div className="container__infoGoal">
              <button onClick={() => handleDelete()}>Delete</button>
            </div>
          </Container>
        </div>
      </Fade>
    </Modal>
  );
};

export default ModalRemoveHabit;
