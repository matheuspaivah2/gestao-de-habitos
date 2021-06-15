import jwt_decode from 'jwt-decode';
import { createContext, useEffect, useState } from 'react';
import api from '../../services/api';

export const HabitsContext = createContext();

const HabitsProvider = ({children}) => {
  const [user_id, setUser_id] = useState("")
  const [token, setToken] = useState("")

  const getToken = () => {
    setToken(JSON.parse(localStorage.getItem('@GestãoDeHábitos:access')))
    api.defaults.headers.authorization = `Bearer ${token}`;
    // user id
    const decoded = jwt_decode(JSON.parse(localStorage.getItem('@GestãoDeHábitos:access')))
    setUser_id(decoded.user_id)
  }

  useEffect (() => {
    getToken();
  })

  return (
    <HabitsContext.Provider value={{token, user_id}}>
      {children}
    </HabitsContext.Provider>
  )
}

export default HabitsProvider