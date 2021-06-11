import api from "../../services/api"
import * as yup from 'yup'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, MenuItem, Menu } from '@material-ui/core'
import Container, {AnimationContainer, Box, InputMenu, BackgroundHeading} from "./styles";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Input from '../../components/Input'
import {toast} from 'react-toastify'
import { useState } from "react";

const Habits = () => {
  const [data, setData] = useState([])
  const [anchorEl, setAnchorEl] = useState(null)

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

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
              <Button aria-controls={'menu-list-grow'} aria-haspopup="tree" onClick={handleClick}>
                Criar Novo Habito 
              </Button>
              <ExpandMoreIcon onClick={handleClick}/>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}>
                <MenuItem style={{display: "flex", flexDirection: "column"}}>
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
                </MenuItem>
                
              </Menu>
              </InputMenu>
              </Box>
          
        </AnimationContainer>
      </Container>
    </>
    );
  };
  
  export default Habits;