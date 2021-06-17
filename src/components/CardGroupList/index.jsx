import { Container } from "./styles";
import CardGroup from "../CardGroup";
import { useContext } from "react";
import { useEffect } from "react";
import { MyGroupsContext } from "../../providers/MyGroups";
import CardGroupDefault from "../CardGroupDefault";
const CardGroupList = () => {
  const { myGroups } = useContext(MyGroupsContext);

  useEffect(() => {
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
