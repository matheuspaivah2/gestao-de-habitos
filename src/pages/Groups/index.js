import { Container, Button } from "./styles";

import CardGroupList from "../../components/CardGroupList";
import NewGroup from "../../components/NewGroup";
import { useState } from "react";

const Groups = () => {
  const [openNewGroup, setOpenNewGroup] = useState(false);
  const handleNewGroup = () => {
    setOpenNewGroup(true);
  };
  return (
    <Container>
      <Button onClick={handleNewGroup}>New Group</Button>
      <CardGroupList />
      <NewGroup openNewGroup={openNewGroup} setOpenNewGroup={setOpenNewGroup} />
    </Container>
  );
};

export default Groups;
