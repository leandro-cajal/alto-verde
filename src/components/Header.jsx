import React from 'react'
import Navbar from './Navbar'
import LanguageSelector from './LanguageSelector'
import ReserveButton from './ReserveButton'
import HeaderPhone from './HeaderPhone'

const Header = () => {
    return (
        <div className='w-full'>
            <div>
                <HeaderPhone />
            </div>
            <section className='w-full max-w-7xl mx-auto'>
                <div className='flex justify-around items-center pt-6'>
                    <div className='w-28 h-18'>
                        <img className='w-full h-full drop-shadow-xl object-cover cursor-pointer' src="./public/logo/logo.png" alt="logo" />
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