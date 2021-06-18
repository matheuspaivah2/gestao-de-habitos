import jwt_decode from 'jwt-decode';
import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import api from '../../services/api';

export const HabitsContext = createContext();

const HabitsProvider = ({children}) => {
  const [user_id, setUser_id] = useState("")
  const [token, setToken] = useState(null)
  const [habits, setHabits] = useState([]);

  const getToken = () => {
    const localToken = JSON.parse(localStorage.getItem('@GestãoDeHábitos:access'))
    // user id
    if (localToken !== null) {
      setToken(localToken)
      api.defaults.headers.authorization = `Bearer ${localToken}`;
      const decoded = jwt_decode(localToken)
      setUser_id(decoded.user_id)
    }
  };

  const getHabits = useCallback(() => {
    console.log("passou pelo cardList", token)
    const localToken = JSON.parse(localStorage.getItem('@GestãoDeHábitos:access'))
    api.defaults.headers.authorization = `Bearer ${localToken}`;
    api.get("/habits/personal/")
    .then(res => setHabits(res.data))
  }, [habits])

  useEffect (() => {
    getToken();
  });

  useEffect(() => {
    if (token) {
    getHabits();
    }
  }, [token])

  console.log("passou pelo provider",token)
  return (
    <HabitsContext.Provider value={{token: token, user_id, setToken, habits, getHabits}}>
      {children}
    </HabitsContext.Provider>
  );
};

export const useHabits = () => useContext(HabitsContext);
export default HabitsProvider;
