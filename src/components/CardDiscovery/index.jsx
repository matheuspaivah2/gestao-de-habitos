import axios from "axios";
import { useState } from "react";
import api from "../../services/api";
import { Container, Group } from "./styles";

const CardDiscovery = ({ group }) => {
    const { name, description, category, id } = group;
    const [toggle, setToggle] = useState(false);
    const [token] = useState(JSON.parse(localStorage.getItem("@GestãoDeHábitos:access")) || "");
    
    const joinGroup = () => {
        axios.post(`https://kabit-api.herokuapp.com/groups/${id}/subscribe/`, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            })
            .then((response) => console.log(response))
            .catch((err) => console.log(err))
    }

    return(
        <Container onClick={() => setToggle(!toggle)}>
            <h4>{name}</h4>
            <p className="description">{description}</p>
            <p><strong>{category}</strong></p>
            {toggle && <Group>
                
                <button onClick={joinGroup}>Join Group</button>
                <button onClick={() => setToggle(!toggle)}>Close</button>
            </Group>}
        </Container>
    );
}

export default CardDiscovery;