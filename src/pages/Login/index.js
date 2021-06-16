import{Link,Redirect,useHistory} from "react-router-dom"
import Button from "../../components/Button"
import Input from "../../components/Input"
import {Container,AnimationContainer} from "./styles"
import {FiUser, FiLock} from "react-icons/fi"
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import api from "../../services/api"
import{ toast } from 'react-toastify'
import { HabitsContext } from "../../providers/habits";
import { useContext } from 'react';

const Login = () => {
    const { setToken } = useContext(HabitsContext)

    const forSchema = yup.object().shape({
        username: yup.string().required("Username Obrigatótio"),
        password: yup.string().required("Campo Obrigatório"),
      })
    const{register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(forSchema)
    });
    const history = useHistory()


    const handleSubmitFunction = (data) => {
        api.post("/sessions/", data)
        .then((response)=> {
            const {access} = response.data
            localStorage.setItem("@GestãoDeHábitos:access", JSON.stringify(access))
            setToken(access)
            return history.push('/dashboard')
        })
        .catch((err) => toast.error('Erro ao logar, Login e/ou senha inválidos'))
    }
    const token = JSON.parse(localStorage.getItem("@GestãoDeHábitos:access")) || "";
    if(token){
      return <Redirect to="/dashboard"/>
    }

    return(
        <Container>
            <AnimationContainer>
              <form onSubmit={handleSubmit(handleSubmitFunction)}>
                    <h1>Login</h1>
                    <Input register={register} name="username" icon={FiUser} placeholder="Seu Username" error={errors.username?.message}/>
                    <Input register={register} name="password" icon={FiLock} placeholder="Sua Senha" type="password" error={errors.password?.message}/>
                    <Button type="submit" size={"99%"}>Entrar</Button>
                    <p>Não tem conta? Faça sua <Link to="/signup">Conta</Link></p>
              </form>
            </AnimationContainer>
        </Container>
    )
}
export default Login