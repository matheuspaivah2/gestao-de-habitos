import { useContext, useEffect, useState } from "react";
import { HabitsContext } from "../../../providers/habits";
import api from "../../../services/api";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Container } from "./styles";
import "react-circular-progressbar/dist/styles.css";
import Card from "../Card";

const CardList = () => {
  const { token } = useContext(HabitsContext);
  const [habits, setHabits] = useState([]);

  const getHabits = () => {
    api
      .get("/habits/personal/")
      .then((res) => setHabits(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (habits.length === 0) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      getHabits();
    }
  }, [token, habits]);
  console.log(habits);
  return (
    <Container showThumbs={false} autoPlay={false} infiniteLoop>
      {habits[0] &&
        habits.map((habit) => <Card habit={habit} key={habit.id} />)}
    </Container>
  );
};

export default CardList;
