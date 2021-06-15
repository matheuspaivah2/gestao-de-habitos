import CardDiscovery from "../../components/CardDiscovery";
import { Container, Groups } from "./styles";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { useGroups } from "../../providers/Groups";

const Discovery = () => {
    const {groups} = useGroups();
    const [recomGroups, setRecomGroups] = useState([]);
    const [listGroups, setListGroups]  = useState([]);
    const [input, setInput] = useState("");
    const [type, setType] = useState("category");
    const [results, setResults] = useState(false);

    useEffect(() => {
        setRecomGroups(groups.flat().sort(function(a, b) {
            return b.users_on_group.length  - a.users_on_group.length;
        }))
    }, [groups]);

    const getGroups = () => {
        api
            .get(`/groups/?${type}=${input}`)
            .then((response) => setListGroups(response.data.results));

        setResults(!results)
    };

    const handleResults = () => {
        setResults(!results);
        setInput("");
    };

    return(
        <Container>
            <h3>Discovery</h3>
            <div className="input">
                <input value={input} placeholder="Enter a group" onChange={(e) => setInput(e.target.value)}/>
                <select value={type} onChange={(event) => setType(event.target.value)}>
                    <option value={"category"}>Category</option>
                    <option value={"search"}>Name</option>
                </select>
                <button onClick={(results ? handleResults : getGroups)}>{results ? "Clear" : "Search"}</button>
            </div>
            <span><strong>{results ? "Results" : "Recommeded Groups" }</strong></span>
            <Groups showThumbs={false}>
                <div className="groups">
                    {(results ? listGroups : recomGroups.slice(0,4)).map((group, index) => (
                        <CardDiscovery key={index} group={group}/>
                    ))}
                </div>
                <div className="groups">
                    {(results ? listGroups : recomGroups.slice(4,8)).map((group, index) => (
                        <CardDiscovery key={index} group={group}/>
                    ))}
                </div>
                <div className="groups">
                    {(results ? listGroups : recomGroups.slice(8,12)).map((group, index) => (
                        <CardDiscovery key={index} group={group}/>
                    ))}
                </div>
            </Groups>
        </Container>
    );
}

export default Discovery;