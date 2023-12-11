import React, { useState } from "react";
import './App.css';
import WeatherApp from './weatherapp';
import UserRegistration from './registration';
import { Login } from './login';
import { Register } from './registration';


function App() {
  // return (
  //   <div>
  //     <WeatherApp/>      
  //   </div>
    
  // );
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>
  );
}

export default App;
