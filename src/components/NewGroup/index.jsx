import { Container, Input } from "./styles";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { makeStyles, Modal } from "@material-ui/core";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useMyGroups } from "../../providers/MyGroups";

const NewGroup = ({ openNewGroup, setOpenNewGroup }) => {
  const handleClose = () => {
    setOpenNewGroup(false);
  };
  const { loadGroups } = useMyGroups();
  const schema = yup.object().shape({
    name: yup
      .string()
      .min(2, "Mínimo 2 caracteres")
      .required("Campo obrigatório"),
    description: yup
      .string()
      .min(6, "Mínimo seis caracters")
      .required("Campo obrigatório"),
    category: yup
      .string()
      .min(2, "Mínimo dois caracters")
      .required("Campo obrigatório"),
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
    axios
      .post("https://kabit-api.herokuapp.com/groups/", data, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        toast.success("Grupo cadastrado!");
        reset();
        loadGroups();
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
      width: "",
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
      open={openNewGroup}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openNewGroup}>
        <div className={classes.paper}>
          <Container>
            <div className="container__nameGoal">
              <strong>New Group</strong>
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
                label="Name"
                size="small"
                color="primary"
                {...register("name")}
                error={!!errors.name}
                helperText={errors.name?.message}
              />
              <Input
                required
                margin="normal"
                variant="outlined"
                label="Description"
                size="small"
                color="primary"
                {...register("description")}
                error={!!errors.description}
                helperText={errors.description?.message}
              />
              <Input
                required
                margin="normal"
                variant="outlined"
                label="Category"
                size="small"
                color="primary"
                {...register("category")}
                error={!!errors.category}
                helperText={errors.category?.message}
              />
              {/* <div className="container__buttons"> */}
              {/* <button onClick={() => handleClose()}>Back</button> */}
              <button type="submit" className="bt__submit">
                Register
              </button>
              {/* </div> */}
            </form>
          </Container>
        </div>
      </Fade>
    </Modal>
  );
};

export default NewGroup;
