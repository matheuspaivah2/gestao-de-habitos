import { Container, Button } from "./styles";
import { motion } from "framer-motion";
import CardGroupList from "../../components/CardGroupList";
import NewGroup from "../../components/NewGroup";
import { useState } from "react";
import { useHabits } from "../../providers/habits";
import { Redirect } from "react-router-dom";

const Groups = () => {
  const [openNewGroup, setOpenNewGroup] = useState(false);
  const { token } = useHabits();

  if (!token) {
    return <Redirect to="/login" />;
  }
  const handleNewGroup = () => {
    setOpenNewGroup(true);
  };

  const anima = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 1,
      },
    },
  };
  return (
    <motion.div variants={anima} initial="hidden" animate="show">
      <Container>
        <Button onClick={handleNewGroup}>New Group</Button>
        <CardGroupList />
        <NewGroup
          openNewGroup={openNewGroup}
          setOpenNewGroup={setOpenNewGroup}
        />
      </Container>
    </motion.div>
  );
};

export default Groups;
