import jwt_decode from "jwt-decode";
import { createContext, useEffect, useState } from "react";
import api from "../../services/api";

export const HabitsContext = createContext();

const HabitsProvider = ({ children }) => {
  const [user_id, setUser_id] = useState("");
  const [token, setToken] = useState(null);

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

  useEffect(() => {
    getToken();
  });

  console.log("passou pelo provider",token)
  return (
    <HabitsContext.Provider value={{token: token, user_id, setToken}}>
      {children}
    </HabitsContext.Provider>
  );
};

export default HabitsProvider;
