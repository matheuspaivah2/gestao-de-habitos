import Button from "../../components/Button"
import Input from "../../components/Input"
import {Container,AnimationContainer} from "./styles"
import {FiUser, FiVoicemail} from "react-icons/fi"
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import api from "../../services/api"
import{ toast } from 'react-toastify'
import jwt_decode from "jwt-decode"
import {useEffect,useState} from 'react'


const MyAcount = () => {
    const [usuario, setUsuario] = useState('');
    const forSchema = yup.object().shape({
        username: yup.string().required("Username Obrigatótio"),
        email: yup.string().required("email Obrigatótio")
      })
    const{register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(forSchema)
    });  
    
    const handleSubmitFunction = (data) => {
        const token = JSON.parse(localStorage.getItem("@GestãoDeHábitos:access"))
        var decode = jwt_decode(token)
        api.patch(`/users/${decode.user_id}/`, data, {headers:{Authorization: `Bearer ${token}`}})
        .then(()=> {toast.success(`Seu email agora é ${data.email}`)})
        .then(()=> {toast.success(`Seu usuário agora é ${data.username}`)})
        .then(()=>submitFunction())
        .catch((err) => toast.error('Erro ao editar usuário'))
    }
    const submitFunction = () => {
        const token = JSON.parse(localStorage.getItem("@GestãoDeHábitos:access"))
        var decode = jwt_decode(token)
        api.get(`/users/${decode.user_id}/`, {headers:{Authorization: `Bearer ${token}`}})
        .then((response)=> setUsuario(response.data))
        .then((response)=> console.log(usuario))

        .catch((err) => toast.error('Erro ao exibir usuário'))
    }
    useEffect(() => {submitFunction()}, [])


    return(
        <Container>
            <h1>Alterar Usuário</h1>
            <AnimationContainer>
              <form onSubmit={handleSubmit(handleSubmitFunction)}>
                    
                    <h3>Username atual: {usuario.username}</h3>
                    <h3>Email atual: {usuario.email}</h3>
                    <Input register={register} name="username" icon={FiUser} placeholder="Seu Novo Username" error={errors.username?.message}/>
                    <Input register={register} name="email" icon={FiVoicemail} placeholder="Seu Novo Email" error={errors.email?.message}/>
                    <Button type="submit" size={"90%"}>Alterar</Button>
              </form>
            </AnimationContainer>
        </Container>
    )
}
export default MyAcount