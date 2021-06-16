import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const GroupsContext = createContext();

export const GroupsProvider = ({ children }) => {
    const [groups, setGroups] = useState([]);
    const [next, setNext ] = useState("https://kabit-api.herokuapp.com/groups/");

    const getGroups = () => {
        axios
            .get(next)
            .then((response) => {
                setGroups([...groups, response.data.results])
                response.data.next && setNext(response.data.next);
            });
    }

    useEffect(() => {
        getGroups();
    }, [next]);

    return(
        <GroupsContext.Provider value={{groups}}>
            {children}
        </GroupsContext.Provider>
    );
}

export const useGroups = () => useContext(GroupsContext);