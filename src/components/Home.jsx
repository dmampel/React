import {React, useState} from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';


export default function Home({theme, setTheme, handleClick}){
  
  
  return(
    <div className={`${theme ? 'bg-gradient-to-l from-white to-purple-500 text-black' : 'bg-gradient-to-r from-black to-blue-900 text-white'} min-h-screen`}>
     
      <Header className='mb-44' theme={theme} handleClick={handleClick}/>
      <MainContent theme={theme} />
      <Footer />
      
    </div>
    
  );
}