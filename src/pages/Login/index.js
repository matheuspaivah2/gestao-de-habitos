import{Link,Redirect,useHistory} from "react-router-dom"
import Input from "../../components/Input"
import {Container,AnimationContainer, Button} from "./styles"
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
        username: yup.string().required("Username Required"),
        password: yup.string().required("Password Required"),
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
        .catch((err) => toast.error('Error when logging in, login and/or password invalid'))
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
                    <Input register={register} name="username" icon={FiUser} placeholder="Your Username" error={errors.username?.message}/>
                    <Input register={register} name="password" icon={FiLock} placeholder="Your Password" type="password" error={errors.password?.message}/>
                    <Button type="submit" size={"100%"}>Login</Button>     
              </form>
              <p>Don't have an account? Create a Habits <Link to="/signup">Account</Link></p>
            </AnimationContainer>
        </Container>
    )
}
export default Login