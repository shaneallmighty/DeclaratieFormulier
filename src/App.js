import { useState } from "react";
import FormInput from "./components/FormInput"
import './css/App.css'
import { computeHeadingLevel } from "@testing-library/react";

function App() {
  const [username, setUsername] = useState("")
  console.log(username)
  return (
    <div className="app">
      <form>
        <FormInput placeholder="Datum"/>
        <FormInput placeholder="Naam" setUsername={SetUsername}/>
        <FormInput placeholder="Bankrekeningnummer" />
        <FormInput placeholder="Totaal bedrag" />
      </form>
    </div>
  );
}

export default App;
