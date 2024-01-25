import React from 'react'
import './hero.css';
import { IoMdMusicalNote } from "react-icons/io";
import { IoMusicalNote } from "react-icons/io5";
import { FaMusic } from "react-icons/fa6";
import { MdOutlineMusicNote } from "react-icons/md";
import { LuMusic3 } from "react-icons/lu";
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
      <MdOutlineMusicNote className='music-note4' size={40} color='#D8BCAB' />
      <LuMusic3 className='music-note5' size={200} color='#D8BCAB' />
      <div className='content'>
        <div className='content-text'>
            <h1 className='hi-there'>Hi there!</h1>
            <h1>I am Elizabeth</h1>
            <p>
                A singer with a versatile and captivating voice.
                I love performing in different genres and venues around the world.
                Music is my passion and I enjoy sharing it with you.
            </p>
        </div>

        <div className='image-div'>
            <img src={HeroP} alt="heroP" />
        </div>
      </div>
      
      
    </div>
  )
}

export default Hero