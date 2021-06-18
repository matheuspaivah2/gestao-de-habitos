import{Link,Redirect,useHistory} from "react-router-dom"
import Input from "../../components/Input"
import {Container,AnimationContainer, Button} from "./styles"
import { FiVoicemail,FiUser, FiLock} from "react-icons/fi"
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import api from "../../services/api"
import{ toast } from 'react-toastify'

const SignUp = () => {
    const forSchema = yup.object().shape({
        username: yup.string().required("Required Username"),
        email: yup.string().required("Required Email").email("Invalid email"),
        password: yup.string().matches(
            /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
            "Password must contain at least one uppercase letter, one lowercase letter, a number and a special character!"
          ).required("Required Password"),
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
                    <Input register={register} name="username" icon={FiUser} placeholder="Your Username" error={errors.username?.message}/>
                    <Input register={register} name="email" icon={FiVoicemail} placeholder="Your Email" error={errors.email?.message}/>
                    <Input register={register} name="password" icon={FiLock} placeholder="Your Password" type="password" error={errors.password?.message}/>
                    <Button type="submit" size={"100%"}>SignUp</Button>
                    <p>Already have an account? Login to your <Link to="/login">Account</Link></p>
              </form>
            </AnimationContainer>
        </Container>
    )
}
export default SignUp