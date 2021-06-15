import { useContext, useEffect, useState } from "react";
import { HabitsContext } from "../../../providers/habits";
import api from "../../../services/api";
import './style.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
import ModalUpdate from '../ModalUpdate'
import Container from "../../../pages/Habits/styles";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CardList = () => {
  const {token} = useContext(HabitsContext);
  const [habits, setHabits] = useState([]);
            
  const getHabits = () => {
    api.get("/habits/personal/")
    .then((res) =>
    setHabits(res.data)).catch((err) => console.log(err))
  }
  
  useEffect(() => {
    if (habits.length === 0) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      getHabits();
    }
  },[token, habits])

  return (
    <Container>
      <Carousel infiniteLoop showThumbs={false} width={300}>
        {habits.map(habit => <div className="carousel-container" key={habit.id}>
            <div>
              <div className="title-container"><h1>{habit.title}</h1></div>
              <ul className="list">
              <li>Category: {habit.category}</li>
              <li>Difficulty: {habit.difficulty}</li>
              <li>Frequency: {habit.frequency}</li>
              <div style={{ width: 130, height: 130, margin: "0 auto"}}>
                <CircularProgressbar value={habit.how_much_achieved} text={`${habit.how_much_achieved}%`} />
              </div>
              <ModalUpdate getHabits={getHabits} habitId={habit.id} how_much_achieved={habit.how_much_achieved}/>
              </ul>
            </div>
          </div>)}
      </Carousel>

    </Container>
  )
}

export default CardList;