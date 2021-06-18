import { Container } from "./styles";
import CardGroup from "../CardGroup";
import { useContext } from "react";
import { useEffect } from "react";
import { useMyGroups } from "../../providers/MyGroups";
import CardGroupDefault from "../CardGroupDefault";
import { useState } from "react";
const CardGroupList = () => {
  const { myGroups, loadGroups } = useMyGroups();

  useEffect(() => {
    loadGroups();
    console.log(myGroups);
  }, []);

  return (
    <Container showThumbs={false} autoPlay={false}>
      {myGroups[0] ? (
        myGroups.map((group) => <CardGroup key={group.id} group={group} />)
      ) : (
        <CardGroupDefault />
      )}
    </Container>
  );
};

export default CardGroupList;
