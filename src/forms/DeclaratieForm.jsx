import FormInput from "../components/FormInput";
import { useState, useRef } from "react";
import { CSVLink, CSVDownload } from "react-csv";

function DeclaratieForm() {
  const [naam, setNaam] = useState("");
  const [bankrek, setBankrek] = useState("");
  const [datum, setDatum] = useState(
    new Date().toLocaleDateString("en-UK").replace(/\//g, "-")
  );
  const [totaal, setTotaal] = useState("");
  const [data, setData] = useState([]);
  const [showCheck, setShowCheck] = useState(false);

  // CSVLink reference
  const csvLinkRef = useRef(); // Create a ref for CSVLink

  // Function to trigger CSV download
  const handleDownload = (e) => {
    e.preventDefault();
    // Ensure all fields are filled
    if (!datum || !naam || !bankrek || !totaal) {
      alert("Please fill in all fields.");
      return;
    }
    csvLinkRef.current.link.click(); // Programmatically click the CSVLink
    setShowCheck(true);//Show checkmark
  };

  // Define formatted CSV data with a single header row and blank rows for spacing
  const formattedData = [
    ["", "Declaratieformulier"], // Title row
    ["", "", "", ""], // Blank row for spacing
    ["Datum", datum],
    ["Naam", naam],
    ["Bankrekeningnummer", bankrek],
    ["Totaalbedrag", totaal],
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
    ["Naam organisatie", "Datum bon", "Bedrag inclusief BTW"],
  ];

  return (
    <form onSubmit={handleDownload}>
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

      <div>
      <button class="button-download"
      type="button"
      onClick={handleDownload}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          width="10" 
          height="10" 
          style={{ display: "inline-block" }}
        >
          <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
        </svg>
        Download
      </button>
        {showCheck && (
          <img
            src={`${process.env.PUBLIC_URL}/check.png`}
            alt="check"
            className="check-image"
          />
        )}
      </div>

      <CSVLink
      ref={csvLinkRef} 
          data={formattedData}
          separator=";"
          filename={`Declaratie_${naam}_${datum}`}
          style={{ display: "none" }}
        >Download me</CSVLink>
    </form>
  );
}
export default DeclaratieForm;
