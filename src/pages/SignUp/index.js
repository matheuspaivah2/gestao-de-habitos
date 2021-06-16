import{Link,Redirect,useHistory} from "react-router-dom"
import Button from "../../components/Button"
import Input from "../../components/Input"
import {Container,AnimationContainer} from "./styles"
import { FiVoicemail,FiUser, FiLock} from "react-icons/fi"
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import api from "../../services/api"
import{ toast } from 'react-toastify'

const SignUp = () => {
    const forSchema = yup.object().shape({
        username: yup.string().required("Username Obrigatótio"),
        email: yup.string().required("Email Obrigatótio").email("Email Inválido"),
        password: yup.string().required("Campo Obrigatório"),
      })
    const{register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(forSchema)
    });
    const history = useHistory()


    const handleSubmitFunction = (data) => {
        api.post("/users/", data)
        .then((response)=> {
            const {refresh} = response.data
            localStorage.setItem("@GestãoDeHábitos:refresh", JSON.stringify(refresh))
            return history.push('/login')
        })
        .catch((err) => toast.error('Erro ao criar User'))
    }
    const token = localStorage.getItem("@GestãoDeHábitos:access") || false;
    if(token){
      return <Redirect to="/dashboard"/>
    }

    return(
        <Container>
            <AnimationContainer>
              <form onSubmit={handleSubmit(handleSubmitFunction)}>
                    <h1>SignUp</h1>
                    <Input register={register} name="username" icon={FiUser} placeholder="Seu Username" error={errors.username?.message}/>
                    <Input register={register} name="email" icon={FiVoicemail} placeholder="Seu Email" error={errors.email?.message}/>
                    <Input register={register} name="password" icon={FiLock} placeholder="Sua Senha" type="password" error={errors.password?.message}/>
                    <Button type="submit" size={"99%"}>Entrar</Button>
                    <p>Já tem conta? Entre em sua <Link to="/login">Conta</Link></p>
              </form>
            </AnimationContainer>
        </Container>
    )
}
export default SignUp