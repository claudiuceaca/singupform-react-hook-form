import React from "react";
import "./App.css";
import FormContainer from "./components/FormContainer";

const App: React.FC = () => {
  return (
    <div className="background">
      <div className="container">
        <h1>Create account</h1>
        <FormContainer />
      </div>
    </div>
  );
};

export default App;