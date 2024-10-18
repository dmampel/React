import React, {useState} from 'react';

export default function Form({theme, onFormSubmit, setTitle}){
  const [name, setName] = useState('');
  
  const handleChange= (e) =>{
    const newName = e.target.value; 
    setName(newName); 
    setTitle(newName);
  }
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    onFormSubmit(name); 
    setName('');
  }
  
  return(
    <form action="submit" onSubmit={handleSubmit}>
    <input type="text" name='name' value={name} onChange={handleChange} placeholder='escribe tu nombre aquí...' autocomplete='off' className={`${theme ? 'placeholder:text-black' : 'placeholder:text-white'} text-transparent rounded-full p-2 bg-transparent border-none focus:outline-none text-4xl animate-pulse`}/>
      <button type="submit"></button>
    </form>
  );
}