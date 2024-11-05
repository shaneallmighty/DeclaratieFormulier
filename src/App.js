import Declaratieformulier from "./forms/DeclaratieForm";
import "./css/App.css";

function App() {
  return (
    <div className="app">
      <div className="card">
      { Declaratieformulier() }
      </div>
    </div>
  );
}

export default App;
