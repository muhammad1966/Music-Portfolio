import React from 'react'
import './hero.css';
import { IoMdMusicalNote } from "react-icons/io";
import { IoMusicalNote } from "react-icons/io5";

import logo from '../assets/logo.png'


const Hero = () => {
  return (
    <div className='hero'>
      <div className='logo-div'>
        <img src={logo} alt="logo" />
        <h3>Ella</h3>
      </div>
      <div className='deco-1'>
      <span className='kas'></span>
      </div>
      <IoMdMusicalNote className='music-note' size={120} color='#D8BCAB' />
      <IoMdMusicalNote className='music-note1' size={70} color='#D8BCAB' />
      <IoMusicalNote className='music-note2' size={40} color='#D8BCAB' />
      
    </div>
  )
}

export default Hero