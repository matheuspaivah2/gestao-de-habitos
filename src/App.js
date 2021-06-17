import "./styles/App.css";
import GlobalStyle from "./styles/global";
import Routes from "./routes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Menu2 from "./components/Menu2";
import { useHabits } from "./providers/habits";
function App() {
  const { token } = useHabits();

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
    </div>
  );
}

export default App;
