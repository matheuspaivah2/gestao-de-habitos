import { useState } from "react";
import api from "../../services/api"
import * as yup from 'yup'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Grid, TextField, Button, Switch, FormControlLabel} from '@material-ui/core'
import Container, {AnimationContainer} from "./styles";

const Habits = () => {
  const [data, setData] = useState([])
  const [check, setCheck] = useState({
    checkedA: true,
  });

  const handleChange = (event) => {
    setCheck({ ...check, [event.target.name]: event.target.checked });
    console.log(check.checkedA)
  };

  const formSchema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    category: yup.string().required("Campo obrigatório"),
    difficulty: yup.string().required("Campo obrigatório"),
    frequency: yup.string().required("Campo obrigatório"),
    achieved: yup.boolean().required(" aaaCampo Obrigatório"),
    how_much_achieved: yup.number().required("Campo obrigatório"),
    user: yup.number().required()
  })

  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver (formSchema)
  })

  const onSubmitFunc = (data) => {
    setData(data)
    console.log(data)
    api.post("/habits/", data).then(res => console.log(res.data))
  }
    return (
      <Container>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmitFunc)}>
                  <TextField {...register("title")} label="Habito" variant="filled" required/>
                  {errors.title?.message}
                  <TextField {...register("category")} label="Categoria" variant="filled" required/>
                  {errors.category?.message}
                  <TextField {...register("difficulty")} label="Dificuldade" variant="filled" required/>
                  {errors.difficulty?.message}
                  <TextField {...register("frequency")} label="Frequencia" variant="filled" required/>
          
                  <FormControlLabel {...register("achieved")}  control={<Switch checked={check.checkedA} onChange={handleChange} name="checkedA" />}
                  label="Meta alcancada" value={check.checkedA}/>
                  {/* <TextField {...register("achieved")} label="meta alcancada" /> */}
                  {errors.frequency?.message}
                  {errors.achieved?.message}
                  <TextField {...register("how_much_achieved")} label="Porcentagem alcancada" variant="filled" required/>
                  <TextField {...register("user")} label="user" variant="filled" required/>
                {errors.address?.message}
                  <Button variant="outlined" type="submit">Registrar</Button>
          </form>
        </AnimationContainer>
      </Container>
    );
  };
  
  export default Habits;