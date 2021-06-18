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
        <li>
          Category: <span>{habit.category}</span>
        </li>
        <li>
          Difficulty: <span>{habit.difficulty}</span>
        </li>
        <li>
          Frequency: <span>{habit.frequency}</span>
        </li>
        <div className="container__Progress">
          <Progress
            value={habit.how_much_achieved}
            text={`${habit.how_much_achieved}%`}
            styles={buildStyles({
              pathColor: "#0a315d",
              textColor: "#0a315d",
              trailColor: "#FFC862",
            })}
          />
        </div>
        <ModalUpdate />
      </ul>
    </Container>
  );
};

export default Card;
