import { useContext, useEffect } from "react";
import { HabitsContext } from "../../../providers/habits";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Container } from "./styles";
import "react-circular-progressbar/dist/styles.css";
import Card from "../Card";
import CardDefault from "../CardDefault";

const CardList = () => {
  const { habits, getHabits } = useContext(HabitsContext);

  useEffect(() => {
    getHabits();
  }, []);

  return (
    <Container showThumbs={false} autoPlay={false} infiniteLoop>
      {habits[0] ? (
        habits.map((habit) => <Card habit={habit} key={habit.id} />)
      ) : (
        <CardDefault />
      )}
    </Container>
  );
};

export default CardList;
