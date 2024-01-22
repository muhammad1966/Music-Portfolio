import React from 'react'
import './achieve.css'
import bl from '../assets/img2.png'
import { FaMusic } from "react-icons/fa6";


const Achieve = () => {
  return (
    <div className='acheive'>
		<div className='acheive1'>
			<div className='ach-photo'>
				<img src={bl} alt="bl" />
			</div>
			<div className='ach-text'>
				<h1>
					 IS LIFE
				</h1>
				<h3>
				A universal language that transcends boundaries and speaks to the depths of our souls. It weaves emotions into melodies, turning moments into memories and echoing the rhythm of our journey. Whether joyous or melancholic, music is the heartbeat of our existence, orchestrating the symphony of our shared human experience.
				</h3>
				 
			</div>
		</div>
		<div>
			<div></div>
			<div></div>
		</div>
    </div>
  )
}

export default Achieve