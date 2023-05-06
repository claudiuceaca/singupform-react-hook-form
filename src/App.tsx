import { yupResolver } from "@hookform/resolvers/yup"; // For connection
import React from "react";
import { useForm } from "react-hook-form";
import "./App.css";
import Buttons from "./components/buttons/Buttons";
import Checkbox from "./components/checkbox/Checkbox";
import Input from "./components/input/Input";
import MiniContainer from "./components/miniContainer/MiniContainer";
import RadioGroup from "./components/radiogroup/RadioGroup";
import Select from "./components/select/Select";
import Slider from "./components/slider/slider";
import { resetValues, testValues } from "./schema/addresetvValues";
import formSchema from "./schema/formSchema";
import Submitted from "./components/submitted/Submitted";

function App() {
  const { register, handleSubmit, reset,formState, formState: {errors } } = useForm({
    resolver: yupResolver(formSchema),
  });
  const [isSubmited, setIsSubmited] = React.useState(false)

  // Submit form
  const submit = (data:any) =>{
    console.log(data)
  }

  // Reset form
  React.useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset(resetValues);
      setIsSubmited(true);
    }

    return () => {
      setInterval(() => {
        setIsSubmited(false);
      }, 3000);
    }

  }, [formState, reset]);


  return (
   <div className="background">
     <div className="container">
      <h1>Create account</h1>
  
      <form onSubmit={handleSubmit(submit)}>
       {/* Name */}
        <MiniContainer>
          <Input type="text" id="firstName" placeholder="First Name" message={errors.firstName?.message?.toString()} formObject={register("firstName")}/>
          <Input type="text" id="lastName" placeholder="Last Name" message={errors.lastName?.message?.toString()} formObject={register("lastName")}/>
        </MiniContainer>
        
        {/* Email */}
        <Input type="email" id="email" placeholder="Email" message={errors.email?.message?.toString()} formObject={register("email")}/>

        {/* Password */}
        <MiniContainer>
          <Input type="password" id="password" placeholder="Password" message={errors.password?.message?.toString()} formObject={register("password")}/>
          <Input type="password" id="confirmPassword" placeholder="Confirm Password" message={errors.confirmPassword && "Passwords Should Match!"} formObject={register("confirmPassword")}/>
        </MiniContainer>

        {/* Gender */}
        <Select formObject={register("pronounce")}/>
        <RadioGroup formObject={register("accountType")}/>
        
         {/* Notification - Terms */}
         <MiniContainer>
          <Slider formObject={register("notifications")}/>
          <Checkbox formObject={register("acceptTerms")} error={errors.acceptTerms?.message}/>
        </MiniContainer>

        {/* Buttons */}
       <Buttons resetForm={()=>reset(resetValues)} addValues={()=>reset(testValues)}/>
      </form>

      {isSubmited ? <Submitted /> : null}
    </div>
   </div>
  )
}

export default App;

