import { Modal, Backdrop } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Container, {
  Button,
  AnimationContainer,
  BackgroundHeading,
} from "./styles";

import { useState } from "react";
import CardList from "../../components/Habits/CardList";
import NewHabit from "../../components/Habits/NewHabit";

const Habits = () => {
  const [open, setOpen] = useState(false);

  const useStyles = makeStyles((theme) => ({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  }));
  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <BackgroundHeading>
        <strong>Habits</strong>
      </BackgroundHeading>
      <Container>
        <AnimationContainer>
          <Button onClick={handleOpen}>New habit</Button>

          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <NewHabit handleClose={handleClose} opne={open} />
          </Modal>
        </AnimationContainer>
      </Container>
      <CardList />
    </>
  );
};

export default Habits;
