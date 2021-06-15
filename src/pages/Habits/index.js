import api from "../../services/api";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { MenuItem, Modal, Fade, Backdrop } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Container, {
  Button,
  AnimationContainer,
  Box,
  InputMenu,
  BackgroundHeading,
  MySelect,
} from "./styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Input from "../../components/Input";
import { toast } from "react-toastify";
import { useContext, useState } from "react";
import CardList from "../../components/Habits/CardList";
import { HabitsContext } from "../../providers/habits";

const getModalStyle = () => {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
};

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 300,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const Habits = () => {
  const [open, setOpen] = useState(false);
  const [modalStyle] = useState(getModalStyle);
  const classes = useStyles();

  const formSchema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    category: yup.string().required("Campo obrigatório"),
    difficulty: yup.string().ensure().required("Campo obrigatorio"),
    frequency: yup.string().ensure().required("Campo obrigatorio"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const { token, user_id } = useContext(HabitsContext);
  const onSubmitFunc = (data_user) => {
    const data = {
      category: data_user.category,
      title: data_user.title,
      user: user_id,
      difficulty: data_user.difficulty,
      frequency: data_user.frequency,
      how_much_achieved: 0,
    };
    api.defaults.headers.authorization = `Bearer ${token}`;
    api
      .post("/habits/", data)
      .then((res) => {
        toast.success("Habit created");
      })
      .catch((err) => toast.error("Error in creating the habit"));
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Fade in={open}>
        <form onSubmit={handleSubmit(onSubmitFunc)}>
          <Input
            name="title"
            placeholder="Title"
            required
            register={register}
            error={errors.title?.message}
          />
          <Input
            name="category"
            placeholder="Category"
            required
            register={register}
            error={errors.title?.message}
          />
          <label>Difficulty</label>
          <MySelect name="difficulty" {...register("difficulty")}>
            <option value=""></option>
            <option value="very easy">very easy</option>
            <option value="easy">easy</option>
            <option value="moderated">moderated</option>
            <option value="hard">hard</option>
            <option value="very hard">very hard</option>
          </MySelect>
          <label>Frequency</label>
          <MySelect name="frequency" {...register("frequency")}>
            <option value=""></option>
            <option value="three in three hours">three in three hours</option>
            <option value="daily">daily</option>
            <option value="weekly">weekly</option>
          </MySelect>
          <MenuItem style={{ display: "flex", justifyContent: "center" }}>
            <Button type="submit">Ok</Button>
            <Button onClick={handleClose}>Cancel</Button>
          </MenuItem>
        </form>
      </Fade>
    </div>
  );

  return (
    <>
      <BackgroundHeading>
        <strong>Habits</strong>
      </BackgroundHeading>
      <Container>
        <AnimationContainer>
          {/* <Box> */}
          {/* <InputMenu> */}
          <Button onClick={handleOpen}>New habit</Button>
          {/* <ExpandMoreIcon onClick={handleOpen} /> */}
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            {body}
          </Modal>
          {/* </InputMenu> */}
          {/* </Box> */}
        </AnimationContainer>
      </Container>
      <CardList />
    </>
  );
};

export default Habits;
