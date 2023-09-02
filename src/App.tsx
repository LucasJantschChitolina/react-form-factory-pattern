import './App.css'
import InputForm from './components/InputForm';
import { getLoginConfig, getSignUpConfig, getDetailsConfig } from './example/config'
import { useState } from "react";

export default function App() {
  const [formDetails, setFormDetails] = useState({})
  const onChange = (value, dataLabel) => {
    setFormDetails({
      ...formDetails,
      [dataLabel]: value
    });
  };

  return (
    <div>
      <div>
        <h1>Login</h1>
        <InputForm config={getLoginConfig(onChange, formDetails)}/>
      </div>
      <div>
        <h1>SignUp</h1>
        <InputForm config={getSignUpConfig(onChange, formDetails)}/>
      </div>
      <div>
        <h1>Details</h1>
        <InputForm config={getDetailsConfig(onChange, formDetails)}/>
      </div>
    </div>
  )
}
