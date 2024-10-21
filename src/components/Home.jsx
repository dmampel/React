import {React, useState} from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';




export default function Home({theme, handleClick, title, setTitle}){
  
  
  return(
    <div className={`${theme ? 'bg-gradient-to-l from-white to-purple-500 text-black' : 'bg-gradient-to-r from-black to-blue-900 text-white'} min-h-screen`}>
     
      <Header theme={theme} handleClick={handleClick}/>
      <MainContent theme={theme} title={title} setTitle={setTitle}/>
      <Footer />
      
    </div>
    
  );
}