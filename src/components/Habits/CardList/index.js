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

  async function getHabits () {
    console.log("passou pelo cardList", token)
    api.defaults.headers.authorization = `Bearer ${token}`;
    const response = await api.get("/habits/personal/")
    const habits = await response.data
    setHabits(habits)
  }

  // getHabits();
  useEffect(() => {
    
    if (habits.length === 0) {
      getHabits();
    }
  });

  return (
    <Container showThumbs={false} autoPlay={false} infiniteLoop>
      {
        habits.map((habit) => <Card habit={habit} key={habit.id} />)}
    </Container>
  );
};

export default CardList;
