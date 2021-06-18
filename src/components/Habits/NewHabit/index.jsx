import api from "../../../services/api";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { makeStyles } from "@material-ui/core/styles";
import { Button, MySelect, Container, Input } from "./styles";
import { toast } from "react-toastify";
import { useContext } from "react";
import { HabitsContext, useHabits } from "../../../providers/habits";

const NewHabit = ({ handleClose }) => {
  const formSchema = yup.object().shape({
    title: yup.string().min(2, "Mininum 2 characters").required("Required"),
    category: yup.string().min(2, "Mininum 2 characters").required("Required"),
    difficulty: yup.string().ensure().required("Required"),
    frequency: yup.string().ensure().required("Required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const { token, user_id, getHabits } = useContext(HabitsContext);
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
        getHabits();
      })
      .catch((err) => toast.error("Error in creating the habit"));

    handleClose();
  };

  const useStyles = makeStyles((theme) => ({
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
    <div className={classes.paper}>
      <Container>
        <div className="header">
          <strong>New Habit</strong>
          <div onClick={() => handleClose()}>X</div>
        </div>
        <form onSubmit={handleSubmit(onSubmitFunc)}>
          <Input
            name="title"
            placeholder="Title"
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
            name="category"
            placeholder="Category"
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

          <MySelect name="difficulty" {...register("difficulty")}>
            <option value="" disabled selected>
              Difficulty *
            </option>
            <option value="easy">Easy</option>
            <option value="moderated">Moderated</option>
            <option value="hard">Hard</option>
          </MySelect>

          <MySelect name="frequency" {...register("frequency")}>
            <option value="" disabled selected>
              Frequency *
            </option>
            <option value="three in three hours">Three in three hours</option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
          </MySelect>

          <Button type="submit">Register</Button>
        </form>
      </Container>
    </div>
  );
};
export default NewHabit;
