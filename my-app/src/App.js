import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import About from './components/About';
import Alert from './components/Alert';
import { BrowserRouter, Routes, Route} from "react-router-dom";



function App() {
  const [mode,setMode] = useState('light');
  const[alert,setAlert] = useState(null);
  const showAlert = (message)=>{
      setAlert({ msg: message })

      setTimeout(()=>{
        setAlert(null);
      },2000);
  }

  const toggleMode = () =>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(19 59 78)';
      showAlert('Dark mode enabled');
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode enabled');
    }
  }
  return (
  <>
  <BrowserRouter>
    <Navbar title='TextUtils' about='About' mode = {mode} toggle={toggleMode}/>
    <Alert  alert={alert}/>
    <div className='container mb-3'>
      <Routes>
        
          <Route path="about" element={ <About mode={mode}/>} />
          <Route path="/" element={<Textarea heading='Enter Your Text' mode={mode}/>}/>
        
      </Routes>
      </div>
  </BrowserRouter>
  
  {/* <Navbar about='About'/> */}
  </>
  );
}

export default App;
