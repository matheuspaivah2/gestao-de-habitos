import { Container, Input } from "./styles";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { makeStyles, Modal, TextField } from "@material-ui/core";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useMyGroups } from "../../providers/MyGroups";

const NewActivity = ({ groupId, openNewActivity, setOpenNewActivity }) => {
  const handleClose = () => {
    setOpenNewActivity(false);
  };

  const { loadGroups } = useMyGroups();

  const schema = yup.object().shape({
    title: yup
      .string()
      .min(2, "Mínimo 2 caracteres")
      .required("Campo obrigatório"),
    realization_time: yup.string().required("Campo obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const token = localStorage.getItem("@GestãoDeHábitos:access") || "";

  const handleForm = (data) => {
    data.group = groupId;
    axios
      .post("https://kabit-api.herokuapp.com/activities/", data, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        toast.success("Meta cadastrado!");
        reset();
        loadGroups();
        handleClose();
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
    date: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: "90%",
    },
  }));
  const classes = useStyles();

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={openNewActivity}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openNewActivity}>
        <div className={classes.paper}>
          <Container>
            <div className="container__nameGoal">
              <strong>New Activity</strong>
              <div onClick={() => handleClose()}>X</div>
            </div>

            <form
              className="container__inputs"
              onSubmit={handleSubmit(handleForm)}
            >
              <Input
                required
                margin="normal"
                variant="outlined"
                label="Title"
                size="small"
                color="primary"
                {...register("title")}
                error={!!errors.title}
                helperText={errors.title?.message}
              />
              <TextField
                id="datetime-local"
                variant="outlined"
                label="Next appointment"
                type="datetime-local"
                defaultValue="2021-05-24T10:30"
                className={classes.date}
                InputLabelProps={{
                  shrink: true,
                }}
                {...register("realization_time")}
                error={!!errors.realization_time}
                helperText={errors.realization_time?.message}
              />

              <button type="submit">Register</button>
            </form>
          </Container>
        </div>
      </Fade>
    </Modal>
  );
};

export default NewActivity;
