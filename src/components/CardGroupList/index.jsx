import { Container } from "./styles";
import CardGroup from "../CardGroup";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
const CardGroupList = () => {
  const [groups, setGroups] = useState([]);

  const loadGroups = () => {
    const token = localStorage.getItem("@GestãoDeHábitos:access") || "";
    console.log(JSON.parse(token));
    axios
      .get("https://kabit-api.herokuapp.com/groups/subscriptions/", {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((res) => {
        console.log(res);
        setGroups(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loadGroups();
  }, []);

  return (
    <Container showThumbs={false} autoPlay={false}>
      {groups[0] &&
        groups.map((group) => <CardGroup key={group.id} group={group} s />)}
    </Container>
  );
};

export default CardGroupList;
