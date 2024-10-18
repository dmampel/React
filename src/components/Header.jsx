import React from 'react';
import logo from '../img/logo.svg';
import { FaMoon } from 'react-icons/fa';
import { GoSun } from "react-icons/go";
import { Fade } from "react-awesome-reveal";
import {Link} from 'react-router-dom';


export default function Header({theme, handleClick}){
 
  return(
    <header className={`mb-36 bg-blur-900 p-5 shadow-2xl cursor-pointer ${theme ? 'shadow-blue-300          hover:shadow-blue-400':'shadow-pink-700 hover:shadow-pink-900'} transition-shadow`}>
      <nav className='flex justify-between'>
        <img className='animate-pulse' src={logo} width='75' alt='react-logo'/>
        <ul className='flex flex-row items-center gap-x-10 text-xl'>
          <li><Link to="/" className={`${theme ? 'hover:text-pink-500' : 'hover:text-pink-400'} hover:-translate-y-1 transition duration-300 block`}>Inicio</Link></li>
          
          <li>{theme ? <FaMoon size={24} color='darkblue' onClick={handleClick}/> : <GoSun size={30} color='#EFD841' onClick={handleClick}/>}</li>
        </ul>
      </nav>
      
    </header>
    
  )
}