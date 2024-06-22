import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import LanguageSelector from './LanguageSelector'
import ReserveButton from './ReserveButton'
import HeaderPhone from './HeaderPhone'

const Header = () => {

    const [scrolled,setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        // Cleanup function
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);


    return (
        <div className={`w-full z-50 fixed transition-all shadow-lg bg-new-white duration-300  ${scrolled ? " " : "block"}`}>
            <div className='relative'>
                <HeaderPhone />
            </div>
            <section className="w-full max-w-7xl mx-auto transition duration-500 z-50">
                <div className='flex justify-around items-center py-4'>
                    <div className='w-28 h-18'>
                        <img className='w-full h-full object-cover cursor-pointer' src="./public/logo/logo.png" alt="logo" />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='flex gap-5 justify-end'>
                            <LanguageSelector />
                            <ReserveButton />
                        </div>
                        <Navbar />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Header