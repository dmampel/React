import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; 
import style from '../styles/calendarStyles.css'
import Header from './Header';
import Footer from './Footer';

export default function MyCalendar({theme, handleClick}) {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
    console.log('Fecha seleccionada:', newDate);
  };

  return (
    <div className={`${theme ? 'bg-gradient-to-l from-white to-purple-500 text-black' : 'bg-gradient-to-r from-black to-blue-900 text-white'} min-h-screen`}>
      <Header theme={theme} handleClick={handleClick}/>
        <div className='flex flex-col items-center m-auto gap-16'>
            <h1 className='text-center font-light'>Calendario</h1>
            <Calendar onChange={onChange} value={date} style={style}/>
            <p>Fecha seleccionada: {date.toDateString()}</p>
        </div>
        
     
    </div>
  );
}
