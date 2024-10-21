import React, {useState} from 'react';
import Form from './Form.jsx'
import {Fade, Bounce, Zoom, Flip, JackInTheBox, Slide } from "react-awesome-reveal";
import { Link } from 'react-router-dom';

export default function MainContent({theme, title, setTitle}) {
  
  // const [title, setTitle] = useState('');
  const [isInputVisible, setInputVisible] = useState(true);
  
  
  const handleFormSubmit = (name) => {
    setTitle(name); 
    setInputVisible(false); 
  };

  return (
    <div className='m-28 flex flex-col gap-5'>

      <Slide delay='10'>
        <h1>Bienvenido <strong className="underline decoration-pink-500 capitalize">{title ? title : '........'}</strong></h1>
      </Slide>
    
     <Fade cascade className={isInputVisible ? 'visible' : 'hidden'}>
        <p className='text-lg'>A tu espacio.</p>
      </Fade>
    
     <Slide delay='10' className={isInputVisible ? 'hidden' : 'visible'}>
        <Link to="/in" className="btn-link text-3xl text-center animate-pulse font-thin text-blue-900 hover:invert hover:drop-shadow-xl transition ">Ingresar</Link>
      </Slide>
    
     <Zoom delay='100' className={isInputVisible ? 'visible' : 'hidden'}>
        {isInputVisible && <Form theme={theme} onFormSubmit={handleFormSubmit} setTitle={setTitle} />}
     </Zoom>
    
    </div>
  );
}
