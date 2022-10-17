import logo from "./logo.svg";
import "./App.css";
import AppRouter from "./config/router";
// import PersistentDrawerLeft from "./components/appbar";

function App() {
  return (
    <div className="App">
      {/* <PersistentDrawerLeft /> */}
      <AppRouter />
    </div>
  );
}

export default App;
