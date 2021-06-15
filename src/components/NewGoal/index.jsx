import { Container, Input, HiddenInput } from "./styles";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { makeStyles, Modal } from "@material-ui/core";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import axios from "axios";
import { useForm } from "react-hook-form";

const NewGoal = ({ groupId, openNewGoal, setOpenNewGoal }) => {
  const handleClose = () => {
    setOpenNewGoal(false);
  };
  console.log(groupId);
  const schema = yup.object().shape({
    title: yup
      .string()
      .min(2, "Mínimo 2 caracteres")
      .required("Campo obrigatório"),
    difficulty: yup.string().required("Campo obrigatório"),
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
    console.log(data);
    data.how_much_achieved = 0;
    data.group = groupId;
    console.log(data);
    axios
      .post("https://kabit-api.herokuapp.com/goals/", data, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        toast.success("Meta cadastrado!");
        reset();
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
      width: "",
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
      open={openNewGoal}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openNewGoal}>
        <div className={classes.paper}>
          <Container>
            <div className="container__nameGoal">
              <strong>{"New Goal"}</strong>
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
              <Input
                required
                margin="normal"
                variant="outlined"
                label="Difficulty"
                size="small"
                color="primary"
                {...register("difficulty")}
                error={!!errors.difficulty}
                helperText={errors.difficulty?.message}
              />

              <div className="container__buttons">
                <button onClick={() => handleClose()}>Back</button>
                <button type="submit">Register</button>
              </div>
            </form>
          </Container>
        </div>
      </Fade>
    </Modal>
  );
};

export default NewGoal;
