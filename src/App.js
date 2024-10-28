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
  const [totaal, setTotaal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(naam, bankrek, datum, totaal);
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <FormInput
          placeholder="Datum"
          setInput={setDatum}
          value={datum}
          type=""
        />
        <FormInput placeholder="Naam" setInput={setNaam} />
        <FormInput placeholder="Bankrekeningnummer" setInput={setBankrek} />
        <FormInput placeholder="Totaal bedrag" setInput={setTotaal} />
        <button>Ok</button>
      </form>
    </div>
  );
}

export default App;
