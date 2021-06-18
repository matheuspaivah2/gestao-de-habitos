import { Container, Button } from "./styles";

import CardGroupList from "../../components/CardGroupList";
import NewGroup from "../../components/NewGroup";
import { useState } from "react";
import { useHabits } from "../../providers/habits";
import { Redirect } from "react-router-dom";

const Groups = () => {
  const [openNewGroup, setOpenNewGroup] = useState(false);
  const { token } = useHabits();
  console.log(token);

  if (!token) {
    return <Redirect to="/login" />;
  }
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
