import {React, useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import In from './In'; 
import BigCalendar from './BigCalendar';
import '../styles/index.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';


function App() {
  const [theme, setTheme] = useState(false);
  const handleClick = () =>{
    setTheme((prevTheme) => !prevTheme);
  }
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home theme={theme} setTheme={setTheme} handleClick={handleClick}/>} />  {/* Ruta para Home */}
          <Route path="/in" element={<In theme={theme} handleClick={handleClick}/>} />  {/* Ruta para In */}
          <Route path="/mycalendar" element={<BigCalendar theme={theme} handleClick={handleClick}/>} />  {/* Ruta para MyCalendar */}
        </Routes>
      </Router>
    </div>
  )
}

export default App