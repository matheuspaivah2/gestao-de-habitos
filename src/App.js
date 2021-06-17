import "./styles/App.css";
import GlobalStyle from "./styles/global";
import Routes from "./routes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Menu2 from "./components/Menu2";
import { useEffect, useState } from "react";
import { useHabits } from "./providers/habits";
function App() {
  // const [token, setToken] = useState(
  //   localStorage.getItem("@GestãoDeHábitos:access") || ""
  // );
  const { token } = useHabits();

  // useEffect(() => {
  //   setToken(localStorage.getItem("@GestãoDeHábitos:access") || "");

  //   console.log("tentou");
  // }, [token]);
  return (
    <div className="App">
      {token && <Menu2 />}

      <Routes />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <GlobalStyle />

      {/* <header className="App-header"></header> */}
    </div>
  );
}

export default App;
