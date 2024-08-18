
//import { useState, useSyncExternalStore } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
/*import About from './components/About';*/
import React, { useState } from 'react';
/*import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";*/
function App() {
  const [mode, setMode] = useState('light');//whether darkmode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() =>{
        setAlert(null);
    }, 1500);
  }
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = 'black';
      showAlert("Dark mode has been enabled", "success!!!");
      document.title="Subham's Way - Dark Mode";
      setInterval(() =>{
           document.title="Subham's Way is Amazing!!!";
      }, 2000);
      setInterval(() =>{
        document.title="Install Subham's Way Now!!!";
      }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been enabled", "success!!!");
      document.title="Subham's Way - Light Mode";
    }
  }
  return (
    <>

   {/*<BrowserRouter>*/}
   <Navbar title="Subham's Way" mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <div className="container my-3"> 
        {/*<Routes>*/}
          {/*<Route exact path="/about" element={<About />} />*/}
          {/*<Route exact path="/" element={<TextForm heading="Enter The Text To Analyze Below!!!" mode={mode}/>} /> */}
          <TextForm heading="Enter The Text To Analyze Below!!!" mode={mode}/> 
        {/*</Routes>*/}
    </div>
    {/*</BrowserRouter>*/}
    </>
  );
}

export default App;
