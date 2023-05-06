import "./RadioGroup.css";

const RadioGroup = ({formObject}:any) => {

  return (
    <div className="radioGroupContainer">
        <label>Is this account:</label>
        <div className="radioGroupOptions" >
            <div className="radioGroupOption">
                <label htmlFor="Personl">Personal</label>
                <input {...formObject} value="Personal" type="radio" className="inputRadio"/>
            </div>

            <div className="radioGroupOption">
                <label htmlFor="Group">Group</label>
                <input {...formObject} value="Group" type="radio" className="inputRadio"/>
            </div>
        </div>
    </div>
  )
}

export default RadioGroup