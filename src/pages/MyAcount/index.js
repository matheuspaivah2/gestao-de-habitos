import Button from "../../components/Button"
import Input from "../../components/Input"
import {Container,AnimationContainer} from "./styles"
import {FiUser} from "react-icons/fi"
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import api from "../../services/api"
import{ toast } from 'react-toastify'
import jwt_decode from "jwt-decode"


const MyAcount = () => {

    const forSchema = yup.object().shape({
        username: yup.string().required("Username Obrigatótio"),
      })
    const{register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(forSchema)
    });  

    const handleSubmitFunction = (data) => {
        const token = JSON.parse(localStorage.getItem("@GestãoDeHábitos:access"))
        var decode = jwt_decode(token)
        api.patch(`/users/${decode.user_id}/`, data, {headers:{Authorization: `Bearer ${token}`}})
        .then(()=> {toast.success('Sucesso ao editar usuário')})
        .then(()=> {toast.success(`Seu usuário agora é ${data.username}`)})
        .catch((err) => toast.error('Erro ao editar usuário'))
    }


    return(
        <Container>
            <AnimationContainer>
              <form onSubmit={handleSubmit(handleSubmitFunction)}>
                    <h1>Alterar Usuário</h1>
                    <Input register={register} name="username" icon={FiUser} placeholder="Seu Novo Username" error={errors.username?.message}/>
                    <Button type="submit" size={true}>Alterar</Button>
              </form>
            </AnimationContainer>
        </Container>
    )
}
export default MyAcount