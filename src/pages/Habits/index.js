import { Modal, Backdrop } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Container, { Button } from "./styles";
import { motion } from "framer-motion";
import { useState } from "react";
import CardList from "../../components/Habits/CardList";
import NewHabit from "../../components/Habits/NewHabit";
import { useContext } from "react";
import { HabitsContext } from "../../providers/habits";
import { Redirect } from "react-router-dom";

const Habits = () => {
  const [open, setOpen] = useState(false);
  const { token } = useContext(HabitsContext);

  const useStyles = makeStyles((theme) => ({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      maxWidth: "500px",
      margin: "0 auto",
    },
  }));
  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (!token) {
    return <Redirect to="/login" />;
  }

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
    <>
      <motion.div variants={anima} initial="hidden" animate="show">
        <Container>
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
        </Container>

        <CardList />
      </motion.div>
    </>
  );
};

export default Habits;
