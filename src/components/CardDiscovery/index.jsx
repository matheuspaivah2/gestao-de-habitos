import { useState } from "react";
import CardJoinGroup from "../CardJoinGroup";
import { Container } from "./styles";

const CardDiscovery = ({ group }) => {
    const { name, description, category} = group;
    const [toggle, setToggle] = useState(false);
    
    return(
        <Container onClick={() => setToggle(!toggle)}>
                    <div className="name">
                        <h4>{name}</h4>
                    </div>
                    <div className="description">
                        <p>{description}</p>
                    </div>
                    <p><strong>{category}</strong></p>
                
            <CardJoinGroup toggle={toggle} setToggle={setToggle} group={group}/>
        </Container>
    );
}

export default CardDiscovery;