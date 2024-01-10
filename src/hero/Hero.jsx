import React from 'react'
import './hero.css';
import { IoMdMusicalNote } from "react-icons/io";
import { IoMusicalNote } from "react-icons/io5";
import { FaMusic } from "react-icons/fa6";
import { MdOutlineMusicNote } from "react-icons/md";
import HeroP from '../assets/Original1.png'


import logo from '../assets/logo.png'


const Hero = () => {
  return (
    <div className='hero'>
      <div className='logo-div'>
        <img src={logo} alt="logo" />
        <h3>Eli</h3>
      </div>
      <div className='deco-1'>
      <span className='kas'></span>
      </div>
      <IoMdMusicalNote className='music-note' size={120} color='#D8BCAB' />
      <IoMdMusicalNote className='music-note1' size={70} color='#D8BCAB' />
      <IoMusicalNote className='music-note2' size={40} color='#D8BCAB' />
      <FaMusic className='music-note3' size={30} color='#D8BCAB' />
      <MdOutlineMusicNote className='music-note4' size={20} color='#D8BCAB' />
      <div className='content'>
        <div className='content-text'>
            <h1>Hi there!</h1>
            <h1>I am Elizabeth</h1>
        </div>

        <div className='image-div'>
            <img src={HeroP} alt="kip" />
        </div>
      </div>
      
      
    </div>
  )
}

export default Hero