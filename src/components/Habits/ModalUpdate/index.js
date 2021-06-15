import {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {Button} from '@material-ui/core'
import { CircularProgressbar } from 'react-circular-progressbar';
import api from '../../../services/api';
import { HabitsContext } from '../../../providers/habits'
import { useContext } from 'react'

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 300,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
}));

const ModalUpdate = ({how_much_achieved, habitId, getHabits}) => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const {token} = useContext(HabitsContext);
  const handleDelete = () => {
    api.defaults.headers.authorization = `Bearer ${token}`;
    api.delete(`/habits/${habitId}/`)
    handleClose()
    getHabits()
  }

  const body = (
    <div style={modalStyle} className={classes.paper}>

      <div style={{ width: 130, height: 130, margin: "0 auto"}}>
        <CircularProgressbar value={how_much_achieved} text={`${how_much_achieved}%`} />
      </div>
        <Button>Check</Button>
        <Button onClick={handleDelete}>Delete</Button>
        <Button onClick={handleClose}>Cancel</Button>
    </div>
  );

  return (
    <div>
      <Button onClick={handleOpen}>Update</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description">
        {body}
      </Modal>
    </div>
  );
}

export default ModalUpdate