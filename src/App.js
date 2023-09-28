import "./App.css";
import Form from "./components/Form/Form";
import ToogleMenu from "./components/toggleMenu/ToogleMenu";

function App() {
  return (
    <div className="App">
      <div className="toggle-menu">
        <ToogleMenu />
      </div>
      <div>
        <Form />
      </div>
    </div>
  );
}

export default App;
