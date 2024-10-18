import React from 'react';
import calendar from '../img/calendar-icon.svg';
import tasks from '../img/tasks-icon.svg';
import Item from './Item.jsx';
import Header from './Header'
import { Link } from 'react-router-dom';


export default function In({theme, handleClick}){
  
    
  return(
    <div className={`${theme ? 'bg-gradient-to-l from-white to-purple-500 text-black' : 'bg-gradient-to-r from-black to-blue-900 text-white'} min-h-screen`}>
      <Header theme={theme} handleClick={handleClick}/>
      
      <div className='flex flex-col w-1/5 m-auto gap-8 font-light'>
        <Link to="/mycalendar"><Item text='Calendario' img={calendar} theme={theme}/></Link>
        <Item text='Tareas' img={tasks} theme={theme} />
      </div>

    </div>
  )
}