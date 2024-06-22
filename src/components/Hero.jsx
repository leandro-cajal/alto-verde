import React from 'react'
import hero from '../assets/images/hero.png'

const Hero = () => {
  return (
    <>
        <div className=' w-full relative z-30 shadow-2xl'>
            <img src={hero}alt="" />
            <div className='absolute flex'>

            </div>
        </div>
    </>
    
  )
}

export default Hero