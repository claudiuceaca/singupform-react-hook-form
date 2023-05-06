import "./Checkbox.css"

const Checkbox = ({formObject,error}:any) => {

  return (
    <div className="checkboxContainer">
        <input type="checkbox" {...formObject}/>
        <p className="checkboxText">Accept terms and conditions <span style={{color:"var(--pink)"}}>*</span></p>
        <p className="errorCheckbox">{error}</p>
    </div>
  )
}

export default Checkbox;