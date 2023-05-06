import "./Select.css"

const Select = ({formObject}:any) => {
  return (
    <div className="selectContainer">
        <label>Choose a pronounce:</label>
        <select {...formObject} >
          <option value="">--Choose an option--</option>
          <option value="Her">Her</option>
          <option value="Him">Him</option>
        </select>
    </div>
  )
}

export default Select