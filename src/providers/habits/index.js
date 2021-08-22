import jwt_decode from "jwt-decode";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import api from "../../services/api";

export const HabitsContext = createContext();

const HabitsProvider = ({ children }) => {
  const [user_id, setUser_id] = useState("");
  const [token, setToken] = useState(null);
  const [habits, setHabits] = useState([]);

  const getToken = () => {
    const localToken = JSON.parse(
      localStorage.getItem("@GestãoDeHábitos:access")
    );
    // user id
    if (localToken !== null) {
      setToken(localToken);
      api.defaults.headers.authorization = `Bearer ${localToken}`;
      const decoded = jwt_decode(localToken);
      setUser_id(decoded.user_id);
    } else {
      setToken(null);
    }
  };
  const getTokenAtt = () => {
    const localToken = JSON.parse(
      localStorage.getItem("@GestãoDeHábitos:access")
    );
    // user id
    if (localToken !== null) {
      setToken(localToken);
      api.defaults.headers.authorization = `Bearer ${localToken}`;
      const decoded = jwt_decode(localToken);
      setUser_id(decoded.user_id);
    } else {
      setToken(null);
    }
  };

  const getHabits = useCallback(() => {
    const localToken = JSON.parse(
      localStorage.getItem("@GestãoDeHábitos:access")
    );
    api.defaults.headers.authorization = `Bearer ${localToken}`;
    api.get("/habits/personal/").then((res) => setHabits(res.data));
    // eslint-disable-next-line
  }, [habits]);

  useEffect(() => {
    getToken();
  });

  useEffect(() => {
    if (token) {
      getHabits();
    }
    // eslint-disable-next-line
  }, [token]);

  return (
    <HabitsContext.Provider
      value={{
        token: token,
        user_id,
        setToken,
        habits,
        getHabits,
        getToken,
        getTokenAtt,
      }}
    >
      {children}
    </HabitsContext.Provider>
  );
};

export const useHabits = () => useContext(HabitsContext);
export default HabitsProvider;
