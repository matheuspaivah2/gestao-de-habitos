import { Container } from "./styles";
import CardGroup from "../CardGroup";
import axios from "axios";
import { useState, useContext } from "react";
import { useEffect } from "react";
import { MyGroupsContext } from '../../providers/MyGroups'

const CardGroupList = () => {
  const { myGroups } = useContext(MyGroupsContext)
  
  useEffect(() => {
    console.log(myGroups)
  },[])
  return (
    <Container showThumbs={false} autoPlay={false}>
      {myGroups[0] &&
        myGroups.map((group) => <CardGroup key={group.id} group={group} />)}
    </Container>
  );
};

export default CardGroupList;
