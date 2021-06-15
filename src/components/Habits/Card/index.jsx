import { buildStyles } from "react-circular-progressbar";
import ModalUpdate from "../ModalUpdate";

import { Container, Progress } from "./styles";

const Card = ({ habit }) => {
  return (
    <Container key={habit.id}>
      <div className="container--NameGroup">
        <strong>{habit.title.toUpperCase()}</strong>
      </div>
      <ul className="list">
        <li>Category: {habit.category}</li>
        <li>Difficulty: {habit.difficulty}</li>
        <li>Frequency: {habit.frequency}</li>
        <div className="container__Progress">
          <Progress
            value={habit.how_much_achieved}
            text={`${habit.how_much_achieved}%`}
            styles={buildStyles({
              pathColor: "black",
              textColor: "black",
            })}
          />
        </div>
        <ModalUpdate />
      </ul>
    </Container>
  );
};

export default Card;
