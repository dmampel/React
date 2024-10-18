import React, {useState} from 'react';
import Header from './Header.jsx'
import calendar from '../img/calendar-icon.svg';
import tasks from '../img/tasks-icon.svg';
import Item from './Item.jsx';


export default function In({theme, handleClick}){
  const [on, setOn] = useState(true);
  const handleHover=(on)=>{
    setOn(!on)
  }
    
  return(
    <div className={`${theme ? 'bg-gradient-to-l from-white to-purple-500 text-black' : 'bg-gradient-to-r from-black to-blue-900 text-white'} min-h-screen`}>
      
      <Header theme={theme} handleClick={handleClick}/>
      <div className='flex flex-col w-1/5 m-auto gap-8 font-light'>
        <Item text='Calendario' img={calendar} theme={theme}/>
        <Item text='Tareas' img={tasks} theme={theme} />
      </div>

    </div>
  )
}