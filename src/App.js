import { useState } from "react";
import FormInput from "./components/FormInput";
import "./css/App.css";
import { CSVLink, CSVDownload } from "react-csv";

function App() {
  const [naam, setNaam] = useState("");
  const [bankrek, setBankrek] = useState("");
  const [datum, setDatum] = useState(
    new Date().toLocaleDateString("en-UK").replace(/\//g, "-")
  );
  const [totaal, setTotaal] = useState("");

  console.log(naam, bankrek, datum, totaal);

  const [data, setData] = useState([]);

  const downloadData = "string";

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentData = { datum, naam, bankrek, totaal };
    setData([currentData]);
    console.log(currentData);
    setDatum("");
    setNaam("");
    setBankrek("");
    setTotaal("");
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
        <FormInput placeholder="Naam" setInput={setNaam} value={naam} type="" />
        <FormInput
          placeholder="Bankrekeningnummer"
          setInput={setBankrek}
          value={bankrek}
          type=""
        />
        <FormInput
          placeholder="Totaal bedrag"
          setInput={setTotaal}
          value={totaal}
          type=""
        />
        <button>Ok</button>

        <CSVLink data={downloadData} enclosingCharacter={`'`}>
          Download me
        </CSVLink>
      </form>
    </div>
  );
}

export default App;
