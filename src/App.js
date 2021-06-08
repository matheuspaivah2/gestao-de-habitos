import "./styles/App.css";
import GlobalStyle from "./styles/global";
import Routes from "./routes";

function App() {
  return (
    <div className="App">
      <Routes />
      <GlobalStyle />
      <header className="App-header"></header>
    </div>
  );
}

export default App;
