import Input from "../../components/Input"
import {Container,AnimationContainer, Button} from "./styles"
import {FiUser, FiVoicemail, FiLock} from "react-icons/fi"
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import api from "../../services/api"
import{ toast } from 'react-toastify'
import jwt_decode from "jwt-decode"
import { useEffect,useState} from 'react'
import { Redirect, useHistory } from "react-router";

const MyAcount = () => {
    const history = useHistory()
    const [token, setToken] = useState(null)
    const [usuario, setUsuario] = useState('')
    const [decode, setDecode] = useState('')
    

    const getToken = () => {
        const localToken = JSON.parse(localStorage.getItem('@GestãoDeHábitos:access'))
        api.defaults.headers.authorization = `Bearer ${localToken}`;
        setToken(JSON.parse(localStorage.getItem('@GestãoDeHábitos:access')))
        if (token) {
            setDecode(jwt_decode(JSON.parse(localStorage.getItem('@GestãoDeHábitos:access'))))
        }
    }
    const forSchema = yup.object().shape({
        usernameAtual: yup.string().required("Required Username"),
        password: yup.string().required("Required"),
        username: yup.string().required("Required"),
      })
    const{register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(forSchema)
    });  
    const handleSubmitFunction = (data) => {
        var confirm = {username:`${data.usernameAtual}`, password:`${data.password}`}
        var submit = {username:`${data.username}`}
        api.post("/sessions/", confirm)
        .then(()=> {
            if(token){
                api.patch(`/users/${decode.user_id}/`, submit, {Authorization: `Bearer ${token}`})
                .then(()=> {toast.success(`Your Username Is ${data.username}`)})
                .then(()=>submitFunction())
                .catch((err) => toast.error('User Already Exists'))
            }else{return}
        })
        .catch((err) => toast.error('Password or User Incorrect'))  
    }
    const submitFunction = () => {
        if(token){
            var decode = jwt_decode(token)
            api.get(`/users/${decode.user_id}/`)
            .then((response)=> setUsuario(response.data))
            .catch((err) => console.log('Erro ao exibir usuário'))
        }   
    }
    useEffect(() => {
        getToken()
        submitFunction()
        }
        ,[token])

        const tok = JSON.parse(localStorage.getItem("@GestãoDeHábitos:access")) || "";
        if(!tok){
            return <Redirect to="/login"/>
        }


    return(
        <Container>
            <AnimationContainer>
                <form onSubmit={handleSubmit(handleSubmitFunction)}>
                    <h1>Change User</h1>
                    <p>Username: <a>{usuario.username}</a></p>
                    <p>Email: <a>{usuario.email}</a></p>
                    <form onSubmit={handleSubmit()}>
                        <Input register={register} name="usernameAtual" icon={FiUser} placeholder="Your Username" error={errors.username?.message}/>
                        <Input register={register} name="password" icon={FiLock} placeholder="Your Password" type="password" error={errors.password?.message}/>
                    </form>
                    <Input register={register} name="username" icon={FiUser} placeholder="Your New Username" error={errors.username?.message}/>
                    <Button type="submit" size={'100%'}>Change</Button>
                    <Button size={'40%'} margin={'40px'} onClick={()=>(localStorage.removeItem('@GestãoDeHábitos:access'), history.push("/login"))} >Logout</Button>
                </form>
            </AnimationContainer>
            
        </Container>
    )
}
export default MyAcount
