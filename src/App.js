import { useState } from 'react';
import './App.css';
import Alert from './Components/Alert';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)

    }, 1500)

  }


  const toggleBlueMode = () => {

    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#142238';

      showAlert("Dark mode enabled ", "success")
      //document.getElementById('myBtn').disabled=true;
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white';

      showAlert("Light mode enabled  ", "success")
    }
  }


  return (
    <>



      {/*<About/>*/}
      <Router>
        <Navbar title='TextUtil' mode={mode} toggleBlueMode={toggleBlueMode} />

        <Alert alert={alert} />
        <Routes>
          <Route path="/about" element={<About mode={mode}/>}>
            
          </Route>
          <Route path="/" element={
            <TextForm showAlert={showAlert} title='Enter the text to analyze below' mode={mode} />}>
          </Route>
        </Routes>

      </Router>
    </>
  );
}

export default App;
