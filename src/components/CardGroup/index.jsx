import { Container } from "./styles";

const CardGroup = ({ group }) => {
    const { name, description, category } = group;
    return(
        <Container>
            <h4>{name}</h4>
            <p>{description}</p>
            <p><strong>{category}</strong></p>
        </Container>
    );
}

export default CardGroup;