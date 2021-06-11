import api from "../../services/api"
import * as yup from 'yup'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, MenuItem, Modal, Fade, Backdrop, InputLabel } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Container, {AnimationContainer, Box, InputMenu, BackgroundHeading} from "./styles";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Input from '../../components/Input'
import {toast} from 'react-toastify'
import { useEffect, useState } from "react";
import { Select } from '@material-ui/core'
import jwt_decode from 'jwt-decode'
import CardList from "../../components/CardList";

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
  const [open, setOpen] = useState(false);
  const [difficulty, setDifficulty] = useState("")
  const [frequency, setFrequency] = useState("")
  const [category, setCategory] = useState("")
  const [title, setTitle] = useState("")
  const [user, setUser] = useState(0)
  const classes = useStyles();

  const [data, setData] = useState({
    
    achieved: false,
    how_much_achieved: 0,
    user: user,
  })


  // envolver em useEffect
  
  

    const handleDifficulty = (event) => {
      setDifficulty(event.target.value);
    };
  
    const handleFrequency = (event) => {
      setFrequency(event.target.value)
    };
  
    const handleCategoryForm = (e) => {
      setCategory(e.target.value)
    }
  
    const handleTitleForm = (e) => {
      setTitle(e.target.value)
    }


  const formSchema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    category: yup.string().required("Campo obrigatório"),
  })

  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver (formSchema)
  })

  const onSubmitFunc = (data_user) => {
    setData({...data, category: category, title: title, user: user, difficulty: difficulty,
      frequency: frequency})
    console.log(data)
    const token = JSON.parse(localStorage.getItem('@GestãoDeHábitos:access'))
    const decoded = jwt_decode(token);
    setUser(decoded.user_id)
    api.defaults.headers.authorization = `Bearer ${token}`;
    api.post("/habits/", data).then((res) => { 
      console.log(res.data)
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
                    <Input name="title" placeholder="Hábito" required register={register} error={errors.title?.message} onChange={(e) => handleCategoryForm(e) }/>
                    <Input name="category" placeholder="Categoria" required register={register} error={errors.title?.message} onChange={(e) => handleTitleForm(e) }/>
                  
                    <InputLabel>Dificuldade</InputLabel>
                    <Select
                      label="Difficulty"
                      value={difficulty}
                      onChange={(e) => handleDifficulty(e)}
                      fullWidth>
                      <MenuItem value="muito facil">Muito Fácil</MenuItem>
                      <MenuItem value="facil">Fácil</MenuItem>
                      <MenuItem value="moderado">Moderado</MenuItem>
                      <MenuItem value="dificil">Difícil</MenuItem>
                      <MenuItem value="muito dificil">Muito Difícil</MenuItem>
                    </Select>
                    
                    <InputLabel>Frequencia</InputLabel>
                    <Select
                      labelId="Frequency"
                      value={frequency}
                      onChange={handleFrequency}
                      fullWidth>
                      <MenuItem value="Diariamente">Diariamente</MenuItem>
                      <MenuItem value="Semanalmente">Semanalmente</MenuItem>
                      <MenuItem value="De 1 em 1 horas">De 1 em 1 horas</MenuItem>
                      <MenuItem value="De 3 em 3 horas">De 3 em 3 horas</MenuItem>
                      <MenuItem value="personalizado">personalizado</MenuItem>
                    </Select>
                    
                    <MenuItem style={{display: "flex", justifyContent: "center"}}>
                    <Button type="submit">Ok</Button>
                    <Button onClick={handleClose}>Cancelar</Button>
                    </MenuItem>
                  </form>

                </Fade>  
              </Modal>
            </InputMenu>
          </Box>
            <CardList/>
        </AnimationContainer>
      </Container>
    </>
    );
  };
  
  export default Habits;