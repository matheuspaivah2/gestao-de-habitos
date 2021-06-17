import "./styles/App.css";
import GlobalStyle from "./styles/global";
import Routes from "./routes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Menu2 from "./components/Menu2";
function App() {
  return (
    <div className="App">
      <Menu2 />
      <Routes />
      <ToastContainer
        position="top-center"
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
