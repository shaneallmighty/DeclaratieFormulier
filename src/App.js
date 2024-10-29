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
  const [data, setData] = useState([]);

  const downloadData = [{ datum, naam, bankrek, totaal }];

  console.log(naam, bankrek, datum, totaal);

  //Knop voor data handling
  const handleSubmit = (e) => {
    e.preventDefault();

    // Ensure all fields are filled
    if (!datum || !naam || !bankrek || !totaal) {
      alert("Please fill in all fields.");
      return;
    }

    const currentData = { datum, naam, bankrek, totaal };

    // Append the current entry to the existing data
    setData((prevData) => [...prevData, currentData]);
    console.log(currentData);

    //clear input fields
    setDatum("");
    setNaam("");
    setBankrek("");
    setTotaal("");
  };

  // Define headers for the CSV
  const headers = [
    { label: "Datum", key: "datum" },
    { label: "Naam", key: "naam" },
    { label: "Bankrekeningnummer", key: "bankrek" },
    { label: "Totaal bedrag", key: "totaal" },
  ];

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

        <CSVLink
          data={downloadData}
          headers={headers}
          enclosingCharacter={`'`}
          filename={`Declaratie_${naam}_${datum}`}
          target="_blank"
        >
          Download me
        </CSVLink>
      </form>
    </div>
  );
}

export default App;
