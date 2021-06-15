import { useState } from "react";
import api from "../../services/api";
import { Container, Group } from "./styles";

const CardDiscovery = ({ group }) => {
    const { name, description, category, id } = group;
    const [token, setToken] = useState()
    
    console.log(group)
    
    const joinGroup = () => {
        api
            .post(`groups/${id}/subscribe/`)
    }

    return(
        <Container onClick={() => console.log("clicou")}>
            <h4>{name}</h4>
            <p className="description">{description}</p>
            <p><strong>{category}</strong></p>
            <Group>
                <button onClick={joinGroup}>Join Group</button>
            </Group>
        </Container>
    );
}

export default CardDiscovery;