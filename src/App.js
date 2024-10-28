import { useState } from "react";
import FormInput from "./components/FormInput";
import "./css/App.css";
import { computeHeadingLevel } from "@testing-library/react";

function App() {
  const [naam, setNaam] = useState("");
  const [bankrek, setBankrek] = useState("");
  const [datum, setDatum] = useState(
    new Date().toLocaleDateString("en-UK").replace(/\//g, "-")
  );

  console.log(naam, bankrek, datum);

  return (
    <div className="app">
      <form>
        <FormInput
          placeholder="Datum"
          setInput={setDatum}
          value={datum}
          type=""
        />
        <FormInput placeholder="Naam" setInput={setNaam} />
        <FormInput placeholder="Bankrekeningnummer" setInput={setBankrek} />
        <FormInput placeholder="Totaal bedrag" />
      </form>
    </div>
  );
}

export default App;
