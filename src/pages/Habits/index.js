import api from "../../services/api"
import * as yup from 'yup'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, MenuItem, Modal, Fade, Backdrop } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Container, {AnimationContainer, Box, InputMenu, BackgroundHeading} from "./styles";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Input from '../../components/Input'
import {toast} from 'react-toastify'
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Habits = () => {
  const [data, setData] = useState([])
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const formSchema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    category: yup.string().required("Campo obrigatório"),
    difficulty: yup.string().required("Campo obrigatório"),
    frequency: yup.string().required("Campo obrigatório"),
    achieved: yup.boolean().required("Campo Obrigatório"),
    how_much_achieved: yup.number().required("Campo obrigatório"),
    user: yup.number().required()
  })

  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver (formSchema)
  })

  const onSubmitFunc = (data) => {
    setData(data)
    console.log(data)
    api.post("/habits/", data).then((res) => { 
      console.log(res.data)
      const {access} = res.data
      console.log(access)
      // let decoded = jwt_decode(access);
      window.localStorage.clear()
      window.localStorage.getItem()
    })
    .catch((err) => toast.error('Erro ao criar habito'))
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
    return (
    <>
    <BackgroundHeading>
      <h1>habits</h1>
    </BackgroundHeading>
      <Container>
        <AnimationContainer>
            <Box>
              <InputMenu>
              <Button onClick={handleOpen}>
                Criar Novo Habito 
              </Button>
              <ExpandMoreIcon onClick={handleOpen}/>
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,}}>
                  <Fade in={open}>
                    <form onSubmit={handleSubmit(onSubmitFunc)}>
                    <Input name="title" placeholder="Hábito" required register={register} error={errors.title?.message}/>
                    <Input name="category" placeholder="Categoria" required register={register} error={errors.title?.message}/>
                    <Input name="difficulty" placeholder="Dificuldade" required register={register} error={errors.title?.message}/>
                    <Input name="frequency" placeholder="Frequencia" required register={register} error={errors.title?.message}/>
                    <Input name="achieved" placeholder="Frequencia" required register={register} error={errors.title?.message}/>
                    <Input name="how_much_achieved" placeholder="Frequencia" required register={register} error={errors.title?.message}/>
                    <Input name="user" placeholder="Frequencia" required register={register} error={errors.title?.message}/>
                    <MenuItem style={{display: "flex", justifyContent: "center"}}>
                    <Button type="submit">Ok</Button>
                    <Button onClick={handleClose}>Cancelar</Button>
                    </MenuItem>
                  </form>
                </Fade>  
              </Modal>
            </InputMenu>
          </Box>
        </AnimationContainer>
      </Container>
    </>
    );
  };
  
  export default Habits;