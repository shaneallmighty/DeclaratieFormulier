import "../css/FormInput.css"

function FormInput (props) {
    return (
        <div>
            {/* <label>{ props.placeholder }</label> */}
            <input 
            placeholder={ props.placeholder } 
            onChange={e =>props.setInput(e.target.value)}
            value={props.value || ""} 
            type={props.type || "text"}></input>
        </div>
    )
}

export default FormInput;
