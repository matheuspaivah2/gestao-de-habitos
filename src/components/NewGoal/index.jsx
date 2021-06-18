import { Container, Input, MySelect } from "./styles";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { makeStyles, Modal } from "@material-ui/core";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useMyGroups } from "../../providers/MyGroups";

const NewGoal = ({ groupId, openNewGoal, setOpenNewGoal }) => {
  const handleClose = () => {
    setOpenNewGoal(false);
  };

  const { loadGroups } = useMyGroups();

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
        loadGroups();
        handleClose();
      })
      .catch((e) => {
        toast.error("Error!");
      });
    handleClose();
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
              <strong>New Goal</strong>
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

              <MySelect
                name="frequency"
                {...register("difficulty")}
                error={!!errors.difficulty}
                helperText={errors.difficulty?.message}
                required
              >
                <option value="" disabled selected>
                  Difficulty *
                </option>
                <option value="Easy">Easy</option>
                <option value="Meddium">Meddium</option>
                <option value="Hard">Hard</option>
              </MySelect>

              <button type="submit">Register</button>
            </form>
          </Container>
        </div>
      </Fade>
    </Modal>
  );
};

export default NewGoal;
