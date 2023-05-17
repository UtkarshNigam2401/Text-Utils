// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')    
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=>{
      setAlert({
        msg : message,
        type : type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1000);
  }

  const tooglemode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode enabled !", "success");
      // document.body.style.color = 'white';
      // document.getElementById("exampleFormControlTextarea1").style.backgroundColor = "black";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled !", "success");
      // document.body.style.color = 'black';

      // document.getElementById("exampleFormControlTextarea1").style.backgroundColor = "white";
    }
  }
  return (
    <>
    <Router>
    <Navbar title = "My-App"  link = "About" mode={mode} tooglemode={tooglemode} />
    <Alert alert={alert} />  
    {/* <TextForm showAlert={showAlert} text="Enter text below" mode={mode}/> */}
    {/* <About mode={mode} /> */}
    {/* <Navbar /> */}
    <div className='container my-3'>
      <Switch>
          <Route path="/about">
          <About mode={mode} />
          </Route>
          <Route path="/">
            <TextForm showAlert={showAlert} text="Enter text below" mode={mode}/>
          </Route>
      </Switch>
    </div>
    </Router>
    </>
  );
}

export default App;
