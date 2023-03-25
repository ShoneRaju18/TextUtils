//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); // Whether Dark mode enabled or not
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    },1000);
  }

  const toggleDarkMode = () => {
    if(mode === 'light')
    {
     setMode('dark');
     document.body.style.backgroundColor = '#1450a9';
     showAlert("Dark Mode has been enabled", "success");
    }
    else
    {
     setMode('light');
     document.body.style.backgroundColor = 'white';
     showAlert("Light Mode has been enabled","success");
    }
  }

  const toggleGreenDarkMode = () => {
    if(mode === 'light')
    {
     setMode('dark');
     document.body.style.backgroundColor = '#3d4144';
     showAlert("Dark Mode has been enabled", "success");
    }
    else
    {
     setMode('light');
     document.body.style.backgroundColor = 'white';
     showAlert("Light Mode has been enabled","success");
    }
  }

  return (
    <>
      <Router>
      <Navbar title={"TestUtils"} mode ={mode} toggleDarkMode={toggleDarkMode} toggleGreenDarkMode={toggleGreenDarkMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
          <Route exact path="/about" element = { <About/>}/>
          <Route exact path="/" element = {<TextForm heading = "Enter the text to analyze below" mode={mode} showAlert={showAlert} />}/>
      </Routes>
      </div>  
      </Router>   
    </>
  );
}

export default App;
