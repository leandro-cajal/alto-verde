import React, { useState } from 'react'

const HeaderPhone = () => {

    const [closeButton, setCloseButton] = useState(false);

    const handleClick = () => {
        setCloseButton(true);
    };


    return (
        <div className={`bg-[#0D1821] text-white w-full flex h-full py-2 ${closeButton ? "hidden" : ""}`}>
            <div className='mx-auto flex items-center gap-2 cursor-pointer'>
                <i class="bi bi-telephone"></i>
                <span className='font-semibold'>03858-423400</span>
                <span className='text-sm uppercase'>Reserva directa</span>
            </div>
            <div onClick={handleClick} className='mr-6 bg-new-white w-7 h-7 rounded-full relative hover:bg-secondary transition-colors cursor-pointer'>
                <i  class="absolute top-0.5 left-1.5 text-[#0D1821] hover:text-new-white font-bold transition-colors rounded-full bi bi-x-lg"></i>
            </div>
        </div>
    )
}

export default HeaderPhone