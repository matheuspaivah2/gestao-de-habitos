import { useState } from "react";
import CardJoinGroup from "../CardJoinGroup";
import { Container } from "./styles";

const CardDiscovery = ({ group }) => {
  const { name, description, category } = group;
  const [openModalJoin, setOpenModalJoin] = useState(false);

  const openModal = () => {
    setOpenModalJoin(!openModalJoin);
  };

  return (
    <Container onClick={() => openModal()}>
      <div className="name">
        <h4>{name}</h4>
      </div>
      <div className="description">
        <p>{description}</p>
      </div>
      <p>
        <strong>{category}</strong>
      </p>

      <CardJoinGroup
        openModalJoin={openModalJoin}
        setOpenModalJoin={setOpenModalJoin}
        group={group}
      />
    </Container>
  );
};

export default CardDiscovery;
