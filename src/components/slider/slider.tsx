import "./slider.css"

const Slider = ({formObject}:any) => {

  return (
   
   <div className="sliderContainer">
      <label htmlFor="switch">Send me notifications</label>
      <div className="containerSwitch">
        <label className="switch"> 
          <input type="checkbox" {...formObject} />
          <span className="slider round">
          </span>
        </label>
       </div>
   </div>
    
  )
}

export default Slider;