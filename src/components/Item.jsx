import React from 'react';
import {JackInTheBox} from "react-awesome-reveal";

export default function Item({text, img, theme}){
    return(
        <JackInTheBox>
          <div className={`relative flex flex-row justify-between items-center cursor-pointer hover:scale-110 transition-transform duration-300  rounded-full mb-5 pl-10 shadow-inner ${theme ? 'shadow-pink-200' : 'shadow-blue-600'}`}>
            <p className='text-2xl py-2'>{text}</p>
            <img src={img} className='absolute right-[-20px] w-20 outline rounded-full '/>
          </div>
        </JackInTheBox>
    );
}