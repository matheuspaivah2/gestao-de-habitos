import Card from "../Card";
import { Container } from "./styles";

const CardDefault = () => {
  return (
    <Container>
      <div>
        <h2>
          You don't have any habits yet, <br/> click on 'new habit' above to create an habit.
        </h2>
      </div>
    </Container>
  );
};

export default CardDefault;