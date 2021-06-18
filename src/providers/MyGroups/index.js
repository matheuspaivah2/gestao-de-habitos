import axios from "axios";
import { createContext, useCallback, useContext, useEffect, useState } from "react";

export const MyGroupsContext = createContext([]);

export const MyGroupsProvider = ({ children }) => {
  const [myGroups, setMyGroups] = useState([]);

  const loadGroups = useCallback(() => {
    const token = localStorage.getItem("@GestãoDeHábitos:access") || "";
    console.log(JSON.parse(token));
    axios
      .get("https://kabit-api.herokuapp.com/groups/subscriptions/", {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((res) => {
        console.log(res);
        setMyGroups(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("@GestãoDeHábitos:access") || "";
    if (token) {
    loadGroups();
    }
  }, []);

  return (
    <MyGroupsContext.Provider value={{ myGroups, loadGroups }}>
      {children}
    </MyGroupsContext.Provider>
  );
};

export const useMyGroups = () => useContext(MyGroupsContext);
