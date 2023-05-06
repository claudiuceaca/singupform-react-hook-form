import "./Input.css"

type Input = {
  type: string
  id: string
  placeholder: string 
  message: string | undefined
  formObject: any
}

const Input = ({type,id, placeholder,message,formObject}: Input) => {
  return (
    <div className="inputContainer">
      <label htmlFor={id} className="labelInput">{placeholder} <span style={{color:"var(--pink)"}}>*</span></label>
      <input {...formObject} type={type} placeholder={placeholder} id={id} className={message ? "error" : null}/>
      <p className="errorMessageInput">{message}</p>
    </div>
  )
}

export default Input