import "./Buttons.css"

const Buttons = ({resetForm,addValues}:any) => {
  return (
    <div className="buttonsContainer">
          <input type="submit" style={{background:"#eeaeca",color:"white"}} className="button"/>
          <div className="buttonsBottom">
            <input type="button" value="Reset form" onClick={resetForm} className="button secondaryButton"/>
            <input type="button" value="Add test values" onClick={addValues} className="button secondaryButton"/>
          </div>
       </div>
  )
}

export default Buttons