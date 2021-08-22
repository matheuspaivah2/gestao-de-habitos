import CardDiscovery from "../../components/CardDiscovery";
import { Container, Groups } from "./styles";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { useGroups } from "../../providers/Groups";
import { Redirect } from "react-router-dom";
import { motion } from "framer-motion";

const Discovery = () => {
  const { groups } = useGroups();
  const [recomGroups, setRecomGroups] = useState([]);
  const [listGroups, setListGroups] = useState([]);
  const [input, setInput] = useState("");
  const [typeSearch, setTypeSearch] = useState("category");
  const [results, setResults] = useState(false);
  const [token] = useState(
    localStorage.getItem("@GestãoDeHábitos:access") || false
  );

  useEffect(() => {
    setRecomGroups(
      groups.flat().sort(function (a, b) {
        return b.users_on_group.length - a.users_on_group.length;
      })
    );
  }, [groups]);

  const getGroups = () => {
    api
      .get(`/groups/?${typeSearch}=${input}`)
      .then((response) => setListGroups(response.data.results));

    setResults(!results);
  };

  const handleResults = () => {
    setResults(!results);
    setInput("");
  };

  if (!token) {
    return <Redirect to="/login" />;
  }

  const anima = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 1,
      },
    },
  };

  return (
    <motion.div variants={anima} initial="hidden" animate="show">
      <Container>
        <div className="input">
          <input
            value={input}
            placeholder={
              typeSearch === "search" ? "Enter a group" : "Enter a category"
            }
            onChange={(e) => setInput(e.target.value)}
          />
          <select
            value={typeSearch}
            onChange={(event) => setTypeSearch(event.target.value)}
          >
            <option value={"category"}>Category</option>
            <option value={"search"}>Name</option>
          </select>
          <button onClick={results ? handleResults : getGroups}>
            {results ? "Clear" : "Search"}
          </button>
        </div>
        <span>
          <strong>{results ? "Results" : "Recommeded Groups"}</strong>
        </span>
        <Groups showThumbs={false}>
          {results ? (
            <div className="groups">
              {listGroups.slice(0, 4).map((group) => (
                <CardDiscovery key={group.id} group={group} />
              ))}
            </div>
          ) : (
            <div className="groups">
              {recomGroups.slice(0, 4).map((group) => (
                <CardDiscovery key={group.id} group={group} />
              ))}
            </div>
          )}
          {results ? (
            <div className="groups">
              {listGroups.slice(4, 8).map((group) => (
                <CardDiscovery key={group.id} group={group} />
              ))}
            </div>
          ) : (
            <div className="groups">
              {recomGroups.slice(4, 8).map((group) => (
                <CardDiscovery key={group.id} group={group} />
              ))}
            </div>
          )}
          {results ? (
            listGroups.length > 8 ? (
              <div className="groups">
                {listGroups.slice(8, 12).map((group) => (
                  <CardDiscovery key={group.id} group={group} />
                ))}
              </div>
            ) : undefined
          ) : (
            <div className="groups">
              {recomGroups.slice(8, 12).map((group) => (
                <CardDiscovery key={group.id} group={group} />
              ))}
            </div>
          )}
        </Groups>
      </Container>
    </motion.div>
  );
};

export default Discovery;
