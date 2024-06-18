import React from 'react'
import hero from '../assets/images/hero.png'
import herofooter from '../assets/images/herofooter.png'

const Hero = () => {
  return (
    <>
        <div className=' -mt-48 w-full'>
            <img src={hero}alt="" />
        </div>
        <div className=' -mt-24 relative'>
            {/* <img className='w-full' src={herofooter} alt="" /> */}
            <div className="bg-[url('../assets/images/herofooter.png')] bg-cover bg-center h-screen w-full">
                <h3>Una Escapada a Termas!</h3>
                <p>
                    Descubre Termas de Río Hondo, un oasis de bienestar en Argentina.
                    Relajate en sus aguas termales naturales, disfruta de spa de clase mundial, explora la riqueza cultural.
                </p>
            </div>
        </div>
    </>
    
  )
}

export default Hero