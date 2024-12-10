import FormInput from "../components/FormInput";
import { useState, useRef } from "react";
import { CSVLink } from "react-csv";
import "../css/DeclaratieForm.css";

function DeclaratieForm() {
  const [naam, setNaam] = useState("");
  const [bankrek, setBankrek] = useState("");
  const [datum, setDatum] = useState(
    new Date().toLocaleDateString("en-UK").replace(/\//g, "-")
  );
  const [totaal, setTotaal] = useState("");
  const [showCheck, setShowCheck] = useState(false);
  const [naamOrg, setNaamOrg] = useState("");
  const [datumBon, setDatumBon] = useState("");
  const [bedrag, setBedrag] = useState("");
  const [declarations, setDeclarations] = useState([]);

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
    setShowCheck(true); //Show checkmark
  };

  // When clicking the add button, add a declaration to the list
  const addDeclaration = (e) => {
    e.preventDefault();
    if (!naamOrg || !datumBon || !bedrag) {
      alert("Please fill in all fields.");
      return;
    }
    const newDeclaration = {
      naamOrg,
      datumBon,
      bedrag,
    };
    setDeclarations([...declarations, newDeclaration]);

    // Clear input fields
    setNaamOrg("");
    setDatumBon("");
    setBedrag("");
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
    ["", "", "", ""],
    ["Naam organisatie", "Datum bon", "Bedrag inclusief BTW"],
    ...declarations.map((decl) => [decl.naamOrg, decl.datumBon, decl.bedrag]),
  ];

  return (
    <div className="inner-card">
      <div className="personalInfo">
        <form onSubmit={handleDownload} className="form-personal-info">
          <FormInput
            placeholder="Datum"
            setInput={setDatum}
            value={datum}
            type=""
          />
          <FormInput
            placeholder="Naam"
            setInput={setNaam}
            value={naam}
            type=""
          />
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
            <button
              className="button-download"
              type="button"
              onClick={handleDownload}
            >
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
          >
            Download me
          </CSVLink>
        </form>
      </div>
      <div className="declaraties">
        <form onSubmit={addDeclaration} className="form-declaratie">
          <FormInput
            placeholder="Naam organisatie"
            setInput={setNaamOrg}
            value={naamOrg}
            type=""
          />

          <FormInput
            placeholder="Datum bon"
            setInput={setDatumBon}
            value={datumBon}
            type="date"
          />

          <FormInput
            placeholder="Bedrag inclusief BTW"
            setInput={setBedrag}
            value={bedrag}
            type="number"
          />
        </form>
        <button class="button-add" type="button" onClick={addDeclaration}>
          <img
            src={`${process.env.PUBLIC_URL}/plus.png`}
            alt="plus"
            className="button-plus"
            style={{ width: "15px", height: "15px" }}
          />
        </button>
        <ul className="declaration-list">
          {declarations.map((decl, index) => (
            <li key={index}>
              {decl.naamOrg}, {decl.datumBon}, €{decl.bedrag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default DeclaratieForm;
