import { Container, Button } from "./styles";
import Menu from "../../components/Menu";
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
      {/* <Menu /> */}
      <div className="container__PageName">
        <strong>Groups</strong>
      </div>
      <Button onClick={handleNewGroup}>New Group</Button>
      <CardGroupList />
      <NewGroup openNewGroup={openNewGroup} setOpenNewGroup={setOpenNewGroup} />
    </Container>
  );
};

export default Groups;
