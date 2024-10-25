import "../css/FormInput.css"

function FormInput (props) {
    return (
        <div>
            {/* <label>{ props.placeholder }</label> */}
            <input placeholder={ props.placeholder } onChange={e =>props.setUsername(e.target.value)}></input>
        </div>
    )
}

export default FormInput;
